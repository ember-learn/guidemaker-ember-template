export default {
  hits: [
    {
      html: '<section aria-labelledby="toc_sideloaded-data">\n<p>Data that is not a part of the primary request but includes linked\nrelationships should be placed in an array under the \nkey. For example, if you request  and the backend also\nreturned any comments associated with that person the response\nshould look like this:</p>\n\n</section>',
      content:
        '\nData that is not a part of the primary request but includes linked\nrelationships should be placed in an array under the \nkey. For example, if you request  and the backend also\nreturned any comments associated with that person the response\nshould look like this:\n\n',
      headings: ['<Input>', 'JSONAPISerializer Conventions', 'Sideloaded Data'],
      anchor: 'toc_sideloaded-data',
      node: {},
      customRanking: {
        position: 2,
        heading: 70,
      },
      version: 'v3.28.0',
      path: 'examples/index',
      objectID: 'v3.28.0-d9738c114b3c2277bebeac45b03a390a',
      _highlightResult: {
        content: {
          value:
            '\n<em>Data</em> that is not a part of the primary request but includes linked\nrelationships should be placed in an array under the \nkey. For example, if you request  and the backend also\nreturned any comments associated with that person the response\nshould look like this:\n\n',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['data'],
        },
        headings: [
          {
            value: '<Input>',
            matchLevel: 'none',
            matchedWords: [],
          },
          {
            value: 'JSONAPISerializer Conventions',
            matchLevel: 'none',
            matchedWords: [],
          },
          {
            value: 'Sideloaded <em>Data</em>',
            matchLevel: 'full',
            fullyHighlighted: false,
            matchedWords: ['data'],
          },
        ],
      },
    },
    {
      html: '<section aria-labelledby="toc_working-with-adapters-and-serializers">\n<p>Ember Data uses an <em><a href="../../../models/customizing-adapters/">adapter</a></em> and <em><a href="../../../models/customizing-serializers/">serializer</a></em> architecture. Adapters deal with <em>how</em> and <em>where</em> Ember Data should fetch data from your servers, such as whether to use HTTP, HTTPS, WebSockets or local storage, as well as the URLs, headers and parameters to use for these requests. On the other hand, serializers are in charge of converting the data returned by the server into a format Ember Data can understand.</p>\n<p>The idea is that, provided that your backend exposes a <em>consistent</em> protocol and interchange format to access its data, we can write a single adapter-serializer pair to handle all data fetches for the entire application.</p>\n<p>As it turns out, JSON:API just happens to be Ember Data\'s default data protocol and interchange format. Out of the box, Ember Data provides a default JSON:API adapter and serializer. This is great news for us, since that is also what our server has implemented. What a wonderful coincidence!</p>\n<p>However, as mentioned above, there are some minor differences between how our server works and Ember Data\'s default assumptions. We can customize the default behavior by defining our own adapter and serializer:</p>\n\n\n<p>By convention, adapters are located at . Furthermore, the adapter named  is called the <em>application adapter</em>, which will be used to fetch data for all models in our app.</p>\n<p>Inside this newly created file, we defined an  class, inheriting from the built-in <a href="https://api.emberjs.com/ember-data/release/classes/JSONAPIAdapter"></a>. This allows us to inherit all the default JSON:API functionalities, while customizing the things that didn\'t work for us by default. Specifically:</p>\n<ul>\n<li>Our resource URLs have an extra  <em>namespace</em> prefix.</li>\n<li>Our resource URLs have a  extension at the end.</li>\n</ul>\n<p>Adding a namespace prefix happens to be pretty common across Ember apps, so the  has an API to do just that. All we need to do is to set the   property to the prefix we want, which is  in our case.</p>\n<p>Adding the  extension is a bit less common, and doesn\'t have a declarative configuration API of its own. Instead, we will need to <em>override</em> Ember Data\'s <a href="https://api.emberjs.com/ember-data/release/classes/JSONAPIAdapter/methods/buildURL?anchor=buildURL"></a> method. Inside of , we will call  to invoke the  default implementation of . This will give us the URL that the adapter <em>would have built</em>, which would be something like  and  after configuring the  above. All we have to do is to append  to this URL and return it.</p>\n<p>Similarly, serializers are located at . Adapters and serializers are always added together as a pair. We added an  adapter, so we also added a corresponding serializer to go with it as well. Since the JSON data returned by our server is JSON:API-compliant, the default <a href="https://api.emberjs.com/ember-data/release/classes/JSONAPISerializer"></a> work just fine for us without further customization.</p>\n<p>With our adapter and serializer in place, all our tests should pass again.</p>\n<p><img src="/images/tutorial/part-2/ember-data/pass-2@2x.png" alt="Once again, all the tests are passing again!" width="1024" height="1024"></p>\n<p>The UI works exactly the same as before as well, just with much less code!</p>\n<p><img src="/images/tutorial/part-2/ember-data/homepage@2x.png" alt="The homepage works exactly the same as before, but with much less code!" width="1024" height="1129"></p>\n<p><img src="/images/tutorial/part-2/ember-data/detailed@2x.png" alt="The details page works exactly the same as before, but with much less code!" width="1024" height="1381"></p>\n<p>Ember Data offers many, many features (like managing the <em>relationships</em> between different models) and there\'s a lot more we can learn about it. For example, if your backend\'s have some inconsistencies across different endpoints, Ember Data allows you to define more specific, per-model adapters and serializers too! We are just scratching the surface here. If you want to learn more about Ember Data, check out <a href="../../../models/">its own dedicated section</a> in the guides!</p>\n</section>',
      content:
        "\nEmber Data uses an adapter and serializer architecture. Adapters deal with how and where Ember Data should fetch data from your servers, such as whether to use HTTP, HTTPS, WebSockets or local storage, as well as the URLs, headers and parameters to use for these requests. On the other hand, serializers are in charge of converting the data returned by the server into a format Ember Data can understand.\nThe idea is that, provided that your backend exposes a consistent protocol and interchange format to access its data, we can write a single adapter-serializer pair to handle all data fetches for the entire application.\nAs it turns out, JSON:API just happens to be Ember Data's default data protocol and interchange format. Out of the box, Ember Data provides a default JSON:API adapter and serializer. This is great news for us, since that is also what our server has implemented. What a wonderful coincidence!\nHowever, as mentioned above, there are some minor differences between how our server works and Ember Data's default assumptions. We can customize the default behavior by defining our own adapter and serializer:\n\n\nBy convention, adapters are located at . Furthermore, the adapter named  is called the application adapter, which will be used to fetch data for all models in our app.\nInside this newly created file, we defined an  class, inheriting from the built-in . This allows us to inherit all the default JSON:API functionalities, while customizing the things that didn't work for us by default. Specifically:\n\nOur resource URLs have an extra  namespace prefix.\nOur resource URLs have a  extension at the end.\n\nAdding a namespace prefix happens to be pretty common across Ember apps, so the  has an API to do just that. All we need to do is to set the   property to the prefix we want, which is  in our case.\nAdding the  extension is a bit less common, and doesn't have a declarative configuration API of its own. Instead, we will need to override Ember Data's  method. Inside of , we will call  to invoke the  default implementation of . This will give us the URL that the adapter would have built, which would be something like  and  after configuring the  above. All we have to do is to append  to this URL and return it.\nSimilarly, serializers are located at . Adapters and serializers are always added together as a pair. We added an  adapter, so we also added a corresponding serializer to go with it as well. Since the JSON data returned by our server is JSON:API-compliant, the default  work just fine for us without further customization.\nWith our adapter and serializer in place, all our tests should pass again.\n\nThe UI works exactly the same as before as well, just with much less code!\n\n\nEmber Data offers many, many features (like managing the relationships between different models) and there's a lot more we can learn about it. For example, if your backend's have some inconsistencies across different endpoints, Ember Data allows you to define more specific, per-model adapters and serializers too! We are just scratching the surface here. If you want to learn more about Ember Data, check out its own dedicated section in the guides!\n",
      headings: ['\n  Ember Data\n', 'Working with Adapters and Serializers'],
      anchor: 'toc_working-with-adapters-and-serializers',
      node: {},
      customRanking: {
        position: 5,
        heading: 80,
      },
      version: 'v3.28.0',
      path: 'examples/syntax-highlighting',
      objectID: 'v3.28.0-4c615232d38a7e8770a8372159d4d88c',
      _highlightResult: {
        content: {
          value:
            "\nEmber <em>Data</em> uses an adapter and serializer architecture. Adapters deal with how and where Ember <em>Data</em> should fetch <em>data</em> from your servers, such as whether to use HTTP, HTTPS, WebSockets or local storage, as well as the URLs, headers and parameters to use for these requests. On the other hand, serializers are in charge of converting the <em>data</em> returned by the server into a format Ember <em>Data</em> can understand.\nThe idea is that, provided that your backend exposes a consistent protocol and interchange format to access its <em>data</em>, we can write a single adapter-serializer pair to handle all <em>data</em> fetches for the entire application.\nAs it turns out, JSON:API just happens to be Ember <em>Data</em>'s default <em>data</em> protocol and interchange format. Out of the box, Ember <em>Data</em> provides a default JSON:API adapter and serializer. This is great news for us, since that is also what our server has implemented. What a wonderful coincidence!\nHowever, as mentioned above, there are some minor differences between how our server works and Ember <em>Data</em>'s default assumptions. We can customize the default behavior by defining our own adapter and serializer:\n\n\nBy convention, adapters are located at . Furthermore, the adapter named  is called the application adapter, which will be used to fetch <em>data</em> for all models in our app.\nInside this newly created file, we defined an  class, inheriting from the built-in . This allows us to inherit all the default JSON:API functionalities, while customizing the things that didn't work for us by default. Specifically:\n\nOur resource URLs have an extra  namespace prefix.\nOur resource URLs have a  extension at the end.\n\nAdding a namespace prefix happens to be pretty common across Ember apps, so the  has an API to do just that. All we need to do is to set the   property to the prefix we want, which is  in our case.\nAdding the  extension is a bit less common, and doesn't have a declarative configuration API of its own. Instead, we will need to override Ember <em>Data</em>'s  method. Inside of , we will call  to invoke the  default implementation of . This will give us the URL that the adapter would have built, which would be something like  and  after configuring the  above. All we have to do is to append  to this URL and return it.\nSimilarly, serializers are located at . Adapters and serializers are always added together as a pair. We added an  adapter, so we also added a corresponding serializer to go with it as well. Since the JSON <em>data</em> returned by our server is JSON:API-compliant, the default  work just fine for us without further customization.\nWith our adapter and serializer in place, all our tests should pass again.\n\nThe UI works exactly the same as before as well, just with much less code!\n\n\nEmber <em>Data</em> offers many, many features (like managing the relationships between different models) and there's a lot more we can learn about it. For example, if your backend's have some inconsistencies across different endpoints, Ember <em>Data</em> allows you to define more specific, per-model adapters and serializers too! We are just scratching the surface here. If you want to learn more about Ember <em>Data</em>, check out its own dedicated section in the guides!\n",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['data'],
        },
        headings: [
          {
            value: '\n  Ember <em>Data</em>\n',
            matchLevel: 'full',
            fullyHighlighted: false,
            matchedWords: ['data'],
          },
          {
            value: 'Working with Adapters and Serializers',
            matchLevel: 'none',
            matchedWords: [],
          },
        ],
      },
    },
    {
      html: '<section aria-labelledby="toc_customizing-serializers">\n<p>Ember Data uses the  by default, but you can\noverride this default by defining a custom serializer. There are two\nways to define a custom serializer. First, you can define a custom\nserializer for your entire application by defining an "application"\nserializer.</p>\n\n<p>You can also define a serializer for a specific model. For example, if\nyou had a  model you could also define a  serializer:</p>\n\n<p>To change the format of the data that is sent to the backend store, you can use\nthe <a href="https://api.emberjs.com/ember-data/release/classes/JSONAPISerializer/methods/serialize?anchor=serialize"></a>\nhook. Let\'s say that we have this JSON:API response from Ember Data:</p>\n\n<p>But our server expects data in this format:</p>\n\n<p>Here\'s how you can change the data:</p>\n\n<p>Similarly, if your backend store provides data in a format other than JSON:API,\nyou can use the\n<a href="https://api.emberjs.com/ember-data/release/classes/JSONAPISerializer/methods/normalizeResponse?anchor=normalizeResponse"></a>\nhook. Using the same example as above, if the server provides data that looks\nlike:</p>\n\n<p>And we need to change it to look like this:</p>\n\n<p>Here\'s how we could do it:</p>\n\n<p>To normalize only a single model, you can use the\n<a href="https://api.emberjs.com/ember-data/release/classes/JSONAPISerializer/methods/normalize?anchor=normalize"></a>\nhook similarly.</p>\n<p>For more hooks to customize the serializer with, see the <a href="https://api.emberjs.com/ember-data/release/classes/JSONAPISerializer">Ember Data serializer\nAPI documentation</a>.</p>\n</section>',
      content:
        "\nEmber Data uses the  by default, but you can\noverride this default by defining a custom serializer. There are two\nways to define a custom serializer. First, you can define a custom\nserializer for your entire application by defining an \"application\"\nserializer.\n\nYou can also define a serializer for a specific model. For example, if\nyou had a  model you could also define a  serializer:\n\nTo change the format of the data that is sent to the backend store, you can use\nthe \nhook. Let's say that we have this JSON:API response from Ember Data:\n\nBut our server expects data in this format:\n\nHere's how you can change the data:\n\nSimilarly, if your backend store provides data in a format other than JSON:API,\nyou can use the\n\nhook. Using the same example as above, if the server provides data that looks\nlike:\n\nAnd we need to change it to look like this:\n\nHere's how we could do it:\n\nTo normalize only a single model, you can use the\n\nhook similarly.\nFor more hooks to customize the serializer with, see the Ember Data serializer\nAPI documentation.\n",
      headings: ['\n  Customizing Serializers\n', 'Customizing Serializers'],
      anchor: 'toc_customizing-serializers',
      node: {},
      customRanking: {
        position: 3,
        heading: 80,
      },
      version: 'v3.28.0',
      path: 'examples/callouts',
      objectID: 'v3.28.0-8b7ec85b9727f65170b7901fc6d04372',
      _highlightResult: {
        content: {
          value:
            "\nEmber <em>Data</em> uses the  by default, but you can\noverride this default by defining a custom serializer. There are two\nways to define a custom serializer. First, you can define a custom\nserializer for your entire application by defining an \"application\"\nserializer.\n\nYou can also define a serializer for a specific model. For example, if\nyou had a  model you could also define a  serializer:\n\nTo change the format of the <em>data</em> that is sent to the backend store, you can use\nthe \nhook. Let's say that we have this JSON:API response from Ember <em>Data</em>:\n\nBut our server expects <em>data</em> in this format:\n\nHere's how you can change the <em>data</em>:\n\nSimilarly, if your backend store provides <em>data</em> in a format other than JSON:API,\nyou can use the\n\nhook. Using the same example as above, if the server provides <em>data</em> that looks\nlike:\n\nAnd we need to change it to look like this:\n\nHere's how we could do it:\n\nTo normalize only a single model, you can use the\n\nhook similarly.\nFor more hooks to customize the serializer with, see the Ember <em>Data</em> serializer\nAPI documentation.\n",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['data'],
        },
        headings: [
          {
            value: '\n  Customizing Serializers\n',
            matchLevel: 'none',
            matchedWords: [],
          },
          {
            value: 'Customizing Serializers',
            matchLevel: 'none',
            matchedWords: [],
          },
        ],
      },
    },
    {
      html: '<section aria-labelledby="toc_ember-data-models">\n<p>Ember Data is built around the idea of organizing your app\'s data into <em><a href="../../../models/defining-models/">model objects</a></em>. These objects represent units of information that our application presents to the user. For example, the rental property data we have been working with would be a good candidate.</p>\n<p>Enough talking, why don\'t we give that a try!</p>\n\n<p>Here, we created a  class that extends Ember Data\'s  superclass. When fetching the listing data from the server, each individual rental property will be represented by an instance (also known as a <em><a href="../../../models/finding-records/">record</a></em> of our  class.</p>\n<p>We used the  decorator to declare the attributes of a rental property. These attributes correspond directly to the  data we expect the server to provide in its responses:</p>\n\n<p>We can access these attributes for an instance of  using standard dot notation, such as  or . In addition to the attributes we declared here, there will always be an implicit <em>id</em> attribute as well, which is used to uniquely identify the model object and can be accessed using .</p>\n<p>Model classes in Ember Data are no different than any other classes we\'ve worked with so far, in that they allow for a convenient place for adding custom behavior. We took advantage of this feature to move our  logic (which is a major source of unnecessary duplication in our route handlers) into a getter on our model class. Once we have everything working here, we will go back to clean that up.</p>\n<p>Attributes declared with the  decorator work with the auto-track feature (which we learned about <a href="../../part-1/reusable-components/">in a previous chapter</a>). Therefore, we are free to reference any model attributes in our getter (), and Ember will know when to invalidate its result.</p>\n</section>',
      content:
        "\nEmber Data is built around the idea of organizing your app's data into model objects. These objects represent units of information that our application presents to the user. For example, the rental property data we have been working with would be a good candidate.\nEnough talking, why don't we give that a try!\n\nHere, we created a  class that extends Ember Data's  superclass. When fetching the listing data from the server, each individual rental property will be represented by an instance (also known as a record of our  class.\nWe used the  decorator to declare the attributes of a rental property. These attributes correspond directly to the  data we expect the server to provide in its responses:\n\nWe can access these attributes for an instance of  using standard dot notation, such as  or . In addition to the attributes we declared here, there will always be an implicit id attribute as well, which is used to uniquely identify the model object and can be accessed using .\nModel classes in Ember Data are no different than any other classes we've worked with so far, in that they allow for a convenient place for adding custom behavior. We took advantage of this feature to move our  logic (which is a major source of unnecessary duplication in our route handlers) into a getter on our model class. Once we have everything working here, we will go back to clean that up.\nAttributes declared with the  decorator work with the auto-track feature (which we learned about in a previous chapter). Therefore, we are free to reference any model attributes in our getter (), and Ember will know when to invalidate its result.\n",
      headings: ['\n  Ember Data\n', 'Ember Data Models'],
      anchor: 'toc_ember-data-models',
      node: {},
      customRanking: {
        position: 1,
        heading: 80,
      },
      version: 'v3.28.0',
      path: 'index',
      objectID: 'v3.28.0-7d163e8a5ea338f5d504687aeba489a3',
      _highlightResult: {
        content: {
          value:
            "\nEmber <em>Data</em> is built around the idea of organizing your app's <em>data</em> into model objects. These objects represent units of information that our application presents to the user. For example, the rental property <em>data</em> we have been working with would be a good candidate.\nEnough talking, why don't we give that a try!\n\nHere, we created a  class that extends Ember <em>Data</em>'s  superclass. When fetching the listing <em>data</em> from the server, each individual rental property will be represented by an instance (also known as a record of our  class.\nWe used the  decorator to declare the attributes of a rental property. These attributes correspond directly to the  <em>data</em> we expect the server to provide in its responses:\n\nWe can access these attributes for an instance of  using standard dot notation, such as  or . In addition to the attributes we declared here, there will always be an implicit id attribute as well, which is used to uniquely identify the model object and can be accessed using .\nModel classes in Ember <em>Data</em> are no different than any other classes we've worked with so far, in that they allow for a convenient place for adding custom behavior. We took advantage of this feature to move our  logic (which is a major source of unnecessary duplication in our route handlers) into a getter on our model class. Once we have everything working here, we will go back to clean that up.\nAttributes declared with the  decorator work with the auto-track feature (which we learned about in a previous chapter). Therefore, we are free to reference any model attributes in our getter (), and Ember will know when to invalidate its result.\n",
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['data'],
        },
        headings: [
          {
            value: '\n  Ember <em>Data</em>\n',
            matchLevel: 'full',
            fullyHighlighted: false,
            matchedWords: ['data'],
          },
          {
            value: 'Ember <em>Data</em> Models',
            matchLevel: 'full',
            fullyHighlighted: false,
            matchedWords: ['data'],
          },
        ],
      },
    },
  ],
  nbHits: 131,
  page: 0,
  nbPages: 9,
  hitsPerPage: 15,
  exhaustiveNbHits: true,
  exhaustiveTypo: true,
  query: 'data',
  params:
    'query=data&hitsPerPage=15&restrictSearchableAttributes=%5B%22content%22%5D&facetFilters=%5B%5B%22version%3Av3.28.0%22%5D%5D',
  processingTimeMS: 5,
};
