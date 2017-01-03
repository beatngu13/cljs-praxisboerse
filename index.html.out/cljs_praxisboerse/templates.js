// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs_praxisboerse.templates');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
cljs_praxisboerse.templates.offer_list_item = (function cljs_praxisboerse$templates$offer_list_item(offer,company){
var web = javelin.core.formula((function (G__18495){
return cljs.core.cst$kw$website.cljs$core$IFn$_invoke$arity$1(G__18495);
})).call(null,company);
var contact = javelin.core.formula(((function (web){
return (function (G__18496){
return cljs.core.cst$kw$contact.cljs$core$IFn$_invoke$arity$1(G__18496);
});})(web))
).call(null,offer);
var mail = javelin.core.formula(((function (web,contact){
return (function (G__18497){
return cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(G__18497);
});})(web,contact))
).call(null,contact);
var details_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var G__18516 = cljs.core.cst$kw$class;
var G__18517 = "list-group-item";
var G__18518 = (function (){var G__18520 = cljs.core.cst$kw$style;
var G__18521 = "cursor: pointer;";
var G__18522 = cljs.core.cst$kw$click;
var G__18523 = ((function (G__18520,G__18521,G__18522,G__18516,G__18517,web,contact,mail,details_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(details_QMARK_,cljs.core.not);
});})(G__18520,G__18521,G__18522,G__18516,G__18517,web,contact,mail,details_QMARK_))
;
var G__18524 = (function (){var G__18527 = (function (){var t__17625__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__17625__auto__,G__18520,G__18521,G__18522,G__18523,G__18516,G__18517,web,contact,mail,details_QMARK_){
return (function (G__18529,G__18530){
return G__18529.nodeValue = cljs.core.cst$kw$shortDescription.cljs$core$IFn$_invoke$arity$1(G__18530);
});})(t__17625__auto__,G__18520,G__18521,G__18522,G__18523,G__18516,G__18517,web,contact,mail,details_QMARK_))
).call(null,t__17625__auto__,offer);

return t__17625__auto__;
})();
var G__18528 = (function (){var G__18532 = " ";
var G__18533 = javelin.core.formula(((function (G__18532,G__18527,G__18520,G__18521,G__18522,G__18523,G__18516,G__18517,web,contact,mail,details_QMARK_){
return (function (G__18536){
return cljs.core.cst$kw$companyName.cljs$core$IFn$_invoke$arity$1(G__18536);
});})(G__18532,G__18527,G__18520,G__18521,G__18522,G__18523,G__18516,G__18517,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18534 = ", ";
var G__18535 = javelin.core.formula(((function (G__18532,G__18533,G__18534,G__18527,G__18520,G__18521,G__18522,G__18523,G__18516,G__18517,web,contact,mail,details_QMARK_){
return (function (G__18537){
return cljs.core.cst$kw$city.cljs$core$IFn$_invoke$arity$1(G__18537);
});})(G__18532,G__18533,G__18534,G__18527,G__18520,G__18521,G__18522,G__18523,G__18516,G__18517,web,contact,mail,details_QMARK_))
).call(null,company);
return (hoplon.core.small.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.small.cljs$core$IFn$_invoke$arity$4(G__18532,G__18533,G__18534,G__18535) : hoplon.core.small.call(null,G__18532,G__18533,G__18534,G__18535));
})();
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$2(G__18527,G__18528) : hoplon.core.h4.call(null,G__18527,G__18528));
})();
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__18520,G__18521,G__18522,G__18523,G__18524) : hoplon.core.span.call(null,G__18520,G__18521,G__18522,G__18523,G__18524));
})();
var G__18519 = (function (){var G__18545 = cljs.core.cst$kw$class;
var G__18546 = "row";
var G__18547 = cljs.core.cst$kw$toggle;
var G__18548 = details_QMARK_;
var G__18549 = (function (){var G__18553 = cljs.core.cst$kw$class;
var G__18554 = "col-md-12";
var G__18555 = (function (){var t__17625__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__17625__auto__,G__18553,G__18554,G__18545,G__18546,G__18547,G__18548,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18556,G__18557){
return G__18556.nodeValue = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__18557);
});})(t__17625__auto__,G__18553,G__18554,G__18545,G__18546,G__18547,G__18548,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,t__17625__auto__,offer);

return t__17625__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__18553,G__18554,G__18555) : hoplon.core.div.call(null,G__18553,G__18554,G__18555));
})();
var G__18550 = (function (){var G__18729 = cljs.core.cst$kw$class;
var G__18730 = "details-wrapper";
var G__18731 = (function (){var G__18816 = cljs.core.cst$kw$class;
var G__18817 = "col-md-12 well";
var G__18818 = (function (){var G__18834 = cljs.core.cst$kw$class;
var G__18835 = "row";
var G__18836 = (function (){var G__18839 = cljs.core.cst$kw$class;
var G__18840 = "col-md-4";
var G__18841 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("\u00DCber das Unternehmen") : hoplon.core.h4.call(null,"\u00DCber das Unternehmen"));
var G__18842 = javelin.core.formula(((function (G__18839,G__18840,G__18841,G__18834,G__18835,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18850){
return cljs.core.cst$kw$companyName.cljs$core$IFn$_invoke$arity$1(G__18850);
});})(G__18839,G__18840,G__18841,G__18834,G__18835,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18843 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18844 = javelin.core.formula(((function (G__18839,G__18840,G__18841,G__18842,G__18843,G__18834,G__18835,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18851){
return cljs.core.cst$kw$street.cljs$core$IFn$_invoke$arity$1(G__18851);
});})(G__18839,G__18840,G__18841,G__18842,G__18843,G__18834,G__18835,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18845 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18846 = javelin.core.formula(((function (G__18839,G__18840,G__18841,G__18842,G__18843,G__18844,G__18845,G__18834,G__18835,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18852){
return cljs.core.cst$kw$zipCode.cljs$core$IFn$_invoke$arity$1(G__18852);
});})(G__18839,G__18840,G__18841,G__18842,G__18843,G__18844,G__18845,G__18834,G__18835,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18847 = " ";
var G__18848 = javelin.core.formula(((function (G__18839,G__18840,G__18841,G__18842,G__18843,G__18844,G__18845,G__18846,G__18847,G__18834,G__18835,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18853){
return cljs.core.cst$kw$city.cljs$core$IFn$_invoke$arity$1(G__18853);
});})(G__18839,G__18840,G__18841,G__18842,G__18843,G__18844,G__18845,G__18846,G__18847,G__18834,G__18835,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18849 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$11(G__18839,G__18840,G__18841,G__18842,G__18843,G__18844,G__18845,G__18846,G__18847,G__18848,G__18849) : hoplon.core.div.call(null,G__18839,G__18840,G__18841,G__18842,G__18843,G__18844,G__18845,G__18846,G__18847,G__18848,G__18849));
})();
var G__18837 = (function (){var G__18854 = cljs.core.cst$kw$class;
var G__18855 = "col-md-4";
var G__18856 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("Kontakt") : hoplon.core.h4.call(null,"Kontakt"));
var G__18857 = javelin.core.formula(((function (G__18854,G__18855,G__18856,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18868){
return cljs.core.cst$kw$formOfAddress.cljs$core$IFn$_invoke$arity$1(G__18868);
});})(G__18854,G__18855,G__18856,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__18858 = " ";
var G__18859 = javelin.core.formula(((function (G__18854,G__18855,G__18856,G__18857,G__18858,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18869){
return cljs.core.cst$kw$firstName.cljs$core$IFn$_invoke$arity$1(G__18869);
});})(G__18854,G__18855,G__18856,G__18857,G__18858,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__18860 = " ";
var G__18861 = javelin.core.formula(((function (G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18870){
return cljs.core.cst$kw$secondName.cljs$core$IFn$_invoke$arity$1(G__18870);
});})(G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__18862 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18863 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"glyphicon glyphicon-phone-alt",cljs.core.cst$kw$aria_DASH_hidden,"true") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-phone-alt",cljs.core.cst$kw$aria_DASH_hidden,"true"));
var G__18864 = javelin.core.formula(((function (G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861,G__18862,G__18863,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18871){
return cljs.core.cst$kw$telephone.cljs$core$IFn$_invoke$arity$1(G__18871);
});})(G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861,G__18862,G__18863,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__18865 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18866 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"glyphicon glyphicon-envelope",cljs.core.cst$kw$aria_DASH_hidden,"true") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-envelope",cljs.core.cst$kw$aria_DASH_hidden,"true"));
var G__18867 = javelin.core.formula(((function (G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861,G__18862,G__18863,G__18864,G__18865,G__18866,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18874,G__18875,G__18876){
var G__18877 = cljs.core.cst$kw$href;
var G__18878 = [cljs.core.str("mailto:"),cljs.core.str(G__18875)].join('');
var G__18879 = (function (){var t__17625__auto__ = document.createTextNode("");
(function (){var G__18880 = ((function (t__17625__auto__,G__18877,G__18878,G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861,G__18862,G__18863,G__18864,G__18865,G__18866,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18872,G__18873){
return G__18872.nodeValue = G__18873;
});})(t__17625__auto__,G__18877,G__18878,G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861,G__18862,G__18863,G__18864,G__18865,G__18866,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
;
return (G__18876.cljs$core$IFn$_invoke$arity$1 ? G__18876.cljs$core$IFn$_invoke$arity$1(G__18880) : G__18876.call(null,G__18880));
})().call(null,t__17625__auto__,G__18875);

return t__17625__auto__;
})();
return (G__18874.cljs$core$IFn$_invoke$arity$3 ? G__18874.cljs$core$IFn$_invoke$arity$3(G__18877,G__18878,G__18879) : G__18874.call(null,G__18877,G__18878,G__18879));
});})(G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861,G__18862,G__18863,G__18864,G__18865,G__18866,G__18834,G__18835,G__18836,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,hoplon.core.a,mail,javelin.core.formula);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$14 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$14(G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861,G__18862,G__18863,G__18864,G__18865,G__18866,G__18867) : hoplon.core.div.call(null,G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861,G__18862,G__18863,G__18864,G__18865,G__18866,G__18867));
})();
var G__18838 = (function (){var G__18881 = cljs.core.cst$kw$class;
var G__18882 = "col-md-4";
var G__18883 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("Weitere Informationen") : hoplon.core.h4.call(null,"Weitere Informationen"));
var G__18884 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"glyphicon glyphicon-tags",cljs.core.cst$kw$aria_DASH_hidden,"true") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-tags",cljs.core.cst$kw$aria_DASH_hidden,"true"));
var G__18885 = javelin.core.formula(((function (G__18881,G__18882,G__18883,G__18884,G__18834,G__18835,G__18836,G__18837,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18890){
return cljs.core.cst$kw$numberOfOffers.cljs$core$IFn$_invoke$arity$1(G__18890);
});})(G__18881,G__18882,G__18883,G__18884,G__18834,G__18835,G__18836,G__18837,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18886 = " Angebot(e)";
var G__18887 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18888 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"glyphicon glyphicon-globe",cljs.core.cst$kw$aria_DASH_hidden,"true") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-globe",cljs.core.cst$kw$aria_DASH_hidden,"true"));
var G__18889 = javelin.core.formula(((function (G__18881,G__18882,G__18883,G__18884,G__18885,G__18886,G__18887,G__18888,G__18834,G__18835,G__18836,G__18837,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18893,G__18894,G__18895){
var G__18897 = cljs.core.cst$kw$href;
var G__18898 = G__18894;
var G__18899 = cljs.core.cst$kw$target;
var G__18900 = "_blank";
var G__18901 = (function (){var t__17625__auto__ = document.createTextNode("");
(function (){var G__18902 = ((function (t__17625__auto__,G__18897,G__18898,G__18899,G__18900,G__18881,G__18882,G__18883,G__18884,G__18885,G__18886,G__18887,G__18888,G__18834,G__18835,G__18836,G__18837,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_){
return (function (G__18891,G__18892){
return G__18891.nodeValue = G__18892;
});})(t__17625__auto__,G__18897,G__18898,G__18899,G__18900,G__18881,G__18882,G__18883,G__18884,G__18885,G__18886,G__18887,G__18888,G__18834,G__18835,G__18836,G__18837,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
;
return (G__18895.cljs$core$IFn$_invoke$arity$1 ? G__18895.cljs$core$IFn$_invoke$arity$1(G__18902) : G__18895.call(null,G__18902));
})().call(null,t__17625__auto__,G__18894);

return t__17625__auto__;
})();
return (G__18893.cljs$core$IFn$_invoke$arity$5 ? G__18893.cljs$core$IFn$_invoke$arity$5(G__18897,G__18898,G__18899,G__18900,G__18901) : G__18893.call(null,G__18897,G__18898,G__18899,G__18900,G__18901));
});})(G__18881,G__18882,G__18883,G__18884,G__18885,G__18886,G__18887,G__18888,G__18834,G__18835,G__18836,G__18837,G__18816,G__18817,G__18729,G__18730,G__18545,G__18546,G__18547,G__18548,G__18549,G__18516,G__18517,G__18518,web,contact,mail,details_QMARK_))
).call(null,hoplon.core.a,web,javelin.core.formula);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__18881,G__18882,G__18883,G__18884,G__18885,G__18886,G__18887,G__18888,G__18889) : hoplon.core.div.call(null,G__18881,G__18882,G__18883,G__18884,G__18885,G__18886,G__18887,G__18888,G__18889));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__18834,G__18835,G__18836,G__18837,G__18838) : hoplon.core.div.call(null,G__18834,G__18835,G__18836,G__18837,G__18838));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__18816,G__18817,G__18818) : hoplon.core.div.call(null,G__18816,G__18817,G__18818));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__18729,G__18730,G__18731) : hoplon.core.div.call(null,G__18729,G__18730,G__18731));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__18545,G__18546,G__18547,G__18548,G__18549,G__18550) : hoplon.core.div.call(null,G__18545,G__18546,G__18547,G__18548,G__18549,G__18550));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$4(G__18516,G__18517,G__18518,G__18519) : hoplon.core.li.call(null,G__18516,G__18517,G__18518,G__18519));
});
