// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs_praxisboerse.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
cljs_praxisboerse.core.base_url = "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST";
cljs_praxisboerse.core.credentials = (function (){var G__18931 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,"",cljs.core.cst$kw$password,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18931) : cljs.core.atom.call(null,G__18931));
})();
cljs_praxisboerse.core.fetch_offer_types_BANG_ = (function cljs_praxisboerse$core$fetch_offer_types_BANG_(){
var c__15461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto__){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto__){
return (function (state_18965){
var state_val_18966 = (state_18965[(1)]);
if((state_val_18966 === (1))){
var inst_18953 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offertypes/all")].join('');
var inst_18954 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_18955 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.credentials) : cljs.core.deref.call(null,cljs_praxisboerse.core.credentials));
var inst_18956 = [inst_18955];
var inst_18957 = cljs.core.PersistentHashMap.fromArrays(inst_18954,inst_18956);
var inst_18958 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18953,cljs.core.array_seq([inst_18957], 0));
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18965__$1,(2),inst_18958);
} else {
if((state_val_18966 === (2))){
var inst_18960 = (state_18965[(2)]);
var inst_18961 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18960);
var inst_18962 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,inst_18961);
var inst_18963 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_18962], 0));
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18965__$1,inst_18963);
} else {
return null;
}
}
});})(c__15461__auto__))
;
return ((function (switch__15347__auto__,c__15461__auto__){
return (function() {
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto__ = null;
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto____0 = (function (){
var statearr_18970 = [null,null,null,null,null,null,null];
(statearr_18970[(0)] = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto__);

(statearr_18970[(1)] = (1));

return statearr_18970;
});
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto____1 = (function (state_18965){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_18965);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e18971){if((e18971 instanceof Object)){
var ex__15351__auto__ = e18971;
var statearr_18972_18974 = state_18965;
(statearr_18972_18974[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18965);

return cljs.core.cst$kw$recur;
} else {
throw e18971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__18975 = state_18965;
state_18965 = G__18975;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto__ = function(state_18965){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto____1.call(this,state_18965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto____0;
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto____1;
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto__))
})();
var state__15463__auto__ = (function (){var statearr_18973 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_18973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto__);

return statearr_18973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto__))
);

return c__15461__auto__;
});
cljs_praxisboerse.core.fetch_offers_by_type_BANG_ = (function cljs_praxisboerse$core$fetch_offers_by_type_BANG_(type){
var c__15461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto__){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto__){
return (function (state_19015){
var state_val_19016 = (state_19015[(1)]);
if((state_val_19016 === (1))){
var inst_19000 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offers/"),cljs.core.str(type),cljs.core.str("/0/-1")].join('');
var inst_19001 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19002 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.credentials) : cljs.core.deref.call(null,cljs_praxisboerse.core.credentials));
var inst_19003 = [inst_19002];
var inst_19004 = cljs.core.PersistentHashMap.fromArrays(inst_19001,inst_19003);
var inst_19005 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19000,cljs.core.array_seq([inst_19004], 0));
var state_19015__$1 = state_19015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19015__$1,(2),inst_19005);
} else {
if((state_val_19016 === (2))){
var inst_19007 = (state_19015[(2)]);
var inst_19008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19009 = [cljs.core.cst$kw$body,cljs.core.cst$kw$offers];
var inst_19010 = (new cljs.core.PersistentVector(null,2,(5),inst_19008,inst_19009,null));
var inst_19011 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_19007,inst_19010);
var inst_19012 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$shortDescription,inst_19011);
var inst_19013 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_19012], 0));
var state_19015__$1 = state_19015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19015__$1,inst_19013);
} else {
return null;
}
}
});})(c__15461__auto__))
;
return ((function (switch__15347__auto__,c__15461__auto__){
return (function() {
var cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto__ = null;
var cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto____0 = (function (){
var statearr_19020 = [null,null,null,null,null,null,null];
(statearr_19020[(0)] = cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto__);

(statearr_19020[(1)] = (1));

return statearr_19020;
});
var cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto____1 = (function (state_19015){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_19015);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e19021){if((e19021 instanceof Object)){
var ex__15351__auto__ = e19021;
var statearr_19022_19024 = state_19015;
(statearr_19022_19024[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19015);

return cljs.core.cst$kw$recur;
} else {
throw e19021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__19025 = state_19015;
state_19015 = G__19025;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto__ = function(state_19015){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto____1.call(this,state_19015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto____0;
cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto____1;
return cljs_praxisboerse$core$fetch_offers_by_type_BANG__$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto__))
})();
var state__15463__auto__ = (function (){var statearr_19023 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_19023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto__);

return statearr_19023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto__))
);

return c__15461__auto__;
});
cljs_praxisboerse.core.init_BANG_ = (function cljs_praxisboerse$core$init_BANG_(iz,pw){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_praxisboerse.core.credentials,cljs.core.assoc,cljs.core.cst$kw$username,iz,cljs.core.array_seq([cljs.core.cst$kw$password,pw], 0));
});
cljs_praxisboerse.core.sign_in_BANG_ = (function cljs_praxisboerse$core$sign_in_BANG_(iz,pw,com){
var c__15461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto__){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto__){
return (function (state_19099){
var state_val_19100 = (state_19099[(1)]);
if((state_val_19100 === (1))){
var inst_19070 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/credential/info")].join('');
var inst_19071 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19072 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19073 = [iz,pw];
var inst_19074 = cljs.core.PersistentHashMap.fromArrays(inst_19072,inst_19073);
var inst_19075 = [inst_19074];
var inst_19076 = cljs.core.PersistentHashMap.fromArrays(inst_19071,inst_19075);
var inst_19077 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19070,cljs.core.array_seq([inst_19076], 0));
var state_19099__$1 = state_19099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19099__$1,(2),inst_19077);
} else {
if((state_val_19100 === (2))){
var inst_19079 = (state_19099[(7)]);
var inst_19079__$1 = (state_19099[(2)]);
var inst_19080 = [cljs.core.cst$kw$topic,cljs.core.cst$kw$content];
var inst_19081 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_19079__$1);
var state_19099__$1 = (function (){var statearr_19101 = state_19099;
(statearr_19101[(7)] = inst_19079__$1);

(statearr_19101[(8)] = inst_19080);

return statearr_19101;
})();
if(cljs.core.truth_(inst_19081)){
var statearr_19102_19114 = state_19099__$1;
(statearr_19102_19114[(1)] = (4));

} else {
var statearr_19103_19115 = state_19099__$1;
(statearr_19103_19115[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19100 === (3))){
var inst_19097 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19099__$1,inst_19097);
} else {
if((state_val_19100 === (4))){
var inst_19079 = (state_19099[(7)]);
var inst_19083 = cljs_praxisboerse.core.init_BANG_(iz,pw);
var inst_19084 = [cljs.core.cst$kw$firstName];
var inst_19085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19086 = [cljs.core.cst$kw$body,cljs.core.cst$kw$firstName];
var inst_19087 = (new cljs.core.PersistentVector(null,2,(5),inst_19085,inst_19086,null));
var inst_19088 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_19079,inst_19087);
var inst_19089 = [inst_19088];
var inst_19090 = cljs.core.PersistentHashMap.fromArrays(inst_19084,inst_19089);
var state_19099__$1 = (function (){var statearr_19104 = state_19099;
(statearr_19104[(9)] = inst_19083);

return statearr_19104;
})();
var statearr_19105_19116 = state_19099__$1;
(statearr_19105_19116[(2)] = inst_19090);

(statearr_19105_19116[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19100 === (5))){
var state_19099__$1 = state_19099;
var statearr_19106_19117 = state_19099__$1;
(statearr_19106_19117[(2)] = null);

(statearr_19106_19117[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19100 === (6))){
var inst_19080 = (state_19099[(8)]);
var inst_19093 = (state_19099[(2)]);
var inst_19094 = [cljs.core.cst$kw$sign_DASH_in,inst_19093];
var inst_19095 = cljs.core.PersistentHashMap.fromArrays(inst_19080,inst_19094);
var state_19099__$1 = state_19099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19099__$1,(3),com,inst_19095);
} else {
return null;
}
}
}
}
}
}
});})(c__15461__auto__))
;
return ((function (switch__15347__auto__,c__15461__auto__){
return (function() {
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto__ = null;
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto____0 = (function (){
var statearr_19110 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19110[(0)] = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto__);

(statearr_19110[(1)] = (1));

return statearr_19110;
});
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto____1 = (function (state_19099){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_19099);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e19111){if((e19111 instanceof Object)){
var ex__15351__auto__ = e19111;
var statearr_19112_19118 = state_19099;
(statearr_19112_19118[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19099);

return cljs.core.cst$kw$recur;
} else {
throw e19111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__19119 = state_19099;
state_19099 = G__19119;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto__ = function(state_19099){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto____1.call(this,state_19099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto____0;
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto____1;
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto__))
})();
var state__15463__auto__ = (function (){var statearr_19113 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_19113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto__);

return statearr_19113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto__))
);

return c__15461__auto__;
});
