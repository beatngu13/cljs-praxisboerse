// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs_praxisboerse.core');
goog.require('cljs_praxisboerse.templates');
goog.require('hoplon.twitter.bootstrap');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19973 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css"));
var G__19974 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css"));
var G__19975 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__19973,G__19974,G__19975) : hoplon.core.head.call(null,G__19973,G__19974,G__19975));
})(),(function (){var G__20363 = (function (){var G__20561 = cljs.core.cst$kw$class;
var G__20562 = "navbar navbar-inverse navbar-fixed-top";
var G__20563 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20586 = cljs.core.cst$kw$class;
var G__20587 = "navbar-header";
var G__20588 = (function (){var G__20593 = cljs.core.cst$kw$class;
var G__20594 = "navbar-toggle collapsed";
var G__20595 = cljs.core.cst$kw$type;
var G__20596 = "button";
var G__20597 = cljs.core.cst$kw$data_DASH_toggle;
var G__20598 = "collapse";
var G__20599 = cljs.core.cst$kw$data_DASH_target;
var G__20600 = "#navbar";
var G__20601 = cljs.core.cst$kw$aria_DASH_expanded;
var G__20602 = "false";
var G__20603 = cljs.core.cst$kw$aria_DASH_controls;
var G__20604 = "navbar";
var G__20605 = (function (){var G__20609 = cljs.core.cst$kw$class;
var G__20610 = "sr-only";
var G__20611 = document.createTextNode("Toggle navigation");
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20609,G__20610,G__20611) : hoplon.core.span.call(null,G__20609,G__20610,G__20611));
})();
var G__20606 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__20607 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__20608 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$16 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$16(G__20593,G__20594,G__20595,G__20596,G__20597,G__20598,G__20599,G__20600,G__20601,G__20602,G__20603,G__20604,G__20605,G__20606,G__20607,G__20608) : hoplon.core.button.call(null,G__20593,G__20594,G__20595,G__20596,G__20597,G__20598,G__20599,G__20600,G__20601,G__20602,G__20603,G__20604,G__20605,G__20606,G__20607,G__20608));
})();
var G__20589 = (function (){var G__20612 = cljs.core.cst$kw$class;
var G__20613 = "navbar-brand";
var G__20614 = cljs.core.cst$kw$href;
var G__20615 = "http://www.iwi.hs-karlsruhe.de/boerse";
var G__20616 = document.createTextNode("Praxisb\u00F6rse");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__20612,G__20613,G__20614,G__20615,G__20616) : hoplon.core.a.call(null,G__20612,G__20613,G__20614,G__20615,G__20616));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20586,G__20587,G__20588,G__20589) : hoplon.core.div.call(null,G__20586,G__20587,G__20588,G__20589));
})(),(function (){var G__20684 = cljs.core.cst$kw$class;
var G__20685 = "navbar-collapse collapse";
var G__20686 = cljs.core.cst$kw$id;
var G__20687 = "navbar";
var G__20688 = (function (){var con__17564__auto__ = (new cljs.core.Delay(((function (G__20684,G__20685,G__20686,G__20687,G__20561,G__20562){
return (function (){
var G__20691 = cljs.core.cst$kw$class;
var G__20692 = "navbar-text pull-right";
var G__20693 = (function (){var t__17625__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__17625__auto__,G__20691,G__20692,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562){
return (function (G__20694,G__20695){
return G__20694.nodeValue = [cljs.core.str("Hi, "),cljs.core.str(G__20695),cljs.core.str("!")].join('');
});})(t__17625__auto__,G__20691,G__20692,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562))
).call(null,t__17625__auto__,cljs_praxisboerse.core.first_name);

return t__17625__auto__;
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__20691,G__20692,G__20693) : hoplon.core.p.call(null,G__20691,G__20692,G__20693));
});})(G__20684,G__20685,G__20686,G__20687,G__20561,G__20562))
,null));
var alt__17565__auto__ = (new cljs.core.Delay(((function (con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562){
return (function (){
var G__20711 = cljs.core.cst$kw$class;
var G__20712 = "navbar-form navbar-right";
var G__20713 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (G__20711,G__20712,con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562){
return (function (G__20716){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$has_DASH_error,G__20716], null);
});})(G__20711,G__20712,con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562))
).call(null,cljs_praxisboerse.core.invalid_iz_QMARK_),(function (){var G__20719 = cljs.core.cst$kw$class;
var G__20720 = "form-control";
var G__20721 = cljs.core.cst$kw$type;
var G__20722 = "test";
var G__20723 = cljs.core.cst$kw$placeholder;
var G__20724 = "IZ-K\u00FCrzel";
var G__20725 = cljs.core.cst$kw$value;
var G__20726 = cljs_praxisboerse.core.iz;
var G__20727 = cljs.core.cst$kw$change;
var G__20728 = ((function (G__20719,G__20720,G__20721,G__20722,G__20723,G__20724,G__20725,G__20726,G__20727,G__20711,G__20712,con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562){
return (function (p1__19968_SHARP_){
var G__20729 = cljs_praxisboerse.core.iz;
var G__20730 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__19968_SHARP_) : cljs.core.deref.call(null,p1__19968_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20729,G__20730) : cljs.core.reset_BANG_.call(null,G__20729,G__20730));
});})(G__20719,G__20720,G__20721,G__20722,G__20723,G__20724,G__20725,G__20726,G__20727,G__20711,G__20712,con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__20719,G__20720,G__20721,G__20722,G__20723,G__20724,G__20725,G__20726,G__20727,G__20728) : hoplon.core.input.call(null,G__20719,G__20720,G__20721,G__20722,G__20723,G__20724,G__20725,G__20726,G__20727,G__20728));
})()], 0));
var G__20714 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (G__20711,G__20712,G__20713,con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562){
return (function (G__20731){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$has_DASH_error,G__20731], null);
});})(G__20711,G__20712,G__20713,con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562))
).call(null,cljs_praxisboerse.core.invalid_iz_QMARK_),(function (){var G__20734 = cljs.core.cst$kw$class;
var G__20735 = "form-control";
var G__20736 = cljs.core.cst$kw$type;
var G__20737 = "password";
var G__20738 = cljs.core.cst$kw$placeholder;
var G__20739 = "Passwort";
var G__20740 = cljs.core.cst$kw$value;
var G__20741 = cljs_praxisboerse.core.pw;
var G__20742 = cljs.core.cst$kw$change;
var G__20743 = ((function (G__20734,G__20735,G__20736,G__20737,G__20738,G__20739,G__20740,G__20741,G__20742,G__20711,G__20712,G__20713,con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562){
return (function (p1__19969_SHARP_){
var G__20744 = cljs_praxisboerse.core.pw;
var G__20745 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__19969_SHARP_) : cljs.core.deref.call(null,p1__19969_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20744,G__20745) : cljs.core.reset_BANG_.call(null,G__20744,G__20745));
});})(G__20734,G__20735,G__20736,G__20737,G__20738,G__20739,G__20740,G__20741,G__20742,G__20711,G__20712,G__20713,con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__20734,G__20735,G__20736,G__20737,G__20738,G__20739,G__20740,G__20741,G__20742,G__20743) : hoplon.core.input.call(null,G__20734,G__20735,G__20736,G__20737,G__20738,G__20739,G__20740,G__20741,G__20742,G__20743));
})()], 0));
var G__20715 = (function (){var G__20746 = cljs.core.cst$kw$class;
var G__20747 = "btn btn-success";
var G__20748 = cljs.core.cst$kw$type;
var G__20749 = "submit";
var G__20750 = cljs.core.cst$kw$disabled;
var G__20751 = cljs_praxisboerse.core.invalid_iz_QMARK_;
var G__20752 = cljs.core.cst$kw$click;
var G__20753 = cljs_praxisboerse.core.sign_in_BANG_;
var G__20754 = document.createTextNode("Einloggen");
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$9(G__20746,G__20747,G__20748,G__20749,G__20750,G__20751,G__20752,G__20753,G__20754) : hoplon.core.button.call(null,G__20746,G__20747,G__20748,G__20749,G__20750,G__20751,G__20752,G__20753,G__20754));
})();
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$5(G__20711,G__20712,G__20713,G__20714,G__20715) : hoplon.core.form.call(null,G__20711,G__20712,G__20713,G__20714,G__20715));
});})(con__17564__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562))
,null));
var tpl__17566__auto__ = ((function (con__17564__auto__,alt__17565__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562){
return (function (p__17567__auto__){
var G__20755 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__17567__auto__)?con__17564__auto__:alt__17565__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20755) : cljs.core.deref.call(null,G__20755));
});})(con__17564__auto__,alt__17565__auto__,G__20684,G__20685,G__20686,G__20687,G__20561,G__20562))
;
return javelin.core.formula(tpl__17566__auto__).call(null,cljs_praxisboerse.core.signed_in_QMARK_);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__20684,G__20685,G__20686,G__20687,G__20688) : hoplon.core.div.call(null,G__20684,G__20685,G__20686,G__20687,G__20688));
})()], 0));
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$3(G__20561,G__20562,G__20563) : hoplon.core.nav.call(null,G__20561,G__20562,G__20563));
})();
var G__20364 = (function (){var G__20771 = cljs.core.cst$kw$class;
var G__20772 = "jumbotron";
var G__20773 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("cljs-praxisboerse") : hoplon.core.h1.call(null,"cljs-praxisboerse")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Dies ist eine rudiment\u00E4re Single-Page Application (SPA) entwickelt mit ClojureScript und Hoplon. Sie dient\n            dem Vergleich derzeit verf\u00FCgbarer JavaScript-Alternativen und basiert auf dem Benutzungsoberfl\u00E4chen Labor\n            aus dem Wintersemester 2015. Bereitgestellt wird ein leichtgewichtiger Browser f\u00FCr die Praxisb\u00F6rse, welcher\n            keinen VPN-Zugriff erfordert.") : hoplon.core.p.call(null,"Dies ist eine rudiment\u00E4re Single-Page Application (SPA) entwickelt mit ClojureScript und Hoplon. Sie dient\n            dem Vergleich derzeit verf\u00FCgbarer JavaScript-Alternativen und basiert auf dem Benutzungsoberfl\u00E4chen Labor\n            aus dem Wintersemester 2015. Bereitgestellt wird ein leichtgewichtiger Browser f\u00FCr die Praxisb\u00F6rse, welcher\n            keinen VPN-Zugriff erfordert.")),(function (){var G__20781 = (function (){var G__20782 = cljs.core.cst$kw$class;
var G__20783 = "btn btn-primary btn-lg";
var G__20784 = cljs.core.cst$kw$href;
var G__20785 = "https://www.github.com/beatngu13/cljs-praxisboerse";
var G__20786 = cljs.core.cst$kw$role;
var G__20787 = "button";
var G__20788 = document.createTextNode("Auf GitHub anschauen \u00BB");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$7(G__20782,G__20783,G__20784,G__20785,G__20786,G__20787,G__20788) : hoplon.core.a.call(null,G__20782,G__20783,G__20784,G__20785,G__20786,G__20787,G__20788));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__20781) : hoplon.core.p.call(null,G__20781));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20771,G__20772,G__20773) : hoplon.core.div.call(null,G__20771,G__20772,G__20773));
})();
var G__20365 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Aktuelle Angebote") : hoplon.core.h2.call(null,"Aktuelle Angebote")),(function (){var con__17564__auto__ = (new cljs.core.Delay(((function (G__20363,G__20364){
return (function (){
var G__20872 = (function (){var G__20902 = cljs.core.cst$kw$class;
var G__20903 = "form-inline";
var G__20904 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20906 = cljs.core.cst$kw$for;
var G__20907 = "offerTypeInput";
var G__20908 = document.createTextNode("Angebotsart");
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__20906,G__20907,G__20908) : hoplon.core.label.call(null,G__20906,G__20907,G__20908));
})(),(function (){var G__20913 = cljs.core.cst$kw$class;
var G__20914 = "form-control control-between";
var G__20915 = cljs.core.cst$kw$value;
var G__20916 = cljs_praxisboerse.core.offer_type_input;
var G__20917 = cljs.core.cst$kw$change;
var G__20918 = ((function (G__20913,G__20914,G__20915,G__20916,G__20917,G__20902,G__20903,G__20363,G__20364){
return (function (p1__19970_SHARP_){
var G__20923 = cljs_praxisboerse.core.offer_type_input;
var G__20924 = (function (){var G__20925 = p1__19970_SHARP_.target;
return jQuery(G__20925);
})().val();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20923,G__20924) : cljs.core.reset_BANG_.call(null,G__20923,G__20924));
});})(G__20913,G__20914,G__20915,G__20916,G__20917,G__20902,G__20903,G__20363,G__20364))
;
var G__20919 = cljs.core.cst$kw$id;
var G__20920 = "offerTypeInput";
var G__20921 = (function (){var con__17564__auto__ = (new cljs.core.Delay(((function (G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364){
return (function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364){
return (function (p1__19971_SHARP_){
var G__20926 = cljs.core.cst$kw$value;
var G__20927 = cljs.core.cst$kw$shortname.cljs$core$IFn$_invoke$arity$1(p1__19971_SHARP_);
var G__20928 = (function (){var t__17625__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__17625__auto__,G__20926,G__20927,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364){
return (function (G__20929,G__20930){
return G__20929.nodeValue = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__20930);
});})(t__17625__auto__,G__20926,G__20927,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364))
).call(null,t__17625__auto__,p1__19971_SHARP_);

return t__17625__auto__;
})();
return (hoplon.core.option.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.option.cljs$core$IFn$_invoke$arity$3(G__20926,G__20927,G__20928) : hoplon.core.option.call(null,G__20926,G__20927,G__20928));
});})(G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.offer_types) : cljs.core.deref.call(null,cljs_praxisboerse.core.offer_types)));
});})(G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364))
,null));
var alt__17565__auto__ = (new cljs.core.Delay(((function (con__17564__auto__,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364){
return (function (){
return null;
});})(con__17564__auto__,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364))
,null));
var tpl__17566__auto__ = ((function (con__17564__auto__,alt__17565__auto__,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364){
return (function (p__17567__auto__){
var G__20931 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__17567__auto__)?con__17564__auto__:alt__17565__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20931) : cljs.core.deref.call(null,G__20931));
});})(con__17564__auto__,alt__17565__auto__,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364))
;
return javelin.core.formula(tpl__17566__auto__).call(null,javelin.core.formula(((function (con__17564__auto__,alt__17565__auto__,tpl__17566__auto__,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364){
return (function (G__20932,G__20933){
return (G__20932.cljs$core$IFn$_invoke$arity$1 ? G__20932.cljs$core$IFn$_invoke$arity$1(G__20933) : G__20932.call(null,G__20933));
});})(con__17564__auto__,alt__17565__auto__,tpl__17566__auto__,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20902,G__20903,G__20363,G__20364))
).call(null,cljs.core.seq,cljs_praxisboerse.core.offer_types));
})();
return (hoplon.core.select.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.select.cljs$core$IFn$_invoke$arity$9(G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20921) : hoplon.core.select.call(null,G__20913,G__20914,G__20915,G__20916,G__20917,G__20918,G__20919,G__20920,G__20921));
})()], 0));
var G__20905 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20934 = cljs.core.cst$kw$for;
var G__20935 = "inputFilter";
var G__20936 = document.createTextNode("Filter");
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__20934,G__20935,G__20936) : hoplon.core.label.call(null,G__20934,G__20935,G__20936));
})(),(function (){var G__20941 = cljs.core.cst$kw$class;
var G__20942 = "form-control control-right";
var G__20943 = cljs.core.cst$kw$type;
var G__20944 = "text";
var G__20945 = cljs.core.cst$kw$placeholder;
var G__20946 = "z. B. ClojureScript";
var G__20947 = cljs.core.cst$kw$value;
var G__20948 = cljs_praxisboerse.core.filter_input;
var G__20949 = cljs.core.cst$kw$change;
var G__20950 = ((function (G__20941,G__20942,G__20943,G__20944,G__20945,G__20946,G__20947,G__20948,G__20949,G__20902,G__20903,G__20904,G__20363,G__20364){
return (function (p1__19972_SHARP_){
var G__20954 = cljs_praxisboerse.core.filter_input;
var G__20955 = (function (){var G__20956 = p1__19972_SHARP_.target;
return jQuery(G__20956);
})().val();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20954,G__20955) : cljs.core.reset_BANG_.call(null,G__20954,G__20955));
});})(G__20941,G__20942,G__20943,G__20944,G__20945,G__20946,G__20947,G__20948,G__20949,G__20902,G__20903,G__20904,G__20363,G__20364))
;
var G__20951 = cljs.core.cst$kw$id;
var G__20952 = "filterInput";
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$12(G__20941,G__20942,G__20943,G__20944,G__20945,G__20946,G__20947,G__20948,G__20949,G__20950,G__20951,G__20952) : hoplon.core.input.call(null,G__20941,G__20942,G__20943,G__20944,G__20945,G__20946,G__20947,G__20948,G__20949,G__20950,G__20951,G__20952));
})()], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$4(G__20902,G__20903,G__20904,G__20905) : hoplon.core.form.call(null,G__20902,G__20903,G__20904,G__20905));
})();
var G__20873 = (function (){var G__20960 = cljs.core.cst$kw$class;
var G__20961 = "list-group";
var G__20962 = (function (){var G__20964 = cljs.core.cst$kw$class;
var G__20965 = "list-group-item active";
var G__20966 = document.createTextNode("Ergebnisse");
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$3(G__20964,G__20965,G__20966) : hoplon.core.li.call(null,G__20964,G__20965,G__20966));
})();
var G__20963 = hoplon.core.loop_tpl_STAR_(javelin.core.formula(((function (G__20960,G__20961,G__20962,G__20872,G__20363,G__20364){
return (function (G__20967){
return cljs.core.cst$kw$offers.cljs$core$IFn$_invoke$arity$1(G__20967);
});})(G__20960,G__20961,G__20962,G__20872,G__20363,G__20364))
).call(null,cljs_praxisboerse.core.query),((function (G__20960,G__20961,G__20962,G__20872,G__20363,G__20364){
return (function (item__17556__auto__){
var vec__20968 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__20960,G__20961,G__20962,G__20872,G__20363,G__20364){
return (function (offer){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [offer], null);
});})(G__20960,G__20961,G__20962,G__20872,G__20363,G__20364))
).call(null,item__17556__auto__));
var offer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20968,(0),null);
var company = javelin.core.formula(((function (vec__20968,offer,G__20960,G__20961,G__20962,G__20872,G__20363,G__20364){
return (function (G__20972,G__20974,G__20973,G__20971){
var G__20976 = G__20972;
var G__20977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$companies,(function (){var G__20978 = [cljs.core.str(cljs.core.cst$kw$companyId.cljs$core$IFn$_invoke$arity$1(G__20974))].join('');
return (G__20973.cljs$core$IFn$_invoke$arity$1 ? G__20973.cljs$core$IFn$_invoke$arity$1(G__20978) : G__20973.call(null,G__20978));
})()], null);
return (G__20971.cljs$core$IFn$_invoke$arity$2 ? G__20971.cljs$core$IFn$_invoke$arity$2(G__20976,G__20977) : G__20971.call(null,G__20976,G__20977));
});})(vec__20968,offer,G__20960,G__20961,G__20962,G__20872,G__20363,G__20364))
).call(null,cljs_praxisboerse.core.query,offer,cljs.core.keyword,cljs.core.get_in);
return cljs_praxisboerse.templates.offer_list_item(offer,company);
});})(G__20960,G__20961,G__20962,G__20872,G__20363,G__20364))
);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$4(G__20960,G__20961,G__20962,G__20963) : hoplon.core.ul.call(null,G__20960,G__20961,G__20962,G__20963));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20872,G__20873) : hoplon.core.div.call(null,G__20872,G__20873));
});})(G__20363,G__20364))
,null));
var alt__17565__auto__ = (new cljs.core.Delay(((function (con__17564__auto__,G__20363,G__20364){
return (function (){
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Bitte logge dich ein, um aktuelle Angebote einzusehen.") : hoplon.core.p.call(null,"Bitte logge dich ein, um aktuelle Angebote einzusehen."));
});})(con__17564__auto__,G__20363,G__20364))
,null));
var tpl__17566__auto__ = ((function (con__17564__auto__,alt__17565__auto__,G__20363,G__20364){
return (function (p__17567__auto__){
var G__20979 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__17567__auto__)?con__17564__auto__:alt__17565__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20979) : cljs.core.deref.call(null,G__20979));
});})(con__17564__auto__,alt__17565__auto__,G__20363,G__20364))
;
return javelin.core.formula(tpl__17566__auto__).call(null,cljs_praxisboerse.core.signed_in_QMARK_);
})()], 0));
var G__20366 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.hr.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.hr.cljs$core$IFn$_invoke$arity$0() : hoplon.core.hr.call(null)),(function (){var G__20980 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Copyright \u00A9 2017 Daniel Kraus") : hoplon.core.p.call(null,"Copyright \u00A9 2017 Daniel Kraus"));
return (hoplon.core.footer.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.footer.cljs$core$IFn$_invoke$arity$1(G__20980) : hoplon.core.footer.call(null,G__20980));
})()], 0));
var G__20367 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"jquery-1.9.1/jquery-1.9.1.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"jquery-1.9.1/jquery-1.9.1.min.js"));
var G__20368 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js"));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$6(G__20363,G__20364,G__20365,G__20366,G__20367,G__20368) : hoplon.core.body.call(null,G__20363,G__20364,G__20365,G__20366,G__20367,G__20368));
})()], 0));
