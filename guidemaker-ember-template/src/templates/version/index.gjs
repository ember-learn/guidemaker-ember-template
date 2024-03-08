// app/templates/my-route.gjs
import RouteTemplate from 'ember-route-template';

import GuidesArticle from '../../components/guides-article';

// This adapter converts the `<template>` into a route template
export default RouteTemplate(<template>
{{!-- template-lint-disable no-curly-component-invocation no-implicit-this --}}
<GuidesArticle @model={{@controller.model.content}} @pages={{@controller.model.pages}} @path="index" @version={{@controller.model.version}} @currentVersion={{@controller.model.currentVersion}} />
</template>);
