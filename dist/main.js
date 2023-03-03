(()=>{"use strict";var n={24:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=i},426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root {\r\n    /* sizes */\r\n    --header-height: 3rem;\r\n    --footer-height: 2rem;\r\n    --categories-height: 3rem;\r\n    --default-border-radius: 5px;\r\n    --default-box-shadow: 1px 1px 1px 1px;\r\n\r\n    /* colors */\r\n    --col-main-bg: rgb(150,147,180);\r\n    --col-head-bg: blue;\r\n    --col-foot-bg: rgb(192,171,193);\r\n\r\n    --col-default-category: rgb(216,195,195);\r\n    --col-to-do-section: rgb(216,195,195);\r\n    --col-default-item: rgb(255,243,174);\r\n\r\n    --col-menu-popup: rgb(242,222,194);\r\n\r\n    /* tints */\r\n    --tint-dark-low: rgba(0, 0, 0, .25);\r\n    --tint-dark-med: rgba(0, 0, 0, .5);\r\n    --tint-dark-high: rgba(0, 0, 0, .75);\r\n\r\n    --tint-light-med: rgba(255, 255, 255, .5);\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    background-color: var(--tint-light-med);\r\n    border: none;\r\n    box-shadow: var(--default-box-shadow) var(--tint-dark-low);\r\n}\r\n\r\nbutton:hover {\r\n    background-color: var(--tint-dark-low);\r\n    box-shadow: var(--default-box-shadow) var(--tint-dark-med);\r\n}\r\n\r\nbutton:active {\r\n    background-color: var(--tint-dark-med);\r\n    box-shadow: none;\r\n}\r\n\r\n#content {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template: var(--header-height) calc(100vh - var(--header-height) - var(--footer-height)) var(--footer-height)/ 100vw;\r\n}\r\n\r\nheader {\r\n    background-color: var(--col-head-bg);\r\n    height: var(--header-height);\r\n}\r\n\r\nmain {\r\n    background-color: var(--col-main-bg);\r\n    height: 100%;\r\n    padding: 30px;\r\n    box-sizing: border-box;\r\n}\r\n\r\nfooter {\r\n    background-color: var(--col-foot-bg);\r\n    height: var(--footer-height)\r\n}\r\n\r\n#to-do-window {\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* display: grid;\r\n    grid-template: 1fr 9fr / 1fr;\r\n    */\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#category-section {\r\n    height: var(--categories-height);\r\n    display: flex;\r\n}\r\n\r\n#category-container {\r\n    display: flex;\r\n}\r\n\r\n.selected-category {\r\n    border: none;\r\n    box-shadow: none;\r\n    background-color: var(--col-to-do-section);\r\n    width: 8rem;\r\n}\r\n\r\ncategory {\r\n    background-color: var(--col-default-category);\r\n    text-align: center;\r\n    box-shadow: inset 0px 0px 5px 1px var(--tint-dark-low);\r\n    width: 5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor:pointer;\r\n    user-select:none;\r\n}\r\n\r\ncategory:last-child {\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\ncategory:not(.selected-category):hover {\r\n    box-shadow: inset 0px 0px 10px 1px var(--tint-dark-med);\r\n}\r\n\r\ncategory>h4 {\r\n    background-color: var(--tint-light-med);\r\n    border-radius: var(--default-border-radius);\r\n    width: calc(100% - 10px);\r\n    height: calc(100% - 10px);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#create-new-category-btn {\r\n    width: 2rem;\r\n    height: 2rem;\r\n    align-self: center;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.round-btn {\r\n    border-radius: 100vmin;\r\n}\r\n\r\n#to-do-section {\r\n    background-color: var(--col-to-do-section);\r\n    flex-grow: 1;\r\n    max-height: calc(100% - var(--categories-height));\r\n    box-sizing: border-box;\r\n    border-top-right-radius: 5px;\r\n    padding: 1rem;\r\n    position: relative;\r\n}\r\n\r\n#item-window {\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: scroll;\r\n    border-radius: var(--default-border-radius);\r\n}\r\n\r\n#item-container {\r\n    background-color: var(--tint-dark-low);\r\n    min-height: 100%;\r\n    width: 100%;\r\n    padding: 1rem 0 1rem 3rem;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 2rem;\r\n}\r\n\r\nitem {\r\n    position: relative;\r\n    background-color: var(--col-default-item);\r\n    border-radius: var(--default-border-radius);\r\n    padding: 30px;\r\n    box-sizing: border-box;\r\n    min-width: 300px;\r\n    max-width: calc(33% - 2rem);\r\n    word-wrap: break-word;\r\n    flex-grow: 1;\r\n    box-shadow:var(--default-box-shadow)var(--tint-dark-low);\r\n}\r\n\r\n#open-new-task-menu-btn {\r\n    position: absolute;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    right: 2rem;\r\n    bottom: 2rem;\r\n}\r\n\r\n#blackout-container {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: absolute;\r\n    background-color: var(--tint-dark-high);\r\n}\r\n\r\n.abs-center {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n\r\n}\r\n\r\n#add-task-popup {\r\n    min-height: 400px;\r\n    min-width: 400px;\r\n    max-height: 70%;\r\n    max-width: 60%;\r\n    background-color: var(--col-menu-popup);\r\n    border-radius: var(--default-border-radius);\r\n    box-shadow: 3px 3px 5px var(--tint-dark-med);\r\n    overflow: scroll;\r\n    font-size: larger;\r\n}\r\n\r\n#new-task-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.edit-category-btn {\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n.category-name-input {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--tint-dark-low);\r\n    border: none;\r\n    outline: none;\r\n    text-align: center;\r\n}\r\n\r\n.category-name,\r\n.category-name-input {\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.delete-task-btn {\r\n    position: absolute;\r\n    top: 1rem;\r\n    left: 1rem;\r\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var g=t(u),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==g)e[g].references++,e[g].updater(h);else{var m=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var d=r(n,o),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),c=t(216),l=t.n(c),u=t(589),g=t.n(u),h=t(24),m={};m.styleTagTransform=g(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var p=t(426),f={};f.styleTagTransform=g(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;class b{constructor(n,e){this.source=n,this.description=e}}const y={log:[],new:(n,e,...t)=>{let r=new b(n,e);for(let n=0;n<t.length;n++)r["other_info_"+n]=t[n];let o="Error:\n";for(const[n,e]of Object.entries(r))void 0!==e&&(o+=` ${n}: ${e}\n`);console.log(o),y.log.push(r)},getLog:()=>log},v=y,x="task-manager.js";class w{constructor(n,e,t){this.name=n,this.description=e,this.index=t}priority=0}class k{constructor(n){this.name=n}tasks=[];newTask=(n,e)=>{let t=new w(n,e,this.tasks.length);return this.tasks.push(t),t};getTasks=()=>this.tasks;removeTask=n=>{let e=T(n,this.tasks);e<0||(this.tasks.splice(e,1),E(this.tasks))}}const C=(()=>{const n=[],e=(e="")=>{const t=new k(e);return t.index=n.length,n.push(t),t},t=()=>n;return{newCategory:e,newTask:(t,r,o=0)=>{if(n.length<=0&&e("General"),"number"!=typeof o||o>=n.length){const e=`taskManager.newTask(categoryIndex) error\n categoryIndex <${o}> out of range in ${n}`,t="categoryIndex defaulting to 0";v.new(x,e,t),o=0}return n[o].newTask(t,r)},getCategories:t,getTasks:e=>{if("object"==typeof e||"number"==typeof e){if("number"==typeof e){if(e>=n.length){const t=`categoryIndex <${e}> is out of bounds in _categories`,r=`_categories.length <${n.length}>`;return void v.new(x,t,r)}e=n[e]}return e.getTasks()}{const n=`category <${e}> is not an index or an object.`;v.new(x,n)}},removeCategory:e=>{let r=T(n[e],t());r<0||(console.log("1"),n.splice(r,1),console.log("2"),E(n))}}})();function E(n){let e=!1;if("object"!=typeof n&&(e=`array <${n}> is not an object.`),n.length<0&&(e=`array<${n}>.length<${n.length}> is invalid.`),e)return v.new(x,e," _updateIndexes() exiting"),0;for(let e=0;e<n.length;e++)n[e].index=e;return n}function T(n,e){if("object"==typeof n&&(n=n.index),void 0!==e[n])return n;{const e=`Category.removeTask(task) error\n task <${n}> is not an index or an object.`,t="removeTask() failed - returning";return v.new(x,e,t),-1}}const I={getTaskArray:n=>C.getTasks(n),getCategoryArray:()=>C.getCategories(),newCategory:n=>C.newCategory()},z=(()=>{const n={container:{item:document.getElementById("item-container"),category:document.getElementById("category-container"),blackout:document.getElementById("blackout-container")},button:{openNewTaskMenu:document.getElementById("open-new-task-menu-btn"),addCategory:document.getElementById("create-new-category-btn")},menu:{newTask:{container:document.getElementById("add-task-popup"),button:{submit:document.getElementById("create-task-btn")},form:{form:document.getElementById("new-task-form"),name:document.getElementById("new-task-form-name"),description:document.getElementById("new-task-form-description")}}},categories:[],items:[]};let e=0;const t=e=>{if(void 0!==e.nodeName)return"CATEGORY"!==e.nodeName&&console.log(`warning --\x3e addCategoriesDOM : Category<${e} is not type CATEGORY>`),n.container.category.appendChild(e),n.categories.push(e),e;if(Array.isArray(e))return void e.forEach((n=>{t(n)}));let r=o(e);return n.container.category.appendChild(r),r},r=e=>{if(void 0!==e.nodeName)return"ITEM"!==e.nodeName&&console.log(`warning --\x3e addTasksDOM : Task<${e}> is not type ITEM.`),n.items.push(e),void n.container.item.appendChild(e);if(Array.isArray(e))return void e.forEach((n=>{r(n)}));let t=i(e);return t.style.backgroundColor=`rgba(255,255,255,${.1*e.priority+.2})`,n.container.item.appendChild(t),t},o=e=>{let t=document.createElement("category");t.classList.add("category-name");let r=document.createElement("h4");return r.textContent=e.name,t.setAttribute("index",n.categories.length),a(t),t.appendChild(r),t.addEventListener("click",(n=>{s(+n.currentTarget.getAttribute("index"))})),n.categories.push(t),t},a=n=>{let e=document.createElement("button");return n.appendChild(e),e.classList.add("edit-category-btn","round-btn"),e.addEventListener("click",(n=>{const e=n.currentTarget.parentElement,t=e.querySelector("h4");let r=t.textContent;t.textContent="";const o=document.createElement("input");o.value=r,o.setAttribute("type","text"),o.classList.add("category-name-input"),o.addEventListener("keypress",(n=>{if("Enter"!==n.key)return;const r=o.value;t.textContent=r,o.remove();let a=e.getAttribute("index");I.getCategoryArray()[a].name=r})),t.appendChild(o),o.select()})),e},i=t=>{let r=document.createElement("item"),o=document.createElement("h3");o.textContent=t.name;let a=document.createElement("p");a.textContent=t.description;let i=function(){let n=document.createElement("button");return n.innerText="X",n.classList.add("delete-task-btn","round-btn"),n.addEventListener("click",(n=>{I.getCategoryArray()[e].removeTask(t.index),r.remove()})),n}();return r.appendChild(o),r.appendChild(a),r.appendChild(i),n.items.push(r),r},s=t=>{n.categories[e].classList.remove("selected-category"),n.categories[t].classList.add("selected-category"),e=t,l(),r(I.getTaskArray(t))};function d(){let e=n.categories.length,r=I.newCategory(""),o=t(r);s(e),o.querySelector(".edit-category-btn").click()}function c(){u(!0),g(!0)}const l=()=>{n.items=[],n.container.item.textContent=""},u=e=>{e?n.container.blackout.classList.remove("hidden"):n.container.blackout.classList.add("hidden")},g=e=>{e?(n.menu.newTask.container.classList.remove("hidden"),n.menu.newTask.form.name.focus()):n.menu.newTask.container.classList.add("hidden")},h=()=>{let t=n.menu.newTask.form,o=t.name.value,a=t.description.value,i=I.getCategoryArray()[e].newTask(o,a);r(i),u(!1),g(!1),n.menu.newTask.form.form.reset()};return{ref:n,addTasksDOM:r,addCategoriesDOM:t,getSelectedCategoryIndex:()=>e,init:()=>{s(e),n.button.addCategory.addEventListener("click",d),n.button.openNewTaskMenu.addEventListener("click",c),n.menu.newTask.button.submit.addEventListener("click",h)}}})();(()=>{for(let n=0;n<2;n++){let e=C.newCategory(`cat_${n}`);for(let n=0;n<5;n++)e.newTask(`task_${n}`,`This is task number ${n} in category ${e.name}`).priority=n}let n=C.getCategories();0===n.length&&(C.newCategory("General"),n=C.getCategories()),z.ref.container.category.textContent="",z.ref.container.item.textContent="",z.ref.menu.newTask.form.form.reset(),z.addCategoriesDOM(n),z.init()})()})()})();