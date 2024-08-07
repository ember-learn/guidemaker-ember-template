import RouteTemplate from 'ember-route-template';

export default RouteTemplate(<template>
<article class="error-page" data-test-error-page>
  {{#if @controller.hasErrors}}
    <img src="/images/fishy.png" title="ACK! 404 FRIEND, YOU'RE IN THE WRONG PLACE" alt="A Tomster mascot holding a fish that has been outside in the sun too long!">
    <h1 class="whoops" data-test-error-message>Ack! 404 friend, you're in the wrong place</h1>

    <p>
      This page wasn't found. If you were looking for documentation, please try
      the <a href="http://guides.emberjs.com">Guides</a> section of the site. If you expected
      something else to be here, please <a href="https://github.com/ember-learn/guides-source/issues">file a ticket</a>.
    </p>
  {{else}}
    <img src="/images/fishy.png" title="ACK! An unknown error has occured!" alt="A Tomster mascot holding a fish that has been outside in the sun too long!">
    <h1 class="whoops">Ack! An unknown error has occured!</h1>

    <p>
      We're not quite sure what happened. If you were looking for documentation, please try
      the <a href="http://guides.emberjs.com">Guides</a> section of the site. If you expected
      something else to be here, please <a href="https://github.com/ember-learn/guides-source/issues">file a ticket</a>.
    </p>
  {{/if}}
</article>
</template>);
