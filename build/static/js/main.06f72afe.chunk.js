(this.webpackJsonpcrypto_app=this.webpackJsonpcrypto_app||[]).push([[0],{159:function(e,c){},189:function(e,c,t){},298:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(28),n=t.n(s),r=t(33),i=t(39),l=t(29),o=t(300),j=t(302),d=t(309),h=(t(189),t(43)),b=t(306),u=t(172),O=t(308),x=t(310),p=t(311),m=t(312),v=t(313),g=t(314),y=t.p+"static/media/cryptocurrency.1548aced.png",f=t(4),N=function(){var e=Object(a.useState)(!0),c=Object(h.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(null),i=Object(h.a)(n,2),l=i[0],o=i[1];return Object(a.useEffect)((function(){var e=function(){return o(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){s(!(l<768))}),[l]),Object(f.jsxs)("div",{className:"nav-container",children:[Object(f.jsxs)("div",{className:"logo-container",children:[Object(f.jsx)(b.a,{src:y,size:"large"}),Object(f.jsx)(j.a.Title,{level:2,className:"logo",children:Object(f.jsx)(r.b,{to:"/Cryptosphere",children:"Cryptoverse"})}),Object(f.jsx)(u.a,{className:"menu-control-container",onClick:function(){return s(!t)},children:Object(f.jsx)(x.a,{})})]}),t&&Object(f.jsxs)(O.a,{theme:"dark",children:[Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(p.a,{}),children:Object(f.jsx)(r.b,{to:"/Cryptosphere",children:"Home"})}),Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(m.a,{}),children:Object(f.jsx)(r.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(v.a,{}),children:Object(f.jsx)(r.b,{to:"/exchanges",children:"Exchanges"})}),Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(g.a,{}),children:Object(f.jsx)(r.b,{to:"/news",children:"News"})})]})]})},w=t(32),C=t.n(w),k=t(305),S=t(92),P=t(54),T=t(301),E=t(84),A=t(42),F={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"ee116c5092msh79e40c6c9496bb1p128612jsn988c13148242"},I=function(e){return{url:e,headers:F}},q=Object(E.a)({reducerPath:"cryptoApi",baseQuery:Object(A.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return I("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return I("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var c=e.coinId,t=e.timePeriod;return I("/coin/".concat(c,"/history?timePeriod=").concat(t))}})}}}),_=q.useGetCryptosQuery,M=q.useGetCryptoDetailsQuery,H=q.useGetCryptoHistoryQuery,L=t(299),U=function(){return Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)(L.a,{})})},V=function(e){var c=e.simplified,t=_(c?10:96),s=t.data,n=t.isFetching,i=Object(a.useState)([]),l=Object(h.a)(i,2),o=l[0],j=l[1],d=Object(a.useState)(""),b=Object(h.a)(d,2),u=b[0],O=b[1];return Object(a.useEffect)((function(){var e,c=null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));j(c)}),[s,u]),n?U:Object(f.jsxs)(f.Fragment,{children:[!c&&Object(f.jsx)("div",{className:"search-crypto",children:Object(f.jsx)(k.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return O(e.target.value)}})}),Object(f.jsx)(S.a,{gutter:[32,32],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(f.jsx)(P.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(f.jsx)(r.b,{to:"/crypto/".concat(e.uuid),children:Object(f.jsxs)(T.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(f.jsx)("img",{className:"crypto-image",src:e.iconUrl,alt:"coin"}),hoverable:!0,children:[Object(f.jsxs)("p",{children:["Price: ",C()(e.price)]}),Object(f.jsxs)("p",{children:["Market Cap: ",C()(e.marketCap)]}),Object(f.jsxs)("p",{children:["Daily Change: ",C()(e.change),"% "]})]})})},e.uuid)}))})]})},D=t(303),Q=j.a.Title,$=function(){var e,c=_(10),t=c.data;if(c.isFetching)return U;var a=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Q,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)(P.a,{span:12,children:Object(f.jsx)(D.a,{title:"Total Cryptocurrenices",value:a.total})}),Object(f.jsx)(P.a,{span:12,children:Object(f.jsx)(D.a,{title:"Total Exchanges",value:C()(a.totalExchanges)})}),Object(f.jsx)(P.a,{span:12,children:Object(f.jsx)(D.a,{title:"Total Market Cap",value:C()(a.totalMarketCap)})}),Object(f.jsx)(P.a,{span:12,children:Object(f.jsx)(D.a,{title:"Total 24h Volume",value:C()(a.total24hVolume)})}),Object(f.jsx)(P.a,{span:12,children:Object(f.jsx)(D.a,{title:"Total Markets",value:C()(a.totalMarkets)})})]}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(Q,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(f.jsx)(Q,{level:3,className:"show-more",children:Object(f.jsx)(r.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object(f.jsx)(V,{simplified:!0}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(Q,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(f.jsx)(Q,{level:3,className:"show-more",children:Object(f.jsx)(r.b,{to:"/news",children:"Show More"})})]}),Object(f.jsx)(le,{simplified:!0})]})},G=t(307),R=t(123),z={"X-RapidAPI-Host":"coingecko.p.rapidapi.com","X-RapidAPI-Key":"fac9c967f1mshb0891bed0d223f5p1f977fjsnd9031551ed8e"},W=Object(E.a)({reducerPath:"exchangesApi",baseQuery:Object(A.d)({baseUrl:"https://coingecko.p.rapidapi.com"}),endpoints:function(e){return{getExchanges:e.query({query:function(){return{url:"/exchanges",headers:z}}})}}}),J=W.useGetExchangesQuery,K=j.a.Text,X=G.a.Panel,B=function(){var e=J(),c=e.data,t=e.isFetching;if(console.log(t),t)return Object(f.jsx)(U,{});var a=c;return console.log(a),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{children:[Object(f.jsx)(P.a,{span:6,children:"Exchanges"}),Object(f.jsx)(P.a,{span:6,children:"Year Established"}),Object(f.jsx)(P.a,{span:6,children:"24h Trade Volume"}),Object(f.jsx)(P.a,{span:6,children:"Trust Score"})]}),Object(f.jsx)(S.a,{children:a.map((function(e){return Object(f.jsx)(P.a,{span:24,children:Object(f.jsx)(G.a,{accordion:!0,children:Object(f.jsx)(X,{showArrow:!1,header:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(P.a,{span:6,children:[Object(f.jsx)(K,{children:Object(f.jsxs)("strong",{children:[e.trust_score_rank,"."]})}),Object(f.jsx)(b.a,{className:"exchange-image",src:e.image}),Object(f.jsx)(K,{children:Object(f.jsx)("strong",{children:e.name})})]}),Object(f.jsx)(P.a,{span:6,children:e.year_established}),Object(f.jsx)(P.a,{span:6,children:C()(e.trade_volume_24h_btc)}),Object(f.jsx)(P.a,{span:6,children:e.trust_score})]}),children:Object(R.a)(e.description||"")},e.id)})})}))})]})},Y=t(304),Z=t(168),ee=t.n(Z),ce={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com/news","x-rapidapi-key":"ee116c5092msh79e40c6c9496bb1p128612jsn988c13148242"},te=Object(E.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(A.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com/news"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var c=e.newsCategory,t=e.count;return{url:"/search?q=".concat(c,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(t),headers:ce}}})}}}),ae=te.useGetCryptoNewsQuery,se=j.a.Text,ne=j.a.Title,re=Y.a.Option,ie="http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg",le=function(e){var c,t=e.simplified,s=Object(a.useState)("Cryptocurrency"),n=Object(h.a)(s,2),r=n[0],i=n[1],l=t?6:12,o=_(100).data,j=ae({newsCategory:r,count:l}),d=j.data,u=j.isFetching,O=Object(a.useState)([]),x=Object(h.a)(O,2);x[0],x[1];return u?U:Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(S.a,{gutter:[24,24],children:[!t&&Object(f.jsx)(P.a,{span:24,children:Object(f.jsxs)(Y.a,{showSearch:!0,className:"select-news",placeholder:"Select a new Crypto",optionFilterProp:"children",onChange:function(e){return i(e)},filterOption:function(e,c){return c.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(f.jsx)(re,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===o||void 0===o||null===(c=o.data)||void 0===c?void 0:c.coins.map((function(e){return Object(f.jsx)(re,{value:e.name,children:e.name})}))]})}),d.value.map((function(e,c){var t,a,s,n,r,i;return Object(f.jsx)(P.a,{xs:24,sm:12,lg:8,children:Object(f.jsx)(T.a,{hoverable:!0,className:"news-card",children:Object(f.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(f.jsxs)("div",{className:"news-image-container",children:[Object(f.jsx)(ne,{className:"news-title",level:4,children:e.name}),Object(f.jsx)("img",{src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(a=t.thumbnail)||void 0===a?void 0:a.contentUrl)||ie,alt:"news",style:{maxWidth:"200px",maxHeight:"100px"}})]}),Object(f.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(f.jsxs)("div",{className:"provider-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(r=n.thumbnail)||void 0===r?void 0:r.contentUrl)||ie,alt:"news"}),Object(f.jsx)(se,{className:"provider-name",children:null===(i=e.provider[0])||void 0===i?void 0:i.name})]}),Object(f.jsx)(se,{children:ee()(e.datePublished).startOf("ss").fromNow()})]})]})})},c)}))]})})},oe=t(315),je=t(316),de=t(317),he=t(318),be=t(124),ue=t(319),Oe=t(176),xe=t(175),pe=t(31);pe.d.register(pe.c,pe.i,pe.k,pe.h,pe.o,pe.p,pe.f);var me,ve=function(e){var c,t=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],r=[];console.log(t);for(var i=(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length)-1;i>=0;i-=1){var l,o,d,h;n.push(null===t||void 0===t||null===(d=t.data)||void 0===d?void 0:d.history[i].price),r.push(new Date(1e3*(null===t||void 0===t||null===(h=t.data)||void 0===h?void 0:h.history[i].timestamp)).toLocaleDateString("en-UK"))}var b={labels:r,datasets:[{label:"Price In USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{className:"chart-header",children:[Object(f.jsxs)(j.a.Title,{level:2,className:"chart-title",children:[s," Price Chart"," "]}),Object(f.jsxs)(P.a,{className:"price-container",children:[Object(f.jsxs)(j.a.Title,{level:5,className:"price-change",children:["Change: ",null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(f.jsxs)(j.a.Title,{level:5,className:"current-price",children:["Current ",s," Price: $ ",a]})]})]}),Object(f.jsx)(xe.a,{data:b,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},ge=j.a.Title,ye=j.a.Text,fe=Y.a.Option,Ne=function(){var e,c=Object(l.f)().coinId,t=Object(a.useState)("24h"),s=Object(h.a)(t,2),n=s[0],r=s[1],i=M(c),o=i.data,j=i.isFetching,d=H({coinId:c,timePeriod:n}).data,b=null===o||void 0===o||null===(e=o.data)||void 0===e?void 0:e.coin;if(j)return U;var u=[{title:"Price to USD",value:"$ ".concat(b.price&&C()(b.price)),icon:Object(f.jsx)(oe.a,{})},{title:"Rank",value:b.rank,icon:Object(f.jsx)(je.a,{})},{title:"24h Volume",value:"$ ".concat(b["24hVolume"]&&C()(b["24hVolume"])),icon:Object(f.jsx)(de.a,{})},{title:"Market Cap",value:"$ ".concat(b.marketCap&&C()(b.marketCap)),icon:Object(f.jsx)(oe.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(C()(b.allTimeHigh.price)),icon:Object(f.jsx)(he.a,{})}],O=[{title:"Number Of Markets",value:b.numberOfMarkets,icon:Object(f.jsx)(m.a,{})},{title:"Number Of Exchanges",value:b.numberOfExchanges,icon:Object(f.jsx)(v.a,{})},{title:"Aprroved Supply",value:b.supply.confirmed?Object(f.jsx)(be.a,{}):Object(f.jsx)(ue.a,{}),icon:Object(f.jsx)(Oe.a,{})},{title:"Total Supply",value:"$ ".concat(C()(b.supply.circulating)),icon:Object(f.jsx)(Oe.a,{})},{title:"Circulating Supply",value:"$ ".concat(C()(b.supply.circulating)),icon:Object(f.jsx)(Oe.a,{})}];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(P.a,{className:"coin-detail-container",children:[Object(f.jsxs)(P.a,{className:"coin-heading-container",children:[Object(f.jsxs)(ge,{level:2,className:"coin-name",children:[b.name," (",b.symbol,") Price"]}),Object(f.jsxs)("p",{children:[b.name," live price in us dollars. View value statistics, market cap and supply."]})]}),Object(f.jsx)(Y.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return r(e)},children:["3h","24h","7d","30d","3m","1y","3y","5y"].map((function(e){return Object(f.jsx)(fe,{children:e},e)}))}),Object(f.jsx)(ve,{coinHistory:d,currentPrice:C()(b.price),coinName:b.name}),Object(f.jsxs)(P.a,{className:"stats-container",children:[Object(f.jsxs)(P.a,{className:"coin-value-statistics",children:[Object(f.jsxs)(P.a,{className:"coin-value-statistics-heading",children:[Object(f.jsxs)(ge,{level:3,className:"coin-detailes-heading",children:[b.name," Value Statistics"]}),Object(f.jsxs)("p",{children:["An overview of showing the stats of ",b.name]})]}),u.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(f.jsxs)(P.a,{className:"coin-stats",children:[Object(f.jsxs)(P.a,{className:"coin-stats-name",children:[Object(f.jsx)(ye,{children:c}),Object(f.jsx)(ye,{children:t})]}),Object(f.jsx)(ye,{className:"stats",children:a})]})}))]}),Object(f.jsxs)(P.a,{className:"other-stats-info",children:[Object(f.jsxs)(P.a,{className:"coin-value-statistics-heading",children:[Object(f.jsx)(ge,{level:3,className:"coin-detailes-heading",children:"Other Statistics"}),Object(f.jsx)("p",{children:"An overview showing the stats of all cryptocurrencies"})]}),O.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(f.jsxs)(P.a,{className:"coin-stats",children:[Object(f.jsxs)(P.a,{className:"coin-stats-name",children:[Object(f.jsx)(ye,{children:c}),Object(f.jsx)(ye,{children:t})]}),Object(f.jsx)(ye,{className:"stats",children:a})]})}))]})]}),Object(f.jsxs)(P.a,{className:"coin-desc-link",children:[Object(f.jsx)(S.a,{className:"coin-desc",children:Object(f.jsxs)(ge,{level:3,className:"coin-details-heading",children:["What is ",b.name,Object(R.a)(b.description)]})}),Object(f.jsxs)(P.a,{className:"coin-links",children:[Object(f.jsxs)(ge,{level:3,className:"coin-details-heading",children:[b.name," Links"]}),b.links.map((function(e){return Object(f.jsxs)(S.a,{className:"coin-link",children:[Object(f.jsx)(ge,{level:5,className:"link-name",children:e.type}),Object(f.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})})},we=(t(159),function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("div",{className:"navbar",children:Object(f.jsx)(N,{})}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)(o.a,{children:Object(f.jsx)("div",{className:"routes",children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/Cryptosphere",children:Object(f.jsx)($,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/exchanges",children:Object(f.jsx)(B,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/cryptocurrencies",children:Object(f.jsx)(V,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/crypto/:coinId",children:Object(f.jsx)(Ne,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/news",children:Object(f.jsx)(le,{})})]})})}),Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsxs)(j.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoverse ",Object(f.jsx)("br",{}),"All rights not reserved"]}),Object(f.jsxs)(d.b,{children:[Object(f.jsx)(r.b,{to:"/Cryptosphere",children:"Home"}),Object(f.jsx)(r.b,{to:"/exchanges",children:"Exchanges"}),Object(f.jsx)(r.b,{to:"/news",children:"News"})]})]})]})]})}),Ce=t(30),ke=t(11),Se=Object(ke.a)({reducer:(me={},Object(Ce.a)(me,q.reducerPath,q.reducer),Object(Ce.a)(me,te.reducerPath,te.reducer),Object(Ce.a)(me,W.reducerPath,W.reducer),me)});t(297);n.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(i.a,{store:Se,children:Object(f.jsx)(we,{})})}),document.getElementById("root"))}},[[298,1,2]]]);
//# sourceMappingURL=main.06f72afe.chunk.js.map