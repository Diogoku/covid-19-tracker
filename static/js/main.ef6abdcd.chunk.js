(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{232:function(e,t,a){e.exports=a(444)},237:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},442:function(e,t,a){},443:function(e,t,a){},444:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),l=(a(237),a(30)),s=a.n(l),u=a(54),i=a(18),d=a(94),m=Object(d.b)({name:"countries",initialState:{countries:[],currentCountryInfo:{country:"Worldwide",code:"Worldwide"},currentInfoBoxType:"cases"},reducers:{setCountries:function(e,t){e.countries=t.payload},setCurrentCountryInfo:function(e,t){e.currentCountryInfo=t.payload},setCurrentInfoBoxType:function(e,t){e.currentInfoBoxType=t.payload}}}),f=m.actions,v=f.setCountries,y=f.setCurrentCountryInfo,h=f.setCurrentInfoBoxType,p=function(e){return e.countries.countries},E=function(e){return e.countries.currentCountryInfo},b=function(e){return e.countries.currentInfoBoxType},g=m.reducer,C=a(185),O=a.n(C).a.create({baseURL:"https://disease.sh/v3/covid-19"}),w=a(482),j=a(496),x=a(501);a(259);var I=function(){var e=Object(i.b)(),t=Object(i.c)(p),a=Object(i.c)(E);return Object(n.useEffect)((function(){(function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/countries/").then((function(t){var a=t.data.map((function(e){return{name:e.country,value:e.countryInfo.iso2,id:e.countryInfo._id,cases:e.cases,recovered:e.recovered,deaths:e.deaths,countryInfo:e.countryInfo}}));e(v(a))})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement(w.a,{variant:"outlined"},r.a.createElement(j.a,{value:a.code,displayEmpty:!0,inputProps:{"aria-label":"Without label"},onChange:function(t){var a=t.target.value;O.get("".concat("Worldwide"===a?"/all":"/countries/".concat(a,"?strict=true"))).then((function(t){var n=t.data;return e(y({country:"Worldwide"===a?"Worldwide":n.country,code:a,cases:n.cases,todayCases:n.todayCases,deaths:n.deaths,todayDeaths:n.todayDeaths,recovered:n.recovered,todayRecovered:n.todayRecovered,tests:n.tests,lat:"Worldwide"===a?null:n.countryInfo.lat,lng:"Worldwide"===a?null:n.countryInfo.long,flag:"Worldwide"===a?null:n.countryInfo.flag}))})).catch((function(e){return console.log(e)}))}},r.a.createElement(x.a,{value:"Worldwide"},"WorldWide"),t.map((function(e,t){return r.a.createElement(x.a,{value:e.value,key:t},e.name)}))))};a(260);var _=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Covid-19 Tracker"),r.a.createElement(I,null))},W=a(46),k=a.n(W),N=a(486),S=a(487),B=a(488),R=a(489);a(261);var D=function(e){var t=e.title,a=e.cases,n=e.total,c=e.type,o=Object(i.b)(),l=Object(i.c)(b);return r.a.createElement(N.a,null,r.a.createElement(S.a,{onClick:function(){o(h(c))}},r.a.createElement("div",{className:"infoBox__selected ".concat(c===l?c:null)}),r.a.createElement(B.a,null,r.a.createElement(R.a,{color:"textSecondary"},t),r.a.createElement(R.a,{variant:"h4",className:"".concat(c===l?"".concat(c,"__text"):null)},a>0?k()(parseInt(a)).format("+0.0a"):a),r.a.createElement(R.a,{color:"textSecondary"},n>0?k()(parseInt(n)).format("+0.0a"):n))))},T=a(491),M=a(495),z=a(494),J=a(490),K=a(492),L=a(493),q=a(445),A=a(497),G=a(498),H={cases:{hex:"#CC1034",multiplier:400},recovered:{hex:"#7dd71d",multiplier:600},deaths:{hex:"#fb4443",multiplier:500}},P=function(e,t){return e.cases<t.cases?1:e.cases>t.cases?-1:0},U=function(e){var t=[];return Object.keys(e.cases).forEach((function(a){t.push({day:a,cases:e.cases[a],recovered:e.recovered[a],deaths:e.deaths[a]})})),t};a(262);var V=function(){var e=Object(i.c)(p);return r.a.createElement("div",{className:"tableCountries"},r.a.createElement(q.a,{elevation:1},r.a.createElement(R.a,{variant:"h5",component:"h4",color:"textSecondary"},"Live Cases By Country"),r.a.createElement(J.a,{component:q.a},r.a.createElement(T.a,{className:"tableCountries",size:"small","aria-label":"a dense table",stickyHeader:!0},r.a.createElement(K.a,null,r.a.createElement(L.a,null,r.a.createElement(z.a,null,"Country"),r.a.createElement(z.a,{align:"right"},"Cases"))),r.a.createElement(M.a,null,e.filter((function(e){return null!=e.cases})).sort(P).map((function(e){return r.a.createElement(L.a,{key:e.name},r.a.createElement(z.a,{component:"th",scope:"row"},e.name),r.a.createElement(z.a,{align:"right"},e.cases))})))))))},$=a(70),F=a(499),Q=a(500);a(263),a(264);var X=function(){var e=Object(n.useState)({lat:34.80746,lng:-40.4796}),t=Object($.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(3),l=Object($.a)(o,2),s=l[0],u=l[1],d=Object(i.c)(E),m=Object(i.c)(p),f=Object(i.c)(b);return Object(n.useEffect)((function(){"Worldwide"===d.country?(c({lat:34.80746,lng:-40.4796}),u(3)):(c({lat:d.lat,lng:d.lng}),u(4))}),[d]),r.a.createElement("div",{className:"covidMap"},r.a.createElement(F.a,{center:a,zoom:s},r.a.createElement(Q.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"recovered";return e.map((function(e,a){return r.a.createElement(A.a,{key:a,center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:H[t].hex,fillColor:H[t].hex,radius:Math.sqrt(e[t])*H[t].multiplier},r.a.createElement(G.a,null,r.a.createElement("div",{className:"info__container"},r.a.createElement("div",{className:"info__flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info__name"},e.name),r.a.createElement("div",{className:"info__cases"},"Cases: ",k()(e.cases).format("0,0")),r.a.createElement("div",{className:"info__recovered"},"Recovered: ",k()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info__deaths"},"Deaths: ",k()(e.deaths).format("0,0")))))}))}(m,f)))},Y=a(39);a(442);var Z=function(){var e=Object(i.c)(E),t=Object(i.c)(b),a=Object(n.useState)([]),c=Object($.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var t=Object(u.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/historical".concat("Worldwide"===e.country?"/all":"/".concat(e.country),"?lastdays=30"));case 2:a=t.sent,n=a.data,l(U("Worldwide"===e.country?n:n.timeline));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),r.a.createElement("div",{className:"covidGraph"},r.a.createElement(Y.d,{width:"100%",height:"100%"},r.a.createElement(Y.c,{data:o,margin:{top:20,right:40,left:40,bottom:0}},r.a.createElement(Y.f,{dataKey:"day"}),r.a.createElement(Y.g,null),r.a.createElement(Y.e,null),r.a.createElement(Y.a,null),r.a.createElement(Y.b,{type:"monotone",dataKey:t,stroke:{cases:"#ff0000",recovered:"#49fc31",deaths:"#910000"}[t]}))))};a(443);var ee=function(){var e=Object(i.b)(),t=Object(i.c)(E);return Object(n.useEffect)((function(){(function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/all").then((function(t){var a=t.data;return e(y({country:"Worldwide",code:"Worldwide",cases:a.cases,todayCases:a.todayCases,deaths:a.deaths,todayDeaths:a.todayDeaths,recovered:a.recovered,todayRecovered:a.todayRecovered,tests:a.tests}))})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app__leftSide"},r.a.createElement(_,null),r.a.createElement("div",{className:"app__infoBoxes"},r.a.createElement(D,{title:"Corona Virus Cases",cases:t.todayCases,total:t.cases,type:"cases"}),r.a.createElement(D,{title:"Recovered",cases:t.todayRecovered,total:t.recovered,type:"recovered"}),r.a.createElement(D,{title:"Deaths",cases:t.todayDeaths,total:t.deaths,type:"deaths"})),r.a.createElement(X,null),r.a.createElement(Z,null)),r.a.createElement("div",{className:"app__rightSide"},r.a.createElement(V,null)))},te=Object(d.a)({reducer:{countries:g}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:te},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[232,1,2]]]);
//# sourceMappingURL=main.ef6abdcd.chunk.js.map