// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args16434 = [];
var len__7652__auto___16440 = arguments.length;
var i__7653__auto___16441 = (0);
while(true){
if((i__7653__auto___16441 < len__7652__auto___16440)){
args16434.push((arguments[i__7653__auto___16441]));

var G__16442 = (i__7653__auto___16441 + (1));
i__7653__auto___16441 = G__16442;
continue;
} else {
}
break;
}

var G__16436 = args16434.length;
switch (G__16436) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16434.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16437 = (function (f,blockable,meta16438){
this.f = f;
this.blockable = blockable;
this.meta16438 = meta16438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16439,meta16438__$1){
var self__ = this;
var _16439__$1 = this;
return (new cljs.core.async.t_cljs$core$async16437(self__.f,self__.blockable,meta16438__$1));
});

cljs.core.async.t_cljs$core$async16437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16439){
var self__ = this;
var _16439__$1 = this;
return self__.meta16438;
});

cljs.core.async.t_cljs$core$async16437.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16438], null);
});

cljs.core.async.t_cljs$core$async16437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16437";

cljs.core.async.t_cljs$core$async16437.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async16437");
});

cljs.core.async.__GT_t_cljs$core$async16437 = (function cljs$core$async$__GT_t_cljs$core$async16437(f__$1,blockable__$1,meta16438){
return (new cljs.core.async.t_cljs$core$async16437(f__$1,blockable__$1,meta16438));
});

}

return (new cljs.core.async.t_cljs$core$async16437(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args16446 = [];
var len__7652__auto___16449 = arguments.length;
var i__7653__auto___16450 = (0);
while(true){
if((i__7653__auto___16450 < len__7652__auto___16449)){
args16446.push((arguments[i__7653__auto___16450]));

var G__16451 = (i__7653__auto___16450 + (1));
i__7653__auto___16450 = G__16451;
continue;
} else {
}
break;
}

var G__16448 = args16446.length;
switch (G__16448) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16446.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args16453 = [];
var len__7652__auto___16456 = arguments.length;
var i__7653__auto___16457 = (0);
while(true){
if((i__7653__auto___16457 < len__7652__auto___16456)){
args16453.push((arguments[i__7653__auto___16457]));

var G__16458 = (i__7653__auto___16457 + (1));
i__7653__auto___16457 = G__16458;
continue;
} else {
}
break;
}

var G__16455 = args16453.length;
switch (G__16455) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16453.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args16460 = [];
var len__7652__auto___16463 = arguments.length;
var i__7653__auto___16464 = (0);
while(true){
if((i__7653__auto___16464 < len__7652__auto___16463)){
args16460.push((arguments[i__7653__auto___16464]));

var G__16465 = (i__7653__auto___16464 + (1));
i__7653__auto___16464 = G__16465;
continue;
} else {
}
break;
}

var G__16462 = args16460.length;
switch (G__16462) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16460.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16467 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16467) : fn1.call(null,val_16467));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16467,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16467) : fn1.call(null,val_16467));
});})(val_16467,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args16468 = [];
var len__7652__auto___16471 = arguments.length;
var i__7653__auto___16472 = (0);
while(true){
if((i__7653__auto___16472 < len__7652__auto___16471)){
args16468.push((arguments[i__7653__auto___16472]));

var G__16473 = (i__7653__auto___16472 + (1));
i__7653__auto___16472 = G__16473;
continue;
} else {
}
break;
}

var G__16470 = args16468.length;
switch (G__16470) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16468.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7492__auto___16475 = n;
var x_16476 = (0);
while(true){
if((x_16476 < n__7492__auto___16475)){
(a[x_16476] = (0));

var G__16477 = (x_16476 + (1));
x_16476 = G__16477;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16478 = (i + (1));
i = G__16478;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16482 = (function (alt_flag,flag,meta16483){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16483 = meta16483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16484,meta16483__$1){
var self__ = this;
var _16484__$1 = this;
return (new cljs.core.async.t_cljs$core$async16482(self__.alt_flag,self__.flag,meta16483__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16484){
var self__ = this;
var _16484__$1 = this;
return self__.meta16483;
});})(flag))
;

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16482.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16483], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16482";

cljs.core.async.t_cljs$core$async16482.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async16482");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16482 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16482(alt_flag__$1,flag__$1,meta16483){
return (new cljs.core.async.t_cljs$core$async16482(alt_flag__$1,flag__$1,meta16483));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16482(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16488 = (function (alt_handler,flag,cb,meta16489){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16489 = meta16489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16490,meta16489__$1){
var self__ = this;
var _16490__$1 = this;
return (new cljs.core.async.t_cljs$core$async16488(self__.alt_handler,self__.flag,self__.cb,meta16489__$1));
});

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16490){
var self__ = this;
var _16490__$1 = this;
return self__.meta16489;
});

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16489], null);
});

cljs.core.async.t_cljs$core$async16488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16488";

cljs.core.async.t_cljs$core$async16488.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async16488");
});

cljs.core.async.__GT_t_cljs$core$async16488 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16488(alt_handler__$1,flag__$1,cb__$1,meta16489){
return (new cljs.core.async.t_cljs$core$async16488(alt_handler__$1,flag__$1,cb__$1,meta16489));
});

}

return (new cljs.core.async.t_cljs$core$async16488(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16491_SHARP_){
var G__16495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16491_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16495) : fret.call(null,G__16495));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16492_SHARP_){
var G__16496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16492_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16496) : fret.call(null,G__16496));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6577__auto__ = wport;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16497 = (i + (1));
i = G__16497;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6577__auto__ = ret;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6565__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6565__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6565__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___16503 = arguments.length;
var i__7653__auto___16504 = (0);
while(true){
if((i__7653__auto___16504 < len__7652__auto___16503)){
args__7659__auto__.push((arguments[i__7653__auto___16504]));

var G__16505 = (i__7653__auto___16504 + (1));
i__7653__auto___16504 = G__16505;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16500){
var map__16501 = p__16500;
var map__16501__$1 = ((((!((map__16501 == null)))?((((map__16501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16501):map__16501);
var opts = map__16501__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16498){
var G__16499 = cljs.core.first(seq16498);
var seq16498__$1 = cljs.core.next(seq16498);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16499,seq16498__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args16506 = [];
var len__7652__auto___16556 = arguments.length;
var i__7653__auto___16557 = (0);
while(true){
if((i__7653__auto___16557 < len__7652__auto___16556)){
args16506.push((arguments[i__7653__auto___16557]));

var G__16558 = (i__7653__auto___16557 + (1));
i__7653__auto___16557 = G__16558;
continue;
} else {
}
break;
}

var G__16508 = args16506.length;
switch (G__16508) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16506.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16389__auto___16560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___16560){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___16560){
return (function (state_16532){
var state_val_16533 = (state_16532[(1)]);
if((state_val_16533 === (7))){
var inst_16528 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16534_16561 = state_16532__$1;
(statearr_16534_16561[(2)] = inst_16528);

(statearr_16534_16561[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (1))){
var state_16532__$1 = state_16532;
var statearr_16535_16562 = state_16532__$1;
(statearr_16535_16562[(2)] = null);

(statearr_16535_16562[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (4))){
var inst_16511 = (state_16532[(7)]);
var inst_16511__$1 = (state_16532[(2)]);
var inst_16512 = (inst_16511__$1 == null);
var state_16532__$1 = (function (){var statearr_16536 = state_16532;
(statearr_16536[(7)] = inst_16511__$1);

return statearr_16536;
})();
if(cljs.core.truth_(inst_16512)){
var statearr_16537_16563 = state_16532__$1;
(statearr_16537_16563[(1)] = (5));

} else {
var statearr_16538_16564 = state_16532__$1;
(statearr_16538_16564[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (13))){
var state_16532__$1 = state_16532;
var statearr_16539_16565 = state_16532__$1;
(statearr_16539_16565[(2)] = null);

(statearr_16539_16565[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (6))){
var inst_16511 = (state_16532[(7)]);
var state_16532__$1 = state_16532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16532__$1,(11),to,inst_16511);
} else {
if((state_val_16533 === (3))){
var inst_16530 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16532__$1,inst_16530);
} else {
if((state_val_16533 === (12))){
var state_16532__$1 = state_16532;
var statearr_16540_16566 = state_16532__$1;
(statearr_16540_16566[(2)] = null);

(statearr_16540_16566[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (2))){
var state_16532__$1 = state_16532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16532__$1,(4),from);
} else {
if((state_val_16533 === (11))){
var inst_16521 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
if(cljs.core.truth_(inst_16521)){
var statearr_16541_16567 = state_16532__$1;
(statearr_16541_16567[(1)] = (12));

} else {
var statearr_16542_16568 = state_16532__$1;
(statearr_16542_16568[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (9))){
var state_16532__$1 = state_16532;
var statearr_16543_16569 = state_16532__$1;
(statearr_16543_16569[(2)] = null);

(statearr_16543_16569[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (5))){
var state_16532__$1 = state_16532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16544_16570 = state_16532__$1;
(statearr_16544_16570[(1)] = (8));

} else {
var statearr_16545_16571 = state_16532__$1;
(statearr_16545_16571[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (14))){
var inst_16526 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16546_16572 = state_16532__$1;
(statearr_16546_16572[(2)] = inst_16526);

(statearr_16546_16572[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (10))){
var inst_16518 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16547_16573 = state_16532__$1;
(statearr_16547_16573[(2)] = inst_16518);

(statearr_16547_16573[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16533 === (8))){
var inst_16515 = cljs.core.async.close_BANG_(to);
var state_16532__$1 = state_16532;
var statearr_16548_16574 = state_16532__$1;
(statearr_16548_16574[(2)] = inst_16515);

(statearr_16548_16574[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___16560))
;
return ((function (switch__16275__auto__,c__16389__auto___16560){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_16552 = [null,null,null,null,null,null,null,null];
(statearr_16552[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_16552[(1)] = (1));

return statearr_16552;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_16532){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_16532);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e16553){if((e16553 instanceof Object)){
var ex__16279__auto__ = e16553;
var statearr_16554_16575 = state_16532;
(statearr_16554_16575[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16532);

return cljs.core.cst$kw$recur;
} else {
throw e16553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__16576 = state_16532;
state_16532 = G__16576;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_16532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_16532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___16560))
})();
var state__16391__auto__ = (function (){var statearr_16555 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_16555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___16560);

return statearr_16555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___16560))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16764){
var vec__16765 = p__16764;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(1),null);
var job = vec__16765;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16389__auto___16951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___16951,res,vec__16765,v,p,job,jobs,results){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___16951,res,vec__16765,v,p,job,jobs,results){
return (function (state_16772){
var state_val_16773 = (state_16772[(1)]);
if((state_val_16773 === (1))){
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16772__$1,(2),res,v);
} else {
if((state_val_16773 === (2))){
var inst_16769 = (state_16772[(2)]);
var inst_16770 = cljs.core.async.close_BANG_(res);
var state_16772__$1 = (function (){var statearr_16774 = state_16772;
(statearr_16774[(7)] = inst_16769);

return statearr_16774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16772__$1,inst_16770);
} else {
return null;
}
}
});})(c__16389__auto___16951,res,vec__16765,v,p,job,jobs,results))
;
return ((function (switch__16275__auto__,c__16389__auto___16951,res,vec__16765,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0 = (function (){
var statearr_16778 = [null,null,null,null,null,null,null,null];
(statearr_16778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__);

(statearr_16778[(1)] = (1));

return statearr_16778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1 = (function (state_16772){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_16772);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e16779){if((e16779 instanceof Object)){
var ex__16279__auto__ = e16779;
var statearr_16780_16952 = state_16772;
(statearr_16780_16952[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16772);

return cljs.core.cst$kw$recur;
} else {
throw e16779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__16953 = state_16772;
state_16772 = G__16953;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = function(state_16772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1.call(this,state_16772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___16951,res,vec__16765,v,p,job,jobs,results))
})();
var state__16391__auto__ = (function (){var statearr_16781 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_16781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___16951);

return statearr_16781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___16951,res,vec__16765,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16782){
var vec__16783 = p__16782;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16783,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16783,(1),null);
var job = vec__16783;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7492__auto___16954 = n;
var __16955 = (0);
while(true){
if((__16955 < n__7492__auto___16954)){
var G__16786_16956 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16786_16956) {
case "compute":
var c__16389__auto___16958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16955,c__16389__auto___16958,G__16786_16956,n__7492__auto___16954,jobs,results,process,async){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (__16955,c__16389__auto___16958,G__16786_16956,n__7492__auto___16954,jobs,results,process,async){
return (function (state_16799){
var state_val_16800 = (state_16799[(1)]);
if((state_val_16800 === (1))){
var state_16799__$1 = state_16799;
var statearr_16801_16959 = state_16799__$1;
(statearr_16801_16959[(2)] = null);

(statearr_16801_16959[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (2))){
var state_16799__$1 = state_16799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16799__$1,(4),jobs);
} else {
if((state_val_16800 === (3))){
var inst_16797 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16799__$1,inst_16797);
} else {
if((state_val_16800 === (4))){
var inst_16789 = (state_16799[(2)]);
var inst_16790 = process(inst_16789);
var state_16799__$1 = state_16799;
if(cljs.core.truth_(inst_16790)){
var statearr_16802_16960 = state_16799__$1;
(statearr_16802_16960[(1)] = (5));

} else {
var statearr_16803_16961 = state_16799__$1;
(statearr_16803_16961[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (5))){
var state_16799__$1 = state_16799;
var statearr_16804_16962 = state_16799__$1;
(statearr_16804_16962[(2)] = null);

(statearr_16804_16962[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (6))){
var state_16799__$1 = state_16799;
var statearr_16805_16963 = state_16799__$1;
(statearr_16805_16963[(2)] = null);

(statearr_16805_16963[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (7))){
var inst_16795 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
var statearr_16806_16964 = state_16799__$1;
(statearr_16806_16964[(2)] = inst_16795);

(statearr_16806_16964[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16955,c__16389__auto___16958,G__16786_16956,n__7492__auto___16954,jobs,results,process,async))
;
return ((function (__16955,switch__16275__auto__,c__16389__auto___16958,G__16786_16956,n__7492__auto___16954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0 = (function (){
var statearr_16810 = [null,null,null,null,null,null,null];
(statearr_16810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__);

(statearr_16810[(1)] = (1));

return statearr_16810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1 = (function (state_16799){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_16799);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e16811){if((e16811 instanceof Object)){
var ex__16279__auto__ = e16811;
var statearr_16812_16965 = state_16799;
(statearr_16812_16965[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16799);

return cljs.core.cst$kw$recur;
} else {
throw e16811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__16966 = state_16799;
state_16799 = G__16966;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = function(state_16799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1.call(this,state_16799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__;
})()
;})(__16955,switch__16275__auto__,c__16389__auto___16958,G__16786_16956,n__7492__auto___16954,jobs,results,process,async))
})();
var state__16391__auto__ = (function (){var statearr_16813 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_16813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___16958);

return statearr_16813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(__16955,c__16389__auto___16958,G__16786_16956,n__7492__auto___16954,jobs,results,process,async))
);


break;
case "async":
var c__16389__auto___16967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16955,c__16389__auto___16967,G__16786_16956,n__7492__auto___16954,jobs,results,process,async){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (__16955,c__16389__auto___16967,G__16786_16956,n__7492__auto___16954,jobs,results,process,async){
return (function (state_16826){
var state_val_16827 = (state_16826[(1)]);
if((state_val_16827 === (1))){
var state_16826__$1 = state_16826;
var statearr_16828_16968 = state_16826__$1;
(statearr_16828_16968[(2)] = null);

(statearr_16828_16968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16827 === (2))){
var state_16826__$1 = state_16826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16826__$1,(4),jobs);
} else {
if((state_val_16827 === (3))){
var inst_16824 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16826__$1,inst_16824);
} else {
if((state_val_16827 === (4))){
var inst_16816 = (state_16826[(2)]);
var inst_16817 = async(inst_16816);
var state_16826__$1 = state_16826;
if(cljs.core.truth_(inst_16817)){
var statearr_16829_16969 = state_16826__$1;
(statearr_16829_16969[(1)] = (5));

} else {
var statearr_16830_16970 = state_16826__$1;
(statearr_16830_16970[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16827 === (5))){
var state_16826__$1 = state_16826;
var statearr_16831_16971 = state_16826__$1;
(statearr_16831_16971[(2)] = null);

(statearr_16831_16971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16827 === (6))){
var state_16826__$1 = state_16826;
var statearr_16832_16972 = state_16826__$1;
(statearr_16832_16972[(2)] = null);

(statearr_16832_16972[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16827 === (7))){
var inst_16822 = (state_16826[(2)]);
var state_16826__$1 = state_16826;
var statearr_16833_16973 = state_16826__$1;
(statearr_16833_16973[(2)] = inst_16822);

(statearr_16833_16973[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16955,c__16389__auto___16967,G__16786_16956,n__7492__auto___16954,jobs,results,process,async))
;
return ((function (__16955,switch__16275__auto__,c__16389__auto___16967,G__16786_16956,n__7492__auto___16954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0 = (function (){
var statearr_16837 = [null,null,null,null,null,null,null];
(statearr_16837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__);

(statearr_16837[(1)] = (1));

return statearr_16837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1 = (function (state_16826){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_16826);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e16838){if((e16838 instanceof Object)){
var ex__16279__auto__ = e16838;
var statearr_16839_16974 = state_16826;
(statearr_16839_16974[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16826);

return cljs.core.cst$kw$recur;
} else {
throw e16838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__16975 = state_16826;
state_16826 = G__16975;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = function(state_16826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1.call(this,state_16826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__;
})()
;})(__16955,switch__16275__auto__,c__16389__auto___16967,G__16786_16956,n__7492__auto___16954,jobs,results,process,async))
})();
var state__16391__auto__ = (function (){var statearr_16840 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_16840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___16967);

return statearr_16840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(__16955,c__16389__auto___16967,G__16786_16956,n__7492__auto___16954,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16976 = (__16955 + (1));
__16955 = G__16976;
continue;
} else {
}
break;
}

var c__16389__auto___16977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___16977,jobs,results,process,async){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___16977,jobs,results,process,async){
return (function (state_16862){
var state_val_16863 = (state_16862[(1)]);
if((state_val_16863 === (1))){
var state_16862__$1 = state_16862;
var statearr_16864_16978 = state_16862__$1;
(statearr_16864_16978[(2)] = null);

(statearr_16864_16978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16863 === (2))){
var state_16862__$1 = state_16862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16862__$1,(4),from);
} else {
if((state_val_16863 === (3))){
var inst_16860 = (state_16862[(2)]);
var state_16862__$1 = state_16862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16862__$1,inst_16860);
} else {
if((state_val_16863 === (4))){
var inst_16843 = (state_16862[(7)]);
var inst_16843__$1 = (state_16862[(2)]);
var inst_16844 = (inst_16843__$1 == null);
var state_16862__$1 = (function (){var statearr_16865 = state_16862;
(statearr_16865[(7)] = inst_16843__$1);

return statearr_16865;
})();
if(cljs.core.truth_(inst_16844)){
var statearr_16866_16979 = state_16862__$1;
(statearr_16866_16979[(1)] = (5));

} else {
var statearr_16867_16980 = state_16862__$1;
(statearr_16867_16980[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16863 === (5))){
var inst_16846 = cljs.core.async.close_BANG_(jobs);
var state_16862__$1 = state_16862;
var statearr_16868_16981 = state_16862__$1;
(statearr_16868_16981[(2)] = inst_16846);

(statearr_16868_16981[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16863 === (6))){
var inst_16848 = (state_16862[(8)]);
var inst_16843 = (state_16862[(7)]);
var inst_16848__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16850 = [inst_16843,inst_16848__$1];
var inst_16851 = (new cljs.core.PersistentVector(null,2,(5),inst_16849,inst_16850,null));
var state_16862__$1 = (function (){var statearr_16869 = state_16862;
(statearr_16869[(8)] = inst_16848__$1);

return statearr_16869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16862__$1,(8),jobs,inst_16851);
} else {
if((state_val_16863 === (7))){
var inst_16858 = (state_16862[(2)]);
var state_16862__$1 = state_16862;
var statearr_16870_16982 = state_16862__$1;
(statearr_16870_16982[(2)] = inst_16858);

(statearr_16870_16982[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16863 === (8))){
var inst_16848 = (state_16862[(8)]);
var inst_16853 = (state_16862[(2)]);
var state_16862__$1 = (function (){var statearr_16871 = state_16862;
(statearr_16871[(9)] = inst_16853);

return statearr_16871;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16862__$1,(9),results,inst_16848);
} else {
if((state_val_16863 === (9))){
var inst_16855 = (state_16862[(2)]);
var state_16862__$1 = (function (){var statearr_16872 = state_16862;
(statearr_16872[(10)] = inst_16855);

return statearr_16872;
})();
var statearr_16873_16983 = state_16862__$1;
(statearr_16873_16983[(2)] = null);

(statearr_16873_16983[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___16977,jobs,results,process,async))
;
return ((function (switch__16275__auto__,c__16389__auto___16977,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0 = (function (){
var statearr_16877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__);

(statearr_16877[(1)] = (1));

return statearr_16877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1 = (function (state_16862){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_16862);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e16878){if((e16878 instanceof Object)){
var ex__16279__auto__ = e16878;
var statearr_16879_16984 = state_16862;
(statearr_16879_16984[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16862);

return cljs.core.cst$kw$recur;
} else {
throw e16878;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__16985 = state_16862;
state_16862 = G__16985;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = function(state_16862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1.call(this,state_16862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___16977,jobs,results,process,async))
})();
var state__16391__auto__ = (function (){var statearr_16880 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_16880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___16977);

return statearr_16880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___16977,jobs,results,process,async))
);


var c__16389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto__,jobs,results,process,async){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto__,jobs,results,process,async){
return (function (state_16918){
var state_val_16919 = (state_16918[(1)]);
if((state_val_16919 === (7))){
var inst_16914 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_16920_16986 = state_16918__$1;
(statearr_16920_16986[(2)] = inst_16914);

(statearr_16920_16986[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (20))){
var state_16918__$1 = state_16918;
var statearr_16921_16987 = state_16918__$1;
(statearr_16921_16987[(2)] = null);

(statearr_16921_16987[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (1))){
var state_16918__$1 = state_16918;
var statearr_16922_16988 = state_16918__$1;
(statearr_16922_16988[(2)] = null);

(statearr_16922_16988[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (4))){
var inst_16883 = (state_16918[(7)]);
var inst_16883__$1 = (state_16918[(2)]);
var inst_16884 = (inst_16883__$1 == null);
var state_16918__$1 = (function (){var statearr_16923 = state_16918;
(statearr_16923[(7)] = inst_16883__$1);

return statearr_16923;
})();
if(cljs.core.truth_(inst_16884)){
var statearr_16924_16989 = state_16918__$1;
(statearr_16924_16989[(1)] = (5));

} else {
var statearr_16925_16990 = state_16918__$1;
(statearr_16925_16990[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (15))){
var inst_16896 = (state_16918[(8)]);
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16918__$1,(18),to,inst_16896);
} else {
if((state_val_16919 === (21))){
var inst_16909 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_16926_16991 = state_16918__$1;
(statearr_16926_16991[(2)] = inst_16909);

(statearr_16926_16991[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (13))){
var inst_16911 = (state_16918[(2)]);
var state_16918__$1 = (function (){var statearr_16927 = state_16918;
(statearr_16927[(9)] = inst_16911);

return statearr_16927;
})();
var statearr_16928_16992 = state_16918__$1;
(statearr_16928_16992[(2)] = null);

(statearr_16928_16992[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (6))){
var inst_16883 = (state_16918[(7)]);
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16918__$1,(11),inst_16883);
} else {
if((state_val_16919 === (17))){
var inst_16904 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
if(cljs.core.truth_(inst_16904)){
var statearr_16929_16993 = state_16918__$1;
(statearr_16929_16993[(1)] = (19));

} else {
var statearr_16930_16994 = state_16918__$1;
(statearr_16930_16994[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (3))){
var inst_16916 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16918__$1,inst_16916);
} else {
if((state_val_16919 === (12))){
var inst_16893 = (state_16918[(10)]);
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16918__$1,(14),inst_16893);
} else {
if((state_val_16919 === (2))){
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16918__$1,(4),results);
} else {
if((state_val_16919 === (19))){
var state_16918__$1 = state_16918;
var statearr_16931_16995 = state_16918__$1;
(statearr_16931_16995[(2)] = null);

(statearr_16931_16995[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (11))){
var inst_16893 = (state_16918[(2)]);
var state_16918__$1 = (function (){var statearr_16932 = state_16918;
(statearr_16932[(10)] = inst_16893);

return statearr_16932;
})();
var statearr_16933_16996 = state_16918__$1;
(statearr_16933_16996[(2)] = null);

(statearr_16933_16996[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (9))){
var state_16918__$1 = state_16918;
var statearr_16934_16997 = state_16918__$1;
(statearr_16934_16997[(2)] = null);

(statearr_16934_16997[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (5))){
var state_16918__$1 = state_16918;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16935_16998 = state_16918__$1;
(statearr_16935_16998[(1)] = (8));

} else {
var statearr_16936_16999 = state_16918__$1;
(statearr_16936_16999[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (14))){
var inst_16898 = (state_16918[(11)]);
var inst_16896 = (state_16918[(8)]);
var inst_16896__$1 = (state_16918[(2)]);
var inst_16897 = (inst_16896__$1 == null);
var inst_16898__$1 = cljs.core.not(inst_16897);
var state_16918__$1 = (function (){var statearr_16937 = state_16918;
(statearr_16937[(11)] = inst_16898__$1);

(statearr_16937[(8)] = inst_16896__$1);

return statearr_16937;
})();
if(inst_16898__$1){
var statearr_16938_17000 = state_16918__$1;
(statearr_16938_17000[(1)] = (15));

} else {
var statearr_16939_17001 = state_16918__$1;
(statearr_16939_17001[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (16))){
var inst_16898 = (state_16918[(11)]);
var state_16918__$1 = state_16918;
var statearr_16940_17002 = state_16918__$1;
(statearr_16940_17002[(2)] = inst_16898);

(statearr_16940_17002[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (10))){
var inst_16890 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_16941_17003 = state_16918__$1;
(statearr_16941_17003[(2)] = inst_16890);

(statearr_16941_17003[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (18))){
var inst_16901 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_16942_17004 = state_16918__$1;
(statearr_16942_17004[(2)] = inst_16901);

(statearr_16942_17004[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16919 === (8))){
var inst_16887 = cljs.core.async.close_BANG_(to);
var state_16918__$1 = state_16918;
var statearr_16943_17005 = state_16918__$1;
(statearr_16943_17005[(2)] = inst_16887);

(statearr_16943_17005[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto__,jobs,results,process,async))
;
return ((function (switch__16275__auto__,c__16389__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0 = (function (){
var statearr_16947 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__);

(statearr_16947[(1)] = (1));

return statearr_16947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1 = (function (state_16918){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_16918);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e16948){if((e16948 instanceof Object)){
var ex__16279__auto__ = e16948;
var statearr_16949_17006 = state_16918;
(statearr_16949_17006[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16918);

return cljs.core.cst$kw$recur;
} else {
throw e16948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__17007 = state_16918;
state_16918 = G__17007;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__ = function(state_16918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1.call(this,state_16918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto__,jobs,results,process,async))
})();
var state__16391__auto__ = (function (){var statearr_16950 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_16950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto__);

return statearr_16950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto__,jobs,results,process,async))
);

return c__16389__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args17008 = [];
var len__7652__auto___17011 = arguments.length;
var i__7653__auto___17012 = (0);
while(true){
if((i__7653__auto___17012 < len__7652__auto___17011)){
args17008.push((arguments[i__7653__auto___17012]));

var G__17013 = (i__7653__auto___17012 + (1));
i__7653__auto___17012 = G__17013;
continue;
} else {
}
break;
}

var G__17010 = args17008.length;
switch (G__17010) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17008.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args17015 = [];
var len__7652__auto___17018 = arguments.length;
var i__7653__auto___17019 = (0);
while(true){
if((i__7653__auto___17019 < len__7652__auto___17018)){
args17015.push((arguments[i__7653__auto___17019]));

var G__17020 = (i__7653__auto___17019 + (1));
i__7653__auto___17019 = G__17020;
continue;
} else {
}
break;
}

var G__17017 = args17015.length;
switch (G__17017) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17015.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args17022 = [];
var len__7652__auto___17075 = arguments.length;
var i__7653__auto___17076 = (0);
while(true){
if((i__7653__auto___17076 < len__7652__auto___17075)){
args17022.push((arguments[i__7653__auto___17076]));

var G__17077 = (i__7653__auto___17076 + (1));
i__7653__auto___17076 = G__17077;
continue;
} else {
}
break;
}

var G__17024 = args17022.length;
switch (G__17024) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17022.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16389__auto___17079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___17079,tc,fc){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___17079,tc,fc){
return (function (state_17050){
var state_val_17051 = (state_17050[(1)]);
if((state_val_17051 === (7))){
var inst_17046 = (state_17050[(2)]);
var state_17050__$1 = state_17050;
var statearr_17052_17080 = state_17050__$1;
(statearr_17052_17080[(2)] = inst_17046);

(statearr_17052_17080[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (1))){
var state_17050__$1 = state_17050;
var statearr_17053_17081 = state_17050__$1;
(statearr_17053_17081[(2)] = null);

(statearr_17053_17081[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (4))){
var inst_17027 = (state_17050[(7)]);
var inst_17027__$1 = (state_17050[(2)]);
var inst_17028 = (inst_17027__$1 == null);
var state_17050__$1 = (function (){var statearr_17054 = state_17050;
(statearr_17054[(7)] = inst_17027__$1);

return statearr_17054;
})();
if(cljs.core.truth_(inst_17028)){
var statearr_17055_17082 = state_17050__$1;
(statearr_17055_17082[(1)] = (5));

} else {
var statearr_17056_17083 = state_17050__$1;
(statearr_17056_17083[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (13))){
var state_17050__$1 = state_17050;
var statearr_17057_17084 = state_17050__$1;
(statearr_17057_17084[(2)] = null);

(statearr_17057_17084[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (6))){
var inst_17027 = (state_17050[(7)]);
var inst_17033 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17027) : p.call(null,inst_17027));
var state_17050__$1 = state_17050;
if(cljs.core.truth_(inst_17033)){
var statearr_17058_17085 = state_17050__$1;
(statearr_17058_17085[(1)] = (9));

} else {
var statearr_17059_17086 = state_17050__$1;
(statearr_17059_17086[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (3))){
var inst_17048 = (state_17050[(2)]);
var state_17050__$1 = state_17050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17050__$1,inst_17048);
} else {
if((state_val_17051 === (12))){
var state_17050__$1 = state_17050;
var statearr_17060_17087 = state_17050__$1;
(statearr_17060_17087[(2)] = null);

(statearr_17060_17087[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (2))){
var state_17050__$1 = state_17050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17050__$1,(4),ch);
} else {
if((state_val_17051 === (11))){
var inst_17027 = (state_17050[(7)]);
var inst_17037 = (state_17050[(2)]);
var state_17050__$1 = state_17050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17050__$1,(8),inst_17037,inst_17027);
} else {
if((state_val_17051 === (9))){
var state_17050__$1 = state_17050;
var statearr_17061_17088 = state_17050__$1;
(statearr_17061_17088[(2)] = tc);

(statearr_17061_17088[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (5))){
var inst_17030 = cljs.core.async.close_BANG_(tc);
var inst_17031 = cljs.core.async.close_BANG_(fc);
var state_17050__$1 = (function (){var statearr_17062 = state_17050;
(statearr_17062[(8)] = inst_17030);

return statearr_17062;
})();
var statearr_17063_17089 = state_17050__$1;
(statearr_17063_17089[(2)] = inst_17031);

(statearr_17063_17089[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (14))){
var inst_17044 = (state_17050[(2)]);
var state_17050__$1 = state_17050;
var statearr_17064_17090 = state_17050__$1;
(statearr_17064_17090[(2)] = inst_17044);

(statearr_17064_17090[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (10))){
var state_17050__$1 = state_17050;
var statearr_17065_17091 = state_17050__$1;
(statearr_17065_17091[(2)] = fc);

(statearr_17065_17091[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17051 === (8))){
var inst_17039 = (state_17050[(2)]);
var state_17050__$1 = state_17050;
if(cljs.core.truth_(inst_17039)){
var statearr_17066_17092 = state_17050__$1;
(statearr_17066_17092[(1)] = (12));

} else {
var statearr_17067_17093 = state_17050__$1;
(statearr_17067_17093[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___17079,tc,fc))
;
return ((function (switch__16275__auto__,c__16389__auto___17079,tc,fc){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_17071 = [null,null,null,null,null,null,null,null,null];
(statearr_17071[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_17071[(1)] = (1));

return statearr_17071;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_17050){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_17050);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e17072){if((e17072 instanceof Object)){
var ex__16279__auto__ = e17072;
var statearr_17073_17094 = state_17050;
(statearr_17073_17094[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17050);

return cljs.core.cst$kw$recur;
} else {
throw e17072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__17095 = state_17050;
state_17050 = G__17095;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_17050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_17050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___17079,tc,fc))
})();
var state__16391__auto__ = (function (){var statearr_17074 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_17074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___17079);

return statearr_17074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___17079,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto__){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto__){
return (function (state_17159){
var state_val_17160 = (state_17159[(1)]);
if((state_val_17160 === (7))){
var inst_17155 = (state_17159[(2)]);
var state_17159__$1 = state_17159;
var statearr_17161_17182 = state_17159__$1;
(statearr_17161_17182[(2)] = inst_17155);

(statearr_17161_17182[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17160 === (1))){
var inst_17139 = init;
var state_17159__$1 = (function (){var statearr_17162 = state_17159;
(statearr_17162[(7)] = inst_17139);

return statearr_17162;
})();
var statearr_17163_17183 = state_17159__$1;
(statearr_17163_17183[(2)] = null);

(statearr_17163_17183[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17160 === (4))){
var inst_17142 = (state_17159[(8)]);
var inst_17142__$1 = (state_17159[(2)]);
var inst_17143 = (inst_17142__$1 == null);
var state_17159__$1 = (function (){var statearr_17164 = state_17159;
(statearr_17164[(8)] = inst_17142__$1);

return statearr_17164;
})();
if(cljs.core.truth_(inst_17143)){
var statearr_17165_17184 = state_17159__$1;
(statearr_17165_17184[(1)] = (5));

} else {
var statearr_17166_17185 = state_17159__$1;
(statearr_17166_17185[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17160 === (6))){
var inst_17146 = (state_17159[(9)]);
var inst_17139 = (state_17159[(7)]);
var inst_17142 = (state_17159[(8)]);
var inst_17146__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17139,inst_17142) : f.call(null,inst_17139,inst_17142));
var inst_17147 = cljs.core.reduced_QMARK_(inst_17146__$1);
var state_17159__$1 = (function (){var statearr_17167 = state_17159;
(statearr_17167[(9)] = inst_17146__$1);

return statearr_17167;
})();
if(inst_17147){
var statearr_17168_17186 = state_17159__$1;
(statearr_17168_17186[(1)] = (8));

} else {
var statearr_17169_17187 = state_17159__$1;
(statearr_17169_17187[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17160 === (3))){
var inst_17157 = (state_17159[(2)]);
var state_17159__$1 = state_17159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17159__$1,inst_17157);
} else {
if((state_val_17160 === (2))){
var state_17159__$1 = state_17159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17159__$1,(4),ch);
} else {
if((state_val_17160 === (9))){
var inst_17146 = (state_17159[(9)]);
var inst_17139 = inst_17146;
var state_17159__$1 = (function (){var statearr_17170 = state_17159;
(statearr_17170[(7)] = inst_17139);

return statearr_17170;
})();
var statearr_17171_17188 = state_17159__$1;
(statearr_17171_17188[(2)] = null);

(statearr_17171_17188[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17160 === (5))){
var inst_17139 = (state_17159[(7)]);
var state_17159__$1 = state_17159;
var statearr_17172_17189 = state_17159__$1;
(statearr_17172_17189[(2)] = inst_17139);

(statearr_17172_17189[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17160 === (10))){
var inst_17153 = (state_17159[(2)]);
var state_17159__$1 = state_17159;
var statearr_17173_17190 = state_17159__$1;
(statearr_17173_17190[(2)] = inst_17153);

(statearr_17173_17190[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17160 === (8))){
var inst_17146 = (state_17159[(9)]);
var inst_17149 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_17146) : cljs.core.deref.call(null,inst_17146));
var state_17159__$1 = state_17159;
var statearr_17174_17191 = state_17159__$1;
(statearr_17174_17191[(2)] = inst_17149);

(statearr_17174_17191[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto__))
;
return ((function (switch__16275__auto__,c__16389__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16276__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16276__auto____0 = (function (){
var statearr_17178 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17178[(0)] = cljs$core$async$reduce_$_state_machine__16276__auto__);

(statearr_17178[(1)] = (1));

return statearr_17178;
});
var cljs$core$async$reduce_$_state_machine__16276__auto____1 = (function (state_17159){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_17159);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e17179){if((e17179 instanceof Object)){
var ex__16279__auto__ = e17179;
var statearr_17180_17192 = state_17159;
(statearr_17180_17192[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17159);

return cljs.core.cst$kw$recur;
} else {
throw e17179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__17193 = state_17159;
state_17159 = G__17193;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16276__auto__ = function(state_17159){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16276__auto____1.call(this,state_17159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16276__auto____0;
cljs$core$async$reduce_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16276__auto____1;
return cljs$core$async$reduce_$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto__))
})();
var state__16391__auto__ = (function (){var statearr_17181 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_17181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto__);

return statearr_17181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto__))
);

return c__16389__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args17194 = [];
var len__7652__auto___17246 = arguments.length;
var i__7653__auto___17247 = (0);
while(true){
if((i__7653__auto___17247 < len__7652__auto___17246)){
args17194.push((arguments[i__7653__auto___17247]));

var G__17248 = (i__7653__auto___17247 + (1));
i__7653__auto___17247 = G__17248;
continue;
} else {
}
break;
}

var G__17196 = args17194.length;
switch (G__17196) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17194.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto__){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto__){
return (function (state_17221){
var state_val_17222 = (state_17221[(1)]);
if((state_val_17222 === (7))){
var inst_17203 = (state_17221[(2)]);
var state_17221__$1 = state_17221;
var statearr_17223_17250 = state_17221__$1;
(statearr_17223_17250[(2)] = inst_17203);

(statearr_17223_17250[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (1))){
var inst_17197 = cljs.core.seq(coll);
var inst_17198 = inst_17197;
var state_17221__$1 = (function (){var statearr_17224 = state_17221;
(statearr_17224[(7)] = inst_17198);

return statearr_17224;
})();
var statearr_17225_17251 = state_17221__$1;
(statearr_17225_17251[(2)] = null);

(statearr_17225_17251[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (4))){
var inst_17198 = (state_17221[(7)]);
var inst_17201 = cljs.core.first(inst_17198);
var state_17221__$1 = state_17221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17221__$1,(7),ch,inst_17201);
} else {
if((state_val_17222 === (13))){
var inst_17215 = (state_17221[(2)]);
var state_17221__$1 = state_17221;
var statearr_17226_17252 = state_17221__$1;
(statearr_17226_17252[(2)] = inst_17215);

(statearr_17226_17252[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (6))){
var inst_17206 = (state_17221[(2)]);
var state_17221__$1 = state_17221;
if(cljs.core.truth_(inst_17206)){
var statearr_17227_17253 = state_17221__$1;
(statearr_17227_17253[(1)] = (8));

} else {
var statearr_17228_17254 = state_17221__$1;
(statearr_17228_17254[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (3))){
var inst_17219 = (state_17221[(2)]);
var state_17221__$1 = state_17221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17221__$1,inst_17219);
} else {
if((state_val_17222 === (12))){
var state_17221__$1 = state_17221;
var statearr_17229_17255 = state_17221__$1;
(statearr_17229_17255[(2)] = null);

(statearr_17229_17255[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (2))){
var inst_17198 = (state_17221[(7)]);
var state_17221__$1 = state_17221;
if(cljs.core.truth_(inst_17198)){
var statearr_17230_17256 = state_17221__$1;
(statearr_17230_17256[(1)] = (4));

} else {
var statearr_17231_17257 = state_17221__$1;
(statearr_17231_17257[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (11))){
var inst_17212 = cljs.core.async.close_BANG_(ch);
var state_17221__$1 = state_17221;
var statearr_17232_17258 = state_17221__$1;
(statearr_17232_17258[(2)] = inst_17212);

(statearr_17232_17258[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (9))){
var state_17221__$1 = state_17221;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17233_17259 = state_17221__$1;
(statearr_17233_17259[(1)] = (11));

} else {
var statearr_17234_17260 = state_17221__$1;
(statearr_17234_17260[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (5))){
var inst_17198 = (state_17221[(7)]);
var state_17221__$1 = state_17221;
var statearr_17235_17261 = state_17221__$1;
(statearr_17235_17261[(2)] = inst_17198);

(statearr_17235_17261[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (10))){
var inst_17217 = (state_17221[(2)]);
var state_17221__$1 = state_17221;
var statearr_17236_17262 = state_17221__$1;
(statearr_17236_17262[(2)] = inst_17217);

(statearr_17236_17262[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17222 === (8))){
var inst_17198 = (state_17221[(7)]);
var inst_17208 = cljs.core.next(inst_17198);
var inst_17198__$1 = inst_17208;
var state_17221__$1 = (function (){var statearr_17237 = state_17221;
(statearr_17237[(7)] = inst_17198__$1);

return statearr_17237;
})();
var statearr_17238_17263 = state_17221__$1;
(statearr_17238_17263[(2)] = null);

(statearr_17238_17263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto__))
;
return ((function (switch__16275__auto__,c__16389__auto__){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_17242 = [null,null,null,null,null,null,null,null];
(statearr_17242[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_17242[(1)] = (1));

return statearr_17242;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_17221){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_17221);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e17243){if((e17243 instanceof Object)){
var ex__16279__auto__ = e17243;
var statearr_17244_17264 = state_17221;
(statearr_17244_17264[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17221);

return cljs.core.cst$kw$recur;
} else {
throw e17243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__17265 = state_17221;
state_17221 = G__17265;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_17221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_17221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto__))
})();
var state__16391__auto__ = (function (){var statearr_17245 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_17245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto__);

return statearr_17245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto__))
);

return c__16389__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7240__auto__ = (((_ == null))?null:_);
var m__7241__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7241__auto__.call(null,_));
} else {
var m__7241__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7241__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7241__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7241__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7241__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7241__auto__.call(null,m,ch));
} else {
var m__7241__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7241__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7241__auto__.call(null,m));
} else {
var m__7241__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7241__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__17494 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17494) : cljs.core.atom.call(null,G__17494));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17495 = (function (mult,ch,cs,meta17496){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17496 = meta17496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17497,meta17496__$1){
var self__ = this;
var _17497__$1 = this;
return (new cljs.core.async.t_cljs$core$async17495(self__.mult,self__.ch,self__.cs,meta17496__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17497){
var self__ = this;
var _17497__$1 = this;
return self__.meta17496;
});})(cs))
;

cljs.core.async.t_cljs$core$async17495.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17495.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async17495.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17495.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17495.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17498_17722 = self__.cs;
var G__17499_17723 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17498_17722,G__17499_17723) : cljs.core.reset_BANG_.call(null,G__17498_17722,G__17499_17723));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17495.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17496], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17495";

cljs.core.async.t_cljs$core$async17495.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async17495");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17495 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17495(mult__$1,ch__$1,cs__$1,meta17496){
return (new cljs.core.async.t_cljs$core$async17495(mult__$1,ch__$1,cs__$1,meta17496));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17495(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16389__auto___17724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___17724,cs,m,dchan,dctr,done){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___17724,cs,m,dchan,dctr,done){
return (function (state_17634){
var state_val_17635 = (state_17634[(1)]);
if((state_val_17635 === (7))){
var inst_17630 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
var statearr_17636_17725 = state_17634__$1;
(statearr_17636_17725[(2)] = inst_17630);

(statearr_17636_17725[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (20))){
var inst_17533 = (state_17634[(7)]);
var inst_17545 = cljs.core.first(inst_17533);
var inst_17546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17545,(0),null);
var inst_17547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17545,(1),null);
var state_17634__$1 = (function (){var statearr_17637 = state_17634;
(statearr_17637[(8)] = inst_17546);

return statearr_17637;
})();
if(cljs.core.truth_(inst_17547)){
var statearr_17638_17726 = state_17634__$1;
(statearr_17638_17726[(1)] = (22));

} else {
var statearr_17639_17727 = state_17634__$1;
(statearr_17639_17727[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (27))){
var inst_17582 = (state_17634[(9)]);
var inst_17575 = (state_17634[(10)]);
var inst_17577 = (state_17634[(11)]);
var inst_17502 = (state_17634[(12)]);
var inst_17582__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17575,inst_17577);
var inst_17583 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17582__$1,inst_17502,done);
var state_17634__$1 = (function (){var statearr_17640 = state_17634;
(statearr_17640[(9)] = inst_17582__$1);

return statearr_17640;
})();
if(cljs.core.truth_(inst_17583)){
var statearr_17641_17728 = state_17634__$1;
(statearr_17641_17728[(1)] = (30));

} else {
var statearr_17642_17729 = state_17634__$1;
(statearr_17642_17729[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (1))){
var state_17634__$1 = state_17634;
var statearr_17643_17730 = state_17634__$1;
(statearr_17643_17730[(2)] = null);

(statearr_17643_17730[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (24))){
var inst_17533 = (state_17634[(7)]);
var inst_17552 = (state_17634[(2)]);
var inst_17553 = cljs.core.next(inst_17533);
var inst_17511 = inst_17553;
var inst_17512 = null;
var inst_17513 = (0);
var inst_17514 = (0);
var state_17634__$1 = (function (){var statearr_17644 = state_17634;
(statearr_17644[(13)] = inst_17514);

(statearr_17644[(14)] = inst_17552);

(statearr_17644[(15)] = inst_17511);

(statearr_17644[(16)] = inst_17512);

(statearr_17644[(17)] = inst_17513);

return statearr_17644;
})();
var statearr_17645_17731 = state_17634__$1;
(statearr_17645_17731[(2)] = null);

(statearr_17645_17731[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (39))){
var state_17634__$1 = state_17634;
var statearr_17649_17732 = state_17634__$1;
(statearr_17649_17732[(2)] = null);

(statearr_17649_17732[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (4))){
var inst_17502 = (state_17634[(12)]);
var inst_17502__$1 = (state_17634[(2)]);
var inst_17503 = (inst_17502__$1 == null);
var state_17634__$1 = (function (){var statearr_17650 = state_17634;
(statearr_17650[(12)] = inst_17502__$1);

return statearr_17650;
})();
if(cljs.core.truth_(inst_17503)){
var statearr_17651_17733 = state_17634__$1;
(statearr_17651_17733[(1)] = (5));

} else {
var statearr_17652_17734 = state_17634__$1;
(statearr_17652_17734[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (15))){
var inst_17514 = (state_17634[(13)]);
var inst_17511 = (state_17634[(15)]);
var inst_17512 = (state_17634[(16)]);
var inst_17513 = (state_17634[(17)]);
var inst_17529 = (state_17634[(2)]);
var inst_17530 = (inst_17514 + (1));
var tmp17646 = inst_17511;
var tmp17647 = inst_17512;
var tmp17648 = inst_17513;
var inst_17511__$1 = tmp17646;
var inst_17512__$1 = tmp17647;
var inst_17513__$1 = tmp17648;
var inst_17514__$1 = inst_17530;
var state_17634__$1 = (function (){var statearr_17653 = state_17634;
(statearr_17653[(13)] = inst_17514__$1);

(statearr_17653[(18)] = inst_17529);

(statearr_17653[(15)] = inst_17511__$1);

(statearr_17653[(16)] = inst_17512__$1);

(statearr_17653[(17)] = inst_17513__$1);

return statearr_17653;
})();
var statearr_17654_17735 = state_17634__$1;
(statearr_17654_17735[(2)] = null);

(statearr_17654_17735[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (21))){
var inst_17556 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
var statearr_17658_17736 = state_17634__$1;
(statearr_17658_17736[(2)] = inst_17556);

(statearr_17658_17736[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (31))){
var inst_17582 = (state_17634[(9)]);
var inst_17586 = done(null);
var inst_17587 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17582);
var state_17634__$1 = (function (){var statearr_17659 = state_17634;
(statearr_17659[(19)] = inst_17586);

return statearr_17659;
})();
var statearr_17660_17737 = state_17634__$1;
(statearr_17660_17737[(2)] = inst_17587);

(statearr_17660_17737[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (32))){
var inst_17576 = (state_17634[(20)]);
var inst_17575 = (state_17634[(10)]);
var inst_17577 = (state_17634[(11)]);
var inst_17574 = (state_17634[(21)]);
var inst_17589 = (state_17634[(2)]);
var inst_17590 = (inst_17577 + (1));
var tmp17655 = inst_17576;
var tmp17656 = inst_17575;
var tmp17657 = inst_17574;
var inst_17574__$1 = tmp17657;
var inst_17575__$1 = tmp17656;
var inst_17576__$1 = tmp17655;
var inst_17577__$1 = inst_17590;
var state_17634__$1 = (function (){var statearr_17661 = state_17634;
(statearr_17661[(20)] = inst_17576__$1);

(statearr_17661[(22)] = inst_17589);

(statearr_17661[(10)] = inst_17575__$1);

(statearr_17661[(11)] = inst_17577__$1);

(statearr_17661[(21)] = inst_17574__$1);

return statearr_17661;
})();
var statearr_17662_17738 = state_17634__$1;
(statearr_17662_17738[(2)] = null);

(statearr_17662_17738[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (40))){
var inst_17602 = (state_17634[(23)]);
var inst_17606 = done(null);
var inst_17607 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17602);
var state_17634__$1 = (function (){var statearr_17663 = state_17634;
(statearr_17663[(24)] = inst_17606);

return statearr_17663;
})();
var statearr_17664_17739 = state_17634__$1;
(statearr_17664_17739[(2)] = inst_17607);

(statearr_17664_17739[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (33))){
var inst_17593 = (state_17634[(25)]);
var inst_17595 = cljs.core.chunked_seq_QMARK_(inst_17593);
var state_17634__$1 = state_17634;
if(inst_17595){
var statearr_17665_17740 = state_17634__$1;
(statearr_17665_17740[(1)] = (36));

} else {
var statearr_17666_17741 = state_17634__$1;
(statearr_17666_17741[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (13))){
var inst_17523 = (state_17634[(26)]);
var inst_17526 = cljs.core.async.close_BANG_(inst_17523);
var state_17634__$1 = state_17634;
var statearr_17667_17742 = state_17634__$1;
(statearr_17667_17742[(2)] = inst_17526);

(statearr_17667_17742[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (22))){
var inst_17546 = (state_17634[(8)]);
var inst_17549 = cljs.core.async.close_BANG_(inst_17546);
var state_17634__$1 = state_17634;
var statearr_17668_17743 = state_17634__$1;
(statearr_17668_17743[(2)] = inst_17549);

(statearr_17668_17743[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (36))){
var inst_17593 = (state_17634[(25)]);
var inst_17597 = cljs.core.chunk_first(inst_17593);
var inst_17598 = cljs.core.chunk_rest(inst_17593);
var inst_17599 = cljs.core.count(inst_17597);
var inst_17574 = inst_17598;
var inst_17575 = inst_17597;
var inst_17576 = inst_17599;
var inst_17577 = (0);
var state_17634__$1 = (function (){var statearr_17669 = state_17634;
(statearr_17669[(20)] = inst_17576);

(statearr_17669[(10)] = inst_17575);

(statearr_17669[(11)] = inst_17577);

(statearr_17669[(21)] = inst_17574);

return statearr_17669;
})();
var statearr_17670_17744 = state_17634__$1;
(statearr_17670_17744[(2)] = null);

(statearr_17670_17744[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (41))){
var inst_17593 = (state_17634[(25)]);
var inst_17609 = (state_17634[(2)]);
var inst_17610 = cljs.core.next(inst_17593);
var inst_17574 = inst_17610;
var inst_17575 = null;
var inst_17576 = (0);
var inst_17577 = (0);
var state_17634__$1 = (function (){var statearr_17671 = state_17634;
(statearr_17671[(20)] = inst_17576);

(statearr_17671[(10)] = inst_17575);

(statearr_17671[(11)] = inst_17577);

(statearr_17671[(27)] = inst_17609);

(statearr_17671[(21)] = inst_17574);

return statearr_17671;
})();
var statearr_17672_17745 = state_17634__$1;
(statearr_17672_17745[(2)] = null);

(statearr_17672_17745[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (43))){
var state_17634__$1 = state_17634;
var statearr_17673_17746 = state_17634__$1;
(statearr_17673_17746[(2)] = null);

(statearr_17673_17746[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (29))){
var inst_17618 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
var statearr_17674_17747 = state_17634__$1;
(statearr_17674_17747[(2)] = inst_17618);

(statearr_17674_17747[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (44))){
var inst_17627 = (state_17634[(2)]);
var state_17634__$1 = (function (){var statearr_17675 = state_17634;
(statearr_17675[(28)] = inst_17627);

return statearr_17675;
})();
var statearr_17676_17748 = state_17634__$1;
(statearr_17676_17748[(2)] = null);

(statearr_17676_17748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (6))){
var inst_17566 = (state_17634[(29)]);
var inst_17565 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17566__$1 = cljs.core.keys(inst_17565);
var inst_17567 = cljs.core.count(inst_17566__$1);
var inst_17568 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17567) : cljs.core.reset_BANG_.call(null,dctr,inst_17567));
var inst_17573 = cljs.core.seq(inst_17566__$1);
var inst_17574 = inst_17573;
var inst_17575 = null;
var inst_17576 = (0);
var inst_17577 = (0);
var state_17634__$1 = (function (){var statearr_17677 = state_17634;
(statearr_17677[(20)] = inst_17576);

(statearr_17677[(30)] = inst_17568);

(statearr_17677[(10)] = inst_17575);

(statearr_17677[(11)] = inst_17577);

(statearr_17677[(21)] = inst_17574);

(statearr_17677[(29)] = inst_17566__$1);

return statearr_17677;
})();
var statearr_17678_17749 = state_17634__$1;
(statearr_17678_17749[(2)] = null);

(statearr_17678_17749[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (28))){
var inst_17593 = (state_17634[(25)]);
var inst_17574 = (state_17634[(21)]);
var inst_17593__$1 = cljs.core.seq(inst_17574);
var state_17634__$1 = (function (){var statearr_17679 = state_17634;
(statearr_17679[(25)] = inst_17593__$1);

return statearr_17679;
})();
if(inst_17593__$1){
var statearr_17680_17750 = state_17634__$1;
(statearr_17680_17750[(1)] = (33));

} else {
var statearr_17681_17751 = state_17634__$1;
(statearr_17681_17751[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (25))){
var inst_17576 = (state_17634[(20)]);
var inst_17577 = (state_17634[(11)]);
var inst_17579 = (inst_17577 < inst_17576);
var inst_17580 = inst_17579;
var state_17634__$1 = state_17634;
if(cljs.core.truth_(inst_17580)){
var statearr_17682_17752 = state_17634__$1;
(statearr_17682_17752[(1)] = (27));

} else {
var statearr_17683_17753 = state_17634__$1;
(statearr_17683_17753[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (34))){
var state_17634__$1 = state_17634;
var statearr_17684_17754 = state_17634__$1;
(statearr_17684_17754[(2)] = null);

(statearr_17684_17754[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (17))){
var state_17634__$1 = state_17634;
var statearr_17685_17755 = state_17634__$1;
(statearr_17685_17755[(2)] = null);

(statearr_17685_17755[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (3))){
var inst_17632 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17634__$1,inst_17632);
} else {
if((state_val_17635 === (12))){
var inst_17561 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
var statearr_17686_17756 = state_17634__$1;
(statearr_17686_17756[(2)] = inst_17561);

(statearr_17686_17756[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (2))){
var state_17634__$1 = state_17634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17634__$1,(4),ch);
} else {
if((state_val_17635 === (23))){
var state_17634__$1 = state_17634;
var statearr_17687_17757 = state_17634__$1;
(statearr_17687_17757[(2)] = null);

(statearr_17687_17757[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (35))){
var inst_17616 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
var statearr_17688_17758 = state_17634__$1;
(statearr_17688_17758[(2)] = inst_17616);

(statearr_17688_17758[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (19))){
var inst_17533 = (state_17634[(7)]);
var inst_17537 = cljs.core.chunk_first(inst_17533);
var inst_17538 = cljs.core.chunk_rest(inst_17533);
var inst_17539 = cljs.core.count(inst_17537);
var inst_17511 = inst_17538;
var inst_17512 = inst_17537;
var inst_17513 = inst_17539;
var inst_17514 = (0);
var state_17634__$1 = (function (){var statearr_17689 = state_17634;
(statearr_17689[(13)] = inst_17514);

(statearr_17689[(15)] = inst_17511);

(statearr_17689[(16)] = inst_17512);

(statearr_17689[(17)] = inst_17513);

return statearr_17689;
})();
var statearr_17690_17759 = state_17634__$1;
(statearr_17690_17759[(2)] = null);

(statearr_17690_17759[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (11))){
var inst_17511 = (state_17634[(15)]);
var inst_17533 = (state_17634[(7)]);
var inst_17533__$1 = cljs.core.seq(inst_17511);
var state_17634__$1 = (function (){var statearr_17691 = state_17634;
(statearr_17691[(7)] = inst_17533__$1);

return statearr_17691;
})();
if(inst_17533__$1){
var statearr_17692_17760 = state_17634__$1;
(statearr_17692_17760[(1)] = (16));

} else {
var statearr_17693_17761 = state_17634__$1;
(statearr_17693_17761[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (9))){
var inst_17563 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
var statearr_17694_17762 = state_17634__$1;
(statearr_17694_17762[(2)] = inst_17563);

(statearr_17694_17762[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (5))){
var inst_17509 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17510 = cljs.core.seq(inst_17509);
var inst_17511 = inst_17510;
var inst_17512 = null;
var inst_17513 = (0);
var inst_17514 = (0);
var state_17634__$1 = (function (){var statearr_17695 = state_17634;
(statearr_17695[(13)] = inst_17514);

(statearr_17695[(15)] = inst_17511);

(statearr_17695[(16)] = inst_17512);

(statearr_17695[(17)] = inst_17513);

return statearr_17695;
})();
var statearr_17696_17763 = state_17634__$1;
(statearr_17696_17763[(2)] = null);

(statearr_17696_17763[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (14))){
var state_17634__$1 = state_17634;
var statearr_17697_17764 = state_17634__$1;
(statearr_17697_17764[(2)] = null);

(statearr_17697_17764[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (45))){
var inst_17624 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
var statearr_17698_17765 = state_17634__$1;
(statearr_17698_17765[(2)] = inst_17624);

(statearr_17698_17765[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (26))){
var inst_17566 = (state_17634[(29)]);
var inst_17620 = (state_17634[(2)]);
var inst_17621 = cljs.core.seq(inst_17566);
var state_17634__$1 = (function (){var statearr_17699 = state_17634;
(statearr_17699[(31)] = inst_17620);

return statearr_17699;
})();
if(inst_17621){
var statearr_17700_17766 = state_17634__$1;
(statearr_17700_17766[(1)] = (42));

} else {
var statearr_17701_17767 = state_17634__$1;
(statearr_17701_17767[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (16))){
var inst_17533 = (state_17634[(7)]);
var inst_17535 = cljs.core.chunked_seq_QMARK_(inst_17533);
var state_17634__$1 = state_17634;
if(inst_17535){
var statearr_17702_17768 = state_17634__$1;
(statearr_17702_17768[(1)] = (19));

} else {
var statearr_17703_17769 = state_17634__$1;
(statearr_17703_17769[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (38))){
var inst_17613 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
var statearr_17704_17770 = state_17634__$1;
(statearr_17704_17770[(2)] = inst_17613);

(statearr_17704_17770[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (30))){
var state_17634__$1 = state_17634;
var statearr_17705_17771 = state_17634__$1;
(statearr_17705_17771[(2)] = null);

(statearr_17705_17771[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (10))){
var inst_17514 = (state_17634[(13)]);
var inst_17512 = (state_17634[(16)]);
var inst_17522 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17512,inst_17514);
var inst_17523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17522,(0),null);
var inst_17524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17522,(1),null);
var state_17634__$1 = (function (){var statearr_17706 = state_17634;
(statearr_17706[(26)] = inst_17523);

return statearr_17706;
})();
if(cljs.core.truth_(inst_17524)){
var statearr_17707_17772 = state_17634__$1;
(statearr_17707_17772[(1)] = (13));

} else {
var statearr_17708_17773 = state_17634__$1;
(statearr_17708_17773[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (18))){
var inst_17559 = (state_17634[(2)]);
var state_17634__$1 = state_17634;
var statearr_17709_17774 = state_17634__$1;
(statearr_17709_17774[(2)] = inst_17559);

(statearr_17709_17774[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (42))){
var state_17634__$1 = state_17634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17634__$1,(45),dchan);
} else {
if((state_val_17635 === (37))){
var inst_17593 = (state_17634[(25)]);
var inst_17602 = (state_17634[(23)]);
var inst_17502 = (state_17634[(12)]);
var inst_17602__$1 = cljs.core.first(inst_17593);
var inst_17603 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17602__$1,inst_17502,done);
var state_17634__$1 = (function (){var statearr_17710 = state_17634;
(statearr_17710[(23)] = inst_17602__$1);

return statearr_17710;
})();
if(cljs.core.truth_(inst_17603)){
var statearr_17711_17775 = state_17634__$1;
(statearr_17711_17775[(1)] = (39));

} else {
var statearr_17712_17776 = state_17634__$1;
(statearr_17712_17776[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17635 === (8))){
var inst_17514 = (state_17634[(13)]);
var inst_17513 = (state_17634[(17)]);
var inst_17516 = (inst_17514 < inst_17513);
var inst_17517 = inst_17516;
var state_17634__$1 = state_17634;
if(cljs.core.truth_(inst_17517)){
var statearr_17713_17777 = state_17634__$1;
(statearr_17713_17777[(1)] = (10));

} else {
var statearr_17714_17778 = state_17634__$1;
(statearr_17714_17778[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___17724,cs,m,dchan,dctr,done))
;
return ((function (switch__16275__auto__,c__16389__auto___17724,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16276__auto__ = null;
var cljs$core$async$mult_$_state_machine__16276__auto____0 = (function (){
var statearr_17718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17718[(0)] = cljs$core$async$mult_$_state_machine__16276__auto__);

(statearr_17718[(1)] = (1));

return statearr_17718;
});
var cljs$core$async$mult_$_state_machine__16276__auto____1 = (function (state_17634){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_17634);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e17719){if((e17719 instanceof Object)){
var ex__16279__auto__ = e17719;
var statearr_17720_17779 = state_17634;
(statearr_17720_17779[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17634);

return cljs.core.cst$kw$recur;
} else {
throw e17719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__17780 = state_17634;
state_17634 = G__17780;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16276__auto__ = function(state_17634){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16276__auto____1.call(this,state_17634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16276__auto____0;
cljs$core$async$mult_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16276__auto____1;
return cljs$core$async$mult_$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___17724,cs,m,dchan,dctr,done))
})();
var state__16391__auto__ = (function (){var statearr_17721 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_17721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___17724);

return statearr_17721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___17724,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args17781 = [];
var len__7652__auto___17784 = arguments.length;
var i__7653__auto___17785 = (0);
while(true){
if((i__7653__auto___17785 < len__7652__auto___17784)){
args17781.push((arguments[i__7653__auto___17785]));

var G__17786 = (i__7653__auto___17785 + (1));
i__7653__auto___17785 = G__17786;
continue;
} else {
}
break;
}

var G__17783 = args17781.length;
switch (G__17783) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17781.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7241__auto__.call(null,m,ch));
} else {
var m__7241__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7241__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7241__auto__.call(null,m,ch));
} else {
var m__7241__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7241__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7241__auto__.call(null,m));
} else {
var m__7241__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7241__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7241__auto__.call(null,m,state_map));
} else {
var m__7241__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7241__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7240__auto__ = (((m == null))?null:m);
var m__7241__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7241__auto__.call(null,m,mode));
} else {
var m__7241__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7241__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7659__auto__ = [];
var len__7652__auto___17798 = arguments.length;
var i__7653__auto___17799 = (0);
while(true){
if((i__7653__auto___17799 < len__7652__auto___17798)){
args__7659__auto__.push((arguments[i__7653__auto___17799]));

var G__17800 = (i__7653__auto___17799 + (1));
i__7653__auto___17799 = G__17800;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((3) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7660__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17792){
var map__17793 = p__17792;
var map__17793__$1 = ((((!((map__17793 == null)))?((((map__17793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17793):map__17793);
var opts = map__17793__$1;
var statearr_17795_17801 = state;
(statearr_17795_17801[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17793,map__17793__$1,opts){
return (function (val){
var statearr_17796_17802 = state;
(statearr_17796_17802[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17793,map__17793__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17797_17803 = state;
(statearr_17797_17803[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17788){
var G__17789 = cljs.core.first(seq17788);
var seq17788__$1 = cljs.core.next(seq17788);
var G__17790 = cljs.core.first(seq17788__$1);
var seq17788__$2 = cljs.core.next(seq17788__$1);
var G__17791 = cljs.core.first(seq17788__$2);
var seq17788__$3 = cljs.core.next(seq17788__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17789,G__17790,G__17791,seq17788__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__17972 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17972) : cljs.core.atom.call(null,G__17972));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17973 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17974){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17974 = meta17974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17975,meta17974__$1){
var self__ = this;
var _17975__$1 = this;
return (new cljs.core.async.t_cljs$core$async17973(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17974__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17975){
var self__ = this;
var _17975__$1 = this;
return self__.meta17974;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17976_18140 = self__.cs;
var G__17977_18141 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17976_18140,G__17977_18141) : cljs.core.reset_BANG_.call(null,G__17976_18140,G__17977_18141));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17973.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17973.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17974], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17973";

cljs.core.async.t_cljs$core$async17973.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async17973");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17973 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17973(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17974){
return (new cljs.core.async.t_cljs$core$async17973(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17974));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17973(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16389__auto___18142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___18142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___18142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18077){
var state_val_18078 = (state_18077[(1)]);
if((state_val_18078 === (7))){
var inst_17993 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
var statearr_18079_18143 = state_18077__$1;
(statearr_18079_18143[(2)] = inst_17993);

(statearr_18079_18143[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (20))){
var inst_18005 = (state_18077[(7)]);
var state_18077__$1 = state_18077;
var statearr_18080_18144 = state_18077__$1;
(statearr_18080_18144[(2)] = inst_18005);

(statearr_18080_18144[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (27))){
var state_18077__$1 = state_18077;
var statearr_18081_18145 = state_18077__$1;
(statearr_18081_18145[(2)] = null);

(statearr_18081_18145[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (1))){
var inst_17981 = (state_18077[(8)]);
var inst_17981__$1 = calc_state();
var inst_17983 = (inst_17981__$1 == null);
var inst_17984 = cljs.core.not(inst_17983);
var state_18077__$1 = (function (){var statearr_18082 = state_18077;
(statearr_18082[(8)] = inst_17981__$1);

return statearr_18082;
})();
if(inst_17984){
var statearr_18083_18146 = state_18077__$1;
(statearr_18083_18146[(1)] = (2));

} else {
var statearr_18084_18147 = state_18077__$1;
(statearr_18084_18147[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (24))){
var inst_18037 = (state_18077[(9)]);
var inst_18051 = (state_18077[(10)]);
var inst_18028 = (state_18077[(11)]);
var inst_18051__$1 = (inst_18028.cljs$core$IFn$_invoke$arity$1 ? inst_18028.cljs$core$IFn$_invoke$arity$1(inst_18037) : inst_18028.call(null,inst_18037));
var state_18077__$1 = (function (){var statearr_18085 = state_18077;
(statearr_18085[(10)] = inst_18051__$1);

return statearr_18085;
})();
if(cljs.core.truth_(inst_18051__$1)){
var statearr_18086_18148 = state_18077__$1;
(statearr_18086_18148[(1)] = (29));

} else {
var statearr_18087_18149 = state_18077__$1;
(statearr_18087_18149[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (4))){
var inst_17996 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
if(cljs.core.truth_(inst_17996)){
var statearr_18088_18150 = state_18077__$1;
(statearr_18088_18150[(1)] = (8));

} else {
var statearr_18089_18151 = state_18077__$1;
(statearr_18089_18151[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (15))){
var inst_18022 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
if(cljs.core.truth_(inst_18022)){
var statearr_18090_18152 = state_18077__$1;
(statearr_18090_18152[(1)] = (19));

} else {
var statearr_18091_18153 = state_18077__$1;
(statearr_18091_18153[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (21))){
var inst_18027 = (state_18077[(12)]);
var inst_18027__$1 = (state_18077[(2)]);
var inst_18028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18027__$1,cljs.core.cst$kw$solos);
var inst_18029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18027__$1,cljs.core.cst$kw$mutes);
var inst_18030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18027__$1,cljs.core.cst$kw$reads);
var state_18077__$1 = (function (){var statearr_18092 = state_18077;
(statearr_18092[(12)] = inst_18027__$1);

(statearr_18092[(11)] = inst_18028);

(statearr_18092[(13)] = inst_18029);

return statearr_18092;
})();
return cljs.core.async.ioc_alts_BANG_(state_18077__$1,(22),inst_18030);
} else {
if((state_val_18078 === (31))){
var inst_18059 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
if(cljs.core.truth_(inst_18059)){
var statearr_18093_18154 = state_18077__$1;
(statearr_18093_18154[(1)] = (32));

} else {
var statearr_18094_18155 = state_18077__$1;
(statearr_18094_18155[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (32))){
var inst_18036 = (state_18077[(14)]);
var state_18077__$1 = state_18077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18077__$1,(35),out,inst_18036);
} else {
if((state_val_18078 === (33))){
var inst_18027 = (state_18077[(12)]);
var inst_18005 = inst_18027;
var state_18077__$1 = (function (){var statearr_18095 = state_18077;
(statearr_18095[(7)] = inst_18005);

return statearr_18095;
})();
var statearr_18096_18156 = state_18077__$1;
(statearr_18096_18156[(2)] = null);

(statearr_18096_18156[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (13))){
var inst_18005 = (state_18077[(7)]);
var inst_18012 = inst_18005.cljs$lang$protocol_mask$partition0$;
var inst_18013 = (inst_18012 & (64));
var inst_18014 = inst_18005.cljs$core$ISeq$;
var inst_18015 = (inst_18013) || (inst_18014);
var state_18077__$1 = state_18077;
if(cljs.core.truth_(inst_18015)){
var statearr_18097_18157 = state_18077__$1;
(statearr_18097_18157[(1)] = (16));

} else {
var statearr_18098_18158 = state_18077__$1;
(statearr_18098_18158[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (22))){
var inst_18037 = (state_18077[(9)]);
var inst_18036 = (state_18077[(14)]);
var inst_18035 = (state_18077[(2)]);
var inst_18036__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18035,(0),null);
var inst_18037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18035,(1),null);
var inst_18038 = (inst_18036__$1 == null);
var inst_18039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18037__$1,change);
var inst_18040 = (inst_18038) || (inst_18039);
var state_18077__$1 = (function (){var statearr_18099 = state_18077;
(statearr_18099[(9)] = inst_18037__$1);

(statearr_18099[(14)] = inst_18036__$1);

return statearr_18099;
})();
if(cljs.core.truth_(inst_18040)){
var statearr_18100_18159 = state_18077__$1;
(statearr_18100_18159[(1)] = (23));

} else {
var statearr_18101_18160 = state_18077__$1;
(statearr_18101_18160[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (36))){
var inst_18027 = (state_18077[(12)]);
var inst_18005 = inst_18027;
var state_18077__$1 = (function (){var statearr_18102 = state_18077;
(statearr_18102[(7)] = inst_18005);

return statearr_18102;
})();
var statearr_18103_18161 = state_18077__$1;
(statearr_18103_18161[(2)] = null);

(statearr_18103_18161[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (29))){
var inst_18051 = (state_18077[(10)]);
var state_18077__$1 = state_18077;
var statearr_18104_18162 = state_18077__$1;
(statearr_18104_18162[(2)] = inst_18051);

(statearr_18104_18162[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (6))){
var state_18077__$1 = state_18077;
var statearr_18105_18163 = state_18077__$1;
(statearr_18105_18163[(2)] = false);

(statearr_18105_18163[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (28))){
var inst_18047 = (state_18077[(2)]);
var inst_18048 = calc_state();
var inst_18005 = inst_18048;
var state_18077__$1 = (function (){var statearr_18106 = state_18077;
(statearr_18106[(15)] = inst_18047);

(statearr_18106[(7)] = inst_18005);

return statearr_18106;
})();
var statearr_18107_18164 = state_18077__$1;
(statearr_18107_18164[(2)] = null);

(statearr_18107_18164[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (25))){
var inst_18073 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
var statearr_18108_18165 = state_18077__$1;
(statearr_18108_18165[(2)] = inst_18073);

(statearr_18108_18165[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (34))){
var inst_18071 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
var statearr_18109_18166 = state_18077__$1;
(statearr_18109_18166[(2)] = inst_18071);

(statearr_18109_18166[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (17))){
var state_18077__$1 = state_18077;
var statearr_18110_18167 = state_18077__$1;
(statearr_18110_18167[(2)] = false);

(statearr_18110_18167[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (3))){
var state_18077__$1 = state_18077;
var statearr_18111_18168 = state_18077__$1;
(statearr_18111_18168[(2)] = false);

(statearr_18111_18168[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (12))){
var inst_18075 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18077__$1,inst_18075);
} else {
if((state_val_18078 === (2))){
var inst_17981 = (state_18077[(8)]);
var inst_17986 = inst_17981.cljs$lang$protocol_mask$partition0$;
var inst_17987 = (inst_17986 & (64));
var inst_17988 = inst_17981.cljs$core$ISeq$;
var inst_17989 = (inst_17987) || (inst_17988);
var state_18077__$1 = state_18077;
if(cljs.core.truth_(inst_17989)){
var statearr_18112_18169 = state_18077__$1;
(statearr_18112_18169[(1)] = (5));

} else {
var statearr_18113_18170 = state_18077__$1;
(statearr_18113_18170[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (23))){
var inst_18036 = (state_18077[(14)]);
var inst_18042 = (inst_18036 == null);
var state_18077__$1 = state_18077;
if(cljs.core.truth_(inst_18042)){
var statearr_18114_18171 = state_18077__$1;
(statearr_18114_18171[(1)] = (26));

} else {
var statearr_18115_18172 = state_18077__$1;
(statearr_18115_18172[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (35))){
var inst_18062 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
if(cljs.core.truth_(inst_18062)){
var statearr_18116_18173 = state_18077__$1;
(statearr_18116_18173[(1)] = (36));

} else {
var statearr_18117_18174 = state_18077__$1;
(statearr_18117_18174[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (19))){
var inst_18005 = (state_18077[(7)]);
var inst_18024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18005);
var state_18077__$1 = state_18077;
var statearr_18118_18175 = state_18077__$1;
(statearr_18118_18175[(2)] = inst_18024);

(statearr_18118_18175[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (11))){
var inst_18005 = (state_18077[(7)]);
var inst_18009 = (inst_18005 == null);
var inst_18010 = cljs.core.not(inst_18009);
var state_18077__$1 = state_18077;
if(inst_18010){
var statearr_18119_18176 = state_18077__$1;
(statearr_18119_18176[(1)] = (13));

} else {
var statearr_18120_18177 = state_18077__$1;
(statearr_18120_18177[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (9))){
var inst_17981 = (state_18077[(8)]);
var state_18077__$1 = state_18077;
var statearr_18121_18178 = state_18077__$1;
(statearr_18121_18178[(2)] = inst_17981);

(statearr_18121_18178[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (5))){
var state_18077__$1 = state_18077;
var statearr_18122_18179 = state_18077__$1;
(statearr_18122_18179[(2)] = true);

(statearr_18122_18179[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (14))){
var state_18077__$1 = state_18077;
var statearr_18123_18180 = state_18077__$1;
(statearr_18123_18180[(2)] = false);

(statearr_18123_18180[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (26))){
var inst_18037 = (state_18077[(9)]);
var inst_18044 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18037);
var state_18077__$1 = state_18077;
var statearr_18124_18181 = state_18077__$1;
(statearr_18124_18181[(2)] = inst_18044);

(statearr_18124_18181[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (16))){
var state_18077__$1 = state_18077;
var statearr_18125_18182 = state_18077__$1;
(statearr_18125_18182[(2)] = true);

(statearr_18125_18182[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (38))){
var inst_18067 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
var statearr_18126_18183 = state_18077__$1;
(statearr_18126_18183[(2)] = inst_18067);

(statearr_18126_18183[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (30))){
var inst_18037 = (state_18077[(9)]);
var inst_18028 = (state_18077[(11)]);
var inst_18029 = (state_18077[(13)]);
var inst_18054 = cljs.core.empty_QMARK_(inst_18028);
var inst_18055 = (inst_18029.cljs$core$IFn$_invoke$arity$1 ? inst_18029.cljs$core$IFn$_invoke$arity$1(inst_18037) : inst_18029.call(null,inst_18037));
var inst_18056 = cljs.core.not(inst_18055);
var inst_18057 = (inst_18054) && (inst_18056);
var state_18077__$1 = state_18077;
var statearr_18127_18184 = state_18077__$1;
(statearr_18127_18184[(2)] = inst_18057);

(statearr_18127_18184[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (10))){
var inst_17981 = (state_18077[(8)]);
var inst_18001 = (state_18077[(2)]);
var inst_18002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18001,cljs.core.cst$kw$solos);
var inst_18003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18001,cljs.core.cst$kw$mutes);
var inst_18004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18001,cljs.core.cst$kw$reads);
var inst_18005 = inst_17981;
var state_18077__$1 = (function (){var statearr_18128 = state_18077;
(statearr_18128[(7)] = inst_18005);

(statearr_18128[(16)] = inst_18004);

(statearr_18128[(17)] = inst_18002);

(statearr_18128[(18)] = inst_18003);

return statearr_18128;
})();
var statearr_18129_18185 = state_18077__$1;
(statearr_18129_18185[(2)] = null);

(statearr_18129_18185[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (18))){
var inst_18019 = (state_18077[(2)]);
var state_18077__$1 = state_18077;
var statearr_18130_18186 = state_18077__$1;
(statearr_18130_18186[(2)] = inst_18019);

(statearr_18130_18186[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (37))){
var state_18077__$1 = state_18077;
var statearr_18131_18187 = state_18077__$1;
(statearr_18131_18187[(2)] = null);

(statearr_18131_18187[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18078 === (8))){
var inst_17981 = (state_18077[(8)]);
var inst_17998 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17981);
var state_18077__$1 = state_18077;
var statearr_18132_18188 = state_18077__$1;
(statearr_18132_18188[(2)] = inst_17998);

(statearr_18132_18188[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___18142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16275__auto__,c__16389__auto___18142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16276__auto__ = null;
var cljs$core$async$mix_$_state_machine__16276__auto____0 = (function (){
var statearr_18136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18136[(0)] = cljs$core$async$mix_$_state_machine__16276__auto__);

(statearr_18136[(1)] = (1));

return statearr_18136;
});
var cljs$core$async$mix_$_state_machine__16276__auto____1 = (function (state_18077){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_18077);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e18137){if((e18137 instanceof Object)){
var ex__16279__auto__ = e18137;
var statearr_18138_18189 = state_18077;
(statearr_18138_18189[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18077);

return cljs.core.cst$kw$recur;
} else {
throw e18137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__18190 = state_18077;
state_18077 = G__18190;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16276__auto__ = function(state_18077){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16276__auto____1.call(this,state_18077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16276__auto____0;
cljs$core$async$mix_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16276__auto____1;
return cljs$core$async$mix_$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___18142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16391__auto__ = (function (){var statearr_18139 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_18139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___18142);

return statearr_18139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___18142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7240__auto__ = (((p == null))?null:p);
var m__7241__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7241__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7241__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7241__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7240__auto__ = (((p == null))?null:p);
var m__7241__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7241__auto__.call(null,p,v,ch));
} else {
var m__7241__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7241__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18191 = [];
var len__7652__auto___18194 = arguments.length;
var i__7653__auto___18195 = (0);
while(true){
if((i__7653__auto___18195 < len__7652__auto___18194)){
args18191.push((arguments[i__7653__auto___18195]));

var G__18196 = (i__7653__auto___18195 + (1));
i__7653__auto___18195 = G__18196;
continue;
} else {
}
break;
}

var G__18193 = args18191.length;
switch (G__18193) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18191.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7240__auto__ = (((p == null))?null:p);
var m__7241__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7241__auto__.call(null,p));
} else {
var m__7241__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7241__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7240__auto__ = (((p == null))?null:p);
var m__7241__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7240__auto__)]);
if(!((m__7241__auto__ == null))){
return (m__7241__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7241__auto__.call(null,p,v));
} else {
var m__7241__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7241__auto____$1 == null))){
return (m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7241__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7241__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args18199 = [];
var len__7652__auto___18327 = arguments.length;
var i__7653__auto___18328 = (0);
while(true){
if((i__7653__auto___18328 < len__7652__auto___18327)){
args18199.push((arguments[i__7653__auto___18328]));

var G__18329 = (i__7653__auto___18328 + (1));
i__7653__auto___18328 = G__18329;
continue;
} else {
}
break;
}

var G__18201 = args18199.length;
switch (G__18201) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18199.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__18202 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18202) : cljs.core.atom.call(null,G__18202));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6577__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6577__auto__,mults){
return (function (p1__18198_SHARP_){
if(cljs.core.truth_((p1__18198_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18198_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18198_SHARP_.call(null,topic)))){
return p1__18198_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18198_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6577__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18203 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18204){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18204 = meta18204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18205,meta18204__$1){
var self__ = this;
var _18205__$1 = this;
return (new cljs.core.async.t_cljs$core$async18203(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18204__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18205){
var self__ = this;
var _18205__$1 = this;
return self__.meta18204;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18206 = self__.mults;
var G__18207 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18206,G__18207) : cljs.core.reset_BANG_.call(null,G__18206,G__18207));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18203.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18204], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18203";

cljs.core.async.t_cljs$core$async18203.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async18203");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18203 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18204){
return (new cljs.core.async.t_cljs$core$async18203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18204));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18203(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16389__auto___18331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___18331,mults,ensure_mult,p){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___18331,mults,ensure_mult,p){
return (function (state_18279){
var state_val_18280 = (state_18279[(1)]);
if((state_val_18280 === (7))){
var inst_18275 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
var statearr_18281_18332 = state_18279__$1;
(statearr_18281_18332[(2)] = inst_18275);

(statearr_18281_18332[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (20))){
var state_18279__$1 = state_18279;
var statearr_18282_18333 = state_18279__$1;
(statearr_18282_18333[(2)] = null);

(statearr_18282_18333[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (1))){
var state_18279__$1 = state_18279;
var statearr_18283_18334 = state_18279__$1;
(statearr_18283_18334[(2)] = null);

(statearr_18283_18334[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (24))){
var inst_18258 = (state_18279[(7)]);
var inst_18267 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18258);
var state_18279__$1 = state_18279;
var statearr_18284_18335 = state_18279__$1;
(statearr_18284_18335[(2)] = inst_18267);

(statearr_18284_18335[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (4))){
var inst_18210 = (state_18279[(8)]);
var inst_18210__$1 = (state_18279[(2)]);
var inst_18211 = (inst_18210__$1 == null);
var state_18279__$1 = (function (){var statearr_18285 = state_18279;
(statearr_18285[(8)] = inst_18210__$1);

return statearr_18285;
})();
if(cljs.core.truth_(inst_18211)){
var statearr_18286_18336 = state_18279__$1;
(statearr_18286_18336[(1)] = (5));

} else {
var statearr_18287_18337 = state_18279__$1;
(statearr_18287_18337[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (15))){
var inst_18252 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
var statearr_18288_18338 = state_18279__$1;
(statearr_18288_18338[(2)] = inst_18252);

(statearr_18288_18338[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (21))){
var inst_18272 = (state_18279[(2)]);
var state_18279__$1 = (function (){var statearr_18289 = state_18279;
(statearr_18289[(9)] = inst_18272);

return statearr_18289;
})();
var statearr_18290_18339 = state_18279__$1;
(statearr_18290_18339[(2)] = null);

(statearr_18290_18339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (13))){
var inst_18234 = (state_18279[(10)]);
var inst_18236 = cljs.core.chunked_seq_QMARK_(inst_18234);
var state_18279__$1 = state_18279;
if(inst_18236){
var statearr_18291_18340 = state_18279__$1;
(statearr_18291_18340[(1)] = (16));

} else {
var statearr_18292_18341 = state_18279__$1;
(statearr_18292_18341[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (22))){
var inst_18264 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
if(cljs.core.truth_(inst_18264)){
var statearr_18293_18342 = state_18279__$1;
(statearr_18293_18342[(1)] = (23));

} else {
var statearr_18294_18343 = state_18279__$1;
(statearr_18294_18343[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (6))){
var inst_18260 = (state_18279[(11)]);
var inst_18258 = (state_18279[(7)]);
var inst_18210 = (state_18279[(8)]);
var inst_18258__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18210) : topic_fn.call(null,inst_18210));
var inst_18259 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18260__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18259,inst_18258__$1);
var state_18279__$1 = (function (){var statearr_18295 = state_18279;
(statearr_18295[(11)] = inst_18260__$1);

(statearr_18295[(7)] = inst_18258__$1);

return statearr_18295;
})();
if(cljs.core.truth_(inst_18260__$1)){
var statearr_18296_18344 = state_18279__$1;
(statearr_18296_18344[(1)] = (19));

} else {
var statearr_18297_18345 = state_18279__$1;
(statearr_18297_18345[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (25))){
var inst_18269 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
var statearr_18298_18346 = state_18279__$1;
(statearr_18298_18346[(2)] = inst_18269);

(statearr_18298_18346[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (17))){
var inst_18234 = (state_18279[(10)]);
var inst_18243 = cljs.core.first(inst_18234);
var inst_18244 = cljs.core.async.muxch_STAR_(inst_18243);
var inst_18245 = cljs.core.async.close_BANG_(inst_18244);
var inst_18246 = cljs.core.next(inst_18234);
var inst_18220 = inst_18246;
var inst_18221 = null;
var inst_18222 = (0);
var inst_18223 = (0);
var state_18279__$1 = (function (){var statearr_18299 = state_18279;
(statearr_18299[(12)] = inst_18220);

(statearr_18299[(13)] = inst_18221);

(statearr_18299[(14)] = inst_18245);

(statearr_18299[(15)] = inst_18223);

(statearr_18299[(16)] = inst_18222);

return statearr_18299;
})();
var statearr_18300_18347 = state_18279__$1;
(statearr_18300_18347[(2)] = null);

(statearr_18300_18347[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (3))){
var inst_18277 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18279__$1,inst_18277);
} else {
if((state_val_18280 === (12))){
var inst_18254 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
var statearr_18301_18348 = state_18279__$1;
(statearr_18301_18348[(2)] = inst_18254);

(statearr_18301_18348[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (2))){
var state_18279__$1 = state_18279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18279__$1,(4),ch);
} else {
if((state_val_18280 === (23))){
var state_18279__$1 = state_18279;
var statearr_18302_18349 = state_18279__$1;
(statearr_18302_18349[(2)] = null);

(statearr_18302_18349[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (19))){
var inst_18260 = (state_18279[(11)]);
var inst_18210 = (state_18279[(8)]);
var inst_18262 = cljs.core.async.muxch_STAR_(inst_18260);
var state_18279__$1 = state_18279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18279__$1,(22),inst_18262,inst_18210);
} else {
if((state_val_18280 === (11))){
var inst_18220 = (state_18279[(12)]);
var inst_18234 = (state_18279[(10)]);
var inst_18234__$1 = cljs.core.seq(inst_18220);
var state_18279__$1 = (function (){var statearr_18303 = state_18279;
(statearr_18303[(10)] = inst_18234__$1);

return statearr_18303;
})();
if(inst_18234__$1){
var statearr_18304_18350 = state_18279__$1;
(statearr_18304_18350[(1)] = (13));

} else {
var statearr_18305_18351 = state_18279__$1;
(statearr_18305_18351[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (9))){
var inst_18256 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
var statearr_18306_18352 = state_18279__$1;
(statearr_18306_18352[(2)] = inst_18256);

(statearr_18306_18352[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (5))){
var inst_18217 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18218 = cljs.core.vals(inst_18217);
var inst_18219 = cljs.core.seq(inst_18218);
var inst_18220 = inst_18219;
var inst_18221 = null;
var inst_18222 = (0);
var inst_18223 = (0);
var state_18279__$1 = (function (){var statearr_18307 = state_18279;
(statearr_18307[(12)] = inst_18220);

(statearr_18307[(13)] = inst_18221);

(statearr_18307[(15)] = inst_18223);

(statearr_18307[(16)] = inst_18222);

return statearr_18307;
})();
var statearr_18308_18353 = state_18279__$1;
(statearr_18308_18353[(2)] = null);

(statearr_18308_18353[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (14))){
var state_18279__$1 = state_18279;
var statearr_18312_18354 = state_18279__$1;
(statearr_18312_18354[(2)] = null);

(statearr_18312_18354[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (16))){
var inst_18234 = (state_18279[(10)]);
var inst_18238 = cljs.core.chunk_first(inst_18234);
var inst_18239 = cljs.core.chunk_rest(inst_18234);
var inst_18240 = cljs.core.count(inst_18238);
var inst_18220 = inst_18239;
var inst_18221 = inst_18238;
var inst_18222 = inst_18240;
var inst_18223 = (0);
var state_18279__$1 = (function (){var statearr_18313 = state_18279;
(statearr_18313[(12)] = inst_18220);

(statearr_18313[(13)] = inst_18221);

(statearr_18313[(15)] = inst_18223);

(statearr_18313[(16)] = inst_18222);

return statearr_18313;
})();
var statearr_18314_18355 = state_18279__$1;
(statearr_18314_18355[(2)] = null);

(statearr_18314_18355[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (10))){
var inst_18220 = (state_18279[(12)]);
var inst_18221 = (state_18279[(13)]);
var inst_18223 = (state_18279[(15)]);
var inst_18222 = (state_18279[(16)]);
var inst_18228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18221,inst_18223);
var inst_18229 = cljs.core.async.muxch_STAR_(inst_18228);
var inst_18230 = cljs.core.async.close_BANG_(inst_18229);
var inst_18231 = (inst_18223 + (1));
var tmp18309 = inst_18220;
var tmp18310 = inst_18221;
var tmp18311 = inst_18222;
var inst_18220__$1 = tmp18309;
var inst_18221__$1 = tmp18310;
var inst_18222__$1 = tmp18311;
var inst_18223__$1 = inst_18231;
var state_18279__$1 = (function (){var statearr_18315 = state_18279;
(statearr_18315[(12)] = inst_18220__$1);

(statearr_18315[(17)] = inst_18230);

(statearr_18315[(13)] = inst_18221__$1);

(statearr_18315[(15)] = inst_18223__$1);

(statearr_18315[(16)] = inst_18222__$1);

return statearr_18315;
})();
var statearr_18316_18356 = state_18279__$1;
(statearr_18316_18356[(2)] = null);

(statearr_18316_18356[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (18))){
var inst_18249 = (state_18279[(2)]);
var state_18279__$1 = state_18279;
var statearr_18317_18357 = state_18279__$1;
(statearr_18317_18357[(2)] = inst_18249);

(statearr_18317_18357[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18280 === (8))){
var inst_18223 = (state_18279[(15)]);
var inst_18222 = (state_18279[(16)]);
var inst_18225 = (inst_18223 < inst_18222);
var inst_18226 = inst_18225;
var state_18279__$1 = state_18279;
if(cljs.core.truth_(inst_18226)){
var statearr_18318_18358 = state_18279__$1;
(statearr_18318_18358[(1)] = (10));

} else {
var statearr_18319_18359 = state_18279__$1;
(statearr_18319_18359[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___18331,mults,ensure_mult,p))
;
return ((function (switch__16275__auto__,c__16389__auto___18331,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_18323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18323[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_18323[(1)] = (1));

return statearr_18323;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_18279){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_18279);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e18324){if((e18324 instanceof Object)){
var ex__16279__auto__ = e18324;
var statearr_18325_18360 = state_18279;
(statearr_18325_18360[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18279);

return cljs.core.cst$kw$recur;
} else {
throw e18324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__18361 = state_18279;
state_18279 = G__18361;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_18279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_18279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___18331,mults,ensure_mult,p))
})();
var state__16391__auto__ = (function (){var statearr_18326 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_18326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___18331);

return statearr_18326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___18331,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args18362 = [];
var len__7652__auto___18365 = arguments.length;
var i__7653__auto___18366 = (0);
while(true){
if((i__7653__auto___18366 < len__7652__auto___18365)){
args18362.push((arguments[i__7653__auto___18366]));

var G__18367 = (i__7653__auto___18366 + (1));
i__7653__auto___18366 = G__18367;
continue;
} else {
}
break;
}

var G__18364 = args18362.length;
switch (G__18364) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18362.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args18369 = [];
var len__7652__auto___18372 = arguments.length;
var i__7653__auto___18373 = (0);
while(true){
if((i__7653__auto___18373 < len__7652__auto___18372)){
args18369.push((arguments[i__7653__auto___18373]));

var G__18374 = (i__7653__auto___18373 + (1));
i__7653__auto___18373 = G__18374;
continue;
} else {
}
break;
}

var G__18371 = args18369.length;
switch (G__18371) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18369.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args18376 = [];
var len__7652__auto___18447 = arguments.length;
var i__7653__auto___18448 = (0);
while(true){
if((i__7653__auto___18448 < len__7652__auto___18447)){
args18376.push((arguments[i__7653__auto___18448]));

var G__18449 = (i__7653__auto___18448 + (1));
i__7653__auto___18448 = G__18449;
continue;
} else {
}
break;
}

var G__18378 = args18376.length;
switch (G__18378) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18376.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16389__auto___18451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___18451,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___18451,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18417){
var state_val_18418 = (state_18417[(1)]);
if((state_val_18418 === (7))){
var state_18417__$1 = state_18417;
var statearr_18419_18452 = state_18417__$1;
(statearr_18419_18452[(2)] = null);

(statearr_18419_18452[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (1))){
var state_18417__$1 = state_18417;
var statearr_18420_18453 = state_18417__$1;
(statearr_18420_18453[(2)] = null);

(statearr_18420_18453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (4))){
var inst_18381 = (state_18417[(7)]);
var inst_18383 = (inst_18381 < cnt);
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18383)){
var statearr_18421_18454 = state_18417__$1;
(statearr_18421_18454[(1)] = (6));

} else {
var statearr_18422_18455 = state_18417__$1;
(statearr_18422_18455[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (15))){
var inst_18413 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18423_18456 = state_18417__$1;
(statearr_18423_18456[(2)] = inst_18413);

(statearr_18423_18456[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (13))){
var inst_18406 = cljs.core.async.close_BANG_(out);
var state_18417__$1 = state_18417;
var statearr_18424_18457 = state_18417__$1;
(statearr_18424_18457[(2)] = inst_18406);

(statearr_18424_18457[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (6))){
var state_18417__$1 = state_18417;
var statearr_18425_18458 = state_18417__$1;
(statearr_18425_18458[(2)] = null);

(statearr_18425_18458[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (3))){
var inst_18415 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18417__$1,inst_18415);
} else {
if((state_val_18418 === (12))){
var inst_18403 = (state_18417[(8)]);
var inst_18403__$1 = (state_18417[(2)]);
var inst_18404 = cljs.core.some(cljs.core.nil_QMARK_,inst_18403__$1);
var state_18417__$1 = (function (){var statearr_18426 = state_18417;
(statearr_18426[(8)] = inst_18403__$1);

return statearr_18426;
})();
if(cljs.core.truth_(inst_18404)){
var statearr_18427_18459 = state_18417__$1;
(statearr_18427_18459[(1)] = (13));

} else {
var statearr_18428_18460 = state_18417__$1;
(statearr_18428_18460[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (2))){
var inst_18380 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_18381 = (0);
var state_18417__$1 = (function (){var statearr_18429 = state_18417;
(statearr_18429[(9)] = inst_18380);

(statearr_18429[(7)] = inst_18381);

return statearr_18429;
})();
var statearr_18430_18461 = state_18417__$1;
(statearr_18430_18461[(2)] = null);

(statearr_18430_18461[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (11))){
var inst_18381 = (state_18417[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18417,(10),Object,null,(9));
var inst_18390 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18381) : chs__$1.call(null,inst_18381));
var inst_18391 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18381) : done.call(null,inst_18381));
var inst_18392 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18390,inst_18391);
var state_18417__$1 = state_18417;
var statearr_18431_18462 = state_18417__$1;
(statearr_18431_18462[(2)] = inst_18392);


cljs.core.async.impl.ioc_helpers.process_exception(state_18417__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (9))){
var inst_18381 = (state_18417[(7)]);
var inst_18394 = (state_18417[(2)]);
var inst_18395 = (inst_18381 + (1));
var inst_18381__$1 = inst_18395;
var state_18417__$1 = (function (){var statearr_18432 = state_18417;
(statearr_18432[(7)] = inst_18381__$1);

(statearr_18432[(10)] = inst_18394);

return statearr_18432;
})();
var statearr_18433_18463 = state_18417__$1;
(statearr_18433_18463[(2)] = null);

(statearr_18433_18463[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (5))){
var inst_18401 = (state_18417[(2)]);
var state_18417__$1 = (function (){var statearr_18434 = state_18417;
(statearr_18434[(11)] = inst_18401);

return statearr_18434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18417__$1,(12),dchan);
} else {
if((state_val_18418 === (14))){
var inst_18403 = (state_18417[(8)]);
var inst_18408 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18403);
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18417__$1,(16),out,inst_18408);
} else {
if((state_val_18418 === (16))){
var inst_18410 = (state_18417[(2)]);
var state_18417__$1 = (function (){var statearr_18435 = state_18417;
(statearr_18435[(12)] = inst_18410);

return statearr_18435;
})();
var statearr_18436_18464 = state_18417__$1;
(statearr_18436_18464[(2)] = null);

(statearr_18436_18464[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (10))){
var inst_18385 = (state_18417[(2)]);
var inst_18386 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18417__$1 = (function (){var statearr_18437 = state_18417;
(statearr_18437[(13)] = inst_18385);

return statearr_18437;
})();
var statearr_18438_18465 = state_18417__$1;
(statearr_18438_18465[(2)] = inst_18386);


cljs.core.async.impl.ioc_helpers.process_exception(state_18417__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18418 === (8))){
var inst_18399 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18439_18466 = state_18417__$1;
(statearr_18439_18466[(2)] = inst_18399);

(statearr_18439_18466[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___18451,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16275__auto__,c__16389__auto___18451,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_18443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18443[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_18443[(1)] = (1));

return statearr_18443;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_18417){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_18417);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e18444){if((e18444 instanceof Object)){
var ex__16279__auto__ = e18444;
var statearr_18445_18467 = state_18417;
(statearr_18445_18467[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18417);

return cljs.core.cst$kw$recur;
} else {
throw e18444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__18468 = state_18417;
state_18417 = G__18468;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_18417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_18417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___18451,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16391__auto__ = (function (){var statearr_18446 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_18446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___18451);

return statearr_18446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___18451,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args18470 = [];
var len__7652__auto___18528 = arguments.length;
var i__7653__auto___18529 = (0);
while(true){
if((i__7653__auto___18529 < len__7652__auto___18528)){
args18470.push((arguments[i__7653__auto___18529]));

var G__18530 = (i__7653__auto___18529 + (1));
i__7653__auto___18529 = G__18530;
continue;
} else {
}
break;
}

var G__18472 = args18470.length;
switch (G__18472) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18470.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16389__auto___18532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___18532,out){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___18532,out){
return (function (state_18504){
var state_val_18505 = (state_18504[(1)]);
if((state_val_18505 === (7))){
var inst_18484 = (state_18504[(7)]);
var inst_18483 = (state_18504[(8)]);
var inst_18483__$1 = (state_18504[(2)]);
var inst_18484__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18483__$1,(0),null);
var inst_18485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18483__$1,(1),null);
var inst_18486 = (inst_18484__$1 == null);
var state_18504__$1 = (function (){var statearr_18506 = state_18504;
(statearr_18506[(7)] = inst_18484__$1);

(statearr_18506[(8)] = inst_18483__$1);

(statearr_18506[(9)] = inst_18485);

return statearr_18506;
})();
if(cljs.core.truth_(inst_18486)){
var statearr_18507_18533 = state_18504__$1;
(statearr_18507_18533[(1)] = (8));

} else {
var statearr_18508_18534 = state_18504__$1;
(statearr_18508_18534[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (1))){
var inst_18473 = cljs.core.vec(chs);
var inst_18474 = inst_18473;
var state_18504__$1 = (function (){var statearr_18509 = state_18504;
(statearr_18509[(10)] = inst_18474);

return statearr_18509;
})();
var statearr_18510_18535 = state_18504__$1;
(statearr_18510_18535[(2)] = null);

(statearr_18510_18535[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (4))){
var inst_18474 = (state_18504[(10)]);
var state_18504__$1 = state_18504;
return cljs.core.async.ioc_alts_BANG_(state_18504__$1,(7),inst_18474);
} else {
if((state_val_18505 === (6))){
var inst_18500 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
var statearr_18511_18536 = state_18504__$1;
(statearr_18511_18536[(2)] = inst_18500);

(statearr_18511_18536[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (3))){
var inst_18502 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18504__$1,inst_18502);
} else {
if((state_val_18505 === (2))){
var inst_18474 = (state_18504[(10)]);
var inst_18476 = cljs.core.count(inst_18474);
var inst_18477 = (inst_18476 > (0));
var state_18504__$1 = state_18504;
if(cljs.core.truth_(inst_18477)){
var statearr_18513_18537 = state_18504__$1;
(statearr_18513_18537[(1)] = (4));

} else {
var statearr_18514_18538 = state_18504__$1;
(statearr_18514_18538[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (11))){
var inst_18474 = (state_18504[(10)]);
var inst_18493 = (state_18504[(2)]);
var tmp18512 = inst_18474;
var inst_18474__$1 = tmp18512;
var state_18504__$1 = (function (){var statearr_18515 = state_18504;
(statearr_18515[(11)] = inst_18493);

(statearr_18515[(10)] = inst_18474__$1);

return statearr_18515;
})();
var statearr_18516_18539 = state_18504__$1;
(statearr_18516_18539[(2)] = null);

(statearr_18516_18539[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (9))){
var inst_18484 = (state_18504[(7)]);
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18504__$1,(11),out,inst_18484);
} else {
if((state_val_18505 === (5))){
var inst_18498 = cljs.core.async.close_BANG_(out);
var state_18504__$1 = state_18504;
var statearr_18517_18540 = state_18504__$1;
(statearr_18517_18540[(2)] = inst_18498);

(statearr_18517_18540[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (10))){
var inst_18496 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
var statearr_18518_18541 = state_18504__$1;
(statearr_18518_18541[(2)] = inst_18496);

(statearr_18518_18541[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18505 === (8))){
var inst_18484 = (state_18504[(7)]);
var inst_18483 = (state_18504[(8)]);
var inst_18474 = (state_18504[(10)]);
var inst_18485 = (state_18504[(9)]);
var inst_18488 = (function (){var cs = inst_18474;
var vec__18479 = inst_18483;
var v = inst_18484;
var c = inst_18485;
return ((function (cs,vec__18479,v,c,inst_18484,inst_18483,inst_18474,inst_18485,state_val_18505,c__16389__auto___18532,out){
return (function (p1__18469_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18469_SHARP_);
});
;})(cs,vec__18479,v,c,inst_18484,inst_18483,inst_18474,inst_18485,state_val_18505,c__16389__auto___18532,out))
})();
var inst_18489 = cljs.core.filterv(inst_18488,inst_18474);
var inst_18474__$1 = inst_18489;
var state_18504__$1 = (function (){var statearr_18519 = state_18504;
(statearr_18519[(10)] = inst_18474__$1);

return statearr_18519;
})();
var statearr_18520_18542 = state_18504__$1;
(statearr_18520_18542[(2)] = null);

(statearr_18520_18542[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___18532,out))
;
return ((function (switch__16275__auto__,c__16389__auto___18532,out){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_18524 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18524[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_18524[(1)] = (1));

return statearr_18524;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_18504){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_18504);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e18525){if((e18525 instanceof Object)){
var ex__16279__auto__ = e18525;
var statearr_18526_18543 = state_18504;
(statearr_18526_18543[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18504);

return cljs.core.cst$kw$recur;
} else {
throw e18525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__18544 = state_18504;
state_18504 = G__18544;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_18504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_18504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___18532,out))
})();
var state__16391__auto__ = (function (){var statearr_18527 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_18527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___18532);

return statearr_18527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___18532,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args18545 = [];
var len__7652__auto___18594 = arguments.length;
var i__7653__auto___18595 = (0);
while(true){
if((i__7653__auto___18595 < len__7652__auto___18594)){
args18545.push((arguments[i__7653__auto___18595]));

var G__18596 = (i__7653__auto___18595 + (1));
i__7653__auto___18595 = G__18596;
continue;
} else {
}
break;
}

var G__18547 = args18545.length;
switch (G__18547) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18545.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16389__auto___18598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___18598,out){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___18598,out){
return (function (state_18571){
var state_val_18572 = (state_18571[(1)]);
if((state_val_18572 === (7))){
var inst_18553 = (state_18571[(7)]);
var inst_18553__$1 = (state_18571[(2)]);
var inst_18554 = (inst_18553__$1 == null);
var inst_18555 = cljs.core.not(inst_18554);
var state_18571__$1 = (function (){var statearr_18573 = state_18571;
(statearr_18573[(7)] = inst_18553__$1);

return statearr_18573;
})();
if(inst_18555){
var statearr_18574_18599 = state_18571__$1;
(statearr_18574_18599[(1)] = (8));

} else {
var statearr_18575_18600 = state_18571__$1;
(statearr_18575_18600[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18572 === (1))){
var inst_18548 = (0);
var state_18571__$1 = (function (){var statearr_18576 = state_18571;
(statearr_18576[(8)] = inst_18548);

return statearr_18576;
})();
var statearr_18577_18601 = state_18571__$1;
(statearr_18577_18601[(2)] = null);

(statearr_18577_18601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18572 === (4))){
var state_18571__$1 = state_18571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18571__$1,(7),ch);
} else {
if((state_val_18572 === (6))){
var inst_18566 = (state_18571[(2)]);
var state_18571__$1 = state_18571;
var statearr_18578_18602 = state_18571__$1;
(statearr_18578_18602[(2)] = inst_18566);

(statearr_18578_18602[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18572 === (3))){
var inst_18568 = (state_18571[(2)]);
var inst_18569 = cljs.core.async.close_BANG_(out);
var state_18571__$1 = (function (){var statearr_18579 = state_18571;
(statearr_18579[(9)] = inst_18568);

return statearr_18579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18571__$1,inst_18569);
} else {
if((state_val_18572 === (2))){
var inst_18548 = (state_18571[(8)]);
var inst_18550 = (inst_18548 < n);
var state_18571__$1 = state_18571;
if(cljs.core.truth_(inst_18550)){
var statearr_18580_18603 = state_18571__$1;
(statearr_18580_18603[(1)] = (4));

} else {
var statearr_18581_18604 = state_18571__$1;
(statearr_18581_18604[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18572 === (11))){
var inst_18548 = (state_18571[(8)]);
var inst_18558 = (state_18571[(2)]);
var inst_18559 = (inst_18548 + (1));
var inst_18548__$1 = inst_18559;
var state_18571__$1 = (function (){var statearr_18582 = state_18571;
(statearr_18582[(8)] = inst_18548__$1);

(statearr_18582[(10)] = inst_18558);

return statearr_18582;
})();
var statearr_18583_18605 = state_18571__$1;
(statearr_18583_18605[(2)] = null);

(statearr_18583_18605[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18572 === (9))){
var state_18571__$1 = state_18571;
var statearr_18584_18606 = state_18571__$1;
(statearr_18584_18606[(2)] = null);

(statearr_18584_18606[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18572 === (5))){
var state_18571__$1 = state_18571;
var statearr_18585_18607 = state_18571__$1;
(statearr_18585_18607[(2)] = null);

(statearr_18585_18607[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18572 === (10))){
var inst_18563 = (state_18571[(2)]);
var state_18571__$1 = state_18571;
var statearr_18586_18608 = state_18571__$1;
(statearr_18586_18608[(2)] = inst_18563);

(statearr_18586_18608[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18572 === (8))){
var inst_18553 = (state_18571[(7)]);
var state_18571__$1 = state_18571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18571__$1,(11),out,inst_18553);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___18598,out))
;
return ((function (switch__16275__auto__,c__16389__auto___18598,out){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_18590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18590[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_18590[(1)] = (1));

return statearr_18590;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_18571){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_18571);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e18591){if((e18591 instanceof Object)){
var ex__16279__auto__ = e18591;
var statearr_18592_18609 = state_18571;
(statearr_18592_18609[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18571);

return cljs.core.cst$kw$recur;
} else {
throw e18591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__18610 = state_18571;
state_18571 = G__18610;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_18571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_18571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___18598,out))
})();
var state__16391__auto__ = (function (){var statearr_18593 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_18593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___18598);

return statearr_18593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___18598,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18620 = (function (map_LT_,f,ch,meta18621){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18621 = meta18621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18622,meta18621__$1){
var self__ = this;
var _18622__$1 = this;
return (new cljs.core.async.t_cljs$core$async18620(self__.map_LT_,self__.f,self__.ch,meta18621__$1));
});

cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18622){
var self__ = this;
var _18622__$1 = this;
return self__.meta18621;
});

cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18623 = (function (map_LT_,f,ch,meta18621,_,fn1,meta18624){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18621 = meta18621;
this._ = _;
this.fn1 = fn1;
this.meta18624 = meta18624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18625,meta18624__$1){
var self__ = this;
var _18625__$1 = this;
return (new cljs.core.async.t_cljs$core$async18623(self__.map_LT_,self__.f,self__.ch,self__.meta18621,self__._,self__.fn1,meta18624__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18625){
var self__ = this;
var _18625__$1 = this;
return self__.meta18624;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18623.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18623.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18623.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18623.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18611_SHARP_){
var G__18626 = (((p1__18611_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18611_SHARP_) : self__.f.call(null,p1__18611_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18626) : f1.call(null,G__18626));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18623.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18621,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18620], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18624], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18623";

cljs.core.async.t_cljs$core$async18623.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async18623");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18623 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18623(map_LT___$1,f__$1,ch__$1,meta18621__$1,___$2,fn1__$1,meta18624){
return (new cljs.core.async.t_cljs$core$async18623(map_LT___$1,f__$1,ch__$1,meta18621__$1,___$2,fn1__$1,meta18624));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18623(self__.map_LT_,self__.f,self__.ch,self__.meta18621,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6565__auto__ = ret;
if(cljs.core.truth_(and__6565__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6565__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18627 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18627) : self__.f.call(null,G__18627));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18621], null);
});

cljs.core.async.t_cljs$core$async18620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18620";

cljs.core.async.t_cljs$core$async18620.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async18620");
});

cljs.core.async.__GT_t_cljs$core$async18620 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18620(map_LT___$1,f__$1,ch__$1,meta18621){
return (new cljs.core.async.t_cljs$core$async18620(map_LT___$1,f__$1,ch__$1,meta18621));
});

}

return (new cljs.core.async.t_cljs$core$async18620(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18631 = (function (map_GT_,f,ch,meta18632){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18632 = meta18632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18633,meta18632__$1){
var self__ = this;
var _18633__$1 = this;
return (new cljs.core.async.t_cljs$core$async18631(self__.map_GT_,self__.f,self__.ch,meta18632__$1));
});

cljs.core.async.t_cljs$core$async18631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18633){
var self__ = this;
var _18633__$1 = this;
return self__.meta18632;
});

cljs.core.async.t_cljs$core$async18631.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18632], null);
});

cljs.core.async.t_cljs$core$async18631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18631";

cljs.core.async.t_cljs$core$async18631.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async18631");
});

cljs.core.async.__GT_t_cljs$core$async18631 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18631(map_GT___$1,f__$1,ch__$1,meta18632){
return (new cljs.core.async.t_cljs$core$async18631(map_GT___$1,f__$1,ch__$1,meta18632));
});

}

return (new cljs.core.async.t_cljs$core$async18631(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18637 = (function (filter_GT_,p,ch,meta18638){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18638 = meta18638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18639,meta18638__$1){
var self__ = this;
var _18639__$1 = this;
return (new cljs.core.async.t_cljs$core$async18637(self__.filter_GT_,self__.p,self__.ch,meta18638__$1));
});

cljs.core.async.t_cljs$core$async18637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18639){
var self__ = this;
var _18639__$1 = this;
return self__.meta18638;
});

cljs.core.async.t_cljs$core$async18637.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18637.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18637.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18638], null);
});

cljs.core.async.t_cljs$core$async18637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18637";

cljs.core.async.t_cljs$core$async18637.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async18637");
});

cljs.core.async.__GT_t_cljs$core$async18637 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18637(filter_GT___$1,p__$1,ch__$1,meta18638){
return (new cljs.core.async.t_cljs$core$async18637(filter_GT___$1,p__$1,ch__$1,meta18638));
});

}

return (new cljs.core.async.t_cljs$core$async18637(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args18640 = [];
var len__7652__auto___18684 = arguments.length;
var i__7653__auto___18685 = (0);
while(true){
if((i__7653__auto___18685 < len__7652__auto___18684)){
args18640.push((arguments[i__7653__auto___18685]));

var G__18686 = (i__7653__auto___18685 + (1));
i__7653__auto___18685 = G__18686;
continue;
} else {
}
break;
}

var G__18642 = args18640.length;
switch (G__18642) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18640.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16389__auto___18688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___18688,out){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___18688,out){
return (function (state_18663){
var state_val_18664 = (state_18663[(1)]);
if((state_val_18664 === (7))){
var inst_18659 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18665_18689 = state_18663__$1;
(statearr_18665_18689[(2)] = inst_18659);

(statearr_18665_18689[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (1))){
var state_18663__$1 = state_18663;
var statearr_18666_18690 = state_18663__$1;
(statearr_18666_18690[(2)] = null);

(statearr_18666_18690[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (4))){
var inst_18645 = (state_18663[(7)]);
var inst_18645__$1 = (state_18663[(2)]);
var inst_18646 = (inst_18645__$1 == null);
var state_18663__$1 = (function (){var statearr_18667 = state_18663;
(statearr_18667[(7)] = inst_18645__$1);

return statearr_18667;
})();
if(cljs.core.truth_(inst_18646)){
var statearr_18668_18691 = state_18663__$1;
(statearr_18668_18691[(1)] = (5));

} else {
var statearr_18669_18692 = state_18663__$1;
(statearr_18669_18692[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (6))){
var inst_18645 = (state_18663[(7)]);
var inst_18650 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18645) : p.call(null,inst_18645));
var state_18663__$1 = state_18663;
if(cljs.core.truth_(inst_18650)){
var statearr_18670_18693 = state_18663__$1;
(statearr_18670_18693[(1)] = (8));

} else {
var statearr_18671_18694 = state_18663__$1;
(statearr_18671_18694[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (3))){
var inst_18661 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18663__$1,inst_18661);
} else {
if((state_val_18664 === (2))){
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18663__$1,(4),ch);
} else {
if((state_val_18664 === (11))){
var inst_18653 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18672_18695 = state_18663__$1;
(statearr_18672_18695[(2)] = inst_18653);

(statearr_18672_18695[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (9))){
var state_18663__$1 = state_18663;
var statearr_18673_18696 = state_18663__$1;
(statearr_18673_18696[(2)] = null);

(statearr_18673_18696[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (5))){
var inst_18648 = cljs.core.async.close_BANG_(out);
var state_18663__$1 = state_18663;
var statearr_18674_18697 = state_18663__$1;
(statearr_18674_18697[(2)] = inst_18648);

(statearr_18674_18697[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (10))){
var inst_18656 = (state_18663[(2)]);
var state_18663__$1 = (function (){var statearr_18675 = state_18663;
(statearr_18675[(8)] = inst_18656);

return statearr_18675;
})();
var statearr_18676_18698 = state_18663__$1;
(statearr_18676_18698[(2)] = null);

(statearr_18676_18698[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (8))){
var inst_18645 = (state_18663[(7)]);
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18663__$1,(11),out,inst_18645);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___18688,out))
;
return ((function (switch__16275__auto__,c__16389__auto___18688,out){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_18680 = [null,null,null,null,null,null,null,null,null];
(statearr_18680[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_18680[(1)] = (1));

return statearr_18680;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_18663){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_18663);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e18681){if((e18681 instanceof Object)){
var ex__16279__auto__ = e18681;
var statearr_18682_18699 = state_18663;
(statearr_18682_18699[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18663);

return cljs.core.cst$kw$recur;
} else {
throw e18681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__18700 = state_18663;
state_18663 = G__18700;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_18663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_18663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___18688,out))
})();
var state__16391__auto__ = (function (){var statearr_18683 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_18683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___18688);

return statearr_18683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___18688,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18701 = [];
var len__7652__auto___18704 = arguments.length;
var i__7653__auto___18705 = (0);
while(true){
if((i__7653__auto___18705 < len__7652__auto___18704)){
args18701.push((arguments[i__7653__auto___18705]));

var G__18706 = (i__7653__auto___18705 + (1));
i__7653__auto___18705 = G__18706;
continue;
} else {
}
break;
}

var G__18703 = args18701.length;
switch (G__18703) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18701.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto__){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto__){
return (function (state_18873){
var state_val_18874 = (state_18873[(1)]);
if((state_val_18874 === (7))){
var inst_18869 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
var statearr_18875_18916 = state_18873__$1;
(statearr_18875_18916[(2)] = inst_18869);

(statearr_18875_18916[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (20))){
var inst_18839 = (state_18873[(7)]);
var inst_18850 = (state_18873[(2)]);
var inst_18851 = cljs.core.next(inst_18839);
var inst_18825 = inst_18851;
var inst_18826 = null;
var inst_18827 = (0);
var inst_18828 = (0);
var state_18873__$1 = (function (){var statearr_18876 = state_18873;
(statearr_18876[(8)] = inst_18850);

(statearr_18876[(9)] = inst_18828);

(statearr_18876[(10)] = inst_18827);

(statearr_18876[(11)] = inst_18826);

(statearr_18876[(12)] = inst_18825);

return statearr_18876;
})();
var statearr_18877_18917 = state_18873__$1;
(statearr_18877_18917[(2)] = null);

(statearr_18877_18917[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (1))){
var state_18873__$1 = state_18873;
var statearr_18878_18918 = state_18873__$1;
(statearr_18878_18918[(2)] = null);

(statearr_18878_18918[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (4))){
var inst_18814 = (state_18873[(13)]);
var inst_18814__$1 = (state_18873[(2)]);
var inst_18815 = (inst_18814__$1 == null);
var state_18873__$1 = (function (){var statearr_18879 = state_18873;
(statearr_18879[(13)] = inst_18814__$1);

return statearr_18879;
})();
if(cljs.core.truth_(inst_18815)){
var statearr_18880_18919 = state_18873__$1;
(statearr_18880_18919[(1)] = (5));

} else {
var statearr_18881_18920 = state_18873__$1;
(statearr_18881_18920[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (15))){
var state_18873__$1 = state_18873;
var statearr_18885_18921 = state_18873__$1;
(statearr_18885_18921[(2)] = null);

(statearr_18885_18921[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (21))){
var state_18873__$1 = state_18873;
var statearr_18886_18922 = state_18873__$1;
(statearr_18886_18922[(2)] = null);

(statearr_18886_18922[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (13))){
var inst_18828 = (state_18873[(9)]);
var inst_18827 = (state_18873[(10)]);
var inst_18826 = (state_18873[(11)]);
var inst_18825 = (state_18873[(12)]);
var inst_18835 = (state_18873[(2)]);
var inst_18836 = (inst_18828 + (1));
var tmp18882 = inst_18827;
var tmp18883 = inst_18826;
var tmp18884 = inst_18825;
var inst_18825__$1 = tmp18884;
var inst_18826__$1 = tmp18883;
var inst_18827__$1 = tmp18882;
var inst_18828__$1 = inst_18836;
var state_18873__$1 = (function (){var statearr_18887 = state_18873;
(statearr_18887[(14)] = inst_18835);

(statearr_18887[(9)] = inst_18828__$1);

(statearr_18887[(10)] = inst_18827__$1);

(statearr_18887[(11)] = inst_18826__$1);

(statearr_18887[(12)] = inst_18825__$1);

return statearr_18887;
})();
var statearr_18888_18923 = state_18873__$1;
(statearr_18888_18923[(2)] = null);

(statearr_18888_18923[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (22))){
var state_18873__$1 = state_18873;
var statearr_18889_18924 = state_18873__$1;
(statearr_18889_18924[(2)] = null);

(statearr_18889_18924[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (6))){
var inst_18814 = (state_18873[(13)]);
var inst_18823 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18814) : f.call(null,inst_18814));
var inst_18824 = cljs.core.seq(inst_18823);
var inst_18825 = inst_18824;
var inst_18826 = null;
var inst_18827 = (0);
var inst_18828 = (0);
var state_18873__$1 = (function (){var statearr_18890 = state_18873;
(statearr_18890[(9)] = inst_18828);

(statearr_18890[(10)] = inst_18827);

(statearr_18890[(11)] = inst_18826);

(statearr_18890[(12)] = inst_18825);

return statearr_18890;
})();
var statearr_18891_18925 = state_18873__$1;
(statearr_18891_18925[(2)] = null);

(statearr_18891_18925[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (17))){
var inst_18839 = (state_18873[(7)]);
var inst_18843 = cljs.core.chunk_first(inst_18839);
var inst_18844 = cljs.core.chunk_rest(inst_18839);
var inst_18845 = cljs.core.count(inst_18843);
var inst_18825 = inst_18844;
var inst_18826 = inst_18843;
var inst_18827 = inst_18845;
var inst_18828 = (0);
var state_18873__$1 = (function (){var statearr_18892 = state_18873;
(statearr_18892[(9)] = inst_18828);

(statearr_18892[(10)] = inst_18827);

(statearr_18892[(11)] = inst_18826);

(statearr_18892[(12)] = inst_18825);

return statearr_18892;
})();
var statearr_18893_18926 = state_18873__$1;
(statearr_18893_18926[(2)] = null);

(statearr_18893_18926[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (3))){
var inst_18871 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18873__$1,inst_18871);
} else {
if((state_val_18874 === (12))){
var inst_18859 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
var statearr_18894_18927 = state_18873__$1;
(statearr_18894_18927[(2)] = inst_18859);

(statearr_18894_18927[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (2))){
var state_18873__$1 = state_18873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18873__$1,(4),in$);
} else {
if((state_val_18874 === (23))){
var inst_18867 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
var statearr_18895_18928 = state_18873__$1;
(statearr_18895_18928[(2)] = inst_18867);

(statearr_18895_18928[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (19))){
var inst_18854 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
var statearr_18896_18929 = state_18873__$1;
(statearr_18896_18929[(2)] = inst_18854);

(statearr_18896_18929[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (11))){
var inst_18839 = (state_18873[(7)]);
var inst_18825 = (state_18873[(12)]);
var inst_18839__$1 = cljs.core.seq(inst_18825);
var state_18873__$1 = (function (){var statearr_18897 = state_18873;
(statearr_18897[(7)] = inst_18839__$1);

return statearr_18897;
})();
if(inst_18839__$1){
var statearr_18898_18930 = state_18873__$1;
(statearr_18898_18930[(1)] = (14));

} else {
var statearr_18899_18931 = state_18873__$1;
(statearr_18899_18931[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (9))){
var inst_18861 = (state_18873[(2)]);
var inst_18862 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18873__$1 = (function (){var statearr_18900 = state_18873;
(statearr_18900[(15)] = inst_18861);

return statearr_18900;
})();
if(cljs.core.truth_(inst_18862)){
var statearr_18901_18932 = state_18873__$1;
(statearr_18901_18932[(1)] = (21));

} else {
var statearr_18902_18933 = state_18873__$1;
(statearr_18902_18933[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (5))){
var inst_18817 = cljs.core.async.close_BANG_(out);
var state_18873__$1 = state_18873;
var statearr_18903_18934 = state_18873__$1;
(statearr_18903_18934[(2)] = inst_18817);

(statearr_18903_18934[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (14))){
var inst_18839 = (state_18873[(7)]);
var inst_18841 = cljs.core.chunked_seq_QMARK_(inst_18839);
var state_18873__$1 = state_18873;
if(inst_18841){
var statearr_18904_18935 = state_18873__$1;
(statearr_18904_18935[(1)] = (17));

} else {
var statearr_18905_18936 = state_18873__$1;
(statearr_18905_18936[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (16))){
var inst_18857 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
var statearr_18906_18937 = state_18873__$1;
(statearr_18906_18937[(2)] = inst_18857);

(statearr_18906_18937[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18874 === (10))){
var inst_18828 = (state_18873[(9)]);
var inst_18826 = (state_18873[(11)]);
var inst_18833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18826,inst_18828);
var state_18873__$1 = state_18873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18873__$1,(13),out,inst_18833);
} else {
if((state_val_18874 === (18))){
var inst_18839 = (state_18873[(7)]);
var inst_18848 = cljs.core.first(inst_18839);
var state_18873__$1 = state_18873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18873__$1,(20),out,inst_18848);
} else {
if((state_val_18874 === (8))){
var inst_18828 = (state_18873[(9)]);
var inst_18827 = (state_18873[(10)]);
var inst_18830 = (inst_18828 < inst_18827);
var inst_18831 = inst_18830;
var state_18873__$1 = state_18873;
if(cljs.core.truth_(inst_18831)){
var statearr_18907_18938 = state_18873__$1;
(statearr_18907_18938[(1)] = (10));

} else {
var statearr_18908_18939 = state_18873__$1;
(statearr_18908_18939[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto__))
;
return ((function (switch__16275__auto__,c__16389__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16276__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16276__auto____0 = (function (){
var statearr_18912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18912[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16276__auto__);

(statearr_18912[(1)] = (1));

return statearr_18912;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16276__auto____1 = (function (state_18873){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_18873);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e18913){if((e18913 instanceof Object)){
var ex__16279__auto__ = e18913;
var statearr_18914_18940 = state_18873;
(statearr_18914_18940[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18873);

return cljs.core.cst$kw$recur;
} else {
throw e18913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__18941 = state_18873;
state_18873 = G__18941;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16276__auto__ = function(state_18873){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16276__auto____1.call(this,state_18873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16276__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16276__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto__))
})();
var state__16391__auto__ = (function (){var statearr_18915 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_18915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto__);

return statearr_18915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto__))
);

return c__16389__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18942 = [];
var len__7652__auto___18945 = arguments.length;
var i__7653__auto___18946 = (0);
while(true){
if((i__7653__auto___18946 < len__7652__auto___18945)){
args18942.push((arguments[i__7653__auto___18946]));

var G__18947 = (i__7653__auto___18946 + (1));
i__7653__auto___18946 = G__18947;
continue;
} else {
}
break;
}

var G__18944 = args18942.length;
switch (G__18944) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18942.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18949 = [];
var len__7652__auto___18952 = arguments.length;
var i__7653__auto___18953 = (0);
while(true){
if((i__7653__auto___18953 < len__7652__auto___18952)){
args18949.push((arguments[i__7653__auto___18953]));

var G__18954 = (i__7653__auto___18953 + (1));
i__7653__auto___18953 = G__18954;
continue;
} else {
}
break;
}

var G__18951 = args18949.length;
switch (G__18951) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18949.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args18956 = [];
var len__7652__auto___19007 = arguments.length;
var i__7653__auto___19008 = (0);
while(true){
if((i__7653__auto___19008 < len__7652__auto___19007)){
args18956.push((arguments[i__7653__auto___19008]));

var G__19009 = (i__7653__auto___19008 + (1));
i__7653__auto___19008 = G__19009;
continue;
} else {
}
break;
}

var G__18958 = args18956.length;
switch (G__18958) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18956.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16389__auto___19011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___19011,out){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___19011,out){
return (function (state_18982){
var state_val_18983 = (state_18982[(1)]);
if((state_val_18983 === (7))){
var inst_18977 = (state_18982[(2)]);
var state_18982__$1 = state_18982;
var statearr_18984_19012 = state_18982__$1;
(statearr_18984_19012[(2)] = inst_18977);

(statearr_18984_19012[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (1))){
var inst_18959 = null;
var state_18982__$1 = (function (){var statearr_18985 = state_18982;
(statearr_18985[(7)] = inst_18959);

return statearr_18985;
})();
var statearr_18986_19013 = state_18982__$1;
(statearr_18986_19013[(2)] = null);

(statearr_18986_19013[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (4))){
var inst_18962 = (state_18982[(8)]);
var inst_18962__$1 = (state_18982[(2)]);
var inst_18963 = (inst_18962__$1 == null);
var inst_18964 = cljs.core.not(inst_18963);
var state_18982__$1 = (function (){var statearr_18987 = state_18982;
(statearr_18987[(8)] = inst_18962__$1);

return statearr_18987;
})();
if(inst_18964){
var statearr_18988_19014 = state_18982__$1;
(statearr_18988_19014[(1)] = (5));

} else {
var statearr_18989_19015 = state_18982__$1;
(statearr_18989_19015[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (6))){
var state_18982__$1 = state_18982;
var statearr_18990_19016 = state_18982__$1;
(statearr_18990_19016[(2)] = null);

(statearr_18990_19016[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (3))){
var inst_18979 = (state_18982[(2)]);
var inst_18980 = cljs.core.async.close_BANG_(out);
var state_18982__$1 = (function (){var statearr_18991 = state_18982;
(statearr_18991[(9)] = inst_18979);

return statearr_18991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18982__$1,inst_18980);
} else {
if((state_val_18983 === (2))){
var state_18982__$1 = state_18982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18982__$1,(4),ch);
} else {
if((state_val_18983 === (11))){
var inst_18962 = (state_18982[(8)]);
var inst_18971 = (state_18982[(2)]);
var inst_18959 = inst_18962;
var state_18982__$1 = (function (){var statearr_18992 = state_18982;
(statearr_18992[(7)] = inst_18959);

(statearr_18992[(10)] = inst_18971);

return statearr_18992;
})();
var statearr_18993_19017 = state_18982__$1;
(statearr_18993_19017[(2)] = null);

(statearr_18993_19017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (9))){
var inst_18962 = (state_18982[(8)]);
var state_18982__$1 = state_18982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18982__$1,(11),out,inst_18962);
} else {
if((state_val_18983 === (5))){
var inst_18959 = (state_18982[(7)]);
var inst_18962 = (state_18982[(8)]);
var inst_18966 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18962,inst_18959);
var state_18982__$1 = state_18982;
if(inst_18966){
var statearr_18995_19018 = state_18982__$1;
(statearr_18995_19018[(1)] = (8));

} else {
var statearr_18996_19019 = state_18982__$1;
(statearr_18996_19019[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (10))){
var inst_18974 = (state_18982[(2)]);
var state_18982__$1 = state_18982;
var statearr_18997_19020 = state_18982__$1;
(statearr_18997_19020[(2)] = inst_18974);

(statearr_18997_19020[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18983 === (8))){
var inst_18959 = (state_18982[(7)]);
var tmp18994 = inst_18959;
var inst_18959__$1 = tmp18994;
var state_18982__$1 = (function (){var statearr_18998 = state_18982;
(statearr_18998[(7)] = inst_18959__$1);

return statearr_18998;
})();
var statearr_18999_19021 = state_18982__$1;
(statearr_18999_19021[(2)] = null);

(statearr_18999_19021[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___19011,out))
;
return ((function (switch__16275__auto__,c__16389__auto___19011,out){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_19003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19003[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_19003[(1)] = (1));

return statearr_19003;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_18982){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_18982);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e19004){if((e19004 instanceof Object)){
var ex__16279__auto__ = e19004;
var statearr_19005_19022 = state_18982;
(statearr_19005_19022[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18982);

return cljs.core.cst$kw$recur;
} else {
throw e19004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__19023 = state_18982;
state_18982 = G__19023;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_18982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_18982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___19011,out))
})();
var state__16391__auto__ = (function (){var statearr_19006 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_19006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___19011);

return statearr_19006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___19011,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19024 = [];
var len__7652__auto___19094 = arguments.length;
var i__7653__auto___19095 = (0);
while(true){
if((i__7653__auto___19095 < len__7652__auto___19094)){
args19024.push((arguments[i__7653__auto___19095]));

var G__19096 = (i__7653__auto___19095 + (1));
i__7653__auto___19095 = G__19096;
continue;
} else {
}
break;
}

var G__19026 = args19024.length;
switch (G__19026) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19024.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16389__auto___19098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___19098,out){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___19098,out){
return (function (state_19064){
var state_val_19065 = (state_19064[(1)]);
if((state_val_19065 === (7))){
var inst_19060 = (state_19064[(2)]);
var state_19064__$1 = state_19064;
var statearr_19066_19099 = state_19064__$1;
(statearr_19066_19099[(2)] = inst_19060);

(statearr_19066_19099[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (1))){
var inst_19027 = (new Array(n));
var inst_19028 = inst_19027;
var inst_19029 = (0);
var state_19064__$1 = (function (){var statearr_19067 = state_19064;
(statearr_19067[(7)] = inst_19029);

(statearr_19067[(8)] = inst_19028);

return statearr_19067;
})();
var statearr_19068_19100 = state_19064__$1;
(statearr_19068_19100[(2)] = null);

(statearr_19068_19100[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (4))){
var inst_19032 = (state_19064[(9)]);
var inst_19032__$1 = (state_19064[(2)]);
var inst_19033 = (inst_19032__$1 == null);
var inst_19034 = cljs.core.not(inst_19033);
var state_19064__$1 = (function (){var statearr_19069 = state_19064;
(statearr_19069[(9)] = inst_19032__$1);

return statearr_19069;
})();
if(inst_19034){
var statearr_19070_19101 = state_19064__$1;
(statearr_19070_19101[(1)] = (5));

} else {
var statearr_19071_19102 = state_19064__$1;
(statearr_19071_19102[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (15))){
var inst_19054 = (state_19064[(2)]);
var state_19064__$1 = state_19064;
var statearr_19072_19103 = state_19064__$1;
(statearr_19072_19103[(2)] = inst_19054);

(statearr_19072_19103[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (13))){
var state_19064__$1 = state_19064;
var statearr_19073_19104 = state_19064__$1;
(statearr_19073_19104[(2)] = null);

(statearr_19073_19104[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (6))){
var inst_19029 = (state_19064[(7)]);
var inst_19050 = (inst_19029 > (0));
var state_19064__$1 = state_19064;
if(cljs.core.truth_(inst_19050)){
var statearr_19074_19105 = state_19064__$1;
(statearr_19074_19105[(1)] = (12));

} else {
var statearr_19075_19106 = state_19064__$1;
(statearr_19075_19106[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (3))){
var inst_19062 = (state_19064[(2)]);
var state_19064__$1 = state_19064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19064__$1,inst_19062);
} else {
if((state_val_19065 === (12))){
var inst_19028 = (state_19064[(8)]);
var inst_19052 = cljs.core.vec(inst_19028);
var state_19064__$1 = state_19064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19064__$1,(15),out,inst_19052);
} else {
if((state_val_19065 === (2))){
var state_19064__$1 = state_19064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19064__$1,(4),ch);
} else {
if((state_val_19065 === (11))){
var inst_19044 = (state_19064[(2)]);
var inst_19045 = (new Array(n));
var inst_19028 = inst_19045;
var inst_19029 = (0);
var state_19064__$1 = (function (){var statearr_19076 = state_19064;
(statearr_19076[(7)] = inst_19029);

(statearr_19076[(8)] = inst_19028);

(statearr_19076[(10)] = inst_19044);

return statearr_19076;
})();
var statearr_19077_19107 = state_19064__$1;
(statearr_19077_19107[(2)] = null);

(statearr_19077_19107[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (9))){
var inst_19028 = (state_19064[(8)]);
var inst_19042 = cljs.core.vec(inst_19028);
var state_19064__$1 = state_19064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19064__$1,(11),out,inst_19042);
} else {
if((state_val_19065 === (5))){
var inst_19029 = (state_19064[(7)]);
var inst_19037 = (state_19064[(11)]);
var inst_19028 = (state_19064[(8)]);
var inst_19032 = (state_19064[(9)]);
var inst_19036 = (inst_19028[inst_19029] = inst_19032);
var inst_19037__$1 = (inst_19029 + (1));
var inst_19038 = (inst_19037__$1 < n);
var state_19064__$1 = (function (){var statearr_19078 = state_19064;
(statearr_19078[(12)] = inst_19036);

(statearr_19078[(11)] = inst_19037__$1);

return statearr_19078;
})();
if(cljs.core.truth_(inst_19038)){
var statearr_19079_19108 = state_19064__$1;
(statearr_19079_19108[(1)] = (8));

} else {
var statearr_19080_19109 = state_19064__$1;
(statearr_19080_19109[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (14))){
var inst_19057 = (state_19064[(2)]);
var inst_19058 = cljs.core.async.close_BANG_(out);
var state_19064__$1 = (function (){var statearr_19082 = state_19064;
(statearr_19082[(13)] = inst_19057);

return statearr_19082;
})();
var statearr_19083_19110 = state_19064__$1;
(statearr_19083_19110[(2)] = inst_19058);

(statearr_19083_19110[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (10))){
var inst_19048 = (state_19064[(2)]);
var state_19064__$1 = state_19064;
var statearr_19084_19111 = state_19064__$1;
(statearr_19084_19111[(2)] = inst_19048);

(statearr_19084_19111[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19065 === (8))){
var inst_19037 = (state_19064[(11)]);
var inst_19028 = (state_19064[(8)]);
var tmp19081 = inst_19028;
var inst_19028__$1 = tmp19081;
var inst_19029 = inst_19037;
var state_19064__$1 = (function (){var statearr_19085 = state_19064;
(statearr_19085[(7)] = inst_19029);

(statearr_19085[(8)] = inst_19028__$1);

return statearr_19085;
})();
var statearr_19086_19112 = state_19064__$1;
(statearr_19086_19112[(2)] = null);

(statearr_19086_19112[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___19098,out))
;
return ((function (switch__16275__auto__,c__16389__auto___19098,out){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_19090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19090[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_19090[(1)] = (1));

return statearr_19090;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_19064){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_19064);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e19091){if((e19091 instanceof Object)){
var ex__16279__auto__ = e19091;
var statearr_19092_19113 = state_19064;
(statearr_19092_19113[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19064);

return cljs.core.cst$kw$recur;
} else {
throw e19091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__19114 = state_19064;
state_19064 = G__19114;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_19064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_19064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___19098,out))
})();
var state__16391__auto__ = (function (){var statearr_19093 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_19093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___19098);

return statearr_19093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___19098,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19115 = [];
var len__7652__auto___19189 = arguments.length;
var i__7653__auto___19190 = (0);
while(true){
if((i__7653__auto___19190 < len__7652__auto___19189)){
args19115.push((arguments[i__7653__auto___19190]));

var G__19191 = (i__7653__auto___19190 + (1));
i__7653__auto___19190 = G__19191;
continue;
} else {
}
break;
}

var G__19117 = args19115.length;
switch (G__19117) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19115.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16389__auto___19193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___19193,out){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___19193,out){
return (function (state_19159){
var state_val_19160 = (state_19159[(1)]);
if((state_val_19160 === (7))){
var inst_19155 = (state_19159[(2)]);
var state_19159__$1 = state_19159;
var statearr_19161_19194 = state_19159__$1;
(statearr_19161_19194[(2)] = inst_19155);

(statearr_19161_19194[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (1))){
var inst_19118 = [];
var inst_19119 = inst_19118;
var inst_19120 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19159__$1 = (function (){var statearr_19162 = state_19159;
(statearr_19162[(7)] = inst_19120);

(statearr_19162[(8)] = inst_19119);

return statearr_19162;
})();
var statearr_19163_19195 = state_19159__$1;
(statearr_19163_19195[(2)] = null);

(statearr_19163_19195[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (4))){
var inst_19123 = (state_19159[(9)]);
var inst_19123__$1 = (state_19159[(2)]);
var inst_19124 = (inst_19123__$1 == null);
var inst_19125 = cljs.core.not(inst_19124);
var state_19159__$1 = (function (){var statearr_19164 = state_19159;
(statearr_19164[(9)] = inst_19123__$1);

return statearr_19164;
})();
if(inst_19125){
var statearr_19165_19196 = state_19159__$1;
(statearr_19165_19196[(1)] = (5));

} else {
var statearr_19166_19197 = state_19159__$1;
(statearr_19166_19197[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (15))){
var inst_19149 = (state_19159[(2)]);
var state_19159__$1 = state_19159;
var statearr_19167_19198 = state_19159__$1;
(statearr_19167_19198[(2)] = inst_19149);

(statearr_19167_19198[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (13))){
var state_19159__$1 = state_19159;
var statearr_19168_19199 = state_19159__$1;
(statearr_19168_19199[(2)] = null);

(statearr_19168_19199[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (6))){
var inst_19119 = (state_19159[(8)]);
var inst_19144 = inst_19119.length;
var inst_19145 = (inst_19144 > (0));
var state_19159__$1 = state_19159;
if(cljs.core.truth_(inst_19145)){
var statearr_19169_19200 = state_19159__$1;
(statearr_19169_19200[(1)] = (12));

} else {
var statearr_19170_19201 = state_19159__$1;
(statearr_19170_19201[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (3))){
var inst_19157 = (state_19159[(2)]);
var state_19159__$1 = state_19159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19159__$1,inst_19157);
} else {
if((state_val_19160 === (12))){
var inst_19119 = (state_19159[(8)]);
var inst_19147 = cljs.core.vec(inst_19119);
var state_19159__$1 = state_19159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19159__$1,(15),out,inst_19147);
} else {
if((state_val_19160 === (2))){
var state_19159__$1 = state_19159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19159__$1,(4),ch);
} else {
if((state_val_19160 === (11))){
var inst_19127 = (state_19159[(10)]);
var inst_19123 = (state_19159[(9)]);
var inst_19137 = (state_19159[(2)]);
var inst_19138 = [];
var inst_19139 = inst_19138.push(inst_19123);
var inst_19119 = inst_19138;
var inst_19120 = inst_19127;
var state_19159__$1 = (function (){var statearr_19171 = state_19159;
(statearr_19171[(11)] = inst_19139);

(statearr_19171[(7)] = inst_19120);

(statearr_19171[(12)] = inst_19137);

(statearr_19171[(8)] = inst_19119);

return statearr_19171;
})();
var statearr_19172_19202 = state_19159__$1;
(statearr_19172_19202[(2)] = null);

(statearr_19172_19202[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (9))){
var inst_19119 = (state_19159[(8)]);
var inst_19135 = cljs.core.vec(inst_19119);
var state_19159__$1 = state_19159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19159__$1,(11),out,inst_19135);
} else {
if((state_val_19160 === (5))){
var inst_19120 = (state_19159[(7)]);
var inst_19127 = (state_19159[(10)]);
var inst_19123 = (state_19159[(9)]);
var inst_19127__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19123) : f.call(null,inst_19123));
var inst_19128 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19127__$1,inst_19120);
var inst_19129 = cljs.core.keyword_identical_QMARK_(inst_19120,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19130 = (inst_19128) || (inst_19129);
var state_19159__$1 = (function (){var statearr_19173 = state_19159;
(statearr_19173[(10)] = inst_19127__$1);

return statearr_19173;
})();
if(cljs.core.truth_(inst_19130)){
var statearr_19174_19203 = state_19159__$1;
(statearr_19174_19203[(1)] = (8));

} else {
var statearr_19175_19204 = state_19159__$1;
(statearr_19175_19204[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (14))){
var inst_19152 = (state_19159[(2)]);
var inst_19153 = cljs.core.async.close_BANG_(out);
var state_19159__$1 = (function (){var statearr_19177 = state_19159;
(statearr_19177[(13)] = inst_19152);

return statearr_19177;
})();
var statearr_19178_19205 = state_19159__$1;
(statearr_19178_19205[(2)] = inst_19153);

(statearr_19178_19205[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (10))){
var inst_19142 = (state_19159[(2)]);
var state_19159__$1 = state_19159;
var statearr_19179_19206 = state_19159__$1;
(statearr_19179_19206[(2)] = inst_19142);

(statearr_19179_19206[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19160 === (8))){
var inst_19127 = (state_19159[(10)]);
var inst_19119 = (state_19159[(8)]);
var inst_19123 = (state_19159[(9)]);
var inst_19132 = inst_19119.push(inst_19123);
var tmp19176 = inst_19119;
var inst_19119__$1 = tmp19176;
var inst_19120 = inst_19127;
var state_19159__$1 = (function (){var statearr_19180 = state_19159;
(statearr_19180[(7)] = inst_19120);

(statearr_19180[(14)] = inst_19132);

(statearr_19180[(8)] = inst_19119__$1);

return statearr_19180;
})();
var statearr_19181_19207 = state_19159__$1;
(statearr_19181_19207[(2)] = null);

(statearr_19181_19207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16389__auto___19193,out))
;
return ((function (switch__16275__auto__,c__16389__auto___19193,out){
return (function() {
var cljs$core$async$state_machine__16276__auto__ = null;
var cljs$core$async$state_machine__16276__auto____0 = (function (){
var statearr_19185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19185[(0)] = cljs$core$async$state_machine__16276__auto__);

(statearr_19185[(1)] = (1));

return statearr_19185;
});
var cljs$core$async$state_machine__16276__auto____1 = (function (state_19159){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_19159);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e19186){if((e19186 instanceof Object)){
var ex__16279__auto__ = e19186;
var statearr_19187_19208 = state_19159;
(statearr_19187_19208[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19159);

return cljs.core.cst$kw$recur;
} else {
throw e19186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__19209 = state_19159;
state_19159 = G__19209;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs$core$async$state_machine__16276__auto__ = function(state_19159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16276__auto____1.call(this,state_19159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16276__auto____0;
cljs$core$async$state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16276__auto____1;
return cljs$core$async$state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___19193,out))
})();
var state__16391__auto__ = (function (){var statearr_19188 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_19188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___19193);

return statearr_19188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___19193,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

