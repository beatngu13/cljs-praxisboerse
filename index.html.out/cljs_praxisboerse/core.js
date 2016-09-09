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
cljs_praxisboerse.core.invalid_iz_QMARK_ = javelin.core.formula((function (G__19592,G__19593){
return ((G__19592.cljs$core$IFn$_invoke$arity$2 ? G__19592.cljs$core$IFn$_invoke$arity$2(/^$|[a-z]{4}\d{4}/,G__19593) : G__19592.call(null,/^$|[a-z]{4}\d{4}/,G__19593)) == null);
})).call(null,cljs.core.re_matches,cljs_praxisboerse.core.iz);
cljs_praxisboerse.core.signed_in_QMARK_ = javelin.core.formula((function (G__19594,G__19595){
return (G__19594.cljs$core$IFn$_invoke$arity$2 ? G__19594.cljs$core$IFn$_invoke$arity$2("",G__19595) : G__19594.call(null,"",G__19595));
})).call(null,cljs.core.not_EQ_,cljs_praxisboerse.core.first_name);
cljs_praxisboerse.core.fetch_offers_BANG_ = (function cljs_praxisboerse$core$fetch_offers_BANG_(){
var c__16389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto__){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto__){
return (function (state_19647){
var state_val_19648 = (state_19647[(1)]);
if((state_val_19648 === (1))){
var inst_19626 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.offer_type_input) : cljs.core.deref.call(null,cljs_praxisboerse.core.offer_type_input));
var inst_19627 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.filter_input) : cljs.core.deref.call(null,cljs_praxisboerse.core.filter_input));
var inst_19628 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offers/"),cljs.core.str(inst_19626),cljs.core.str("/"),cljs.core.str(inst_19627),cljs.core.str("/0/-1")].join('');
var inst_19629 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19630 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19631 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.iz) : cljs.core.deref.call(null,cljs_praxisboerse.core.iz));
var inst_19632 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.pw) : cljs.core.deref.call(null,cljs_praxisboerse.core.pw));
var inst_19633 = [inst_19631,inst_19632];
var inst_19634 = cljs.core.PersistentHashMap.fromArrays(inst_19630,inst_19633);
var inst_19635 = [inst_19634];
var inst_19636 = cljs.core.PersistentHashMap.fromArrays(inst_19629,inst_19635);
var inst_19637 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19628,cljs.core.array_seq([inst_19636], 0));
var state_19647__$1 = state_19647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19647__$1,(2),inst_19637);
} else {
if((state_val_19648 === (2))){
var inst_19639 = (state_19647[(2)]);
var inst_19640 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_19639);
var inst_19641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19642 = [cljs.core.cst$kw$companies,cljs.core.cst$kw$offers];
var inst_19643 = (new cljs.core.PersistentVector(null,2,(5),inst_19641,inst_19642,null));
var inst_19644 = cljs.core.select_keys(inst_19640,inst_19643);
var inst_19645 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.query,inst_19644) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.query,inst_19644));
var state_19647__$1 = state_19647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19647__$1,inst_19645);
} else {
return null;
}
}
});})(c__16389__auto__))
;
return ((function (switch__16275__auto__,c__16389__auto__){
return (function() {
var cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto__ = null;
var cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto____0 = (function (){
var statearr_19652 = [null,null,null,null,null,null,null];
(statearr_19652[(0)] = cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto__);

(statearr_19652[(1)] = (1));

return statearr_19652;
});
var cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto____1 = (function (state_19647){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_19647);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e19653){if((e19653 instanceof Object)){
var ex__16279__auto__ = e19653;
var statearr_19654_19656 = state_19647;
(statearr_19654_19656[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19647);

return cljs.core.cst$kw$recur;
} else {
throw e19653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__19657 = state_19647;
state_19647 = G__19657;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto__ = function(state_19647){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto____1.call(this,state_19647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto____0;
cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto____1;
return cljs_praxisboerse$core$fetch_offers_BANG__$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto__))
})();
var state__16391__auto__ = (function (){var statearr_19655 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_19655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto__);

return statearr_19655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto__))
);

return c__16389__auto__;
});
cljs_praxisboerse.core.fetch_offer_types_BANG_ = (function cljs_praxisboerse$core$fetch_offer_types_BANG_(){
var c__16389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto__){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto__){
return (function (state_19711){
var state_val_19712 = (state_19711[(1)]);
if((state_val_19712 === (1))){
var inst_19690 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/joboffer/offertypes/all")].join('');
var inst_19691 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19692 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19693 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.iz) : cljs.core.deref.call(null,cljs_praxisboerse.core.iz));
var inst_19694 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.pw) : cljs.core.deref.call(null,cljs_praxisboerse.core.pw));
var inst_19695 = [inst_19693,inst_19694];
var inst_19696 = cljs.core.PersistentHashMap.fromArrays(inst_19692,inst_19695);
var inst_19697 = [inst_19696];
var inst_19698 = cljs.core.PersistentHashMap.fromArrays(inst_19691,inst_19697);
var inst_19699 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19690,cljs.core.array_seq([inst_19698], 0));
var state_19711__$1 = state_19711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19711__$1,(2),inst_19699);
} else {
if((state_val_19712 === (2))){
var inst_19701 = (state_19711[(2)]);
var inst_19702 = (function (){var response = inst_19701;
return ((function (response,inst_19701,state_val_19712,c__16389__auto__){
return (function (p1__19658_SHARP_){
return cljs.core.select_keys(p1__19658_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$shortname,cljs.core.cst$kw$name], null));
});
;})(response,inst_19701,state_val_19712,c__16389__auto__))
})();
var inst_19703 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_19701);
var inst_19704 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_19702,inst_19703);
var inst_19705 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.offer_types,inst_19704) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.offer_types,inst_19704));
var inst_19706 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.offer_types) : cljs.core.deref.call(null,cljs_praxisboerse.core.offer_types));
var inst_19707 = cljs.core.first(inst_19706);
var inst_19708 = cljs.core.cst$kw$shortname.cljs$core$IFn$_invoke$arity$1(inst_19707);
var inst_19709 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.offer_type_input,inst_19708) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.offer_type_input,inst_19708));
var state_19711__$1 = (function (){var statearr_19713 = state_19711;
(statearr_19713[(7)] = inst_19705);

return statearr_19713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19711__$1,inst_19709);
} else {
return null;
}
}
});})(c__16389__auto__))
;
return ((function (switch__16275__auto__,c__16389__auto__){
return (function() {
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto__ = null;
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto____0 = (function (){
var statearr_19717 = [null,null,null,null,null,null,null,null];
(statearr_19717[(0)] = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto__);

(statearr_19717[(1)] = (1));

return statearr_19717;
});
var cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto____1 = (function (state_19711){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_19711);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e19718){if((e19718 instanceof Object)){
var ex__16279__auto__ = e19718;
var statearr_19719_19721 = state_19711;
(statearr_19719_19721[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19711);

return cljs.core.cst$kw$recur;
} else {
throw e19718;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__19722 = state_19711;
state_19711 = G__19722;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto__ = function(state_19711){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto____1.call(this,state_19711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto____0;
cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto____1;
return cljs_praxisboerse$core$fetch_offer_types_BANG__$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto__))
})();
var state__16391__auto__ = (function (){var statearr_19720 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_19720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto__);

return statearr_19720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto__))
);

return c__16389__auto__;
});
cljs_praxisboerse.core.sign_in_BANG_ = (function cljs_praxisboerse$core$sign_in_BANG_(){
var c__16389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto__){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto__){
return (function (state_19785){
var state_val_19786 = (state_19785[(1)]);
if((state_val_19786 === (1))){
var inst_19761 = [cljs.core.str(cljs_praxisboerse.core.base_url),cljs.core.str("/credential/info")].join('');
var inst_19762 = [cljs.core.cst$kw$basic_DASH_auth];
var inst_19763 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_19764 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.iz) : cljs.core.deref.call(null,cljs_praxisboerse.core.iz));
var inst_19765 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.pw) : cljs.core.deref.call(null,cljs_praxisboerse.core.pw));
var inst_19766 = [inst_19764,inst_19765];
var inst_19767 = cljs.core.PersistentHashMap.fromArrays(inst_19763,inst_19766);
var inst_19768 = [inst_19767];
var inst_19769 = cljs.core.PersistentHashMap.fromArrays(inst_19762,inst_19768);
var inst_19770 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_19761,cljs.core.array_seq([inst_19769], 0));
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19785__$1,(2),inst_19770);
} else {
if((state_val_19786 === (2))){
var inst_19772 = (state_19785[(7)]);
var inst_19772__$1 = (state_19785[(2)]);
var inst_19773 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_19772__$1);
var state_19785__$1 = (function (){var statearr_19787 = state_19785;
(statearr_19787[(7)] = inst_19772__$1);

return statearr_19787;
})();
if(cljs.core.truth_(inst_19773)){
var statearr_19788_19799 = state_19785__$1;
(statearr_19788_19799[(1)] = (3));

} else {
var statearr_19789_19800 = state_19785__$1;
(statearr_19789_19800[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (3))){
var inst_19772 = (state_19785[(7)]);
var inst_19775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19776 = [cljs.core.cst$kw$body,cljs.core.cst$kw$firstName];
var inst_19777 = (new cljs.core.PersistentVector(null,2,(5),inst_19775,inst_19776,null));
var inst_19778 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_19772,inst_19777);
var inst_19779 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.first_name,inst_19778) : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.first_name,inst_19778));
var state_19785__$1 = state_19785;
var statearr_19790_19801 = state_19785__$1;
(statearr_19790_19801[(2)] = inst_19779);

(statearr_19790_19801[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (4))){
var inst_19781 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_praxisboerse.core.pw,"") : cljs.core.reset_BANG_.call(null,cljs_praxisboerse.core.pw,""));
var state_19785__$1 = state_19785;
var statearr_19791_19802 = state_19785__$1;
(statearr_19791_19802[(2)] = inst_19781);

(statearr_19791_19802[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (5))){
var inst_19783 = (state_19785[(2)]);
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19785__$1,inst_19783);
} else {
return null;
}
}
}
}
}
});})(c__16389__auto__))
;
return ((function (switch__16275__auto__,c__16389__auto__){
return (function() {
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto__ = null;
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto____0 = (function (){
var statearr_19795 = [null,null,null,null,null,null,null,null];
(statearr_19795[(0)] = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto__);

(statearr_19795[(1)] = (1));

return statearr_19795;
});
var cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto____1 = (function (state_19785){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_19785);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e19796){if((e19796 instanceof Object)){
var ex__16279__auto__ = e19796;
var statearr_19797_19803 = state_19785;
(statearr_19797_19803[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19785);

return cljs.core.cst$kw$recur;
} else {
throw e19796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__19804 = state_19785;
state_19785 = G__19804;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto__ = function(state_19785){
switch(arguments.length){
case 0:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto____0.call(this);
case 1:
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto____1.call(this,state_19785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto____0;
cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto____1;
return cljs_praxisboerse$core$sign_in_BANG__$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto__))
})();
var state__16391__auto__ = (function (){var statearr_19798 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_19798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto__);

return statearr_19798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto__))
);

return c__16389__auto__;
});
cljs.core.add_watch(cljs_praxisboerse.core.signed_in_QMARK_,cljs.core.cst$kw$fetch_DASH_offer_DASH_types,(function (p1__19806_SHARP_,p2__19807_SHARP_,p3__19808_SHARP_,p4__19805_SHARP_){
if(p4__19805_SHARP_ === true){
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
