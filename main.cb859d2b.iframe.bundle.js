(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1001:function(module,exports){},1004:function(module,exports){},1010:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(125).configure)([__webpack_require__(1011)],module,!1)}).call(this,__webpack_require__(69)(module))},1011:function(module,exports,__webpack_require__){var map={"./getting-started.stories.mdx":1021,"./my-component/my-component.stories.ts":1016};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1011},1012:function(module){module.exports=JSON.parse('{"name":"stencil-storybook","beawareofchange":"change aswell scripts:build:storybook --static-dir","version":"2.0.1","license":"MIT","distDirs":{"stencil":"dist-stencil","storybook":"dist-storybook","beawareofchange":"change aswell main,module,es2015,es2017,types,collection and .gitignore"},"main":"dist-stencil/index.cjs.js","module":"dist-stencil/index.js","es2015":"dist-stencil/esm/index.js","es2017":"dist-stencil/esm/index.js","types":"dist-stencil/index.d.ts","collection":"dist-stencil/collection/collection-manifest.json","scripts":{"npm:install":"npm install","npm:ci":"npm ci","--- development ---":"this is a divider","start":"concurrently -n storybook,stencil,proxy -c \\"bgMagenta.bold,bgBlue.bold,bgCyan.bold\\" \\"npm:watch:storybook\\" \\"npm:watch:stencil\\" \\"npm:watch:proxy\\"","watch:storybook":"npm run stencil:to:storybook && start-storybook --no-dll -p 3001 --ci --quiet","watch:stencil":"stencil build --dev --watch --serve --port 3002","watch:proxy":"wait-on http://localhost:3001/ && wait-on http://localhost:3002/ && node ./scripts/proxy.js","new:component":"node ./scripts/create-component.js","--- production ---":"this is a divider","build":"run-s build:stencil build:storybook","build:stencil":"stencil build --docs","build:pre:storybook":"node ./scripts/pre-storybook.js","build:storybook":"npm run build:pre:storybook && build-storybook --quiet --output-dir ./dist-storybook --static-dir node_modules/.storybook-static-dir","storybook:static:dir":"node ./scripts/storybook-static-dir.js","stencil:to:storybook":"node ./scripts/stencil-to-storybook.js","--- misc ---":"this is a divider","test":"stencil test --spec --e2e --coverage","lint":"run-p lint:js lint:css","lint:js":"eslint src/**/*{.ts,.tsx} --no-error-on-unmatched-pattern","lint:css":"stylelint src/**/*.scss --allow-empty-input","lint:husky":"lint-staged","lint:js:fix":"eslint src/**/*{.ts,.tsx} --fix --no-error-on-unmatched-pattern","lint:css:fix":"stylelint src/**/*.scss --fix","chromatic":"run-s build:stencil chromatic:publish","chromatic:publish":"npx chromatic --project-token <REPLACE-WITH-YOUR-TOKEN> --build-script-name build:storybook"},"dependencies":{"@stencil/core":"^2.5.2","@stencil/postcss":"^2.0.0","@stencil/sass":"^1.4.1","@storybook/web-components":"^6.2.9","lit-html":"^1.3.0"},"devDependencies":{"@babel/core":"^7.11.6","@stencil/eslint-plugin":"^0.3.1","@storybook/addon-a11y":"^6.2.8","@storybook/addon-actions":"^6.2.9","@storybook/addon-essentials":"^6.2.9","@storybook/addon-links":"^6.2.9","@storybook/addon-viewport":"^6.2.9","@storybook/addon-notes":"^5.3.21","@storybook/addon-postcss":"^2.0.0","@types/jest":"^26.0.14","@types/node":"^14.11.2","@types/puppeteer":"^3.0.2","@typescript-eslint/eslint-plugin":"^4.3.0","@typescript-eslint/parser":"^4.3.0","babel-loader":"^8.1.0","copy-webpack-plugin":"^6.1.1","eslint":"^7.10.0","eslint-config-airbnb-typescript":"^10.0.2","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.3.1","eslint-plugin-react":"^7.21.2","filehound":"^1.17.4","fs-extra":"^9.0.1","yargs":"^16.1.0","gh-pages":"^3.1.0","husky":"^4.3.0","jest":"^26.4.2","jest-cli":"^26.4.2","npm-run-all":"^4.1.5","puppeteer":"^5.3.1","react-is":"^16.13.1","stylelint":"^13.7.2","stylelint-config-sass-guidelines":"^7.1.0","stylelint-declaration-block-no-ignored-properties":"^2.3.0","stylelint-declaration-strict-value":"^1.6.1","stylelint-high-performance-animation":"^1.5.1","typescript":"^4.0.3","write-file-webpack-plugin":"^4.5.1","http-proxy-middleware":"^1.0.5","node-fetch":"^2.6.1","chalk":"^4.1.0","bootstrap-scss":"^4.2.1","concurrently":"^5.3.0","wait-on":"^5.2.0","ts-dedent":"^2.0.0","lint-staged":"^10.4.2","prettier":"^2.1.2","prompts":"^2.4.1"},"jest":{"preset":"@stencil/core/testing"},"authors":[{"name":"Willy Woitas","username":"dutscher","email":"dutscher_sbf@hotmail.com"},{"name":"André Bellmann","username":"ingomc","email":"janick2002@gmx.de"}]}')},1016:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Modified",(function(){return Modified})),__webpack_require__.d(__webpack_exports__,"Slots",(function(){return Slots}));__webpack_require__(54),__webpack_require__(218),__webpack_require__(17),__webpack_require__(11),__webpack_require__(70),__webpack_require__(1013),__webpack_require__(38),__webpack_require__(41),__webpack_require__(21),__webpack_require__(135),__webpack_require__(43),__webpack_require__(47),__webpack_require__(56),__webpack_require__(66),__webpack_require__(25),__webpack_require__(16);var _templateObject,_templateObject2,lit_html=__webpack_require__(49),react=__webpack_require__(0),react_default=__webpack_require__.n(react),prismjs_prism=__webpack_require__(335),prism_default=__webpack_require__.n(prismjs_prism),template_polyfill=__webpack_require__(545),if_defined=__webpack_require__(546),previousValues=(__webpack_require__(52),__webpack_require__(53),__webpack_require__(15),__webpack_require__(433),new WeakMap),script=Object(lit_html.d)((function(value){return function(part){if(!(part instanceof lit_html.b))throw new Error("unsafeHTML can only be used in text bindings");var previousValue=previousValues.get(part);if(void 0===previousValue||value!==previousValue.value||part.value!==previousValue.script){var $script=document.createElement("script");$script.textContent=value,part.setValue($script),previousValues.set(part,{value:value,script:$script})}}}));function action(eventNames){return script("\n    try {\n      var uniqueId = function(eventName) {\n        return eventName + '-' + (new Date()).getTime();\n      };\n      var script = document.currentScript;\n      var comp = script !== null\n        ? script.previousElementSibling\n        : null;\n\n      if (comp !== null) {\n      ".concat(eventNames.map((function(eventName){return"\n        comp.parentNode.querySelectorAll(comp.tagName).forEach(function(webcmp) {\n          webcmp.addEventListener('".concat(eventName,"', function(event) {\n            __STORYBOOK_ADDONS.getChannel()\n              .emit('storybook/actions/action-event', {\n                count: 0,\n                data: {\n                  name: '").concat(eventName,"',\n                  args: event.detail\n                  // the next line need a fix in telesync: https://github.com/storybookjs/storybook/issues/8544\n                  // name: '").concat(eventName,"', args: [event]\n                },\n                id: uniqueId('").concat(eventName,"'),\n                options: {\n                  depth: 15,\n                  clearOnStoryChange: true,\n                  limit: 50,\n                  allowFunction: false\n                }\n              });\n          });\n        });")})).join("\n"),"\n      }\n    } catch (e) {\n      console.log('costum-action-error', e)\n    }\n  "))}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}__webpack_require__(1015),Object(template_polyfill.a)(),function initCurrentScriptPolyfill(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);"currentScript"in document||(Array.prototype.filter||(Array.prototype.filter=function(func,thisArg){throw new TypeError}),Object.defineProperty(document,"currentScript",{get:function get(){try{throw new Error}catch(err){var returnedScript=Array.prototype.slice.call(document.querySelectorAll("body script")).filter((function(script){return-1!==script.innerHTML.indexOf("document.currentScript")&&null===script.getAttribute("returned")}))[0];return returnedScript&&returnedScript.setAttribute("returned","true"),returnedScript}}}))}();var setup_story_setCodeTo=function setCodeTo(Variant,litTpl){var renderCode=function renderCode(args){var div=document.createElement("div");Object(lit_html.f)(litTpl(Object.assign({},args||{})),div);var code=div.innerHTML;return code=(code=(code=(code=(code=(code=code.replace(/<!---->/g,"")).replace(/ {2,6}\n/g,"")).replace(/ {4}(.*)/g,"$1")).replace("\n","")).replace(/ {2}$/gm,"")).replace(/ {2}<br>/g,"<br>")};Variant.parameters={docs:{source:{code:renderCode(Object.assign({},Variant.args,{docsView:!0}))},prepareForInline:function prepareForInline(storyFn,storyData){var Story=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Story,_React$Component);var _super=_createSuper(Story);function Story(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Story),(_this=_super.call(this,props)).wrapperRef=void 0,_this.wrapperRef=react_default.a.createRef(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Story,[{key:"componentDidMount",value:function componentDidMount(){Object(lit_html.f)(storyFn(),this.wrapperRef.current)}},{key:"render",value:function render(){var prism=document.querySelector("#anchor--"+storyData.id+" .prismjs .language-jsx");return prism&&(prism.innerHTML=prism_default.a.highlight(renderCode(Object.assign({},storyData.args,{docsView:!0})),prism_default.a.languages.jsx,"jsx")),react_default.a.createElement("div",{ref:this.wrapperRef,title:"willy was here"})}}]),Story}(react_default.a.Component);return react_default.a.createElement(Story)}}}};function setupVariant(Story){var args=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},title=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",litHtmlLogs=function litHtmlLogs(variantVargs){return Object(lit_html.e)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["","",""])),Story.tpl(Object.assign({},Variant.args,variantVargs)),Story.customEvents?action(Story.customEvents):"")},Variant=litHtmlLogs.bind({});return Variant.args=Object.assign({},Story.args,args),Variant.storyName=title,setup_story_setCodeTo(Variant,Story.tpl),Variant}var stencil_stories_templateObject,my_component_stories_templateObject,my_component_stories_templateObject2,_templateObject3,setup_story_a=function a(value){return!1!==value&&""!==value&&"default"!==value||(value=void 0),Object(if_defined.a)(value)},h=lit_html.e;function my_component_stories_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var my_component_stories_Story=function setupStory(stencilSettings,storySettings){var settings={component:stencilSettings.component,title:storySettings.category,parameters:Object.assign({notes:{markdown:String(stencilSettings.markdown||"").replace(/# (.*)-(.*)/g,"# <$1-$2 />").replace(/\\\|/g,"|").replace(/undefined/g,"-")},actions:{handles:storySettings.events||[]},docs:{source:{}},a11y:{element:"#root ".concat(stencilSettings.component),config:{},options:{},manual:!0}},storySettings.parameters),customEvents:stencilSettings.customEvents||null,events:storySettings.events||null,args:{},argTypes:{},tpl:storySettings.tplOverride||stencilSettings.tpl,tplComposition:function tplComposition(args){return settings.tpl.bind()(Object.assign({},args,{docsView:!0}))},tplCompositionWithActionLogs:function tplCompositionWithActionLogs(args){return Object(lit_html.e)(_templateObject||(_templateObject=_taggedTemplateLiteral(["","",""])),settings.tpl.bind()(Object.assign({},args,{docsView:!0})),settings.customEvents?action(settings.customEvents):"")}};return settings.args&&(settings.args=Object.assign({},stencilSettings.args,storySettings.argDefaults||{})),settings.argTypes&&(settings.argTypes=Object.assign({},stencilSettings.argTypes,storySettings.argTypes||storySettings.argDefaults||{})),storySettings.argOptions&&Object.keys(storySettings.argOptions).map((function(arg){return settings.argTypes[arg]&&("control"in settings.argTypes[arg]?settings.argTypes[arg].control.options=storySettings.argOptions[arg]:settings.argTypes[arg].control={type:"select",options:storySettings.argOptions[arg]}),!0})),settings}(Object.assign({},{component:"my-component",args:{first:"",middle:"",last:"",modifier:"",maxFileSize:"",multilineShizzle:!1},argTypes:{first:{description:"First Prop"},middle:{description:"Middle Prop"},last:{description:"Last Prop"},modifier:{description:"Modifier Prop"},maxFileSize:{description:"Specify size limit in Kb"},multilineShizzle:{description:"Yo im a multiline\ncan you see me?"}},customEvents:["removeButtonResponse"],slots:{defaultSlot:"",right:""}},{markdown:"# my-component\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property           | Attribute           | Description                       | Type      | Default     |\n| ------------------ | ------------------- | --------------------------------- | --------- | ----------- |\n| `first`            | `first`             | First Prop                        | `string`  | `undefined` |\n| `last`             | `last`              | Last Prop                         | `string`  | `undefined` |\n| `maxFileSize`      | `max-file-size`     | Specify size limit in Kb          | `any`     | `undefined` |\n| `middle`           | `middle`            | Middle Prop                       | `string`  | `undefined` |\n| `modifier`         | `modifier`          | Modifier Prop                     | `string`  | `''`        |\n| `multilineShizzle` | `multiline-shizzle` | Yo im a multiline can you see me? | `boolean` | `undefined` |\n\n\n## Events\n\n| Event                  | Description | Type               |\n| ---------------------- | ----------- | ------------------ |\n| `removeButtonResponse` | Prevent     | `CustomEvent<any>` |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n",tpl:function tpl(_ref){var id=_ref.id,first=_ref.first,middle=_ref.middle,last=_ref.last,modifier=_ref.modifier,maxFileSize=_ref.maxFileSize,multilineShizzle=_ref.multilineShizzle,slot=_ref.slot;return h(stencil_stories_templateObject||(stencil_stories_templateObject=function stencil_stories_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <my-component\n      id="','"\n\t\t\tfirst="','"\n\t\t\tmiddle="','"\n\t\t\tlast="','"\n\t\t\tmodifier="','"\n\t\t\tmaxFileSize="','"\n\t\t\tmultilineShizzle="','"\n    >\n\t\t',"\n\t</my-component>"])),setup_story_a(id),setup_story_a(first),setup_story_a(middle),setup_story_a(last),setup_story_a(modifier),setup_story_a(maxFileSize),setup_story_a(multilineShizzle),slot)}}),{category:"Components/My Component",argDefaults:{modifier:"",first:"First",middle:"Middle",last:"Last",hex:"#fba308",boolean:!1,radio:""},argOptions:{modifier:["default","modified"],radio:["default","loading","error","ready"]},argTypes:{hex:{control:"color"},radio:{control:{type:"inline-radio",options:["loading","error","ready"]}}}}),Default=setupVariant(my_component_stories_Story),Modified=setupVariant(my_component_stories_Story,{modifier:"modified"}),Slots=function setupComposition(titleOrLitHtml,litHtml){var realLitHtml=titleOrLitHtml,storyName="";"string"==typeof titleOrLitHtml&&(realLitHtml=litHtml,storyName=titleOrLitHtml);var Variant=realLitHtml.bind({});return Variant.storyName=storyName,setup_story_setCodeTo(Variant,realLitHtml),Variant}("<slot's />",(function(){return h(my_component_stories_templateObject||(my_component_stories_templateObject=my_component_stories_taggedTemplateLiteral(["\n  ","\n"])),["Single default slot",'Slot default + <div slot="right">Named Slot</div>',h(my_component_stories_templateObject2||(my_component_stories_templateObject2=my_component_stories_taggedTemplateLiteral(['<div slot="right">Use h wrapper, if there is reactive stuff inside of me</div>'])))].map((function(slot){return h(_templateObject3||(_templateObject3=my_component_stories_taggedTemplateLiteral(["","<br>"])),my_component_stories_Story.tplComposition({slot:slot}))})))}));__webpack_exports__.default=my_component_stories_Story;Default.parameters=Object.assign({storySource:{source:"setupVariant(Story)"}},Default.parameters),Modified.parameters=Object.assign({storySource:{source:"setupVariant(Story, { modifier: 'modified' })"}},Modified.parameters),Slots.parameters=Object.assign({storySource:{source:"setupComposition(\n  `<slot's />`,\n  () => h`\n  ${[\n    'Single default slot',\n    'Slot default + <div slot=\"right\">Named Slot</div>',\n    h`<div slot=\"right\">Use h wrapper, if there is reactive stuff inside of me</div>`,\n  ].map((slot) => h`${Story.tplComposition({ slot })}<br>`)}\n`,\n)"}},Slots.parameters)},1021:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(38),__webpack_require__(54),__webpack_require__(218),__webpack_require__(11),__webpack_require__(16),__webpack_require__(0);var _templateObject,esm=__webpack_require__(20),blocks=__webpack_require__(152),_require=(__webpack_require__(14),__webpack_require__(1012)),distDirs=(_require.name,_require.distDirs),dist=(_require.scripts,_require.version,__webpack_require__(9)),dist_default=__webpack_require__.n(dist);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var strings,raw,components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(blocks.c,{title:"Getting Started",mdxType:"Meta"}),Object(esm.b)("h1",{id:"stencil--storybook"},"Stencil + Storybook"),Object(esm.b)("h2",{id:"github"},"Github"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Repo: ",Object(esm.b)("a",{parentName:"li",href:"https://github.com/dutscher/stencil-storybook",target:"_blank",rel:"nofollow noopener noreferrer"},"https://github.com/dutscher/stencil-storybook")),Object(esm.b)("li",{parentName:"ul"},"Issues: ",Object(esm.b)("a",{parentName:"li",href:"https://github.com/dutscher/stencil-storybook/issues",target:"_blank",rel:"nofollow noopener noreferrer"},"https://github.com/dutscher/stencil-storybook/issues"))),Object(esm.b)("h2",{id:"mdx-links"},"MDX links"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("a",{parentName:"li",href:"https://mdxjs.com/getting-started",target:"_blank",rel:"nofollow noopener noreferrer"},"MDX")),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("a",{parentName:"li",href:"https://storybook.js.org/docs/react/api/mdx",target:"_blank",rel:"nofollow noopener noreferrer"},"Storybook MDX"))),Object(esm.b)("h2",{id:"add-this-snippet-code-to-your-page"},"Add this snippet code to your page"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("a",{parentName:"li",href:"https://stenciljs.com/docs/output-targets#differential-bundling",target:"_blank",rel:"nofollow noopener noreferrer"},"as shown in Stencil Docs"))),Object(esm.b)(blocks.d,{language:"html",code:dist_default()(_templateObject||(strings=['\n     <script src="','/lib/lib.js" nomodule><\/script>\n     <script src="','/lib/lib.esm.js" type="module"><\/script>\n     <link rel="stylesheet" href="dist-stencil/lib/lib.css" />\n     <my-component ...></my-component>\n  '],raw||(raw=strings.slice(0)),_templateObject=Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))),distDirs.stencil,distDirs.stencil),mdxType:"Source"}),Object(esm.b)("h2",{id:"readmemd"},Object(esm.b)("a",{parentName:"h2",href:"https://github.com/dutscher/stencil-storybook/blob/main/README.md",target:"_blank",rel:"nofollow noopener noreferrer"},"README.md")),Object(esm.b)(blocks.b,{markdown:"![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)\n\n# [Stencil 2.5.2](https://stenciljs.com/) + [Storybook 6.2.9](https://storybook.js.org/) + Real Stencil HMR*\n\n[DEMO Storybook on gh-pages](https://dutscher.github.io/stencil-storybook/) | *hot module reloading\n\nThis is a starter project for building components with Stencil in Storybook.\nThis sample includes _Real_ HMR in Storybook, with the Stencil build running in watch mode.\nStorybook only knows the stories, markup of stencil and entry point.\n\nAswell its chromatic tested, this means visiual regression testing of your stories.\n\nThanks to stencil storybook starters [bjankord](https://github.com/bjankord/stencil-storybook-boilerplate), [elwynelwyn](https://github.com/elwynelwyn/stencilbook-ding)<br/>\nAnd [shoelace](https://github.com/shoelace-style/shoelace) where i got the proxy hmr solution.\n\nAnd maybe this [issue](https://github.com/storybookjs/storybook/issues/4600#issuecomment-711443696) can be closed?\n\n✔️ NodeJS 14.13.1 ready (use nvm!)<br/>\n✔️ Stencil 2 ready, not yet es5 tested but should work! + BEM and REM utils<br/>\n✔️ Storybook 6+ WebComponents ready<br/>\n✔️ Real HMR on development with Stencil Dev Server, this keep storybooks state of controls<br/>\n✔️ chromatic.com visiual regression testing ready<br/>\n✔️ Tested on Windows 10 and Mac 10.15.6<br/>\n✔️ Bootstrap reset and Webfonts boilerplate included<br/>\n\n## How the HMR works\n\nStencil has an included /~dev-server which can out of the box HMR.\nSo we start storybook with webpack and stencil dev mode with rollup.\nOn the top we have a proxy which include the /~dev-server of stencil into the storybook canvas iframe.html\nEt voilà, this is what we want!\n\n## When you have issues, please let me know!\n\nUse my issues section\n\n## Start to develop\n\n`npm install`<br/>\n`npm start`<br/>\n`your storybook will run under: http://localhost:3000`\n\n## Build your production\n\n`npm build`\n\n## Test your Stencil\n\n`npm test`<br/>\n`npm test -t special.spec.ts`\n\nThat's it!<br/>\nCheers dutscher\n",mdxType:"Description"}),Object(esm.b)("img",{src:"assets/1337.jpg",style:{height:"0px"}}))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Getting Started",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(blocks.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},1025:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(16),__webpack_require__(38),__webpack_require__(52),__webpack_require__(1008),__webpack_require__(40),__webpack_require__(1009);var client_api=__webpack_require__(92),esm=__webpack_require__(5),parameters={controls:{expanded:!0},actions:{argTypesRegex:"^on[A-Z].*"},options:{storySort:{order:__webpack_require__(544),method:"alphabetical",locales:"de-DE"}},docs:{extractComponentDescription:function extractComponentDescription(component,_ref){var notes=_ref.notes;return notes?"string"==typeof notes?notes:notes.markdown||notes.text:null}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},544:function(module){module.exports=JSON.parse('["Getting Started","Components"]')},567:function(module,exports,__webpack_require__){__webpack_require__(568),__webpack_require__(724),__webpack_require__(725),__webpack_require__(1018),__webpack_require__(1019),__webpack_require__(1022),__webpack_require__(1023),__webpack_require__(1020),__webpack_require__(1017),__webpack_require__(1024),__webpack_require__(907),__webpack_require__(1007),__webpack_require__(1025),module.exports=__webpack_require__(1010)},635:function(module,exports){},725:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(125)},913:function(module,exports){},915:function(module,exports){},925:function(module,exports){},927:function(module,exports){},952:function(module,exports){},954:function(module,exports){},955:function(module,exports){},960:function(module,exports){},962:function(module,exports){},968:function(module,exports){},970:function(module,exports){},989:function(module,exports){}},[[567,2,3]]]);