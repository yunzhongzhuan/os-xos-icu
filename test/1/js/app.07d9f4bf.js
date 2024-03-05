(function(t){function e(e){for(var a,s,i=e[0],r=e[1],l=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},c={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"66aa":function(t,e,n){"use strict";n("c2d1")},"6c4b":function(t,e,n){"use strict";n("c0c2")},c0c2:function(t,e,n){},c2d1:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={id:"app",class:"container"};function o(t,e,n,o,s,i){var r=Object(a["m"])("Main");return Object(a["g"])(),Object(a["c"])("div",c,[Object(a["f"])(r)])}var s=n("d4ec"),i=n("262e"),r=n("2caf"),l=n("9ab4"),u=n("ce1f"),d=Object(a["r"])("data-v-0b4f50af");Object(a["j"])("data-v-0b4f50af");var f={class:"main-content"},b={class:"container has-text-centered"},h=Object(a["e"])('<h1 class="title" data-v-0b4f50af>Cloudflare datacenter reachability</h1><h2 class="subtitle" data-v-0b4f50af><a target="_blank" href="https://github.com/judge2020/cloudflare-connectivity-test/wiki/Explanation" data-v-0b4f50af>Explanation</a><a href="https://speed.cloudflare.com/cdn-cgi/trace" target="_blank">点击打开</a></h2><h5 class="subtitle is-5" data-v-0b4f50af>Note: all tests run at once, so this is effectively a <a href="https://medium.com/@datapath_io/what-is-acceptable-jitter-7e93c1e68f9b" data-v-0b4f50af>jitter test</a>.</h5><p class="subtitle" data-v-0b4f50af>Test your website:</p>',4),p={class:"field has-addons has-addons-centered"},j={class:"control"},O=Object(a["f"])("div",{class:"control"},[Object(a["f"])("a",{class:"button is-info"},"GO")],-1),m=Object(a["f"])("hr",null,null,-1),v=Object(a["f"])("hr",{class:"top-hr"},null,-1),g={key:0,class:"columns has-text-centered"},w={class:"column"},y=Object(a["f"])("p",{class:"title"},"FREE",-1),k=Object(a["f"])("hr",null,null,-1),x={class:"column list-domains"},P=Object(a["f"])("p",{class:"title"},"PRO",-1),C=Object(a["f"])("hr",null,null,-1),H={class:"column list-domains"},S=Object(a["f"])("p",{class:"title"},"BUSINESS",-1),E=Object(a["f"])("hr",null,null,-1),_={class:"column list-domains"},T=Object(a["f"])("p",{class:"title"},"ENTERPRISE",-1),M=Object(a["f"])("hr",null,null,-1),I=Object(a["e"])('<section class="hero" data-v-0b4f50af><div class="hero-body" data-v-0b4f50af><div class="container" data-v-0b4f50af><h1 class="title" data-v-0b4f50af></h1><h2 class="subtitle" data-v-0b4f50af>Note: the plan these websites are on is an educated guess.</h2><p data-v-0b4f50af> Pro websites were taken from the <a href="https://developers.cloudflare.com/sponsorships/" data-v-0b4f50af>Open Source sponsorships page</a>, Business from the <a href="https://www.cloudflare.com/galileo/" data-v-0b4f50af>Project Galileo page</a>, and Enterprise from the <a href="https://www.cloudflare.com/case-studies/" data-v-0b4f50af>Case Studies page</a>. </p></div></div></section>',1);Object(a["h"])();var A=d((function(t,e,n,c,o,s){var i=Object(a["m"])("domain-item");return Object(a["g"])(),Object(a["c"])("div",f,[Object(a["f"])("div",b,[h,Object(a["f"])("form",{onSubmit:e[2]||(e[2]=Object(a["q"])((function(e){return t.loadTestHostname(t.testHostname)}),["prevent"]))},[Object(a["f"])("div",p,[Object(a["f"])("div",j,[Object(a["p"])(Object(a["f"])("input",{class:"input",type:"text",placeholder:"example.com","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.testHostname=e})},null,512),[[a["o"],t.testHostname]])]),O])],32),t.testHostname?(Object(a["g"])(),Object(a["c"])("div",{class:"domain-item",key:t.testHostname},[Object(a["f"])(i,{hostname:t.testHostname},null,8,["hostname"])])):Object(a["d"])("",!0),m]),v,t.preloaded?(Object(a["g"])(),Object(a["c"])("div",g,[Object(a["f"])("div",w,[y,(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["l"])(t.free,(function(t,e){return Object(a["g"])(),Object(a["c"])("div",{class:"domain-item",key:e},[Object(a["f"])(i,{hostname:t},null,8,["hostname"]),k])})),128))]),Object(a["f"])("div",x,[P,(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["l"])(t.pro,(function(t,e){return Object(a["g"])(),Object(a["c"])("div",{class:"domain-item",key:e},[Object(a["f"])(i,{hostname:t},null,8,["hostname"]),C])})),128))]),Object(a["f"])("div",H,[S,(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["l"])(t.business,(function(t,e){return Object(a["g"])(),Object(a["c"])("div",{class:"domain-item",key:e},[Object(a["f"])(i,{hostname:t},null,8,["hostname"]),E])})),128))]),Object(a["f"])("div",_,[T,(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["l"])(t.enterprise,(function(t,e){return Object(a["g"])(),Object(a["c"])("div",{class:"domain-item",key:e},[Object(a["f"])(i,{hostname:t},null,8,["hostname"]),M])})),128))])])):Object(a["d"])("",!0),I])})),z=(n("99af"),n("ac1f"),n("5319"),n("bee2")),N=n("bc3a"),R=n.n(N),U={key:0},V={key:0,class:"heading"},B={key:1,class:"heading"},$={class:"columns"},q={class:"column is-one-half"},F=Object(a["f"])("p",{class:"heading"},"First ping:",-1),G={class:"column is-one-half"},J=Object(a["f"])("p",{class:"heading"},"Second ping:",-1),D={key:1},L=Object(a["f"])("p",null,"Likely not a Cloudflare website, or not proxied.",-1);function K(t,e,n,c,o,s){console.log(t);return Object(a["g"])(),Object(a["c"])("div",null,[Object(a["f"])("h2",{class:"subtitle",textContent:Object(a["n"])(t.hostname)},null,8,["textContent"]),t.finished?(Object(a["g"])(),Object(a["c"])("div",U,[Object(a["f"])("p",{class:"title",textContent:Object(a["n"])(t.datacenter)},null,8,["textContent"]),Object(a["f"])("p",{class:"heading",textContent:Object(a["n"])(t.airport)},null,8,["textContent"]),t.ipv6?(Object(a["g"])(),Object(a["c"])("p",V,"IPv6")):Object(a["d"])("",!0),t.ipv6?Object(a["d"])("",!0):(Object(a["g"])(),Object(a["c"])("p",B,"IPv4")),Object(a["f"])("p",{class:"heading",textContent:Object(a["n"])(t.httpVerison)},null,8,["textContent"]),Object(a["f"])("div",$,[Object(a["f"])("div",q,[F,Object(a["f"])("h2",{class:"subtitle is-2",textContent:Object(a["n"])(t.firstPing)},null,8,["textContent"])]),Object(a["f"])("div",G,[J,Object(a["f"])("h2",{class:"subtitle is-2",textContent:Object(a["n"])(t.secondPing)},null,8,["textContent"])])])])):Object(a["d"])("",!0),t.broken?(Object(a["g"])(),Object(a["c"])("div",D,[L])):Object(a["d"])("",!0)])}n("4de4"),n("caad"),n("d81d"),n("b0c0"),n("2532"),n("1276");var Q=function t(){Object(s["a"])(this,t),this.hostname=Object(u["c"])({default:""})},W=function(t){Object(i["a"])(n,t);var e=Object(r["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.finished=!1,t.broken=!1,t.datacenter="",t.ipv6=!1,t.httpVerison="",t.airport="",t.firstPing=0,t.secondPing=0,t}return Object(z["a"])(n,[{key:"mounted",value:function(){var t=this;this.loadHostname(this.hostname).then((function(e){alert(JSON.stringify(e));console.log(e);t.ipv6=e.ip.includes(":"),t.httpVerison=e.http,t.datacenter=e.colo,t.airport=t.$parent.getAirport(e.colo)})).then((function(){return t.loadHostname(t.hostname,1)})).then((function(){t.firstPing=t.loadPing(t.hostname,0),t.secondPing=t.loadPing(t.hostname,1),t.finished=!0})).catch((function(){t.broken=!0}))}},{key:"loadPing",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=performance.getEntriesByType("resource").filter((function(e){return e.name.includes(t)})).filter((function(t){return t.name.includes("load=".concat(e))}))[0];return Math.floor(n.responseEnd-n.startTime)}},{key:"loadHostname",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return R.a.get("https://".concat(t,"/cdn-cgi/trace?load=").concat(e)).then((function(t){var e={fl:"",h:"",ip:"",ts:0,visit_scheme:"",uag:"",colo:"",http:"",loc:"",tls:"",sni:"",warp:""};return t.data.split("\n").map((function(t){return t.split("=")})).map((function(t){e[t[0]]=t[1]})),e}))}}]),n}(u["b"].with(Q));W=Object(l["a"])([Object(u["a"])({})],W);var X=W;X.render=K;var Y,Z,tt,et=X,nt=(Y=Object(u["a"])({components:{DomainItem:et}}),Y((tt=function(t){Object(i["a"])(n,t);var e=Object(r["a"])(n);function n(){var t;Object(s["a"])(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return t=e.call.apply(e,[this].concat(c)),t.testHostname="",t.preloaded=!1,t.iata=[],t.free=[],t.pro=[],t.business=[],t.enterprise=["www.163.workers.dev","upload.yunzhongzhuan.com","download.yunzhongzhuan.com","cloudflare.com","cdnjs.cloudflare.com","speed.cloudflare.com"],t}return Object(z["a"])(n,[{key:"mounted",value:function(){var t=this;this.preloadAirports().then((function(){t.preloaded=!0})),location.hash&&(this.testHostname=location.hash.replace("#",""),this.loadTestHostname(this.testHostname),this.$forceUpdate())}},{key:"loadTestHostname",value:function(){this.$forceUpdate()}},{key:"getAirport",value:function(t){return this.iata[t]}},{key:"preloadAirports",value:function(){var t=this;return R.a.get("../iata.json").then((function(e){t.iata=e.data}))}}]),n}(u["b"]),Z=tt))||Z);n("66aa");nt.render=A,nt.__scopeId="data-v-0b4f50af";var at=nt,ct=function(t){Object(i["a"])(n,t);var e=Object(r["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(u["b"]);ct=Object(l["a"])([Object(u["a"])({components:{Main:at}})],ct);var ot=ct;n("6c4b");ot.render=o;var st=ot;Object(a["b"])(st).mount("#app")}});
//# sourceMappingURL=app.07d9f4bf.js.map