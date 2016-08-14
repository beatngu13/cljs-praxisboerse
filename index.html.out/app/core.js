// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
app.core.base_url = "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST";
app.core.credentials = (function (){var G__18734 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$iz,"",cljs.core.cst$kw$pw,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18734) : cljs.core.atom.call(null,G__18734));
})();
app.core.fetch_offer_types_BANG_ = (function app$core$fetch_offer_types_BANG_(){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_18778){
var state_val_18779 = (state_18778[(1)]);
if((state_val_18779 === (1))){
var inst_18761 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.core.credentials) : cljs.core.deref.call(null,app.core.credentials));
var inst_18762 = [cljs.core.str(app.core.base_url),cljs.core.str("/joboffer/offertypes/all")].join('');
var inst_18763 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_18764 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_18765 = cljs.core.cst$kw$iz.cljs$core$IFn$_invoke$arity$1(inst_18761);
var inst_18766 = cljs.core.cst$kw$pw.cljs$core$IFn$_invoke$arity$1(inst_18761);
var inst_18767 = [inst_18765,inst_18766];
var inst_18768 = cljs.core.PersistentHashMap.fromArrays(inst_18764,inst_18767);
var inst_18769 = [inst_18768];
var inst_18770 = cljs.core.PersistentHashMap.fromArrays(inst_18763,inst_18769);
var inst_18771 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18762,cljs.core.array_seq([inst_18770], 0));
var state_18778__$1 = state_18778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18778__$1,(2),inst_18771);
} else {
if((state_val_18779 === (2))){
var inst_18773 = (state_18778[(2)]);
var inst_18774 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18773);
var inst_18775 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,inst_18774);
var inst_18776 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_18775], 0));
var state_18778__$1 = state_18778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18778__$1,inst_18776);
} else {
return null;
}
}
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var app$core$fetch_offer_types_BANG__$_state_machine__13682__auto__ = null;
var app$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0 = (function (){
var statearr_18783 = [null,null,null,null,null,null,null];
(statearr_18783[(0)] = app$core$fetch_offer_types_BANG__$_state_machine__13682__auto__);

(statearr_18783[(1)] = (1));

return statearr_18783;
});
var app$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1 = (function (state_18778){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_18778);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e18784){if((e18784 instanceof Object)){
var ex__13685__auto__ = e18784;
var statearr_18785_18787 = state_18778;
(statearr_18785_18787[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18778);

return cljs.core.cst$kw$recur;
} else {
throw e18784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__18788 = state_18778;
state_18778 = G__18788;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
app$core$fetch_offer_types_BANG__$_state_machine__13682__auto__ = function(state_18778){
switch(arguments.length){
case 0:
return app$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return app$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1.call(this,state_18778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$fetch_offer_types_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0;
app$core$fetch_offer_types_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1;
return app$core$fetch_offer_types_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_18786 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_18786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_18786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
app.core.fetch_offers_by_type_BANG_ = (function app$core$fetch_offers_by_type_BANG_(type){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_18828){
var state_val_18829 = (state_18828[(1)]);
if((state_val_18829 === (1))){
var inst_18813 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.core.credentials) : cljs.core.deref.call(null,app.core.credentials));
var inst_18814 = [cljs.core.str(app.core.base_url),cljs.core.str("/joboffer/offers/"),cljs.core.str(type),cljs.core.str("/0/-1")].join('');
var inst_18815 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_18816 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_18817 = cljs.core.cst$kw$iz.cljs$core$IFn$_invoke$arity$1(inst_18813);
var inst_18818 = cljs.core.cst$kw$pw.cljs$core$IFn$_invoke$arity$1(inst_18813);
var inst_18819 = [inst_18817,inst_18818];
var inst_18820 = cljs.core.PersistentHashMap.fromArrays(inst_18816,inst_18819);
var inst_18821 = [inst_18820];
var inst_18822 = cljs.core.PersistentHashMap.fromArrays(inst_18815,inst_18821);
var inst_18823 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18814,cljs.core.array_seq([inst_18822], 0));
var state_18828__$1 = state_18828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18828__$1,(2),inst_18823);
} else {
if((state_val_18829 === (2))){
var inst_18825 = (state_18828[(2)]);
var inst_18826 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_18825], 0));
var state_18828__$1 = state_18828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18828__$1,inst_18826);
} else {
return null;
}
}
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__ = null;
var app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____0 = (function (){
var statearr_18833 = [null,null,null,null,null,null,null];
(statearr_18833[(0)] = app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__);

(statearr_18833[(1)] = (1));

return statearr_18833;
});
var app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____1 = (function (state_18828){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_18828);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e18834){if((e18834 instanceof Object)){
var ex__13685__auto__ = e18834;
var statearr_18835_18837 = state_18828;
(statearr_18835_18837[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18828);

return cljs.core.cst$kw$recur;
} else {
throw e18834;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__18838 = state_18828;
state_18828 = G__18838;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__ = function(state_18828){
switch(arguments.length){
case 0:
return app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____1.call(this,state_18828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____0;
app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____1;
return app$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_18836 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_18836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_18836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
app.core.init_BANG_ = (function app$core$init_BANG_(iz,pw){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.core.credentials,cljs.core.assoc,cljs.core.cst$kw$iz,iz,cljs.core.array_seq([cljs.core.cst$kw$pw,pw], 0));
});
app.core.sign_in_BANG_ = (function app$core$sign_in_BANG_(iz,pw){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_18902){
var state_val_18903 = (state_18902[(1)]);
if((state_val_18903 === (1))){
var inst_18878 = [cljs.core.str(app.core.base_url),cljs.core.str("/credential/info")].join('');
var inst_18879 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_18880 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_18881 = [iz,pw];
var inst_18882 = cljs.core.PersistentHashMap.fromArrays(inst_18880,inst_18881);
var inst_18883 = [inst_18882];
var inst_18884 = cljs.core.PersistentHashMap.fromArrays(inst_18879,inst_18883);
var inst_18885 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18878,cljs.core.array_seq([inst_18884], 0));
var state_18902__$1 = state_18902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18902__$1,(2),inst_18885);
} else {
if((state_val_18903 === (2))){
var inst_18887 = (state_18902[(7)]);
var inst_18887__$1 = (state_18902[(2)]);
var inst_18888 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_18887__$1);
var state_18902__$1 = (function (){var statearr_18904 = state_18902;
(statearr_18904[(7)] = inst_18887__$1);

return statearr_18904;
})();
if(cljs.core.truth_(inst_18888)){
var statearr_18905_18917 = state_18902__$1;
(statearr_18905_18917[(1)] = (3));

} else {
var statearr_18906_18918 = state_18902__$1;
(statearr_18906_18918[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (3))){
var inst_18887 = (state_18902[(7)]);
var inst_18890 = app.core.init_BANG_(iz,pw);
var inst_18891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18892 = [cljs.core.cst$kw$body,cljs.core.cst$kw$firstName];
var inst_18893 = (new cljs.core.PersistentVector(null,2,(5),inst_18891,inst_18892,null));
var inst_18894 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_18887,inst_18893);
var inst_18895 = [cljs.core.str("Hi "),cljs.core.str(inst_18894),cljs.core.str("!")].join('');
var inst_18896 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_18895], 0));
var state_18902__$1 = (function (){var statearr_18907 = state_18902;
(statearr_18907[(8)] = inst_18890);

return statearr_18907;
})();
var statearr_18908_18919 = state_18902__$1;
(statearr_18908_18919[(2)] = inst_18896);

(statearr_18908_18919[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (4))){
var inst_18898 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid account and/or password."], 0));
var state_18902__$1 = state_18902;
var statearr_18909_18920 = state_18902__$1;
(statearr_18909_18920[(2)] = inst_18898);

(statearr_18909_18920[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (5))){
var inst_18900 = (state_18902[(2)]);
var state_18902__$1 = state_18902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18902__$1,inst_18900);
} else {
return null;
}
}
}
}
}
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var app$core$sign_in_BANG__$_state_machine__13682__auto__ = null;
var app$core$sign_in_BANG__$_state_machine__13682__auto____0 = (function (){
var statearr_18913 = [null,null,null,null,null,null,null,null,null];
(statearr_18913[(0)] = app$core$sign_in_BANG__$_state_machine__13682__auto__);

(statearr_18913[(1)] = (1));

return statearr_18913;
});
var app$core$sign_in_BANG__$_state_machine__13682__auto____1 = (function (state_18902){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_18902);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e18914){if((e18914 instanceof Object)){
var ex__13685__auto__ = e18914;
var statearr_18915_18921 = state_18902;
(statearr_18915_18921[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18902);

return cljs.core.cst$kw$recur;
} else {
throw e18914;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__18922 = state_18902;
state_18902 = G__18922;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
app$core$sign_in_BANG__$_state_machine__13682__auto__ = function(state_18902){
switch(arguments.length){
case 0:
return app$core$sign_in_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return app$core$sign_in_BANG__$_state_machine__13682__auto____1.call(this,state_18902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$sign_in_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$sign_in_BANG__$_state_machine__13682__auto____0;
app$core$sign_in_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$sign_in_BANG__$_state_machine__13682__auto____1;
return app$core$sign_in_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_18916 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_18916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_18916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
