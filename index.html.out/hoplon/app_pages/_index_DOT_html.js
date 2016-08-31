// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs_praxisboerse.core');
goog.require('cljs_praxisboerse.templates');
goog.require('hoplon.twitter.bootstrap');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19651 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap.min.css"));
var G__19652 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"bootstrap-3.3.7/css/bootstrap-theme.min.css"));
var G__19653 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$href,"app.css"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__19651,G__19652,G__19653) : hoplon.core.head.call(null,G__19651,G__19652,G__19653));
})(),(function (){var G__20041 = (function (){var G__20239 = cljs.core.cst$kw$class;
var G__20240 = "navbar navbar-inverse navbar-fixed-top";
var G__20241 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20264 = cljs.core.cst$kw$class;
var G__20265 = "navbar-header";
var G__20266 = (function (){var G__20271 = cljs.core.cst$kw$type;
var G__20272 = "button";
var G__20273 = cljs.core.cst$kw$class;
var G__20274 = "navbar-toggle collapsed";
var G__20275 = cljs.core.cst$kw$data_DASH_toggle;
var G__20276 = "collapse";
var G__20277 = cljs.core.cst$kw$data_DASH_target;
var G__20278 = "#navbar";
var G__20279 = cljs.core.cst$kw$aria_DASH_expanded;
var G__20280 = "false";
var G__20281 = cljs.core.cst$kw$aria_DASH_controls;
var G__20282 = "navbar";
var G__20283 = (function (){var G__20287 = cljs.core.cst$kw$class;
var G__20288 = "sr-only";
var G__20289 = document.createTextNode("Toggle navigation");
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20287,G__20288,G__20289) : hoplon.core.span.call(null,G__20287,G__20288,G__20289));
})();
var G__20284 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__20285 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
var G__20286 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"icon-bar") : hoplon.core.span.call(null,cljs.core.cst$kw$class,"icon-bar"));
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$16 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$16(G__20271,G__20272,G__20273,G__20274,G__20275,G__20276,G__20277,G__20278,G__20279,G__20280,G__20281,G__20282,G__20283,G__20284,G__20285,G__20286) : hoplon.core.button.call(null,G__20271,G__20272,G__20273,G__20274,G__20275,G__20276,G__20277,G__20278,G__20279,G__20280,G__20281,G__20282,G__20283,G__20284,G__20285,G__20286));
})();
var G__20267 = (function (){var G__20290 = cljs.core.cst$kw$class;
var G__20291 = "navbar-brand";
var G__20292 = cljs.core.cst$kw$href;
var G__20293 = "http://www.iwi.hs-karlsruhe.de/boerse";
var G__20294 = document.createTextNode("Praxisb\u00F6rse");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__20290,G__20291,G__20292,G__20293,G__20294) : hoplon.core.a.call(null,G__20290,G__20291,G__20292,G__20293,G__20294));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20264,G__20265,G__20266,G__20267) : hoplon.core.div.call(null,G__20264,G__20265,G__20266,G__20267));
})(),(function (){var G__20362 = cljs.core.cst$kw$class;
var G__20363 = "navbar-collapse collapse";
var G__20364 = cljs.core.cst$kw$id;
var G__20365 = "navbar";
var G__20366 = (function (){var con__17564__auto__ = (new cljs.core.Delay(((function (G__20362,G__20363,G__20364,G__20365,G__20239,G__20240){
return (function (){
var G__20369 = cljs.core.cst$kw$class;
var G__20370 = "navbar-text pull-right";
var G__20371 = (function (){var t__17625__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__17625__auto__,G__20369,G__20370,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240){
return (function (G__20372,G__20373){
return G__20372.nodeValue = [cljs.core.str("Hi, "),cljs.core.str(G__20373),cljs.core.str("!")].join('');
});})(t__17625__auto__,G__20369,G__20370,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240))
).call(null,t__17625__auto__,cljs_praxisboerse.core.first_name);

return t__17625__auto__;
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__20369,G__20370,G__20371) : hoplon.core.p.call(null,G__20369,G__20370,G__20371));
});})(G__20362,G__20363,G__20364,G__20365,G__20239,G__20240))
,null));
var alt__17565__auto__ = (new cljs.core.Delay(((function (con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240){
return (function (){
var G__20389 = cljs.core.cst$kw$class;
var G__20390 = "navbar-form navbar-right";
var G__20391 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (G__20389,G__20390,con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240){
return (function (G__20394){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$has_DASH_error,G__20394], null);
});})(G__20389,G__20390,con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240))
).call(null,cljs_praxisboerse.core.invalid_iz_QMARK_),(function (){var G__20397 = cljs.core.cst$kw$type;
var G__20398 = "test";
var G__20399 = cljs.core.cst$kw$placeholder;
var G__20400 = "IZ-K\u00FCrzel";
var G__20401 = cljs.core.cst$kw$class;
var G__20402 = "form-control";
var G__20403 = cljs.core.cst$kw$value;
var G__20404 = cljs_praxisboerse.core.iz;
var G__20405 = cljs.core.cst$kw$change;
var G__20406 = ((function (G__20397,G__20398,G__20399,G__20400,G__20401,G__20402,G__20403,G__20404,G__20405,G__20389,G__20390,con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240){
return (function (p1__19646_SHARP_){
var G__20407 = cljs_praxisboerse.core.iz;
var G__20408 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__19646_SHARP_) : cljs.core.deref.call(null,p1__19646_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20407,G__20408) : cljs.core.reset_BANG_.call(null,G__20407,G__20408));
});})(G__20397,G__20398,G__20399,G__20400,G__20401,G__20402,G__20403,G__20404,G__20405,G__20389,G__20390,con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__20397,G__20398,G__20399,G__20400,G__20401,G__20402,G__20403,G__20404,G__20405,G__20406) : hoplon.core.input.call(null,G__20397,G__20398,G__20399,G__20400,G__20401,G__20402,G__20403,G__20404,G__20405,G__20406));
})()], 0));
var G__20392 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (G__20389,G__20390,G__20391,con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240){
return (function (G__20409){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$has_DASH_error,G__20409], null);
});})(G__20389,G__20390,G__20391,con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240))
).call(null,cljs_praxisboerse.core.invalid_iz_QMARK_),(function (){var G__20412 = cljs.core.cst$kw$type;
var G__20413 = "password";
var G__20414 = cljs.core.cst$kw$placeholder;
var G__20415 = "Passwort";
var G__20416 = cljs.core.cst$kw$class;
var G__20417 = "form-control";
var G__20418 = cljs.core.cst$kw$value;
var G__20419 = cljs_praxisboerse.core.pw;
var G__20420 = cljs.core.cst$kw$change;
var G__20421 = ((function (G__20412,G__20413,G__20414,G__20415,G__20416,G__20417,G__20418,G__20419,G__20420,G__20389,G__20390,G__20391,con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240){
return (function (p1__19647_SHARP_){
var G__20422 = cljs_praxisboerse.core.pw;
var G__20423 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__19647_SHARP_) : cljs.core.deref.call(null,p1__19647_SHARP_));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20422,G__20423) : cljs.core.reset_BANG_.call(null,G__20422,G__20423));
});})(G__20412,G__20413,G__20414,G__20415,G__20416,G__20417,G__20418,G__20419,G__20420,G__20389,G__20390,G__20391,con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$10(G__20412,G__20413,G__20414,G__20415,G__20416,G__20417,G__20418,G__20419,G__20420,G__20421) : hoplon.core.input.call(null,G__20412,G__20413,G__20414,G__20415,G__20416,G__20417,G__20418,G__20419,G__20420,G__20421));
})()], 0));
var G__20393 = (function (){var G__20424 = cljs.core.cst$kw$type;
var G__20425 = "submit";
var G__20426 = cljs.core.cst$kw$class;
var G__20427 = "btn btn-success";
var G__20428 = cljs.core.cst$kw$disabled;
var G__20429 = cljs_praxisboerse.core.invalid_iz_QMARK_;
var G__20430 = cljs.core.cst$kw$click;
var G__20431 = cljs_praxisboerse.core.sign_in_BANG_;
var G__20432 = document.createTextNode("Einloggen");
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$9(G__20424,G__20425,G__20426,G__20427,G__20428,G__20429,G__20430,G__20431,G__20432) : hoplon.core.button.call(null,G__20424,G__20425,G__20426,G__20427,G__20428,G__20429,G__20430,G__20431,G__20432));
})();
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$5(G__20389,G__20390,G__20391,G__20392,G__20393) : hoplon.core.form.call(null,G__20389,G__20390,G__20391,G__20392,G__20393));
});})(con__17564__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240))
,null));
var tpl__17566__auto__ = ((function (con__17564__auto__,alt__17565__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240){
return (function (p__17567__auto__){
var G__20433 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__17567__auto__)?con__17564__auto__:alt__17565__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20433) : cljs.core.deref.call(null,G__20433));
});})(con__17564__auto__,alt__17565__auto__,G__20362,G__20363,G__20364,G__20365,G__20239,G__20240))
;
return javelin.core.formula(tpl__17566__auto__).call(null,cljs_praxisboerse.core.signed_in_QMARK_);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__20362,G__20363,G__20364,G__20365,G__20366) : hoplon.core.div.call(null,G__20362,G__20363,G__20364,G__20365,G__20366));
})()], 0));
return (hoplon.core.nav.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.nav.cljs$core$IFn$_invoke$arity$3(G__20239,G__20240,G__20241) : hoplon.core.nav.call(null,G__20239,G__20240,G__20241));
})();
var G__20042 = (function (){var G__20449 = cljs.core.cst$kw$class;
var G__20450 = "jumbotron";
var G__20451 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("cljs-praxisboerse") : hoplon.core.h1.call(null,"cljs-praxisboerse")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Dies ist eine rudiment\u00E4re Single-Page Application (SPA) entwickelt mit ClojureScript und Hoplon. Sie dient\n            dem Vergleich derzeit verf\u00FCgbarer JavaScript-Alternativen und basiert auf dem Benutzungsoberfl\u00E4chen Labor\n            aus dem Wintersemester 2015. Bereitgestellt wird ein leichtgewichtiger Browser f\u00FCr die Praxisb\u00F6rse, welcher\n            keinen VPN-Zugriff erfordert.") : hoplon.core.p.call(null,"Dies ist eine rudiment\u00E4re Single-Page Application (SPA) entwickelt mit ClojureScript und Hoplon. Sie dient\n            dem Vergleich derzeit verf\u00FCgbarer JavaScript-Alternativen und basiert auf dem Benutzungsoberfl\u00E4chen Labor\n            aus dem Wintersemester 2015. Bereitgestellt wird ein leichtgewichtiger Browser f\u00FCr die Praxisb\u00F6rse, welcher\n            keinen VPN-Zugriff erfordert.")),(function (){var G__20459 = (function (){var G__20460 = cljs.core.cst$kw$class;
var G__20461 = "btn btn-primary btn-lg";
var G__20462 = cljs.core.cst$kw$href;
var G__20463 = "https://www.github.com/beatngu13/cljs-praxisboerse";
var G__20464 = cljs.core.cst$kw$role;
var G__20465 = "button";
var G__20466 = document.createTextNode("Auf GitHub anschauen \u00BB");
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$7(G__20460,G__20461,G__20462,G__20463,G__20464,G__20465,G__20466) : hoplon.core.a.call(null,G__20460,G__20461,G__20462,G__20463,G__20464,G__20465,G__20466));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(G__20459) : hoplon.core.p.call(null,G__20459));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20449,G__20450,G__20451) : hoplon.core.div.call(null,G__20449,G__20450,G__20451));
})();
var G__20043 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Aktuelle Angebote") : hoplon.core.h2.call(null,"Aktuelle Angebote")),(function (){var con__17564__auto__ = (new cljs.core.Delay(((function (G__20041,G__20042){
return (function (){
var G__20528 = (function (){var G__20530 = cljs.core.cst$kw$class;
var G__20531 = "form-inline";
var G__20532 = cljs.core.cst$kw$css;
var G__20533 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"15px"], null);
var G__20534 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20536 = cljs.core.cst$kw$for;
var G__20537 = "offerTypeInput";
var G__20538 = document.createTextNode("Angebotsart");
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__20536,G__20537,G__20538) : hoplon.core.label.call(null,G__20536,G__20537,G__20538));
})(),(function (){var G__20543 = cljs.core.cst$kw$class;
var G__20544 = "form-control";
var G__20545 = cljs.core.cst$kw$value;
var G__20546 = cljs_praxisboerse.core.offer_type_input;
var G__20547 = cljs.core.cst$kw$change;
var G__20548 = ((function (G__20543,G__20544,G__20545,G__20546,G__20547,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042){
return (function (p1__19648_SHARP_){
var G__20555 = cljs_praxisboerse.core.offer_type_input;
var G__20556 = (function (){var G__20557 = p1__19648_SHARP_.target;
return jQuery(G__20557);
})().val();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20555,G__20556) : cljs.core.reset_BANG_.call(null,G__20555,G__20556));
});})(G__20543,G__20544,G__20545,G__20546,G__20547,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042))
;
var G__20549 = cljs.core.cst$kw$id;
var G__20550 = "offerTypeInput";
var G__20551 = cljs.core.cst$kw$css;
var G__20552 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"0px 5px 0px 5px"], null);
var G__20553 = (function (){var con__17564__auto__ = (new cljs.core.Delay(((function (G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042){
return (function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042){
return (function (p1__19649_SHARP_){
var G__20558 = cljs.core.cst$kw$value;
var G__20559 = cljs.core.cst$kw$shortname.cljs$core$IFn$_invoke$arity$1(p1__19649_SHARP_);
var G__20560 = (function (){var t__17625__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__17625__auto__,G__20558,G__20559,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042){
return (function (G__20561,G__20562){
return G__20561.nodeValue = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__20562);
});})(t__17625__auto__,G__20558,G__20559,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042))
).call(null,t__17625__auto__,p1__19649_SHARP_);

return t__17625__auto__;
})();
return (hoplon.core.option.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.option.cljs$core$IFn$_invoke$arity$3(G__20558,G__20559,G__20560) : hoplon.core.option.call(null,G__20558,G__20559,G__20560));
});})(G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_praxisboerse.core.offer_types) : cljs.core.deref.call(null,cljs_praxisboerse.core.offer_types)));
});})(G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042))
,null));
var alt__17565__auto__ = (new cljs.core.Delay(((function (con__17564__auto__,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042){
return (function (){
return null;
});})(con__17564__auto__,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042))
,null));
var tpl__17566__auto__ = ((function (con__17564__auto__,alt__17565__auto__,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042){
return (function (p__17567__auto__){
var G__20563 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__17567__auto__)?con__17564__auto__:alt__17565__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20563) : cljs.core.deref.call(null,G__20563));
});})(con__17564__auto__,alt__17565__auto__,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042))
;
return javelin.core.formula(tpl__17566__auto__).call(null,javelin.core.formula(((function (con__17564__auto__,alt__17565__auto__,tpl__17566__auto__,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042){
return (function (G__20564,G__20565){
return (G__20564.cljs$core$IFn$_invoke$arity$1 ? G__20564.cljs$core$IFn$_invoke$arity$1(G__20565) : G__20564.call(null,G__20565));
});})(con__17564__auto__,alt__17565__auto__,tpl__17566__auto__,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20530,G__20531,G__20532,G__20533,G__20041,G__20042))
).call(null,cljs.core.seq,cljs_praxisboerse.core.offer_types));
})();
return (hoplon.core.select.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.select.cljs$core$IFn$_invoke$arity$11(G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20553) : hoplon.core.select.call(null,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20553));
})()], 0));
var G__20535 = hoplon.twitter.bootstrap.form_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20566 = cljs.core.cst$kw$for;
var G__20567 = "inputFilter";
var G__20568 = document.createTextNode("Filter");
return (hoplon.core.label.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.label.cljs$core$IFn$_invoke$arity$3(G__20566,G__20567,G__20568) : hoplon.core.label.call(null,G__20566,G__20567,G__20568));
})(),(function (){var G__20573 = cljs.core.cst$kw$type;
var G__20574 = "text";
var G__20575 = cljs.core.cst$kw$class;
var G__20576 = "form-control";
var G__20577 = cljs.core.cst$kw$placeholder;
var G__20578 = "z. B. ClojureScript";
var G__20579 = cljs.core.cst$kw$value;
var G__20580 = cljs_praxisboerse.core.filter_input;
var G__20581 = cljs.core.cst$kw$change;
var G__20582 = ((function (G__20573,G__20574,G__20575,G__20576,G__20577,G__20578,G__20579,G__20580,G__20581,G__20530,G__20531,G__20532,G__20533,G__20534,G__20041,G__20042){
return (function (p1__19650_SHARP_){
var G__20588 = cljs_praxisboerse.core.filter_input;
var G__20589 = (function (){var G__20590 = p1__19650_SHARP_.target;
return jQuery(G__20590);
})().val();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20588,G__20589) : cljs.core.reset_BANG_.call(null,G__20588,G__20589));
});})(G__20573,G__20574,G__20575,G__20576,G__20577,G__20578,G__20579,G__20580,G__20581,G__20530,G__20531,G__20532,G__20533,G__20534,G__20041,G__20042))
;
var G__20583 = cljs.core.cst$kw$id;
var G__20584 = "filterInput";
var G__20585 = cljs.core.cst$kw$css;
var G__20586 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"5px"], null);
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$14 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$14(G__20573,G__20574,G__20575,G__20576,G__20577,G__20578,G__20579,G__20580,G__20581,G__20582,G__20583,G__20584,G__20585,G__20586) : hoplon.core.input.call(null,G__20573,G__20574,G__20575,G__20576,G__20577,G__20578,G__20579,G__20580,G__20581,G__20582,G__20583,G__20584,G__20585,G__20586));
})()], 0));
return (hoplon.core.form.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$6(G__20530,G__20531,G__20532,G__20533,G__20534,G__20535) : hoplon.core.form.call(null,G__20530,G__20531,G__20532,G__20533,G__20534,G__20535));
})();
var G__20529 = (function (){var G__20594 = cljs.core.cst$kw$class;
var G__20595 = "list-group";
var G__20596 = (function (){var G__20598 = cljs.core.cst$kw$class;
var G__20599 = "list-group-item active";
var G__20600 = document.createTextNode("Ergebnisse");
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$3(G__20598,G__20599,G__20600) : hoplon.core.li.call(null,G__20598,G__20599,G__20600));
})();
var G__20597 = hoplon.core.loop_tpl_STAR_(javelin.core.formula(((function (G__20594,G__20595,G__20596,G__20528,G__20041,G__20042){
return (function (G__20601){
return cljs.core.cst$kw$offers.cljs$core$IFn$_invoke$arity$1(G__20601);
});})(G__20594,G__20595,G__20596,G__20528,G__20041,G__20042))
).call(null,cljs_praxisboerse.core.query),((function (G__20594,G__20595,G__20596,G__20528,G__20041,G__20042){
return (function (item__17556__auto__){
var vec__20602 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__20594,G__20595,G__20596,G__20528,G__20041,G__20042){
return (function (offer){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [offer], null);
});})(G__20594,G__20595,G__20596,G__20528,G__20041,G__20042))
).call(null,item__17556__auto__));
var offer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20602,(0),null);
var company = javelin.core.formula(((function (vec__20602,offer,G__20594,G__20595,G__20596,G__20528,G__20041,G__20042){
return (function (G__20606,G__20608,G__20607,G__20605){
var G__20610 = G__20606;
var G__20611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$companies,(function (){var G__20612 = [cljs.core.str(cljs.core.cst$kw$companyId.cljs$core$IFn$_invoke$arity$1(G__20608))].join('');
return (G__20607.cljs$core$IFn$_invoke$arity$1 ? G__20607.cljs$core$IFn$_invoke$arity$1(G__20612) : G__20607.call(null,G__20612));
})()], null);
return (G__20605.cljs$core$IFn$_invoke$arity$2 ? G__20605.cljs$core$IFn$_invoke$arity$2(G__20610,G__20611) : G__20605.call(null,G__20610,G__20611));
});})(vec__20602,offer,G__20594,G__20595,G__20596,G__20528,G__20041,G__20042))
).call(null,cljs_praxisboerse.core.query,offer,cljs.core.keyword,cljs.core.get_in);
return cljs_praxisboerse.templates.offer_list_item(offer,company);
});})(G__20594,G__20595,G__20596,G__20528,G__20041,G__20042))
);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$4(G__20594,G__20595,G__20596,G__20597) : hoplon.core.ul.call(null,G__20594,G__20595,G__20596,G__20597));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20528,G__20529) : hoplon.core.div.call(null,G__20528,G__20529));
});})(G__20041,G__20042))
,null));
var alt__17565__auto__ = (new cljs.core.Delay(((function (con__17564__auto__,G__20041,G__20042){
return (function (){
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Bitte logge dich ein, um aktuelle Angebote einzusehen.") : hoplon.core.p.call(null,"Bitte logge dich ein, um aktuelle Angebote einzusehen."));
});})(con__17564__auto__,G__20041,G__20042))
,null));
var tpl__17566__auto__ = ((function (con__17564__auto__,alt__17565__auto__,G__20041,G__20042){
return (function (p__17567__auto__){
var G__20613 = (function (){var or__6577__auto__ = (cljs.core.truth_(p__17567__auto__)?con__17564__auto__:alt__17565__auto__);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20613) : cljs.core.deref.call(null,G__20613));
});})(con__17564__auto__,alt__17565__auto__,G__20041,G__20042))
;
return javelin.core.formula(tpl__17566__auto__).call(null,cljs_praxisboerse.core.signed_in_QMARK_);
})()], 0));
var G__20044 = hoplon.twitter.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.hr.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.hr.cljs$core$IFn$_invoke$arity$0() : hoplon.core.hr.call(null)),(function (){var G__20614 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Copyright \u00A9 2016 Daniel Kraus") : hoplon.core.p.call(null,"Copyright \u00A9 2016 Daniel Kraus"));
return (hoplon.core.footer.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.footer.cljs$core$IFn$_invoke$arity$1(G__20614) : hoplon.core.footer.call(null,G__20614));
})()], 0));
var G__20045 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"jquery-1.9.1/jquery-1.9.1.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"jquery-1.9.1/jquery-1.9.1.min.js"));
var G__20046 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"bootstrap-3.3.7/js/bootstrap.min.js"));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$6(G__20041,G__20042,G__20043,G__20044,G__20045,G__20046) : hoplon.core.body.call(null,G__20041,G__20042,G__20043,G__20044,G__20045,G__20046));
})()], 0));
