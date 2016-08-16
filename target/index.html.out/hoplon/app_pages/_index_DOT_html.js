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
hoplon.app_pages._index_DOT_html.handle_sign_in_BANG_ = (function hoplon$app_pages$_index_DOT_html$handle_sign_in_BANG_(content){
if(!((content == null))){
var G__19124_19126 = hoplon.app_pages._index_DOT_html.first_name;
var G__19125_19127 = cljs.core.cst$kw$firstName.cljs$core$IFn$_invoke$arity$1(content);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19124_19126,G__19125_19127) : cljs.core.reset_BANG_.call(null,G__19124_19126,G__19125_19127));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.signed_in_QMARK_,true) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.signed_in_QMARK_,true));
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.pw,"") : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.pw,""));
});
hoplon.app_pages._index_DOT_html.com = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__13795__auto___19157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___19157){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___19157){
return (function (state_19141){
var state_val_19142 = (state_19141[(1)]);
if((state_val_19142 === (1))){
var state_19141__$1 = state_19141;
var statearr_19143_19158 = state_19141__$1;
(statearr_19143_19158[(2)] = null);

(statearr_19143_19158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19142 === (2))){
var state_19141__$1 = state_19141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19141__$1,(4),hoplon.app_pages._index_DOT_html.com);
} else {
if((state_val_19142 === (3))){
var inst_19139 = (state_19141[(2)]);
var state_19141__$1 = state_19141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19141__$1,inst_19139);
} else {
if((state_val_19142 === (4))){
var inst_19130 = (state_19141[(2)]);
var inst_19131 = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(inst_19130);
var inst_19134 = cljs.core.cst$kw$topic.cljs$core$IFn$_invoke$arity$1(inst_19130);
var state_19141__$1 = (function (){var statearr_19144 = state_19141;
(statearr_19144[(7)] = inst_19131);

return statearr_19144;
})();
var G__19145_19159 = (((inst_19134 instanceof cljs.core.Keyword))?inst_19134.fqn:null);
switch (G__19145_19159) {
case "sign-in":
var statearr_19146_19161 = state_19141__$1;
(statearr_19146_19161[(1)] = (6));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_19134)].join('')));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19142 === (5))){
var inst_19136 = (state_19141[(2)]);
var state_19141__$1 = (function (){var statearr_19147 = state_19141;
(statearr_19147[(8)] = inst_19136);

return statearr_19147;
})();
var statearr_19148_19162 = state_19141__$1;
(statearr_19148_19162[(2)] = null);

(statearr_19148_19162[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19142 === (6))){
var inst_19131 = (state_19141[(7)]);
var inst_19132 = hoplon.app_pages._index_DOT_html.handle_sign_in_BANG_(inst_19131);
var state_19141__$1 = state_19141;
var statearr_19149_19163 = state_19141__$1;
(statearr_19149_19163[(2)] = inst_19132);

(statearr_19149_19163[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__13795__auto___19157))
;
return ((function (switch__13681__auto__,c__13795__auto___19157){
return (function() {
var hoplon$app_pages$_index_DOT_html$state_machine__13682__auto__ = null;
var hoplon$app_pages$_index_DOT_html$state_machine__13682__auto____0 = (function (){
var statearr_19153 = [null,null,null,null,null,null,null,null,null];
(statearr_19153[(0)] = hoplon$app_pages$_index_DOT_html$state_machine__13682__auto__);

(statearr_19153[(1)] = (1));

return statearr_19153;
});
var hoplon$app_pages$_index_DOT_html$state_machine__13682__auto____1 = (function (state_19141){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_19141);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e19154){if((e19154 instanceof Object)){
var ex__13685__auto__ = e19154;
var statearr_19155_19164 = state_19141;
(statearr_19155_19164[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19141);

return cljs.core.cst$kw$recur;
} else {
throw e19154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__19165 = state_19141;
state_19141 = G__19165;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
hoplon$app_pages$_index_DOT_html$state_machine__13682__auto__ = function(state_19141){
switch(arguments.length){
case 0:
return hoplon$app_pages$_index_DOT_html$state_machine__13682__auto____0.call(this);
case 1:
return hoplon$app_pages$_index_DOT_html$state_machine__13682__auto____1.call(this,state_19141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hoplon$app_pages$_index_DOT_html$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = hoplon$app_pages$_index_DOT_html$state_machine__13682__auto____0;
hoplon$app_pages$_index_DOT_html$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = hoplon$app_pages$_index_DOT_html$state_machine__13682__auto____1;
return hoplon$app_pages$_index_DOT_html$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___19157))
})();
var state__13797__auto__ = (function (){var statearr_19156 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_19156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___19157);

return statearr_19156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___19157))
);

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19168 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css"));
var G__19169 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css"));
var G__19170 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__19168,G__19169,G__19170) : hoplon.core.head.call(null,G__19168,G__19169,G__19170));
})(),(function (){var G__19570 = (function (){var G__19775 = cljs.core.cst$kw$class;
var G__19776 = "navbar navbar-inverse navbar-fixed-top";
var G__19777 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19800 = cljs.core.cst$kw$class;
var G__19801 = "navbar-header";
var G__19802 = (function (){var G__19807 = cljs.core.cst$kw$type;
var G__19808 = "button";
var G__19809 = cljs.core.cst$kw$class;
var G__19810 = "navbar-toggle collapsed";
var G__19811 = cljs.core.cst$kw$data_DASH_toggle;
var G__19812 = "collapse";
var G__19813 = cljs.core.cst$kw$data_DASH_target;
var G__19814 = "#navbar";
var G__19815 = cljs.core.cst$kw$aria_DASH_expanded;
var G__19816 = "false";
var G__19817 = cljs.core.cst$kw$aria_DASH_controls;
var G__19818 = "navbar";
var G__19819 = (function (){var G__19823 = cljs.core.cst$kw$class;
var G__19824 = "sr-only";
var G__19825 = document.createTextNode("Toggle navigation");
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__19823,G__19824,G__19825) : hoplon.core.span.call(null,G__19823,G__19824,G__19825));
})();
var G__19820 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__19821 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__19822 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$16 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$16(G__19807,G__19808,G__19809,G__19810,G__19811,G__19812,G__19813,G__19814,G__19815,G__19816,G__19817,G__19818,G__19819,G__19820,G__19821,G__19822) : hoplon.core.button.call(null,G__19807,G__19808,G__19809,G__19810,G__19811,G__19812,G__19813,G__19814,G__19815,G__19816,G__19817,G__19818,G__19819,G__19820,G__19821,G__19822));
})();
var G__19803 = (function (){var G__19826 = cljs.core.cst$kw$class;
var G__19827 = "navbar-brand";
var G__19828 = cljs.core.cst$kw$href;
var G__19829 = "http://www.iwi.hs-karlsruhe.de/boerse";
var G__19830 = document.createTextNode("Praxisb\u00F6rse");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__19826,G__19827,G__19828,G__19829,G__19830) : hoplon.core.a.call(null,G__19826,G__19827,G__19828,G__19829,G__19830));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__19800,G__19801,G__19802,G__19803) : hoplon.core.div.call(null,G__19800,G__19801,G__19802,G__19803));
})(),(function (){var G__19901 = cljs.core.cst$kw$id;
var G__19902 = "navbar";
var G__19903 = cljs.core.cst$kw$class;
var G__19904 = "navbar-collapse collapse";
var G__19905 = (function (){var con__17564__auto__ = (new cljs.core.Delay(((function (G__19901,G__19902,G__19903,G__19904,G__19775,G__19776){
return (function (){
var G__19913 = (function (){var G__19916 = cljs.core.cst$kw$class;
var G__19917 = "navbar-text pull-right";
var G__19918 = (function (){var t__17625__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__17625__auto__,G__19916,G__19917,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776){
return (function (G__19919,G__19920){
return G__19919.nodeValue = [cljs.core.str("Hi, "),cljs.core.str(G__19920),cljs.core.str("!")].join('');
});})(t__17625__auto__,G__19916,G__19917,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776))
).call(null,t__17625__auto__,hoplon.app_pages._index_DOT_html.first_name);

return t__17625__auto__;
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__19916,G__19917,G__19918) : hoplon.core.p.call(null,G__19916,G__19917,G__19918));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__19913) : hoplon.core.div.call(null,G__19913));
});})(G__19901,G__19902,G__19903,G__19904,G__19775,G__19776))
,null));
var alt__17565__auto__ = (new cljs.core.Delay(((function (con__17564__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776){
return (function (){
var G__19935 = cljs.core.cst$kw$class;
var G__19936 = "navbar-form navbar-right";
var G__19937 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"5px"], null),(function (){var G__19942 = cljs.core.cst$kw$type;
var G__19943 = "text";
var G__19944 = cljs.core.cst$kw$placeholder;
var G__19945 = "IZ account";
var G__19946 = cljs.core.cst$kw$class;
var G__19947 = "form-control";
var G__19948 = cljs.core.cst$kw$value;
var G__19949 = hoplon.app_pages._index_DOT_html.iz;
var G__19950 = cljs.core.cst$kw$change;
var G__19951 = ((function (G__19942,G__19943,G__19944,G__19945,G__19946,G__19947,G__19948,G__19949,G__19950,G__19935,G__19936,con__17564__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776){
return (function (p1__19166_SHARP_){
var G__19952 = hoplon.app_pages._index_DOT_html.iz;
var G__19953 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__19166_SHARP_) : cljs.core.deref.call(null,p1__19166_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19952,G__19953) : cljs.core.reset_BANG_.call(null,G__19952,G__19953));
});})(G__19942,G__19943,G__19944,G__19945,G__19946,G__19947,G__19948,G__19949,G__19950,G__19935,G__19936,con__17564__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__19942,G__19943,G__19944,G__19945,G__19946,G__19947,G__19948,G__19949,G__19950,G__19951) : hoplon.core.input.call(null,G__19942,G__19943,G__19944,G__19945,G__19946,G__19947,G__19948,G__19949,G__19950,G__19951));
})()], 0));
var G__19938 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"5px"], null),(function (){var G__19956 = cljs.core.cst$kw$type;
var G__19957 = "password";
var G__19958 = cljs.core.cst$kw$placeholder;
var G__19959 = "Password";
var G__19960 = cljs.core.cst$kw$class;
var G__19961 = "form-control";
var G__19962 = cljs.core.cst$kw$value;
var G__19963 = hoplon.app_pages._index_DOT_html.pw;
var G__19964 = cljs.core.cst$kw$change;
var G__19965 = ((function (G__19956,G__19957,G__19958,G__19959,G__19960,G__19961,G__19962,G__19963,G__19964,G__19935,G__19936,G__19937,con__17564__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776){
return (function (p1__19167_SHARP_){
var G__19966 = hoplon.app_pages._index_DOT_html.pw;
var G__19967 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__19167_SHARP_) : cljs.core.deref.call(null,p1__19167_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19966,G__19967) : cljs.core.reset_BANG_.call(null,G__19966,G__19967));
});})(G__19956,G__19957,G__19958,G__19959,G__19960,G__19961,G__19962,G__19963,G__19964,G__19935,G__19936,G__19937,con__17564__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__19956,G__19957,G__19958,G__19959,G__19960,G__19961,G__19962,G__19963,G__19964,G__19965) : hoplon.core.input.call(null,G__19956,G__19957,G__19958,G__19959,G__19960,G__19961,G__19962,G__19963,G__19964,G__19965));
})()], 0));
var G__19939 = (function (){var G__19968 = cljs.core.cst$kw$type;
var G__19969 = "submit";
var G__19970 = cljs.core.cst$kw$class;
var G__19971 = "btn btn-success";
var G__19972 = cljs.core.cst$kw$click;
var G__19973 = ((function (G__19968,G__19969,G__19970,G__19971,G__19972,G__19935,G__19936,G__19937,G__19938,con__17564__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776){
return (function (){
return cljs_praxisboerse.core.sign_in_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.iz) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.iz)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.pw) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.pw)),hoplon.app_pages._index_DOT_html.com);
});})(G__19968,G__19969,G__19970,G__19971,G__19972,G__19935,G__19936,G__19937,G__19938,con__17564__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776))
;
var G__19974 = document.createTextNode("Sign in");
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$7(G__19968,G__19969,G__19970,G__19971,G__19972,G__19973,G__19974) : hoplon.core.button.call(null,G__19968,G__19969,G__19970,G__19971,G__19972,G__19973,G__19974));
})();
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$5(G__19935,G__19936,G__19937,G__19938,G__19939) : hoplon.core.form.call(null,G__19935,G__19936,G__19937,G__19938,G__19939));
});})(con__17564__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776))
,null));
var tpl__17566__auto__ = ((function (con__17564__auto__,alt__17565__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776){
return (function (p__17567__auto__){
var G__19975 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__17567__auto__)?con__17564__auto__:alt__17565__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19975) : cljs.core.deref.call(null,G__19975));
});})(con__17564__auto__,alt__17565__auto__,G__19901,G__19902,G__19903,G__19904,G__19775,G__19776))
;
return javelin.core.formula(tpl__17566__auto__).call(null,hoplon.app_pages._index_DOT_html.signed_in_QMARK_);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__19901,G__19902,G__19903,G__19904,G__19905) : hoplon.core.div.call(null,G__19901,G__19902,G__19903,G__19904,G__19905));
})()], 0));
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$3(G__19775,G__19776,G__19777) : hoplon.core.nav.call(null,G__19775,G__19776,G__19777));
})();
var G__19571 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"bg") : hoplon.core.div.call(null,cljs.core.cst$kw$class,"bg"));
var G__19572 = (function (){var G__19991 = cljs.core.cst$kw$class;
var G__19992 = "jumbotron";
var G__19993 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("cljs-praxisboerse") : hoplon.core.h1.call(null,"cljs-praxisboerse")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("This is a rudimentary single-page application (SPA) built with ClojureScript and Hoplon, written as part of\n           a showcase about JavaScript alternatives. Based on the User Interfaces Laboratory (winter semester 2015),\n           this application provides a lightweight browser for the Praxisb\u00F6rse in English language.") : hoplon.core.p.call(null,"This is a rudimentary single-page application (SPA) built with ClojureScript and Hoplon, written as part of\n           a showcase about JavaScript alternatives. Based on the User Interfaces Laboratory (winter semester 2015),\n           this application provides a lightweight browser for the Praxisb\u00F6rse in English language.")),(function (){var G__20001 = (function (){var G__20002 = cljs.core.cst$kw$class;
var G__20003 = "btn btn-primary btn-lg";
var G__20004 = cljs.core.cst$kw$href;
var G__20005 = "https://www.github.com/beatngu13/cljs-praxisboerse";
var G__20006 = cljs.core.cst$kw$role;
var G__20007 = "button";
var G__20008 = document.createTextNode("View on GitHub \u00BB");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$7(G__20002,G__20003,G__20004,G__20005,G__20006,G__20007,G__20008) : hoplon.core.a.call(null,G__20002,G__20003,G__20004,G__20005,G__20006,G__20007,G__20008));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__20001) : hoplon.core.p.call(null,G__20001));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__19991,G__19992,G__19993) : hoplon.core.div.call(null,G__19991,G__19992,G__19993));
})();
var G__19573 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Current Opportunities") : hoplon.core.h2.call(null,"Current Opportunities")),(function (){var con__17564__auto__ = (new cljs.core.Delay(((function (G__19570,G__19571,G__19572){
return (function (){
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Under construction.") : hoplon.core.p.call(null,"Under construction."));
});})(G__19570,G__19571,G__19572))
,null));
var alt__17565__auto__ = (new cljs.core.Delay(((function (con__17564__auto__,G__19570,G__19571,G__19572){
return (function (){
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Please sign in to see content.") : hoplon.core.p.call(null,"Please sign in to see content."));
});})(con__17564__auto__,G__19570,G__19571,G__19572))
,null));
var tpl__17566__auto__ = ((function (con__17564__auto__,alt__17565__auto__,G__19570,G__19571,G__19572){
return (function (p__17567__auto__){
var G__20009 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__17567__auto__)?con__17564__auto__:alt__17565__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20009) : cljs.core.deref.call(null,G__20009));
});})(con__17564__auto__,alt__17565__auto__,G__19570,G__19571,G__19572))
;
return javelin.core.formula(tpl__17566__auto__).call(null,hoplon.app_pages._index_DOT_html.signed_in_QMARK_);
})()], 0));
var G__19574 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.hr.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.hr.cljs$core$IFn$_invoke$arity$0() : hoplon.core.hr.call(null)),(function (){var G__20010 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Copyright \u00A9 2016 Daniel Kraus") : hoplon.core.p.call(null,"Copyright \u00A9 2016 Daniel Kraus"));
return (hoplon.core.footer.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.footer.cljs$core$IFn$_invoke$arity$1(G__20010) : hoplon.core.footer.call(null,G__20010));
})()], 0));
var G__19575 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"jquery-3.1.0/jquery-3.1.0.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"jquery-3.1.0/jquery-3.1.0.min.js"));
var G__19576 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js"));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$7(G__19570,G__19571,G__19572,G__19573,G__19574,G__19575,G__19576) : hoplon.core.body.call(null,G__19570,G__19571,G__19572,G__19573,G__19574,G__19575,G__19576));
})()], 0));
