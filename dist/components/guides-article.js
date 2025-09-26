import Component from '@glimmer/component';
import { inject } from '@ember/service';
import config from 'ember-get-config';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<article class=\"chapter\" ...attributes>\n  <div class=\"guides-article-wrapper\">\n    <div class=\"guides-article-content\">\n      {{#unless (eq @version @currentVersion)}}\n        <div class=\"old-version-warning\">\n          <div class=\"old-version-warning-text\">\n            <svg\n              aria-hidden=\"true\"\n              focusable=\"false\"\n              data-prefix=\"fas\"\n              data-icon=\"exclamation-circle\"\n              class=\"warning-icon\"\n              role=\"img\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 512 512\"\n            >\n              <path\n                d=\"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z\"\n              ></path>\n            </svg>\n            <div>\n              <strong>Old Guides - </strong>You are viewing the guides for Ember\n              {{@version}}.\n            </div>\n          </div>\n\n          <LinkTo\n            @route=\"version.show\"\n            @models={{array \"release\" @path}}\n            class=\"es-button-secondary old-version-button\"\n          >\n            Go to\n            {{@currentVersion}}\n          </LinkTo>\n        </div>\n      {{/unless}}\n      {{#if this.showGJSBanner}}\n        <div\n          class=\"info-banner-wrapper\"\n          role=\"region\"\n          aria-label=\"GJS Info Banner\"\n          tabindex=\"0\"\n        >\n          <div class=\"info-banner-text\">\n            <svg\n              aria-hidden=\"true\"\n              focusable=\"false\"\n              data-prefix=\"fas\"\n              data-icon=\"exclamation-circle\"\n              class=\"info-banner-icon\"\n              role=\"img\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 512 512\"\n            >\n              <path\n                d=\"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z\"\n              ></path>\n            </svg>\n            <div>\n              <strong>GJS Format - </strong>\n              This guide is written assuming you are using GJS in your app. See\n              this\n              <a\n                href={{this.gjsLink}}\n                target=\"_blank\"\n                rel=\"noopener noreferrer\"\n                class=\"info-banner-link\"\n              >page</a>\n              to read more about GJS.\n            </div>\n          </div>\n        </div>\n      {{/if}}\n\n      <div class=\"article-title\">\n        <h1>\n          {{this.page.currentPage.title}}\n        </h1>\n\n        {{#if this.guidemaker.sourceRepo}}\n          <a\n            href=\"{{this.guidemaker.sourceRepo}}/edit/{{or\n              this.guidemaker.sourceBranch\n              \'master\'\n            }}/guides/{{this.editVersion}}{{@model.id}}.md\"\n            target=\"_blank\"\n            class=\"edit-page\"\n            rel=\"noopener noreferrer\"\n          >\n            {{! ! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. }}\n            <svg\n              class=\"edit-icon\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 512 512\"\n            >\n              <path\n                d=\"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z\"\n              />\n            </svg>\n          </a>\n        {{/if}}\n      </div>\n      <hr />\n\n      <MarkdownToHtml\n        @markdown={{@model.content}}\n        @extensions=\"showdown-section-groups header-links feature-flags\"\n      />\n\n      <ChapterLinks />\n    </div>\n    <div class=\"guides-article-toc\">\n      <OnThisPage @toc={{@model.toc}} />\n    </div>\n  </div>\n</article>");

class GuidesArticleComponent extends Component {
  static {
    g(this.prototype, "page", [inject]);
  }
  #page = (i(this, "page"), void 0);
  static {
    g(this.prototype, "guidemaker", [inject]);
  }
  #guidemaker = (i(this, "guidemaker"), void 0);
  get gjsLink() {
    return config?.guidemaker?.gjsLink;
  }
  get showGJSBanner() {
    return Array.isArray(config?.guidemaker?.gjsVersions) && Boolean(config.guidemaker.gjsVersions.includes(this.args.version));
  }
  get editVersion() {
    if (this.page.currentVersion === 'release') {
      return '';
    }
    if (this.args.version === this.args.currentVersion) {
      return 'release/';
    }
    return `${this.page.currentVersion}/`;
  }
}
setComponentTemplate(TEMPLATE, GuidesArticleComponent);

export { GuidesArticleComponent as default };
//# sourceMappingURL=guides-article.js.map
