(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7oih":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),l=n("TrPP"),o=n("Wbzz"),i=(n("pIFo"),function(e,t,n){void 0===n&&(n="blog/");var r=e.url,a=e.connectedObject;if("#"===r)return null;var l=r.replace(t,"");return a&&"WPGraphQL_Post"===a.__typename&&(l=n+l),l});n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var u=function(e){var t=e.children,n=e.to,r=e.activeClassName,l=e.partiallyActive,i=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","to","activeClassName","partiallyActive"]);return/^\/(?!\/)/.test(n)?a.a.createElement(o.Link,Object.assign({to:n,activeClassName:r,partiallyActive:l},i),t):a.a.createElement("a",Object.assign({href:n},i,{target:"_blank",rel:"noopener noreferrer"}),t)},s=function(e){var t=e.menuItem,n=e.wordPressUrl;return a.a.createElement(u,{to:i(t,n)},t.label)},c=n("ATp1"),T=n.n(c),f=function(){return a.a.createElement(o.StaticQuery,{query:"1661007073",render:function(e){if(e.wpgraphql.menuItems){var t=e.wpgraphql.menuItems.nodes,n=e.wpgraphql.generalSettings.url;return a.a.createElement("header",null,a.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light bg-light"},a.a.createElement("div",{className:"container"},a.a.createElement(o.Link,{to:"/",className:"navbar-brand logo"},a.a.createElement("img",{src:T.a,alt:"logo"})),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},a.a.createElement("ul",{className:"navbar-nav ml-auto"},t&&t.map((function(e,t){return a.a.createElement("li",{className:e.cssClasses+" nav-item",key:t},a.a.createElement(s,{key:e.id,menuItem:e,wordPressUrl:n}),a.a.createElement("div",{className:"dropdown-menu"},e&&e.childItems&&e.childItems.nodes&&e.childItems.nodes.map((function(e,t){return a.a.createElement("div",{className:"nav-item-sub",key:t},a.a.createElement(s,{key:e.id,menuItem:e,wordPressUrl:n}))}))))})))))))}return null},data:l})},p=n("yYZ9"),d=function(){return a.a.createElement(o.StaticQuery,{query:"2892023585",render:function(e){if(e.wpgraphql.menuItems){var t=e.wpgraphql.menuItems.nodes,n=e.wpgraphql.generalSettings.url;return a.a.createElement("ul",{className:"navbar-nav ml-auto"},t&&t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(s,{key:e.id,menuItem:e,wordPressUrl:n}))})))}return null},data:p})},m=n("t5WJ"),E=function(){return a.a.createElement(o.StaticQuery,{query:"3156421566",render:function(e){if(e.wpgraphql.menuItems){var t=e.wpgraphql.menuItems.nodes,n=e.wpgraphql.generalSettings.url;return a.a.createElement("ul",{className:"navbar-nav ml-auto"},t&&t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(s,{key:e.id,menuItem:e,wordPressUrl:n}))})))}return null},data:m})},b=n("p/tL"),h=function(){return a.a.createElement(o.StaticQuery,{query:"3134247982",render:function(e){if(e.wpgraphql.menuItems){var t=e.wpgraphql.menuItems.nodes,n=e.wpgraphql.generalSettings.url;return a.a.createElement("ul",{className:"navbar-nav ml-auto"},t&&t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(s,{key:e.id,menuItem:e,wordPressUrl:n}))})))}return null},data:b})},g=function(){return a.a.createElement("footer",null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-3 col-xs-12"},a.a.createElement("div",{className:"item"},a.a.createElement("div",{className:"logo"},a.a.createElement("img",{src:T.a,alt:"logo"})),a.a.createElement("p",null,a.a.createElement("i",{className:"fa fa-map-marker"}),"Số 101B, Mai Xuân Thưởng, Vĩnh Hải, Nha Trang, Khánh Hòa"),a.a.createElement("p",null,a.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"}),"Hotline: ",a.a.createElement("span",null,"0963227299")),a.a.createElement("p",null,a.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"Email: ",a.a.createElement("span",null,"info@tenmiencuaban.vn")))),a.a.createElement("div",{className:"col-md-3 col-xs-12"},a.a.createElement("div",{className:"item"},a.a.createElement("h3",null,"Công ty"),a.a.createElement(E,null))),a.a.createElement("div",{className:"col-md-3 col-xs-12"},a.a.createElement("div",{className:"item"},a.a.createElement("h3",null,"Tìm hiểu thêm"),a.a.createElement(d,null))),a.a.createElement("div",{className:"col-md-3 col-xs-12"},a.a.createElement("div",{className:"item"},a.a.createElement("h3",null,"Nhận tin dự án"),a.a.createElement(h,null)))),a.a.createElement("div",{className:"cpr text-center"},a.a.createElement("p",{className:"m-0"},"Copyright © 2020 ",a.a.createElement("span",null,"tenmiencuaban.vn.")," All rights reserved."))))};t.a=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement("main",null,t),a.a.createElement(g,null))}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),l=r(a),o=r(n("Gytx"));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function T(){s=e(c.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var i=a.prototype;return i.shouldComponentUpdate=function(e){return!o(e,this.props)},i.componentWillMount=function(){c.push(this),T()},i.componentDidUpdate=function(){T()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),T()},i.render=function(){return l.createElement(r,this.props)},a}(a.Component);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",u),f}}},ATp1:function(e,t,n){e.exports=n.p+"static/logo-41c6a176ceade3170c7e11abd76effb8.png"},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Alphaland Bất Động Sản","description":"Sàn Bất Động Sản Trực tuyến","author":"Phat Nguyen"}}}}')},EYWl:function(e,t,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),l=n.n(a),o=n("TJpk"),i=n.n(o);function u(e){var t=e.description,n=e.lang,a=e.meta,o=e.title,u=r.data.site,s=t||u.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(a)})}u.defaultProps={lang:"en",meta:[],description:""},t.a=u},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var l=Object.keys(e),o=Object.keys(t);if(l.length!==o.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<l.length;u++){var s=l[u];if(!i(s))return!1;var c=e[s],T=t[s];if(!1===(a=n?n.call(r,c,T,s):void 0)||void 0===a&&c!==T)return!1}return!0}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=T(n("q1tI")),o=T(n("17x9")),i=T(n("8+s/")),u=T(n("bmMU")),s=n("v1p5"),c=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,E,b,h=(0,i.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),g=(m=h,b=E=function(e){function t(){return p(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case c.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,l=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},l,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,l=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(a.type){case c.TAG_NAMES.TITLE:return r({},l,((t={})[a.type]=i,t.titleAttributes=r({},o),t));case c.TAG_NAMES.BODY:return r({},l,{bodyAttributes:r({},o)});case c.TAG_NAMES.HTML:return r({},l,{htmlAttributes:r({},o)})}return r({},l,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,l=a.children,o=f(a,["children"]),i=(0,s.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,l),e.type){case c.TAG_NAMES.LINK:case c.TAG_NAMES.META:case c.TAG_NAMES.NOSCRIPT:case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),l.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(l.default.Component),E.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=m.peek,E.rewind=function(){var e=m.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},b);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},TrPP:function(e){e.exports=JSON.parse('{"data":{"wpgraphql":{"menuItems":{"nodes":[{"id":"bmF2X21lbnVfaXRlbToyNA==","label":"Dự án BDS","url":"http://gatsby.lamwebnhatrang.net/blog/du-an-bds/","title":null,"target":null,"cssClasses":[],"childItems":{"nodes":[]}},{"id":"bmF2X21lbnVfaXRlbTozMDU=","label":"Mua Nhà","url":"http://gatsby.lamwebnhatrang.net/blog/mua-nha/","title":null,"target":null,"cssClasses":[],"childItems":{"nodes":[]}},{"id":"bmF2X21lbnVfaXRlbTozMDY=","label":"Thuê nhà","url":"http://gatsby.lamwebnhatrang.net/blog/thue-nha/","title":null,"target":null,"cssClasses":[],"childItems":{"nodes":[]}},{"id":"bmF2X21lbnVfaXRlbTozMzY=","label":"Về Alphaland","url":"http://gatsby.lamwebnhatrang.net/gioi-thieu/","title":null,"target":null,"cssClasses":[],"childItems":{"nodes":[]}},{"id":"bmF2X21lbnVfaXRlbTo0MDY=","label":"Liên hệ","url":"http://gatsby.lamwebnhatrang.net/lien-he/","title":null,"target":null,"cssClasses":[],"childItems":{"nodes":[]}}]},"generalSettings":{"url":"http://gatsby.lamwebnhatrang.net"}}}}')},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,l=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var i,u,s,c=r(t),T=r(n);if(c&&T){if((u=t.length)!=n.length)return!1;for(i=u;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(c!=T)return!1;var f=t instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==n.getTime();var d=t instanceof RegExp,m=n instanceof RegExp;if(d!=m)return!1;if(d&&m)return t.toString()==n.toString();var E=a(t);if((u=E.length)!==a(n).length)return!1;for(i=u;0!=i--;)if(!l.call(n,E[i]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(i=u;0!=i--;)if(!("_owner"===(s=E[i])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"p/tL":function(e){e.exports=JSON.parse('{"data":{"wpgraphql":{"menuItems":{"nodes":[{"id":"bmF2X21lbnVfaXRlbTozMzQ=","label":"Tin tức bất động sản","url":"http://gatsby.lamwebnhatrang.net/blog/tin-tuc/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMzM=","label":"Phong thủy","url":"http://gatsby.lamwebnhatrang.net/blog/phong-thuy/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMzI=","label":"Nội ngoại thất","url":"http://gatsby.lamwebnhatrang.net/blog/noi-ngoai-that/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMzE=","label":"Kiến trúc - Nhà đẹp","url":"http://gatsby.lamwebnhatrang.net/blog/kien-truc-nha-dep/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMzU=","label":"Xây dựng - Quy hoạch","url":"http://gatsby.lamwebnhatrang.net/blog/xay-dung-quy-hoach/","title":null,"target":null,"cssClasses":[]}]},"generalSettings":{"url":"http://gatsby.lamwebnhatrang.net"}}}}')},t5WJ:function(e){e.exports=JSON.parse('{"data":{"wpgraphql":{"menuItems":{"nodes":[{"id":"bmF2X21lbnVfaXRlbTozMTg=","label":"Về Alphaland","url":"http://gatsby.lamwebnhatrang.net/gioi-thieu/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMTY=","label":"Đội ngũ bán hàng","url":"http://gatsby.lamwebnhatrang.net/doi-ngu-ban-hang/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMTk=","label":"Tuyển dụng","url":"http://gatsby.lamwebnhatrang.net/blog/tuyen-dung/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMTc=","label":"Liên hệ","url":"http://gatsby.lamwebnhatrang.net/lien-he/","title":null,"target":null,"cssClasses":[]}]},"generalSettings":{"url":"http://gatsby.lamwebnhatrang.net"}}}}')},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=u(n("q1tI")),o=u(n("MgzW")),i=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var s,c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=E(e,i.TAG_NAMES.TITLE),n=E(e,i.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,i.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return E(e,i.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[i.TAG_NAMES.BASE]})).map((function(e){return e[i.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a].toLowerCase();if(-1!==e.indexOf(l)&&n[l])return t.concat(n)}return t}),[])},m=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,l=Object.keys(e),o=0;o<l.length;o++){var u=l[o],s=u.toLowerCase();-1===t.indexOf(s)||n===i.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===i.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(u)||u!==i.TAG_PROPERTIES.INNER_HTML&&u!==i.TAG_PROPERTIES.CSS_TEXT&&u!==i.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][c]&&(r[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(r),u=0;u<l.length;u++){var s=l[u],c=(0,o.default)({},a[s],r[s]);a[s]=c}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},b=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){b(e)}),0)}),h=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,o=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,T=e.styleTags,f=e.title,p=e.titleAttributes;P(i.TAG_NAMES.BODY,r),P(i.TAG_NAMES.HTML,a),R(f,p);var d={baseTag:M(i.TAG_NAMES.BASE,n),linkTags:M(i.TAG_NAMES.LINK,l),metaTags:M(i.TAG_NAMES.META,o),noscriptTags:M(i.TAG_NAMES.NOSCRIPT,u),scriptTags:M(i.TAG_NAMES.SCRIPT,c),styleTags:M(i.TAG_NAMES.STYLE,T)},m={},E={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=d[e].oldTags)})),t&&t(),s(e,m,E)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),P(i.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(i.HELMET_ATTRIBUTE),a=r?r.split(","):[],l=[].concat(a),o=Object.keys(t),u=0;u<o.length;u++){var s=o[u],c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),-1===a.indexOf(s)&&a.push(s);var T=l.indexOf(s);-1!==T&&l.splice(T,1)}for(var f=l.length-1;f>=0;f--)n.removeAttribute(l[f]);a.length===l.length?n.removeAttribute(i.HELMET_ATTRIBUTE):n.getAttribute(i.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(i.HELMET_ATTRIBUTE,o.join(","))}},M=function(e,t){var n=document.head||document.querySelector(i.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+i.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),l=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===i.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===i.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(i.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):l.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:l}},N=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[i.REACT_TAG_MAP[n]||n]=e[n],t}),t)},O=function(e,t,n){switch(e){case i.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[i.HELMET_ATTRIBUTE]=!0,a=w(n,r),[l.default.createElement(i.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=N(n),l=_(t);return a?"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+a+">"+c(l,r)+"</"+e+">":"<"+e+" "+i.HELMET_ATTRIBUTE+'="true">'+c(l,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case i.ATTRIBUTE_NAMES.BODY:case i.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[i.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=i.REACT_TAG_MAP[e]||e;if(n===i.TAG_PROPERTIES.INNER_HTML||n===i.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),l.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===i.TAG_PROPERTIES.INNER_HTML||e===i.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+c(r[t],n)+'"';return e?e+" "+a:a}),""),l=r.innerHTML||r.cssText||"",o=-1===i.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+l+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[i.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&A(S),e.defer?S=g((function(){v(e,(function(){S=null}))})):(v(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,o=e.metaTags,u=e.noscriptTags,s=e.scriptTags,c=e.styleTags,T=e.title,f=void 0===T?"":T,p=e.titleAttributes;return{base:O(i.TAG_NAMES.BASE,t,r),bodyAttributes:O(i.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:O(i.ATTRIBUTE_NAMES.HTML,a,r),link:O(i.TAG_NAMES.LINK,l,r),meta:O(i.TAG_NAMES.META,o,r),noscript:O(i.TAG_NAMES.NOSCRIPT,u,r),script:O(i.TAG_NAMES.SCRIPT,s,r),style:O(i.TAG_NAMES.STYLE,c,r),title:O(i.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:d([i.TAG_PROPERTIES.HREF],e),bodyAttributes:p(i.ATTRIBUTE_NAMES.BODY,e),defer:E(e,i.HELMET_PROPS.DEFER),encode:E(e,i.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(i.ATTRIBUTE_NAMES.HTML,e),linkTags:m(i.TAG_NAMES.LINK,[i.TAG_PROPERTIES.REL,i.TAG_PROPERTIES.HREF],e),metaTags:m(i.TAG_NAMES.META,[i.TAG_PROPERTIES.NAME,i.TAG_PROPERTIES.CHARSET,i.TAG_PROPERTIES.HTTPEQUIV,i.TAG_PROPERTIES.PROPERTY,i.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(i.TAG_NAMES.NOSCRIPT,[i.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:m(i.TAG_NAMES.SCRIPT,[i.TAG_PROPERTIES.SRC,i.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(i.TAG_NAMES.STYLE,[i.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:p(i.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=y}).call(this,n("yLpj"))},yYZ9:function(e){e.exports=JSON.parse('{"data":{"wpgraphql":{"menuItems":{"nodes":[{"id":"bmF2X21lbnVfaXRlbTozMDc=","label":"Dự án BDS","url":"http://gatsby.lamwebnhatrang.net/blog/du-an-bds/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMDg=","label":"Mua Nhà","url":"http://gatsby.lamwebnhatrang.net/blog/mua-nha/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMDk=","label":"Thuê nhà","url":"http://gatsby.lamwebnhatrang.net/blog/thue-nha/","title":null,"target":null,"cssClasses":[]},{"id":"bmF2X21lbnVfaXRlbTozMTU=","label":"Điều khoản sử dụng","url":"http://gatsby.lamwebnhatrang.net/dieu-khoan-su-dung/","title":null,"target":null,"cssClasses":[]}]},"generalSettings":{"url":"http://gatsby.lamwebnhatrang.net"}}}}')}}]);
//# sourceMappingURL=272ce1224f42aef7743a577801f1c2f996738296-2194198b4041770e5f63.js.map