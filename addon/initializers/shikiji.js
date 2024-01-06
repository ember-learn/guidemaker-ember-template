import showdown from 'showdown';
import { bundledLanguages, getHighlighter } from 'shikiji';

const CODE_BLOCK_REGEX =
  /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\n`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g;

async function initializeShikiji() {
  const highlighter = await getHighlighter({
    themes: ['github-dark'],
    langs: Object.keys(bundledLanguages),
  });

  return highlighter;
}

function stripQuotes(string) {
  if (string?.startsWith('"') && string?.endsWith('"')) {
    return string.substring(1, string.length - 1);
  }
  return string;
}

function extractCodeBlockHeader(languageBlock) {
  let match = languageBlock.match(/(\w+) ?(\{([^}]*)\})?/);
  let language = '';
  let attributeString = '';

  if (match && match[1]) {
    language = match[1];
  }

  if (match && match[3]) {
    attributeString = match[3];
  }

  let attributes = {};

  attributeString.split(' ').forEach((attribute) => {
    let keyValue = attribute.split('=');
    attributes[keyValue[0]] = stripQuotes(keyValue[1]);
  });

  return {
    language,
    attributes,
  };
}

function transformCodeBlock(
  wholeMatch,
  _delim,
  languageBlock,
  inputCodeblock,
  highlighter,
  options,
  globals
) {
  const end = options.omitExtraWLInCodeBlocks ? '' : '\n';
  const codeblock = showdown.subParser('detab')(
    inputCodeblock,
    options,
    globals
  );
  const { language, attributes } = extractCodeBlockHeader(languageBlock);

  const highlightedCodeBlock = highlighter.codeToHtml(codeblock, {
    lang: language,
    theme: 'github-dark',
  });
  const highlightedCodeBlockWithClass = highlightedCodeBlock.replace(
    '<code>',
    `<code class="language-${language} line-numbers">`
  );
  let highlightedCodeBlockWithEnd = `${highlightedCodeBlockWithClass}${end}`;

  if (attributes['data-filename']) {
    const fileName = attributes['data-filename'] ?? '';
    highlightedCodeBlockWithEnd = `<div><div class="filename ${language}">${fileName}</div>${highlightedCodeBlockWithEnd}</div>`;
  }
  const codeblockHashed = showdown.subParser('hashBlock')(
    highlightedCodeBlockWithEnd,
    options,
    globals
  );

  // Since GHCodeblocks can be false positives, we need to
  // store the primitive text and the parsed text in a global var,
  // and then return a token
  return (
    '\n\n¨G' +
    (globals.ghCodeBlocks.push({
      text: wholeMatch,
      codeblock: codeblockHashed,
    }) -
      1) +
    'G\n\n'
  );
}

export async function initialize(application) {
  application.deferReadiness();
  const highlighter = await initializeShikiji();

  showdown.subParser('githubCodeBlocks', function (text, options, globals) {
    // Early exit if option is not enabled
    if (!options.ghCodeBlocks) {
      return text;
    }

    // Preprocess
    let textTransformed = globals.converter._dispatch(
      'githubCodeBlocks.before',
      text,
      options,
      globals
    );

    // Transform all code blocks
    textTransformed = textTransformed.replace(
      CODE_BLOCK_REGEX,
      (wholeMatch, delim, languageBlock, inputCodeblock) =>
        transformCodeBlock(
          wholeMatch,
          delim,
          languageBlock,
          inputCodeblock,
          highlighter,
          options,
          globals
        )
    );

    return globals.converter._dispatch(
      'githubCodeBlocks.after',
      textTransformed,
      options,
      globals
    );
  });

  application.advanceReadiness();
}

export default {
  initialize,
};
