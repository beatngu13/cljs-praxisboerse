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
var args15506 = [];
var len__7652__auto___15512 = arguments.length;
var i__7653__auto___15513 = (0);
while(true){
if((i__7653__auto___15513 < len__7652__auto___15512)){
args15506.push((arguments[i__7653__auto___15513]));

var G__15514 = (i__7653__auto___15513 + (1));
i__7653__auto___15513 = G__15514;
continue;
} else {
}
break;
}

var G__15508 = args15506.length;
switch (G__15508) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15506.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15509 = (function (f,blockable,meta15510){
this.f = f;
this.blockable = blockable;
this.meta15510 = meta15510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15511,meta15510__$1){
var self__ = this;
var _15511__$1 = this;
return (new cljs.core.async.t_cljs$core$async15509(self__.f,self__.blockable,meta15510__$1));
});

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15511){
var self__ = this;
var _15511__$1 = this;
return self__.meta15510;
});

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15510], null);
});

cljs.core.async.t_cljs$core$async15509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15509";

cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async15509");
});

cljs.core.async.__GT_t_cljs$core$async15509 = (function cljs$core$async$__GT_t_cljs$core$async15509(f__$1,blockable__$1,meta15510){
return (new cljs.core.async.t_cljs$core$async15509(f__$1,blockable__$1,meta15510));
});

}

return (new cljs.core.async.t_cljs$core$async15509(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args15518 = [];
var len__7652__auto___15521 = arguments.length;
var i__7653__auto___15522 = (0);
while(true){
if((i__7653__auto___15522 < len__7652__auto___15521)){
args15518.push((arguments[i__7653__auto___15522]));

var G__15523 = (i__7653__auto___15522 + (1));
i__7653__auto___15522 = G__15523;
continue;
} else {
}
break;
}

var G__15520 = args15518.length;
switch (G__15520) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15518.length)].join('')));

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
var args15525 = [];
var len__7652__auto___15528 = arguments.length;
var i__7653__auto___15529 = (0);
while(true){
if((i__7653__auto___15529 < len__7652__auto___15528)){
args15525.push((arguments[i__7653__auto___15529]));

var G__15530 = (i__7653__auto___15529 + (1));
i__7653__auto___15529 = G__15530;
continue;
} else {
}
break;
}

var G__15527 = args15525.length;
switch (G__15527) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15525.length)].join('')));

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
var args15532 = [];
var len__7652__auto___15535 = arguments.length;
var i__7653__auto___15536 = (0);
while(true){
if((i__7653__auto___15536 < len__7652__auto___15535)){
args15532.push((arguments[i__7653__auto___15536]));

var G__15537 = (i__7653__auto___15536 + (1));
i__7653__auto___15536 = G__15537;
continue;
} else {
}
break;
}

var G__15534 = args15532.length;
switch (G__15534) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15532.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15539 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15539) : fn1.call(null,val_15539));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15539,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15539) : fn1.call(null,val_15539));
});})(val_15539,ret))
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
var args15540 = [];
var len__7652__auto___15543 = arguments.length;
var i__7653__auto___15544 = (0);
while(true){
if((i__7653__auto___15544 < len__7652__auto___15543)){
args15540.push((arguments[i__7653__auto___15544]));

var G__15545 = (i__7653__auto___15544 + (1));
i__7653__auto___15544 = G__15545;
continue;
} else {
}
break;
}

var G__15542 = args15540.length;
switch (G__15542) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15540.length)].join('')));

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
var n__7492__auto___15547 = n;
var x_15548 = (0);
while(true){
if((x_15548 < n__7492__auto___15547)){
(a[x_15548] = (0));

var G__15549 = (x_15548 + (1));
x_15548 = G__15549;
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

var G__15550 = (i + (1));
i = G__15550;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15554 = (function (alt_flag,flag,meta15555){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15555 = meta15555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15556,meta15555__$1){
var self__ = this;
var _15556__$1 = this;
return (new cljs.core.async.t_cljs$core$async15554(self__.alt_flag,self__.flag,meta15555__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15556){
var self__ = this;
var _15556__$1 = this;
return self__.meta15555;
});})(flag))
;

cljs.core.async.t_cljs$core$async15554.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15554.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15555], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15554";

cljs.core.async.t_cljs$core$async15554.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async15554");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15554 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15554(alt_flag__$1,flag__$1,meta15555){
return (new cljs.core.async.t_cljs$core$async15554(alt_flag__$1,flag__$1,meta15555));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15554(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15560 = (function (alt_handler,flag,cb,meta15561){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15561 = meta15561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15562,meta15561__$1){
var self__ = this;
var _15562__$1 = this;
return (new cljs.core.async.t_cljs$core$async15560(self__.alt_handler,self__.flag,self__.cb,meta15561__$1));
});

cljs.core.async.t_cljs$core$async15560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15562){
var self__ = this;
var _15562__$1 = this;
return self__.meta15561;
});

cljs.core.async.t_cljs$core$async15560.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15561], null);
});

cljs.core.async.t_cljs$core$async15560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15560";

cljs.core.async.t_cljs$core$async15560.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async15560");
});

cljs.core.async.__GT_t_cljs$core$async15560 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15560(alt_handler__$1,flag__$1,cb__$1,meta15561){
return (new cljs.core.async.t_cljs$core$async15560(alt_handler__$1,flag__$1,cb__$1,meta15561));
});

}

return (new cljs.core.async.t_cljs$core$async15560(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15563_SHARP_){
var G__15567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15563_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15567) : fret.call(null,G__15567));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15564_SHARP_){
var G__15568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15564_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15568) : fret.call(null,G__15568));
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
var G__15569 = (i + (1));
i = G__15569;
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
var len__7652__auto___15575 = arguments.length;
var i__7653__auto___15576 = (0);
while(true){
if((i__7653__auto___15576 < len__7652__auto___15575)){
args__7659__auto__.push((arguments[i__7653__auto___15576]));

var G__15577 = (i__7653__auto___15576 + (1));
i__7653__auto___15576 = G__15577;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15572){
var map__15573 = p__15572;
var map__15573__$1 = ((((!((map__15573 == null)))?((((map__15573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15573):map__15573);
var opts = map__15573__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15570){
var G__15571 = cljs.core.first(seq15570);
var seq15570__$1 = cljs.core.next(seq15570);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15571,seq15570__$1);
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
var args15578 = [];
var len__7652__auto___15628 = arguments.length;
var i__7653__auto___15629 = (0);
while(true){
if((i__7653__auto___15629 < len__7652__auto___15628)){
args15578.push((arguments[i__7653__auto___15629]));

var G__15630 = (i__7653__auto___15629 + (1));
i__7653__auto___15629 = G__15630;
continue;
} else {
}
break;
}

var G__15580 = args15578.length;
switch (G__15580) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15578.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15461__auto___15632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___15632){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___15632){
return (function (state_15604){
var state_val_15605 = (state_15604[(1)]);
if((state_val_15605 === (7))){
var inst_15600 = (state_15604[(2)]);
var state_15604__$1 = state_15604;
var statearr_15606_15633 = state_15604__$1;
(statearr_15606_15633[(2)] = inst_15600);

(statearr_15606_15633[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (1))){
var state_15604__$1 = state_15604;
var statearr_15607_15634 = state_15604__$1;
(statearr_15607_15634[(2)] = null);

(statearr_15607_15634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (4))){
var inst_15583 = (state_15604[(7)]);
var inst_15583__$1 = (state_15604[(2)]);
var inst_15584 = (inst_15583__$1 == null);
var state_15604__$1 = (function (){var statearr_15608 = state_15604;
(statearr_15608[(7)] = inst_15583__$1);

return statearr_15608;
})();
if(cljs.core.truth_(inst_15584)){
var statearr_15609_15635 = state_15604__$1;
(statearr_15609_15635[(1)] = (5));

} else {
var statearr_15610_15636 = state_15604__$1;
(statearr_15610_15636[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (13))){
var state_15604__$1 = state_15604;
var statearr_15611_15637 = state_15604__$1;
(statearr_15611_15637[(2)] = null);

(statearr_15611_15637[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (6))){
var inst_15583 = (state_15604[(7)]);
var state_15604__$1 = state_15604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15604__$1,(11),to,inst_15583);
} else {
if((state_val_15605 === (3))){
var inst_15602 = (state_15604[(2)]);
var state_15604__$1 = state_15604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15604__$1,inst_15602);
} else {
if((state_val_15605 === (12))){
var state_15604__$1 = state_15604;
var statearr_15612_15638 = state_15604__$1;
(statearr_15612_15638[(2)] = null);

(statearr_15612_15638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (2))){
var state_15604__$1 = state_15604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15604__$1,(4),from);
} else {
if((state_val_15605 === (11))){
var inst_15593 = (state_15604[(2)]);
var state_15604__$1 = state_15604;
if(cljs.core.truth_(inst_15593)){
var statearr_15613_15639 = state_15604__$1;
(statearr_15613_15639[(1)] = (12));

} else {
var statearr_15614_15640 = state_15604__$1;
(statearr_15614_15640[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (9))){
var state_15604__$1 = state_15604;
var statearr_15615_15641 = state_15604__$1;
(statearr_15615_15641[(2)] = null);

(statearr_15615_15641[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (5))){
var state_15604__$1 = state_15604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15616_15642 = state_15604__$1;
(statearr_15616_15642[(1)] = (8));

} else {
var statearr_15617_15643 = state_15604__$1;
(statearr_15617_15643[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (14))){
var inst_15598 = (state_15604[(2)]);
var state_15604__$1 = state_15604;
var statearr_15618_15644 = state_15604__$1;
(statearr_15618_15644[(2)] = inst_15598);

(statearr_15618_15644[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (10))){
var inst_15590 = (state_15604[(2)]);
var state_15604__$1 = state_15604;
var statearr_15619_15645 = state_15604__$1;
(statearr_15619_15645[(2)] = inst_15590);

(statearr_15619_15645[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15605 === (8))){
var inst_15587 = cljs.core.async.close_BANG_(to);
var state_15604__$1 = state_15604;
var statearr_15620_15646 = state_15604__$1;
(statearr_15620_15646[(2)] = inst_15587);

(statearr_15620_15646[(1)] = (10));


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
});})(c__15461__auto___15632))
;
return ((function (switch__15347__auto__,c__15461__auto___15632){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_15624 = [null,null,null,null,null,null,null,null];
(statearr_15624[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_15624[(1)] = (1));

return statearr_15624;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_15604){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_15604);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e15625){if((e15625 instanceof Object)){
var ex__15351__auto__ = e15625;
var statearr_15626_15647 = state_15604;
(statearr_15626_15647[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15604);

return cljs.core.cst$kw$recur;
} else {
throw e15625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__15648 = state_15604;
state_15604 = G__15648;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_15604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_15604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___15632))
})();
var state__15463__auto__ = (function (){var statearr_15627 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_15627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___15632);

return statearr_15627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___15632))
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
return (function (p__15836){
var vec__15837 = p__15836;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837,(1),null);
var job = vec__15837;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15461__auto___16023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___16023,res,vec__15837,v,p,job,jobs,results){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___16023,res,vec__15837,v,p,job,jobs,results){
return (function (state_15844){
var state_val_15845 = (state_15844[(1)]);
if((state_val_15845 === (1))){
var state_15844__$1 = state_15844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15844__$1,(2),res,v);
} else {
if((state_val_15845 === (2))){
var inst_15841 = (state_15844[(2)]);
var inst_15842 = cljs.core.async.close_BANG_(res);
var state_15844__$1 = (function (){var statearr_15846 = state_15844;
(statearr_15846[(7)] = inst_15841);

return statearr_15846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15844__$1,inst_15842);
} else {
return null;
}
}
});})(c__15461__auto___16023,res,vec__15837,v,p,job,jobs,results))
;
return ((function (switch__15347__auto__,c__15461__auto___16023,res,vec__15837,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0 = (function (){
var statearr_15850 = [null,null,null,null,null,null,null,null];
(statearr_15850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__);

(statearr_15850[(1)] = (1));

return statearr_15850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1 = (function (state_15844){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_15844);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e15851){if((e15851 instanceof Object)){
var ex__15351__auto__ = e15851;
var statearr_15852_16024 = state_15844;
(statearr_15852_16024[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15844);

return cljs.core.cst$kw$recur;
} else {
throw e15851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__16025 = state_15844;
state_15844 = G__16025;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = function(state_15844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1.call(this,state_15844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___16023,res,vec__15837,v,p,job,jobs,results))
})();
var state__15463__auto__ = (function (){var statearr_15853 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_15853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___16023);

return statearr_15853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___16023,res,vec__15837,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15854){
var vec__15855 = p__15854;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855,(1),null);
var job = vec__15855;
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
var n__7492__auto___16026 = n;
var __16027 = (0);
while(true){
if((__16027 < n__7492__auto___16026)){
var G__15858_16028 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15858_16028) {
case "compute":
var c__15461__auto___16030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16027,c__15461__auto___16030,G__15858_16028,n__7492__auto___16026,jobs,results,process,async){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (__16027,c__15461__auto___16030,G__15858_16028,n__7492__auto___16026,jobs,results,process,async){
return (function (state_15871){
var state_val_15872 = (state_15871[(1)]);
if((state_val_15872 === (1))){
var state_15871__$1 = state_15871;
var statearr_15873_16031 = state_15871__$1;
(statearr_15873_16031[(2)] = null);

(statearr_15873_16031[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (2))){
var state_15871__$1 = state_15871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15871__$1,(4),jobs);
} else {
if((state_val_15872 === (3))){
var inst_15869 = (state_15871[(2)]);
var state_15871__$1 = state_15871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15871__$1,inst_15869);
} else {
if((state_val_15872 === (4))){
var inst_15861 = (state_15871[(2)]);
var inst_15862 = process(inst_15861);
var state_15871__$1 = state_15871;
if(cljs.core.truth_(inst_15862)){
var statearr_15874_16032 = state_15871__$1;
(statearr_15874_16032[(1)] = (5));

} else {
var statearr_15875_16033 = state_15871__$1;
(statearr_15875_16033[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (5))){
var state_15871__$1 = state_15871;
var statearr_15876_16034 = state_15871__$1;
(statearr_15876_16034[(2)] = null);

(statearr_15876_16034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (6))){
var state_15871__$1 = state_15871;
var statearr_15877_16035 = state_15871__$1;
(statearr_15877_16035[(2)] = null);

(statearr_15877_16035[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (7))){
var inst_15867 = (state_15871[(2)]);
var state_15871__$1 = state_15871;
var statearr_15878_16036 = state_15871__$1;
(statearr_15878_16036[(2)] = inst_15867);

(statearr_15878_16036[(1)] = (3));


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
});})(__16027,c__15461__auto___16030,G__15858_16028,n__7492__auto___16026,jobs,results,process,async))
;
return ((function (__16027,switch__15347__auto__,c__15461__auto___16030,G__15858_16028,n__7492__auto___16026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0 = (function (){
var statearr_15882 = [null,null,null,null,null,null,null];
(statearr_15882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__);

(statearr_15882[(1)] = (1));

return statearr_15882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1 = (function (state_15871){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_15871);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e15883){if((e15883 instanceof Object)){
var ex__15351__auto__ = e15883;
var statearr_15884_16037 = state_15871;
(statearr_15884_16037[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15871);

return cljs.core.cst$kw$recur;
} else {
throw e15883;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__16038 = state_15871;
state_15871 = G__16038;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = function(state_15871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1.call(this,state_15871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__;
})()
;})(__16027,switch__15347__auto__,c__15461__auto___16030,G__15858_16028,n__7492__auto___16026,jobs,results,process,async))
})();
var state__15463__auto__ = (function (){var statearr_15885 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_15885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___16030);

return statearr_15885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(__16027,c__15461__auto___16030,G__15858_16028,n__7492__auto___16026,jobs,results,process,async))
);


break;
case "async":
var c__15461__auto___16039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16027,c__15461__auto___16039,G__15858_16028,n__7492__auto___16026,jobs,results,process,async){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (__16027,c__15461__auto___16039,G__15858_16028,n__7492__auto___16026,jobs,results,process,async){
return (function (state_15898){
var state_val_15899 = (state_15898[(1)]);
if((state_val_15899 === (1))){
var state_15898__$1 = state_15898;
var statearr_15900_16040 = state_15898__$1;
(statearr_15900_16040[(2)] = null);

(statearr_15900_16040[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15899 === (2))){
var state_15898__$1 = state_15898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15898__$1,(4),jobs);
} else {
if((state_val_15899 === (3))){
var inst_15896 = (state_15898[(2)]);
var state_15898__$1 = state_15898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15898__$1,inst_15896);
} else {
if((state_val_15899 === (4))){
var inst_15888 = (state_15898[(2)]);
var inst_15889 = async(inst_15888);
var state_15898__$1 = state_15898;
if(cljs.core.truth_(inst_15889)){
var statearr_15901_16041 = state_15898__$1;
(statearr_15901_16041[(1)] = (5));

} else {
var statearr_15902_16042 = state_15898__$1;
(statearr_15902_16042[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15899 === (5))){
var state_15898__$1 = state_15898;
var statearr_15903_16043 = state_15898__$1;
(statearr_15903_16043[(2)] = null);

(statearr_15903_16043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15899 === (6))){
var state_15898__$1 = state_15898;
var statearr_15904_16044 = state_15898__$1;
(statearr_15904_16044[(2)] = null);

(statearr_15904_16044[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15899 === (7))){
var inst_15894 = (state_15898[(2)]);
var state_15898__$1 = state_15898;
var statearr_15905_16045 = state_15898__$1;
(statearr_15905_16045[(2)] = inst_15894);

(statearr_15905_16045[(1)] = (3));


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
});})(__16027,c__15461__auto___16039,G__15858_16028,n__7492__auto___16026,jobs,results,process,async))
;
return ((function (__16027,switch__15347__auto__,c__15461__auto___16039,G__15858_16028,n__7492__auto___16026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0 = (function (){
var statearr_15909 = [null,null,null,null,null,null,null];
(statearr_15909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__);

(statearr_15909[(1)] = (1));

return statearr_15909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1 = (function (state_15898){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_15898);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e15910){if((e15910 instanceof Object)){
var ex__15351__auto__ = e15910;
var statearr_15911_16046 = state_15898;
(statearr_15911_16046[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15898);

return cljs.core.cst$kw$recur;
} else {
throw e15910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__16047 = state_15898;
state_15898 = G__16047;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = function(state_15898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1.call(this,state_15898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__;
})()
;})(__16027,switch__15347__auto__,c__15461__auto___16039,G__15858_16028,n__7492__auto___16026,jobs,results,process,async))
})();
var state__15463__auto__ = (function (){var statearr_15912 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_15912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___16039);

return statearr_15912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(__16027,c__15461__auto___16039,G__15858_16028,n__7492__auto___16026,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16048 = (__16027 + (1));
__16027 = G__16048;
continue;
} else {
}
break;
}

var c__15461__auto___16049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___16049,jobs,results,process,async){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___16049,jobs,results,process,async){
return (function (state_15934){
var state_val_15935 = (state_15934[(1)]);
if((state_val_15935 === (1))){
var state_15934__$1 = state_15934;
var statearr_15936_16050 = state_15934__$1;
(statearr_15936_16050[(2)] = null);

(statearr_15936_16050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (2))){
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15934__$1,(4),from);
} else {
if((state_val_15935 === (3))){
var inst_15932 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15934__$1,inst_15932);
} else {
if((state_val_15935 === (4))){
var inst_15915 = (state_15934[(7)]);
var inst_15915__$1 = (state_15934[(2)]);
var inst_15916 = (inst_15915__$1 == null);
var state_15934__$1 = (function (){var statearr_15937 = state_15934;
(statearr_15937[(7)] = inst_15915__$1);

return statearr_15937;
})();
if(cljs.core.truth_(inst_15916)){
var statearr_15938_16051 = state_15934__$1;
(statearr_15938_16051[(1)] = (5));

} else {
var statearr_15939_16052 = state_15934__$1;
(statearr_15939_16052[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (5))){
var inst_15918 = cljs.core.async.close_BANG_(jobs);
var state_15934__$1 = state_15934;
var statearr_15940_16053 = state_15934__$1;
(statearr_15940_16053[(2)] = inst_15918);

(statearr_15940_16053[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (6))){
var inst_15920 = (state_15934[(8)]);
var inst_15915 = (state_15934[(7)]);
var inst_15920__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15922 = [inst_15915,inst_15920__$1];
var inst_15923 = (new cljs.core.PersistentVector(null,2,(5),inst_15921,inst_15922,null));
var state_15934__$1 = (function (){var statearr_15941 = state_15934;
(statearr_15941[(8)] = inst_15920__$1);

return statearr_15941;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15934__$1,(8),jobs,inst_15923);
} else {
if((state_val_15935 === (7))){
var inst_15930 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15942_16054 = state_15934__$1;
(statearr_15942_16054[(2)] = inst_15930);

(statearr_15942_16054[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15935 === (8))){
var inst_15920 = (state_15934[(8)]);
var inst_15925 = (state_15934[(2)]);
var state_15934__$1 = (function (){var statearr_15943 = state_15934;
(statearr_15943[(9)] = inst_15925);

return statearr_15943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15934__$1,(9),results,inst_15920);
} else {
if((state_val_15935 === (9))){
var inst_15927 = (state_15934[(2)]);
var state_15934__$1 = (function (){var statearr_15944 = state_15934;
(statearr_15944[(10)] = inst_15927);

return statearr_15944;
})();
var statearr_15945_16055 = state_15934__$1;
(statearr_15945_16055[(2)] = null);

(statearr_15945_16055[(1)] = (2));


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
});})(c__15461__auto___16049,jobs,results,process,async))
;
return ((function (switch__15347__auto__,c__15461__auto___16049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0 = (function (){
var statearr_15949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__);

(statearr_15949[(1)] = (1));

return statearr_15949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1 = (function (state_15934){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_15934);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e15950){if((e15950 instanceof Object)){
var ex__15351__auto__ = e15950;
var statearr_15951_16056 = state_15934;
(statearr_15951_16056[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15934);

return cljs.core.cst$kw$recur;
} else {
throw e15950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__16057 = state_15934;
state_15934 = G__16057;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = function(state_15934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1.call(this,state_15934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___16049,jobs,results,process,async))
})();
var state__15463__auto__ = (function (){var statearr_15952 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_15952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___16049);

return statearr_15952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___16049,jobs,results,process,async))
);


var c__15461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto__,jobs,results,process,async){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto__,jobs,results,process,async){
return (function (state_15990){
var state_val_15991 = (state_15990[(1)]);
if((state_val_15991 === (7))){
var inst_15986 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
var statearr_15992_16058 = state_15990__$1;
(statearr_15992_16058[(2)] = inst_15986);

(statearr_15992_16058[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (20))){
var state_15990__$1 = state_15990;
var statearr_15993_16059 = state_15990__$1;
(statearr_15993_16059[(2)] = null);

(statearr_15993_16059[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (1))){
var state_15990__$1 = state_15990;
var statearr_15994_16060 = state_15990__$1;
(statearr_15994_16060[(2)] = null);

(statearr_15994_16060[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (4))){
var inst_15955 = (state_15990[(7)]);
var inst_15955__$1 = (state_15990[(2)]);
var inst_15956 = (inst_15955__$1 == null);
var state_15990__$1 = (function (){var statearr_15995 = state_15990;
(statearr_15995[(7)] = inst_15955__$1);

return statearr_15995;
})();
if(cljs.core.truth_(inst_15956)){
var statearr_15996_16061 = state_15990__$1;
(statearr_15996_16061[(1)] = (5));

} else {
var statearr_15997_16062 = state_15990__$1;
(statearr_15997_16062[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (15))){
var inst_15968 = (state_15990[(8)]);
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15990__$1,(18),to,inst_15968);
} else {
if((state_val_15991 === (21))){
var inst_15981 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
var statearr_15998_16063 = state_15990__$1;
(statearr_15998_16063[(2)] = inst_15981);

(statearr_15998_16063[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (13))){
var inst_15983 = (state_15990[(2)]);
var state_15990__$1 = (function (){var statearr_15999 = state_15990;
(statearr_15999[(9)] = inst_15983);

return statearr_15999;
})();
var statearr_16000_16064 = state_15990__$1;
(statearr_16000_16064[(2)] = null);

(statearr_16000_16064[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (6))){
var inst_15955 = (state_15990[(7)]);
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15990__$1,(11),inst_15955);
} else {
if((state_val_15991 === (17))){
var inst_15976 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
if(cljs.core.truth_(inst_15976)){
var statearr_16001_16065 = state_15990__$1;
(statearr_16001_16065[(1)] = (19));

} else {
var statearr_16002_16066 = state_15990__$1;
(statearr_16002_16066[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (3))){
var inst_15988 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15990__$1,inst_15988);
} else {
if((state_val_15991 === (12))){
var inst_15965 = (state_15990[(10)]);
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15990__$1,(14),inst_15965);
} else {
if((state_val_15991 === (2))){
var state_15990__$1 = state_15990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15990__$1,(4),results);
} else {
if((state_val_15991 === (19))){
var state_15990__$1 = state_15990;
var statearr_16003_16067 = state_15990__$1;
(statearr_16003_16067[(2)] = null);

(statearr_16003_16067[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (11))){
var inst_15965 = (state_15990[(2)]);
var state_15990__$1 = (function (){var statearr_16004 = state_15990;
(statearr_16004[(10)] = inst_15965);

return statearr_16004;
})();
var statearr_16005_16068 = state_15990__$1;
(statearr_16005_16068[(2)] = null);

(statearr_16005_16068[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (9))){
var state_15990__$1 = state_15990;
var statearr_16006_16069 = state_15990__$1;
(statearr_16006_16069[(2)] = null);

(statearr_16006_16069[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (5))){
var state_15990__$1 = state_15990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16007_16070 = state_15990__$1;
(statearr_16007_16070[(1)] = (8));

} else {
var statearr_16008_16071 = state_15990__$1;
(statearr_16008_16071[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (14))){
var inst_15970 = (state_15990[(11)]);
var inst_15968 = (state_15990[(8)]);
var inst_15968__$1 = (state_15990[(2)]);
var inst_15969 = (inst_15968__$1 == null);
var inst_15970__$1 = cljs.core.not(inst_15969);
var state_15990__$1 = (function (){var statearr_16009 = state_15990;
(statearr_16009[(11)] = inst_15970__$1);

(statearr_16009[(8)] = inst_15968__$1);

return statearr_16009;
})();
if(inst_15970__$1){
var statearr_16010_16072 = state_15990__$1;
(statearr_16010_16072[(1)] = (15));

} else {
var statearr_16011_16073 = state_15990__$1;
(statearr_16011_16073[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (16))){
var inst_15970 = (state_15990[(11)]);
var state_15990__$1 = state_15990;
var statearr_16012_16074 = state_15990__$1;
(statearr_16012_16074[(2)] = inst_15970);

(statearr_16012_16074[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (10))){
var inst_15962 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
var statearr_16013_16075 = state_15990__$1;
(statearr_16013_16075[(2)] = inst_15962);

(statearr_16013_16075[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (18))){
var inst_15973 = (state_15990[(2)]);
var state_15990__$1 = state_15990;
var statearr_16014_16076 = state_15990__$1;
(statearr_16014_16076[(2)] = inst_15973);

(statearr_16014_16076[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15991 === (8))){
var inst_15959 = cljs.core.async.close_BANG_(to);
var state_15990__$1 = state_15990;
var statearr_16015_16077 = state_15990__$1;
(statearr_16015_16077[(2)] = inst_15959);

(statearr_16015_16077[(1)] = (10));


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
});})(c__15461__auto__,jobs,results,process,async))
;
return ((function (switch__15347__auto__,c__15461__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0 = (function (){
var statearr_16019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__);

(statearr_16019[(1)] = (1));

return statearr_16019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1 = (function (state_15990){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_15990);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e16020){if((e16020 instanceof Object)){
var ex__15351__auto__ = e16020;
var statearr_16021_16078 = state_15990;
(statearr_16021_16078[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15990);

return cljs.core.cst$kw$recur;
} else {
throw e16020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__16079 = state_15990;
state_15990 = G__16079;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__ = function(state_15990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1.call(this,state_15990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15348__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto__,jobs,results,process,async))
})();
var state__15463__auto__ = (function (){var statearr_16022 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_16022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto__);

return statearr_16022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto__,jobs,results,process,async))
);

return c__15461__auto__;
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
var args16080 = [];
var len__7652__auto___16083 = arguments.length;
var i__7653__auto___16084 = (0);
while(true){
if((i__7653__auto___16084 < len__7652__auto___16083)){
args16080.push((arguments[i__7653__auto___16084]));

var G__16085 = (i__7653__auto___16084 + (1));
i__7653__auto___16084 = G__16085;
continue;
} else {
}
break;
}

var G__16082 = args16080.length;
switch (G__16082) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16080.length)].join('')));

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
var args16087 = [];
var len__7652__auto___16090 = arguments.length;
var i__7653__auto___16091 = (0);
while(true){
if((i__7653__auto___16091 < len__7652__auto___16090)){
args16087.push((arguments[i__7653__auto___16091]));

var G__16092 = (i__7653__auto___16091 + (1));
i__7653__auto___16091 = G__16092;
continue;
} else {
}
break;
}

var G__16089 = args16087.length;
switch (G__16089) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16087.length)].join('')));

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
var args16094 = [];
var len__7652__auto___16147 = arguments.length;
var i__7653__auto___16148 = (0);
while(true){
if((i__7653__auto___16148 < len__7652__auto___16147)){
args16094.push((arguments[i__7653__auto___16148]));

var G__16149 = (i__7653__auto___16148 + (1));
i__7653__auto___16148 = G__16149;
continue;
} else {
}
break;
}

var G__16096 = args16094.length;
switch (G__16096) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16094.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15461__auto___16151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___16151,tc,fc){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___16151,tc,fc){
return (function (state_16122){
var state_val_16123 = (state_16122[(1)]);
if((state_val_16123 === (7))){
var inst_16118 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
var statearr_16124_16152 = state_16122__$1;
(statearr_16124_16152[(2)] = inst_16118);

(statearr_16124_16152[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (1))){
var state_16122__$1 = state_16122;
var statearr_16125_16153 = state_16122__$1;
(statearr_16125_16153[(2)] = null);

(statearr_16125_16153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (4))){
var inst_16099 = (state_16122[(7)]);
var inst_16099__$1 = (state_16122[(2)]);
var inst_16100 = (inst_16099__$1 == null);
var state_16122__$1 = (function (){var statearr_16126 = state_16122;
(statearr_16126[(7)] = inst_16099__$1);

return statearr_16126;
})();
if(cljs.core.truth_(inst_16100)){
var statearr_16127_16154 = state_16122__$1;
(statearr_16127_16154[(1)] = (5));

} else {
var statearr_16128_16155 = state_16122__$1;
(statearr_16128_16155[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (13))){
var state_16122__$1 = state_16122;
var statearr_16129_16156 = state_16122__$1;
(statearr_16129_16156[(2)] = null);

(statearr_16129_16156[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (6))){
var inst_16099 = (state_16122[(7)]);
var inst_16105 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16099) : p.call(null,inst_16099));
var state_16122__$1 = state_16122;
if(cljs.core.truth_(inst_16105)){
var statearr_16130_16157 = state_16122__$1;
(statearr_16130_16157[(1)] = (9));

} else {
var statearr_16131_16158 = state_16122__$1;
(statearr_16131_16158[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (3))){
var inst_16120 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16122__$1,inst_16120);
} else {
if((state_val_16123 === (12))){
var state_16122__$1 = state_16122;
var statearr_16132_16159 = state_16122__$1;
(statearr_16132_16159[(2)] = null);

(statearr_16132_16159[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (2))){
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16122__$1,(4),ch);
} else {
if((state_val_16123 === (11))){
var inst_16099 = (state_16122[(7)]);
var inst_16109 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16122__$1,(8),inst_16109,inst_16099);
} else {
if((state_val_16123 === (9))){
var state_16122__$1 = state_16122;
var statearr_16133_16160 = state_16122__$1;
(statearr_16133_16160[(2)] = tc);

(statearr_16133_16160[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (5))){
var inst_16102 = cljs.core.async.close_BANG_(tc);
var inst_16103 = cljs.core.async.close_BANG_(fc);
var state_16122__$1 = (function (){var statearr_16134 = state_16122;
(statearr_16134[(8)] = inst_16102);

return statearr_16134;
})();
var statearr_16135_16161 = state_16122__$1;
(statearr_16135_16161[(2)] = inst_16103);

(statearr_16135_16161[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (14))){
var inst_16116 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
var statearr_16136_16162 = state_16122__$1;
(statearr_16136_16162[(2)] = inst_16116);

(statearr_16136_16162[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (10))){
var state_16122__$1 = state_16122;
var statearr_16137_16163 = state_16122__$1;
(statearr_16137_16163[(2)] = fc);

(statearr_16137_16163[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16123 === (8))){
var inst_16111 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
if(cljs.core.truth_(inst_16111)){
var statearr_16138_16164 = state_16122__$1;
(statearr_16138_16164[(1)] = (12));

} else {
var statearr_16139_16165 = state_16122__$1;
(statearr_16139_16165[(1)] = (13));

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
});})(c__15461__auto___16151,tc,fc))
;
return ((function (switch__15347__auto__,c__15461__auto___16151,tc,fc){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_16143 = [null,null,null,null,null,null,null,null,null];
(statearr_16143[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_16143[(1)] = (1));

return statearr_16143;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_16122){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_16122);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e16144){if((e16144 instanceof Object)){
var ex__15351__auto__ = e16144;
var statearr_16145_16166 = state_16122;
(statearr_16145_16166[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16122);

return cljs.core.cst$kw$recur;
} else {
throw e16144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__16167 = state_16122;
state_16122 = G__16167;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_16122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_16122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___16151,tc,fc))
})();
var state__15463__auto__ = (function (){var statearr_16146 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_16146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___16151);

return statearr_16146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___16151,tc,fc))
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
var c__15461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto__){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto__){
return (function (state_16231){
var state_val_16232 = (state_16231[(1)]);
if((state_val_16232 === (7))){
var inst_16227 = (state_16231[(2)]);
var state_16231__$1 = state_16231;
var statearr_16233_16254 = state_16231__$1;
(statearr_16233_16254[(2)] = inst_16227);

(statearr_16233_16254[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16232 === (1))){
var inst_16211 = init;
var state_16231__$1 = (function (){var statearr_16234 = state_16231;
(statearr_16234[(7)] = inst_16211);

return statearr_16234;
})();
var statearr_16235_16255 = state_16231__$1;
(statearr_16235_16255[(2)] = null);

(statearr_16235_16255[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16232 === (4))){
var inst_16214 = (state_16231[(8)]);
var inst_16214__$1 = (state_16231[(2)]);
var inst_16215 = (inst_16214__$1 == null);
var state_16231__$1 = (function (){var statearr_16236 = state_16231;
(statearr_16236[(8)] = inst_16214__$1);

return statearr_16236;
})();
if(cljs.core.truth_(inst_16215)){
var statearr_16237_16256 = state_16231__$1;
(statearr_16237_16256[(1)] = (5));

} else {
var statearr_16238_16257 = state_16231__$1;
(statearr_16238_16257[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16232 === (6))){
var inst_16211 = (state_16231[(7)]);
var inst_16214 = (state_16231[(8)]);
var inst_16218 = (state_16231[(9)]);
var inst_16218__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16211,inst_16214) : f.call(null,inst_16211,inst_16214));
var inst_16219 = cljs.core.reduced_QMARK_(inst_16218__$1);
var state_16231__$1 = (function (){var statearr_16239 = state_16231;
(statearr_16239[(9)] = inst_16218__$1);

return statearr_16239;
})();
if(inst_16219){
var statearr_16240_16258 = state_16231__$1;
(statearr_16240_16258[(1)] = (8));

} else {
var statearr_16241_16259 = state_16231__$1;
(statearr_16241_16259[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16232 === (3))){
var inst_16229 = (state_16231[(2)]);
var state_16231__$1 = state_16231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16231__$1,inst_16229);
} else {
if((state_val_16232 === (2))){
var state_16231__$1 = state_16231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16231__$1,(4),ch);
} else {
if((state_val_16232 === (9))){
var inst_16218 = (state_16231[(9)]);
var inst_16211 = inst_16218;
var state_16231__$1 = (function (){var statearr_16242 = state_16231;
(statearr_16242[(7)] = inst_16211);

return statearr_16242;
})();
var statearr_16243_16260 = state_16231__$1;
(statearr_16243_16260[(2)] = null);

(statearr_16243_16260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16232 === (5))){
var inst_16211 = (state_16231[(7)]);
var state_16231__$1 = state_16231;
var statearr_16244_16261 = state_16231__$1;
(statearr_16244_16261[(2)] = inst_16211);

(statearr_16244_16261[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16232 === (10))){
var inst_16225 = (state_16231[(2)]);
var state_16231__$1 = state_16231;
var statearr_16245_16262 = state_16231__$1;
(statearr_16245_16262[(2)] = inst_16225);

(statearr_16245_16262[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16232 === (8))){
var inst_16218 = (state_16231[(9)]);
var inst_16221 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16218) : cljs.core.deref.call(null,inst_16218));
var state_16231__$1 = state_16231;
var statearr_16246_16263 = state_16231__$1;
(statearr_16246_16263[(2)] = inst_16221);

(statearr_16246_16263[(1)] = (10));


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
});})(c__15461__auto__))
;
return ((function (switch__15347__auto__,c__15461__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15348__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15348__auto____0 = (function (){
var statearr_16250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16250[(0)] = cljs$core$async$reduce_$_state_machine__15348__auto__);

(statearr_16250[(1)] = (1));

return statearr_16250;
});
var cljs$core$async$reduce_$_state_machine__15348__auto____1 = (function (state_16231){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_16231);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e16251){if((e16251 instanceof Object)){
var ex__15351__auto__ = e16251;
var statearr_16252_16264 = state_16231;
(statearr_16252_16264[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16231);

return cljs.core.cst$kw$recur;
} else {
throw e16251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__16265 = state_16231;
state_16231 = G__16265;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15348__auto__ = function(state_16231){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15348__auto____1.call(this,state_16231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15348__auto____0;
cljs$core$async$reduce_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15348__auto____1;
return cljs$core$async$reduce_$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto__))
})();
var state__15463__auto__ = (function (){var statearr_16253 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_16253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto__);

return statearr_16253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto__))
);

return c__15461__auto__;
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
var args16266 = [];
var len__7652__auto___16318 = arguments.length;
var i__7653__auto___16319 = (0);
while(true){
if((i__7653__auto___16319 < len__7652__auto___16318)){
args16266.push((arguments[i__7653__auto___16319]));

var G__16320 = (i__7653__auto___16319 + (1));
i__7653__auto___16319 = G__16320;
continue;
} else {
}
break;
}

var G__16268 = args16266.length;
switch (G__16268) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16266.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto__){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto__){
return (function (state_16293){
var state_val_16294 = (state_16293[(1)]);
if((state_val_16294 === (7))){
var inst_16275 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16295_16322 = state_16293__$1;
(statearr_16295_16322[(2)] = inst_16275);

(statearr_16295_16322[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (1))){
var inst_16269 = cljs.core.seq(coll);
var inst_16270 = inst_16269;
var state_16293__$1 = (function (){var statearr_16296 = state_16293;
(statearr_16296[(7)] = inst_16270);

return statearr_16296;
})();
var statearr_16297_16323 = state_16293__$1;
(statearr_16297_16323[(2)] = null);

(statearr_16297_16323[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (4))){
var inst_16270 = (state_16293[(7)]);
var inst_16273 = cljs.core.first(inst_16270);
var state_16293__$1 = state_16293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16293__$1,(7),ch,inst_16273);
} else {
if((state_val_16294 === (13))){
var inst_16287 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16298_16324 = state_16293__$1;
(statearr_16298_16324[(2)] = inst_16287);

(statearr_16298_16324[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (6))){
var inst_16278 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
if(cljs.core.truth_(inst_16278)){
var statearr_16299_16325 = state_16293__$1;
(statearr_16299_16325[(1)] = (8));

} else {
var statearr_16300_16326 = state_16293__$1;
(statearr_16300_16326[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (3))){
var inst_16291 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16293__$1,inst_16291);
} else {
if((state_val_16294 === (12))){
var state_16293__$1 = state_16293;
var statearr_16301_16327 = state_16293__$1;
(statearr_16301_16327[(2)] = null);

(statearr_16301_16327[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (2))){
var inst_16270 = (state_16293[(7)]);
var state_16293__$1 = state_16293;
if(cljs.core.truth_(inst_16270)){
var statearr_16302_16328 = state_16293__$1;
(statearr_16302_16328[(1)] = (4));

} else {
var statearr_16303_16329 = state_16293__$1;
(statearr_16303_16329[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (11))){
var inst_16284 = cljs.core.async.close_BANG_(ch);
var state_16293__$1 = state_16293;
var statearr_16304_16330 = state_16293__$1;
(statearr_16304_16330[(2)] = inst_16284);

(statearr_16304_16330[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (9))){
var state_16293__$1 = state_16293;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16305_16331 = state_16293__$1;
(statearr_16305_16331[(1)] = (11));

} else {
var statearr_16306_16332 = state_16293__$1;
(statearr_16306_16332[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (5))){
var inst_16270 = (state_16293[(7)]);
var state_16293__$1 = state_16293;
var statearr_16307_16333 = state_16293__$1;
(statearr_16307_16333[(2)] = inst_16270);

(statearr_16307_16333[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (10))){
var inst_16289 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16308_16334 = state_16293__$1;
(statearr_16308_16334[(2)] = inst_16289);

(statearr_16308_16334[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16294 === (8))){
var inst_16270 = (state_16293[(7)]);
var inst_16280 = cljs.core.next(inst_16270);
var inst_16270__$1 = inst_16280;
var state_16293__$1 = (function (){var statearr_16309 = state_16293;
(statearr_16309[(7)] = inst_16270__$1);

return statearr_16309;
})();
var statearr_16310_16335 = state_16293__$1;
(statearr_16310_16335[(2)] = null);

(statearr_16310_16335[(1)] = (2));


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
});})(c__15461__auto__))
;
return ((function (switch__15347__auto__,c__15461__auto__){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_16314 = [null,null,null,null,null,null,null,null];
(statearr_16314[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_16314[(1)] = (1));

return statearr_16314;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_16293){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_16293);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e16315){if((e16315 instanceof Object)){
var ex__15351__auto__ = e16315;
var statearr_16316_16336 = state_16293;
(statearr_16316_16336[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16293);

return cljs.core.cst$kw$recur;
} else {
throw e16315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__16337 = state_16293;
state_16293 = G__16337;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_16293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_16293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto__))
})();
var state__15463__auto__ = (function (){var statearr_16317 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_16317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto__);

return statearr_16317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto__))
);

return c__15461__auto__;
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
var cs = (function (){var G__16566 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16566) : cljs.core.atom.call(null,G__16566));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16567 = (function (mult,ch,cs,meta16568){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16568 = meta16568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16569,meta16568__$1){
var self__ = this;
var _16569__$1 = this;
return (new cljs.core.async.t_cljs$core$async16567(self__.mult,self__.ch,self__.cs,meta16568__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16569){
var self__ = this;
var _16569__$1 = this;
return self__.meta16568;
});})(cs))
;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16570_16794 = self__.cs;
var G__16571_16795 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16570_16794,G__16571_16795) : cljs.core.reset_BANG_.call(null,G__16570_16794,G__16571_16795));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16567.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16568], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16567";

cljs.core.async.t_cljs$core$async16567.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async16567");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16567 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16567(mult__$1,ch__$1,cs__$1,meta16568){
return (new cljs.core.async.t_cljs$core$async16567(mult__$1,ch__$1,cs__$1,meta16568));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16567(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15461__auto___16796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___16796,cs,m,dchan,dctr,done){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___16796,cs,m,dchan,dctr,done){
return (function (state_16706){
var state_val_16707 = (state_16706[(1)]);
if((state_val_16707 === (7))){
var inst_16702 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16708_16797 = state_16706__$1;
(statearr_16708_16797[(2)] = inst_16702);

(statearr_16708_16797[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (20))){
var inst_16605 = (state_16706[(7)]);
var inst_16617 = cljs.core.first(inst_16605);
var inst_16618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16617,(0),null);
var inst_16619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16617,(1),null);
var state_16706__$1 = (function (){var statearr_16709 = state_16706;
(statearr_16709[(8)] = inst_16618);

return statearr_16709;
})();
if(cljs.core.truth_(inst_16619)){
var statearr_16710_16798 = state_16706__$1;
(statearr_16710_16798[(1)] = (22));

} else {
var statearr_16711_16799 = state_16706__$1;
(statearr_16711_16799[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (27))){
var inst_16649 = (state_16706[(9)]);
var inst_16647 = (state_16706[(10)]);
var inst_16654 = (state_16706[(11)]);
var inst_16574 = (state_16706[(12)]);
var inst_16654__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16647,inst_16649);
var inst_16655 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16654__$1,inst_16574,done);
var state_16706__$1 = (function (){var statearr_16712 = state_16706;
(statearr_16712[(11)] = inst_16654__$1);

return statearr_16712;
})();
if(cljs.core.truth_(inst_16655)){
var statearr_16713_16800 = state_16706__$1;
(statearr_16713_16800[(1)] = (30));

} else {
var statearr_16714_16801 = state_16706__$1;
(statearr_16714_16801[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (1))){
var state_16706__$1 = state_16706;
var statearr_16715_16802 = state_16706__$1;
(statearr_16715_16802[(2)] = null);

(statearr_16715_16802[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (24))){
var inst_16605 = (state_16706[(7)]);
var inst_16624 = (state_16706[(2)]);
var inst_16625 = cljs.core.next(inst_16605);
var inst_16583 = inst_16625;
var inst_16584 = null;
var inst_16585 = (0);
var inst_16586 = (0);
var state_16706__$1 = (function (){var statearr_16716 = state_16706;
(statearr_16716[(13)] = inst_16583);

(statearr_16716[(14)] = inst_16585);

(statearr_16716[(15)] = inst_16584);

(statearr_16716[(16)] = inst_16624);

(statearr_16716[(17)] = inst_16586);

return statearr_16716;
})();
var statearr_16717_16803 = state_16706__$1;
(statearr_16717_16803[(2)] = null);

(statearr_16717_16803[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (39))){
var state_16706__$1 = state_16706;
var statearr_16721_16804 = state_16706__$1;
(statearr_16721_16804[(2)] = null);

(statearr_16721_16804[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (4))){
var inst_16574 = (state_16706[(12)]);
var inst_16574__$1 = (state_16706[(2)]);
var inst_16575 = (inst_16574__$1 == null);
var state_16706__$1 = (function (){var statearr_16722 = state_16706;
(statearr_16722[(12)] = inst_16574__$1);

return statearr_16722;
})();
if(cljs.core.truth_(inst_16575)){
var statearr_16723_16805 = state_16706__$1;
(statearr_16723_16805[(1)] = (5));

} else {
var statearr_16724_16806 = state_16706__$1;
(statearr_16724_16806[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (15))){
var inst_16583 = (state_16706[(13)]);
var inst_16585 = (state_16706[(14)]);
var inst_16584 = (state_16706[(15)]);
var inst_16586 = (state_16706[(17)]);
var inst_16601 = (state_16706[(2)]);
var inst_16602 = (inst_16586 + (1));
var tmp16718 = inst_16583;
var tmp16719 = inst_16585;
var tmp16720 = inst_16584;
var inst_16583__$1 = tmp16718;
var inst_16584__$1 = tmp16720;
var inst_16585__$1 = tmp16719;
var inst_16586__$1 = inst_16602;
var state_16706__$1 = (function (){var statearr_16725 = state_16706;
(statearr_16725[(13)] = inst_16583__$1);

(statearr_16725[(14)] = inst_16585__$1);

(statearr_16725[(15)] = inst_16584__$1);

(statearr_16725[(18)] = inst_16601);

(statearr_16725[(17)] = inst_16586__$1);

return statearr_16725;
})();
var statearr_16726_16807 = state_16706__$1;
(statearr_16726_16807[(2)] = null);

(statearr_16726_16807[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (21))){
var inst_16628 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16730_16808 = state_16706__$1;
(statearr_16730_16808[(2)] = inst_16628);

(statearr_16730_16808[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (31))){
var inst_16654 = (state_16706[(11)]);
var inst_16658 = done(null);
var inst_16659 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16654);
var state_16706__$1 = (function (){var statearr_16731 = state_16706;
(statearr_16731[(19)] = inst_16658);

return statearr_16731;
})();
var statearr_16732_16809 = state_16706__$1;
(statearr_16732_16809[(2)] = inst_16659);

(statearr_16732_16809[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (32))){
var inst_16649 = (state_16706[(9)]);
var inst_16647 = (state_16706[(10)]);
var inst_16648 = (state_16706[(20)]);
var inst_16646 = (state_16706[(21)]);
var inst_16661 = (state_16706[(2)]);
var inst_16662 = (inst_16649 + (1));
var tmp16727 = inst_16647;
var tmp16728 = inst_16648;
var tmp16729 = inst_16646;
var inst_16646__$1 = tmp16729;
var inst_16647__$1 = tmp16727;
var inst_16648__$1 = tmp16728;
var inst_16649__$1 = inst_16662;
var state_16706__$1 = (function (){var statearr_16733 = state_16706;
(statearr_16733[(9)] = inst_16649__$1);

(statearr_16733[(10)] = inst_16647__$1);

(statearr_16733[(22)] = inst_16661);

(statearr_16733[(20)] = inst_16648__$1);

(statearr_16733[(21)] = inst_16646__$1);

return statearr_16733;
})();
var statearr_16734_16810 = state_16706__$1;
(statearr_16734_16810[(2)] = null);

(statearr_16734_16810[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (40))){
var inst_16674 = (state_16706[(23)]);
var inst_16678 = done(null);
var inst_16679 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16674);
var state_16706__$1 = (function (){var statearr_16735 = state_16706;
(statearr_16735[(24)] = inst_16678);

return statearr_16735;
})();
var statearr_16736_16811 = state_16706__$1;
(statearr_16736_16811[(2)] = inst_16679);

(statearr_16736_16811[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (33))){
var inst_16665 = (state_16706[(25)]);
var inst_16667 = cljs.core.chunked_seq_QMARK_(inst_16665);
var state_16706__$1 = state_16706;
if(inst_16667){
var statearr_16737_16812 = state_16706__$1;
(statearr_16737_16812[(1)] = (36));

} else {
var statearr_16738_16813 = state_16706__$1;
(statearr_16738_16813[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (13))){
var inst_16595 = (state_16706[(26)]);
var inst_16598 = cljs.core.async.close_BANG_(inst_16595);
var state_16706__$1 = state_16706;
var statearr_16739_16814 = state_16706__$1;
(statearr_16739_16814[(2)] = inst_16598);

(statearr_16739_16814[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (22))){
var inst_16618 = (state_16706[(8)]);
var inst_16621 = cljs.core.async.close_BANG_(inst_16618);
var state_16706__$1 = state_16706;
var statearr_16740_16815 = state_16706__$1;
(statearr_16740_16815[(2)] = inst_16621);

(statearr_16740_16815[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (36))){
var inst_16665 = (state_16706[(25)]);
var inst_16669 = cljs.core.chunk_first(inst_16665);
var inst_16670 = cljs.core.chunk_rest(inst_16665);
var inst_16671 = cljs.core.count(inst_16669);
var inst_16646 = inst_16670;
var inst_16647 = inst_16669;
var inst_16648 = inst_16671;
var inst_16649 = (0);
var state_16706__$1 = (function (){var statearr_16741 = state_16706;
(statearr_16741[(9)] = inst_16649);

(statearr_16741[(10)] = inst_16647);

(statearr_16741[(20)] = inst_16648);

(statearr_16741[(21)] = inst_16646);

return statearr_16741;
})();
var statearr_16742_16816 = state_16706__$1;
(statearr_16742_16816[(2)] = null);

(statearr_16742_16816[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (41))){
var inst_16665 = (state_16706[(25)]);
var inst_16681 = (state_16706[(2)]);
var inst_16682 = cljs.core.next(inst_16665);
var inst_16646 = inst_16682;
var inst_16647 = null;
var inst_16648 = (0);
var inst_16649 = (0);
var state_16706__$1 = (function (){var statearr_16743 = state_16706;
(statearr_16743[(9)] = inst_16649);

(statearr_16743[(10)] = inst_16647);

(statearr_16743[(20)] = inst_16648);

(statearr_16743[(27)] = inst_16681);

(statearr_16743[(21)] = inst_16646);

return statearr_16743;
})();
var statearr_16744_16817 = state_16706__$1;
(statearr_16744_16817[(2)] = null);

(statearr_16744_16817[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (43))){
var state_16706__$1 = state_16706;
var statearr_16745_16818 = state_16706__$1;
(statearr_16745_16818[(2)] = null);

(statearr_16745_16818[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (29))){
var inst_16690 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16746_16819 = state_16706__$1;
(statearr_16746_16819[(2)] = inst_16690);

(statearr_16746_16819[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (44))){
var inst_16699 = (state_16706[(2)]);
var state_16706__$1 = (function (){var statearr_16747 = state_16706;
(statearr_16747[(28)] = inst_16699);

return statearr_16747;
})();
var statearr_16748_16820 = state_16706__$1;
(statearr_16748_16820[(2)] = null);

(statearr_16748_16820[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (6))){
var inst_16638 = (state_16706[(29)]);
var inst_16637 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16638__$1 = cljs.core.keys(inst_16637);
var inst_16639 = cljs.core.count(inst_16638__$1);
var inst_16640 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16639) : cljs.core.reset_BANG_.call(null,dctr,inst_16639));
var inst_16645 = cljs.core.seq(inst_16638__$1);
var inst_16646 = inst_16645;
var inst_16647 = null;
var inst_16648 = (0);
var inst_16649 = (0);
var state_16706__$1 = (function (){var statearr_16749 = state_16706;
(statearr_16749[(9)] = inst_16649);

(statearr_16749[(10)] = inst_16647);

(statearr_16749[(30)] = inst_16640);

(statearr_16749[(20)] = inst_16648);

(statearr_16749[(29)] = inst_16638__$1);

(statearr_16749[(21)] = inst_16646);

return statearr_16749;
})();
var statearr_16750_16821 = state_16706__$1;
(statearr_16750_16821[(2)] = null);

(statearr_16750_16821[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (28))){
var inst_16646 = (state_16706[(21)]);
var inst_16665 = (state_16706[(25)]);
var inst_16665__$1 = cljs.core.seq(inst_16646);
var state_16706__$1 = (function (){var statearr_16751 = state_16706;
(statearr_16751[(25)] = inst_16665__$1);

return statearr_16751;
})();
if(inst_16665__$1){
var statearr_16752_16822 = state_16706__$1;
(statearr_16752_16822[(1)] = (33));

} else {
var statearr_16753_16823 = state_16706__$1;
(statearr_16753_16823[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (25))){
var inst_16649 = (state_16706[(9)]);
var inst_16648 = (state_16706[(20)]);
var inst_16651 = (inst_16649 < inst_16648);
var inst_16652 = inst_16651;
var state_16706__$1 = state_16706;
if(cljs.core.truth_(inst_16652)){
var statearr_16754_16824 = state_16706__$1;
(statearr_16754_16824[(1)] = (27));

} else {
var statearr_16755_16825 = state_16706__$1;
(statearr_16755_16825[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (34))){
var state_16706__$1 = state_16706;
var statearr_16756_16826 = state_16706__$1;
(statearr_16756_16826[(2)] = null);

(statearr_16756_16826[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (17))){
var state_16706__$1 = state_16706;
var statearr_16757_16827 = state_16706__$1;
(statearr_16757_16827[(2)] = null);

(statearr_16757_16827[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (3))){
var inst_16704 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16706__$1,inst_16704);
} else {
if((state_val_16707 === (12))){
var inst_16633 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16758_16828 = state_16706__$1;
(statearr_16758_16828[(2)] = inst_16633);

(statearr_16758_16828[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (2))){
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16706__$1,(4),ch);
} else {
if((state_val_16707 === (23))){
var state_16706__$1 = state_16706;
var statearr_16759_16829 = state_16706__$1;
(statearr_16759_16829[(2)] = null);

(statearr_16759_16829[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (35))){
var inst_16688 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16760_16830 = state_16706__$1;
(statearr_16760_16830[(2)] = inst_16688);

(statearr_16760_16830[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (19))){
var inst_16605 = (state_16706[(7)]);
var inst_16609 = cljs.core.chunk_first(inst_16605);
var inst_16610 = cljs.core.chunk_rest(inst_16605);
var inst_16611 = cljs.core.count(inst_16609);
var inst_16583 = inst_16610;
var inst_16584 = inst_16609;
var inst_16585 = inst_16611;
var inst_16586 = (0);
var state_16706__$1 = (function (){var statearr_16761 = state_16706;
(statearr_16761[(13)] = inst_16583);

(statearr_16761[(14)] = inst_16585);

(statearr_16761[(15)] = inst_16584);

(statearr_16761[(17)] = inst_16586);

return statearr_16761;
})();
var statearr_16762_16831 = state_16706__$1;
(statearr_16762_16831[(2)] = null);

(statearr_16762_16831[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (11))){
var inst_16605 = (state_16706[(7)]);
var inst_16583 = (state_16706[(13)]);
var inst_16605__$1 = cljs.core.seq(inst_16583);
var state_16706__$1 = (function (){var statearr_16763 = state_16706;
(statearr_16763[(7)] = inst_16605__$1);

return statearr_16763;
})();
if(inst_16605__$1){
var statearr_16764_16832 = state_16706__$1;
(statearr_16764_16832[(1)] = (16));

} else {
var statearr_16765_16833 = state_16706__$1;
(statearr_16765_16833[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (9))){
var inst_16635 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16766_16834 = state_16706__$1;
(statearr_16766_16834[(2)] = inst_16635);

(statearr_16766_16834[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (5))){
var inst_16581 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16582 = cljs.core.seq(inst_16581);
var inst_16583 = inst_16582;
var inst_16584 = null;
var inst_16585 = (0);
var inst_16586 = (0);
var state_16706__$1 = (function (){var statearr_16767 = state_16706;
(statearr_16767[(13)] = inst_16583);

(statearr_16767[(14)] = inst_16585);

(statearr_16767[(15)] = inst_16584);

(statearr_16767[(17)] = inst_16586);

return statearr_16767;
})();
var statearr_16768_16835 = state_16706__$1;
(statearr_16768_16835[(2)] = null);

(statearr_16768_16835[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (14))){
var state_16706__$1 = state_16706;
var statearr_16769_16836 = state_16706__$1;
(statearr_16769_16836[(2)] = null);

(statearr_16769_16836[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (45))){
var inst_16696 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16770_16837 = state_16706__$1;
(statearr_16770_16837[(2)] = inst_16696);

(statearr_16770_16837[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (26))){
var inst_16638 = (state_16706[(29)]);
var inst_16692 = (state_16706[(2)]);
var inst_16693 = cljs.core.seq(inst_16638);
var state_16706__$1 = (function (){var statearr_16771 = state_16706;
(statearr_16771[(31)] = inst_16692);

return statearr_16771;
})();
if(inst_16693){
var statearr_16772_16838 = state_16706__$1;
(statearr_16772_16838[(1)] = (42));

} else {
var statearr_16773_16839 = state_16706__$1;
(statearr_16773_16839[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (16))){
var inst_16605 = (state_16706[(7)]);
var inst_16607 = cljs.core.chunked_seq_QMARK_(inst_16605);
var state_16706__$1 = state_16706;
if(inst_16607){
var statearr_16774_16840 = state_16706__$1;
(statearr_16774_16840[(1)] = (19));

} else {
var statearr_16775_16841 = state_16706__$1;
(statearr_16775_16841[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (38))){
var inst_16685 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16776_16842 = state_16706__$1;
(statearr_16776_16842[(2)] = inst_16685);

(statearr_16776_16842[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (30))){
var state_16706__$1 = state_16706;
var statearr_16777_16843 = state_16706__$1;
(statearr_16777_16843[(2)] = null);

(statearr_16777_16843[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (10))){
var inst_16584 = (state_16706[(15)]);
var inst_16586 = (state_16706[(17)]);
var inst_16594 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16584,inst_16586);
var inst_16595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16594,(0),null);
var inst_16596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16594,(1),null);
var state_16706__$1 = (function (){var statearr_16778 = state_16706;
(statearr_16778[(26)] = inst_16595);

return statearr_16778;
})();
if(cljs.core.truth_(inst_16596)){
var statearr_16779_16844 = state_16706__$1;
(statearr_16779_16844[(1)] = (13));

} else {
var statearr_16780_16845 = state_16706__$1;
(statearr_16780_16845[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (18))){
var inst_16631 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16781_16846 = state_16706__$1;
(statearr_16781_16846[(2)] = inst_16631);

(statearr_16781_16846[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (42))){
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16706__$1,(45),dchan);
} else {
if((state_val_16707 === (37))){
var inst_16665 = (state_16706[(25)]);
var inst_16574 = (state_16706[(12)]);
var inst_16674 = (state_16706[(23)]);
var inst_16674__$1 = cljs.core.first(inst_16665);
var inst_16675 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16674__$1,inst_16574,done);
var state_16706__$1 = (function (){var statearr_16782 = state_16706;
(statearr_16782[(23)] = inst_16674__$1);

return statearr_16782;
})();
if(cljs.core.truth_(inst_16675)){
var statearr_16783_16847 = state_16706__$1;
(statearr_16783_16847[(1)] = (39));

} else {
var statearr_16784_16848 = state_16706__$1;
(statearr_16784_16848[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16707 === (8))){
var inst_16585 = (state_16706[(14)]);
var inst_16586 = (state_16706[(17)]);
var inst_16588 = (inst_16586 < inst_16585);
var inst_16589 = inst_16588;
var state_16706__$1 = state_16706;
if(cljs.core.truth_(inst_16589)){
var statearr_16785_16849 = state_16706__$1;
(statearr_16785_16849[(1)] = (10));

} else {
var statearr_16786_16850 = state_16706__$1;
(statearr_16786_16850[(1)] = (11));

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
});})(c__15461__auto___16796,cs,m,dchan,dctr,done))
;
return ((function (switch__15347__auto__,c__15461__auto___16796,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15348__auto__ = null;
var cljs$core$async$mult_$_state_machine__15348__auto____0 = (function (){
var statearr_16790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16790[(0)] = cljs$core$async$mult_$_state_machine__15348__auto__);

(statearr_16790[(1)] = (1));

return statearr_16790;
});
var cljs$core$async$mult_$_state_machine__15348__auto____1 = (function (state_16706){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_16706);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e16791){if((e16791 instanceof Object)){
var ex__15351__auto__ = e16791;
var statearr_16792_16851 = state_16706;
(statearr_16792_16851[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16706);

return cljs.core.cst$kw$recur;
} else {
throw e16791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__16852 = state_16706;
state_16706 = G__16852;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15348__auto__ = function(state_16706){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15348__auto____1.call(this,state_16706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15348__auto____0;
cljs$core$async$mult_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15348__auto____1;
return cljs$core$async$mult_$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___16796,cs,m,dchan,dctr,done))
})();
var state__15463__auto__ = (function (){var statearr_16793 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_16793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___16796);

return statearr_16793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___16796,cs,m,dchan,dctr,done))
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
var args16853 = [];
var len__7652__auto___16856 = arguments.length;
var i__7653__auto___16857 = (0);
while(true){
if((i__7653__auto___16857 < len__7652__auto___16856)){
args16853.push((arguments[i__7653__auto___16857]));

var G__16858 = (i__7653__auto___16857 + (1));
i__7653__auto___16857 = G__16858;
continue;
} else {
}
break;
}

var G__16855 = args16853.length;
switch (G__16855) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16853.length)].join('')));

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
var len__7652__auto___16870 = arguments.length;
var i__7653__auto___16871 = (0);
while(true){
if((i__7653__auto___16871 < len__7652__auto___16870)){
args__7659__auto__.push((arguments[i__7653__auto___16871]));

var G__16872 = (i__7653__auto___16871 + (1));
i__7653__auto___16871 = G__16872;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((3) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7660__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16864){
var map__16865 = p__16864;
var map__16865__$1 = ((((!((map__16865 == null)))?((((map__16865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16865):map__16865);
var opts = map__16865__$1;
var statearr_16867_16873 = state;
(statearr_16867_16873[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16865,map__16865__$1,opts){
return (function (val){
var statearr_16868_16874 = state;
(statearr_16868_16874[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16865,map__16865__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16869_16875 = state;
(statearr_16869_16875[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16860){
var G__16861 = cljs.core.first(seq16860);
var seq16860__$1 = cljs.core.next(seq16860);
var G__16862 = cljs.core.first(seq16860__$1);
var seq16860__$2 = cljs.core.next(seq16860__$1);
var G__16863 = cljs.core.first(seq16860__$2);
var seq16860__$3 = cljs.core.next(seq16860__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16861,G__16862,G__16863,seq16860__$3);
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
var cs = (function (){var G__17044 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17044) : cljs.core.atom.call(null,G__17044));
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
if(typeof cljs.core.async.t_cljs$core$async17045 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17045 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17046){
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
this.meta17046 = meta17046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17047,meta17046__$1){
var self__ = this;
var _17047__$1 = this;
return (new cljs.core.async.t_cljs$core$async17045(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17046__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17047){
var self__ = this;
var _17047__$1 = this;
return self__.meta17046;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17048_17212 = self__.cs;
var G__17049_17213 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17048_17212,G__17049_17213) : cljs.core.reset_BANG_.call(null,G__17048_17212,G__17049_17213));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17045.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17046], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17045";

cljs.core.async.t_cljs$core$async17045.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async17045");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17045 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17045(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17046){
return (new cljs.core.async.t_cljs$core$async17045(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17046));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17045(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15461__auto___17214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___17214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___17214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17149){
var state_val_17150 = (state_17149[(1)]);
if((state_val_17150 === (7))){
var inst_17065 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17151_17215 = state_17149__$1;
(statearr_17151_17215[(2)] = inst_17065);

(statearr_17151_17215[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (20))){
var inst_17077 = (state_17149[(7)]);
var state_17149__$1 = state_17149;
var statearr_17152_17216 = state_17149__$1;
(statearr_17152_17216[(2)] = inst_17077);

(statearr_17152_17216[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (27))){
var state_17149__$1 = state_17149;
var statearr_17153_17217 = state_17149__$1;
(statearr_17153_17217[(2)] = null);

(statearr_17153_17217[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (1))){
var inst_17053 = (state_17149[(8)]);
var inst_17053__$1 = calc_state();
var inst_17055 = (inst_17053__$1 == null);
var inst_17056 = cljs.core.not(inst_17055);
var state_17149__$1 = (function (){var statearr_17154 = state_17149;
(statearr_17154[(8)] = inst_17053__$1);

return statearr_17154;
})();
if(inst_17056){
var statearr_17155_17218 = state_17149__$1;
(statearr_17155_17218[(1)] = (2));

} else {
var statearr_17156_17219 = state_17149__$1;
(statearr_17156_17219[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (24))){
var inst_17109 = (state_17149[(9)]);
var inst_17100 = (state_17149[(10)]);
var inst_17123 = (state_17149[(11)]);
var inst_17123__$1 = (inst_17100.cljs$core$IFn$_invoke$arity$1 ? inst_17100.cljs$core$IFn$_invoke$arity$1(inst_17109) : inst_17100.call(null,inst_17109));
var state_17149__$1 = (function (){var statearr_17157 = state_17149;
(statearr_17157[(11)] = inst_17123__$1);

return statearr_17157;
})();
if(cljs.core.truth_(inst_17123__$1)){
var statearr_17158_17220 = state_17149__$1;
(statearr_17158_17220[(1)] = (29));

} else {
var statearr_17159_17221 = state_17149__$1;
(statearr_17159_17221[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (4))){
var inst_17068 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17068)){
var statearr_17160_17222 = state_17149__$1;
(statearr_17160_17222[(1)] = (8));

} else {
var statearr_17161_17223 = state_17149__$1;
(statearr_17161_17223[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (15))){
var inst_17094 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17094)){
var statearr_17162_17224 = state_17149__$1;
(statearr_17162_17224[(1)] = (19));

} else {
var statearr_17163_17225 = state_17149__$1;
(statearr_17163_17225[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (21))){
var inst_17099 = (state_17149[(12)]);
var inst_17099__$1 = (state_17149[(2)]);
var inst_17100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17099__$1,cljs.core.cst$kw$solos);
var inst_17101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17099__$1,cljs.core.cst$kw$mutes);
var inst_17102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17099__$1,cljs.core.cst$kw$reads);
var state_17149__$1 = (function (){var statearr_17164 = state_17149;
(statearr_17164[(13)] = inst_17101);

(statearr_17164[(10)] = inst_17100);

(statearr_17164[(12)] = inst_17099__$1);

return statearr_17164;
})();
return cljs.core.async.ioc_alts_BANG_(state_17149__$1,(22),inst_17102);
} else {
if((state_val_17150 === (31))){
var inst_17131 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17131)){
var statearr_17165_17226 = state_17149__$1;
(statearr_17165_17226[(1)] = (32));

} else {
var statearr_17166_17227 = state_17149__$1;
(statearr_17166_17227[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (32))){
var inst_17108 = (state_17149[(14)]);
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17149__$1,(35),out,inst_17108);
} else {
if((state_val_17150 === (33))){
var inst_17099 = (state_17149[(12)]);
var inst_17077 = inst_17099;
var state_17149__$1 = (function (){var statearr_17167 = state_17149;
(statearr_17167[(7)] = inst_17077);

return statearr_17167;
})();
var statearr_17168_17228 = state_17149__$1;
(statearr_17168_17228[(2)] = null);

(statearr_17168_17228[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (13))){
var inst_17077 = (state_17149[(7)]);
var inst_17084 = inst_17077.cljs$lang$protocol_mask$partition0$;
var inst_17085 = (inst_17084 & (64));
var inst_17086 = inst_17077.cljs$core$ISeq$;
var inst_17087 = (inst_17085) || (inst_17086);
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17087)){
var statearr_17169_17229 = state_17149__$1;
(statearr_17169_17229[(1)] = (16));

} else {
var statearr_17170_17230 = state_17149__$1;
(statearr_17170_17230[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (22))){
var inst_17109 = (state_17149[(9)]);
var inst_17108 = (state_17149[(14)]);
var inst_17107 = (state_17149[(2)]);
var inst_17108__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17107,(0),null);
var inst_17109__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17107,(1),null);
var inst_17110 = (inst_17108__$1 == null);
var inst_17111 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17109__$1,change);
var inst_17112 = (inst_17110) || (inst_17111);
var state_17149__$1 = (function (){var statearr_17171 = state_17149;
(statearr_17171[(9)] = inst_17109__$1);

(statearr_17171[(14)] = inst_17108__$1);

return statearr_17171;
})();
if(cljs.core.truth_(inst_17112)){
var statearr_17172_17231 = state_17149__$1;
(statearr_17172_17231[(1)] = (23));

} else {
var statearr_17173_17232 = state_17149__$1;
(statearr_17173_17232[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (36))){
var inst_17099 = (state_17149[(12)]);
var inst_17077 = inst_17099;
var state_17149__$1 = (function (){var statearr_17174 = state_17149;
(statearr_17174[(7)] = inst_17077);

return statearr_17174;
})();
var statearr_17175_17233 = state_17149__$1;
(statearr_17175_17233[(2)] = null);

(statearr_17175_17233[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (29))){
var inst_17123 = (state_17149[(11)]);
var state_17149__$1 = state_17149;
var statearr_17176_17234 = state_17149__$1;
(statearr_17176_17234[(2)] = inst_17123);

(statearr_17176_17234[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (6))){
var state_17149__$1 = state_17149;
var statearr_17177_17235 = state_17149__$1;
(statearr_17177_17235[(2)] = false);

(statearr_17177_17235[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (28))){
var inst_17119 = (state_17149[(2)]);
var inst_17120 = calc_state();
var inst_17077 = inst_17120;
var state_17149__$1 = (function (){var statearr_17178 = state_17149;
(statearr_17178[(7)] = inst_17077);

(statearr_17178[(15)] = inst_17119);

return statearr_17178;
})();
var statearr_17179_17236 = state_17149__$1;
(statearr_17179_17236[(2)] = null);

(statearr_17179_17236[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (25))){
var inst_17145 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17180_17237 = state_17149__$1;
(statearr_17180_17237[(2)] = inst_17145);

(statearr_17180_17237[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (34))){
var inst_17143 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17181_17238 = state_17149__$1;
(statearr_17181_17238[(2)] = inst_17143);

(statearr_17181_17238[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (17))){
var state_17149__$1 = state_17149;
var statearr_17182_17239 = state_17149__$1;
(statearr_17182_17239[(2)] = false);

(statearr_17182_17239[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (3))){
var state_17149__$1 = state_17149;
var statearr_17183_17240 = state_17149__$1;
(statearr_17183_17240[(2)] = false);

(statearr_17183_17240[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (12))){
var inst_17147 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17149__$1,inst_17147);
} else {
if((state_val_17150 === (2))){
var inst_17053 = (state_17149[(8)]);
var inst_17058 = inst_17053.cljs$lang$protocol_mask$partition0$;
var inst_17059 = (inst_17058 & (64));
var inst_17060 = inst_17053.cljs$core$ISeq$;
var inst_17061 = (inst_17059) || (inst_17060);
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17061)){
var statearr_17184_17241 = state_17149__$1;
(statearr_17184_17241[(1)] = (5));

} else {
var statearr_17185_17242 = state_17149__$1;
(statearr_17185_17242[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (23))){
var inst_17108 = (state_17149[(14)]);
var inst_17114 = (inst_17108 == null);
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17114)){
var statearr_17186_17243 = state_17149__$1;
(statearr_17186_17243[(1)] = (26));

} else {
var statearr_17187_17244 = state_17149__$1;
(statearr_17187_17244[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (35))){
var inst_17134 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17134)){
var statearr_17188_17245 = state_17149__$1;
(statearr_17188_17245[(1)] = (36));

} else {
var statearr_17189_17246 = state_17149__$1;
(statearr_17189_17246[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (19))){
var inst_17077 = (state_17149[(7)]);
var inst_17096 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17077);
var state_17149__$1 = state_17149;
var statearr_17190_17247 = state_17149__$1;
(statearr_17190_17247[(2)] = inst_17096);

(statearr_17190_17247[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (11))){
var inst_17077 = (state_17149[(7)]);
var inst_17081 = (inst_17077 == null);
var inst_17082 = cljs.core.not(inst_17081);
var state_17149__$1 = state_17149;
if(inst_17082){
var statearr_17191_17248 = state_17149__$1;
(statearr_17191_17248[(1)] = (13));

} else {
var statearr_17192_17249 = state_17149__$1;
(statearr_17192_17249[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (9))){
var inst_17053 = (state_17149[(8)]);
var state_17149__$1 = state_17149;
var statearr_17193_17250 = state_17149__$1;
(statearr_17193_17250[(2)] = inst_17053);

(statearr_17193_17250[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (5))){
var state_17149__$1 = state_17149;
var statearr_17194_17251 = state_17149__$1;
(statearr_17194_17251[(2)] = true);

(statearr_17194_17251[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (14))){
var state_17149__$1 = state_17149;
var statearr_17195_17252 = state_17149__$1;
(statearr_17195_17252[(2)] = false);

(statearr_17195_17252[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (26))){
var inst_17109 = (state_17149[(9)]);
var inst_17116 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17109);
var state_17149__$1 = state_17149;
var statearr_17196_17253 = state_17149__$1;
(statearr_17196_17253[(2)] = inst_17116);

(statearr_17196_17253[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (16))){
var state_17149__$1 = state_17149;
var statearr_17197_17254 = state_17149__$1;
(statearr_17197_17254[(2)] = true);

(statearr_17197_17254[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (38))){
var inst_17139 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17198_17255 = state_17149__$1;
(statearr_17198_17255[(2)] = inst_17139);

(statearr_17198_17255[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (30))){
var inst_17109 = (state_17149[(9)]);
var inst_17101 = (state_17149[(13)]);
var inst_17100 = (state_17149[(10)]);
var inst_17126 = cljs.core.empty_QMARK_(inst_17100);
var inst_17127 = (inst_17101.cljs$core$IFn$_invoke$arity$1 ? inst_17101.cljs$core$IFn$_invoke$arity$1(inst_17109) : inst_17101.call(null,inst_17109));
var inst_17128 = cljs.core.not(inst_17127);
var inst_17129 = (inst_17126) && (inst_17128);
var state_17149__$1 = state_17149;
var statearr_17199_17256 = state_17149__$1;
(statearr_17199_17256[(2)] = inst_17129);

(statearr_17199_17256[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (10))){
var inst_17053 = (state_17149[(8)]);
var inst_17073 = (state_17149[(2)]);
var inst_17074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17073,cljs.core.cst$kw$solos);
var inst_17075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17073,cljs.core.cst$kw$mutes);
var inst_17076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17073,cljs.core.cst$kw$reads);
var inst_17077 = inst_17053;
var state_17149__$1 = (function (){var statearr_17200 = state_17149;
(statearr_17200[(16)] = inst_17074);

(statearr_17200[(17)] = inst_17075);

(statearr_17200[(7)] = inst_17077);

(statearr_17200[(18)] = inst_17076);

return statearr_17200;
})();
var statearr_17201_17257 = state_17149__$1;
(statearr_17201_17257[(2)] = null);

(statearr_17201_17257[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (18))){
var inst_17091 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17202_17258 = state_17149__$1;
(statearr_17202_17258[(2)] = inst_17091);

(statearr_17202_17258[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (37))){
var state_17149__$1 = state_17149;
var statearr_17203_17259 = state_17149__$1;
(statearr_17203_17259[(2)] = null);

(statearr_17203_17259[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17150 === (8))){
var inst_17053 = (state_17149[(8)]);
var inst_17070 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17053);
var state_17149__$1 = state_17149;
var statearr_17204_17260 = state_17149__$1;
(statearr_17204_17260[(2)] = inst_17070);

(statearr_17204_17260[(1)] = (10));


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
});})(c__15461__auto___17214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15347__auto__,c__15461__auto___17214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15348__auto__ = null;
var cljs$core$async$mix_$_state_machine__15348__auto____0 = (function (){
var statearr_17208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17208[(0)] = cljs$core$async$mix_$_state_machine__15348__auto__);

(statearr_17208[(1)] = (1));

return statearr_17208;
});
var cljs$core$async$mix_$_state_machine__15348__auto____1 = (function (state_17149){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_17149);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e17209){if((e17209 instanceof Object)){
var ex__15351__auto__ = e17209;
var statearr_17210_17261 = state_17149;
(statearr_17210_17261[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17149);

return cljs.core.cst$kw$recur;
} else {
throw e17209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__17262 = state_17149;
state_17149 = G__17262;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15348__auto__ = function(state_17149){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15348__auto____1.call(this,state_17149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15348__auto____0;
cljs$core$async$mix_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15348__auto____1;
return cljs$core$async$mix_$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___17214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15463__auto__ = (function (){var statearr_17211 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_17211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___17214);

return statearr_17211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___17214,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args17263 = [];
var len__7652__auto___17266 = arguments.length;
var i__7653__auto___17267 = (0);
while(true){
if((i__7653__auto___17267 < len__7652__auto___17266)){
args17263.push((arguments[i__7653__auto___17267]));

var G__17268 = (i__7653__auto___17267 + (1));
i__7653__auto___17267 = G__17268;
continue;
} else {
}
break;
}

var G__17265 = args17263.length;
switch (G__17265) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17263.length)].join('')));

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
var args17271 = [];
var len__7652__auto___17399 = arguments.length;
var i__7653__auto___17400 = (0);
while(true){
if((i__7653__auto___17400 < len__7652__auto___17399)){
args17271.push((arguments[i__7653__auto___17400]));

var G__17401 = (i__7653__auto___17400 + (1));
i__7653__auto___17400 = G__17401;
continue;
} else {
}
break;
}

var G__17273 = args17271.length;
switch (G__17273) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17271.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17274 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17274) : cljs.core.atom.call(null,G__17274));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6577__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6577__auto__,mults){
return (function (p1__17270_SHARP_){
if(cljs.core.truth_((p1__17270_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17270_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17270_SHARP_.call(null,topic)))){
return p1__17270_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17270_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6577__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17275 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17276){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17276 = meta17276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17277,meta17276__$1){
var self__ = this;
var _17277__$1 = this;
return (new cljs.core.async.t_cljs$core$async17275(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17276__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17277){
var self__ = this;
var _17277__$1 = this;
return self__.meta17276;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17275.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17275.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17275.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17275.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17278 = self__.mults;
var G__17279 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17278,G__17279) : cljs.core.reset_BANG_.call(null,G__17278,G__17279));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17275.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17276], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17275";

cljs.core.async.t_cljs$core$async17275.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async17275");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17275 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17276){
return (new cljs.core.async.t_cljs$core$async17275(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17276));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17275(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15461__auto___17403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___17403,mults,ensure_mult,p){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___17403,mults,ensure_mult,p){
return (function (state_17351){
var state_val_17352 = (state_17351[(1)]);
if((state_val_17352 === (7))){
var inst_17347 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17353_17404 = state_17351__$1;
(statearr_17353_17404[(2)] = inst_17347);

(statearr_17353_17404[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (20))){
var state_17351__$1 = state_17351;
var statearr_17354_17405 = state_17351__$1;
(statearr_17354_17405[(2)] = null);

(statearr_17354_17405[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (1))){
var state_17351__$1 = state_17351;
var statearr_17355_17406 = state_17351__$1;
(statearr_17355_17406[(2)] = null);

(statearr_17355_17406[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (24))){
var inst_17330 = (state_17351[(7)]);
var inst_17339 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17330);
var state_17351__$1 = state_17351;
var statearr_17356_17407 = state_17351__$1;
(statearr_17356_17407[(2)] = inst_17339);

(statearr_17356_17407[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (4))){
var inst_17282 = (state_17351[(8)]);
var inst_17282__$1 = (state_17351[(2)]);
var inst_17283 = (inst_17282__$1 == null);
var state_17351__$1 = (function (){var statearr_17357 = state_17351;
(statearr_17357[(8)] = inst_17282__$1);

return statearr_17357;
})();
if(cljs.core.truth_(inst_17283)){
var statearr_17358_17408 = state_17351__$1;
(statearr_17358_17408[(1)] = (5));

} else {
var statearr_17359_17409 = state_17351__$1;
(statearr_17359_17409[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (15))){
var inst_17324 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17360_17410 = state_17351__$1;
(statearr_17360_17410[(2)] = inst_17324);

(statearr_17360_17410[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (21))){
var inst_17344 = (state_17351[(2)]);
var state_17351__$1 = (function (){var statearr_17361 = state_17351;
(statearr_17361[(9)] = inst_17344);

return statearr_17361;
})();
var statearr_17362_17411 = state_17351__$1;
(statearr_17362_17411[(2)] = null);

(statearr_17362_17411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (13))){
var inst_17306 = (state_17351[(10)]);
var inst_17308 = cljs.core.chunked_seq_QMARK_(inst_17306);
var state_17351__$1 = state_17351;
if(inst_17308){
var statearr_17363_17412 = state_17351__$1;
(statearr_17363_17412[(1)] = (16));

} else {
var statearr_17364_17413 = state_17351__$1;
(statearr_17364_17413[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (22))){
var inst_17336 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
if(cljs.core.truth_(inst_17336)){
var statearr_17365_17414 = state_17351__$1;
(statearr_17365_17414[(1)] = (23));

} else {
var statearr_17366_17415 = state_17351__$1;
(statearr_17366_17415[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (6))){
var inst_17282 = (state_17351[(8)]);
var inst_17332 = (state_17351[(11)]);
var inst_17330 = (state_17351[(7)]);
var inst_17330__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17282) : topic_fn.call(null,inst_17282));
var inst_17331 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17332__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17331,inst_17330__$1);
var state_17351__$1 = (function (){var statearr_17367 = state_17351;
(statearr_17367[(11)] = inst_17332__$1);

(statearr_17367[(7)] = inst_17330__$1);

return statearr_17367;
})();
if(cljs.core.truth_(inst_17332__$1)){
var statearr_17368_17416 = state_17351__$1;
(statearr_17368_17416[(1)] = (19));

} else {
var statearr_17369_17417 = state_17351__$1;
(statearr_17369_17417[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (25))){
var inst_17341 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17370_17418 = state_17351__$1;
(statearr_17370_17418[(2)] = inst_17341);

(statearr_17370_17418[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (17))){
var inst_17306 = (state_17351[(10)]);
var inst_17315 = cljs.core.first(inst_17306);
var inst_17316 = cljs.core.async.muxch_STAR_(inst_17315);
var inst_17317 = cljs.core.async.close_BANG_(inst_17316);
var inst_17318 = cljs.core.next(inst_17306);
var inst_17292 = inst_17318;
var inst_17293 = null;
var inst_17294 = (0);
var inst_17295 = (0);
var state_17351__$1 = (function (){var statearr_17371 = state_17351;
(statearr_17371[(12)] = inst_17293);

(statearr_17371[(13)] = inst_17295);

(statearr_17371[(14)] = inst_17294);

(statearr_17371[(15)] = inst_17317);

(statearr_17371[(16)] = inst_17292);

return statearr_17371;
})();
var statearr_17372_17419 = state_17351__$1;
(statearr_17372_17419[(2)] = null);

(statearr_17372_17419[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (3))){
var inst_17349 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17351__$1,inst_17349);
} else {
if((state_val_17352 === (12))){
var inst_17326 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17373_17420 = state_17351__$1;
(statearr_17373_17420[(2)] = inst_17326);

(statearr_17373_17420[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (2))){
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17351__$1,(4),ch);
} else {
if((state_val_17352 === (23))){
var state_17351__$1 = state_17351;
var statearr_17374_17421 = state_17351__$1;
(statearr_17374_17421[(2)] = null);

(statearr_17374_17421[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (19))){
var inst_17282 = (state_17351[(8)]);
var inst_17332 = (state_17351[(11)]);
var inst_17334 = cljs.core.async.muxch_STAR_(inst_17332);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17351__$1,(22),inst_17334,inst_17282);
} else {
if((state_val_17352 === (11))){
var inst_17306 = (state_17351[(10)]);
var inst_17292 = (state_17351[(16)]);
var inst_17306__$1 = cljs.core.seq(inst_17292);
var state_17351__$1 = (function (){var statearr_17375 = state_17351;
(statearr_17375[(10)] = inst_17306__$1);

return statearr_17375;
})();
if(inst_17306__$1){
var statearr_17376_17422 = state_17351__$1;
(statearr_17376_17422[(1)] = (13));

} else {
var statearr_17377_17423 = state_17351__$1;
(statearr_17377_17423[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (9))){
var inst_17328 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17378_17424 = state_17351__$1;
(statearr_17378_17424[(2)] = inst_17328);

(statearr_17378_17424[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (5))){
var inst_17289 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17290 = cljs.core.vals(inst_17289);
var inst_17291 = cljs.core.seq(inst_17290);
var inst_17292 = inst_17291;
var inst_17293 = null;
var inst_17294 = (0);
var inst_17295 = (0);
var state_17351__$1 = (function (){var statearr_17379 = state_17351;
(statearr_17379[(12)] = inst_17293);

(statearr_17379[(13)] = inst_17295);

(statearr_17379[(14)] = inst_17294);

(statearr_17379[(16)] = inst_17292);

return statearr_17379;
})();
var statearr_17380_17425 = state_17351__$1;
(statearr_17380_17425[(2)] = null);

(statearr_17380_17425[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (14))){
var state_17351__$1 = state_17351;
var statearr_17384_17426 = state_17351__$1;
(statearr_17384_17426[(2)] = null);

(statearr_17384_17426[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (16))){
var inst_17306 = (state_17351[(10)]);
var inst_17310 = cljs.core.chunk_first(inst_17306);
var inst_17311 = cljs.core.chunk_rest(inst_17306);
var inst_17312 = cljs.core.count(inst_17310);
var inst_17292 = inst_17311;
var inst_17293 = inst_17310;
var inst_17294 = inst_17312;
var inst_17295 = (0);
var state_17351__$1 = (function (){var statearr_17385 = state_17351;
(statearr_17385[(12)] = inst_17293);

(statearr_17385[(13)] = inst_17295);

(statearr_17385[(14)] = inst_17294);

(statearr_17385[(16)] = inst_17292);

return statearr_17385;
})();
var statearr_17386_17427 = state_17351__$1;
(statearr_17386_17427[(2)] = null);

(statearr_17386_17427[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (10))){
var inst_17293 = (state_17351[(12)]);
var inst_17295 = (state_17351[(13)]);
var inst_17294 = (state_17351[(14)]);
var inst_17292 = (state_17351[(16)]);
var inst_17300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17293,inst_17295);
var inst_17301 = cljs.core.async.muxch_STAR_(inst_17300);
var inst_17302 = cljs.core.async.close_BANG_(inst_17301);
var inst_17303 = (inst_17295 + (1));
var tmp17381 = inst_17293;
var tmp17382 = inst_17294;
var tmp17383 = inst_17292;
var inst_17292__$1 = tmp17383;
var inst_17293__$1 = tmp17381;
var inst_17294__$1 = tmp17382;
var inst_17295__$1 = inst_17303;
var state_17351__$1 = (function (){var statearr_17387 = state_17351;
(statearr_17387[(12)] = inst_17293__$1);

(statearr_17387[(13)] = inst_17295__$1);

(statearr_17387[(17)] = inst_17302);

(statearr_17387[(14)] = inst_17294__$1);

(statearr_17387[(16)] = inst_17292__$1);

return statearr_17387;
})();
var statearr_17388_17428 = state_17351__$1;
(statearr_17388_17428[(2)] = null);

(statearr_17388_17428[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (18))){
var inst_17321 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17389_17429 = state_17351__$1;
(statearr_17389_17429[(2)] = inst_17321);

(statearr_17389_17429[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17352 === (8))){
var inst_17295 = (state_17351[(13)]);
var inst_17294 = (state_17351[(14)]);
var inst_17297 = (inst_17295 < inst_17294);
var inst_17298 = inst_17297;
var state_17351__$1 = state_17351;
if(cljs.core.truth_(inst_17298)){
var statearr_17390_17430 = state_17351__$1;
(statearr_17390_17430[(1)] = (10));

} else {
var statearr_17391_17431 = state_17351__$1;
(statearr_17391_17431[(1)] = (11));

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
});})(c__15461__auto___17403,mults,ensure_mult,p))
;
return ((function (switch__15347__auto__,c__15461__auto___17403,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_17395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17395[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_17395[(1)] = (1));

return statearr_17395;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_17351){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_17351);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e17396){if((e17396 instanceof Object)){
var ex__15351__auto__ = e17396;
var statearr_17397_17432 = state_17351;
(statearr_17397_17432[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17351);

return cljs.core.cst$kw$recur;
} else {
throw e17396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__17433 = state_17351;
state_17351 = G__17433;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_17351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_17351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___17403,mults,ensure_mult,p))
})();
var state__15463__auto__ = (function (){var statearr_17398 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_17398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___17403);

return statearr_17398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___17403,mults,ensure_mult,p))
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
var args17434 = [];
var len__7652__auto___17437 = arguments.length;
var i__7653__auto___17438 = (0);
while(true){
if((i__7653__auto___17438 < len__7652__auto___17437)){
args17434.push((arguments[i__7653__auto___17438]));

var G__17439 = (i__7653__auto___17438 + (1));
i__7653__auto___17438 = G__17439;
continue;
} else {
}
break;
}

var G__17436 = args17434.length;
switch (G__17436) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17434.length)].join('')));

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
var args17441 = [];
var len__7652__auto___17444 = arguments.length;
var i__7653__auto___17445 = (0);
while(true){
if((i__7653__auto___17445 < len__7652__auto___17444)){
args17441.push((arguments[i__7653__auto___17445]));

var G__17446 = (i__7653__auto___17445 + (1));
i__7653__auto___17445 = G__17446;
continue;
} else {
}
break;
}

var G__17443 = args17441.length;
switch (G__17443) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17441.length)].join('')));

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
var args17448 = [];
var len__7652__auto___17519 = arguments.length;
var i__7653__auto___17520 = (0);
while(true){
if((i__7653__auto___17520 < len__7652__auto___17519)){
args17448.push((arguments[i__7653__auto___17520]));

var G__17521 = (i__7653__auto___17520 + (1));
i__7653__auto___17520 = G__17521;
continue;
} else {
}
break;
}

var G__17450 = args17448.length;
switch (G__17450) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17448.length)].join('')));

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
var c__15461__auto___17523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___17523,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___17523,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17489){
var state_val_17490 = (state_17489[(1)]);
if((state_val_17490 === (7))){
var state_17489__$1 = state_17489;
var statearr_17491_17524 = state_17489__$1;
(statearr_17491_17524[(2)] = null);

(statearr_17491_17524[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (1))){
var state_17489__$1 = state_17489;
var statearr_17492_17525 = state_17489__$1;
(statearr_17492_17525[(2)] = null);

(statearr_17492_17525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (4))){
var inst_17453 = (state_17489[(7)]);
var inst_17455 = (inst_17453 < cnt);
var state_17489__$1 = state_17489;
if(cljs.core.truth_(inst_17455)){
var statearr_17493_17526 = state_17489__$1;
(statearr_17493_17526[(1)] = (6));

} else {
var statearr_17494_17527 = state_17489__$1;
(statearr_17494_17527[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (15))){
var inst_17485 = (state_17489[(2)]);
var state_17489__$1 = state_17489;
var statearr_17495_17528 = state_17489__$1;
(statearr_17495_17528[(2)] = inst_17485);

(statearr_17495_17528[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (13))){
var inst_17478 = cljs.core.async.close_BANG_(out);
var state_17489__$1 = state_17489;
var statearr_17496_17529 = state_17489__$1;
(statearr_17496_17529[(2)] = inst_17478);

(statearr_17496_17529[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (6))){
var state_17489__$1 = state_17489;
var statearr_17497_17530 = state_17489__$1;
(statearr_17497_17530[(2)] = null);

(statearr_17497_17530[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (3))){
var inst_17487 = (state_17489[(2)]);
var state_17489__$1 = state_17489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17489__$1,inst_17487);
} else {
if((state_val_17490 === (12))){
var inst_17475 = (state_17489[(8)]);
var inst_17475__$1 = (state_17489[(2)]);
var inst_17476 = cljs.core.some(cljs.core.nil_QMARK_,inst_17475__$1);
var state_17489__$1 = (function (){var statearr_17498 = state_17489;
(statearr_17498[(8)] = inst_17475__$1);

return statearr_17498;
})();
if(cljs.core.truth_(inst_17476)){
var statearr_17499_17531 = state_17489__$1;
(statearr_17499_17531[(1)] = (13));

} else {
var statearr_17500_17532 = state_17489__$1;
(statearr_17500_17532[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (2))){
var inst_17452 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17453 = (0);
var state_17489__$1 = (function (){var statearr_17501 = state_17489;
(statearr_17501[(7)] = inst_17453);

(statearr_17501[(9)] = inst_17452);

return statearr_17501;
})();
var statearr_17502_17533 = state_17489__$1;
(statearr_17502_17533[(2)] = null);

(statearr_17502_17533[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (11))){
var inst_17453 = (state_17489[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17489,(10),Object,null,(9));
var inst_17462 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17453) : chs__$1.call(null,inst_17453));
var inst_17463 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17453) : done.call(null,inst_17453));
var inst_17464 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17462,inst_17463);
var state_17489__$1 = state_17489;
var statearr_17503_17534 = state_17489__$1;
(statearr_17503_17534[(2)] = inst_17464);


cljs.core.async.impl.ioc_helpers.process_exception(state_17489__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (9))){
var inst_17453 = (state_17489[(7)]);
var inst_17466 = (state_17489[(2)]);
var inst_17467 = (inst_17453 + (1));
var inst_17453__$1 = inst_17467;
var state_17489__$1 = (function (){var statearr_17504 = state_17489;
(statearr_17504[(10)] = inst_17466);

(statearr_17504[(7)] = inst_17453__$1);

return statearr_17504;
})();
var statearr_17505_17535 = state_17489__$1;
(statearr_17505_17535[(2)] = null);

(statearr_17505_17535[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (5))){
var inst_17473 = (state_17489[(2)]);
var state_17489__$1 = (function (){var statearr_17506 = state_17489;
(statearr_17506[(11)] = inst_17473);

return statearr_17506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17489__$1,(12),dchan);
} else {
if((state_val_17490 === (14))){
var inst_17475 = (state_17489[(8)]);
var inst_17480 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17475);
var state_17489__$1 = state_17489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17489__$1,(16),out,inst_17480);
} else {
if((state_val_17490 === (16))){
var inst_17482 = (state_17489[(2)]);
var state_17489__$1 = (function (){var statearr_17507 = state_17489;
(statearr_17507[(12)] = inst_17482);

return statearr_17507;
})();
var statearr_17508_17536 = state_17489__$1;
(statearr_17508_17536[(2)] = null);

(statearr_17508_17536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (10))){
var inst_17457 = (state_17489[(2)]);
var inst_17458 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17489__$1 = (function (){var statearr_17509 = state_17489;
(statearr_17509[(13)] = inst_17457);

return statearr_17509;
})();
var statearr_17510_17537 = state_17489__$1;
(statearr_17510_17537[(2)] = inst_17458);


cljs.core.async.impl.ioc_helpers.process_exception(state_17489__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17490 === (8))){
var inst_17471 = (state_17489[(2)]);
var state_17489__$1 = state_17489;
var statearr_17511_17538 = state_17489__$1;
(statearr_17511_17538[(2)] = inst_17471);

(statearr_17511_17538[(1)] = (5));


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
});})(c__15461__auto___17523,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15347__auto__,c__15461__auto___17523,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_17515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17515[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_17515[(1)] = (1));

return statearr_17515;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_17489){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_17489);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e17516){if((e17516 instanceof Object)){
var ex__15351__auto__ = e17516;
var statearr_17517_17539 = state_17489;
(statearr_17517_17539[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17489);

return cljs.core.cst$kw$recur;
} else {
throw e17516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__17540 = state_17489;
state_17489 = G__17540;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_17489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_17489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___17523,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15463__auto__ = (function (){var statearr_17518 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_17518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___17523);

return statearr_17518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___17523,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17542 = [];
var len__7652__auto___17600 = arguments.length;
var i__7653__auto___17601 = (0);
while(true){
if((i__7653__auto___17601 < len__7652__auto___17600)){
args17542.push((arguments[i__7653__auto___17601]));

var G__17602 = (i__7653__auto___17601 + (1));
i__7653__auto___17601 = G__17602;
continue;
} else {
}
break;
}

var G__17544 = args17542.length;
switch (G__17544) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17542.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15461__auto___17604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___17604,out){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___17604,out){
return (function (state_17576){
var state_val_17577 = (state_17576[(1)]);
if((state_val_17577 === (7))){
var inst_17555 = (state_17576[(7)]);
var inst_17556 = (state_17576[(8)]);
var inst_17555__$1 = (state_17576[(2)]);
var inst_17556__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17555__$1,(0),null);
var inst_17557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17555__$1,(1),null);
var inst_17558 = (inst_17556__$1 == null);
var state_17576__$1 = (function (){var statearr_17578 = state_17576;
(statearr_17578[(7)] = inst_17555__$1);

(statearr_17578[(8)] = inst_17556__$1);

(statearr_17578[(9)] = inst_17557);

return statearr_17578;
})();
if(cljs.core.truth_(inst_17558)){
var statearr_17579_17605 = state_17576__$1;
(statearr_17579_17605[(1)] = (8));

} else {
var statearr_17580_17606 = state_17576__$1;
(statearr_17580_17606[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (1))){
var inst_17545 = cljs.core.vec(chs);
var inst_17546 = inst_17545;
var state_17576__$1 = (function (){var statearr_17581 = state_17576;
(statearr_17581[(10)] = inst_17546);

return statearr_17581;
})();
var statearr_17582_17607 = state_17576__$1;
(statearr_17582_17607[(2)] = null);

(statearr_17582_17607[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (4))){
var inst_17546 = (state_17576[(10)]);
var state_17576__$1 = state_17576;
return cljs.core.async.ioc_alts_BANG_(state_17576__$1,(7),inst_17546);
} else {
if((state_val_17577 === (6))){
var inst_17572 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
var statearr_17583_17608 = state_17576__$1;
(statearr_17583_17608[(2)] = inst_17572);

(statearr_17583_17608[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (3))){
var inst_17574 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17576__$1,inst_17574);
} else {
if((state_val_17577 === (2))){
var inst_17546 = (state_17576[(10)]);
var inst_17548 = cljs.core.count(inst_17546);
var inst_17549 = (inst_17548 > (0));
var state_17576__$1 = state_17576;
if(cljs.core.truth_(inst_17549)){
var statearr_17585_17609 = state_17576__$1;
(statearr_17585_17609[(1)] = (4));

} else {
var statearr_17586_17610 = state_17576__$1;
(statearr_17586_17610[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (11))){
var inst_17546 = (state_17576[(10)]);
var inst_17565 = (state_17576[(2)]);
var tmp17584 = inst_17546;
var inst_17546__$1 = tmp17584;
var state_17576__$1 = (function (){var statearr_17587 = state_17576;
(statearr_17587[(10)] = inst_17546__$1);

(statearr_17587[(11)] = inst_17565);

return statearr_17587;
})();
var statearr_17588_17611 = state_17576__$1;
(statearr_17588_17611[(2)] = null);

(statearr_17588_17611[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (9))){
var inst_17556 = (state_17576[(8)]);
var state_17576__$1 = state_17576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17576__$1,(11),out,inst_17556);
} else {
if((state_val_17577 === (5))){
var inst_17570 = cljs.core.async.close_BANG_(out);
var state_17576__$1 = state_17576;
var statearr_17589_17612 = state_17576__$1;
(statearr_17589_17612[(2)] = inst_17570);

(statearr_17589_17612[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (10))){
var inst_17568 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
var statearr_17590_17613 = state_17576__$1;
(statearr_17590_17613[(2)] = inst_17568);

(statearr_17590_17613[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (8))){
var inst_17546 = (state_17576[(10)]);
var inst_17555 = (state_17576[(7)]);
var inst_17556 = (state_17576[(8)]);
var inst_17557 = (state_17576[(9)]);
var inst_17560 = (function (){var cs = inst_17546;
var vec__17551 = inst_17555;
var v = inst_17556;
var c = inst_17557;
return ((function (cs,vec__17551,v,c,inst_17546,inst_17555,inst_17556,inst_17557,state_val_17577,c__15461__auto___17604,out){
return (function (p1__17541_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17541_SHARP_);
});
;})(cs,vec__17551,v,c,inst_17546,inst_17555,inst_17556,inst_17557,state_val_17577,c__15461__auto___17604,out))
})();
var inst_17561 = cljs.core.filterv(inst_17560,inst_17546);
var inst_17546__$1 = inst_17561;
var state_17576__$1 = (function (){var statearr_17591 = state_17576;
(statearr_17591[(10)] = inst_17546__$1);

return statearr_17591;
})();
var statearr_17592_17614 = state_17576__$1;
(statearr_17592_17614[(2)] = null);

(statearr_17592_17614[(1)] = (2));


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
});})(c__15461__auto___17604,out))
;
return ((function (switch__15347__auto__,c__15461__auto___17604,out){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_17596 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17596[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_17596[(1)] = (1));

return statearr_17596;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_17576){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_17576);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e17597){if((e17597 instanceof Object)){
var ex__15351__auto__ = e17597;
var statearr_17598_17615 = state_17576;
(statearr_17598_17615[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17576);

return cljs.core.cst$kw$recur;
} else {
throw e17597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__17616 = state_17576;
state_17576 = G__17616;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_17576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_17576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___17604,out))
})();
var state__15463__auto__ = (function (){var statearr_17599 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_17599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___17604);

return statearr_17599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___17604,out))
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
var args17617 = [];
var len__7652__auto___17666 = arguments.length;
var i__7653__auto___17667 = (0);
while(true){
if((i__7653__auto___17667 < len__7652__auto___17666)){
args17617.push((arguments[i__7653__auto___17667]));

var G__17668 = (i__7653__auto___17667 + (1));
i__7653__auto___17667 = G__17668;
continue;
} else {
}
break;
}

var G__17619 = args17617.length;
switch (G__17619) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17617.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15461__auto___17670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___17670,out){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___17670,out){
return (function (state_17643){
var state_val_17644 = (state_17643[(1)]);
if((state_val_17644 === (7))){
var inst_17625 = (state_17643[(7)]);
var inst_17625__$1 = (state_17643[(2)]);
var inst_17626 = (inst_17625__$1 == null);
var inst_17627 = cljs.core.not(inst_17626);
var state_17643__$1 = (function (){var statearr_17645 = state_17643;
(statearr_17645[(7)] = inst_17625__$1);

return statearr_17645;
})();
if(inst_17627){
var statearr_17646_17671 = state_17643__$1;
(statearr_17646_17671[(1)] = (8));

} else {
var statearr_17647_17672 = state_17643__$1;
(statearr_17647_17672[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17644 === (1))){
var inst_17620 = (0);
var state_17643__$1 = (function (){var statearr_17648 = state_17643;
(statearr_17648[(8)] = inst_17620);

return statearr_17648;
})();
var statearr_17649_17673 = state_17643__$1;
(statearr_17649_17673[(2)] = null);

(statearr_17649_17673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17644 === (4))){
var state_17643__$1 = state_17643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17643__$1,(7),ch);
} else {
if((state_val_17644 === (6))){
var inst_17638 = (state_17643[(2)]);
var state_17643__$1 = state_17643;
var statearr_17650_17674 = state_17643__$1;
(statearr_17650_17674[(2)] = inst_17638);

(statearr_17650_17674[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17644 === (3))){
var inst_17640 = (state_17643[(2)]);
var inst_17641 = cljs.core.async.close_BANG_(out);
var state_17643__$1 = (function (){var statearr_17651 = state_17643;
(statearr_17651[(9)] = inst_17640);

return statearr_17651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17643__$1,inst_17641);
} else {
if((state_val_17644 === (2))){
var inst_17620 = (state_17643[(8)]);
var inst_17622 = (inst_17620 < n);
var state_17643__$1 = state_17643;
if(cljs.core.truth_(inst_17622)){
var statearr_17652_17675 = state_17643__$1;
(statearr_17652_17675[(1)] = (4));

} else {
var statearr_17653_17676 = state_17643__$1;
(statearr_17653_17676[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17644 === (11))){
var inst_17620 = (state_17643[(8)]);
var inst_17630 = (state_17643[(2)]);
var inst_17631 = (inst_17620 + (1));
var inst_17620__$1 = inst_17631;
var state_17643__$1 = (function (){var statearr_17654 = state_17643;
(statearr_17654[(10)] = inst_17630);

(statearr_17654[(8)] = inst_17620__$1);

return statearr_17654;
})();
var statearr_17655_17677 = state_17643__$1;
(statearr_17655_17677[(2)] = null);

(statearr_17655_17677[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17644 === (9))){
var state_17643__$1 = state_17643;
var statearr_17656_17678 = state_17643__$1;
(statearr_17656_17678[(2)] = null);

(statearr_17656_17678[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17644 === (5))){
var state_17643__$1 = state_17643;
var statearr_17657_17679 = state_17643__$1;
(statearr_17657_17679[(2)] = null);

(statearr_17657_17679[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17644 === (10))){
var inst_17635 = (state_17643[(2)]);
var state_17643__$1 = state_17643;
var statearr_17658_17680 = state_17643__$1;
(statearr_17658_17680[(2)] = inst_17635);

(statearr_17658_17680[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17644 === (8))){
var inst_17625 = (state_17643[(7)]);
var state_17643__$1 = state_17643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17643__$1,(11),out,inst_17625);
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
});})(c__15461__auto___17670,out))
;
return ((function (switch__15347__auto__,c__15461__auto___17670,out){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_17662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17662[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_17662[(1)] = (1));

return statearr_17662;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_17643){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_17643);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e17663){if((e17663 instanceof Object)){
var ex__15351__auto__ = e17663;
var statearr_17664_17681 = state_17643;
(statearr_17664_17681[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17643);

return cljs.core.cst$kw$recur;
} else {
throw e17663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__17682 = state_17643;
state_17643 = G__17682;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_17643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_17643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___17670,out))
})();
var state__15463__auto__ = (function (){var statearr_17665 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_17665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___17670);

return statearr_17665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___17670,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17692 = (function (map_LT_,f,ch,meta17693){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17693 = meta17693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17694,meta17693__$1){
var self__ = this;
var _17694__$1 = this;
return (new cljs.core.async.t_cljs$core$async17692(self__.map_LT_,self__.f,self__.ch,meta17693__$1));
});

cljs.core.async.t_cljs$core$async17692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17694){
var self__ = this;
var _17694__$1 = this;
return self__.meta17693;
});

cljs.core.async.t_cljs$core$async17692.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17692.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17692.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17695 = (function (map_LT_,f,ch,meta17693,_,fn1,meta17696){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17693 = meta17693;
this._ = _;
this.fn1 = fn1;
this.meta17696 = meta17696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17697,meta17696__$1){
var self__ = this;
var _17697__$1 = this;
return (new cljs.core.async.t_cljs$core$async17695(self__.map_LT_,self__.f,self__.ch,self__.meta17693,self__._,self__.fn1,meta17696__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17697){
var self__ = this;
var _17697__$1 = this;
return self__.meta17696;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17695.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17695.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17683_SHARP_){
var G__17698 = (((p1__17683_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17683_SHARP_) : self__.f.call(null,p1__17683_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17698) : f1.call(null,G__17698));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17695.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17693,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17692], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17696], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17695";

cljs.core.async.t_cljs$core$async17695.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async17695");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17695 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17695(map_LT___$1,f__$1,ch__$1,meta17693__$1,___$2,fn1__$1,meta17696){
return (new cljs.core.async.t_cljs$core$async17695(map_LT___$1,f__$1,ch__$1,meta17693__$1,___$2,fn1__$1,meta17696));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17695(self__.map_LT_,self__.f,self__.ch,self__.meta17693,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6565__auto__ = ret;
if(cljs.core.truth_(and__6565__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6565__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17699 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17699) : self__.f.call(null,G__17699));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17692.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17693], null);
});

cljs.core.async.t_cljs$core$async17692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17692";

cljs.core.async.t_cljs$core$async17692.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async17692");
});

cljs.core.async.__GT_t_cljs$core$async17692 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17692(map_LT___$1,f__$1,ch__$1,meta17693){
return (new cljs.core.async.t_cljs$core$async17692(map_LT___$1,f__$1,ch__$1,meta17693));
});

}

return (new cljs.core.async.t_cljs$core$async17692(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17703 = (function (map_GT_,f,ch,meta17704){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17704 = meta17704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17705,meta17704__$1){
var self__ = this;
var _17705__$1 = this;
return (new cljs.core.async.t_cljs$core$async17703(self__.map_GT_,self__.f,self__.ch,meta17704__$1));
});

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17705){
var self__ = this;
var _17705__$1 = this;
return self__.meta17704;
});

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17704], null);
});

cljs.core.async.t_cljs$core$async17703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17703";

cljs.core.async.t_cljs$core$async17703.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async17703");
});

cljs.core.async.__GT_t_cljs$core$async17703 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17703(map_GT___$1,f__$1,ch__$1,meta17704){
return (new cljs.core.async.t_cljs$core$async17703(map_GT___$1,f__$1,ch__$1,meta17704));
});

}

return (new cljs.core.async.t_cljs$core$async17703(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17709 = (function (filter_GT_,p,ch,meta17710){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17710 = meta17710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17711,meta17710__$1){
var self__ = this;
var _17711__$1 = this;
return (new cljs.core.async.t_cljs$core$async17709(self__.filter_GT_,self__.p,self__.ch,meta17710__$1));
});

cljs.core.async.t_cljs$core$async17709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17711){
var self__ = this;
var _17711__$1 = this;
return self__.meta17710;
});

cljs.core.async.t_cljs$core$async17709.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17710], null);
});

cljs.core.async.t_cljs$core$async17709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17709";

cljs.core.async.t_cljs$core$async17709.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async17709");
});

cljs.core.async.__GT_t_cljs$core$async17709 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17709(filter_GT___$1,p__$1,ch__$1,meta17710){
return (new cljs.core.async.t_cljs$core$async17709(filter_GT___$1,p__$1,ch__$1,meta17710));
});

}

return (new cljs.core.async.t_cljs$core$async17709(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args17712 = [];
var len__7652__auto___17756 = arguments.length;
var i__7653__auto___17757 = (0);
while(true){
if((i__7653__auto___17757 < len__7652__auto___17756)){
args17712.push((arguments[i__7653__auto___17757]));

var G__17758 = (i__7653__auto___17757 + (1));
i__7653__auto___17757 = G__17758;
continue;
} else {
}
break;
}

var G__17714 = args17712.length;
switch (G__17714) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17712.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15461__auto___17760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___17760,out){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___17760,out){
return (function (state_17735){
var state_val_17736 = (state_17735[(1)]);
if((state_val_17736 === (7))){
var inst_17731 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
var statearr_17737_17761 = state_17735__$1;
(statearr_17737_17761[(2)] = inst_17731);

(statearr_17737_17761[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17736 === (1))){
var state_17735__$1 = state_17735;
var statearr_17738_17762 = state_17735__$1;
(statearr_17738_17762[(2)] = null);

(statearr_17738_17762[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17736 === (4))){
var inst_17717 = (state_17735[(7)]);
var inst_17717__$1 = (state_17735[(2)]);
var inst_17718 = (inst_17717__$1 == null);
var state_17735__$1 = (function (){var statearr_17739 = state_17735;
(statearr_17739[(7)] = inst_17717__$1);

return statearr_17739;
})();
if(cljs.core.truth_(inst_17718)){
var statearr_17740_17763 = state_17735__$1;
(statearr_17740_17763[(1)] = (5));

} else {
var statearr_17741_17764 = state_17735__$1;
(statearr_17741_17764[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17736 === (6))){
var inst_17717 = (state_17735[(7)]);
var inst_17722 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17717) : p.call(null,inst_17717));
var state_17735__$1 = state_17735;
if(cljs.core.truth_(inst_17722)){
var statearr_17742_17765 = state_17735__$1;
(statearr_17742_17765[(1)] = (8));

} else {
var statearr_17743_17766 = state_17735__$1;
(statearr_17743_17766[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17736 === (3))){
var inst_17733 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17735__$1,inst_17733);
} else {
if((state_val_17736 === (2))){
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17735__$1,(4),ch);
} else {
if((state_val_17736 === (11))){
var inst_17725 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
var statearr_17744_17767 = state_17735__$1;
(statearr_17744_17767[(2)] = inst_17725);

(statearr_17744_17767[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17736 === (9))){
var state_17735__$1 = state_17735;
var statearr_17745_17768 = state_17735__$1;
(statearr_17745_17768[(2)] = null);

(statearr_17745_17768[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17736 === (5))){
var inst_17720 = cljs.core.async.close_BANG_(out);
var state_17735__$1 = state_17735;
var statearr_17746_17769 = state_17735__$1;
(statearr_17746_17769[(2)] = inst_17720);

(statearr_17746_17769[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17736 === (10))){
var inst_17728 = (state_17735[(2)]);
var state_17735__$1 = (function (){var statearr_17747 = state_17735;
(statearr_17747[(8)] = inst_17728);

return statearr_17747;
})();
var statearr_17748_17770 = state_17735__$1;
(statearr_17748_17770[(2)] = null);

(statearr_17748_17770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17736 === (8))){
var inst_17717 = (state_17735[(7)]);
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17735__$1,(11),out,inst_17717);
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
});})(c__15461__auto___17760,out))
;
return ((function (switch__15347__auto__,c__15461__auto___17760,out){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_17752 = [null,null,null,null,null,null,null,null,null];
(statearr_17752[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_17752[(1)] = (1));

return statearr_17752;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_17735){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_17735);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e17753){if((e17753 instanceof Object)){
var ex__15351__auto__ = e17753;
var statearr_17754_17771 = state_17735;
(statearr_17754_17771[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17735);

return cljs.core.cst$kw$recur;
} else {
throw e17753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__17772 = state_17735;
state_17735 = G__17772;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_17735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_17735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___17760,out))
})();
var state__15463__auto__ = (function (){var statearr_17755 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_17755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___17760);

return statearr_17755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___17760,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17773 = [];
var len__7652__auto___17776 = arguments.length;
var i__7653__auto___17777 = (0);
while(true){
if((i__7653__auto___17777 < len__7652__auto___17776)){
args17773.push((arguments[i__7653__auto___17777]));

var G__17778 = (i__7653__auto___17777 + (1));
i__7653__auto___17777 = G__17778;
continue;
} else {
}
break;
}

var G__17775 = args17773.length;
switch (G__17775) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17773.length)].join('')));

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
var c__15461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto__){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto__){
return (function (state_17945){
var state_val_17946 = (state_17945[(1)]);
if((state_val_17946 === (7))){
var inst_17941 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
var statearr_17947_17988 = state_17945__$1;
(statearr_17947_17988[(2)] = inst_17941);

(statearr_17947_17988[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (20))){
var inst_17911 = (state_17945[(7)]);
var inst_17922 = (state_17945[(2)]);
var inst_17923 = cljs.core.next(inst_17911);
var inst_17897 = inst_17923;
var inst_17898 = null;
var inst_17899 = (0);
var inst_17900 = (0);
var state_17945__$1 = (function (){var statearr_17948 = state_17945;
(statearr_17948[(8)] = inst_17898);

(statearr_17948[(9)] = inst_17900);

(statearr_17948[(10)] = inst_17897);

(statearr_17948[(11)] = inst_17899);

(statearr_17948[(12)] = inst_17922);

return statearr_17948;
})();
var statearr_17949_17989 = state_17945__$1;
(statearr_17949_17989[(2)] = null);

(statearr_17949_17989[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (1))){
var state_17945__$1 = state_17945;
var statearr_17950_17990 = state_17945__$1;
(statearr_17950_17990[(2)] = null);

(statearr_17950_17990[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (4))){
var inst_17886 = (state_17945[(13)]);
var inst_17886__$1 = (state_17945[(2)]);
var inst_17887 = (inst_17886__$1 == null);
var state_17945__$1 = (function (){var statearr_17951 = state_17945;
(statearr_17951[(13)] = inst_17886__$1);

return statearr_17951;
})();
if(cljs.core.truth_(inst_17887)){
var statearr_17952_17991 = state_17945__$1;
(statearr_17952_17991[(1)] = (5));

} else {
var statearr_17953_17992 = state_17945__$1;
(statearr_17953_17992[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (15))){
var state_17945__$1 = state_17945;
var statearr_17957_17993 = state_17945__$1;
(statearr_17957_17993[(2)] = null);

(statearr_17957_17993[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (21))){
var state_17945__$1 = state_17945;
var statearr_17958_17994 = state_17945__$1;
(statearr_17958_17994[(2)] = null);

(statearr_17958_17994[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (13))){
var inst_17898 = (state_17945[(8)]);
var inst_17900 = (state_17945[(9)]);
var inst_17897 = (state_17945[(10)]);
var inst_17899 = (state_17945[(11)]);
var inst_17907 = (state_17945[(2)]);
var inst_17908 = (inst_17900 + (1));
var tmp17954 = inst_17898;
var tmp17955 = inst_17897;
var tmp17956 = inst_17899;
var inst_17897__$1 = tmp17955;
var inst_17898__$1 = tmp17954;
var inst_17899__$1 = tmp17956;
var inst_17900__$1 = inst_17908;
var state_17945__$1 = (function (){var statearr_17959 = state_17945;
(statearr_17959[(8)] = inst_17898__$1);

(statearr_17959[(9)] = inst_17900__$1);

(statearr_17959[(10)] = inst_17897__$1);

(statearr_17959[(14)] = inst_17907);

(statearr_17959[(11)] = inst_17899__$1);

return statearr_17959;
})();
var statearr_17960_17995 = state_17945__$1;
(statearr_17960_17995[(2)] = null);

(statearr_17960_17995[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (22))){
var state_17945__$1 = state_17945;
var statearr_17961_17996 = state_17945__$1;
(statearr_17961_17996[(2)] = null);

(statearr_17961_17996[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (6))){
var inst_17886 = (state_17945[(13)]);
var inst_17895 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17886) : f.call(null,inst_17886));
var inst_17896 = cljs.core.seq(inst_17895);
var inst_17897 = inst_17896;
var inst_17898 = null;
var inst_17899 = (0);
var inst_17900 = (0);
var state_17945__$1 = (function (){var statearr_17962 = state_17945;
(statearr_17962[(8)] = inst_17898);

(statearr_17962[(9)] = inst_17900);

(statearr_17962[(10)] = inst_17897);

(statearr_17962[(11)] = inst_17899);

return statearr_17962;
})();
var statearr_17963_17997 = state_17945__$1;
(statearr_17963_17997[(2)] = null);

(statearr_17963_17997[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (17))){
var inst_17911 = (state_17945[(7)]);
var inst_17915 = cljs.core.chunk_first(inst_17911);
var inst_17916 = cljs.core.chunk_rest(inst_17911);
var inst_17917 = cljs.core.count(inst_17915);
var inst_17897 = inst_17916;
var inst_17898 = inst_17915;
var inst_17899 = inst_17917;
var inst_17900 = (0);
var state_17945__$1 = (function (){var statearr_17964 = state_17945;
(statearr_17964[(8)] = inst_17898);

(statearr_17964[(9)] = inst_17900);

(statearr_17964[(10)] = inst_17897);

(statearr_17964[(11)] = inst_17899);

return statearr_17964;
})();
var statearr_17965_17998 = state_17945__$1;
(statearr_17965_17998[(2)] = null);

(statearr_17965_17998[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (3))){
var inst_17943 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17945__$1,inst_17943);
} else {
if((state_val_17946 === (12))){
var inst_17931 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
var statearr_17966_17999 = state_17945__$1;
(statearr_17966_17999[(2)] = inst_17931);

(statearr_17966_17999[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (2))){
var state_17945__$1 = state_17945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17945__$1,(4),in$);
} else {
if((state_val_17946 === (23))){
var inst_17939 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
var statearr_17967_18000 = state_17945__$1;
(statearr_17967_18000[(2)] = inst_17939);

(statearr_17967_18000[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (19))){
var inst_17926 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
var statearr_17968_18001 = state_17945__$1;
(statearr_17968_18001[(2)] = inst_17926);

(statearr_17968_18001[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (11))){
var inst_17911 = (state_17945[(7)]);
var inst_17897 = (state_17945[(10)]);
var inst_17911__$1 = cljs.core.seq(inst_17897);
var state_17945__$1 = (function (){var statearr_17969 = state_17945;
(statearr_17969[(7)] = inst_17911__$1);

return statearr_17969;
})();
if(inst_17911__$1){
var statearr_17970_18002 = state_17945__$1;
(statearr_17970_18002[(1)] = (14));

} else {
var statearr_17971_18003 = state_17945__$1;
(statearr_17971_18003[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (9))){
var inst_17933 = (state_17945[(2)]);
var inst_17934 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17945__$1 = (function (){var statearr_17972 = state_17945;
(statearr_17972[(15)] = inst_17933);

return statearr_17972;
})();
if(cljs.core.truth_(inst_17934)){
var statearr_17973_18004 = state_17945__$1;
(statearr_17973_18004[(1)] = (21));

} else {
var statearr_17974_18005 = state_17945__$1;
(statearr_17974_18005[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (5))){
var inst_17889 = cljs.core.async.close_BANG_(out);
var state_17945__$1 = state_17945;
var statearr_17975_18006 = state_17945__$1;
(statearr_17975_18006[(2)] = inst_17889);

(statearr_17975_18006[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (14))){
var inst_17911 = (state_17945[(7)]);
var inst_17913 = cljs.core.chunked_seq_QMARK_(inst_17911);
var state_17945__$1 = state_17945;
if(inst_17913){
var statearr_17976_18007 = state_17945__$1;
(statearr_17976_18007[(1)] = (17));

} else {
var statearr_17977_18008 = state_17945__$1;
(statearr_17977_18008[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (16))){
var inst_17929 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
var statearr_17978_18009 = state_17945__$1;
(statearr_17978_18009[(2)] = inst_17929);

(statearr_17978_18009[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17946 === (10))){
var inst_17898 = (state_17945[(8)]);
var inst_17900 = (state_17945[(9)]);
var inst_17905 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17898,inst_17900);
var state_17945__$1 = state_17945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17945__$1,(13),out,inst_17905);
} else {
if((state_val_17946 === (18))){
var inst_17911 = (state_17945[(7)]);
var inst_17920 = cljs.core.first(inst_17911);
var state_17945__$1 = state_17945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17945__$1,(20),out,inst_17920);
} else {
if((state_val_17946 === (8))){
var inst_17900 = (state_17945[(9)]);
var inst_17899 = (state_17945[(11)]);
var inst_17902 = (inst_17900 < inst_17899);
var inst_17903 = inst_17902;
var state_17945__$1 = state_17945;
if(cljs.core.truth_(inst_17903)){
var statearr_17979_18010 = state_17945__$1;
(statearr_17979_18010[(1)] = (10));

} else {
var statearr_17980_18011 = state_17945__$1;
(statearr_17980_18011[(1)] = (11));

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
});})(c__15461__auto__))
;
return ((function (switch__15347__auto__,c__15461__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15348__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15348__auto____0 = (function (){
var statearr_17984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17984[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15348__auto__);

(statearr_17984[(1)] = (1));

return statearr_17984;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15348__auto____1 = (function (state_17945){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_17945);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e17985){if((e17985 instanceof Object)){
var ex__15351__auto__ = e17985;
var statearr_17986_18012 = state_17945;
(statearr_17986_18012[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17945);

return cljs.core.cst$kw$recur;
} else {
throw e17985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__18013 = state_17945;
state_17945 = G__18013;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15348__auto__ = function(state_17945){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15348__auto____1.call(this,state_17945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15348__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15348__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto__))
})();
var state__15463__auto__ = (function (){var statearr_17987 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_17987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto__);

return statearr_17987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto__))
);

return c__15461__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18014 = [];
var len__7652__auto___18017 = arguments.length;
var i__7653__auto___18018 = (0);
while(true){
if((i__7653__auto___18018 < len__7652__auto___18017)){
args18014.push((arguments[i__7653__auto___18018]));

var G__18019 = (i__7653__auto___18018 + (1));
i__7653__auto___18018 = G__18019;
continue;
} else {
}
break;
}

var G__18016 = args18014.length;
switch (G__18016) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18014.length)].join('')));

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
var args18021 = [];
var len__7652__auto___18024 = arguments.length;
var i__7653__auto___18025 = (0);
while(true){
if((i__7653__auto___18025 < len__7652__auto___18024)){
args18021.push((arguments[i__7653__auto___18025]));

var G__18026 = (i__7653__auto___18025 + (1));
i__7653__auto___18025 = G__18026;
continue;
} else {
}
break;
}

var G__18023 = args18021.length;
switch (G__18023) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18021.length)].join('')));

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
var args18028 = [];
var len__7652__auto___18079 = arguments.length;
var i__7653__auto___18080 = (0);
while(true){
if((i__7653__auto___18080 < len__7652__auto___18079)){
args18028.push((arguments[i__7653__auto___18080]));

var G__18081 = (i__7653__auto___18080 + (1));
i__7653__auto___18080 = G__18081;
continue;
} else {
}
break;
}

var G__18030 = args18028.length;
switch (G__18030) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18028.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15461__auto___18083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___18083,out){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___18083,out){
return (function (state_18054){
var state_val_18055 = (state_18054[(1)]);
if((state_val_18055 === (7))){
var inst_18049 = (state_18054[(2)]);
var state_18054__$1 = state_18054;
var statearr_18056_18084 = state_18054__$1;
(statearr_18056_18084[(2)] = inst_18049);

(statearr_18056_18084[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (1))){
var inst_18031 = null;
var state_18054__$1 = (function (){var statearr_18057 = state_18054;
(statearr_18057[(7)] = inst_18031);

return statearr_18057;
})();
var statearr_18058_18085 = state_18054__$1;
(statearr_18058_18085[(2)] = null);

(statearr_18058_18085[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (4))){
var inst_18034 = (state_18054[(8)]);
var inst_18034__$1 = (state_18054[(2)]);
var inst_18035 = (inst_18034__$1 == null);
var inst_18036 = cljs.core.not(inst_18035);
var state_18054__$1 = (function (){var statearr_18059 = state_18054;
(statearr_18059[(8)] = inst_18034__$1);

return statearr_18059;
})();
if(inst_18036){
var statearr_18060_18086 = state_18054__$1;
(statearr_18060_18086[(1)] = (5));

} else {
var statearr_18061_18087 = state_18054__$1;
(statearr_18061_18087[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (6))){
var state_18054__$1 = state_18054;
var statearr_18062_18088 = state_18054__$1;
(statearr_18062_18088[(2)] = null);

(statearr_18062_18088[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (3))){
var inst_18051 = (state_18054[(2)]);
var inst_18052 = cljs.core.async.close_BANG_(out);
var state_18054__$1 = (function (){var statearr_18063 = state_18054;
(statearr_18063[(9)] = inst_18051);

return statearr_18063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18054__$1,inst_18052);
} else {
if((state_val_18055 === (2))){
var state_18054__$1 = state_18054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18054__$1,(4),ch);
} else {
if((state_val_18055 === (11))){
var inst_18034 = (state_18054[(8)]);
var inst_18043 = (state_18054[(2)]);
var inst_18031 = inst_18034;
var state_18054__$1 = (function (){var statearr_18064 = state_18054;
(statearr_18064[(7)] = inst_18031);

(statearr_18064[(10)] = inst_18043);

return statearr_18064;
})();
var statearr_18065_18089 = state_18054__$1;
(statearr_18065_18089[(2)] = null);

(statearr_18065_18089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (9))){
var inst_18034 = (state_18054[(8)]);
var state_18054__$1 = state_18054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18054__$1,(11),out,inst_18034);
} else {
if((state_val_18055 === (5))){
var inst_18031 = (state_18054[(7)]);
var inst_18034 = (state_18054[(8)]);
var inst_18038 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18034,inst_18031);
var state_18054__$1 = state_18054;
if(inst_18038){
var statearr_18067_18090 = state_18054__$1;
(statearr_18067_18090[(1)] = (8));

} else {
var statearr_18068_18091 = state_18054__$1;
(statearr_18068_18091[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (10))){
var inst_18046 = (state_18054[(2)]);
var state_18054__$1 = state_18054;
var statearr_18069_18092 = state_18054__$1;
(statearr_18069_18092[(2)] = inst_18046);

(statearr_18069_18092[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (8))){
var inst_18031 = (state_18054[(7)]);
var tmp18066 = inst_18031;
var inst_18031__$1 = tmp18066;
var state_18054__$1 = (function (){var statearr_18070 = state_18054;
(statearr_18070[(7)] = inst_18031__$1);

return statearr_18070;
})();
var statearr_18071_18093 = state_18054__$1;
(statearr_18071_18093[(2)] = null);

(statearr_18071_18093[(1)] = (2));


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
});})(c__15461__auto___18083,out))
;
return ((function (switch__15347__auto__,c__15461__auto___18083,out){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_18075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18075[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_18075[(1)] = (1));

return statearr_18075;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_18054){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_18054);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e18076){if((e18076 instanceof Object)){
var ex__15351__auto__ = e18076;
var statearr_18077_18094 = state_18054;
(statearr_18077_18094[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18054);

return cljs.core.cst$kw$recur;
} else {
throw e18076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__18095 = state_18054;
state_18054 = G__18095;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_18054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_18054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___18083,out))
})();
var state__15463__auto__ = (function (){var statearr_18078 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_18078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___18083);

return statearr_18078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___18083,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18096 = [];
var len__7652__auto___18166 = arguments.length;
var i__7653__auto___18167 = (0);
while(true){
if((i__7653__auto___18167 < len__7652__auto___18166)){
args18096.push((arguments[i__7653__auto___18167]));

var G__18168 = (i__7653__auto___18167 + (1));
i__7653__auto___18167 = G__18168;
continue;
} else {
}
break;
}

var G__18098 = args18096.length;
switch (G__18098) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18096.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15461__auto___18170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___18170,out){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___18170,out){
return (function (state_18136){
var state_val_18137 = (state_18136[(1)]);
if((state_val_18137 === (7))){
var inst_18132 = (state_18136[(2)]);
var state_18136__$1 = state_18136;
var statearr_18138_18171 = state_18136__$1;
(statearr_18138_18171[(2)] = inst_18132);

(statearr_18138_18171[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (1))){
var inst_18099 = (new Array(n));
var inst_18100 = inst_18099;
var inst_18101 = (0);
var state_18136__$1 = (function (){var statearr_18139 = state_18136;
(statearr_18139[(7)] = inst_18101);

(statearr_18139[(8)] = inst_18100);

return statearr_18139;
})();
var statearr_18140_18172 = state_18136__$1;
(statearr_18140_18172[(2)] = null);

(statearr_18140_18172[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (4))){
var inst_18104 = (state_18136[(9)]);
var inst_18104__$1 = (state_18136[(2)]);
var inst_18105 = (inst_18104__$1 == null);
var inst_18106 = cljs.core.not(inst_18105);
var state_18136__$1 = (function (){var statearr_18141 = state_18136;
(statearr_18141[(9)] = inst_18104__$1);

return statearr_18141;
})();
if(inst_18106){
var statearr_18142_18173 = state_18136__$1;
(statearr_18142_18173[(1)] = (5));

} else {
var statearr_18143_18174 = state_18136__$1;
(statearr_18143_18174[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (15))){
var inst_18126 = (state_18136[(2)]);
var state_18136__$1 = state_18136;
var statearr_18144_18175 = state_18136__$1;
(statearr_18144_18175[(2)] = inst_18126);

(statearr_18144_18175[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (13))){
var state_18136__$1 = state_18136;
var statearr_18145_18176 = state_18136__$1;
(statearr_18145_18176[(2)] = null);

(statearr_18145_18176[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (6))){
var inst_18101 = (state_18136[(7)]);
var inst_18122 = (inst_18101 > (0));
var state_18136__$1 = state_18136;
if(cljs.core.truth_(inst_18122)){
var statearr_18146_18177 = state_18136__$1;
(statearr_18146_18177[(1)] = (12));

} else {
var statearr_18147_18178 = state_18136__$1;
(statearr_18147_18178[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (3))){
var inst_18134 = (state_18136[(2)]);
var state_18136__$1 = state_18136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18136__$1,inst_18134);
} else {
if((state_val_18137 === (12))){
var inst_18100 = (state_18136[(8)]);
var inst_18124 = cljs.core.vec(inst_18100);
var state_18136__$1 = state_18136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18136__$1,(15),out,inst_18124);
} else {
if((state_val_18137 === (2))){
var state_18136__$1 = state_18136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18136__$1,(4),ch);
} else {
if((state_val_18137 === (11))){
var inst_18116 = (state_18136[(2)]);
var inst_18117 = (new Array(n));
var inst_18100 = inst_18117;
var inst_18101 = (0);
var state_18136__$1 = (function (){var statearr_18148 = state_18136;
(statearr_18148[(10)] = inst_18116);

(statearr_18148[(7)] = inst_18101);

(statearr_18148[(8)] = inst_18100);

return statearr_18148;
})();
var statearr_18149_18179 = state_18136__$1;
(statearr_18149_18179[(2)] = null);

(statearr_18149_18179[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (9))){
var inst_18100 = (state_18136[(8)]);
var inst_18114 = cljs.core.vec(inst_18100);
var state_18136__$1 = state_18136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18136__$1,(11),out,inst_18114);
} else {
if((state_val_18137 === (5))){
var inst_18104 = (state_18136[(9)]);
var inst_18101 = (state_18136[(7)]);
var inst_18109 = (state_18136[(11)]);
var inst_18100 = (state_18136[(8)]);
var inst_18108 = (inst_18100[inst_18101] = inst_18104);
var inst_18109__$1 = (inst_18101 + (1));
var inst_18110 = (inst_18109__$1 < n);
var state_18136__$1 = (function (){var statearr_18150 = state_18136;
(statearr_18150[(12)] = inst_18108);

(statearr_18150[(11)] = inst_18109__$1);

return statearr_18150;
})();
if(cljs.core.truth_(inst_18110)){
var statearr_18151_18180 = state_18136__$1;
(statearr_18151_18180[(1)] = (8));

} else {
var statearr_18152_18181 = state_18136__$1;
(statearr_18152_18181[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (14))){
var inst_18129 = (state_18136[(2)]);
var inst_18130 = cljs.core.async.close_BANG_(out);
var state_18136__$1 = (function (){var statearr_18154 = state_18136;
(statearr_18154[(13)] = inst_18129);

return statearr_18154;
})();
var statearr_18155_18182 = state_18136__$1;
(statearr_18155_18182[(2)] = inst_18130);

(statearr_18155_18182[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (10))){
var inst_18120 = (state_18136[(2)]);
var state_18136__$1 = state_18136;
var statearr_18156_18183 = state_18136__$1;
(statearr_18156_18183[(2)] = inst_18120);

(statearr_18156_18183[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18137 === (8))){
var inst_18109 = (state_18136[(11)]);
var inst_18100 = (state_18136[(8)]);
var tmp18153 = inst_18100;
var inst_18100__$1 = tmp18153;
var inst_18101 = inst_18109;
var state_18136__$1 = (function (){var statearr_18157 = state_18136;
(statearr_18157[(7)] = inst_18101);

(statearr_18157[(8)] = inst_18100__$1);

return statearr_18157;
})();
var statearr_18158_18184 = state_18136__$1;
(statearr_18158_18184[(2)] = null);

(statearr_18158_18184[(1)] = (2));


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
});})(c__15461__auto___18170,out))
;
return ((function (switch__15347__auto__,c__15461__auto___18170,out){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_18162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18162[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_18162[(1)] = (1));

return statearr_18162;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_18136){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_18136);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e18163){if((e18163 instanceof Object)){
var ex__15351__auto__ = e18163;
var statearr_18164_18185 = state_18136;
(statearr_18164_18185[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18136);

return cljs.core.cst$kw$recur;
} else {
throw e18163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__18186 = state_18136;
state_18136 = G__18186;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_18136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_18136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___18170,out))
})();
var state__15463__auto__ = (function (){var statearr_18165 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_18165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___18170);

return statearr_18165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___18170,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18187 = [];
var len__7652__auto___18261 = arguments.length;
var i__7653__auto___18262 = (0);
while(true){
if((i__7653__auto___18262 < len__7652__auto___18261)){
args18187.push((arguments[i__7653__auto___18262]));

var G__18263 = (i__7653__auto___18262 + (1));
i__7653__auto___18262 = G__18263;
continue;
} else {
}
break;
}

var G__18189 = args18187.length;
switch (G__18189) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18187.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15461__auto___18265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___18265,out){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___18265,out){
return (function (state_18231){
var state_val_18232 = (state_18231[(1)]);
if((state_val_18232 === (7))){
var inst_18227 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18233_18266 = state_18231__$1;
(statearr_18233_18266[(2)] = inst_18227);

(statearr_18233_18266[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (1))){
var inst_18190 = [];
var inst_18191 = inst_18190;
var inst_18192 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18231__$1 = (function (){var statearr_18234 = state_18231;
(statearr_18234[(7)] = inst_18191);

(statearr_18234[(8)] = inst_18192);

return statearr_18234;
})();
var statearr_18235_18267 = state_18231__$1;
(statearr_18235_18267[(2)] = null);

(statearr_18235_18267[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (4))){
var inst_18195 = (state_18231[(9)]);
var inst_18195__$1 = (state_18231[(2)]);
var inst_18196 = (inst_18195__$1 == null);
var inst_18197 = cljs.core.not(inst_18196);
var state_18231__$1 = (function (){var statearr_18236 = state_18231;
(statearr_18236[(9)] = inst_18195__$1);

return statearr_18236;
})();
if(inst_18197){
var statearr_18237_18268 = state_18231__$1;
(statearr_18237_18268[(1)] = (5));

} else {
var statearr_18238_18269 = state_18231__$1;
(statearr_18238_18269[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (15))){
var inst_18221 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18239_18270 = state_18231__$1;
(statearr_18239_18270[(2)] = inst_18221);

(statearr_18239_18270[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (13))){
var state_18231__$1 = state_18231;
var statearr_18240_18271 = state_18231__$1;
(statearr_18240_18271[(2)] = null);

(statearr_18240_18271[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (6))){
var inst_18191 = (state_18231[(7)]);
var inst_18216 = inst_18191.length;
var inst_18217 = (inst_18216 > (0));
var state_18231__$1 = state_18231;
if(cljs.core.truth_(inst_18217)){
var statearr_18241_18272 = state_18231__$1;
(statearr_18241_18272[(1)] = (12));

} else {
var statearr_18242_18273 = state_18231__$1;
(statearr_18242_18273[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (3))){
var inst_18229 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18231__$1,inst_18229);
} else {
if((state_val_18232 === (12))){
var inst_18191 = (state_18231[(7)]);
var inst_18219 = cljs.core.vec(inst_18191);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18231__$1,(15),out,inst_18219);
} else {
if((state_val_18232 === (2))){
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18231__$1,(4),ch);
} else {
if((state_val_18232 === (11))){
var inst_18199 = (state_18231[(10)]);
var inst_18195 = (state_18231[(9)]);
var inst_18209 = (state_18231[(2)]);
var inst_18210 = [];
var inst_18211 = inst_18210.push(inst_18195);
var inst_18191 = inst_18210;
var inst_18192 = inst_18199;
var state_18231__$1 = (function (){var statearr_18243 = state_18231;
(statearr_18243[(11)] = inst_18211);

(statearr_18243[(12)] = inst_18209);

(statearr_18243[(7)] = inst_18191);

(statearr_18243[(8)] = inst_18192);

return statearr_18243;
})();
var statearr_18244_18274 = state_18231__$1;
(statearr_18244_18274[(2)] = null);

(statearr_18244_18274[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (9))){
var inst_18191 = (state_18231[(7)]);
var inst_18207 = cljs.core.vec(inst_18191);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18231__$1,(11),out,inst_18207);
} else {
if((state_val_18232 === (5))){
var inst_18192 = (state_18231[(8)]);
var inst_18199 = (state_18231[(10)]);
var inst_18195 = (state_18231[(9)]);
var inst_18199__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18195) : f.call(null,inst_18195));
var inst_18200 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18199__$1,inst_18192);
var inst_18201 = cljs.core.keyword_identical_QMARK_(inst_18192,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18202 = (inst_18200) || (inst_18201);
var state_18231__$1 = (function (){var statearr_18245 = state_18231;
(statearr_18245[(10)] = inst_18199__$1);

return statearr_18245;
})();
if(cljs.core.truth_(inst_18202)){
var statearr_18246_18275 = state_18231__$1;
(statearr_18246_18275[(1)] = (8));

} else {
var statearr_18247_18276 = state_18231__$1;
(statearr_18247_18276[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (14))){
var inst_18224 = (state_18231[(2)]);
var inst_18225 = cljs.core.async.close_BANG_(out);
var state_18231__$1 = (function (){var statearr_18249 = state_18231;
(statearr_18249[(13)] = inst_18224);

return statearr_18249;
})();
var statearr_18250_18277 = state_18231__$1;
(statearr_18250_18277[(2)] = inst_18225);

(statearr_18250_18277[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (10))){
var inst_18214 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18251_18278 = state_18231__$1;
(statearr_18251_18278[(2)] = inst_18214);

(statearr_18251_18278[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18232 === (8))){
var inst_18191 = (state_18231[(7)]);
var inst_18199 = (state_18231[(10)]);
var inst_18195 = (state_18231[(9)]);
var inst_18204 = inst_18191.push(inst_18195);
var tmp18248 = inst_18191;
var inst_18191__$1 = tmp18248;
var inst_18192 = inst_18199;
var state_18231__$1 = (function (){var statearr_18252 = state_18231;
(statearr_18252[(14)] = inst_18204);

(statearr_18252[(7)] = inst_18191__$1);

(statearr_18252[(8)] = inst_18192);

return statearr_18252;
})();
var statearr_18253_18279 = state_18231__$1;
(statearr_18253_18279[(2)] = null);

(statearr_18253_18279[(1)] = (2));


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
});})(c__15461__auto___18265,out))
;
return ((function (switch__15347__auto__,c__15461__auto___18265,out){
return (function() {
var cljs$core$async$state_machine__15348__auto__ = null;
var cljs$core$async$state_machine__15348__auto____0 = (function (){
var statearr_18257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18257[(0)] = cljs$core$async$state_machine__15348__auto__);

(statearr_18257[(1)] = (1));

return statearr_18257;
});
var cljs$core$async$state_machine__15348__auto____1 = (function (state_18231){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_18231);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e18258){if((e18258 instanceof Object)){
var ex__15351__auto__ = e18258;
var statearr_18259_18280 = state_18231;
(statearr_18259_18280[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18231);

return cljs.core.cst$kw$recur;
} else {
throw e18258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__18281 = state_18231;
state_18231 = G__18281;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs$core$async$state_machine__15348__auto__ = function(state_18231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15348__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15348__auto____1.call(this,state_18231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15348__auto____0;
cljs$core$async$state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15348__auto____1;
return cljs$core$async$state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___18265,out))
})();
var state__15463__auto__ = (function (){var statearr_18260 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_18260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___18265);

return statearr_18260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___18265,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

