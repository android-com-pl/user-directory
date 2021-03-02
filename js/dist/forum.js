module.exports=function(t){var r={};function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(o,n,function(r){return t[r]}.bind(null,n));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=19)}([function(t,r){t.exports=flarum.core.compat.app},function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));var o=function(){function t(){}return t.prototype.sortMap=function(){return{username_az:"username",username_za:"-username",newest:"-joinedAt",oldest:"joinedAt",seen_recent:"-lastSeenAt",seen_oldest:"lastSeenAt",most_discussions:"-discussionCount",least_discussions:"discussionCount"}},t}()},function(t,r){t.exports=flarum.core.compat["components/Button"]},function(t,r){t.exports=flarum.core.compat.Component},function(t,r){t.exports=flarum.core.compat["components/IndexPage"]},function(t,r){t.exports=flarum.core.compat["components/LinkButton"]},function(t,r){t.exports=flarum.core.compat["helpers/listItems"]},function(t,r){t.exports=flarum.core.compat.extend},function(t,r){t.exports=flarum.core.compat["utils/ItemList"]},function(t,r){t.exports=flarum.core.compat["components/UsersSearchSource"]},function(t,r){t.exports=flarum.core.compat["components/Page"]},function(t,r){t.exports=flarum.core.compat["components/Select"]},function(t,r){t.exports=flarum.core.compat["components/SelectDropdown"]},function(t,r){t.exports=flarum.core.compat["components/Dropdown"]},function(t,r){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,r){t.exports=flarum.core.compat["components/Placeholder"]},function(t,r){t.exports=flarum.core.compat["components/UserCard"]},function(t,r){t.exports=flarum.core.compat["helpers/icon"]},function(t,r){t.exports=flarum.core.compat["utils/withAttr"]},function(t,r,e){"use strict";e.r(r),e.d(r,"UserDirectoryPage",(function(){return Q})),e.d(r,"UserDirectoryList",(function(){return F})),e.d(r,"UserDirectoryListItem",(function(){return A})),e.d(r,"UserDirectoryState",(function(){return G})),e.d(r,"SortMap",(function(){return R.a}));var o=e(7),n=e(0),s=e.n(n),a=e(9),i=e.n(a),u=e(5),c=e.n(u),l=e(4),f=e.n(l);function p(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r}var d=e(10),h=e.n(d),y=e(8),v=e.n(y),g=e(6),b=e.n(g),x=e(11),P=e.n(x),N=e(2),_=e.n(N),w=e(12),I=e.n(w),B=e(13),S=e.n(B),j=e(3),q=e.n(j),D=e(14),k=e.n(D),U=e(15),C=e.n(U),O=e(16),L=e.n(O),A=function(t){function r(){return t.apply(this,arguments)||this}return p(r,t),r.prototype.view=function(){var t=this.attrs.user;return m("div",{className:"User"},L.a.component({user:t,className:"UserCard--directory",controlsButtonClassName:"Button Button--icon Button--flat"}))},r}(q.a),F=function(t){function r(){return t.apply(this,arguments)||this}return p(r,t),r.prototype.view=function(){var t,r=this.attrs.state,e=r.getParams();if(r.isLoading()?t=k.a.component():r.moreResults&&(t=_.a.component({className:"Button",onclick:r.loadMore.bind(r)},s.a.translator.trans("fof-user-directory.forum.page.load_more_button"))),r.empty()){var o=s.a.translator.trans("fof-user-directory.forum.page.empty_text");return m("div",{className:"DiscussionList"},C.a.component({text:o}))}return m("div",{className:"UserDirectoryList"+(r.isSearchResults()?" UserDirectoryList--searchResults":"")},m("ul",{className:"UserDirectoryList-users"},r.users.map((function(t){return m("li",{key:t.id(),"data-id":t.id()},A.component({user:t,params:e}))}))),m("div",{className:"UserDirectoryList-loadMore"},t))},r}(q.a);function M(){return(M=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var R=e(1),G=function(){function t(t,r){void 0===t&&(t={}),void 0===r&&(r=window.app),this.params=t,this.app=r,this.users=[],this.moreResults=!1,this.loading=!1,this.qBuilder={}}var r=t.prototype;return r.requestParams=function(){var t={include:[],filter:{}},r=this.params.sort||app.forum.attribute("userDirectoryDefaultSort");return t.sort=this.sortMap()[r],this.params.q&&(t.filter.q=this.params.q),t},r.sortMap=function(){return M({default:""},(new R.a).sortMap())},r.getParams=function(){return this.params},r.clear=function(){this.users=[],m.redraw()},r.refreshParams=function(t){var r=this;this.hasUsers()&&!Object.keys(t).some((function(e){return r.getParams()[e]!==t[e]}))||(this.params=t,M(this.qBuilder,t.qBuilder||{}),console.log(this.params),this.params.q=Object.values(this.qBuilder).join(" ").trim(),this.refresh())},r.refresh=function(){var t=this;return this.loading=!0,this.clear(),this.loadResults().then((function(r){t.users=[],t.parseResults(r)}),(function(){t.loading=!1,m.redraw()}))},r.loadResults=function(t){var r=this.app.preloadedApiDocument();if(r)return Promise.resolve(r);var e=this.requestParams();return e.page={offset:t},e.include=e.include.join(","),this.app.store.find("users",e)},r.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},r.parseResults=function(t){var r;return(r=this.users).push.apply(r,t),this.loading=!1,this.moreResults=!!t.payload.links&&!!t.payload.links.next,m.redraw(),t},r.hasUsers=function(){return this.users.length>0},r.isLoading=function(){return this.loading},r.isSearchResults=function(){return!!this.params.q},r.empty=function(){return!this.hasUsers()&&!this.isLoading()},t}(),z=e(17),T=e.n(z),E=function(t){function r(){return t.apply(this,arguments)||this}return p(r,t),r.prototype.getButtonContent=function(r){var e=t.prototype.getButtonContent.call(this,r);return this.attrs.checked&&e.push(T()("fas fa-check",{className:"Button-icon ButtonCheck"})),e},r}(_.a),H=e(18),J=e.n(H),K=function(t){function r(){return t.apply(this,arguments)||this}p(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r)},e.view=function(){var t=this;return m("div",{className:"Form-group Usersearchbox"},m("input",{className:"FormControl",placeholder:s.a.translator.trans("fof-user-directory.forum.search.field.placeholder"),value:this.filter,oninput:J()("value",(function(r){t.filter=r,t.performNewSearch()}))}))},e.performNewSearch=function(){this.attrs.state.refreshParams(M({},this.attrs.state.getParams(),{qBuilder:{filter:this.filter}}))},r}(q.a),Q=function(t){function r(){return t.apply(this,arguments)||this}p(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r),this.state=new G({}),this.state.refreshParams(s.a.search.params()),this.bodyClass="User--directory";var e=[];this.params().q&&Array.from(this.params().q.matchAll(/group:([\d,]+)/g)).forEach((function(t){e.push(t[1])})),this.enabledGroupFilters=e.join(",").split(",").filter((function(t){return t}))},e.view=function(){return m("div",{className:"IndexPage"},f.a.prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,b()(this.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},b()(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},b()(this.actionItems().toArray()))),m(F,{state:this.state})))))},e.sidebarItems=function(){var t=f.a.prototype.sidebarItems();return t.replace("nav",I.a.component({buttonClassName:"Button",className:"App-titleControl"},this.navItems().toArray())),t},e.navItems=function(){var t=f.a.prototype.navItems(),r=this.stickyParams();return t.add("fof-user-directory",c.a.component({href:s.a.route("fof_user_directory",r),icon:"far fa-address-book"},s.a.translator.trans("fof-user-directory.forum.page.nav")),85),t},e.viewItems=function(){var t=this,r=new v.a,e=this.state.sortMap(),o={};for(var n in e)o[n]=s.a.translator.trans("fof-user-directory.lib.sort."+n);r.add("sort",P.a.component({options:o,value:this.params().sort||s.a.forum.attribute("userDirectoryDefaultSort"),onchange:this.changeParams.bind(this)}));var a=s.a.store.all("groups").filter((function(t){return"2"!==t.id()&&"3"!==t.id()})).map((function(r){return E.component({className:"GroupFilterButton",icon:r.icon(),checked:t.enabledGroupFilters.includes(r.id()),onclick:function(){var e=r.id();t.enabledGroupFilters.includes(e)?t.enabledGroupFilters=t.enabledGroupFilters.filter((function(t){return t!=e})):t.enabledGroupFilters.push(e),t.changeParams(t.params().sort)}},r.namePlural())}),this);return r.add("filterGroups",S.a.component({caretIcon:"fas fa-filter",label:s.a.translator.trans("fof-user-directory.forum.page.filter_button"),buttonClassName:"FormControl",className:"GroupFilterDropdown"},a)),r.add("search",K.component({state:this.state})),r},e.actionItems=function(){var t=this,r=new v.a;return r.add("refresh",_.a.component({title:s.a.translator.trans("fof-user-directory.forum.page.refresh_tooltip"),icon:"fas fa-sync",className:"Button Button--icon",onclick:function(){t.state.refresh(),s.a.session.user&&(s.a.store.find("users",s.a.session.user.id()),m.redraw())}})),r},e.changeParams=function(t){var r=this.params();t===s.a.forum.attribute("userDirectoryDefaultSort")?delete r.sort:r.sort=t,this.enabledGroupFilters.length>0?r.qBuilder={groups:"group:"+this.enabledGroupFilters.join(",")}:r.qBuilder={groups:""},this.state.refreshParams(r)},e.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},e.params=function(){return this.stickyParams()},r}(h.a);s.a.initializers.add("fof-user-directory",(function(t){t.routes.fof_user_directory={path:"/users",component:Q},Object(o.extend)(i.a.prototype,"view",(function(r,e){r&&(e=e.toLowerCase(),r.splice(1,0,m("li",c.a.component({href:t.route("fof_user_directory",{q:e}),icon:"fas fa-search"},t.translator.trans("fof-user-directory.forum.search.users_heading",{query:e})))))})),Object(o.extend)(f.a.prototype,"navItems",(function(r){t.forum.attribute("canSeeUserDirectoryLink")&&r.add("fof-user-directory",c.a.component({href:t.route("fof_user_directory"),icon:"far fa-address-book"},t.translator.trans("fof-user-directory.forum.page.nav")),85)}))}))}]);
//# sourceMappingURL=forum.js.map