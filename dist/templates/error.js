import RouteTemplate from 'ember-route-template';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var error = RouteTemplate(setComponentTemplate(precompileTemplate("\n<article class=\"error-page\" data-test-error-page>\n  {{#if @controller.hasErrors}}\n    <img src=\"/images/fishy.png\" title=\"ACK! 404 FRIEND, YOU'RE IN THE WRONG PLACE\" alt=\"A Tomster mascot holding a fish that has been outside in the sun too long!\">\n    <h1 class=\"whoops\" data-test-error-message>Ack! 404 friend, you're in the wrong place</h1>\n\n    <p>\n      This page wasn't found. If you were looking for documentation, please try\n      the <a href=\"http://guides.emberjs.com\">Guides</a> section of the site. If you expected\n      something else to be here, please <a href=\"https://github.com/ember-learn/guides-source/issues\">file a ticket</a>.\n    </p>\n  {{else}}\n    <img src=\"/images/fishy.png\" title=\"ACK! An unknown error has occured!\" alt=\"A Tomster mascot holding a fish that has been outside in the sun too long!\">\n    <h1 class=\"whoops\">Ack! An unknown error has occured!</h1>\n\n    <p>\n      We're not quite sure what happened. If you were looking for documentation, please try\n      the <a href=\"http://guides.emberjs.com\">Guides</a> section of the site. If you expected\n      something else to be here, please <a href=\"https://github.com/ember-learn/guides-source/issues\">file a ticket</a>.\n    </p>\n  {{/if}}\n</article>\n", {
  strictMode: true
}), templateOnly()));

export { error as default };
//# sourceMappingURL=error.js.map
