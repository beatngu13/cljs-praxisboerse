// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs_praxisboerse.core');
goog.require('cljs.core.async');
goog.require('hoplon.twitter.bootstrap');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.iz = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
hoplon.app_pages._index_DOT_html.pw = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
hoplon.app_pages._index_DOT_html.first_name = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
hoplon.app_pages._index_DOT_html.signed_in_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.invalid_iz_QMARK_ = javelin.core.formula((function (G__19122,G__19123){
return ((G__19122.cljs$core$IFn$_invoke$arity$2 ? G__19122.cljs$core$IFn$_invoke$arity$2(/^$|[a-z]{4}\d{4}/,G__19123) : G__19122.call(null,/^$|[a-z]{4}\d{4}/,G__19123)) == null);
})).call(null,cljs.core.re_matches,hoplon.app_pages._index_DOT_html.iz);
hoplon.app_pages._index_DOT_html.handle_sign_in_BANG_ = (function hoplon$app_pages$_index_DOT_html$handle_sign_in_BANG_(content){
if(!((content == null))){
var G__19126_19128 = hoplon.app_pages._index_DOT_html.first_name;
var G__19127_19129 = cljs.core.cst$kw$firstName.cljs$core$IFn$_invoke$arity$1(content);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19126_19128,G__19127_19129) : cljs.core.reset_BANG_.call(null,G__19126_19128,G__19127_19129));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.signed_in_QMARK_,true) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.signed_in_QMARK_,true));
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.pw,"") : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.pw,""));
});
hoplon.app_pages._index_DOT_html.com = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__15461__auto___19159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___19159){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___19159){
return (function (state_19143){
var state_val_19144 = (state_19143[(1)]);
if((state_val_19144 === (1))){
var state_19143__$1 = state_19143;
var statearr_19145_19160 = state_19143__$1;
(statearr_19145_19160[(2)] = null);

(statearr_19145_19160[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19144 === (2))){
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19143__$1,(4),hoplon.app_pages._index_DOT_html.com);
} else {
if((state_val_19144 === (3))){
var inst_19141 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19143__$1,inst_19141);
} else {
if((state_val_19144 === (4))){
var inst_19132 = (state_19143[(2)]);
var inst_19133 = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(inst_19132);
var inst_19136 = cljs.core.cst$kw$topic.cljs$core$IFn$_invoke$arity$1(inst_19132);
var state_19143__$1 = (function (){var statearr_19146 = state_19143;
(statearr_19146[(7)] = inst_19133);

return statearr_19146;
})();
var G__19147_19161 = (((inst_19136 instanceof cljs.core.Keyword))?inst_19136.fqn:null);
switch (G__19147_19161) {
case "sign-in":
var statearr_19148_19163 = state_19143__$1;
(statearr_19148_19163[(1)] = (6));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_19136)].join('')));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19144 === (5))){
var inst_19138 = (state_19143[(2)]);
var state_19143__$1 = (function (){var statearr_19149 = state_19143;
(statearr_19149[(8)] = inst_19138);

return statearr_19149;
})();
var statearr_19150_19164 = state_19143__$1;
(statearr_19150_19164[(2)] = null);

(statearr_19150_19164[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19144 === (6))){
var inst_19133 = (state_19143[(7)]);
var inst_19134 = hoplon.app_pages._index_DOT_html.handle_sign_in_BANG_(inst_19133);
var state_19143__$1 = state_19143;
var statearr_19151_19165 = state_19143__$1;
(statearr_19151_19165[(2)] = inst_19134);

(statearr_19151_19165[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__15461__auto___19159))
;
return ((function (switch__15347__auto__,c__15461__auto___19159){
return (function() {
var hoplon$app_pages$_index_DOT_html$state_machine__15348__auto__ = null;
var hoplon$app_pages$_index_DOT_html$state_machine__15348__auto____0 = (function (){
var statearr_19155 = [null,null,null,null,null,null,null,null,null];
(statearr_19155[(0)] = hoplon$app_pages$_index_DOT_html$state_machine__15348__auto__);

(statearr_19155[(1)] = (1));

return statearr_19155;
});
var hoplon$app_pages$_index_DOT_html$state_machine__15348__auto____1 = (function (state_19143){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_19143);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e19156){if((e19156 instanceof Object)){
var ex__15351__auto__ = e19156;
var statearr_19157_19166 = state_19143;
(statearr_19157_19166[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19143);

return cljs.core.cst$kw$recur;
} else {
throw e19156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__19167 = state_19143;
state_19143 = G__19167;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
hoplon$app_pages$_index_DOT_html$state_machine__15348__auto__ = function(state_19143){
switch(arguments.length){
case 0:
return hoplon$app_pages$_index_DOT_html$state_machine__15348__auto____0.call(this);
case 1:
return hoplon$app_pages$_index_DOT_html$state_machine__15348__auto____1.call(this,state_19143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hoplon$app_pages$_index_DOT_html$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = hoplon$app_pages$_index_DOT_html$state_machine__15348__auto____0;
hoplon$app_pages$_index_DOT_html$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = hoplon$app_pages$_index_DOT_html$state_machine__15348__auto____1;
return hoplon$app_pages$_index_DOT_html$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___19159))
})();
var state__15463__auto__ = (function (){var statearr_19158 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_19158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___19159);

return statearr_19158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___19159))
);

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19170 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css"));
var G__19171 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css"));
var G__19172 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__19170,G__19171,G__19172) : hoplon.core.head.call(null,G__19170,G__19171,G__19172));
})(),(function (){var G__19592 = (function (){var G__19806 = cljs.core.cst$kw$class;
var G__19807 = "navbar navbar-inverse navbar-fixed-top";
var G__19808 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19831 = cljs.core.cst$kw$class;
var G__19832 = "navbar-header";
var G__19833 = (function (){var G__19838 = cljs.core.cst$kw$type;
var G__19839 = "button";
var G__19840 = cljs.core.cst$kw$class;
var G__19841 = "navbar-toggle collapsed";
var G__19842 = cljs.core.cst$kw$data_DASH_toggle;
var G__19843 = "collapse";
var G__19844 = cljs.core.cst$kw$data_DASH_target;
var G__19845 = "#navbar";
var G__19846 = cljs.core.cst$kw$aria_DASH_expanded;
var G__19847 = "false";
var G__19848 = cljs.core.cst$kw$aria_DASH_controls;
var G__19849 = "navbar";
var G__19850 = (function (){var G__19854 = cljs.core.cst$kw$class;
var G__19855 = "sr-only";
var G__19856 = document.createTextNode("Toggle navigation");
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__19854,G__19855,G__19856) : hoplon.core.span.call(null,G__19854,G__19855,G__19856));
})();
var G__19851 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__19852 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__19853 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$16 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$16(G__19838,G__19839,G__19840,G__19841,G__19842,G__19843,G__19844,G__19845,G__19846,G__19847,G__19848,G__19849,G__19850,G__19851,G__19852,G__19853) : hoplon.core.button.call(null,G__19838,G__19839,G__19840,G__19841,G__19842,G__19843,G__19844,G__19845,G__19846,G__19847,G__19848,G__19849,G__19850,G__19851,G__19852,G__19853));
})();
var G__19834 = (function (){var G__19857 = cljs.core.cst$kw$class;
var G__19858 = "navbar-brand";
var G__19859 = cljs.core.cst$kw$href;
var G__19860 = "http://www.iwi.hs-karlsruhe.de/boerse";
var G__19861 = document.createTextNode("Praxisb\u00F6rse");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__19857,G__19858,G__19859,G__19860,G__19861) : hoplon.core.a.call(null,G__19857,G__19858,G__19859,G__19860,G__19861));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__19831,G__19832,G__19833,G__19834) : hoplon.core.div.call(null,G__19831,G__19832,G__19833,G__19834));
})(),(function (){var G__19937 = cljs.core.cst$kw$id;
var G__19938 = "navbar";
var G__19939 = cljs.core.cst$kw$class;
var G__19940 = "navbar-collapse collapse";
var G__19941 = (function (){var con__13355__auto__ = (new cljs.core.Delay(((function (G__19937,G__19938,G__19939,G__19940,G__19806,G__19807){
return (function (){
var G__19949 = (function (){var G__19952 = cljs.core.cst$kw$class;
var G__19953 = "navbar-text pull-right";
var G__19954 = (function (){var t__13416__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13416__auto__,G__19952,G__19953,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807){
return (function (G__19955,G__19956){
return G__19955.nodeValue = [cljs.core.str("Hi, "),cljs.core.str(G__19956),cljs.core.str("!")].join('');
});})(t__13416__auto__,G__19952,G__19953,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807))
).call(null,t__13416__auto__,hoplon.app_pages._index_DOT_html.first_name);

return t__13416__auto__;
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__19952,G__19953,G__19954) : hoplon.core.p.call(null,G__19952,G__19953,G__19954));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__19949) : hoplon.core.div.call(null,G__19949));
});})(G__19937,G__19938,G__19939,G__19940,G__19806,G__19807))
,null));
var alt__13356__auto__ = (new cljs.core.Delay(((function (con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807){
return (function (){
var G__19972 = cljs.core.cst$kw$class;
var G__19973 = "navbar-form navbar-right";
var G__19974 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"5px"], null),cljs.core.cst$kw$class,javelin.core.formula(((function (G__19972,G__19973,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807){
return (function (G__19977){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$has_DASH_error,G__19977], null);
});})(G__19972,G__19973,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807))
).call(null,hoplon.app_pages._index_DOT_html.invalid_iz_QMARK_),(function (){var G__19980 = cljs.core.cst$kw$type;
var G__19981 = "text";
var G__19982 = cljs.core.cst$kw$placeholder;
var G__19983 = "IZ account";
var G__19984 = cljs.core.cst$kw$class;
var G__19985 = "form-control";
var G__19986 = cljs.core.cst$kw$value;
var G__19987 = hoplon.app_pages._index_DOT_html.iz;
var G__19988 = cljs.core.cst$kw$change;
var G__19989 = ((function (G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19972,G__19973,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807){
return (function (p1__19168_SHARP_){
var G__19990 = hoplon.app_pages._index_DOT_html.iz;
var G__19991 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__19168_SHARP_) : cljs.core.deref.call(null,p1__19168_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19990,G__19991) : cljs.core.reset_BANG_.call(null,G__19990,G__19991));
});})(G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19972,G__19973,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19989) : hoplon.core.input.call(null,G__19980,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986,G__19987,G__19988,G__19989));
})()], 0));
var G__19975 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"5px"], null),cljs.core.cst$kw$class,javelin.core.formula(((function (G__19972,G__19973,G__19974,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807){
return (function (G__19992){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$has_DASH_error,G__19992], null);
});})(G__19972,G__19973,G__19974,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807))
).call(null,hoplon.app_pages._index_DOT_html.invalid_iz_QMARK_),(function (){var G__19995 = cljs.core.cst$kw$type;
var G__19996 = "password";
var G__19997 = cljs.core.cst$kw$placeholder;
var G__19998 = "Password";
var G__19999 = cljs.core.cst$kw$class;
var G__20000 = "form-control";
var G__20001 = cljs.core.cst$kw$value;
var G__20002 = hoplon.app_pages._index_DOT_html.pw;
var G__20003 = cljs.core.cst$kw$change;
var G__20004 = ((function (G__19995,G__19996,G__19997,G__19998,G__19999,G__20000,G__20001,G__20002,G__20003,G__19972,G__19973,G__19974,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807){
return (function (p1__19169_SHARP_){
var G__20005 = hoplon.app_pages._index_DOT_html.pw;
var G__20006 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__19169_SHARP_) : cljs.core.deref.call(null,p1__19169_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20005,G__20006) : cljs.core.reset_BANG_.call(null,G__20005,G__20006));
});})(G__19995,G__19996,G__19997,G__19998,G__19999,G__20000,G__20001,G__20002,G__20003,G__19972,G__19973,G__19974,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__19995,G__19996,G__19997,G__19998,G__19999,G__20000,G__20001,G__20002,G__20003,G__20004) : hoplon.core.input.call(null,G__19995,G__19996,G__19997,G__19998,G__19999,G__20000,G__20001,G__20002,G__20003,G__20004));
})()], 0));
var G__19976 = (function (){var G__20007 = cljs.core.cst$kw$type;
var G__20008 = "submit";
var G__20009 = cljs.core.cst$kw$class;
var G__20010 = "btn btn-success";
var G__20011 = cljs.core.cst$kw$disabled;
var G__20012 = hoplon.app_pages._index_DOT_html.invalid_iz_QMARK_;
var G__20013 = cljs.core.cst$kw$click;
var G__20014 = ((function (G__20007,G__20008,G__20009,G__20010,G__20011,G__20012,G__20013,G__19972,G__19973,G__19974,G__19975,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807){
return (function (){
return cljs_praxisboerse.core.sign_in_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.iz) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.iz)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.pw) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.pw)),hoplon.app_pages._index_DOT_html.com);
});})(G__20007,G__20008,G__20009,G__20010,G__20011,G__20012,G__20013,G__19972,G__19973,G__19974,G__19975,con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807))
;
var G__20015 = document.createTextNode("Sign in");
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$9(G__20007,G__20008,G__20009,G__20010,G__20011,G__20012,G__20013,G__20014,G__20015) : hoplon.core.button.call(null,G__20007,G__20008,G__20009,G__20010,G__20011,G__20012,G__20013,G__20014,G__20015));
})();
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$5(G__19972,G__19973,G__19974,G__19975,G__19976) : hoplon.core.form.call(null,G__19972,G__19973,G__19974,G__19975,G__19976));
});})(con__13355__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807))
,null));
var tpl__13357__auto__ = ((function (con__13355__auto__,alt__13356__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807){
return (function (p__13358__auto__){
var G__20016 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__13358__auto__)?con__13355__auto__:alt__13356__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20016) : cljs.core.deref.call(null,G__20016));
});})(con__13355__auto__,alt__13356__auto__,G__19937,G__19938,G__19939,G__19940,G__19806,G__19807))
;
return javelin.core.formula(tpl__13357__auto__).call(null,hoplon.app_pages._index_DOT_html.signed_in_QMARK_);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__19937,G__19938,G__19939,G__19940,G__19941) : hoplon.core.div.call(null,G__19937,G__19938,G__19939,G__19940,G__19941));
})()], 0));
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$3(G__19806,G__19807,G__19808) : hoplon.core.nav.call(null,G__19806,G__19807,G__19808));
})();
var G__19593 = (function (){var G__20032 = cljs.core.cst$kw$class;
var G__20033 = "jumbotron";
var G__20034 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("cljs-praxisboerse") : hoplon.core.h1.call(null,"cljs-praxisboerse")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("This is a rudimentary single-page application (SPA) built with ClojureScript and Hoplon, written as part of\n           a showcase about JavaScript alternatives. Based on the User Interfaces Laboratory (winter semester 2015),\n           this application provides a lightweight browser for the Praxisb\u00F6rse in English language.") : hoplon.core.p.call(null,"This is a rudimentary single-page application (SPA) built with ClojureScript and Hoplon, written as part of\n           a showcase about JavaScript alternatives. Based on the User Interfaces Laboratory (winter semester 2015),\n           this application provides a lightweight browser for the Praxisb\u00F6rse in English language.")),(function (){var G__20042 = (function (){var G__20043 = cljs.core.cst$kw$class;
var G__20044 = "btn btn-primary btn-lg";
var G__20045 = cljs.core.cst$kw$href;
var G__20046 = "https://www.github.com/beatngu13/cljs-praxisboerse";
var G__20047 = cljs.core.cst$kw$role;
var G__20048 = "button";
var G__20049 = document.createTextNode("View on GitHub \u00BB");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$7(G__20043,G__20044,G__20045,G__20046,G__20047,G__20048,G__20049) : hoplon.core.a.call(null,G__20043,G__20044,G__20045,G__20046,G__20047,G__20048,G__20049));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__20042) : hoplon.core.p.call(null,G__20042));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20032,G__20033,G__20034) : hoplon.core.div.call(null,G__20032,G__20033,G__20034));
})();
var G__19594 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Current Opportunities") : hoplon.core.h2.call(null,"Current Opportunities")),(function (){var con__13355__auto__ = (new cljs.core.Delay(((function (G__19592,G__19593){
return (function (){
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Under construction.") : hoplon.core.p.call(null,"Under construction."));
});})(G__19592,G__19593))
,null));
var alt__13356__auto__ = (new cljs.core.Delay(((function (con__13355__auto__,G__19592,G__19593){
return (function (){
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Please sign in to see content.") : hoplon.core.p.call(null,"Please sign in to see content."));
});})(con__13355__auto__,G__19592,G__19593))
,null));
var tpl__13357__auto__ = ((function (con__13355__auto__,alt__13356__auto__,G__19592,G__19593){
return (function (p__13358__auto__){
var G__20050 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__13358__auto__)?con__13355__auto__:alt__13356__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20050) : cljs.core.deref.call(null,G__20050));
});})(con__13355__auto__,alt__13356__auto__,G__19592,G__19593))
;
return javelin.core.formula(tpl__13357__auto__).call(null,hoplon.app_pages._index_DOT_html.signed_in_QMARK_);
})()], 0));
var G__19595 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.hr.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.hr.cljs$core$IFn$_invoke$arity$0() : hoplon.core.hr.call(null)),(function (){var G__20051 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Copyright \u00A9 2016 Daniel Kraus") : hoplon.core.p.call(null,"Copyright \u00A9 2016 Daniel Kraus"));
return (hoplon.core.footer.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.footer.cljs$core$IFn$_invoke$arity$1(G__20051) : hoplon.core.footer.call(null,G__20051));
})()], 0));
var G__19596 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"jquery-3.1.0/jquery-3.1.0.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"jquery-3.1.0/jquery-3.1.0.min.js"));
var G__19597 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js"));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$6(G__19592,G__19593,G__19594,G__19595,G__19596,G__19597) : hoplon.core.body.call(null,G__19592,G__19593,G__19594,G__19595,G__19596,G__19597));
})()], 0));
