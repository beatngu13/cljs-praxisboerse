// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13458_SHARP_,p2__13459_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13458_SHARP_,p2__13459_SHARP_.getAttribute("static-id"),p2__13459_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args13460 = [];
var len__7652__auto___13465 = arguments.length;
var i__7653__auto___13466 = (0);
while(true){
if((i__7653__auto___13466 < len__7652__auto___13465)){
args13460.push((arguments[i__7653__auto___13466]));

var G__13467 = (i__7653__auto___13466 + (1));
i__7653__auto___13466 = G__13467;
continue;
} else {
}
break;
}

var G__13462 = args13460.length;
switch (G__13462) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13460.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__13463_13469 = init;
var G__13464_13470 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13463_13469,G__13464_13470) : f.call(null,G__13463_13469,G__13464_13470));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__13477 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__13478 = cljs.core.seq(vec__13477);
var first__13479 = cljs.core.first(seq__13478);
var seq__13478__$1 = cljs.core.next(seq__13478);
var f = first__13479;
var more = seq__13478__$1;
var vec__13480 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13480,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13480,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("68feb8bbe3ae4ff4a3a03476698d6812")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__6577__auto__ = (function (){var and__6565__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__6565__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var G__13483 = (i + (1));
var G__13484 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__13483;
ret = G__13484;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__13486 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__13486) : hoplon.core.$text.call(null,G__13486));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__13513 = new$__$1;
var vec__13515 = G__13513;
var seq__13516 = cljs.core.seq(vec__13515);
var first__13517 = cljs.core.first(seq__13516);
var seq__13516__$1 = cljs.core.next(seq__13516);
var x = first__13517;
var xs = seq__13516__$1;
var G__13514 = hoplon.core.child_vec(this$);
var vec__13518 = G__13514;
var seq__13519 = cljs.core.seq(vec__13518);
var first__13520 = cljs.core.first(seq__13519);
var seq__13519__$1 = cljs.core.next(seq__13519);
var k = first__13520;
var ks = seq__13519__$1;
var kids = vec__13518;
var G__13513__$1 = G__13513;
var G__13514__$1 = G__13514;
while(true){
var vec__13521 = G__13513__$1;
var seq__13522 = cljs.core.seq(vec__13521);
var first__13523 = cljs.core.first(seq__13522);
var seq__13522__$1 = cljs.core.next(seq__13522);
var x__$1 = first__13523;
var xs__$1 = seq__13522__$1;
var vec__13524 = G__13514__$1;
var seq__13525 = cljs.core.seq(vec__13524);
var first__13526 = cljs.core.first(seq__13525);
var seq__13525__$1 = cljs.core.next(seq__13525);
var k__$1 = first__13526;
var ks__$1 = seq__13525__$1;
var kids__$1 = vec__13524;
if(cljs.core.truth_((function (){var or__6577__auto__ = x__$1;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return k__$1;
}
})())){
var G__13527 = xs__$1;
var G__13528 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node(k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__13513__$1 = G__13527;
G__13514__$1 = G__13528;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_13531 = (function (){var G__13530 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13530) : cljs.core.atom.call(null,G__13530));
})();
this$__$1.hoplonKids = kids_13531;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_13531,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_13534 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_13535 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_13534) : cljs.core.deref.call(null,kids_13534)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_13534,i_13535,x__$1,this$__$1){
return (function (p1__13533_SHARP_,p2__13532_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_13534,cljs.core.assoc,i_13535,p2__13532_SHARP_);
});})(kids_13534,i_13535,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_13534,cljs.core.assoc,i_13535,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__13536_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__13536_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__13537_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__13537_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__13538_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__13538_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_13539 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_13540 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__13541 = (function (){var and__6565__auto__ = attr_13540;
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_13540) : cljs.core.deref.call(null,attr_13540)),kk_13539);
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__13541)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_13540,cljs.core.assoc,kk_13539,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__13542_SHARP_){
return p1__13542_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__13543_SHARP_){
return p1__13543_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__13544_SHARP_){
return p1__13544_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__13545_SHARP_){
return p1__13545_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7241__auto__.call(null,this$,kvs));
} else {
var m__7241__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7241__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7241__auto__.call(null,this$,kvs));
} else {
var m__7241__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7241__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7241__auto__.call(null,this$,child));
} else {
var m__7241__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7241__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7241__auto__.call(null,this$,child));
} else {
var m__7241__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7241__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7241__auto__.call(null,this$,new$,existing));
} else {
var m__7241__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7241__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7240__auto__ = (((this$ == null))?null:this$);
var m__7241__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7241__auto__.call(null,this$,new$,existing));
} else {
var m__7241__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7241__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args13546 = [];
var len__7652__auto___13553 = arguments.length;
var i__7653__auto___13554 = (0);
while(true){
if((i__7653__auto___13554 < len__7652__auto___13553)){
args13546.push((arguments[i__7653__auto___13554]));

var G__13555 = (i__7653__auto___13554 + (1));
i__7653__auto___13554 = G__13555;
continue;
} else {
}
break;
}

var G__13552 = args13546.length;
switch (G__13552) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args13546.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7671__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq13547){
var G__13548 = cljs.core.first(seq13547);
var seq13547__$1 = cljs.core.next(seq13547);
var G__13549 = cljs.core.first(seq13547__$1);
var seq13547__$2 = cljs.core.next(seq13547__$1);
var G__13550 = cljs.core.first(seq13547__$2);
var seq13547__$3 = cljs.core.next(seq13547__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13548,G__13549,G__13550,seq13547__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args13557 = [];
var len__7652__auto___13564 = arguments.length;
var i__7653__auto___13565 = (0);
while(true){
if((i__7653__auto___13565 < len__7652__auto___13564)){
args13557.push((arguments[i__7653__auto___13565]));

var G__13566 = (i__7653__auto___13565 + (1));
i__7653__auto___13565 = G__13566;
continue;
} else {
}
break;
}

var G__13563 = args13557.length;
switch (G__13563) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args13557.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7671__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq13558){
var G__13559 = cljs.core.first(seq13558);
var seq13558__$1 = cljs.core.next(seq13558);
var G__13560 = cljs.core.first(seq13558__$1);
var seq13558__$2 = cljs.core.next(seq13558__$1);
var G__13561 = cljs.core.first(seq13558__$2);
var seq13558__$3 = cljs.core.next(seq13558__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13559,G__13560,G__13561,seq13558__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__13568_SHARP_){
return (p1__13568_SHARP_ instanceof Node);
}):(function (p1__13569_SHARP_){
try{return p1__13569_SHARP_.nodeType;
}catch (e13570){if((e13570 instanceof Error)){
var _ = e13570;
return null;
} else {
throw e13570;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__13571_SHARP_){
try{return cljs.core.vector_QMARK_(p1__13571_SHARP_);
}catch (e13572){if((e13572 instanceof Error)){
var _ = e13572;
return null;
} else {
throw e13572;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__13573_SHARP_){
try{return cljs.core.seq_QMARK_(p1__13573_SHARP_);
}catch (e13574){if((e13574 instanceof Error)){
var _ = e13574;
return null;
} else {
throw e13574;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args13575 = [];
var len__7652__auto___13579 = arguments.length;
var i__7653__auto___13580 = (0);
while(true){
if((i__7653__auto___13580 < len__7652__auto___13579)){
args13575.push((arguments[i__7653__auto___13580]));

var G__13581 = (i__7653__auto___13580 + (1));
i__7653__auto___13580 = G__13581;
continue;
} else {
}
break;
}

var G__13577 = args13575.length;
switch (G__13577) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13575.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e13578){if((e13578 instanceof Error)){
var _ = e13578;
return not_found;
} else {
throw e13578;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args13583 = [];
var len__7652__auto___13586 = arguments.length;
var i__7653__auto___13587 = (0);
while(true){
if((i__7653__auto___13587 < len__7652__auto___13586)){
args13583.push((arguments[i__7653__auto___13587]));

var G__13588 = (i__7653__auto___13587 + (1));
i__7653__auto___13587 = G__13588;
continue;
} else {
}
break;
}

var G__13585 = args13583.length;
switch (G__13585) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13583.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__13606 = args;
var vec__13607 = G__13606;
var seq__13608 = cljs.core.seq(vec__13607);
var first__13609 = cljs.core.first(seq__13608);
var seq__13608__$1 = cljs.core.next(seq__13608);
var arg = first__13609;
var args__$1 = seq__13608__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__13606__$1 = G__13606;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__13610 = G__13606__$1;
var seq__13611 = cljs.core.seq(vec__13610);
var first__13612 = cljs.core.first(seq__13611);
var seq__13611__$1 = cljs.core.next(seq__13611);
var arg__$1 = first__13612;
var args__$2 = seq__13611__$1;
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__13613 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__13606__$1,attr__$2,kids__$2,vec__13610,seq__13611,first__13612,seq__13611__$1,arg__$1,args__$2,attr,kids,G__13606,vec__13607,seq__13608,first__13609,seq__13608__$1,arg,args__$1){
return (function (p1__13590_SHARP_,p2__13591_SHARP_,p3__13592_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__13590_SHARP_,p2__13591_SHARP_,p3__13592_SHARP_);
});})(attr__$1,kids__$1,G__13606__$1,attr__$2,kids__$2,vec__13610,seq__13611,first__13612,seq__13611__$1,arg__$1,args__$2,attr,kids,G__13606,vec__13607,seq__13608,first__13609,seq__13608__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__13614 = kids__$2;
var G__13615 = args__$2;
attr__$1 = G__13613;
kids__$1 = G__13614;
G__13606__$1 = G__13615;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__13616 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__13617 = kids__$2;
var G__13618 = cljs.core.rest(args__$2);
attr__$1 = G__13616;
kids__$1 = G__13617;
G__13606__$1 = G__13618;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__13619 = attr__$2;
var G__13620 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__13621 = args__$2;
attr__$1 = G__13619;
kids__$1 = G__13620;
G__13606__$1 = G__13621;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__13622 = attr__$2;
var G__13623 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__13624 = args__$2;
attr__$1 = G__13622;
kids__$1 = G__13623;
G__13606__$1 = G__13624;
continue;
} else {
var G__13625 = attr__$2;
var G__13626 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__13627 = args__$2;
attr__$1 = G__13625;
kids__$1 = G__13626;
G__13606__$1 = G__13627;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__13629_SHARP_,p2__13628_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__13628_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__13628_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__13630){
var vec__13638 = p__13630;
var seq__13639 = cljs.core.seq(vec__13638);
var first__13640 = cljs.core.first(seq__13639);
var seq__13639__$1 = cljs.core.next(seq__13639);
var child_cell = first__13640;
var _ = seq__13639__$1;
var kids = vec__13638;
var this$__$1 = this$;
var seq__13641_13645 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__13642_13646 = null;
var count__13643_13647 = (0);
var i__13644_13648 = (0);
while(true){
if((i__13644_13648 < count__13643_13647)){
var x_13649 = chunk__13642_13646.cljs$core$IIndexed$_nth$arity$2(null,i__13644_13648);
var temp__4657__auto___13650 = hoplon.core.__GT_node(x_13649);
if(cljs.core.truth_(temp__4657__auto___13650)){
var x_13651__$1 = temp__4657__auto___13650;
hoplon.core.append_child_BANG_(this$__$1,x_13651__$1);
} else {
}

var G__13652 = seq__13641_13645;
var G__13653 = chunk__13642_13646;
var G__13654 = count__13643_13647;
var G__13655 = (i__13644_13648 + (1));
seq__13641_13645 = G__13652;
chunk__13642_13646 = G__13653;
count__13643_13647 = G__13654;
i__13644_13648 = G__13655;
continue;
} else {
var temp__4657__auto___13656 = cljs.core.seq(seq__13641_13645);
if(temp__4657__auto___13656){
var seq__13641_13657__$1 = temp__4657__auto___13656;
if(cljs.core.chunked_seq_QMARK_(seq__13641_13657__$1)){
var c__7388__auto___13658 = cljs.core.chunk_first(seq__13641_13657__$1);
var G__13659 = cljs.core.chunk_rest(seq__13641_13657__$1);
var G__13660 = c__7388__auto___13658;
var G__13661 = cljs.core.count(c__7388__auto___13658);
var G__13662 = (0);
seq__13641_13645 = G__13659;
chunk__13642_13646 = G__13660;
count__13643_13647 = G__13661;
i__13644_13648 = G__13662;
continue;
} else {
var x_13663 = cljs.core.first(seq__13641_13657__$1);
var temp__4657__auto___13664__$1 = hoplon.core.__GT_node(x_13663);
if(cljs.core.truth_(temp__4657__auto___13664__$1)){
var x_13665__$1 = temp__4657__auto___13664__$1;
hoplon.core.append_child_BANG_(this$__$1,x_13665__$1);
} else {
}

var G__13666 = cljs.core.next(seq__13641_13657__$1);
var G__13667 = null;
var G__13668 = (0);
var G__13669 = (0);
seq__13641_13645 = G__13666;
chunk__13642_13646 = G__13667;
count__13643_13647 = G__13668;
i__13644_13648 = G__13669;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__13702__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__13671 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13671,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13671,(1),null);
var G__13674 = this$;
hoplon.core.add_attributes_BANG_(G__13674,attr);

hoplon.core.add_children_BANG_(G__13674,kids);

return G__13674;
};
var G__13702 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__13703__i = 0, G__13703__a = new Array(arguments.length -  1);
while (G__13703__i < G__13703__a.length) {G__13703__a[G__13703__i] = arguments[G__13703__i + 1]; ++G__13703__i;}
  args = new cljs.core.IndexedSeq(G__13703__a,0);
} 
return G__13702__delegate.call(this,self__,args);};
G__13702.cljs$lang$maxFixedArity = 1;
G__13702.cljs$lang$applyTo = (function (arglist__13704){
var self__ = cljs.core.first(arglist__13704);
var args = cljs.core.rest(arglist__13704);
return G__13702__delegate(self__,args);
});
G__13702.cljs$core$IFn$_invoke$arity$variadic = G__13702__delegate;
return G__13702;
})()
;

Element.prototype.apply = (function (self__,args13670){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13670)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__13705__delegate = function (args){
var this$ = this;
var vec__13675 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13675,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13675,(1),null);
var G__13678 = this$;
hoplon.core.add_attributes_BANG_(G__13678,attr);

hoplon.core.add_children_BANG_(G__13678,kids);

return G__13678;
};
var G__13705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13706__i = 0, G__13706__a = new Array(arguments.length -  0);
while (G__13706__i < G__13706__a.length) {G__13706__a[G__13706__i] = arguments[G__13706__i + 0]; ++G__13706__i;}
  args = new cljs.core.IndexedSeq(G__13706__a,0);
} 
return G__13705__delegate.call(this,args);};
G__13705.cljs$lang$maxFixedArity = 0;
G__13705.cljs$lang$applyTo = (function (arglist__13707){
var args = cljs.core.seq(arglist__13707);
return G__13705__delegate(args);
});
G__13705.cljs$core$IFn$_invoke$arity$variadic = G__13705__delegate;
return G__13705;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = jQuery(this$__$1);
var seq__13679 = cljs.core.seq(kvs);
var chunk__13681 = null;
var count__13682 = (0);
var i__13683 = (0);
while(true){
if((i__13683 < count__13682)){
var vec__13685 = chunk__13681.cljs$core$IIndexed$_nth$arity$2(null,i__13683);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(1),null);
var k_13708__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13708__$1);
} else {
e.attr(k_13708__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13708__$1:v));
}

var G__13709 = seq__13679;
var G__13710 = chunk__13681;
var G__13711 = count__13682;
var G__13712 = (i__13683 + (1));
seq__13679 = G__13709;
chunk__13681 = G__13710;
count__13682 = G__13711;
i__13683 = G__13712;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13679);
if(temp__4657__auto__){
var seq__13679__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13679__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__13679__$1);
var G__13713 = cljs.core.chunk_rest(seq__13679__$1);
var G__13714 = c__7388__auto__;
var G__13715 = cljs.core.count(c__7388__auto__);
var G__13716 = (0);
seq__13679 = G__13713;
chunk__13681 = G__13714;
count__13682 = G__13715;
i__13683 = G__13716;
continue;
} else {
var vec__13688 = cljs.core.first(seq__13679__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688,(1),null);
var k_13717__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_13717__$1);
} else {
e.attr(k_13717__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_13717__$1:v));
}

var G__13718 = cljs.core.next(seq__13679__$1);
var G__13719 = null;
var G__13720 = (0);
var G__13721 = (0);
seq__13679 = G__13718;
chunk__13681 = G__13719;
count__13682 = G__13720;
i__13683 = G__13721;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = jQuery(this$__$1);
var seq__13691 = cljs.core.seq(kvs);
var chunk__13692 = null;
var count__13693 = (0);
var i__13694 = (0);
while(true){
if((i__13694 < count__13693)){
var vec__13695 = chunk__13692.cljs$core$IIndexed$_nth$arity$2(null,i__13694);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13695,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13695,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13722 = seq__13691;
var G__13723 = chunk__13692;
var G__13724 = count__13693;
var G__13725 = (i__13694 + (1));
seq__13691 = G__13722;
chunk__13692 = G__13723;
count__13693 = G__13724;
i__13694 = G__13725;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13691);
if(temp__4657__auto__){
var seq__13691__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13691__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__13691__$1);
var G__13726 = cljs.core.chunk_rest(seq__13691__$1);
var G__13727 = c__7388__auto__;
var G__13728 = cljs.core.count(c__7388__auto__);
var G__13729 = (0);
seq__13691 = G__13726;
chunk__13692 = G__13727;
count__13693 = G__13728;
i__13694 = G__13729;
continue;
} else {
var vec__13698 = cljs.core.first(seq__13691__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__13730 = cljs.core.next(seq__13691__$1);
var G__13731 = null;
var G__13732 = (0);
var G__13733 = (0);
seq__13691 = G__13730;
chunk__13692 = G__13731;
count__13693 = G__13732;
i__13694 = G__13733;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e13701){if((e13701 instanceof Error)){
var _ = e13701;
return null;
} else {
throw e13701;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__13740__delegate = function (args){
var vec__13737 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13737,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13737,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
elem.hoplonKids = null;

elem.innerHTML = "";

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__13740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13741__i = 0, G__13741__a = new Array(arguments.length -  0);
while (G__13741__i < G__13741__a.length) {G__13741__a[G__13741__i] = arguments[G__13741__i + 0]; ++G__13741__i;}
  args = new cljs.core.IndexedSeq(G__13741__a,0);
} 
return G__13740__delegate.call(this,args);};
G__13740.cljs$lang$maxFixedArity = 0;
G__13740.cljs$lang$applyTo = (function (arglist__13742){
var args = cljs.core.seq(arglist__13742);
return G__13740__delegate(args);
});
G__13740.cljs$core$IFn$_invoke$arity$variadic = G__13740__delegate;
return G__13740;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__13743__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__13743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13744__i = 0, G__13744__a = new Array(arguments.length -  0);
while (G__13744__i < G__13744__a.length) {G__13744__a[G__13744__i] = arguments[G__13744__i + 0]; ++G__13744__i;}
  args = new cljs.core.IndexedSeq(G__13744__a,0);
} 
return G__13743__delegate.call(this,args);};
G__13743.cljs$lang$maxFixedArity = 0;
G__13743.cljs$lang$applyTo = (function (arglist__13745){
var args = cljs.core.seq(arglist__13745);
return G__13743__delegate(args);
});
G__13743.cljs$core$IFn$_invoke$arity$variadic = G__13743__delegate;
return G__13743;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7659__auto__ = [];
var len__7652__auto___13750 = arguments.length;
var i__7653__auto___13751 = (0);
while(true){
if((i__7653__auto___13751 < len__7652__auto___13750)){
args__7659__auto__.push((arguments[i__7653__auto___13751]));

var G__13752 = (i__7653__auto___13751 + (1));
i__7653__auto___13751 = G__13752;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13747 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13747,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13747,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq13746){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13746));
});

hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__13753_SHARP_){
return document.createTextNode(p1__13753_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__13754_SHARP_){
return document.createComment(p1__13754_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
var G__13762 = (function (){
var G__13763 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__13764 = (0);
return setTimeout(G__13763,G__13764);
});
return jQuery(G__13762);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__13765_SHARP_){
var e = (function (){var G__13766 = p1__13765_SHARP_.target;
return jQuery(G__13766);
})();
if(cljs.core.truth_((function (){var or__6577__auto__ = e.attr("action");
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__13765_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args13767 = [];
var len__7652__auto___13770 = arguments.length;
var i__7653__auto___13771 = (0);
while(true){
if((i__7653__auto___13771 < len__7652__auto___13770)){
args13767.push((arguments[i__7653__auto___13771]));

var G__13772 = (i__7653__auto___13771 + (1));
i__7653__auto___13771 = G__13772;
continue;
} else {
}
break;
}

var G__13769 = args13767.length;
switch (G__13769) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13767.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args13774 = [];
var len__7652__auto___13777 = arguments.length;
var i__7653__auto___13778 = (0);
while(true){
if((i__7653__auto___13778 < len__7652__auto___13777)){
args13774.push((arguments[i__7653__auto___13778]));

var G__13779 = (i__7653__auto___13778 + (1));
i__7653__auto___13778 = G__13779;
continue;
} else {
}
break;
}

var G__13776 = args13774.length;
switch (G__13776) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13774.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;

if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7502__auto__ = (function (){var G__13781 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13781) : cljs.core.atom.call(null,G__13781));
})();
var prefer_table__7503__auto__ = (function (){var G__13782 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13782) : cljs.core.atom.call(null,G__13782));
})();
var method_cache__7504__auto__ = (function (){var G__13783 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13783) : cljs.core.atom.call(null,G__13783));
})();
var cached_hierarchy__7505__auto__ = (function (){var G__13784 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13784) : cljs.core.atom.call(null,G__13784));
})();
var hierarchy__7506__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__7502__auto__,prefer_table__7503__auto__,method_cache__7504__auto__,cached_hierarchy__7505__auto__,hierarchy__7506__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__7502__auto__,prefer_table__7503__auto__,method_cache__7504__auto__,cached_hierarchy__7505__auto__,hierarchy__7506__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7506__auto__,method_table__7502__auto__,prefer_table__7503__auto__,method_cache__7504__auto__,cached_hierarchy__7505__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__13785 = elem;
var G__13786 = cljs.core.cst$kw$attr;
var G__13787 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__13785,G__13786,G__13787) : hoplon.core.do_BANG_.call(null,G__13785,G__13786,G__13787));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__13788__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__13788 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__13789__i = 0, G__13789__a = new Array(arguments.length -  2);
while (G__13789__i < G__13789__a.length) {G__13789__a[G__13789__i] = arguments[G__13789__i + 2]; ++G__13789__i;}
  args = new cljs.core.IndexedSeq(G__13789__a,0);
} 
return G__13788__delegate.call(this,elem,_,args);};
G__13788.cljs$lang$maxFixedArity = 2;
G__13788.cljs$lang$applyTo = (function (arglist__13790){
var elem = cljs.core.first(arglist__13790);
arglist__13790 = cljs.core.next(arglist__13790);
var _ = cljs.core.first(arglist__13790);
var args = cljs.core.rest(arglist__13790);
return G__13788__delegate(elem,_,args);
});
G__13788.cljs$core$IFn$_invoke$arity$variadic = G__13788__delegate;
return G__13788;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__13791_SHARP_){
return cljs.core.zipmap(p1__13791_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__13792 = cljs.core.seq(clmap);
var chunk__13793 = null;
var count__13794 = (0);
var i__13795 = (0);
while(true){
if((i__13795 < count__13794)){
var vec__13796 = chunk__13793.cljs$core$IIndexed$_nth$arity$2(null,i__13795);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13796,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13796,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13802 = seq__13792;
var G__13803 = chunk__13793;
var G__13804 = count__13794;
var G__13805 = (i__13795 + (1));
seq__13792 = G__13802;
chunk__13793 = G__13803;
count__13794 = G__13804;
i__13795 = G__13805;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13792);
if(temp__4657__auto__){
var seq__13792__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13792__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__13792__$1);
var G__13806 = cljs.core.chunk_rest(seq__13792__$1);
var G__13807 = c__7388__auto__;
var G__13808 = cljs.core.count(c__7388__auto__);
var G__13809 = (0);
seq__13792 = G__13806;
chunk__13793 = G__13807;
count__13794 = G__13808;
i__13795 = G__13809;
continue;
} else {
var vec__13799 = cljs.core.first(seq__13792__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13799,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13799,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__13810 = cljs.core.next(seq__13792__$1);
var G__13811 = null;
var G__13812 = (0);
var G__13813 = (0);
seq__13792 = G__13810;
chunk__13793 = G__13811;
count__13794 = G__13812;
i__13795 = G__13813;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__13814 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__13815 = (0);
return setTimeout(G__13814,G__13815);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__7502__auto__ = (function (){var G__13816 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13816) : cljs.core.atom.call(null,G__13816));
})();
var prefer_table__7503__auto__ = (function (){var G__13817 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13817) : cljs.core.atom.call(null,G__13817));
})();
var method_cache__7504__auto__ = (function (){var G__13818 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13818) : cljs.core.atom.call(null,G__13818));
})();
var cached_hierarchy__7505__auto__ = (function (){var G__13819 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13819) : cljs.core.atom.call(null,G__13819));
})();
var hierarchy__7506__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__7502__auto__,prefer_table__7503__auto__,method_cache__7504__auto__,cached_hierarchy__7505__auto__,hierarchy__7506__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__7502__auto__,prefer_table__7503__auto__,method_cache__7504__auto__,cached_hierarchy__7505__auto__,hierarchy__7506__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7506__auto__,method_table__7502__auto__,prefer_table__7503__auto__,method_cache__7504__auto__,cached_hierarchy__7505__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__13820 = this$__$1.target;
return jQuery(G__13820);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__13835 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13835) : cljs.core.atom.call(null,G__13835));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__13836,G__13837){
return (G__13836.cljs$core$IFn$_invoke$arity$1 ? G__13836.cljs$core$IFn$_invoke$arity$1(G__13837) : G__13836.call(null,G__13837));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__13821_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__13840,G__13839,G__13838){
return (G__13838.cljs$core$IFn$_invoke$arity$2 ? G__13838.cljs$core$IFn$_invoke$arity$2(G__13839,G__13840) : G__13838.call(null,G__13839,G__13840));
});})(on_deck,items_seq))
).call(null,p1__13821_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__13822_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__13822_SHARP_) : cljs.core.deref.call(null,p1__13822_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__13822_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__13841 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__13842 = null;
var count__13843 = (0);
var i__13844 = (0);
while(true){
if((i__13844 < count__13843)){
var i = chunk__13842.cljs$core$IIndexed$_nth$arity$2(null,i__13844);
var e_13847 = (function (){var or__6577__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var G__13845 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13845) : tpl.call(null,G__13845));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13847);

var G__13848 = seq__13841;
var G__13849 = chunk__13842;
var G__13850 = count__13843;
var G__13851 = (i__13844 + (1));
seq__13841 = G__13848;
chunk__13842 = G__13849;
count__13843 = G__13850;
i__13844 = G__13851;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13841);
if(temp__4657__auto__){
var seq__13841__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13841__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__13841__$1);
var G__13852 = cljs.core.chunk_rest(seq__13841__$1);
var G__13853 = c__7388__auto__;
var G__13854 = cljs.core.count(c__7388__auto__);
var G__13855 = (0);
seq__13841 = G__13852;
chunk__13842 = G__13853;
count__13843 = G__13854;
i__13844 = G__13855;
continue;
} else {
var i = cljs.core.first(seq__13841__$1);
var e_13856 = (function (){var or__6577__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var G__13846 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__13846) : tpl.call(null,G__13846));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_13856);

var G__13857 = cljs.core.next(seq__13841__$1);
var G__13858 = null;
var G__13859 = (0);
var G__13860 = (0);
seq__13841 = G__13857;
chunk__13842 = G__13858;
count__13843 = G__13859;
i__13844 = G__13860;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__7492__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__7492__auto__)){
var e_13861 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_13861);

var G__13862 = (_ + (1));
_ = G__13862;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__7659__auto__ = [];
var len__7652__auto___13873 = arguments.length;
var i__7653__auto___13874 = (0);
while(true){
if((i__7653__auto___13874 < len__7652__auto___13873)){
args__7659__auto__.push((arguments[i__7653__auto___13874]));

var G__13875 = (i__7653__auto___13874 + (1));
i__7653__auto___13874 = G__13875;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__13864){
var vec__13865 = p__13864;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13865,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__13865,default$){
return (function (G__13868,G__13870,G__13869){
var or__6577__auto__ = (function (){var and__6565__auto__ = (G__13868.cljs$core$IFn$_invoke$arity$1 ? G__13868.cljs$core$IFn$_invoke$arity$1(G__13869) : G__13868.call(null,G__13869));
if(cljs.core.truth_(and__6565__auto__)){
return G__13869;
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return G__13870;
}
});})(c,vec__13865,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__13865,default$){
return (function (){
var G__13871 = c;
var G__13872 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13871,G__13872) : cljs.core.reset_BANG_.call(null,G__13871,G__13872));
});})(_,c,vec__13865,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq13863){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13863));
});

