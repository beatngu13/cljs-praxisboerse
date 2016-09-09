// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs_praxisboerse.core');
goog.require('cljs_praxisboerse.templates');
goog.require('hoplon.twitter.bootstrap');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20013 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css"));
var G__20014 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css"));
var G__20015 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__20013,G__20014,G__20015) : hoplon.core.head.call(null,G__20013,G__20014,G__20015));
})(),(function (){var G__20403 = (function (){var G__20601 = cljs.core.cst$kw$class;
var G__20602 = "navbar navbar-inverse navbar-fixed-top";
var G__20603 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20626 = cljs.core.cst$kw$class;
var G__20627 = "navbar-header";
var G__20628 = (function (){var G__20633 = cljs.core.cst$kw$class;
var G__20634 = "navbar-toggle collapsed";
var G__20635 = cljs.core.cst$kw$type;
var G__20636 = "button";
var G__20637 = cljs.core.cst$kw$data_DASH_toggle;
var G__20638 = "collapse";
var G__20639 = cljs.core.cst$kw$data_DASH_target;
var G__20640 = "#navbar";
var G__20641 = cljs.core.cst$kw$aria_DASH_expanded;
var G__20642 = "false";
var G__20643 = cljs.core.cst$kw$aria_DASH_controls;
var G__20644 = "navbar";
var G__20645 = (function (){var G__20649 = cljs.core.cst$kw$class;
var G__20650 = "sr-only";
var G__20651 = document.createTextNode("Toggle navigation");
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20649,G__20650,G__20651) : hoplon.core.span.call(null,G__20649,G__20650,G__20651));
})();
var G__20646 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__20647 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__20648 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$16 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$16(G__20633,G__20634,G__20635,G__20636,G__20637,G__20638,G__20639,G__20640,G__20641,G__20642,G__20643,G__20644,G__20645,G__20646,G__20647,G__20648) : hoplon.core.button.call(null,G__20633,G__20634,G__20635,G__20636,G__20637,G__20638,G__20639,G__20640,G__20641,G__20642,G__20643,G__20644,G__20645,G__20646,G__20647,G__20648));
})();
var G__20629 = (function (){var G__20652 = cljs.core.cst$kw$class;
var G__20653 = "navbar-brand";
var G__20654 = cljs.core.cst$kw$href;
var G__20655 = "http://www.iwi.hs-karlsruhe.de/boerse";
var G__20656 = document.createTextNode("Praxisb\u00F6rse");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__20652,G__20653,G__20654,G__20655,G__20656) : hoplon.core.a.call(null,G__20652,G__20653,G__20654,G__20655,G__20656));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20626,G__20627,G__20628,G__20629) : hoplon.core.div.call(null,G__20626,G__20627,G__20628,G__20629));
})(),(function (){var G__20724 = cljs.core.cst$kw$class;
var G__20725 = "navbar-collapse collapse";
var G__20726 = cljs.core.cst$kw$id;
var G__20727 = "navbar";
var G__20728 = (function (){var con__13355__auto__ = (new cljs.core.Delay(((function (G__20724,G__20725,G__20726,G__20727,G__20601,G__20602){
return (function (){
var G__20731 = cljs.core.cst$kw$class;
var G__20732 = "navbar-text pull-right";
var G__20733 = (function (){var t__13416__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13416__auto__,G__20731,G__20732,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602){
return (function (G__20734,G__20735){
return G__20734.nodeValue = [cljs.core.str("Hi, "),cljs.core.str(G__20735),cljs.core.str("!")].join('');
});})(t__13416__auto__,G__20731,G__20732,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602))
).call(null,t__13416__auto__,cljs_praxisboerse.core.first_name);

return t__13416__auto__;
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__20731,G__20732,G__20733) : hoplon.core.p.call(null,G__20731,G__20732,G__20733));
});})(G__20724,G__20725,G__20726,G__20727,G__20601,G__20602))
,null));
var alt__13356__auto__ = (new cljs.core.Delay(((function (con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602){
return (function (){
var G__20751 = cljs.core.cst$kw$class;
var G__20752 = "navbar-form navbar-right";
var G__20753 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (G__20751,G__20752,con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602){
return (function (G__20756){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$has_DASH_error,G__20756], null);
});})(G__20751,G__20752,con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602))
).call(null,cljs_praxisboerse.core.invalid_iz_QMARK_),(function (){var G__20759 = cljs.core.cst$kw$class;
var G__20760 = "form-control";
var G__20761 = cljs.core.cst$kw$type;
var G__20762 = "test";
var G__20763 = cljs.core.cst$kw$placeholder;
var G__20764 = "IZ-K\u00FCrzel";
var G__20765 = cljs.core.cst$kw$value;
var G__20766 = cljs_praxisboerse.core.iz;
var G__20767 = cljs.core.cst$kw$change;
var G__20768 = ((function (G__20759,G__20760,G__20761,G__20762,G__20763,G__20764,G__20765,G__20766,G__20767,G__20751,G__20752,con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602){
return (function (p1__20008_SHARP_){
var G__20769 = cljs_praxisboerse.core.iz;
var G__20770 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__20008_SHARP_) : cljs.core.deref.call(null,p1__20008_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20769,G__20770) : cljs.core.reset_BANG_.call(null,G__20769,G__20770));
});})(G__20759,G__20760,G__20761,G__20762,G__20763,G__20764,G__20765,G__20766,G__20767,G__20751,G__20752,con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__20759,G__20760,G__20761,G__20762,G__20763,G__20764,G__20765,G__20766,G__20767,G__20768) : hoplon.core.input.call(null,G__20759,G__20760,G__20761,G__20762,G__20763,G__20764,G__20765,G__20766,G__20767,G__20768));
})()], 0));
var G__20754 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (G__20751,G__20752,G__20753,con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602){
return (function (G__20771){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$has_DASH_error,G__20771], null);
});})(G__20751,G__20752,G__20753,con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602))
).call(null,cljs_praxisboerse.core.invalid_iz_QMARK_),(function (){var G__20774 = cljs.core.cst$kw$class;
var G__20775 = "form-control";
var G__20776 = cljs.core.cst$kw$type;
var G__20777 = "password";
var G__20778 = cljs.core.cst$kw$placeholder;
var G__20779 = "Passwort";
var G__20780 = cljs.core.cst$kw$value;
var G__20781 = cljs_praxisboerse.core.pw;
var G__20782 = cljs.core.cst$kw$change;
var G__20783 = ((function (G__20774,G__20775,G__20776,G__20777,G__20778,G__20779,G__20780,G__20781,G__20782,G__20751,G__20752,G__20753,con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602){
return (function (p1__20009_SHARP_){
var G__20784 = cljs_praxisboerse.core.pw;
var G__20785 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__20009_SHARP_) : cljs.core.deref.call(null,p1__20009_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20784,G__20785) : cljs.core.reset_BANG_.call(null,G__20784,G__20785));
});})(G__20774,G__20775,G__20776,G__20777,G__20778,G__20779,G__20780,G__20781,G__20782,G__20751,G__20752,G__20753,con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__20774,G__20775,G__20776,G__20777,G__20778,G__20779,G__20780,G__20781,G__20782,G__20783) : hoplon.core.input.call(null,G__20774,G__20775,G__20776,G__20777,G__20778,G__20779,G__20780,G__20781,G__20782,G__20783));
})()], 0));
var G__20755 = (function (){var G__20786 = cljs.core.cst$kw$class;
var G__20787 = "btn btn-success";
var G__20788 = cljs.core.cst$kw$type;
var G__20789 = "submit";
var G__20790 = cljs.core.cst$kw$disabled;
var G__20791 = cljs_praxisboerse.core.invalid_iz_QMARK_;
var G__20792 = cljs.core.cst$kw$click;
var G__20793 = cljs_praxisboerse.core.sign_in_BANG_;
var G__20794 = document.createTextNode("Einloggen");
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$9(G__20786,G__20787,G__20788,G__20789,G__20790,G__20791,G__20792,G__20793,G__20794) : hoplon.core.button.call(null,G__20786,G__20787,G__20788,G__20789,G__20790,G__20791,G__20792,G__20793,G__20794));
})();
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$5(G__20751,G__20752,G__20753,G__20754,G__20755) : hoplon.core.form.call(null,G__20751,G__20752,G__20753,G__20754,G__20755));
});})(con__13355__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602))
,null));
var tpl__13357__auto__ = ((function (con__13355__auto__,alt__13356__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602){
return (function (p__13358__auto__){
var G__20795 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__13358__auto__)?con__13355__auto__:alt__13356__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20795) : cljs.core.deref.call(null,G__20795));
});})(con__13355__auto__,alt__13356__auto__,G__20724,G__20725,G__20726,G__20727,G__20601,G__20602))
;
return javelin.core.formula(tpl__13357__auto__).call(null,cljs_praxisboerse.core.signed_in_QMARK_);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__20724,G__20725,G__20726,G__20727,G__20728) : hoplon.core.div.call(null,G__20724,G__20725,G__20726,G__20727,G__20728));
})()], 0));
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$3(G__20601,G__20602,G__20603) : hoplon.core.nav.call(null,G__20601,G__20602,G__20603));
})();
var G__20404 = (function (){var G__20811 = cljs.core.cst$kw$class;
var G__20812 = "jumbotron";
var G__20813 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("cljs-praxisboerse") : hoplon.core.h1.call(null,"cljs-praxisboerse")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Dies ist eine rudiment\u00E4re Single-Page Application (SPA) entwickelt mit ClojureScript und Hoplon. Sie dient\n            dem Vergleich derzeit verf\u00FCgbarer JavaScript-Alternativen und basiert auf dem Benutzungsoberfl\u00E4chen Labor\n            aus dem Wintersemester 2015. Bereitgestellt wird ein leichtgewichtiger Browser f\u00FCr die Praxisb\u00F6rse, welcher\n            keinen VPN-Zugriff erfordert.") : hoplon.core.p.call(null,"Dies ist eine rudiment\u00E4re Single-Page Application (SPA) entwickelt mit ClojureScript und Hoplon. Sie dient\n            dem Vergleich derzeit verf\u00FCgbarer JavaScript-Alternativen und basiert auf dem Benutzungsoberfl\u00E4chen Labor\n            aus dem Wintersemester 2015. Bereitgestellt wird ein leichtgewichtiger Browser f\u00FCr die Praxisb\u00F6rse, welcher\n            keinen VPN-Zugriff erfordert.")),(function (){var G__20821 = (function (){var G__20822 = cljs.core.cst$kw$class;
var G__20823 = "btn btn-primary btn-lg";
var G__20824 = cljs.core.cst$kw$href;
var G__20825 = "https://www.github.com/beatngu13/cljs-praxisboerse";
var G__20826 = cljs.core.cst$kw$role;
var G__20827 = "button";
var G__20828 = document.createTextNode("Auf GitHub anschauen \u00BB");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$7(G__20822,G__20823,G__20824,G__20825,G__20826,G__20827,G__20828) : hoplon.core.a.call(null,G__20822,G__20823,G__20824,G__20825,G__20826,G__20827,G__20828));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__20821) : hoplon.core.p.call(null,G__20821));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20811,G__20812,G__20813) : hoplon.core.div.call(null,G__20811,G__20812,G__20813));
})();
var G__20405 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Aktuelle Angebote") : hoplon.core.h2.call(null,"Aktuelle Angebote")),(function (){var con__13355__auto__ = (new cljs.core.Delay(((function (G__20403,G__20404){
return (function (){
var G__20912 = (function (){var G__20942 = cljs.core.cst$kw$class;
var G__20943 = "form-inline";
var G__20944 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20946 = cljs.core.cst$kw$for;
var G__20947 = "offerTypeInput";
var G__20948 = document.createTextNode("Angebotsart");
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__20946,G__20947,G__20948) : hoplon.core.label.call(null,G__20946,G__20947,G__20948));
})(),(function (){var G__20953 = cljs.core.cst$kw$class;
var G__20954 = "form-control control-between";
var G__20955 = cljs.core.cst$kw$value;
var G__20956 = cljs_praxisboerse.core.offer_type_input;
var G__20957 = cljs.core.cst$kw$change;
var G__20958 = ((function (G__20953,G__20954,G__20955,G__20956,G__20957,G__20942,G__20943,G__20403,G__20404){
return (function (p1__20010_SHARP_){
var G__20963 = cljs_praxisboerse.core.offer_type_input;
var G__20964 = (function (){var G__20965 = p1__20010_SHARP_.target;
return jQuery(G__20965);
})().val();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20963,G__20964) : cljs.core.reset_BANG_.call(null,G__20963,G__20964));
});})(G__20953,G__20954,G__20955,G__20956,G__20957,G__20942,G__20943,G__20403,G__20404))
;
var G__20959 = cljs.core.cst$kw$id;
var G__20960 = "offerTypeInput";
var G__20961 = (function (){var con__13355__auto__ = (new cljs.core.Delay(((function (G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404){
return (function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404){
return (function (p1__20011_SHARP_){
var G__20966 = cljs.core.cst$kw$value;
var G__20967 = cljs.core.cst$kw$shortname.cljs$core$IFn$_invoke$arity$1(p1__20011_SHARP_);
var G__20968 = (function (){var t__13416__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__13416__auto__,G__20966,G__20967,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404){
return (function (G__20970,G__20969){
return G__20969.nodeValue = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__20970);
});})(t__13416__auto__,G__20966,G__20967,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404))
).call(null,p1__20011_SHARP_,t__13416__auto__);

return t__13416__auto__;
})();
return (hoplon.core.option.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.option.cljs$core$IFn$_invoke$arity$3(G__20966,G__20967,G__20968) : hoplon.core.option.call(null,G__20966,G__20967,G__20968));
});})(G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.offer_types) : cljs.core.deref.call(null,cljs_praxisboerse.core.offer_types)));
});})(G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404))
,null));
var alt__13356__auto__ = (new cljs.core.Delay(((function (con__13355__auto__,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404){
return (function (){
return null;
});})(con__13355__auto__,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404))
,null));
var tpl__13357__auto__ = ((function (con__13355__auto__,alt__13356__auto__,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404){
return (function (p__13358__auto__){
var G__20971 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__13358__auto__)?con__13355__auto__:alt__13356__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20971) : cljs.core.deref.call(null,G__20971));
});})(con__13355__auto__,alt__13356__auto__,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404))
;
return javelin.core.formula(tpl__13357__auto__).call(null,javelin.core.formula(((function (con__13355__auto__,alt__13356__auto__,tpl__13357__auto__,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404){
return (function (G__20972,G__20973){
return (G__20972.cljs$core$IFn$_invoke$arity$1 ? G__20972.cljs$core$IFn$_invoke$arity$1(G__20973) : G__20972.call(null,G__20973));
});})(con__13355__auto__,alt__13356__auto__,tpl__13357__auto__,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20942,G__20943,G__20403,G__20404))
).call(null,cljs.core.seq,cljs_praxisboerse.core.offer_types));
})();
return (hoplon.core.select.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.select.cljs$core$IFn$_invoke$arity$9(G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20961) : hoplon.core.select.call(null,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960,G__20961));
})()], 0));
var G__20945 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20974 = cljs.core.cst$kw$for;
var G__20975 = "inputFilter";
var G__20976 = document.createTextNode("Filter");
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__20974,G__20975,G__20976) : hoplon.core.label.call(null,G__20974,G__20975,G__20976));
})(),(function (){var G__20981 = cljs.core.cst$kw$class;
var G__20982 = "form-control control-right";
var G__20983 = cljs.core.cst$kw$type;
var G__20984 = "text";
var G__20985 = cljs.core.cst$kw$placeholder;
var G__20986 = "z. B. ClojureScript";
var G__20987 = cljs.core.cst$kw$value;
var G__20988 = cljs_praxisboerse.core.filter_input;
var G__20989 = cljs.core.cst$kw$change;
var G__20990 = ((function (G__20981,G__20982,G__20983,G__20984,G__20985,G__20986,G__20987,G__20988,G__20989,G__20942,G__20943,G__20944,G__20403,G__20404){
return (function (p1__20012_SHARP_){
var G__20994 = cljs_praxisboerse.core.filter_input;
var G__20995 = (function (){var G__20996 = p1__20012_SHARP_.target;
return jQuery(G__20996);
})().val();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20994,G__20995) : cljs.core.reset_BANG_.call(null,G__20994,G__20995));
});})(G__20981,G__20982,G__20983,G__20984,G__20985,G__20986,G__20987,G__20988,G__20989,G__20942,G__20943,G__20944,G__20403,G__20404))
;
var G__20991 = cljs.core.cst$kw$id;
var G__20992 = "filterInput";
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$12(G__20981,G__20982,G__20983,G__20984,G__20985,G__20986,G__20987,G__20988,G__20989,G__20990,G__20991,G__20992) : hoplon.core.input.call(null,G__20981,G__20982,G__20983,G__20984,G__20985,G__20986,G__20987,G__20988,G__20989,G__20990,G__20991,G__20992));
})()], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$4(G__20942,G__20943,G__20944,G__20945) : hoplon.core.form.call(null,G__20942,G__20943,G__20944,G__20945));
})();
var G__20913 = (function (){var G__21000 = cljs.core.cst$kw$class;
var G__21001 = "list-group";
var G__21002 = (function (){var G__21004 = cljs.core.cst$kw$class;
var G__21005 = "list-group-item active";
var G__21006 = document.createTextNode("Ergebnisse");
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$3(G__21004,G__21005,G__21006) : hoplon.core.li.call(null,G__21004,G__21005,G__21006));
})();
var G__21003 = hoplon.core.loop_tpl_STAR_(javelin.core.formula(((function (G__21000,G__21001,G__21002,G__20912,G__20403,G__20404){
return (function (G__21007){
return cljs.core.cst$kw$offers.cljs$core$IFn$_invoke$arity$1(G__21007);
});})(G__21000,G__21001,G__21002,G__20912,G__20403,G__20404))
).call(null,cljs_praxisboerse.core.query),((function (G__21000,G__21001,G__21002,G__20912,G__20403,G__20404){
return (function (item__13347__auto__){
var vec__21008 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__21000,G__21001,G__21002,G__20912,G__20403,G__20404){
return (function (offer){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [offer], null);
});})(G__21000,G__21001,G__21002,G__20912,G__20403,G__20404))
).call(null,item__13347__auto__));
var offer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21008,(0),null);
var company = javelin.core.formula(((function (vec__21008,offer,G__21000,G__21001,G__21002,G__20912,G__20403,G__20404){
return (function (G__21012,G__21014,G__21013,G__21011){
var G__21016 = G__21012;
var G__21017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$companies,(function (){var G__21018 = [cljs.core.str(cljs.core.cst$kw$companyId.cljs$core$IFn$_invoke$arity$1(G__21014))].join('');
return (G__21013.cljs$core$IFn$_invoke$arity$1 ? G__21013.cljs$core$IFn$_invoke$arity$1(G__21018) : G__21013.call(null,G__21018));
})()], null);
return (G__21011.cljs$core$IFn$_invoke$arity$2 ? G__21011.cljs$core$IFn$_invoke$arity$2(G__21016,G__21017) : G__21011.call(null,G__21016,G__21017));
});})(vec__21008,offer,G__21000,G__21001,G__21002,G__20912,G__20403,G__20404))
).call(null,cljs_praxisboerse.core.query,offer,cljs.core.keyword,cljs.core.get_in);
return cljs_praxisboerse.templates.offer_list_item(offer,company);
});})(G__21000,G__21001,G__21002,G__20912,G__20403,G__20404))
);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$4(G__21000,G__21001,G__21002,G__21003) : hoplon.core.ul.call(null,G__21000,G__21001,G__21002,G__21003));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20912,G__20913) : hoplon.core.div.call(null,G__20912,G__20913));
});})(G__20403,G__20404))
,null));
var alt__13356__auto__ = (new cljs.core.Delay(((function (con__13355__auto__,G__20403,G__20404){
return (function (){
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Bitte logge dich ein, um aktuelle Angebote einzusehen.") : hoplon.core.p.call(null,"Bitte logge dich ein, um aktuelle Angebote einzusehen."));
});})(con__13355__auto__,G__20403,G__20404))
,null));
var tpl__13357__auto__ = ((function (con__13355__auto__,alt__13356__auto__,G__20403,G__20404){
return (function (p__13358__auto__){
var G__21019 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__13358__auto__)?con__13355__auto__:alt__13356__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21019) : cljs.core.deref.call(null,G__21019));
});})(con__13355__auto__,alt__13356__auto__,G__20403,G__20404))
;
return javelin.core.formula(tpl__13357__auto__).call(null,cljs_praxisboerse.core.signed_in_QMARK_);
})()], 0));
var G__20406 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.hr.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.hr.cljs$core$IFn$_invoke$arity$0() : hoplon.core.hr.call(null)),(function (){var G__21020 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Copyright \u00A9 2016 Daniel Kraus") : hoplon.core.p.call(null,"Copyright \u00A9 2016 Daniel Kraus"));
return (hoplon.core.footer.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.footer.cljs$core$IFn$_invoke$arity$1(G__21020) : hoplon.core.footer.call(null,G__21020));
})()], 0));
var G__20407 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"jquery-1.9.1/jquery-1.9.1.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"jquery-1.9.1/jquery-1.9.1.min.js"));
var G__20408 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js"));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$6(G__20403,G__20404,G__20405,G__20406,G__20407,G__20408) : hoplon.core.body.call(null,G__20403,G__20404,G__20405,G__20406,G__20407,G__20408));
})()], 0));
