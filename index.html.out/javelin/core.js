// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4657__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4657__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4657__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__12890 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__12888_SHARP_,p2__12889_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12888_SHARP_,p2__12889_SHARP_,p2__12889_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__12890;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e12892){if((e12892 instanceof Error)){
var _ = e12892;
return null;
} else {
throw e12892;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__12895 = c;
javelin.core.add_sync_BANG_(G__12895);

return G__12895;
} else {
var G__12896 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__12896));

return G__12896;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___12907 = arguments.length;
var i__7653__auto___12908 = (0);
while(true){
if((i__7653__auto___12908 < len__7652__auto___12907)){
args__7659__auto__.push((arguments[i__7653__auto___12908]));

var G__12909 = (i__7653__auto___12908 + (1));
i__7653__auto___12908 = G__12909;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12899){
var vec__12900 = p__12899;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__12903 = cljs.core.seq(srcs);
var chunk__12904 = null;
var count__12905 = (0);
var i__12906 = (0);
while(true){
if((i__12906 < count__12905)){
var src = chunk__12904.cljs$core$IIndexed$_nth$arity$2(null,i__12906);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12910 = seq__12903;
var G__12911 = chunk__12904;
var G__12912 = count__12905;
var G__12913 = (i__12906 + (1));
seq__12903 = G__12910;
chunk__12904 = G__12911;
count__12905 = G__12912;
i__12906 = G__12913;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12903);
if(temp__4657__auto__){
var seq__12903__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12903__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__12903__$1);
var G__12914 = cljs.core.chunk_rest(seq__12903__$1);
var G__12915 = c__7388__auto__;
var G__12916 = cljs.core.count(c__7388__auto__);
var G__12917 = (0);
seq__12903 = G__12914;
chunk__12904 = G__12915;
count__12905 = G__12916;
i__12906 = G__12917;
continue;
} else {
var src = cljs.core.first(seq__12903__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12918 = cljs.core.next(seq__12903__$1);
var G__12919 = null;
var G__12920 = (0);
var G__12921 = (0);
seq__12903 = G__12918;
chunk__12904 = G__12919;
count__12905 = G__12920;
i__12906 = G__12921;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq12897){
var G__12898 = cljs.core.first(seq12897);
var seq12897__$1 = cljs.core.next(seq12897);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12898,seq12897__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___12942 = arguments.length;
var i__7653__auto___12943 = (0);
while(true){
if((i__7653__auto___12943 < len__7652__auto___12942)){
args__7659__auto__.push((arguments[i__7653__auto___12943]));

var G__12944 = (i__7653__auto___12943 + (1));
i__7653__auto___12943 = G__12944;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12926){
var vec__12927 = p__12926;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12927,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12927,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__12930_12945 = cljs.core.seq(this$.sources);
var chunk__12931_12946 = null;
var count__12932_12947 = (0);
var i__12933_12948 = (0);
while(true){
if((i__12933_12948 < count__12932_12947)){
var source_12949 = chunk__12931_12946.cljs$core$IIndexed$_nth$arity$2(null,i__12933_12948);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_12949) : javelin.core.cell_QMARK_.call(null,source_12949)))){
source_12949.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_12949.sinks,this$);

if((source_12949.rank > this$.rank)){
var seq__12934_12950 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12930_12945,chunk__12931_12946,count__12932_12947,i__12933_12948,source_12949,vec__12927,f,sources){
return (function (p1__12922_SHARP_){
return p1__12922_SHARP_.sinks;
});})(seq__12930_12945,chunk__12931_12946,count__12932_12947,i__12933_12948,source_12949,vec__12927,f,sources))
,source_12949));
var chunk__12935_12951 = null;
var count__12936_12952 = (0);
var i__12937_12953 = (0);
while(true){
if((i__12937_12953 < count__12936_12952)){
var dep_12954 = chunk__12935_12951.cljs$core$IIndexed$_nth$arity$2(null,i__12937_12953);
dep_12954.rank = javelin.core.next_rank();

var G__12955 = seq__12934_12950;
var G__12956 = chunk__12935_12951;
var G__12957 = count__12936_12952;
var G__12958 = (i__12937_12953 + (1));
seq__12934_12950 = G__12955;
chunk__12935_12951 = G__12956;
count__12936_12952 = G__12957;
i__12937_12953 = G__12958;
continue;
} else {
var temp__4657__auto___12959 = cljs.core.seq(seq__12934_12950);
if(temp__4657__auto___12959){
var seq__12934_12960__$1 = temp__4657__auto___12959;
if(cljs.core.chunked_seq_QMARK_(seq__12934_12960__$1)){
var c__7388__auto___12961 = cljs.core.chunk_first(seq__12934_12960__$1);
var G__12962 = cljs.core.chunk_rest(seq__12934_12960__$1);
var G__12963 = c__7388__auto___12961;
var G__12964 = cljs.core.count(c__7388__auto___12961);
var G__12965 = (0);
seq__12934_12950 = G__12962;
chunk__12935_12951 = G__12963;
count__12936_12952 = G__12964;
i__12937_12953 = G__12965;
continue;
} else {
var dep_12966 = cljs.core.first(seq__12934_12960__$1);
dep_12966.rank = javelin.core.next_rank();

var G__12967 = cljs.core.next(seq__12934_12960__$1);
var G__12968 = null;
var G__12969 = (0);
var G__12970 = (0);
seq__12934_12950 = G__12967;
chunk__12935_12951 = G__12968;
count__12936_12952 = G__12969;
i__12937_12953 = G__12970;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__12971 = seq__12930_12945;
var G__12972 = chunk__12931_12946;
var G__12973 = count__12932_12947;
var G__12974 = (i__12933_12948 + (1));
seq__12930_12945 = G__12971;
chunk__12931_12946 = G__12972;
count__12932_12947 = G__12973;
i__12933_12948 = G__12974;
continue;
} else {
var temp__4657__auto___12975 = cljs.core.seq(seq__12930_12945);
if(temp__4657__auto___12975){
var seq__12930_12976__$1 = temp__4657__auto___12975;
if(cljs.core.chunked_seq_QMARK_(seq__12930_12976__$1)){
var c__7388__auto___12977 = cljs.core.chunk_first(seq__12930_12976__$1);
var G__12978 = cljs.core.chunk_rest(seq__12930_12976__$1);
var G__12979 = c__7388__auto___12977;
var G__12980 = cljs.core.count(c__7388__auto___12977);
var G__12981 = (0);
seq__12930_12945 = G__12978;
chunk__12931_12946 = G__12979;
count__12932_12947 = G__12980;
i__12933_12948 = G__12981;
continue;
} else {
var source_12982 = cljs.core.first(seq__12930_12976__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_12982) : javelin.core.cell_QMARK_.call(null,source_12982)))){
source_12982.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_12982.sinks,this$);

if((source_12982.rank > this$.rank)){
var seq__12938_12983 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12930_12945,chunk__12931_12946,count__12932_12947,i__12933_12948,source_12982,seq__12930_12976__$1,temp__4657__auto___12975,vec__12927,f,sources){
return (function (p1__12922_SHARP_){
return p1__12922_SHARP_.sinks;
});})(seq__12930_12945,chunk__12931_12946,count__12932_12947,i__12933_12948,source_12982,seq__12930_12976__$1,temp__4657__auto___12975,vec__12927,f,sources))
,source_12982));
var chunk__12939_12984 = null;
var count__12940_12985 = (0);
var i__12941_12986 = (0);
while(true){
if((i__12941_12986 < count__12940_12985)){
var dep_12987 = chunk__12939_12984.cljs$core$IIndexed$_nth$arity$2(null,i__12941_12986);
dep_12987.rank = javelin.core.next_rank();

var G__12988 = seq__12938_12983;
var G__12989 = chunk__12939_12984;
var G__12990 = count__12940_12985;
var G__12991 = (i__12941_12986 + (1));
seq__12938_12983 = G__12988;
chunk__12939_12984 = G__12989;
count__12940_12985 = G__12990;
i__12941_12986 = G__12991;
continue;
} else {
var temp__4657__auto___12992__$1 = cljs.core.seq(seq__12938_12983);
if(temp__4657__auto___12992__$1){
var seq__12938_12993__$1 = temp__4657__auto___12992__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12938_12993__$1)){
var c__7388__auto___12994 = cljs.core.chunk_first(seq__12938_12993__$1);
var G__12995 = cljs.core.chunk_rest(seq__12938_12993__$1);
var G__12996 = c__7388__auto___12994;
var G__12997 = cljs.core.count(c__7388__auto___12994);
var G__12998 = (0);
seq__12938_12983 = G__12995;
chunk__12939_12984 = G__12996;
count__12940_12985 = G__12997;
i__12941_12986 = G__12998;
continue;
} else {
var dep_12999 = cljs.core.first(seq__12938_12993__$1);
dep_12999.rank = javelin.core.next_rank();

var G__13000 = cljs.core.next(seq__12938_12993__$1);
var G__13001 = null;
var G__13002 = (0);
var G__13003 = (0);
seq__12938_12983 = G__13000;
chunk__12939_12984 = G__13001;
count__12940_12985 = G__13002;
i__12941_12986 = G__13003;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13004 = cljs.core.next(seq__12930_12976__$1);
var G__13005 = null;
var G__13006 = (0);
var G__13007 = (0);
seq__12930_12945 = G__13004;
chunk__12931_12946 = G__13005;
count__12932_12947 = G__13006;
i__12933_12948 = G__13007;
continue;
}
} else {
}
}
break;
}

var compute_13008 = ((function (vec__12927,f,sources){
return (function (p1__12923_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__12923_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__12923_SHARP_)));
});})(vec__12927,f,sources))
;
this$.thunk = ((function (compute_13008,vec__12927,f,sources){
return (function (){
return this$.state = compute_13008(this$.sources);
});})(compute_13008,vec__12927,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq12924){
var G__12925 = cljs.core.first(seq12924);
var seq12924__$1 = cljs.core.next(seq12924);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12925,seq12924__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__13010 = this$__$1;
var G__13011 = (function (){var G__13012 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13012) : f.call(null,G__13012));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13010,G__13011) : cljs.core.reset_BANG_.call(null,G__13010,G__13011));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13015 = this$__$1;
var G__13016 = (function (){var G__13017 = this$__$1.state;
var G__13018 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13017,G__13018) : f.call(null,G__13017,G__13018));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13015,G__13016) : cljs.core.reset_BANG_.call(null,G__13015,G__13016));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13022 = this$__$1;
var G__13023 = (function (){var G__13024 = this$__$1.state;
var G__13025 = a;
var G__13026 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13024,G__13025,G__13026) : f.call(null,G__13024,G__13025,G__13026));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13022,G__13023) : cljs.core.reset_BANG_.call(null,G__13022,G__13023));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13027 = this$__$1;
var G__13028 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13027,G__13028) : cljs.core.reset_BANG_.call(null,G__13027,G__13028));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13029 = cljs.core.seq(self__.watches);
var chunk__13030 = null;
var count__13031 = (0);
var i__13032 = (0);
while(true){
if((i__13032 < count__13031)){
var vec__13033 = chunk__13030.cljs$core$IIndexed$_nth$arity$2(null,i__13032);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13033,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13033,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13039 = seq__13029;
var G__13040 = chunk__13030;
var G__13041 = count__13031;
var G__13042 = (i__13032 + (1));
seq__13029 = G__13039;
chunk__13030 = G__13040;
count__13031 = G__13041;
i__13032 = G__13042;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13029);
if(temp__4657__auto__){
var seq__13029__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13029__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__13029__$1);
var G__13043 = cljs.core.chunk_rest(seq__13029__$1);
var G__13044 = c__7388__auto__;
var G__13045 = cljs.core.count(c__7388__auto__);
var G__13046 = (0);
seq__13029 = G__13043;
chunk__13030 = G__13044;
count__13031 = G__13045;
i__13032 = G__13046;
continue;
} else {
var vec__13036 = cljs.core.first(seq__13029__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13047 = cljs.core.next(seq__13029__$1);
var G__13048 = null;
var G__13049 = (0);
var G__13050 = (0);
seq__13029 = G__13047;
chunk__13030 = G__13048;
count__13031 = G__13049;
i__13032 = G__13050;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6565__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6565__auto__)){
return c.thunk;
} else {
return and__6565__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6565__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6565__auto__)){
return c.update;
} else {
return and__6565__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6565__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__6565__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__13051__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__13051 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13052__i = 0, G__13052__a = new Array(arguments.length -  0);
while (G__13052__i < G__13052__a.length) {G__13052__a[G__13052__i] = arguments[G__13052__i + 0]; ++G__13052__i;}
  sources = new cljs.core.IndexedSeq(G__13052__a,0);
} 
return G__13051__delegate.call(this,sources);};
G__13051.cljs$lang$maxFixedArity = 0;
G__13051.cljs$lang$applyTo = (function (arglist__13053){
var sources = cljs.core.seq(arglist__13053);
return G__13051__delegate(sources);
});
G__13051.cljs$core$IFn$_invoke$arity$variadic = G__13051__delegate;
return G__13051;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13054 = [];
var len__7652__auto___13062 = arguments.length;
var i__7653__auto___13063 = (0);
while(true){
if((i__7653__auto___13063 < len__7652__auto___13062)){
args13054.push((arguments[i__7653__auto___13063]));

var G__13064 = (i__7653__auto___13063 + (1));
i__7653__auto___13063 = G__13064;
continue;
} else {
}
break;
}

var G__13058 = args13054.length;
switch (G__13058) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args13054.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7671__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13059){
var map__13060 = p__13059;
var map__13060__$1 = ((((!((map__13060 == null)))?((((map__13060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13060):map__13060);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13060__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13055){
var G__13056 = cljs.core.first(seq13055);
var seq13055__$1 = cljs.core.next(seq13055);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13056,seq13055__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13066_SHARP_){
var _STAR_tx_STAR_13070 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13071 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13071) : cljs.core.atom.call(null,G__13071));
})();

try{return (p1__13066_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13066_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13066_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13070;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13072 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13072;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___13080 = arguments.length;
var i__7653__auto___13081 = (0);
while(true){
if((i__7653__auto___13081 < len__7652__auto___13080)){
args__7659__auto__.push((arguments[i__7653__auto___13081]));

var G__13082 = (i__7653__auto___13081 + (1));
i__7653__auto___13081 = G__13082;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13079 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13079) : cljs.core.atom.call(null,G__13079));
})();
var tag_neq = ((function (olds){
return (function (p1__13073_SHARP_,p2__13074_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13073_SHARP_,p2__13074_SHARP_),p2__13074_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13076_SHARP_,p2__13075_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13076_SHARP_,p2__13075_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13083__delegate = function (rest__13077_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13077_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13077_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13077_SHARP_));

return news;
};
var G__13083 = function (var_args){
var rest__13077_SHARP_ = null;
if (arguments.length > 0) {
var G__13084__i = 0, G__13084__a = new Array(arguments.length -  0);
while (G__13084__i < G__13084__a.length) {G__13084__a[G__13084__i] = arguments[G__13084__i + 0]; ++G__13084__i;}
  rest__13077_SHARP_ = new cljs.core.IndexedSeq(G__13084__a,0);
} 
return G__13083__delegate.call(this,rest__13077_SHARP_);};
G__13083.cljs$lang$maxFixedArity = 0;
G__13083.cljs$lang$applyTo = (function (arglist__13085){
var rest__13077_SHARP_ = cljs.core.seq(arglist__13085);
return G__13083__delegate(rest__13077_SHARP_);
});
G__13083.cljs$core$IFn$_invoke$arity$variadic = G__13083__delegate;
return G__13083;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13078){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13078));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13086_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13086_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13087_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13087_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13094_13100 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13095_13101 = null;
var count__13096_13102 = (0);
var i__13097_13103 = (0);
while(true){
if((i__13097_13103 < count__13096_13102)){
var i_13104 = chunk__13095_13101.cljs$core$IIndexed$_nth$arity$2(null,i__13097_13103);
var G__13098_13105 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13104) : ith_item__$1.call(null,i_13104));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13098_13105) : f__$1.call(null,G__13098_13105));

var G__13106 = seq__13094_13100;
var G__13107 = chunk__13095_13101;
var G__13108 = count__13096_13102;
var G__13109 = (i__13097_13103 + (1));
seq__13094_13100 = G__13106;
chunk__13095_13101 = G__13107;
count__13096_13102 = G__13108;
i__13097_13103 = G__13109;
continue;
} else {
var temp__4657__auto___13110 = cljs.core.seq(seq__13094_13100);
if(temp__4657__auto___13110){
var seq__13094_13111__$1 = temp__4657__auto___13110;
if(cljs.core.chunked_seq_QMARK_(seq__13094_13111__$1)){
var c__7388__auto___13112 = cljs.core.chunk_first(seq__13094_13111__$1);
var G__13113 = cljs.core.chunk_rest(seq__13094_13111__$1);
var G__13114 = c__7388__auto___13112;
var G__13115 = cljs.core.count(c__7388__auto___13112);
var G__13116 = (0);
seq__13094_13100 = G__13113;
chunk__13095_13101 = G__13114;
count__13096_13102 = G__13115;
i__13097_13103 = G__13116;
continue;
} else {
var i_13117 = cljs.core.first(seq__13094_13111__$1);
var G__13099_13118 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13117) : ith_item__$1.call(null,i_13117));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13099_13118) : f__$1.call(null,G__13099_13118));

var G__13119 = cljs.core.next(seq__13094_13111__$1);
var G__13120 = null;
var G__13121 = (0);
var G__13122 = (0);
seq__13094_13100 = G__13119;
chunk__13095_13101 = G__13120;
count__13096_13102 = G__13121;
i__13097_13103 = G__13122;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
