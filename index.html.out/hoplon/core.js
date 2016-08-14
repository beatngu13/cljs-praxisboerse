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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17667_SHARP_,p2__17668_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17667_SHARP_,p2__17668_SHARP_.getAttribute("static-id"),p2__17668_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args17669 = [];
var len__7652__auto___17674 = arguments.length;
var i__7653__auto___17675 = (0);
while(true){
if((i__7653__auto___17675 < len__7652__auto___17674)){
args17669.push((arguments[i__7653__auto___17675]));

var G__17676 = (i__7653__auto___17675 + (1));
i__7653__auto___17675 = G__17676;
continue;
} else {
}
break;
}

var G__17671 = args17669.length;
switch (G__17671) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17669.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__17672_17678 = init;
var G__17673_17679 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17672_17678,G__17673_17679) : f.call(null,G__17672_17678,G__17673_17679));

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
var vec__17686 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__17687 = cljs.core.seq(vec__17686);
var first__17688 = cljs.core.first(seq__17687);
var seq__17687__$1 = cljs.core.next(seq__17687);
var f = first__17688;
var more = seq__17687__$1;
var vec__17689 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17689,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17689,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("d8e7e6e63a83497784d0142bbf6f0b79")].join(''),f2], null)))));
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
var G__17692 = (i + (1));
var G__17693 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__17692;
ret = G__17693;
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
var G__17695 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__17695) : hoplon.core.$text.call(null,G__17695));
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
var G__17722 = new$__$1;
var vec__17724 = G__17722;
var seq__17725 = cljs.core.seq(vec__17724);
var first__17726 = cljs.core.first(seq__17725);
var seq__17725__$1 = cljs.core.next(seq__17725);
var x = first__17726;
var xs = seq__17725__$1;
var G__17723 = hoplon.core.child_vec(this$);
var vec__17727 = G__17723;
var seq__17728 = cljs.core.seq(vec__17727);
var first__17729 = cljs.core.first(seq__17728);
var seq__17728__$1 = cljs.core.next(seq__17728);
var k = first__17729;
var ks = seq__17728__$1;
var kids = vec__17727;
var G__17722__$1 = G__17722;
var G__17723__$1 = G__17723;
while(true){
var vec__17730 = G__17722__$1;
var seq__17731 = cljs.core.seq(vec__17730);
var first__17732 = cljs.core.first(seq__17731);
var seq__17731__$1 = cljs.core.next(seq__17731);
var x__$1 = first__17732;
var xs__$1 = seq__17731__$1;
var vec__17733 = G__17723__$1;
var seq__17734 = cljs.core.seq(vec__17733);
var first__17735 = cljs.core.first(seq__17734);
var seq__17734__$1 = cljs.core.next(seq__17734);
var k__$1 = first__17735;
var ks__$1 = seq__17734__$1;
var kids__$1 = vec__17733;
if(cljs.core.truth_((function (){var or__6577__auto__ = x__$1;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return k__$1;
}
})())){
var G__17736 = xs__$1;
var G__17737 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__17722__$1 = G__17736;
G__17723__$1 = G__17737;
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
var kids_17740 = (function (){var G__17739 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17739) : cljs.core.atom.call(null,G__17739));
})();
this$__$1.hoplonKids = kids_17740;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_17740,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_17743 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_17744 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_17743) : cljs.core.deref.call(null,kids_17743)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_17743,i_17744,x__$1,this$__$1){
return (function (p1__17742_SHARP_,p2__17741_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_17743,cljs.core.assoc,i_17744,p2__17741_SHARP_);
});})(kids_17743,i_17744,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_17743,cljs.core.assoc,i_17744,x__$1);
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
return (function (p1__17745_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__17745_SHARP_));
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
return (function (p1__17746_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__17746_SHARP_], 0)));
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
return (function (p1__17747_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__17747_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_17748 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_17749 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__17750 = (function (){var and__6565__auto__ = attr_17749;
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_17749) : cljs.core.deref.call(null,attr_17749)),kk_17748);
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__17750)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_17749,cljs.core.assoc,kk_17748,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__17751_SHARP_){
return p1__17751_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__17752_SHARP_){
return p1__17752_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__17753_SHARP_){
return p1__17753_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__17754_SHARP_){
return p1__17754_SHARP_.hoplonKids;
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
var args17755 = [];
var len__7652__auto___17762 = arguments.length;
var i__7653__auto___17763 = (0);
while(true){
if((i__7653__auto___17763 < len__7652__auto___17762)){
args17755.push((arguments[i__7653__auto___17763]));

var G__17764 = (i__7653__auto___17763 + (1));
i__7653__auto___17763 = G__17764;
continue;
} else {
}
break;
}

var G__17761 = args17755.length;
switch (G__17761) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args17755.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7671__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq17756){
var G__17757 = cljs.core.first(seq17756);
var seq17756__$1 = cljs.core.next(seq17756);
var G__17758 = cljs.core.first(seq17756__$1);
var seq17756__$2 = cljs.core.next(seq17756__$1);
var G__17759 = cljs.core.first(seq17756__$2);
var seq17756__$3 = cljs.core.next(seq17756__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17757,G__17758,G__17759,seq17756__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args17766 = [];
var len__7652__auto___17773 = arguments.length;
var i__7653__auto___17774 = (0);
while(true){
if((i__7653__auto___17774 < len__7652__auto___17773)){
args17766.push((arguments[i__7653__auto___17774]));

var G__17775 = (i__7653__auto___17774 + (1));
i__7653__auto___17774 = G__17775;
continue;
} else {
}
break;
}

var G__17772 = args17766.length;
switch (G__17772) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args17766.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7671__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq17767){
var G__17768 = cljs.core.first(seq17767);
var seq17767__$1 = cljs.core.next(seq17767);
var G__17769 = cljs.core.first(seq17767__$1);
var seq17767__$2 = cljs.core.next(seq17767__$1);
var G__17770 = cljs.core.first(seq17767__$2);
var seq17767__$3 = cljs.core.next(seq17767__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17768,G__17769,G__17770,seq17767__$3);
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
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__17777_SHARP_){
return (p1__17777_SHARP_ instanceof Node);
}):(function (p1__17778_SHARP_){
try{return p1__17778_SHARP_.nodeType;
}catch (e17779){if((e17779 instanceof Error)){
var _ = e17779;
return null;
} else {
throw e17779;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__17780_SHARP_){
try{return cljs.core.vector_QMARK_(p1__17780_SHARP_);
}catch (e17781){if((e17781 instanceof Error)){
var _ = e17781;
return null;
} else {
throw e17781;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__17782_SHARP_){
try{return cljs.core.seq_QMARK_(p1__17782_SHARP_);
}catch (e17783){if((e17783 instanceof Error)){
var _ = e17783;
return null;
} else {
throw e17783;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args17784 = [];
var len__7652__auto___17788 = arguments.length;
var i__7653__auto___17789 = (0);
while(true){
if((i__7653__auto___17789 < len__7652__auto___17788)){
args17784.push((arguments[i__7653__auto___17789]));

var G__17790 = (i__7653__auto___17789 + (1));
i__7653__auto___17789 = G__17790;
continue;
} else {
}
break;
}

var G__17786 = args17784.length;
switch (G__17786) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17784.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e17787){if((e17787 instanceof Error)){
var _ = e17787;
return not_found;
} else {
throw e17787;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args17792 = [];
var len__7652__auto___17795 = arguments.length;
var i__7653__auto___17796 = (0);
while(true){
if((i__7653__auto___17796 < len__7652__auto___17795)){
args17792.push((arguments[i__7653__auto___17796]));

var G__17797 = (i__7653__auto___17796 + (1));
i__7653__auto___17796 = G__17797;
continue;
} else {
}
break;
}

var G__17794 = args17792.length;
switch (G__17794) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17792.length)].join('')));

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
var G__17815 = args;
var vec__17816 = G__17815;
var seq__17817 = cljs.core.seq(vec__17816);
var first__17818 = cljs.core.first(seq__17817);
var seq__17817__$1 = cljs.core.next(seq__17817);
var arg = first__17818;
var args__$1 = seq__17817__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__17815__$1 = G__17815;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__17819 = G__17815__$1;
var seq__17820 = cljs.core.seq(vec__17819);
var first__17821 = cljs.core.first(seq__17820);
var seq__17820__$1 = cljs.core.next(seq__17820);
var arg__$1 = first__17821;
var args__$2 = seq__17820__$1;
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__17822 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__17815__$1,attr__$2,kids__$2,vec__17819,seq__17820,first__17821,seq__17820__$1,arg__$1,args__$2,attr,kids,G__17815,vec__17816,seq__17817,first__17818,seq__17817__$1,arg,args__$1){
return (function (p1__17799_SHARP_,p2__17800_SHARP_,p3__17801_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__17799_SHARP_,p2__17800_SHARP_,p3__17801_SHARP_);
});})(attr__$1,kids__$1,G__17815__$1,attr__$2,kids__$2,vec__17819,seq__17820,first__17821,seq__17820__$1,arg__$1,args__$2,attr,kids,G__17815,vec__17816,seq__17817,first__17818,seq__17817__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__17823 = kids__$2;
var G__17824 = args__$2;
attr__$1 = G__17822;
kids__$1 = G__17823;
G__17815__$1 = G__17824;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__17825 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__17826 = kids__$2;
var G__17827 = cljs.core.rest(args__$2);
attr__$1 = G__17825;
kids__$1 = G__17826;
G__17815__$1 = G__17827;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__17828 = attr__$2;
var G__17829 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__17830 = args__$2;
attr__$1 = G__17828;
kids__$1 = G__17829;
G__17815__$1 = G__17830;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__17831 = attr__$2;
var G__17832 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__17833 = args__$2;
attr__$1 = G__17831;
kids__$1 = G__17832;
G__17815__$1 = G__17833;
continue;
} else {
var G__17834 = attr__$2;
var G__17835 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__17836 = args__$2;
attr__$1 = G__17834;
kids__$1 = G__17835;
G__17815__$1 = G__17836;
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
return (function (p1__17838_SHARP_,p2__17837_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__17837_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__17837_SHARP_));
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__17839){
var vec__17847 = p__17839;
var seq__17848 = cljs.core.seq(vec__17847);
var first__17849 = cljs.core.first(seq__17848);
var seq__17848__$1 = cljs.core.next(seq__17848);
var child_cell = first__17849;
var _ = seq__17848__$1;
var kids = vec__17847;
var this$__$1 = this$;
var seq__17850_17854 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__17851_17855 = null;
var count__17852_17856 = (0);
var i__17853_17857 = (0);
while(true){
if((i__17853_17857 < count__17852_17856)){
var x_17858 = chunk__17851_17855.cljs$core$IIndexed$_nth$arity$2(null,i__17853_17857);
var temp__4657__auto___17859 = hoplon.core.__GT_node(x_17858);
if(cljs.core.truth_(temp__4657__auto___17859)){
var x_17860__$1 = temp__4657__auto___17859;
hoplon.core.append_child_BANG_(this$__$1,x_17860__$1);
} else {
}

var G__17861 = seq__17850_17854;
var G__17862 = chunk__17851_17855;
var G__17863 = count__17852_17856;
var G__17864 = (i__17853_17857 + (1));
seq__17850_17854 = G__17861;
chunk__17851_17855 = G__17862;
count__17852_17856 = G__17863;
i__17853_17857 = G__17864;
continue;
} else {
var temp__4657__auto___17865 = cljs.core.seq(seq__17850_17854);
if(temp__4657__auto___17865){
var seq__17850_17866__$1 = temp__4657__auto___17865;
if(cljs.core.chunked_seq_QMARK_(seq__17850_17866__$1)){
var c__7388__auto___17867 = cljs.core.chunk_first(seq__17850_17866__$1);
var G__17868 = cljs.core.chunk_rest(seq__17850_17866__$1);
var G__17869 = c__7388__auto___17867;
var G__17870 = cljs.core.count(c__7388__auto___17867);
var G__17871 = (0);
seq__17850_17854 = G__17868;
chunk__17851_17855 = G__17869;
count__17852_17856 = G__17870;
i__17853_17857 = G__17871;
continue;
} else {
var x_17872 = cljs.core.first(seq__17850_17866__$1);
var temp__4657__auto___17873__$1 = hoplon.core.__GT_node(x_17872);
if(cljs.core.truth_(temp__4657__auto___17873__$1)){
var x_17874__$1 = temp__4657__auto___17873__$1;
hoplon.core.append_child_BANG_(this$__$1,x_17874__$1);
} else {
}

var G__17875 = cljs.core.next(seq__17850_17866__$1);
var G__17876 = null;
var G__17877 = (0);
var G__17878 = (0);
seq__17850_17854 = G__17875;
chunk__17851_17855 = G__17876;
count__17852_17856 = G__17877;
i__17853_17857 = G__17878;
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
var G__17911__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__17880 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880,(1),null);
var G__17883 = this$;
hoplon.core.add_attributes_BANG_(G__17883,attr);

hoplon.core.add_children_BANG_(G__17883,kids);

return G__17883;
};
var G__17911 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__17912__i = 0, G__17912__a = new Array(arguments.length -  1);
while (G__17912__i < G__17912__a.length) {G__17912__a[G__17912__i] = arguments[G__17912__i + 1]; ++G__17912__i;}
  args = new cljs.core.IndexedSeq(G__17912__a,0);
} 
return G__17911__delegate.call(this,self__,args);};
G__17911.cljs$lang$maxFixedArity = 1;
G__17911.cljs$lang$applyTo = (function (arglist__17913){
var self__ = cljs.core.first(arglist__17913);
var args = cljs.core.rest(arglist__17913);
return G__17911__delegate(self__,args);
});
G__17911.cljs$core$IFn$_invoke$arity$variadic = G__17911__delegate;
return G__17911;
})()
;

Element.prototype.apply = (function (self__,args17879){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17879)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__17914__delegate = function (args){
var this$ = this;
var vec__17884 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17884,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17884,(1),null);
var G__17887 = this$;
hoplon.core.add_attributes_BANG_(G__17887,attr);

hoplon.core.add_children_BANG_(G__17887,kids);

return G__17887;
};
var G__17914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17915__i = 0, G__17915__a = new Array(arguments.length -  0);
while (G__17915__i < G__17915__a.length) {G__17915__a[G__17915__i] = arguments[G__17915__i + 0]; ++G__17915__i;}
  args = new cljs.core.IndexedSeq(G__17915__a,0);
} 
return G__17914__delegate.call(this,args);};
G__17914.cljs$lang$maxFixedArity = 0;
G__17914.cljs$lang$applyTo = (function (arglist__17916){
var args = cljs.core.seq(arglist__17916);
return G__17914__delegate(args);
});
G__17914.cljs$core$IFn$_invoke$arity$variadic = G__17914__delegate;
return G__17914;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = jQuery(this$__$1);
var seq__17888 = cljs.core.seq(kvs);
var chunk__17890 = null;
var count__17891 = (0);
var i__17892 = (0);
while(true){
if((i__17892 < count__17891)){
var vec__17894 = chunk__17890.cljs$core$IIndexed$_nth$arity$2(null,i__17892);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17894,(1),null);
var k_17917__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_17917__$1);
} else {
e.attr(k_17917__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_17917__$1:v));
}

var G__17918 = seq__17888;
var G__17919 = chunk__17890;
var G__17920 = count__17891;
var G__17921 = (i__17892 + (1));
seq__17888 = G__17918;
chunk__17890 = G__17919;
count__17891 = G__17920;
i__17892 = G__17921;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17888);
if(temp__4657__auto__){
var seq__17888__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17888__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__17888__$1);
var G__17922 = cljs.core.chunk_rest(seq__17888__$1);
var G__17923 = c__7388__auto__;
var G__17924 = cljs.core.count(c__7388__auto__);
var G__17925 = (0);
seq__17888 = G__17922;
chunk__17890 = G__17923;
count__17891 = G__17924;
i__17892 = G__17925;
continue;
} else {
var vec__17897 = cljs.core.first(seq__17888__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(1),null);
var k_17926__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_17926__$1);
} else {
e.attr(k_17926__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_17926__$1:v));
}

var G__17927 = cljs.core.next(seq__17888__$1);
var G__17928 = null;
var G__17929 = (0);
var G__17930 = (0);
seq__17888 = G__17927;
chunk__17890 = G__17928;
count__17891 = G__17929;
i__17892 = G__17930;
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
var seq__17900 = cljs.core.seq(kvs);
var chunk__17901 = null;
var count__17902 = (0);
var i__17903 = (0);
while(true){
if((i__17903 < count__17902)){
var vec__17904 = chunk__17901.cljs$core$IIndexed$_nth$arity$2(null,i__17903);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17904,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__17931 = seq__17900;
var G__17932 = chunk__17901;
var G__17933 = count__17902;
var G__17934 = (i__17903 + (1));
seq__17900 = G__17931;
chunk__17901 = G__17932;
count__17902 = G__17933;
i__17903 = G__17934;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17900);
if(temp__4657__auto__){
var seq__17900__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17900__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__17900__$1);
var G__17935 = cljs.core.chunk_rest(seq__17900__$1);
var G__17936 = c__7388__auto__;
var G__17937 = cljs.core.count(c__7388__auto__);
var G__17938 = (0);
seq__17900 = G__17935;
chunk__17901 = G__17936;
count__17902 = G__17937;
i__17903 = G__17938;
continue;
} else {
var vec__17907 = cljs.core.first(seq__17900__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17907,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__17939 = cljs.core.next(seq__17900__$1);
var G__17940 = null;
var G__17941 = (0);
var G__17942 = (0);
seq__17900 = G__17939;
chunk__17901 = G__17940;
count__17902 = G__17941;
i__17903 = G__17942;
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
}catch (e17910){if((e17910 instanceof Error)){
var _ = e17910;
return null;
} else {
throw e17910;

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
var G__17949__delegate = function (args){
var vec__17946 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17946,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17946,(1),null);
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
var G__17949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17950__i = 0, G__17950__a = new Array(arguments.length -  0);
while (G__17950__i < G__17950__a.length) {G__17950__a[G__17950__i] = arguments[G__17950__i + 0]; ++G__17950__i;}
  args = new cljs.core.IndexedSeq(G__17950__a,0);
} 
return G__17949__delegate.call(this,args);};
G__17949.cljs$lang$maxFixedArity = 0;
G__17949.cljs$lang$applyTo = (function (arglist__17951){
var args = cljs.core.seq(arglist__17951);
return G__17949__delegate(args);
});
G__17949.cljs$core$IFn$_invoke$arity$variadic = G__17949__delegate;
return G__17949;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__17952__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__17952 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17953__i = 0, G__17953__a = new Array(arguments.length -  0);
while (G__17953__i < G__17953__a.length) {G__17953__a[G__17953__i] = arguments[G__17953__i + 0]; ++G__17953__i;}
  args = new cljs.core.IndexedSeq(G__17953__a,0);
} 
return G__17952__delegate.call(this,args);};
G__17952.cljs$lang$maxFixedArity = 0;
G__17952.cljs$lang$applyTo = (function (arglist__17954){
var args = cljs.core.seq(arglist__17954);
return G__17952__delegate(args);
});
G__17952.cljs$core$IFn$_invoke$arity$variadic = G__17952__delegate;
return G__17952;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7659__auto__ = [];
var len__7652__auto___17959 = arguments.length;
var i__7653__auto___17960 = (0);
while(true){
if((i__7653__auto___17960 < len__7652__auto___17959)){
args__7659__auto__.push((arguments[i__7653__auto___17960]));

var G__17961 = (i__7653__auto___17960 + (1));
i__7653__auto___17960 = G__17961;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__17956 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17956,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17956,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq17955){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17955));
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
hoplon.core.$text = (function hoplon$core$$text(p1__17962_SHARP_){
return document.createTextNode(p1__17962_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__17963_SHARP_){
return document.createComment(p1__17963_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
var G__17971 = (function (){
var G__17972 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__17973 = (0);
return setTimeout(G__17972,G__17973);
});
return jQuery(G__17971);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__17974_SHARP_){
var e = (function (){var G__17975 = p1__17974_SHARP_.target;
return jQuery(G__17975);
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
return p1__17974_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args17976 = [];
var len__7652__auto___17979 = arguments.length;
var i__7653__auto___17980 = (0);
while(true){
if((i__7653__auto___17980 < len__7652__auto___17979)){
args17976.push((arguments[i__7653__auto___17980]));

var G__17981 = (i__7653__auto___17980 + (1));
i__7653__auto___17980 = G__17981;
continue;
} else {
}
break;
}

var G__17978 = args17976.length;
switch (G__17978) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17976.length)].join('')));

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
var args17983 = [];
var len__7652__auto___17986 = arguments.length;
var i__7653__auto___17987 = (0);
while(true){
if((i__7653__auto___17987 < len__7652__auto___17986)){
args17983.push((arguments[i__7653__auto___17987]));

var G__17988 = (i__7653__auto___17987 + (1));
i__7653__auto___17987 = G__17988;
continue;
} else {
}
break;
}

var G__17985 = args17983.length;
switch (G__17985) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17983.length)].join('')));

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
hoplon.core.do_BANG_ = (function (){var method_table__7502__auto__ = (function (){var G__17990 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17990) : cljs.core.atom.call(null,G__17990));
})();
var prefer_table__7503__auto__ = (function (){var G__17991 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17991) : cljs.core.atom.call(null,G__17991));
})();
var method_cache__7504__auto__ = (function (){var G__17992 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17992) : cljs.core.atom.call(null,G__17992));
})();
var cached_hierarchy__7505__auto__ = (function (){var G__17993 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17993) : cljs.core.atom.call(null,G__17993));
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
var G__17994 = elem;
var G__17995 = cljs.core.cst$kw$attr;
var G__17996 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__17994,G__17995,G__17996) : hoplon.core.do_BANG_.call(null,G__17994,G__17995,G__17996));
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
var G__17997__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__17997 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__17998__i = 0, G__17998__a = new Array(arguments.length -  2);
while (G__17998__i < G__17998__a.length) {G__17998__a[G__17998__i] = arguments[G__17998__i + 2]; ++G__17998__i;}
  args = new cljs.core.IndexedSeq(G__17998__a,0);
} 
return G__17997__delegate.call(this,elem,_,args);};
G__17997.cljs$lang$maxFixedArity = 2;
G__17997.cljs$lang$applyTo = (function (arglist__17999){
var elem = cljs.core.first(arglist__17999);
arglist__17999 = cljs.core.next(arglist__17999);
var _ = cljs.core.first(arglist__17999);
var args = cljs.core.rest(arglist__17999);
return G__17997__delegate(elem,_,args);
});
G__17997.cljs$core$IFn$_invoke$arity$variadic = G__17997__delegate;
return G__17997;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__18000_SHARP_){
return cljs.core.zipmap(p1__18000_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__18001 = cljs.core.seq(clmap);
var chunk__18002 = null;
var count__18003 = (0);
var i__18004 = (0);
while(true){
if((i__18004 < count__18003)){
var vec__18005 = chunk__18002.cljs$core$IIndexed$_nth$arity$2(null,i__18004);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__18011 = seq__18001;
var G__18012 = chunk__18002;
var G__18013 = count__18003;
var G__18014 = (i__18004 + (1));
seq__18001 = G__18011;
chunk__18002 = G__18012;
count__18003 = G__18013;
i__18004 = G__18014;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18001);
if(temp__4657__auto__){
var seq__18001__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18001__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__18001__$1);
var G__18015 = cljs.core.chunk_rest(seq__18001__$1);
var G__18016 = c__7388__auto__;
var G__18017 = cljs.core.count(c__7388__auto__);
var G__18018 = (0);
seq__18001 = G__18015;
chunk__18002 = G__18016;
count__18003 = G__18017;
i__18004 = G__18018;
continue;
} else {
var vec__18008 = cljs.core.first(seq__18001__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18008,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18008,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__18019 = cljs.core.next(seq__18001__$1);
var G__18020 = null;
var G__18021 = (0);
var G__18022 = (0);
seq__18001 = G__18019;
chunk__18002 = G__18020;
count__18003 = G__18021;
i__18004 = G__18022;
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
var G__18023 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__18024 = (0);
return setTimeout(G__18023,G__18024);
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
hoplon.core.on_BANG_ = (function (){var method_table__7502__auto__ = (function (){var G__18025 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18025) : cljs.core.atom.call(null,G__18025));
})();
var prefer_table__7503__auto__ = (function (){var G__18026 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18026) : cljs.core.atom.call(null,G__18026));
})();
var method_cache__7504__auto__ = (function (){var G__18027 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18027) : cljs.core.atom.call(null,G__18027));
})();
var cached_hierarchy__7505__auto__ = (function (){var G__18028 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18028) : cljs.core.atom.call(null,G__18028));
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
return (function (){var G__18029 = this$__$1.target;
return jQuery(G__18029);
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
var on_deck = (function (){var G__18044 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18044) : cljs.core.atom.call(null,G__18044));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__18045,G__18046){
return (G__18045.cljs$core$IFn$_invoke$arity$1 ? G__18045.cljs$core$IFn$_invoke$arity$1(G__18046) : G__18045.call(null,G__18046));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__18030_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__18049,G__18048,G__18047){
return (G__18047.cljs$core$IFn$_invoke$arity$2 ? G__18047.cljs$core$IFn$_invoke$arity$2(G__18048,G__18049) : G__18047.call(null,G__18048,G__18049));
});})(on_deck,items_seq))
).call(null,p1__18030_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__18031_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__18031_SHARP_) : cljs.core.deref.call(null,p1__18031_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__18031_SHARP_,cljs.core.rest);

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
var seq__18050 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__18051 = null;
var count__18052 = (0);
var i__18053 = (0);
while(true){
if((i__18053 < count__18052)){
var i = chunk__18051.cljs$core$IIndexed$_nth$arity$2(null,i__18053);
var e_18056 = (function (){var or__6577__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var G__18054 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__18054) : tpl.call(null,G__18054));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_18056);

var G__18057 = seq__18050;
var G__18058 = chunk__18051;
var G__18059 = count__18052;
var G__18060 = (i__18053 + (1));
seq__18050 = G__18057;
chunk__18051 = G__18058;
count__18052 = G__18059;
i__18053 = G__18060;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18050);
if(temp__4657__auto__){
var seq__18050__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18050__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__18050__$1);
var G__18061 = cljs.core.chunk_rest(seq__18050__$1);
var G__18062 = c__7388__auto__;
var G__18063 = cljs.core.count(c__7388__auto__);
var G__18064 = (0);
seq__18050 = G__18061;
chunk__18051 = G__18062;
count__18052 = G__18063;
i__18053 = G__18064;
continue;
} else {
var i = cljs.core.first(seq__18050__$1);
var e_18065 = (function (){var or__6577__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
var G__18055 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__18055) : tpl.call(null,G__18055));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_18065);

var G__18066 = cljs.core.next(seq__18050__$1);
var G__18067 = null;
var G__18068 = (0);
var G__18069 = (0);
seq__18050 = G__18066;
chunk__18051 = G__18067;
count__18052 = G__18068;
i__18053 = G__18069;
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
var e_18070 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_18070);

var G__18071 = (_ + (1));
_ = G__18071;
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
var len__7652__auto___18082 = arguments.length;
var i__7653__auto___18083 = (0);
while(true){
if((i__7653__auto___18083 < len__7652__auto___18082)){
args__7659__auto__.push((arguments[i__7653__auto___18083]));

var G__18084 = (i__7653__auto___18083 + (1));
i__7653__auto___18083 = G__18084;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__18073){
var vec__18074 = p__18073;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18074,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__18074,default$){
return (function (G__18077,G__18079,G__18078){
var or__6577__auto__ = (function (){var and__6565__auto__ = (G__18077.cljs$core$IFn$_invoke$arity$1 ? G__18077.cljs$core$IFn$_invoke$arity$1(G__18078) : G__18077.call(null,G__18078));
if(cljs.core.truth_(and__6565__auto__)){
return G__18078;
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return G__18079;
}
});})(c,vec__18074,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__18074,default$){
return (function (){
var G__18080 = c;
var G__18081 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18080,G__18081) : cljs.core.reset_BANG_.call(null,G__18080,G__18081));
});})(_,c,vec__18074,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq18072){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18072));
});

