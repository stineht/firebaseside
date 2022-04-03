/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";!function(){if("object"==typeof globalThis)return globalThis;try{this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();const e=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const a=e[t],s=t+1<e.length,i=s?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,h=a>>2,l=(3&a)<<4|i>>4;let d=(15&i)<<2|c>>6,p=63&c;o||(p=64,s||(d=64)),n.push(r[h],r[l],r[d],r[p])}return n.join("")},encodeString(t,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(t):this.encodeByteArray(e(t),r)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){const s=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&s)}else if(a>239&&a<365){const s=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[r++],i=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&i)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const a=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0;++t;const i=t<e.length?r[e.charAt(t)]:64;++t;const o=t<e.length?r[e.charAt(t)]:64;if(++t,null==a||null==s||null==i||null==o)throw Error();const c=a<<2|s>>4;if(n.push(c),64!==i){const e=s<<4&240|i>>2;if(n.push(e),64!==o){const e=i<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},r=function(r){return function(r){const n=e(r);return t.encodeByteArray(n,!0)}(r).replace(/\./g,"")};class n{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}class a extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,a.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,s.prototype.create)}}class s{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],o=s?function(e,t){return e.replace(i,((e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`}))}(s,r):"Error",c=`${this.serviceName}: ${o} (${n}).`;return new a(n,c,r)}}const i=/\{\$([^}]+)}/g;function o(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const a of r){if(!n.includes(a))return!1;const r=e[a],s=t[a];if(c(r)&&c(s)){if(!o(r,s))return!1}else if(r!==s)return!1}for(const e of n)if(!r.includes(e))return!1;return!0}function c(e){return null!==e&&"object"==typeof e}function h(e,t){return new Promise(((r,n)=>{e.onsuccess=e=>{r(e.target.result)},e.onerror=e=>{var r;n(`${t}: ${null===(r=e.target.error)||void 0===r?void 0:r.message}`)}}))}class l{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new d(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new p(this._db.createObjectStore(e,t))}close(){this._db.close()}}class d{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new p(this._transaction.objectStore(e))}}class p{constructor(e){this._store=e}index(e){return new u(this._store.index(e))}createIndex(e,t,r){return new u(this._store.createIndex(e,t,r))}get(e){return h(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return h(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return h(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return h(this._store.clear(),"Error clearing IndexedDB object store")}}class u{constructor(e){this._index=e}get(e){return h(this._index.get(e),"Error reading from IndexedDB")}}class f{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const g="[DEFAULT]";class m{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:g})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),a=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;a.add(e),this.onInitCallbacks.set(n,a);const s=this.instances.get(n);return s&&e(s,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===g?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:g:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class b{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new m(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const _=[];var E;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(E||(E={}));const w={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},y=E.INFO,I={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},v=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),a=I[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${n}]  ${e.name}:`,...r)};class S{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const C="@firebase/app",D="0.7.20",A=new class{constructor(e){this.name=e,this._logLevel=y,this._logHandler=v,this._userLogHandler=null,_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?w[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}("@firebase/app"),O={[C]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},B=new Map,T=new Map;function L(e,t){try{e.container.addComponent(t)}catch(r){A.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function N(e){const t=e.name;if(T.has(t))return A.debug(`There were multiple attempts to register component ${t}.`),!1;T.set(t,e);for(const t of B.values())L(t,e);return!0}const $=new s("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});class M{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new f("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $.create("app-deleted",{appName:this._name})}}function H(e,t,r){var n;let a=null!==(n=O[e])&&void 0!==n?n:e;r&&(a+=`-${r}`);const s=a.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const e=[`Unable to register library "${a}" with version "${t}":`];return s&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void A.warn(e.join(" "))}N(new f(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}const R="firebase-heartbeat-store";let j=null;function P(){var e;return j||(j=("firebase-heartbeat-database",1,e=(e,t)=>{0===t&&e.createObjectStore(R)},new Promise(((t,r)=>{try{const n=indexedDB.open("firebase-heartbeat-database",1);n.onsuccess=e=>{t(new l(e.target.result))},n.onerror=e=>{var t;r(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},n.onupgradeneeded=t=>{e(new l(n.result),t.oldVersion,t.newVersion,new d(n.transaction))}}catch(e){r(`Error opening indexedDB: ${e.message}`)}}))).catch((e=>{throw $.create("storage-open",{originalErrorMessage:e.message})}))),j}async function k(e,t){try{const r=(await P()).transaction(R,"readwrite"),n=r.objectStore(R);return await n.put(t,F(e)),r.complete}catch(e){throw $.create("storage-set",{originalErrorMessage:e.message})}}function F(e){return`${e.name}!${e.options.appId}`}class x{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new z(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=V();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=V(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const r=[];let n=e.slice();for(const a of e){const e=r.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),U(r)>t){e.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),U(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),a=r(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function V(){return(new Date).toISOString().substring(0,10)}class z{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await P()).transaction(R).objectStore(R).get(F(e))}catch(e){throw $.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function U(e){return r(JSON.stringify({version:2,heartbeats:e})).length}N(new f("platform-logger",(e=>new S(e)),"PRIVATE")),N(new f("heartbeat",(e=>new x(e)),"PRIVATE")),H(C,D,""),H(C,D,"esm2017"),H("fire-js",""),H("firebase","9.6.10","app"),function(e,t={}){"object"!=typeof t&&(t={name:t});const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),n=r.name;if("string"!=typeof n||!n)throw $.create("bad-app-name",{appName:String(n)});const a=B.get(n);if(a){if(o(e,a.options)&&o(r,a.config))return a;throw $.create("duplicate-app",{appName:n})}const s=new b(n);for(const e of T.values())s.addComponent(e);const i=new M(e,r,s);B.set(n,i)}({apiKey:"AIzaSyDbbpjYFcpbxI9ydghSzjkvVDJS1nvd9G0",authDomain:"mittprosjekt-6982f.firebaseapp.com",projectId:"mittprosjekt-6982f",storageBucket:"mittprosjekt-6982f.appspot.com",messagingSenderId:"243539719234",appId:"1:243539719234:web:0afcd6df1f1752981ae9db",measurementId:"G-FY9F50JT3H"})})();