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
cljs_praxisboerse.core.invalid_iz_QMARK_ = javelin.core.formula((function (G__19552,G__19553){
return ((G__19552.cljs$core$IFn$_invoke$arity$2 ? G__19552.cljs$core$IFn$_invoke$arity$2(/^$|[a-z]{4}\d{4}/,G__19553) : G__19552.call(null,/^$|[a-z]{4}\d{4}/,G__19553)) == null);
})).call(null,cljs.core.re_matches,cljs_praxisboerse.core.iz);
cljs_praxisboerse.core.signed_in_QMARK_ = javelin.core.formula((function (G__19554,G__19555){
return (G__19554.cljs$core$IFn$_invoke$arity$2 ? G__19554.cljs$core$IFn$_invoke$arity$2("",G__19555) : G__19554.call(null,"",G__19555));
})).call(null,cljs.core.not_EQ_,cljs_praxisboerse.core.first_name);
cljs_praxisboerse.core.fetch_offers_BANG_ = (function cljs_praxisboerse$core$fetch_offers_BANG_(){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_19607){
var state_val_19608 = (state_19607[(1)]);
if((state_val_19608 === (1))){
var inst_19586 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.offer_type_input) : cljs.core.deref.call(null,cljs_praxisboerse.core.offer_type_input));
var inst_19587 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.filter_input) : cljs.core.deref.call(null,cljs_praxisboerse.core.filter_input));
var inst_19588 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offers/"),cljs.core.str(inst_19586),cljs.core.str("/"),cljs.core.str(inst_19587),cljs.core.str("/0/-1")].join('');
var inst_19589 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19590 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19591 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.iz) : cljs.core.deref.call(null,cljs_praxisboerse.core.iz));
var inst_19592 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.pw) : cljs.core.deref.call(null,cljs_praxisboerse.core.pw));
var inst_19593 = [inst_19591,inst_19592];
var inst_19594 = cljs.core.PersistentHashMap.fromArrays(inst_19590,inst_19593);
var inst_19595 = [inst_19594];
var inst_19596 = cljs.core.PersistentHashMap.fromArrays(inst_19589,inst_19595);
var inst_19597 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19588,cljs.core.array_seq([inst_19596], 0));
var state_19607__$1 = state_19607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19607__$1,(2),inst_19597);
} else {
if((state_val_19608 === (2))){
var inst_19599 = (state_19607[(2)]);
var inst_19600 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_19599);
var inst_19601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19602 = [cljs.core.cst$kw$companies,cljs.core.cst$kw$offers];
var inst_19603 = (new cljs.core.PersistentVector(null,2,(5),inst_19601,inst_19602,null));
var inst_19604 = cljs.core.select_keys(inst_19600,inst_19603);
var inst_19605 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.query,inst_19604) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.query,inst_19604));
var state_19607__$1 = state_19607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19607__$1,inst_19605);
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
var statearr_19612 = [null,null,null,null,null,null,null];
(statearr_19612[(0)] = cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__);

(statearr_19612[(1)] = (1));

return statearr_19612;
});
var cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____1 = (function (state_19607){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_19607);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e19613){if((e19613 instanceof Object)){
var ex__13685__auto__ = e19613;
var statearr_19614_19616 = state_19607;
(statearr_19614_19616[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19607);

return cljs.core.cst$kw$recur;
} else {
throw e19613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__19617 = state_19607;
state_19607 = G__19617;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__ = function(state_19607){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____1.call(this,state_19607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____0;
cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto____1;
return cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_19615 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_19615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_19615;
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
return (function (state_19671){
var state_val_19672 = (state_19671[(1)]);
if((state_val_19672 === (1))){
var inst_19650 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offertypes/all")].join('');
var inst_19651 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19652 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19653 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.iz) : cljs.core.deref.call(null,cljs_praxisboerse.core.iz));
var inst_19654 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.pw) : cljs.core.deref.call(null,cljs_praxisboerse.core.pw));
var inst_19655 = [inst_19653,inst_19654];
var inst_19656 = cljs.core.PersistentHashMap.fromArrays(inst_19652,inst_19655);
var inst_19657 = [inst_19656];
var inst_19658 = cljs.core.PersistentHashMap.fromArrays(inst_19651,inst_19657);
var inst_19659 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19650,cljs.core.array_seq([inst_19658], 0));
var state_19671__$1 = state_19671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19671__$1,(2),inst_19659);
} else {
if((state_val_19672 === (2))){
var inst_19661 = (state_19671[(2)]);
var inst_19662 = (function (){var response = inst_19661;
return ((function (response,inst_19661,state_val_19672,c__13795__auto__){
return (function (p1__19618_SHARP_){
return cljs.core.select_keys(p1__19618_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$shortname,cljs.core.cst$kw$name], null));
});
;})(response,inst_19661,state_val_19672,c__13795__auto__))
})();
var inst_19663 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_19661);
var inst_19664 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_19662,inst_19663);
var inst_19665 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.offer_types,inst_19664) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.offer_types,inst_19664));
var inst_19666 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.offer_types) : cljs.core.deref.call(null,cljs_praxisboerse.core.offer_types));
var inst_19667 = cljs.core.first(inst_19666);
var inst_19668 = cljs.core.cst$kw$shortname.cljs$core$IFn$_invoke$arity$1(inst_19667);
var inst_19669 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.offer_type_input,inst_19668) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.offer_type_input,inst_19668));
var state_19671__$1 = (function (){var statearr_19673 = state_19671;
(statearr_19673[(7)] = inst_19665);

return statearr_19673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19671__$1,inst_19669);
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
var statearr_19677 = [null,null,null,null,null,null,null,null];
(statearr_19677[(0)] = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__);

(statearr_19677[(1)] = (1));

return statearr_19677;
});
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1 = (function (state_19671){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_19671);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e19678){if((e19678 instanceof Object)){
var ex__13685__auto__ = e19678;
var statearr_19679_19681 = state_19671;
(statearr_19679_19681[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19671);

return cljs.core.cst$kw$recur;
} else {
throw e19678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__19682 = state_19671;
state_19671 = G__19682;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__ = function(state_19671){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1.call(this,state_19671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____0;
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto____1;
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_19680 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_19680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_19680;
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
return (function (state_19745){
var state_val_19746 = (state_19745[(1)]);
if((state_val_19746 === (1))){
var inst_19721 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/credential/info")].join('');
var inst_19722 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19723 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19724 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.iz) : cljs.core.deref.call(null,cljs_praxisboerse.core.iz));
var inst_19725 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.pw) : cljs.core.deref.call(null,cljs_praxisboerse.core.pw));
var inst_19726 = [inst_19724,inst_19725];
var inst_19727 = cljs.core.PersistentHashMap.fromArrays(inst_19723,inst_19726);
var inst_19728 = [inst_19727];
var inst_19729 = cljs.core.PersistentHashMap.fromArrays(inst_19722,inst_19728);
var inst_19730 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19721,cljs.core.array_seq([inst_19729], 0));
var state_19745__$1 = state_19745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19745__$1,(2),inst_19730);
} else {
if((state_val_19746 === (2))){
var inst_19732 = (state_19745[(7)]);
var inst_19732__$1 = (state_19745[(2)]);
var inst_19733 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_19732__$1);
var state_19745__$1 = (function (){var statearr_19747 = state_19745;
(statearr_19747[(7)] = inst_19732__$1);

return statearr_19747;
})();
if(cljs.core.truth_(inst_19733)){
var statearr_19748_19759 = state_19745__$1;
(statearr_19748_19759[(1)] = (3));

} else {
var statearr_19749_19760 = state_19745__$1;
(statearr_19749_19760[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19746 === (3))){
var inst_19732 = (state_19745[(7)]);
var inst_19735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19736 = [cljs.core.cst$kw$body,cljs.core.cst$kw$firstName];
var inst_19737 = (new cljs.core.PersistentVector(null,2,(5),inst_19735,inst_19736,null));
var inst_19738 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_19732,inst_19737);
var inst_19739 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.first_name,inst_19738) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.first_name,inst_19738));
var state_19745__$1 = state_19745;
var statearr_19750_19761 = state_19745__$1;
(statearr_19750_19761[(2)] = inst_19739);

(statearr_19750_19761[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19746 === (4))){
var inst_19741 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.pw,"") : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.pw,""));
var state_19745__$1 = state_19745;
var statearr_19751_19762 = state_19745__$1;
(statearr_19751_19762[(2)] = inst_19741);

(statearr_19751_19762[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19746 === (5))){
var inst_19743 = (state_19745[(2)]);
var state_19745__$1 = state_19745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19745__$1,inst_19743);
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
var statearr_19755 = [null,null,null,null,null,null,null,null];
(statearr_19755[(0)] = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__);

(statearr_19755[(1)] = (1));

return statearr_19755;
});
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____1 = (function (state_19745){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_19745);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e19756){if((e19756 instanceof Object)){
var ex__13685__auto__ = e19756;
var statearr_19757_19763 = state_19745;
(statearr_19757_19763[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19745);

return cljs.core.cst$kw$recur;
} else {
throw e19756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__19764 = state_19745;
state_19745 = G__19764;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__ = function(state_19745){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____1.call(this,state_19745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____0;
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto____1;
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_19758 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_19758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_19758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
cljs.core.add_watch(cljs_praxisboerse.core.signed_in_QMARK_,cljs.core.cst$kw$signed_DASH_in_DASH_watch,(function (p1__19766_SHARP_,p2__19767_SHARP_,p3__19768_SHARP_,p4__19765_SHARP_){
if(p4__19765_SHARP_ === true){
return cljs_praxisboerse.core.fetch_offer_types_BANG_();
} else {
return null;
}
}));
var fetch_offers_on_change_BANG_ = (function cljs_praxisboerse$core$fetch_offers_on_change_BANG_(_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
return cljs_praxisboerse.core.fetch_offers_BANG_();
} else {
return null;
}
});
cljs.core.add_watch(cljs_praxisboerse.core.offer_type_input,cljs.core.cst$kw$offer_DASH_type_DASH_input_DASH_watch,fetch_offers_on_change_BANG_);

cljs.core.add_watch(cljs_praxisboerse.core.filter_input,cljs.core.cst$kw$filter_DASH_input_DASH_watch,fetch_offers_on_change_BANG_);
