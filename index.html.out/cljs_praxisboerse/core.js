// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs_praxisboerse.core');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('javelin.core');
cljs_praxisboerse.core.base_url = "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST";
cljs_praxisboerse.core.iz = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
cljs_praxisboerse.core.pw = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
cljs_praxisboerse.core.first_name = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
cljs_praxisboerse.core.offer_types = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
cljs_praxisboerse.core.offer_type_input = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
cljs_praxisboerse.core.filter_input = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
cljs_praxisboerse.core.query = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
cljs_praxisboerse.core.invalid_iz_QMARK_ = javelin.core.formula((function (G__19230,G__19231){
return ((G__19230.cljs$core$IFn$_invoke$arity$2 ? G__19230.cljs$core$IFn$_invoke$arity$2(/^$|[a-z]{4}\d{4}/,G__19231) : G__19230.call(null,/^$|[a-z]{4}\d{4}/,G__19231)) == null);
})).call(null,cljs.core.re_matches,cljs_praxisboerse.core.iz);
cljs_praxisboerse.core.signed_in_QMARK_ = javelin.core.formula((function (G__19232,G__19233){
return (G__19232.cljs$core$IFn$_invoke$arity$2 ? G__19232.cljs$core$IFn$_invoke$arity$2("",G__19233) : G__19232.call(null,"",G__19233));
})).call(null,cljs.core.not_EQ_,cljs_praxisboerse.core.first_name);
cljs_praxisboerse.core.fetch_offers_BANG_ = (function cljs_praxisboerse$core$fetch_offers_BANG_(){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_19285){
var state_val_19286 = (state_19285[(1)]);
if((state_val_19286 === (1))){
var inst_19264 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.offer_type_input) : cljs.core.deref.call(null,cljs_praxisboerse.core.offer_type_input));
var inst_19265 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.filter_input) : cljs.core.deref.call(null,cljs_praxisboerse.core.filter_input));
var inst_19266 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offers/"),cljs.core.str(inst_19264),cljs.core.str("/"),cljs.core.str(inst_19265),cljs.core.str("/0/-1")].join('');
var inst_19267 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19268 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19269 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.iz) : cljs.core.deref.call(null,cljs_praxisboerse.core.iz));
var inst_19270 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.pw) : cljs.core.deref.call(null,cljs_praxisboerse.core.pw));
var inst_19271 = [inst_19269,inst_19270];
var inst_19272 = cljs.core.PersistentHashMap.fromArrays(inst_19268,inst_19271);
var inst_19273 = [inst_19272];
var inst_19274 = cljs.core.PersistentHashMap.fromArrays(inst_19267,inst_19273);
var inst_19275 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19266,cljs.core.array_seq([inst_19274], 0));
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19285__$1,(2),inst_19275);
} else {
if((state_val_19286 === (2))){
var inst_19277 = (state_19285[(2)]);
var inst_19278 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_19277);
var inst_19279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19280 = [cljs.core.cst$kw$companies,cljs.core.cst$kw$offers];
var inst_19281 = (new cljs.core.PersistentVector(null,2,(5),inst_19279,inst_19280,null));
var inst_19282 = cljs.core.select_keys(inst_19278,inst_19281);
var inst_19283 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.query,inst_19282) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.query,inst_19282));
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19285__$1,inst_19283);
} else {
return null;
}
}
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__ = null;
var cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____0 = (function (){
var statearr_19290 = [null,null,null,null,null,null,null];
(statearr_19290[(0)] = cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__);

(statearr_19290[(1)] = (1));

return statearr_19290;
});
var cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____1 = (function (state_19285){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_19285);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e19291){if((e19291 instanceof Object)){
var ex__13685__auto__ = e19291;
var statearr_19292_19294 = state_19285;
(statearr_19292_19294[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19285);

return cljs.core.cst$kw$recur;
} else {
throw e19291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__19295 = state_19285;
state_19285 = G__19295;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__ = function(state_19285){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____1.call(this,state_19285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____0;
cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____1;
return cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_19293 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_19293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_19293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
cljs_praxisboerse.core.fetch_offer_types_BANG_ = (function cljs_praxisboerse$core$fetch_offer_types_BANG_(){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_19349){
var state_val_19350 = (state_19349[(1)]);
if((state_val_19350 === (1))){
var inst_19328 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offertypes/all")].join('');
var inst_19329 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19330 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19331 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.iz) : cljs.core.deref.call(null,cljs_praxisboerse.core.iz));
var inst_19332 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.pw) : cljs.core.deref.call(null,cljs_praxisboerse.core.pw));
var inst_19333 = [inst_19331,inst_19332];
var inst_19334 = cljs.core.PersistentHashMap.fromArrays(inst_19330,inst_19333);
var inst_19335 = [inst_19334];
var inst_19336 = cljs.core.PersistentHashMap.fromArrays(inst_19329,inst_19335);
var inst_19337 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19328,cljs.core.array_seq([inst_19336], 0));
var state_19349__$1 = state_19349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19349__$1,(2),inst_19337);
} else {
if((state_val_19350 === (2))){
var inst_19339 = (state_19349[(2)]);
var inst_19340 = (function (){var response = inst_19339;
return ((function (response,inst_19339,state_val_19350,c__13795__auto__){
return (function (p1__19296_SHARP_){
return cljs.core.select_keys(p1__19296_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$shortname,cljs.core.cst$kw$name], null));
});
;})(response,inst_19339,state_val_19350,c__13795__auto__))
})();
var inst_19341 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_19339);
var inst_19342 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_19340,inst_19341);
var inst_19343 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.offer_types,inst_19342) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.offer_types,inst_19342));
var inst_19344 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.offer_types) : cljs.core.deref.call(null,cljs_praxisboerse.core.offer_types));
var inst_19345 = cljs.core.first(inst_19344);
var inst_19346 = cljs.core.cst$kw$shortname.cljs$core$IFn$_invoke$arity$1(inst_19345);
var inst_19347 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.offer_type_input,inst_19346) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.offer_type_input,inst_19346));
var state_19349__$1 = (function (){var statearr_19351 = state_19349;
(statearr_19351[(7)] = inst_19343);

return statearr_19351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19349__$1,inst_19347);
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
var statearr_19355 = [null,null,null,null,null,null,null,null];
(statearr_19355[(0)] = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__);

(statearr_19355[(1)] = (1));

return statearr_19355;
});
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1 = (function (state_19349){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_19349);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e19356){if((e19356 instanceof Object)){
var ex__13685__auto__ = e19356;
var statearr_19357_19359 = state_19349;
(statearr_19357_19359[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19349);

return cljs.core.cst$kw$recur;
} else {
throw e19356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__19360 = state_19349;
state_19349 = G__19360;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__ = function(state_19349){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1.call(this,state_19349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0;
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1;
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_19358 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_19358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_19358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
cljs_praxisboerse.core.sign_in_BANG_ = (function cljs_praxisboerse$core$sign_in_BANG_(){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_19423){
var state_val_19424 = (state_19423[(1)]);
if((state_val_19424 === (1))){
var inst_19399 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/credential/info")].join('');
var inst_19400 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19401 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19402 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.iz) : cljs.core.deref.call(null,cljs_praxisboerse.core.iz));
var inst_19403 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.pw) : cljs.core.deref.call(null,cljs_praxisboerse.core.pw));
var inst_19404 = [inst_19402,inst_19403];
var inst_19405 = cljs.core.PersistentHashMap.fromArrays(inst_19401,inst_19404);
var inst_19406 = [inst_19405];
var inst_19407 = cljs.core.PersistentHashMap.fromArrays(inst_19400,inst_19406);
var inst_19408 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19399,cljs.core.array_seq([inst_19407], 0));
var state_19423__$1 = state_19423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19423__$1,(2),inst_19408);
} else {
if((state_val_19424 === (2))){
var inst_19410 = (state_19423[(7)]);
var inst_19410__$1 = (state_19423[(2)]);
var inst_19411 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_19410__$1);
var state_19423__$1 = (function (){var statearr_19425 = state_19423;
(statearr_19425[(7)] = inst_19410__$1);

return statearr_19425;
})();
if(cljs.core.truth_(inst_19411)){
var statearr_19426_19437 = state_19423__$1;
(statearr_19426_19437[(1)] = (3));

} else {
var statearr_19427_19438 = state_19423__$1;
(statearr_19427_19438[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19424 === (3))){
var inst_19410 = (state_19423[(7)]);
var inst_19413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19414 = [cljs.core.cst$kw$body,cljs.core.cst$kw$firstName];
var inst_19415 = (new cljs.core.PersistentVector(null,2,(5),inst_19413,inst_19414,null));
var inst_19416 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_19410,inst_19415);
var inst_19417 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.first_name,inst_19416) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.first_name,inst_19416));
var state_19423__$1 = state_19423;
var statearr_19428_19439 = state_19423__$1;
(statearr_19428_19439[(2)] = inst_19417);

(statearr_19428_19439[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19424 === (4))){
var inst_19419 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.pw,"") : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.pw,""));
var state_19423__$1 = state_19423;
var statearr_19429_19440 = state_19423__$1;
(statearr_19429_19440[(2)] = inst_19419);

(statearr_19429_19440[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19424 === (5))){
var inst_19421 = (state_19423[(2)]);
var state_19423__$1 = state_19423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19423__$1,inst_19421);
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
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__ = null;
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____0 = (function (){
var statearr_19433 = [null,null,null,null,null,null,null,null];
(statearr_19433[(0)] = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__);

(statearr_19433[(1)] = (1));

return statearr_19433;
});
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____1 = (function (state_19423){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_19423);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e19434){if((e19434 instanceof Object)){
var ex__13685__auto__ = e19434;
var statearr_19435_19441 = state_19423;
(statearr_19435_19441[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19423);

return cljs.core.cst$kw$recur;
} else {
throw e19434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__19442 = state_19423;
state_19423 = G__19442;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__ = function(state_19423){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____1.call(this,state_19423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____0;
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____1;
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_19436 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_19436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_19436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
cljs.core.add_watch(cljs_praxisboerse.core.signed_in_QMARK_,cljs.core.cst$kw$fetch_DASH_offer_DASH_types,(function (p1__19444_SHARP_,p2__19445_SHARP_,p3__19446_SHARP_,p4__19443_SHARP_){
if(p4__19443_SHARP_ === true){
return cljs_praxisboerse.core.fetch_offer_types_BANG_();
} else {
return null;
}
}));
cljs_praxisboerse.core.fetch_offers_QMARK_ = (function cljs_praxisboerse$core$fetch_offers_QMARK_(_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
return cljs_praxisboerse.core.fetch_offers_BANG_();
} else {
return null;
}
});
cljs.core.add_watch(cljs_praxisboerse.core.offer_type_input,cljs.core.cst$kw$fetch_DASH_offers,cljs_praxisboerse.core.fetch_offers_QMARK_);
cljs.core.add_watch(cljs_praxisboerse.core.filter_input,cljs.core.cst$kw$fetch_DASH_offers,cljs_praxisboerse.core.fetch_offers_QMARK_);
