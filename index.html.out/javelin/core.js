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

var G__17099 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__17097_SHARP_,p2__17098_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17097_SHARP_,p2__17098_SHARP_,p2__17098_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__17099;
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
}catch (e17101){if((e17101 instanceof Error)){
var _ = e17101;
return null;
} else {
throw e17101;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__17104 = c;
javelin.core.add_sync_BANG_(G__17104);

return G__17104;
} else {
var G__17105 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__17105));

return G__17105;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___17116 = arguments.length;
var i__7653__auto___17117 = (0);
while(true){
if((i__7653__auto___17117 < len__7652__auto___17116)){
args__7659__auto__.push((arguments[i__7653__auto___17117]));

var G__17118 = (i__7653__auto___17117 + (1));
i__7653__auto___17117 = G__17118;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__17108){
var vec__17109 = p__17108;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17109,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__17112 = cljs.core.seq(srcs);
var chunk__17113 = null;
var count__17114 = (0);
var i__17115 = (0);
while(true){
if((i__17115 < count__17114)){
var src = chunk__17113.cljs$core$IIndexed$_nth$arity$2(null,i__17115);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__17119 = seq__17112;
var G__17120 = chunk__17113;
var G__17121 = count__17114;
var G__17122 = (i__17115 + (1));
seq__17112 = G__17119;
chunk__17113 = G__17120;
count__17114 = G__17121;
i__17115 = G__17122;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17112);
if(temp__4657__auto__){
var seq__17112__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17112__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__17112__$1);
var G__17123 = cljs.core.chunk_rest(seq__17112__$1);
var G__17124 = c__7388__auto__;
var G__17125 = cljs.core.count(c__7388__auto__);
var G__17126 = (0);
seq__17112 = G__17123;
chunk__17113 = G__17124;
count__17114 = G__17125;
i__17115 = G__17126;
continue;
} else {
var src = cljs.core.first(seq__17112__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__17127 = cljs.core.next(seq__17112__$1);
var G__17128 = null;
var G__17129 = (0);
var G__17130 = (0);
seq__17112 = G__17127;
chunk__17113 = G__17128;
count__17114 = G__17129;
i__17115 = G__17130;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq17106){
var G__17107 = cljs.core.first(seq17106);
var seq17106__$1 = cljs.core.next(seq17106);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17107,seq17106__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___17151 = arguments.length;
var i__7653__auto___17152 = (0);
while(true){
if((i__7653__auto___17152 < len__7652__auto___17151)){
args__7659__auto__.push((arguments[i__7653__auto___17152]));

var G__17153 = (i__7653__auto___17152 + (1));
i__7653__auto___17152 = G__17153;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__17135){
var vec__17136 = p__17135;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17136,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17136,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__17139_17154 = cljs.core.seq(this$.sources);
var chunk__17140_17155 = null;
var count__17141_17156 = (0);
var i__17142_17157 = (0);
while(true){
if((i__17142_17157 < count__17141_17156)){
var source_17158 = chunk__17140_17155.cljs$core$IIndexed$_nth$arity$2(null,i__17142_17157);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_17158) : javelin.core.cell_QMARK_.call(null,source_17158)))){
source_17158.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_17158.sinks,this$);

if((source_17158.rank > this$.rank)){
var seq__17143_17159 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__17139_17154,chunk__17140_17155,count__17141_17156,i__17142_17157,source_17158,vec__17136,f,sources){
return (function (p1__17131_SHARP_){
return p1__17131_SHARP_.sinks;
});})(seq__17139_17154,chunk__17140_17155,count__17141_17156,i__17142_17157,source_17158,vec__17136,f,sources))
,source_17158));
var chunk__17144_17160 = null;
var count__17145_17161 = (0);
var i__17146_17162 = (0);
while(true){
if((i__17146_17162 < count__17145_17161)){
var dep_17163 = chunk__17144_17160.cljs$core$IIndexed$_nth$arity$2(null,i__17146_17162);
dep_17163.rank = javelin.core.next_rank();

var G__17164 = seq__17143_17159;
var G__17165 = chunk__17144_17160;
var G__17166 = count__17145_17161;
var G__17167 = (i__17146_17162 + (1));
seq__17143_17159 = G__17164;
chunk__17144_17160 = G__17165;
count__17145_17161 = G__17166;
i__17146_17162 = G__17167;
continue;
} else {
var temp__4657__auto___17168 = cljs.core.seq(seq__17143_17159);
if(temp__4657__auto___17168){
var seq__17143_17169__$1 = temp__4657__auto___17168;
if(cljs.core.chunked_seq_QMARK_(seq__17143_17169__$1)){
var c__7388__auto___17170 = cljs.core.chunk_first(seq__17143_17169__$1);
var G__17171 = cljs.core.chunk_rest(seq__17143_17169__$1);
var G__17172 = c__7388__auto___17170;
var G__17173 = cljs.core.count(c__7388__auto___17170);
var G__17174 = (0);
seq__17143_17159 = G__17171;
chunk__17144_17160 = G__17172;
count__17145_17161 = G__17173;
i__17146_17162 = G__17174;
continue;
} else {
var dep_17175 = cljs.core.first(seq__17143_17169__$1);
dep_17175.rank = javelin.core.next_rank();

var G__17176 = cljs.core.next(seq__17143_17169__$1);
var G__17177 = null;
var G__17178 = (0);
var G__17179 = (0);
seq__17143_17159 = G__17176;
chunk__17144_17160 = G__17177;
count__17145_17161 = G__17178;
i__17146_17162 = G__17179;
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

var G__17180 = seq__17139_17154;
var G__17181 = chunk__17140_17155;
var G__17182 = count__17141_17156;
var G__17183 = (i__17142_17157 + (1));
seq__17139_17154 = G__17180;
chunk__17140_17155 = G__17181;
count__17141_17156 = G__17182;
i__17142_17157 = G__17183;
continue;
} else {
var temp__4657__auto___17184 = cljs.core.seq(seq__17139_17154);
if(temp__4657__auto___17184){
var seq__17139_17185__$1 = temp__4657__auto___17184;
if(cljs.core.chunked_seq_QMARK_(seq__17139_17185__$1)){
var c__7388__auto___17186 = cljs.core.chunk_first(seq__17139_17185__$1);
var G__17187 = cljs.core.chunk_rest(seq__17139_17185__$1);
var G__17188 = c__7388__auto___17186;
var G__17189 = cljs.core.count(c__7388__auto___17186);
var G__17190 = (0);
seq__17139_17154 = G__17187;
chunk__17140_17155 = G__17188;
count__17141_17156 = G__17189;
i__17142_17157 = G__17190;
continue;
} else {
var source_17191 = cljs.core.first(seq__17139_17185__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_17191) : javelin.core.cell_QMARK_.call(null,source_17191)))){
source_17191.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_17191.sinks,this$);

if((source_17191.rank > this$.rank)){
var seq__17147_17192 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__17139_17154,chunk__17140_17155,count__17141_17156,i__17142_17157,source_17191,seq__17139_17185__$1,temp__4657__auto___17184,vec__17136,f,sources){
return (function (p1__17131_SHARP_){
return p1__17131_SHARP_.sinks;
});})(seq__17139_17154,chunk__17140_17155,count__17141_17156,i__17142_17157,source_17191,seq__17139_17185__$1,temp__4657__auto___17184,vec__17136,f,sources))
,source_17191));
var chunk__17148_17193 = null;
var count__17149_17194 = (0);
var i__17150_17195 = (0);
while(true){
if((i__17150_17195 < count__17149_17194)){
var dep_17196 = chunk__17148_17193.cljs$core$IIndexed$_nth$arity$2(null,i__17150_17195);
dep_17196.rank = javelin.core.next_rank();

var G__17197 = seq__17147_17192;
var G__17198 = chunk__17148_17193;
var G__17199 = count__17149_17194;
var G__17200 = (i__17150_17195 + (1));
seq__17147_17192 = G__17197;
chunk__17148_17193 = G__17198;
count__17149_17194 = G__17199;
i__17150_17195 = G__17200;
continue;
} else {
var temp__4657__auto___17201__$1 = cljs.core.seq(seq__17147_17192);
if(temp__4657__auto___17201__$1){
var seq__17147_17202__$1 = temp__4657__auto___17201__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17147_17202__$1)){
var c__7388__auto___17203 = cljs.core.chunk_first(seq__17147_17202__$1);
var G__17204 = cljs.core.chunk_rest(seq__17147_17202__$1);
var G__17205 = c__7388__auto___17203;
var G__17206 = cljs.core.count(c__7388__auto___17203);
var G__17207 = (0);
seq__17147_17192 = G__17204;
chunk__17148_17193 = G__17205;
count__17149_17194 = G__17206;
i__17150_17195 = G__17207;
continue;
} else {
var dep_17208 = cljs.core.first(seq__17147_17202__$1);
dep_17208.rank = javelin.core.next_rank();

var G__17209 = cljs.core.next(seq__17147_17202__$1);
var G__17210 = null;
var G__17211 = (0);
var G__17212 = (0);
seq__17147_17192 = G__17209;
chunk__17148_17193 = G__17210;
count__17149_17194 = G__17211;
i__17150_17195 = G__17212;
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

var G__17213 = cljs.core.next(seq__17139_17185__$1);
var G__17214 = null;
var G__17215 = (0);
var G__17216 = (0);
seq__17139_17154 = G__17213;
chunk__17140_17155 = G__17214;
count__17141_17156 = G__17215;
i__17142_17157 = G__17216;
continue;
}
} else {
}
}
break;
}

var compute_17217 = ((function (vec__17136,f,sources){
return (function (p1__17132_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__17132_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__17132_SHARP_)));
});})(vec__17136,f,sources))
;
this$.thunk = ((function (compute_17217,vec__17136,f,sources){
return (function (){
return this$.state = compute_17217(this$.sources);
});})(compute_17217,vec__17136,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq17133){
var G__17134 = cljs.core.first(seq17133);
var seq17133__$1 = cljs.core.next(seq17133);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17134,seq17133__$1);
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
var G__17219 = this$__$1;
var G__17220 = (function (){var G__17221 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17221) : f.call(null,G__17221));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17219,G__17220) : cljs.core.reset_BANG_.call(null,G__17219,G__17220));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__17224 = this$__$1;
var G__17225 = (function (){var G__17226 = this$__$1.state;
var G__17227 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17226,G__17227) : f.call(null,G__17226,G__17227));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17224,G__17225) : cljs.core.reset_BANG_.call(null,G__17224,G__17225));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__17231 = this$__$1;
var G__17232 = (function (){var G__17233 = this$__$1.state;
var G__17234 = a;
var G__17235 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17233,G__17234,G__17235) : f.call(null,G__17233,G__17234,G__17235));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17231,G__17232) : cljs.core.reset_BANG_.call(null,G__17231,G__17232));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__17236 = this$__$1;
var G__17237 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17236,G__17237) : cljs.core.reset_BANG_.call(null,G__17236,G__17237));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__17238 = cljs.core.seq(self__.watches);
var chunk__17239 = null;
var count__17240 = (0);
var i__17241 = (0);
while(true){
if((i__17241 < count__17240)){
var vec__17242 = chunk__17239.cljs$core$IIndexed$_nth$arity$2(null,i__17241);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17242,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17242,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__17248 = seq__17238;
var G__17249 = chunk__17239;
var G__17250 = count__17240;
var G__17251 = (i__17241 + (1));
seq__17238 = G__17248;
chunk__17239 = G__17249;
count__17240 = G__17250;
i__17241 = G__17251;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17238);
if(temp__4657__auto__){
var seq__17238__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17238__$1)){
var c__7388__auto__ = cljs.core.chunk_first(seq__17238__$1);
var G__17252 = cljs.core.chunk_rest(seq__17238__$1);
var G__17253 = c__7388__auto__;
var G__17254 = cljs.core.count(c__7388__auto__);
var G__17255 = (0);
seq__17238 = G__17252;
chunk__17239 = G__17253;
count__17240 = G__17254;
i__17241 = G__17255;
continue;
} else {
var vec__17245 = cljs.core.first(seq__17238__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17245,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17245,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__17256 = cljs.core.next(seq__17238__$1);
var G__17257 = null;
var G__17258 = (0);
var G__17259 = (0);
seq__17238 = G__17256;
chunk__17239 = G__17257;
count__17240 = G__17258;
i__17241 = G__17259;
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
var G__17260__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__17260 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__17261__i = 0, G__17261__a = new Array(arguments.length -  0);
while (G__17261__i < G__17261__a.length) {G__17261__a[G__17261__i] = arguments[G__17261__i + 0]; ++G__17261__i;}
  sources = new cljs.core.IndexedSeq(G__17261__a,0);
} 
return G__17260__delegate.call(this,sources);};
G__17260.cljs$lang$maxFixedArity = 0;
G__17260.cljs$lang$applyTo = (function (arglist__17262){
var sources = cljs.core.seq(arglist__17262);
return G__17260__delegate(sources);
});
G__17260.cljs$core$IFn$_invoke$arity$variadic = G__17260__delegate;
return G__17260;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args17263 = [];
var len__7652__auto___17271 = arguments.length;
var i__7653__auto___17272 = (0);
while(true){
if((i__7653__auto___17272 < len__7652__auto___17271)){
args17263.push((arguments[i__7653__auto___17272]));

var G__17273 = (i__7653__auto___17272 + (1));
i__7653__auto___17272 = G__17273;
continue;
} else {
}
break;
}

var G__17267 = args17263.length;
switch (G__17267) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7671__auto__ = (new cljs.core.IndexedSeq(args17263.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7671__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__17268){
var map__17269 = p__17268;
var map__17269__$1 = ((((!((map__17269 == null)))?((((map__17269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17269):map__17269);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17269__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq17264){
var G__17265 = cljs.core.first(seq17264);
var seq17264__$1 = cljs.core.next(seq17264);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__17265,seq17264__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__17275_SHARP_){
var _STAR_tx_STAR_17279 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__17280 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17280) : cljs.core.atom.call(null,G__17280));
})();

try{return (p1__17275_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__17275_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__17275_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_17279;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_17281 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_17281;
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
var len__7652__auto___17289 = arguments.length;
var i__7653__auto___17290 = (0);
while(true){
if((i__7653__auto___17290 < len__7652__auto___17289)){
args__7659__auto__.push((arguments[i__7653__auto___17290]));

var G__17291 = (i__7653__auto___17290 + (1));
i__7653__auto___17290 = G__17291;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((0) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7660__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__17288 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17288) : cljs.core.atom.call(null,G__17288));
})();
var tag_neq = ((function (olds){
return (function (p1__17282_SHARP_,p2__17283_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__17282_SHARP_,p2__17283_SHARP_),p2__17283_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__17285_SHARP_,p2__17284_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__17285_SHARP_,p2__17284_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__17292__delegate = function (rest__17286_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__17286_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__17286_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__17286_SHARP_));

return news;
};
var G__17292 = function (var_args){
var rest__17286_SHARP_ = null;
if (arguments.length > 0) {
var G__17293__i = 0, G__17293__a = new Array(arguments.length -  0);
while (G__17293__i < G__17293__a.length) {G__17293__a[G__17293__i] = arguments[G__17293__i + 0]; ++G__17293__i;}
  rest__17286_SHARP_ = new cljs.core.IndexedSeq(G__17293__a,0);
} 
return G__17292__delegate.call(this,rest__17286_SHARP_);};
G__17292.cljs$lang$maxFixedArity = 0;
G__17292.cljs$lang$applyTo = (function (arglist__17294){
var rest__17286_SHARP_ = cljs.core.seq(arglist__17294);
return G__17292__delegate(rest__17286_SHARP_);
});
G__17292.cljs$core$IFn$_invoke$arity$variadic = G__17292__delegate;
return G__17292;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq17287){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17287));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__17295_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__17295_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__17296_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__17296_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__17303_17309 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__17304_17310 = null;
var count__17305_17311 = (0);
var i__17306_17312 = (0);
while(true){
if((i__17306_17312 < count__17305_17311)){
var i_17313 = chunk__17304_17310.cljs$core$IIndexed$_nth$arity$2(null,i__17306_17312);
var G__17307_17314 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_17313) : ith_item__$1.call(null,i_17313));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17307_17314) : f__$1.call(null,G__17307_17314));

var G__17315 = seq__17303_17309;
var G__17316 = chunk__17304_17310;
var G__17317 = count__17305_17311;
var G__17318 = (i__17306_17312 + (1));
seq__17303_17309 = G__17315;
chunk__17304_17310 = G__17316;
count__17305_17311 = G__17317;
i__17306_17312 = G__17318;
continue;
} else {
var temp__4657__auto___17319 = cljs.core.seq(seq__17303_17309);
if(temp__4657__auto___17319){
var seq__17303_17320__$1 = temp__4657__auto___17319;
if(cljs.core.chunked_seq_QMARK_(seq__17303_17320__$1)){
var c__7388__auto___17321 = cljs.core.chunk_first(seq__17303_17320__$1);
var G__17322 = cljs.core.chunk_rest(seq__17303_17320__$1);
var G__17323 = c__7388__auto___17321;
var G__17324 = cljs.core.count(c__7388__auto___17321);
var G__17325 = (0);
seq__17303_17309 = G__17322;
chunk__17304_17310 = G__17323;
count__17305_17311 = G__17324;
i__17306_17312 = G__17325;
continue;
} else {
var i_17326 = cljs.core.first(seq__17303_17320__$1);
var G__17308_17327 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_17326) : ith_item__$1.call(null,i_17326));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17308_17327) : f__$1.call(null,G__17308_17327));

var G__17328 = cljs.core.next(seq__17303_17320__$1);
var G__17329 = null;
var G__17330 = (0);
var G__17331 = (0);
seq__17303_17309 = G__17328;
chunk__17304_17310 = G__17329;
count__17305_17311 = G__17330;
i__17306_17312 = G__17331;
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
