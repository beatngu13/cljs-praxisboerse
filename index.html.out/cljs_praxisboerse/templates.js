// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs_praxisboerse.templates');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
cljs_praxisboerse.templates.offer_list_item = (function cljs_praxisboerse$templates$offer_list_item(offer,company){
var web = javelin.core.formula((function (G__18334){
return cljs.core.cst$kw$website.cljs$core$IFn$_invoke$arity$1(G__18334);
})).call(null,company);
var contact = javelin.core.formula(((function (web){
return (function (G__18335){
return cljs.core.cst$kw$contact.cljs$core$IFn$_invoke$arity$1(G__18335);
});})(web))
).call(null,offer);
var mail = javelin.core.formula(((function (web,contact){
return (function (G__18336){
return cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(G__18336);
});})(web,contact))
).call(null,contact);
var details_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var G__18355 = cljs.core.cst$kw$class;
var G__18356 = "list-group-item";
var G__18357 = (function (){var G__18359 = cljs.core.cst$kw$style;
var G__18360 = "cursor: pointer;";
var G__18361 = cljs.core.cst$kw$click;
var G__18362 = ((function (G__18359,G__18360,G__18361,G__18355,G__18356,web,contact,mail,details_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(details_QMARK_,cljs.core.not);
});})(G__18359,G__18360,G__18361,G__18355,G__18356,web,contact,mail,details_QMARK_))
;
var G__18363 = (function (){var G__18366 = (function (){var t__17625__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__17625__auto__,G__18359,G__18360,G__18361,G__18362,G__18355,G__18356,web,contact,mail,details_QMARK_){
return (function (G__18368,G__18369){
return G__18368.nodeValue = cljs.core.cst$kw$shortDescription.cljs$core$IFn$_invoke$arity$1(G__18369);
});})(t__17625__auto__,G__18359,G__18360,G__18361,G__18362,G__18355,G__18356,web,contact,mail,details_QMARK_))
).call(null,t__17625__auto__,offer);

return t__17625__auto__;
})();
var G__18367 = (function (){var G__18371 = " ";
var G__18372 = javelin.core.formula(((function (G__18371,G__18366,G__18359,G__18360,G__18361,G__18362,G__18355,G__18356,web,contact,mail,details_QMARK_){
return (function (G__18375){
return cljs.core.cst$kw$companyName.cljs$core$IFn$_invoke$arity$1(G__18375);
});})(G__18371,G__18366,G__18359,G__18360,G__18361,G__18362,G__18355,G__18356,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18373 = ", ";
var G__18374 = javelin.core.formula(((function (G__18371,G__18372,G__18373,G__18366,G__18359,G__18360,G__18361,G__18362,G__18355,G__18356,web,contact,mail,details_QMARK_){
return (function (G__18376){
return cljs.core.cst$kw$city.cljs$core$IFn$_invoke$arity$1(G__18376);
});})(G__18371,G__18372,G__18373,G__18366,G__18359,G__18360,G__18361,G__18362,G__18355,G__18356,web,contact,mail,details_QMARK_))
).call(null,company);
return (hoplon.core.small.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.small.cljs$core$IFn$_invoke$arity$4(G__18371,G__18372,G__18373,G__18374) : hoplon.core.small.call(null,G__18371,G__18372,G__18373,G__18374));
})();
return (hoplon.core.h4.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$2(G__18366,G__18367) : hoplon.core.h4.call(null,G__18366,G__18367));
})();
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__18359,G__18360,G__18361,G__18362,G__18363) : hoplon.core.span.call(null,G__18359,G__18360,G__18361,G__18362,G__18363));
})();
var G__18358 = (function (){var G__18384 = cljs.core.cst$kw$class;
var G__18385 = "row";
var G__18386 = cljs.core.cst$kw$toggle;
var G__18387 = details_QMARK_;
var G__18388 = (function (){var G__18390 = cljs.core.cst$kw$class;
var G__18391 = "col-md-12";
var G__18392 = cljs.core.cst$kw$css;
var G__18393 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null);
var G__18394 = (function (){var t__17625__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__17625__auto__,G__18390,G__18391,G__18392,G__18393,G__18384,G__18385,G__18386,G__18387,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18395,G__18396){
return G__18395.nodeValue = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__18396);
});})(t__17625__auto__,G__18390,G__18391,G__18392,G__18393,G__18384,G__18385,G__18386,G__18387,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,t__17625__auto__,offer);

return t__17625__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__18390,G__18391,G__18392,G__18393,G__18394) : hoplon.core.div.call(null,G__18390,G__18391,G__18392,G__18393,G__18394));
})();
var G__18389 = (function (){var G__18397 = cljs.core.cst$kw$css;
var G__18398 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px 10px 0px 10px"], null);
var G__18399 = (function (){var G__18489 = cljs.core.cst$kw$class;
var G__18490 = "col-md-12 well";
var G__18491 = (function (){var G__18521 = cljs.core.cst$kw$class;
var G__18522 = "row";
var G__18523 = (function (){var G__18525 = cljs.core.cst$kw$class;
var G__18526 = "col-md-5";
var G__18527 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("\u00DCber das Unternehmen") : hoplon.core.h4.call(null,"\u00DCber das Unternehmen"));
var G__18528 = javelin.core.formula(((function (G__18525,G__18526,G__18527,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18538){
return cljs.core.cst$kw$companyName.cljs$core$IFn$_invoke$arity$1(G__18538);
});})(G__18525,G__18526,G__18527,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18529 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18530 = javelin.core.formula(((function (G__18525,G__18526,G__18527,G__18528,G__18529,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18539){
return cljs.core.cst$kw$street.cljs$core$IFn$_invoke$arity$1(G__18539);
});})(G__18525,G__18526,G__18527,G__18528,G__18529,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18531 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18532 = javelin.core.formula(((function (G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18540){
return cljs.core.cst$kw$zipCode.cljs$core$IFn$_invoke$arity$1(G__18540);
});})(G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18533 = " ";
var G__18534 = javelin.core.formula(((function (G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18532,G__18533,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18541){
return cljs.core.cst$kw$city.cljs$core$IFn$_invoke$arity$1(G__18541);
});})(G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18532,G__18533,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,company);
var G__18535 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18536 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18537 = javelin.core.formula(((function (G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18532,G__18533,G__18534,G__18535,G__18536,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18544,G__18545,G__18546){
var G__18548 = cljs.core.cst$kw$href;
var G__18549 = G__18545;
var G__18550 = cljs.core.cst$kw$target;
var G__18551 = "_blank";
var G__18552 = (function (){var t__17625__auto__ = document.createTextNode("");
(function (){var G__18553 = ((function (t__17625__auto__,G__18548,G__18549,G__18550,G__18551,G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18532,G__18533,G__18534,G__18535,G__18536,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18542,G__18543){
return G__18542.nodeValue = G__18543;
});})(t__17625__auto__,G__18548,G__18549,G__18550,G__18551,G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18532,G__18533,G__18534,G__18535,G__18536,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
;
return (G__18546.cljs$core$IFn$_invoke$arity$1 ? G__18546.cljs$core$IFn$_invoke$arity$1(G__18553) : G__18546.call(null,G__18553));
})().call(null,t__17625__auto__,G__18545);

return t__17625__auto__;
})();
return (G__18544.cljs$core$IFn$_invoke$arity$5 ? G__18544.cljs$core$IFn$_invoke$arity$5(G__18548,G__18549,G__18550,G__18551,G__18552) : G__18544.call(null,G__18548,G__18549,G__18550,G__18551,G__18552));
});})(G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18532,G__18533,G__18534,G__18535,G__18536,G__18521,G__18522,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,hoplon.core.a,web,javelin.core.formula);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$13 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$13(G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18532,G__18533,G__18534,G__18535,G__18536,G__18537) : hoplon.core.div.call(null,G__18525,G__18526,G__18527,G__18528,G__18529,G__18530,G__18531,G__18532,G__18533,G__18534,G__18535,G__18536,G__18537));
})();
var G__18524 = (function (){var G__18554 = cljs.core.cst$kw$class;
var G__18555 = "col-md-5";
var G__18556 = (hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("Kontakt") : hoplon.core.h4.call(null,"Kontakt"));
var G__18557 = javelin.core.formula(((function (G__18554,G__18555,G__18556,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18568){
return cljs.core.cst$kw$formOfAddress.cljs$core$IFn$_invoke$arity$1(G__18568);
});})(G__18554,G__18555,G__18556,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__18558 = " ";
var G__18559 = javelin.core.formula(((function (G__18554,G__18555,G__18556,G__18557,G__18558,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18569){
return cljs.core.cst$kw$firstName.cljs$core$IFn$_invoke$arity$1(G__18569);
});})(G__18554,G__18555,G__18556,G__18557,G__18558,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__18560 = " ";
var G__18561 = javelin.core.formula(((function (G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18570){
return cljs.core.cst$kw$secondName.cljs$core$IFn$_invoke$arity$1(G__18570);
});})(G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__18562 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18563 = "Telefon: ";
var G__18564 = javelin.core.formula(((function (G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18561,G__18562,G__18563,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18571){
return cljs.core.cst$kw$telephone.cljs$core$IFn$_invoke$arity$1(G__18571);
});})(G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18561,G__18562,G__18563,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,contact);
var G__18565 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__18566 = "E-Mail: ";
var G__18567 = javelin.core.formula(((function (G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18561,G__18562,G__18563,G__18564,G__18565,G__18566,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18574,G__18575,G__18576){
var G__18577 = cljs.core.cst$kw$href;
var G__18578 = [cljs.core.str("mailto:"),cljs.core.str(G__18575)].join('');
var G__18579 = (function (){var t__17625__auto__ = document.createTextNode("");
(function (){var G__18580 = ((function (t__17625__auto__,G__18577,G__18578,G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18561,G__18562,G__18563,G__18564,G__18565,G__18566,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_){
return (function (G__18572,G__18573){
return G__18572.nodeValue = G__18573;
});})(t__17625__auto__,G__18577,G__18578,G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18561,G__18562,G__18563,G__18564,G__18565,G__18566,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
;
return (G__18576.cljs$core$IFn$_invoke$arity$1 ? G__18576.cljs$core$IFn$_invoke$arity$1(G__18580) : G__18576.call(null,G__18580));
})().call(null,t__17625__auto__,G__18575);

return t__17625__auto__;
})();
return (G__18574.cljs$core$IFn$_invoke$arity$3 ? G__18574.cljs$core$IFn$_invoke$arity$3(G__18577,G__18578,G__18579) : G__18574.call(null,G__18577,G__18578,G__18579));
});})(G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18561,G__18562,G__18563,G__18564,G__18565,G__18566,G__18521,G__18522,G__18523,G__18489,G__18490,G__18397,G__18398,G__18384,G__18385,G__18386,G__18387,G__18388,G__18355,G__18356,G__18357,web,contact,mail,details_QMARK_))
).call(null,hoplon.core.a,mail,javelin.core.formula);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$14 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$14(G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18561,G__18562,G__18563,G__18564,G__18565,G__18566,G__18567) : hoplon.core.div.call(null,G__18554,G__18555,G__18556,G__18557,G__18558,G__18559,G__18560,G__18561,G__18562,G__18563,G__18564,G__18565,G__18566,G__18567));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__18521,G__18522,G__18523,G__18524) : hoplon.core.div.call(null,G__18521,G__18522,G__18523,G__18524));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__18489,G__18490,G__18491) : hoplon.core.div.call(null,G__18489,G__18490,G__18491));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__18397,G__18398,G__18399) : hoplon.core.div.call(null,G__18397,G__18398,G__18399));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__18384,G__18385,G__18386,G__18387,G__18388,G__18389) : hoplon.core.div.call(null,G__18384,G__18385,G__18386,G__18387,G__18388,G__18389));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$4(G__18355,G__18356,G__18357,G__18358) : hoplon.core.li.call(null,G__18355,G__18356,G__18357,G__18358));
});
