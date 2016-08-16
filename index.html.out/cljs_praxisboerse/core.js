// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs_praxisboerse.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
cljs_praxisboerse.core.base_url = "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST";
cljs_praxisboerse.core.credentials = (function (){var G__18734 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,"",cljs.core.cst$kw$password,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18734) : cljs.core.atom.call(null,G__18734));
})();
cljs_praxisboerse.core.fetch_offer_types_BANG_ = (function cljs_praxisboerse$core$fetch_offer_types_BANG_(){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_18768){
var state_val_18769 = (state_18768[(1)]);
if((state_val_18769 === (1))){
var inst_18756 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offertypes/all")].join('');
var inst_18757 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_18758 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.credentials) : cljs.core.deref.call(null,cljs_praxisboerse.core.credentials));
var inst_18759 = [inst_18758];
var inst_18760 = cljs.core.PersistentHashMap.fromArrays(inst_18757,inst_18759);
var inst_18761 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18756,cljs.core.array_seq([inst_18760], 0));
var state_18768__$1 = state_18768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18768__$1,(2),inst_18761);
} else {
if((state_val_18769 === (2))){
var inst_18763 = (state_18768[(2)]);
var inst_18764 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18763);
var inst_18765 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,inst_18764);
var inst_18766 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_18765], 0));
var state_18768__$1 = state_18768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18768__$1,inst_18766);
} else {
return null;
}
}
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__ = null;
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0 = (function (){
var statearr_18773 = [null,null,null,null,null,null,null];
(statearr_18773[(0)] = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__);

(statearr_18773[(1)] = (1));

return statearr_18773;
});
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1 = (function (state_18768){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_18768);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e18774){if((e18774 instanceof Object)){
var ex__13685__auto__ = e18774;
var statearr_18775_18777 = state_18768;
(statearr_18775_18777[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18768);

return cljs.core.cst$kw$recur;
} else {
throw e18774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__18778 = state_18768;
state_18768 = G__18778;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__ = function(state_18768){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1.call(this,state_18768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0;
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1;
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_18776 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_18776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_18776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
cljs_praxisboerse.core.fetch_offers_by_type_BANG_ = (function cljs_praxisboerse$core$fetch_offers_by_type_BANG_(type){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_18818){
var state_val_18819 = (state_18818[(1)]);
if((state_val_18819 === (1))){
var inst_18803 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offers/"),cljs.core.str(type),cljs.core.str("/0/-1")].join('');
var inst_18804 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_18805 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.credentials) : cljs.core.deref.call(null,cljs_praxisboerse.core.credentials));
var inst_18806 = [inst_18805];
var inst_18807 = cljs.core.PersistentHashMap.fromArrays(inst_18804,inst_18806);
var inst_18808 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18803,cljs.core.array_seq([inst_18807], 0));
var state_18818__$1 = state_18818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18818__$1,(2),inst_18808);
} else {
if((state_val_18819 === (2))){
var inst_18810 = (state_18818[(2)]);
var inst_18811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18812 = [cljs.core.cst$kw$body,cljs.core.cst$kw$offers];
var inst_18813 = (new cljs.core.PersistentVector(null,2,(5),inst_18811,inst_18812,null));
var inst_18814 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_18810,inst_18813);
var inst_18815 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$shortDescription,inst_18814);
var inst_18816 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_18815], 0));
var state_18818__$1 = state_18818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18818__$1,inst_18816);
} else {
return null;
}
}
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__ = null;
var cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____0 = (function (){
var statearr_18823 = [null,null,null,null,null,null,null];
(statearr_18823[(0)] = cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__);

(statearr_18823[(1)] = (1));

return statearr_18823;
});
var cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____1 = (function (state_18818){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_18818);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e18824){if((e18824 instanceof Object)){
var ex__13685__auto__ = e18824;
var statearr_18825_18827 = state_18818;
(statearr_18825_18827[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18818);

return cljs.core.cst$kw$recur;
} else {
throw e18824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__18828 = state_18818;
state_18818 = G__18828;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__ = function(state_18818){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____1.call(this,state_18818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____0;
cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto____1;
return cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_18826 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_18826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_18826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
cljs_praxisboerse.core.init_BANG_ = (function cljs_praxisboerse$core$init_BANG_(iz,pw){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_praxisboerse.core.credentials,cljs.core.assoc,cljs.core.cst$kw$username,iz,cljs.core.array_seq([cljs.core.cst$kw$password,pw], 0));
});
cljs_praxisboerse.core.sign_in_BANG_ = (function cljs_praxisboerse$core$sign_in_BANG_(iz,pw,com){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_18902){
var state_val_18903 = (state_18902[(1)]);
if((state_val_18903 === (1))){
var inst_18873 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/credential/info")].join('');
var inst_18874 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_18875 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_18876 = [iz,pw];
var inst_18877 = cljs.core.PersistentHashMap.fromArrays(inst_18875,inst_18876);
var inst_18878 = [inst_18877];
var inst_18879 = cljs.core.PersistentHashMap.fromArrays(inst_18874,inst_18878);
var inst_18880 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18873,cljs.core.array_seq([inst_18879], 0));
var state_18902__$1 = state_18902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18902__$1,(2),inst_18880);
} else {
if((state_val_18903 === (2))){
var inst_18882 = (state_18902[(7)]);
var inst_18882__$1 = (state_18902[(2)]);
var inst_18883 = [cljs.core.cst$kw$topic,cljs.core.cst$kw$content];
var inst_18884 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_18882__$1);
var state_18902__$1 = (function (){var statearr_18904 = state_18902;
(statearr_18904[(8)] = inst_18883);

(statearr_18904[(7)] = inst_18882__$1);

return statearr_18904;
})();
if(cljs.core.truth_(inst_18884)){
var statearr_18905_18917 = state_18902__$1;
(statearr_18905_18917[(1)] = (4));

} else {
var statearr_18906_18918 = state_18902__$1;
(statearr_18906_18918[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (3))){
var inst_18900 = (state_18902[(2)]);
var state_18902__$1 = state_18902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18902__$1,inst_18900);
} else {
if((state_val_18903 === (4))){
var inst_18882 = (state_18902[(7)]);
var inst_18886 = cljs_praxisboerse.core.init_BANG_(iz,pw);
var inst_18887 = [cljs.core.cst$kw$firstName];
var inst_18888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18889 = [cljs.core.cst$kw$body,cljs.core.cst$kw$firstName];
var inst_18890 = (new cljs.core.PersistentVector(null,2,(5),inst_18888,inst_18889,null));
var inst_18891 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_18882,inst_18890);
var inst_18892 = [inst_18891];
var inst_18893 = cljs.core.PersistentHashMap.fromArrays(inst_18887,inst_18892);
var state_18902__$1 = (function (){var statearr_18907 = state_18902;
(statearr_18907[(9)] = inst_18886);

return statearr_18907;
})();
var statearr_18908_18919 = state_18902__$1;
(statearr_18908_18919[(2)] = inst_18893);

(statearr_18908_18919[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (5))){
var state_18902__$1 = state_18902;
var statearr_18909_18920 = state_18902__$1;
(statearr_18909_18920[(2)] = null);

(statearr_18909_18920[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (6))){
var inst_18883 = (state_18902[(8)]);
var inst_18896 = (state_18902[(2)]);
var inst_18897 = [cljs.core.cst$kw$sign_DASH_in,inst_18896];
var inst_18898 = cljs.core.PersistentHashMap.fromArrays(inst_18883,inst_18897);
var state_18902__$1 = state_18902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18902__$1,(3),com,inst_18898);
} else {
return null;
}
}
}
}
}
}
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__ = null;
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____0 = (function (){
var statearr_18913 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18913[(0)] = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__);

(statearr_18913[(1)] = (1));

return statearr_18913;
});
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____1 = (function (state_18902){
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
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__ = function(state_18902){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____1.call(this,state_18902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____0;
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____1;
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__;
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
