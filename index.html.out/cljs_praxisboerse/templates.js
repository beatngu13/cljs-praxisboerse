// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs_praxisboerse.templates');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
cljs_praxisboerse.templates.offer_list_item = (function cljs_praxisboerse$templates$offer_list_item(offer,company){
var web = javelin.core.formula((function (G__14306){
return cljs.core.cst$kw$website.cljs$core$IFn$_invoke$arity$1(G__14306);
})).call(null,company);
var contact = javelin.core.formula(((function (web){
return (function (G__14307){
return cljs.core.cst$kw$contact.cljs$core$IFn$_invoke$arity$1(G__14307);
});})(web))
).call(null,offer);
var mail = javelin.core.formula(((function (web,contact){
return (function (G__14308){
return cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(G__14308);
});})(web,contact))
).call(null,contact);
var details_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var G__14327 = cljs.core.cst$kw$class;
var G__14328 = "list-group-item";
var G__14329 = (function (){var G__14331 = cljs.core.cst$kw$style;
var G__14332 = "cursor: pointer;";
var G__14333 = cljs.core.cst$kw$click;
var G__14334 = ((function (G__14331,G__14332,G__14333,G__14327,G__14328,web,contact,mail,details_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(details_QMARK_,cljs.core.not);
});})(G__14331,G__14332,G__14333,G__14327,G__14328,web,contact,mail,details_QMARK_))
;
var G__14335 = (function (){var G__14338 = (function (){var t__13416__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13416__auto__,G__14331,G__14332,G__14333,G__14334,G__14327,G__14328,web,contact,mail,details_QMARK_){
return (function (G__14341,G__14340){
return G__14340.nodeValue = cljs.core.cst$kw$shortDescription.cljs$core$IFn$_invoke$arity$1(G__14341);
});})(t__13416__auto__,G__14331,G__14332,G__14333,G__14334,G__14327,G__14328,web,contact,mail,details_QMARK_))
).call(null,offer,t__13416__auto__);

return t__13416__auto__;
})();
var G__14339 = (function (){var G__14343 = " ";
var G__14344 = javelin.core.formula(((function (G__14343,G__14338,G__14331,G__14332,G__14333,G__14334,G__14327,G__14328,web,contact,mail,details_QMARK_){
return (function (G__14347){
return cljs.core.cst$kw$companyName.cljs$core$IFn$_invoke$arity$1(G__14347);
});})(G__14343,G__14338,G__14331,G__14332,G__14333,G__14334,G__14327,G__14328,web,contact,mail,details_QMARK_))
).call(null,company);
var G__14345 = ", ";
var G__14346 = javelin.core.formula(((function (G__14343,G__14344,G__14345,G__14338,G__14331,G__14332,G__14333,G__14334,G__14327,G__14328,web,contact,mail,details_QMARK_){
return (function (G__14348){
return cljs.core.cst$kw$city.cljs$core$IFn$_invoke$arity$1(G__14348);
});})(G__14343,G__14344,G__14345,G__14338,G__14331,G__14332,G__14333,G__14334,G__14327,G__14328,web,contact,mail,details_QMARK_))
).call(null,company);
return (hoplon.core.small.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.small.cljs$core$IFn$_invoke$arity$4(G__14343,G__14344,G__14345,G__14346) : hoplon.core.small.call(null,G__14343,G__14344,G__14345,G__14346));
})();
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$2(G__14338,G__14339) : hoplon.core.h4.call(null,G__14338,G__14339));
})();
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__14331,G__14332,G__14333,G__14334,G__14335) : hoplon.core.span.call(null,G__14331,G__14332,G__14333,G__14334,G__14335));
})();
var G__14330 = (function (){var G__14356 = cljs.core.cst$kw$class;
var G__14357 = "row";
var G__14358 = cljs.core.cst$kw$toggle;
var G__14359 = details_QMARK_;
var G__14360 = (function (){var G__14364 = cljs.core.cst$kw$class;
var G__14365 = "col-md-12";
var G__14366 = (function (){var t__13416__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13416__auto__,G__14364,G__14365,G__14356,G__14357,G__14358,G__14359,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14368,G__14367){
return G__14367.nodeValue = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__14368);
});})(t__13416__auto__,G__14364,G__14365,G__14356,G__14357,G__14358,G__14359,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,offer,t__13416__auto__);

return t__13416__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14364,G__14365,G__14366) : hoplon.core.div.call(null,G__14364,G__14365,G__14366));
})();
var G__14361 = (function (){var G__14550 = cljs.core.cst$kw$class;
var G__14551 = "details-wrapper";
var G__14552 = (function (){var G__14642 = cljs.core.cst$kw$class;
var G__14643 = "col-md-12 well";
var G__14644 = (function (){var G__14660 = cljs.core.cst$kw$class;
var G__14661 = "row";
var G__14662 = (function (){var G__14665 = cljs.core.cst$kw$class;
var G__14666 = "col-md-4";
var G__14667 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("\u00DCber das Unternehmen") : hoplon.core.h4.call(null,"\u00DCber das Unternehmen"));
var G__14668 = javelin.core.formula(((function (G__14665,G__14666,G__14667,G__14660,G__14661,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14676){
return cljs.core.cst$kw$companyName.cljs$core$IFn$_invoke$arity$1(G__14676);
});})(G__14665,G__14666,G__14667,G__14660,G__14661,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,company);
var G__14669 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__14670 = javelin.core.formula(((function (G__14665,G__14666,G__14667,G__14668,G__14669,G__14660,G__14661,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14677){
return cljs.core.cst$kw$street.cljs$core$IFn$_invoke$arity$1(G__14677);
});})(G__14665,G__14666,G__14667,G__14668,G__14669,G__14660,G__14661,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,company);
var G__14671 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__14672 = javelin.core.formula(((function (G__14665,G__14666,G__14667,G__14668,G__14669,G__14670,G__14671,G__14660,G__14661,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14678){
return cljs.core.cst$kw$zipCode.cljs$core$IFn$_invoke$arity$1(G__14678);
});})(G__14665,G__14666,G__14667,G__14668,G__14669,G__14670,G__14671,G__14660,G__14661,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,company);
var G__14673 = " ";
var G__14674 = javelin.core.formula(((function (G__14665,G__14666,G__14667,G__14668,G__14669,G__14670,G__14671,G__14672,G__14673,G__14660,G__14661,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14679){
return cljs.core.cst$kw$city.cljs$core$IFn$_invoke$arity$1(G__14679);
});})(G__14665,G__14666,G__14667,G__14668,G__14669,G__14670,G__14671,G__14672,G__14673,G__14660,G__14661,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,company);
var G__14675 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$11(G__14665,G__14666,G__14667,G__14668,G__14669,G__14670,G__14671,G__14672,G__14673,G__14674,G__14675) : hoplon.core.div.call(null,G__14665,G__14666,G__14667,G__14668,G__14669,G__14670,G__14671,G__14672,G__14673,G__14674,G__14675));
})();
var G__14663 = (function (){var G__14680 = cljs.core.cst$kw$class;
var G__14681 = "col-md-4";
var G__14682 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("Kontakt") : hoplon.core.h4.call(null,"Kontakt"));
var G__14683 = javelin.core.formula(((function (G__14680,G__14681,G__14682,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14694){
return cljs.core.cst$kw$formOfAddress.cljs$core$IFn$_invoke$arity$1(G__14694);
});})(G__14680,G__14681,G__14682,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__14684 = " ";
var G__14685 = javelin.core.formula(((function (G__14680,G__14681,G__14682,G__14683,G__14684,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14695){
return cljs.core.cst$kw$firstName.cljs$core$IFn$_invoke$arity$1(G__14695);
});})(G__14680,G__14681,G__14682,G__14683,G__14684,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__14686 = " ";
var G__14687 = javelin.core.formula(((function (G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14696){
return cljs.core.cst$kw$secondName.cljs$core$IFn$_invoke$arity$1(G__14696);
});})(G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__14688 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__14689 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"glyphicon glyphicon-phone-alt",cljs.core.cst$kw$aria_DASH_hidden,"true") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-phone-alt",cljs.core.cst$kw$aria_DASH_hidden,"true"));
var G__14690 = javelin.core.formula(((function (G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14697){
return cljs.core.cst$kw$telephone.cljs$core$IFn$_invoke$arity$1(G__14697);
});})(G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__14691 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__14692 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"glyphicon glyphicon-envelope",cljs.core.cst$kw$aria_DASH_hidden,"true") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-envelope",cljs.core.cst$kw$aria_DASH_hidden,"true"));
var G__14693 = javelin.core.formula(((function (G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14700,G__14701,G__14702){
var G__14703 = cljs.core.cst$kw$href;
var G__14704 = [cljs.core.str("mailto:"),cljs.core.str(G__14701)].join('');
var G__14705 = (function (){var t__13416__auto__ = document.createTextNode("");
(function (){var G__14706 = ((function (t__13416__auto__,G__14703,G__14704,G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14698,G__14699){
return G__14698.nodeValue = G__14699;
});})(t__13416__auto__,G__14703,G__14704,G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
;
return (G__14702.cljs$core$IFn$_invoke$arity$1 ? G__14702.cljs$core$IFn$_invoke$arity$1(G__14706) : G__14702.call(null,G__14706));
})().call(null,t__13416__auto__,G__14701);

return t__13416__auto__;
})();
return (G__14700.cljs$core$IFn$_invoke$arity$3 ? G__14700.cljs$core$IFn$_invoke$arity$3(G__14703,G__14704,G__14705) : G__14700.call(null,G__14703,G__14704,G__14705));
});})(G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14660,G__14661,G__14662,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,hoplon.core.a,mail,javelin.core.formula);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$14 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$14(G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14693) : hoplon.core.div.call(null,G__14680,G__14681,G__14682,G__14683,G__14684,G__14685,G__14686,G__14687,G__14688,G__14689,G__14690,G__14691,G__14692,G__14693));
})();
var G__14664 = (function (){var G__14707 = cljs.core.cst$kw$class;
var G__14708 = "col-md-4";
var G__14709 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("Weitere Informationen") : hoplon.core.h4.call(null,"Weitere Informationen"));
var G__14710 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"glyphicon glyphicon-user",cljs.core.cst$kw$aria_DASH_hidden,"true") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-user",cljs.core.cst$kw$aria_DASH_hidden,"true"));
var G__14711 = javelin.core.formula(((function (G__14707,G__14708,G__14709,G__14710,G__14660,G__14661,G__14662,G__14663,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14720){
return cljs.core.cst$kw$numberOfEmployees.cljs$core$IFn$_invoke$arity$1(G__14720);
});})(G__14707,G__14708,G__14709,G__14710,G__14660,G__14661,G__14662,G__14663,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,company);
var G__14712 = " Mitarbeiter";
var G__14713 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__14714 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"glyphicon glyphicon-tags",cljs.core.cst$kw$aria_DASH_hidden,"true") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-tags",cljs.core.cst$kw$aria_DASH_hidden,"true"));
var G__14715 = javelin.core.formula(((function (G__14707,G__14708,G__14709,G__14710,G__14711,G__14712,G__14713,G__14714,G__14660,G__14661,G__14662,G__14663,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14721){
return cljs.core.cst$kw$numberOfOffers.cljs$core$IFn$_invoke$arity$1(G__14721);
});})(G__14707,G__14708,G__14709,G__14710,G__14711,G__14712,G__14713,G__14714,G__14660,G__14661,G__14662,G__14663,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,company);
var G__14716 = " Angebote";
var G__14717 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__14718 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"glyphicon glyphicon-globe",cljs.core.cst$kw$aria_DASH_hidden,"true") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-globe",cljs.core.cst$kw$aria_DASH_hidden,"true"));
var G__14719 = javelin.core.formula(((function (G__14707,G__14708,G__14709,G__14710,G__14711,G__14712,G__14713,G__14714,G__14715,G__14716,G__14717,G__14718,G__14660,G__14661,G__14662,G__14663,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14724,G__14725,G__14726){
var G__14728 = cljs.core.cst$kw$href;
var G__14729 = G__14725;
var G__14730 = cljs.core.cst$kw$target;
var G__14731 = "_blank";
var G__14732 = (function (){var t__13416__auto__ = document.createTextNode("");
(function (){var G__14733 = ((function (t__13416__auto__,G__14728,G__14729,G__14730,G__14731,G__14707,G__14708,G__14709,G__14710,G__14711,G__14712,G__14713,G__14714,G__14715,G__14716,G__14717,G__14718,G__14660,G__14661,G__14662,G__14663,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_){
return (function (G__14723,G__14722){
return G__14722.nodeValue = G__14723;
});})(t__13416__auto__,G__14728,G__14729,G__14730,G__14731,G__14707,G__14708,G__14709,G__14710,G__14711,G__14712,G__14713,G__14714,G__14715,G__14716,G__14717,G__14718,G__14660,G__14661,G__14662,G__14663,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
;
return (G__14726.cljs$core$IFn$_invoke$arity$1 ? G__14726.cljs$core$IFn$_invoke$arity$1(G__14733) : G__14726.call(null,G__14733));
})().call(null,G__14725,t__13416__auto__);

return t__13416__auto__;
})();
return (G__14724.cljs$core$IFn$_invoke$arity$5 ? G__14724.cljs$core$IFn$_invoke$arity$5(G__14728,G__14729,G__14730,G__14731,G__14732) : G__14724.call(null,G__14728,G__14729,G__14730,G__14731,G__14732));
});})(G__14707,G__14708,G__14709,G__14710,G__14711,G__14712,G__14713,G__14714,G__14715,G__14716,G__14717,G__14718,G__14660,G__14661,G__14662,G__14663,G__14642,G__14643,G__14550,G__14551,G__14356,G__14357,G__14358,G__14359,G__14360,G__14327,G__14328,G__14329,web,contact,mail,details_QMARK_))
).call(null,hoplon.core.a,web,javelin.core.formula);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$13 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$13(G__14707,G__14708,G__14709,G__14710,G__14711,G__14712,G__14713,G__14714,G__14715,G__14716,G__14717,G__14718,G__14719) : hoplon.core.div.call(null,G__14707,G__14708,G__14709,G__14710,G__14711,G__14712,G__14713,G__14714,G__14715,G__14716,G__14717,G__14718,G__14719));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14660,G__14661,G__14662,G__14663,G__14664) : hoplon.core.div.call(null,G__14660,G__14661,G__14662,G__14663,G__14664));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14642,G__14643,G__14644) : hoplon.core.div.call(null,G__14642,G__14643,G__14644));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14550,G__14551,G__14552) : hoplon.core.div.call(null,G__14550,G__14551,G__14552));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__14356,G__14357,G__14358,G__14359,G__14360,G__14361) : hoplon.core.div.call(null,G__14356,G__14357,G__14358,G__14359,G__14360,G__14361));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$4(G__14327,G__14328,G__14329,G__14330) : hoplon.core.li.call(null,G__14327,G__14328,G__14329,G__14330));
});
