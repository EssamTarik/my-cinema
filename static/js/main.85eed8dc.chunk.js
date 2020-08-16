(this["webpackJsonpmy-cinema"]=this["webpackJsonpmy-cinema"]||[]).push([[0],{57:function(e,t,a){e.exports=a(96)},66:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(30),o=a.n(c),i=a(11),s=a(101),l=a(45),u=(a(66),a(19)),m=a(10),v=Object({NODE_ENV:"production",PUBLIC_URL:"/my-cinema",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TMDB_API_KEY:"42cbedfc1bc2e5e4990db149d22bb293",REACT_APP_TMDB_API_URL:"https://api.themoviedb.org/3",REACT_APP_TMDB_IMAGE_BASE_URL:"https://image.tmdb.org/t/p",REACT_APP_ROUTER_BASE_NAME:"/my-cinema"}),d=v.REACT_APP_TMDB_API_KEY,E=void 0===d?"":d,f=v.REACT_APP_TMDB_API_URL,h=void 0===f?"":f,p=v.REACT_APP_TMDB_IMAGE_BASE_URL,_=void 0===p?"":p,b=a(99),O=a(55),g=function(e){var t=e.onChange,a=Object(b.a)();return r.a.createElement(O.a.Control,{placeholder:a.formatMessage({id:"searchBar.placeholder"}),type:"text",onChange:function(e){var a=e.target.value;return t(a)}})},T=a(23),R=a(4),A=a.n(R),y=a(100),C=a(47),j=a(29),S=(a(68),function(){var e=Object(n.useState)(!1),t=Object(T.a)(e,2),a=t[0],c=t[1],o=Object(n.useCallback)((function(){c(!a)}),[a,c]);return r.a.createElement("div",{className:"navigation-bar"},r.a.createElement(u.b,{className:"navigation-bar__title",to:"/"},r.a.createElement(y.a,{id:"navBar.title"})),r.a.createElement("div",{onClick:o,className:A()("navigation-bar__menu",{"navigation-bar__menu--mobile-open":a})},r.a.createElement(u.b,{className:"navigation-bar__menu__item",to:"/"},r.a.createElement(y.a,{id:"navBar.search"})),r.a.createElement(u.b,{className:"navigation-bar__menu__item",to:"favorites"},r.a.createElement(y.a,{id:"navBar.favorites"})),r.a.createElement(u.b,{className:"navigation-bar__menu__item",to:"watch-later"},r.a.createElement(y.a,{id:"navBar.watchLater"})),r.a.createElement("button",{className:"navigation-bar__menu-close-btn"},r.a.createElement(j.b,{color:"white"}))),r.a.createElement("button",{onClick:o,className:"navigation-bar__menu-btn"},r.a.createElement(C.a,{size:20,color:"white"})))}),F=a(40),w=function(e){var t=e.movies,a=e.favorites,n=e.watchLater,c=e.addFavorite,o=e.removeFavorite,i=e.addWatchLater,s=e.removeWatchLater;return r.a.createElement($,{movies:t,favorites:a,watchLater:n,onAddToFavorites:c,onRemoveFromFavorites:o,onAddToWatchLater:i,onRemoveFromWatchLater:s})},L={addFavorite:function(e){return{type:"FAVORITE/ADD",payload:e}},removeFavorite:function(e){return{type:"FAVORITE/REMOVE",payload:e}},removeWatchLater:function(e){return{type:"WATCH_LATER/REMOVE",payload:e}},addWatchLater:function(e){return{type:"WATCH_LATER/ADD",payload:e}}},M=Object(i.b)((function(e){return{favorites:e.favorites,watchLater:e.watchLater}}),L)(w),I=function(e){var t=e.movieSearchState,a=t.isFetching,n=t.isFetched,c=t.data,o=t.error;if(a||!n||!c)return null;if(o)return r.a.createElement("div",{className:"movie-search__error"},o);var i=c.results;return r.a.createElement(M,{movies:i})},N=Object(i.b)((function(e){return{movieSearchState:e.movieSearch}}))(I),k=function(e){var t=e.favorites,a=Object.values(t);return r.a.createElement(M,{movies:a})},P=Object(i.b)((function(e){return{favorites:e.favorites}}))(k),V=function(e){var t=e.watchLater,a=Object.values(t);return r.a.createElement(M,{movies:a})},x=Object(i.b)((function(e){return{watchLater:e.watchLater}}))(V),D=a(14),H=a.n(D),B=a(18),W=a(39),U=function(){var e=Object(B.a)(H.a.mark((function e(t,a){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),q=function(){var e=Object(B.a)(H.a.mark((function e(t){var a,n,r,c,o,i=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:1,n=i.length>2&&void 0!==i[2]?i[2]:h,r=i.length>3&&void 0!==i[3]?i[3]:E,c="search/movie?".concat(Object(W.stringify)({query:t,api_key:r,page:a})),e.next=6,U(c,n);case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(B.a)(H.a.mark((function e(t){var a,n,r,c,o=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:h,n=o.length>2&&void 0!==o[2]?o[2]:E,r="movie/".concat(t,"/trailers?").concat(Object(W.stringify)({api_key:n})),e.next=5,U(r,a);case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=(a(73),function(e){var t=e.resetMovieTrailer,a=e.onRequestClose,c=e.movie.id,o=e.trailerState,i=o.data,s=o.error,l=o.isFetched,u=e.getMovieTrailer;Object(n.useEffect)((function(){u(c)}),[c,u]),Object(n.useEffect)((function(){return function(){t()}}),[t]);var m=l&&!i;return r.a.createElement(X,{onRequestClose:a},(m||s)&&r.a.createElement("div",{className:"movie-trailer-modal__not-found"},r.a.createElement(y.a,{id:"movieTrailer.notFound"})),i&&r.a.createElement(ee,{trailer:i}))}),J={getMovieTrailer:function(e){return function(){var t=Object(B.a)(H.a.mark((function t(a){var n,r,c,o,i;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"MOVIE_TRAILER_FETCH/START"}),t.prev=1,t.next=4,K(e);case 4:n=t.sent,r=n.youtube,c=r[0],a({type:"MOVIE_TRAILER_FETCH/SUCCESS",payload:c}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),o=t.t0,i=o.message,a({type:"MOVIE_TRAILER_FETCH/FAILED",payload:i});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},resetMovieTrailer:function(){return{type:"MOVIE_TRAILER_FETCH/RESET"}}},Y=Object(i.b)((function(e){return{trailerState:e.trailer}}),J)(G),z=(a(74),function(e){var t,a,c=e.movie,o=e.favorite,i=void 0!==o&&o,s=e.watchLater,l=void 0!==s&&s,u=e.onAddToFavorites,m=e.onAddToWatchLater,v=e.onRemoveFromFavorites,d=e.onRemoveFromWatchLater,E=Object(n.useState)(!1),f=Object(T.a)(E,2),h=f[0],p=f[1],b=c.poster_path,O=c.original_title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movie-card"},r.a.createElement("button",{onClick:i?v:u,className:"movie-card__action-btn movie-card__fav-btn"},i?r.a.createElement(j.a,{fill:"yellow"}):r.a.createElement(j.c,{fill:"lightgrey"})),r.a.createElement("button",{onClick:l?d:m,className:"movie-card__action-btn movie-card__watch-later-btn"},l?r.a.createElement(F.a,{fill:"orange"}):r.a.createElement(F.a,{fill:"grey"})),r.a.createElement("div",{onClick:function(){return p(!0)},className:"movie-card__content"},b?r.a.createElement("img",{className:"movie-card__poster",src:(t=b,a=185,"".concat(_,"/w").concat(a).concat(t)),alt:O}):r.a.createElement("div",{className:"movie-card__poster-missing"},r.a.createElement(y.a,{id:"movie.posterMissing"}))),r.a.createElement("div",{className:"movie-card__title"},O)),h&&r.a.createElement(Y,{movie:c,onRequestClose:function(){return p(!1)}}))}),$=(a(75),function(e){var t=e.movies,a=e.favorites,n=e.watchLater,c=e.onAddToFavorites,o=e.onRemoveFromFavorites,i=e.onAddToWatchLater,s=e.onRemoveFromWatchLater;return 0===t.length?r.a.createElement("div",{className:"movie-grid__no-results"},r.a.createElement(y.a,{id:"movie.noResults"})):r.a.createElement("div",{className:"movie-grid"},t.map((function(e){var t=void 0!==a[e.id],l=void 0!==n[e.id];return r.a.createElement(z,{key:e.id,movie:e,favorite:t,watchLater:l,onAddToFavorites:function(){return c(e)},onAddToWatchLater:function(){return i(e)},onRemoveFromFavorites:function(){return o(e)},onRemoveFromWatchLater:function(){return s(e)}})})))}),Q=(a(76),function(e){var t=e.page,a=e.totalPages,n=e.onNextClick,c=e.onPreviousClick,o=t===a,i=1===t;return r.a.createElement("div",{className:"pagination"},r.a.createElement("div",{className:"pagination__prev-container"},r.a.createElement("button",{onClick:c,disabled:i,className:A()("pagination__btn")},r.a.createElement(y.a,{id:"pagination.previous"}))),r.a.createElement("div",{className:"pagination__next-container"},r.a.createElement("button",{onClick:n,disabled:o,className:A()("pagination__btn")},r.a.createElement(y.a,{id:"pagination.next"}))))}),X=(a(77),function(e){var t=e.onRequestClose,a=e.children;return r.a.createElement("div",{onClick:t,className:"full-screen-modal"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"modal__content"},a))}),Z=a(48),ee=(a(90),function(e){var t=e.trailer.source;return r.a.createElement("div",{className:"movie-trailer"},r.a.createElement(Z.a,{opts:{width:"100%"},videoId:t}))}),te=(a(91),function(e){var t=e.children;return r.a.createElement("div",{className:"main-layout"},r.a.createElement(S,null),r.a.createElement("div",{className:"main-layout__content"},t))}),ae=a(51),ne=a.n(ae),re=(a(92),function(e){var t=e.resetMovieSearch,a=e.movieSearchState,c=e.searchMovies,o=Object(n.useState)(""),i=Object(T.a)(o,2),s=i[0],l=i[1];Object(n.useEffect)((function(){return function(){t()}}),[t]);var u=Object(n.useCallback)((function(e,t){c(e,t)}),[c]),m=Object(n.useCallback)(ne()((function(e){l(e),u(e,1)}),500),[l,u]),v=Object(n.useCallback)((function(e){u(s,e)}),[s,u]),d=a.data;return r.a.createElement("div",{className:"search-page"},r.a.createElement("div",{className:"search-page__search-bar-container"},r.a.createElement(g,{onChange:m})),r.a.createElement("div",{className:"search-page__search-results-container"},r.a.createElement(N,null)),d&&d.total_pages>0&&r.a.createElement(Q,{totalPages:d.total_pages,page:d.page,onNextClick:function(){return v(d.page+1)},onPreviousClick:function(){return v(d.page-1)}}))}),ce=function(){return{type:"MOVIE_SEARCH/RESET"}},oe={searchMovies:function(e,t){return function(){var a=Object(B.a)(H.a.mark((function a(n){var r,c,o;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n({type:"MOVIE_SEARCH/START"}),e){a.next=3;break}return a.abrupt("return",n({type:"MOVIE_SEARCH/RESET"}));case 3:return a.prev=3,a.next=6,q(e,t);case 6:r=a.sent,n({type:"MOVIE_SEARCH/SUCCESS",payload:r}),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(3),c=a.t0,o=c.message,n({type:"MOVIE_SEARCH/FAILED",payload:o});case 14:case"end":return a.stop()}}),a,null,[[3,10]])})));return function(e){return a.apply(this,arguments)}}()},resetMovieSearch:ce},ie=Object(i.b)((function(e){return{movieSearchState:e.movieSearch}}),oe)(re),se=function(){return r.a.createElement(P,null)},le=function(){return r.a.createElement(x,null)};var ue=function(){return r.a.createElement(u.a,{basename:"/my-cinema"},r.a.createElement(te,null,r.a.createElement(m.a,{exact:!0,path:"/",component:ie}),r.a.createElement(m.a,{exact:!0,path:"/favorites",component:se}),r.a.createElement(m.a,{exact:!0,path:"/watch-later",component:le})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(15),ve=a(52),de=a(41),Ee=a(53),fe=a.n(Ee),he=a(54),pe=a(7),_e={isFetched:!1,isFetching:!1},be=a(22),Oe={},ge={},Te={isFetched:!1,isFetching:!1},Re=Object(me.combineReducers)({movieSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_SEARCH/START":return Object(pe.a)(Object(pe.a)({},_e),{},{isFetching:!0});case"MOVIE_SEARCH/FAILED":return Object(pe.a)(Object(pe.a)({},_e),{},{isFetched:!1,isFetching:!1,error:t.payload});case"MOVIE_SEARCH/SUCCESS":return Object(pe.a)(Object(pe.a)({},_e),{},{isFetched:!0,isFetching:!1,data:t.payload});case"MOVIE_SEARCH/RESET":return _e;default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAVORITE/ADD":var a=t.payload.id;return Object(pe.a)(Object(pe.a)({},e),{},Object(be.a)({},a,t.payload));case"FAVORITE/REMOVE":var n=t.payload.id;return delete e[n],Object(pe.a)({},e);default:return e}},watchLater:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WATCH_LATER/ADD":var a=t.payload.id;return Object(pe.a)(Object(pe.a)({},e),{},Object(be.a)({},a,t.payload));case"WATCH_LATER/REMOVE":var n=t.payload.id;return delete e[n],Object(pe.a)({},e);default:return e}},trailer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_TRAILER_FETCH/START":return Object(pe.a)(Object(pe.a)({},Te),{},{isFetching:!0});case"MOVIE_TRAILER_FETCH/FAILED":return Object(pe.a)(Object(pe.a)({},Te),{},{isFetched:!1,isFetching:!1,error:t.payload});case"MOVIE_TRAILER_FETCH/SUCCESS":return Object(pe.a)(Object(pe.a)({},Te),{},{isFetched:!0,isFetching:!1,data:t.payload});case"MOVIE_TRAILER_FETCH/RESET":return Te;default:return e}}}),Ae={key:"my-cinema",whitelist:["favorites","watchLater"],storage:fe.a},ye=[he.a],Ce=Object(de.a)(Ae,Re),je=Object(me.createStore)(Ce,Object(ve.composeWithDevTools)(me.applyMiddleware.apply(void 0,ye))),Se=Object(de.b)(je),Fe={en:Object(pe.a)(Object(pe.a)(Object(pe.a)(Object(pe.a)(Object(pe.a)({},{"searchBar.placeholder":"Type the name of a movie"}),{"navBar.search":"search","navBar.watchLater":"watch later","navBar.favorites":"favorites","navBar.title":"My Cinema"}),{"movie.posterMissing":"No preview available","movie.noResults":"No movies here"}),{"pagination.next":"next","pagination.previous":"previous"}),{"movieTrailer.notFound":"Trailer not found"})};a(95);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:je},r.a.createElement(l.a,{loading:null,persistor:Se},r.a.createElement(s.a,{locale:"en",messages:Fe.en},r.a.createElement(ue,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.85eed8dc.chunk.js.map