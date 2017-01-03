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
var args13840 = [];
var len__7652__auto___13846 = arguments.length;
var i__7653__auto___13847 = (0);
while(true){
if((i__7653__auto___13847 < len__7652__auto___13846)){
args13840.push((arguments[i__7653__auto___13847]));

var G__13848 = (i__7653__auto___13847 + (1));
i__7653__auto___13847 = G__13848;
continue;
} else {
}
break;
}

var G__13842 = args13840.length;
switch (G__13842) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13840.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13843 = (function (f,blockable,meta13844){
this.f = f;
this.blockable = blockable;
this.meta13844 = meta13844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13845,meta13844__$1){
var self__ = this;
var _13845__$1 = this;
return (new cljs.core.async.t_cljs$core$async13843(self__.f,self__.blockable,meta13844__$1));
});

cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13845){
var self__ = this;
var _13845__$1 = this;
return self__.meta13844;
});

cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta13844], null);
});

cljs.core.async.t_cljs$core$async13843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13843";

cljs.core.async.t_cljs$core$async13843.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async13843");
});

cljs.core.async.__GT_t_cljs$core$async13843 = (function cljs$core$async$__GT_t_cljs$core$async13843(f__$1,blockable__$1,meta13844){
return (new cljs.core.async.t_cljs$core$async13843(f__$1,blockable__$1,meta13844));
});

}

return (new cljs.core.async.t_cljs$core$async13843(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args13852 = [];
var len__7652__auto___13855 = arguments.length;
var i__7653__auto___13856 = (0);
while(true){
if((i__7653__auto___13856 < len__7652__auto___13855)){
args13852.push((arguments[i__7653__auto___13856]));

var G__13857 = (i__7653__auto___13856 + (1));
i__7653__auto___13856 = G__13857;
continue;
} else {
}
break;
}

var G__13854 = args13852.length;
switch (G__13854) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13852.length)].join('')));

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
var args13859 = [];
var len__7652__auto___13862 = arguments.length;
var i__7653__auto___13863 = (0);
while(true){
if((i__7653__auto___13863 < len__7652__auto___13862)){
args13859.push((arguments[i__7653__auto___13863]));

var G__13864 = (i__7653__auto___13863 + (1));
i__7653__auto___13863 = G__13864;
continue;
} else {
}
break;
}

var G__13861 = args13859.length;
switch (G__13861) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13859.length)].join('')));

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
var args13866 = [];
var len__7652__auto___13869 = arguments.length;
var i__7653__auto___13870 = (0);
while(true){
if((i__7653__auto___13870 < len__7652__auto___13869)){
args13866.push((arguments[i__7653__auto___13870]));

var G__13871 = (i__7653__auto___13870 + (1));
i__7653__auto___13870 = G__13871;
continue;
} else {
}
break;
}

var G__13868 = args13866.length;
switch (G__13868) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13866.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13873 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13873) : fn1.call(null,val_13873));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13873,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13873) : fn1.call(null,val_13873));
});})(val_13873,ret))
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
var args13874 = [];
var len__7652__auto___13877 = arguments.length;
var i__7653__auto___13878 = (0);
while(true){
if((i__7653__auto___13878 < len__7652__auto___13877)){
args13874.push((arguments[i__7653__auto___13878]));

var G__13879 = (i__7653__auto___13878 + (1));
i__7653__auto___13878 = G__13879;
continue;
} else {
}
break;
}

var G__13876 = args13874.length;
switch (G__13876) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13874.length)].join('')));

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
var n__7492__auto___13881 = n;
var x_13882 = (0);
while(true){
if((x_13882 < n__7492__auto___13881)){
(a[x_13882] = (0));

var G__13883 = (x_13882 + (1));
x_13882 = G__13883;
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

var G__13884 = (i + (1));
i = G__13884;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async13888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13888 = (function (alt_flag,flag,meta13889){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13889 = meta13889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13890,meta13889__$1){
var self__ = this;
var _13890__$1 = this;
return (new cljs.core.async.t_cljs$core$async13888(self__.alt_flag,self__.flag,meta13889__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13890){
var self__ = this;
var _13890__$1 = this;
return self__.meta13889;
});})(flag))
;

cljs.core.async.t_cljs$core$async13888.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async13888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13888.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13889], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13888";

cljs.core.async.t_cljs$core$async13888.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async13888");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13888 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13888(alt_flag__$1,flag__$1,meta13889){
return (new cljs.core.async.t_cljs$core$async13888(alt_flag__$1,flag__$1,meta13889));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13888(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13894 = (function (alt_handler,flag,cb,meta13895){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13895 = meta13895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13896,meta13895__$1){
var self__ = this;
var _13896__$1 = this;
return (new cljs.core.async.t_cljs$core$async13894(self__.alt_handler,self__.flag,self__.cb,meta13895__$1));
});

cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13896){
var self__ = this;
var _13896__$1 = this;
return self__.meta13895;
});

cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13895], null);
});

cljs.core.async.t_cljs$core$async13894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13894";

cljs.core.async.t_cljs$core$async13894.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async13894");
});

cljs.core.async.__GT_t_cljs$core$async13894 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13894(alt_handler__$1,flag__$1,cb__$1,meta13895){
return (new cljs.core.async.t_cljs$core$async13894(alt_handler__$1,flag__$1,cb__$1,meta13895));
});

}

return (new cljs.core.async.t_cljs$core$async13894(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13897_SHARP_){
var G__13901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13897_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13901) : fret.call(null,G__13901));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13898_SHARP_){
var G__13902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13898_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13902) : fret.call(null,G__13902));
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
var G__13903 = (i + (1));
i = G__13903;
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
var len__7652__auto___13909 = arguments.length;
var i__7653__auto___13910 = (0);
while(true){
if((i__7653__auto___13910 < len__7652__auto___13909)){
args__7659__auto__.push((arguments[i__7653__auto___13910]));

var G__13911 = (i__7653__auto___13910 + (1));
i__7653__auto___13910 = G__13911;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((1) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7660__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13906){
var map__13907 = p__13906;
var map__13907__$1 = ((((!((map__13907 == null)))?((((map__13907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13907):map__13907);
var opts = map__13907__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13904){
var G__13905 = cljs.core.first(seq13904);
var seq13904__$1 = cljs.core.next(seq13904);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13905,seq13904__$1);
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
var args13912 = [];
var len__7652__auto___13962 = arguments.length;
var i__7653__auto___13963 = (0);
while(true){
if((i__7653__auto___13963 < len__7652__auto___13962)){
args13912.push((arguments[i__7653__auto___13963]));

var G__13964 = (i__7653__auto___13963 + (1));
i__7653__auto___13963 = G__13964;
continue;
} else {
}
break;
}

var G__13914 = args13912.length;
switch (G__13914) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13912.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13795__auto___13966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___13966){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___13966){
return (function (state_13938){
var state_val_13939 = (state_13938[(1)]);
if((state_val_13939 === (7))){
var inst_13934 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13940_13967 = state_13938__$1;
(statearr_13940_13967[(2)] = inst_13934);

(statearr_13940_13967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (1))){
var state_13938__$1 = state_13938;
var statearr_13941_13968 = state_13938__$1;
(statearr_13941_13968[(2)] = null);

(statearr_13941_13968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (4))){
var inst_13917 = (state_13938[(7)]);
var inst_13917__$1 = (state_13938[(2)]);
var inst_13918 = (inst_13917__$1 == null);
var state_13938__$1 = (function (){var statearr_13942 = state_13938;
(statearr_13942[(7)] = inst_13917__$1);

return statearr_13942;
})();
if(cljs.core.truth_(inst_13918)){
var statearr_13943_13969 = state_13938__$1;
(statearr_13943_13969[(1)] = (5));

} else {
var statearr_13944_13970 = state_13938__$1;
(statearr_13944_13970[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (13))){
var state_13938__$1 = state_13938;
var statearr_13945_13971 = state_13938__$1;
(statearr_13945_13971[(2)] = null);

(statearr_13945_13971[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (6))){
var inst_13917 = (state_13938[(7)]);
var state_13938__$1 = state_13938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13938__$1,(11),to,inst_13917);
} else {
if((state_val_13939 === (3))){
var inst_13936 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13938__$1,inst_13936);
} else {
if((state_val_13939 === (12))){
var state_13938__$1 = state_13938;
var statearr_13946_13972 = state_13938__$1;
(statearr_13946_13972[(2)] = null);

(statearr_13946_13972[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (2))){
var state_13938__$1 = state_13938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13938__$1,(4),from);
} else {
if((state_val_13939 === (11))){
var inst_13927 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
if(cljs.core.truth_(inst_13927)){
var statearr_13947_13973 = state_13938__$1;
(statearr_13947_13973[(1)] = (12));

} else {
var statearr_13948_13974 = state_13938__$1;
(statearr_13948_13974[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (9))){
var state_13938__$1 = state_13938;
var statearr_13949_13975 = state_13938__$1;
(statearr_13949_13975[(2)] = null);

(statearr_13949_13975[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (5))){
var state_13938__$1 = state_13938;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13950_13976 = state_13938__$1;
(statearr_13950_13976[(1)] = (8));

} else {
var statearr_13951_13977 = state_13938__$1;
(statearr_13951_13977[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (14))){
var inst_13932 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13952_13978 = state_13938__$1;
(statearr_13952_13978[(2)] = inst_13932);

(statearr_13952_13978[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (10))){
var inst_13924 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13953_13979 = state_13938__$1;
(statearr_13953_13979[(2)] = inst_13924);

(statearr_13953_13979[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13939 === (8))){
var inst_13921 = cljs.core.async.close_BANG_(to);
var state_13938__$1 = state_13938;
var statearr_13954_13980 = state_13938__$1;
(statearr_13954_13980[(2)] = inst_13921);

(statearr_13954_13980[(1)] = (10));


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
});})(c__13795__auto___13966))
;
return ((function (switch__13681__auto__,c__13795__auto___13966){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_13958 = [null,null,null,null,null,null,null,null];
(statearr_13958[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_13958[(1)] = (1));

return statearr_13958;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_13938){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_13938);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e13959){if((e13959 instanceof Object)){
var ex__13685__auto__ = e13959;
var statearr_13960_13981 = state_13938;
(statearr_13960_13981[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13938);

return cljs.core.cst$kw$recur;
} else {
throw e13959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__13982 = state_13938;
state_13938 = G__13982;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_13938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_13938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___13966))
})();
var state__13797__auto__ = (function (){var statearr_13961 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_13961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___13966);

return statearr_13961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___13966))
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
return (function (p__14170){
var vec__14171 = p__14170;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14171,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14171,(1),null);
var job = vec__14171;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13795__auto___14357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___14357,res,vec__14171,v,p,job,jobs,results){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___14357,res,vec__14171,v,p,job,jobs,results){
return (function (state_14178){
var state_val_14179 = (state_14178[(1)]);
if((state_val_14179 === (1))){
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14178__$1,(2),res,v);
} else {
if((state_val_14179 === (2))){
var inst_14175 = (state_14178[(2)]);
var inst_14176 = cljs.core.async.close_BANG_(res);
var state_14178__$1 = (function (){var statearr_14180 = state_14178;
(statearr_14180[(7)] = inst_14175);

return statearr_14180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14178__$1,inst_14176);
} else {
return null;
}
}
});})(c__13795__auto___14357,res,vec__14171,v,p,job,jobs,results))
;
return ((function (switch__13681__auto__,c__13795__auto___14357,res,vec__14171,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0 = (function (){
var statearr_14184 = [null,null,null,null,null,null,null,null];
(statearr_14184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__);

(statearr_14184[(1)] = (1));

return statearr_14184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1 = (function (state_14178){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_14178);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e14185){if((e14185 instanceof Object)){
var ex__13685__auto__ = e14185;
var statearr_14186_14358 = state_14178;
(statearr_14186_14358[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14178);

return cljs.core.cst$kw$recur;
} else {
throw e14185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__14359 = state_14178;
state_14178 = G__14359;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = function(state_14178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1.call(this,state_14178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___14357,res,vec__14171,v,p,job,jobs,results))
})();
var state__13797__auto__ = (function (){var statearr_14187 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_14187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___14357);

return statearr_14187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___14357,res,vec__14171,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14188){
var vec__14189 = p__14188;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189,(1),null);
var job = vec__14189;
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
var n__7492__auto___14360 = n;
var __14361 = (0);
while(true){
if((__14361 < n__7492__auto___14360)){
var G__14192_14362 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14192_14362) {
case "compute":
var c__13795__auto___14364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14361,c__13795__auto___14364,G__14192_14362,n__7492__auto___14360,jobs,results,process,async){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (__14361,c__13795__auto___14364,G__14192_14362,n__7492__auto___14360,jobs,results,process,async){
return (function (state_14205){
var state_val_14206 = (state_14205[(1)]);
if((state_val_14206 === (1))){
var state_14205__$1 = state_14205;
var statearr_14207_14365 = state_14205__$1;
(statearr_14207_14365[(2)] = null);

(statearr_14207_14365[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14206 === (2))){
var state_14205__$1 = state_14205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14205__$1,(4),jobs);
} else {
if((state_val_14206 === (3))){
var inst_14203 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14205__$1,inst_14203);
} else {
if((state_val_14206 === (4))){
var inst_14195 = (state_14205[(2)]);
var inst_14196 = process(inst_14195);
var state_14205__$1 = state_14205;
if(cljs.core.truth_(inst_14196)){
var statearr_14208_14366 = state_14205__$1;
(statearr_14208_14366[(1)] = (5));

} else {
var statearr_14209_14367 = state_14205__$1;
(statearr_14209_14367[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14206 === (5))){
var state_14205__$1 = state_14205;
var statearr_14210_14368 = state_14205__$1;
(statearr_14210_14368[(2)] = null);

(statearr_14210_14368[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14206 === (6))){
var state_14205__$1 = state_14205;
var statearr_14211_14369 = state_14205__$1;
(statearr_14211_14369[(2)] = null);

(statearr_14211_14369[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14206 === (7))){
var inst_14201 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
var statearr_14212_14370 = state_14205__$1;
(statearr_14212_14370[(2)] = inst_14201);

(statearr_14212_14370[(1)] = (3));


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
});})(__14361,c__13795__auto___14364,G__14192_14362,n__7492__auto___14360,jobs,results,process,async))
;
return ((function (__14361,switch__13681__auto__,c__13795__auto___14364,G__14192_14362,n__7492__auto___14360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0 = (function (){
var statearr_14216 = [null,null,null,null,null,null,null];
(statearr_14216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__);

(statearr_14216[(1)] = (1));

return statearr_14216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1 = (function (state_14205){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_14205);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e14217){if((e14217 instanceof Object)){
var ex__13685__auto__ = e14217;
var statearr_14218_14371 = state_14205;
(statearr_14218_14371[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14205);

return cljs.core.cst$kw$recur;
} else {
throw e14217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__14372 = state_14205;
state_14205 = G__14372;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = function(state_14205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1.call(this,state_14205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__;
})()
;})(__14361,switch__13681__auto__,c__13795__auto___14364,G__14192_14362,n__7492__auto___14360,jobs,results,process,async))
})();
var state__13797__auto__ = (function (){var statearr_14219 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_14219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___14364);

return statearr_14219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(__14361,c__13795__auto___14364,G__14192_14362,n__7492__auto___14360,jobs,results,process,async))
);


break;
case "async":
var c__13795__auto___14373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14361,c__13795__auto___14373,G__14192_14362,n__7492__auto___14360,jobs,results,process,async){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (__14361,c__13795__auto___14373,G__14192_14362,n__7492__auto___14360,jobs,results,process,async){
return (function (state_14232){
var state_val_14233 = (state_14232[(1)]);
if((state_val_14233 === (1))){
var state_14232__$1 = state_14232;
var statearr_14234_14374 = state_14232__$1;
(statearr_14234_14374[(2)] = null);

(statearr_14234_14374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14233 === (2))){
var state_14232__$1 = state_14232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14232__$1,(4),jobs);
} else {
if((state_val_14233 === (3))){
var inst_14230 = (state_14232[(2)]);
var state_14232__$1 = state_14232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14232__$1,inst_14230);
} else {
if((state_val_14233 === (4))){
var inst_14222 = (state_14232[(2)]);
var inst_14223 = async(inst_14222);
var state_14232__$1 = state_14232;
if(cljs.core.truth_(inst_14223)){
var statearr_14235_14375 = state_14232__$1;
(statearr_14235_14375[(1)] = (5));

} else {
var statearr_14236_14376 = state_14232__$1;
(statearr_14236_14376[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14233 === (5))){
var state_14232__$1 = state_14232;
var statearr_14237_14377 = state_14232__$1;
(statearr_14237_14377[(2)] = null);

(statearr_14237_14377[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14233 === (6))){
var state_14232__$1 = state_14232;
var statearr_14238_14378 = state_14232__$1;
(statearr_14238_14378[(2)] = null);

(statearr_14238_14378[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14233 === (7))){
var inst_14228 = (state_14232[(2)]);
var state_14232__$1 = state_14232;
var statearr_14239_14379 = state_14232__$1;
(statearr_14239_14379[(2)] = inst_14228);

(statearr_14239_14379[(1)] = (3));


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
});})(__14361,c__13795__auto___14373,G__14192_14362,n__7492__auto___14360,jobs,results,process,async))
;
return ((function (__14361,switch__13681__auto__,c__13795__auto___14373,G__14192_14362,n__7492__auto___14360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0 = (function (){
var statearr_14243 = [null,null,null,null,null,null,null];
(statearr_14243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__);

(statearr_14243[(1)] = (1));

return statearr_14243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1 = (function (state_14232){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_14232);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e14244){if((e14244 instanceof Object)){
var ex__13685__auto__ = e14244;
var statearr_14245_14380 = state_14232;
(statearr_14245_14380[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14232);

return cljs.core.cst$kw$recur;
} else {
throw e14244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__14381 = state_14232;
state_14232 = G__14381;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = function(state_14232){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1.call(this,state_14232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__;
})()
;})(__14361,switch__13681__auto__,c__13795__auto___14373,G__14192_14362,n__7492__auto___14360,jobs,results,process,async))
})();
var state__13797__auto__ = (function (){var statearr_14246 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_14246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___14373);

return statearr_14246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(__14361,c__13795__auto___14373,G__14192_14362,n__7492__auto___14360,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14382 = (__14361 + (1));
__14361 = G__14382;
continue;
} else {
}
break;
}

var c__13795__auto___14383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___14383,jobs,results,process,async){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___14383,jobs,results,process,async){
return (function (state_14268){
var state_val_14269 = (state_14268[(1)]);
if((state_val_14269 === (1))){
var state_14268__$1 = state_14268;
var statearr_14270_14384 = state_14268__$1;
(statearr_14270_14384[(2)] = null);

(statearr_14270_14384[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14269 === (2))){
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14268__$1,(4),from);
} else {
if((state_val_14269 === (3))){
var inst_14266 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14268__$1,inst_14266);
} else {
if((state_val_14269 === (4))){
var inst_14249 = (state_14268[(7)]);
var inst_14249__$1 = (state_14268[(2)]);
var inst_14250 = (inst_14249__$1 == null);
var state_14268__$1 = (function (){var statearr_14271 = state_14268;
(statearr_14271[(7)] = inst_14249__$1);

return statearr_14271;
})();
if(cljs.core.truth_(inst_14250)){
var statearr_14272_14385 = state_14268__$1;
(statearr_14272_14385[(1)] = (5));

} else {
var statearr_14273_14386 = state_14268__$1;
(statearr_14273_14386[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14269 === (5))){
var inst_14252 = cljs.core.async.close_BANG_(jobs);
var state_14268__$1 = state_14268;
var statearr_14274_14387 = state_14268__$1;
(statearr_14274_14387[(2)] = inst_14252);

(statearr_14274_14387[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14269 === (6))){
var inst_14249 = (state_14268[(7)]);
var inst_14254 = (state_14268[(8)]);
var inst_14254__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14256 = [inst_14249,inst_14254__$1];
var inst_14257 = (new cljs.core.PersistentVector(null,2,(5),inst_14255,inst_14256,null));
var state_14268__$1 = (function (){var statearr_14275 = state_14268;
(statearr_14275[(8)] = inst_14254__$1);

return statearr_14275;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14268__$1,(8),jobs,inst_14257);
} else {
if((state_val_14269 === (7))){
var inst_14264 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
var statearr_14276_14388 = state_14268__$1;
(statearr_14276_14388[(2)] = inst_14264);

(statearr_14276_14388[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14269 === (8))){
var inst_14254 = (state_14268[(8)]);
var inst_14259 = (state_14268[(2)]);
var state_14268__$1 = (function (){var statearr_14277 = state_14268;
(statearr_14277[(9)] = inst_14259);

return statearr_14277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14268__$1,(9),results,inst_14254);
} else {
if((state_val_14269 === (9))){
var inst_14261 = (state_14268[(2)]);
var state_14268__$1 = (function (){var statearr_14278 = state_14268;
(statearr_14278[(10)] = inst_14261);

return statearr_14278;
})();
var statearr_14279_14389 = state_14268__$1;
(statearr_14279_14389[(2)] = null);

(statearr_14279_14389[(1)] = (2));


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
});})(c__13795__auto___14383,jobs,results,process,async))
;
return ((function (switch__13681__auto__,c__13795__auto___14383,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0 = (function (){
var statearr_14283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__);

(statearr_14283[(1)] = (1));

return statearr_14283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1 = (function (state_14268){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_14268);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e14284){if((e14284 instanceof Object)){
var ex__13685__auto__ = e14284;
var statearr_14285_14390 = state_14268;
(statearr_14285_14390[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14268);

return cljs.core.cst$kw$recur;
} else {
throw e14284;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__14391 = state_14268;
state_14268 = G__14391;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = function(state_14268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1.call(this,state_14268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___14383,jobs,results,process,async))
})();
var state__13797__auto__ = (function (){var statearr_14286 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_14286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___14383);

return statearr_14286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___14383,jobs,results,process,async))
);


var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__,jobs,results,process,async){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__,jobs,results,process,async){
return (function (state_14324){
var state_val_14325 = (state_14324[(1)]);
if((state_val_14325 === (7))){
var inst_14320 = (state_14324[(2)]);
var state_14324__$1 = state_14324;
var statearr_14326_14392 = state_14324__$1;
(statearr_14326_14392[(2)] = inst_14320);

(statearr_14326_14392[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (20))){
var state_14324__$1 = state_14324;
var statearr_14327_14393 = state_14324__$1;
(statearr_14327_14393[(2)] = null);

(statearr_14327_14393[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (1))){
var state_14324__$1 = state_14324;
var statearr_14328_14394 = state_14324__$1;
(statearr_14328_14394[(2)] = null);

(statearr_14328_14394[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (4))){
var inst_14289 = (state_14324[(7)]);
var inst_14289__$1 = (state_14324[(2)]);
var inst_14290 = (inst_14289__$1 == null);
var state_14324__$1 = (function (){var statearr_14329 = state_14324;
(statearr_14329[(7)] = inst_14289__$1);

return statearr_14329;
})();
if(cljs.core.truth_(inst_14290)){
var statearr_14330_14395 = state_14324__$1;
(statearr_14330_14395[(1)] = (5));

} else {
var statearr_14331_14396 = state_14324__$1;
(statearr_14331_14396[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (15))){
var inst_14302 = (state_14324[(8)]);
var state_14324__$1 = state_14324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14324__$1,(18),to,inst_14302);
} else {
if((state_val_14325 === (21))){
var inst_14315 = (state_14324[(2)]);
var state_14324__$1 = state_14324;
var statearr_14332_14397 = state_14324__$1;
(statearr_14332_14397[(2)] = inst_14315);

(statearr_14332_14397[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (13))){
var inst_14317 = (state_14324[(2)]);
var state_14324__$1 = (function (){var statearr_14333 = state_14324;
(statearr_14333[(9)] = inst_14317);

return statearr_14333;
})();
var statearr_14334_14398 = state_14324__$1;
(statearr_14334_14398[(2)] = null);

(statearr_14334_14398[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (6))){
var inst_14289 = (state_14324[(7)]);
var state_14324__$1 = state_14324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14324__$1,(11),inst_14289);
} else {
if((state_val_14325 === (17))){
var inst_14310 = (state_14324[(2)]);
var state_14324__$1 = state_14324;
if(cljs.core.truth_(inst_14310)){
var statearr_14335_14399 = state_14324__$1;
(statearr_14335_14399[(1)] = (19));

} else {
var statearr_14336_14400 = state_14324__$1;
(statearr_14336_14400[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (3))){
var inst_14322 = (state_14324[(2)]);
var state_14324__$1 = state_14324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14324__$1,inst_14322);
} else {
if((state_val_14325 === (12))){
var inst_14299 = (state_14324[(10)]);
var state_14324__$1 = state_14324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14324__$1,(14),inst_14299);
} else {
if((state_val_14325 === (2))){
var state_14324__$1 = state_14324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14324__$1,(4),results);
} else {
if((state_val_14325 === (19))){
var state_14324__$1 = state_14324;
var statearr_14337_14401 = state_14324__$1;
(statearr_14337_14401[(2)] = null);

(statearr_14337_14401[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (11))){
var inst_14299 = (state_14324[(2)]);
var state_14324__$1 = (function (){var statearr_14338 = state_14324;
(statearr_14338[(10)] = inst_14299);

return statearr_14338;
})();
var statearr_14339_14402 = state_14324__$1;
(statearr_14339_14402[(2)] = null);

(statearr_14339_14402[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (9))){
var state_14324__$1 = state_14324;
var statearr_14340_14403 = state_14324__$1;
(statearr_14340_14403[(2)] = null);

(statearr_14340_14403[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (5))){
var state_14324__$1 = state_14324;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14341_14404 = state_14324__$1;
(statearr_14341_14404[(1)] = (8));

} else {
var statearr_14342_14405 = state_14324__$1;
(statearr_14342_14405[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (14))){
var inst_14304 = (state_14324[(11)]);
var inst_14302 = (state_14324[(8)]);
var inst_14302__$1 = (state_14324[(2)]);
var inst_14303 = (inst_14302__$1 == null);
var inst_14304__$1 = cljs.core.not(inst_14303);
var state_14324__$1 = (function (){var statearr_14343 = state_14324;
(statearr_14343[(11)] = inst_14304__$1);

(statearr_14343[(8)] = inst_14302__$1);

return statearr_14343;
})();
if(inst_14304__$1){
var statearr_14344_14406 = state_14324__$1;
(statearr_14344_14406[(1)] = (15));

} else {
var statearr_14345_14407 = state_14324__$1;
(statearr_14345_14407[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (16))){
var inst_14304 = (state_14324[(11)]);
var state_14324__$1 = state_14324;
var statearr_14346_14408 = state_14324__$1;
(statearr_14346_14408[(2)] = inst_14304);

(statearr_14346_14408[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (10))){
var inst_14296 = (state_14324[(2)]);
var state_14324__$1 = state_14324;
var statearr_14347_14409 = state_14324__$1;
(statearr_14347_14409[(2)] = inst_14296);

(statearr_14347_14409[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (18))){
var inst_14307 = (state_14324[(2)]);
var state_14324__$1 = state_14324;
var statearr_14348_14410 = state_14324__$1;
(statearr_14348_14410[(2)] = inst_14307);

(statearr_14348_14410[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14325 === (8))){
var inst_14293 = cljs.core.async.close_BANG_(to);
var state_14324__$1 = state_14324;
var statearr_14349_14411 = state_14324__$1;
(statearr_14349_14411[(2)] = inst_14293);

(statearr_14349_14411[(1)] = (10));


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
});})(c__13795__auto__,jobs,results,process,async))
;
return ((function (switch__13681__auto__,c__13795__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0 = (function (){
var statearr_14353 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__);

(statearr_14353[(1)] = (1));

return statearr_14353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1 = (function (state_14324){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_14324);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e14354){if((e14354 instanceof Object)){
var ex__13685__auto__ = e14354;
var statearr_14355_14412 = state_14324;
(statearr_14355_14412[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14324);

return cljs.core.cst$kw$recur;
} else {
throw e14354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__14413 = state_14324;
state_14324 = G__14413;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__ = function(state_14324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1.call(this,state_14324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__,jobs,results,process,async))
})();
var state__13797__auto__ = (function (){var statearr_14356 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_14356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_14356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__,jobs,results,process,async))
);

return c__13795__auto__;
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
var args14414 = [];
var len__7652__auto___14417 = arguments.length;
var i__7653__auto___14418 = (0);
while(true){
if((i__7653__auto___14418 < len__7652__auto___14417)){
args14414.push((arguments[i__7653__auto___14418]));

var G__14419 = (i__7653__auto___14418 + (1));
i__7653__auto___14418 = G__14419;
continue;
} else {
}
break;
}

var G__14416 = args14414.length;
switch (G__14416) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14414.length)].join('')));

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
var args14421 = [];
var len__7652__auto___14424 = arguments.length;
var i__7653__auto___14425 = (0);
while(true){
if((i__7653__auto___14425 < len__7652__auto___14424)){
args14421.push((arguments[i__7653__auto___14425]));

var G__14426 = (i__7653__auto___14425 + (1));
i__7653__auto___14425 = G__14426;
continue;
} else {
}
break;
}

var G__14423 = args14421.length;
switch (G__14423) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14421.length)].join('')));

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
var args14428 = [];
var len__7652__auto___14481 = arguments.length;
var i__7653__auto___14482 = (0);
while(true){
if((i__7653__auto___14482 < len__7652__auto___14481)){
args14428.push((arguments[i__7653__auto___14482]));

var G__14483 = (i__7653__auto___14482 + (1));
i__7653__auto___14482 = G__14483;
continue;
} else {
}
break;
}

var G__14430 = args14428.length;
switch (G__14430) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14428.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13795__auto___14485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___14485,tc,fc){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___14485,tc,fc){
return (function (state_14456){
var state_val_14457 = (state_14456[(1)]);
if((state_val_14457 === (7))){
var inst_14452 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
var statearr_14458_14486 = state_14456__$1;
(statearr_14458_14486[(2)] = inst_14452);

(statearr_14458_14486[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (1))){
var state_14456__$1 = state_14456;
var statearr_14459_14487 = state_14456__$1;
(statearr_14459_14487[(2)] = null);

(statearr_14459_14487[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (4))){
var inst_14433 = (state_14456[(7)]);
var inst_14433__$1 = (state_14456[(2)]);
var inst_14434 = (inst_14433__$1 == null);
var state_14456__$1 = (function (){var statearr_14460 = state_14456;
(statearr_14460[(7)] = inst_14433__$1);

return statearr_14460;
})();
if(cljs.core.truth_(inst_14434)){
var statearr_14461_14488 = state_14456__$1;
(statearr_14461_14488[(1)] = (5));

} else {
var statearr_14462_14489 = state_14456__$1;
(statearr_14462_14489[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (13))){
var state_14456__$1 = state_14456;
var statearr_14463_14490 = state_14456__$1;
(statearr_14463_14490[(2)] = null);

(statearr_14463_14490[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (6))){
var inst_14433 = (state_14456[(7)]);
var inst_14439 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14433) : p.call(null,inst_14433));
var state_14456__$1 = state_14456;
if(cljs.core.truth_(inst_14439)){
var statearr_14464_14491 = state_14456__$1;
(statearr_14464_14491[(1)] = (9));

} else {
var statearr_14465_14492 = state_14456__$1;
(statearr_14465_14492[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (3))){
var inst_14454 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14456__$1,inst_14454);
} else {
if((state_val_14457 === (12))){
var state_14456__$1 = state_14456;
var statearr_14466_14493 = state_14456__$1;
(statearr_14466_14493[(2)] = null);

(statearr_14466_14493[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (2))){
var state_14456__$1 = state_14456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14456__$1,(4),ch);
} else {
if((state_val_14457 === (11))){
var inst_14433 = (state_14456[(7)]);
var inst_14443 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14456__$1,(8),inst_14443,inst_14433);
} else {
if((state_val_14457 === (9))){
var state_14456__$1 = state_14456;
var statearr_14467_14494 = state_14456__$1;
(statearr_14467_14494[(2)] = tc);

(statearr_14467_14494[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (5))){
var inst_14436 = cljs.core.async.close_BANG_(tc);
var inst_14437 = cljs.core.async.close_BANG_(fc);
var state_14456__$1 = (function (){var statearr_14468 = state_14456;
(statearr_14468[(8)] = inst_14436);

return statearr_14468;
})();
var statearr_14469_14495 = state_14456__$1;
(statearr_14469_14495[(2)] = inst_14437);

(statearr_14469_14495[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (14))){
var inst_14450 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
var statearr_14470_14496 = state_14456__$1;
(statearr_14470_14496[(2)] = inst_14450);

(statearr_14470_14496[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (10))){
var state_14456__$1 = state_14456;
var statearr_14471_14497 = state_14456__$1;
(statearr_14471_14497[(2)] = fc);

(statearr_14471_14497[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14457 === (8))){
var inst_14445 = (state_14456[(2)]);
var state_14456__$1 = state_14456;
if(cljs.core.truth_(inst_14445)){
var statearr_14472_14498 = state_14456__$1;
(statearr_14472_14498[(1)] = (12));

} else {
var statearr_14473_14499 = state_14456__$1;
(statearr_14473_14499[(1)] = (13));

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
});})(c__13795__auto___14485,tc,fc))
;
return ((function (switch__13681__auto__,c__13795__auto___14485,tc,fc){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_14477 = [null,null,null,null,null,null,null,null,null];
(statearr_14477[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_14477[(1)] = (1));

return statearr_14477;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_14456){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_14456);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e14478){if((e14478 instanceof Object)){
var ex__13685__auto__ = e14478;
var statearr_14479_14500 = state_14456;
(statearr_14479_14500[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14456);

return cljs.core.cst$kw$recur;
} else {
throw e14478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__14501 = state_14456;
state_14456 = G__14501;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_14456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_14456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___14485,tc,fc))
})();
var state__13797__auto__ = (function (){var statearr_14480 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_14480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___14485);

return statearr_14480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___14485,tc,fc))
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
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_14565){
var state_val_14566 = (state_14565[(1)]);
if((state_val_14566 === (7))){
var inst_14561 = (state_14565[(2)]);
var state_14565__$1 = state_14565;
var statearr_14567_14588 = state_14565__$1;
(statearr_14567_14588[(2)] = inst_14561);

(statearr_14567_14588[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14566 === (1))){
var inst_14545 = init;
var state_14565__$1 = (function (){var statearr_14568 = state_14565;
(statearr_14568[(7)] = inst_14545);

return statearr_14568;
})();
var statearr_14569_14589 = state_14565__$1;
(statearr_14569_14589[(2)] = null);

(statearr_14569_14589[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14566 === (4))){
var inst_14548 = (state_14565[(8)]);
var inst_14548__$1 = (state_14565[(2)]);
var inst_14549 = (inst_14548__$1 == null);
var state_14565__$1 = (function (){var statearr_14570 = state_14565;
(statearr_14570[(8)] = inst_14548__$1);

return statearr_14570;
})();
if(cljs.core.truth_(inst_14549)){
var statearr_14571_14590 = state_14565__$1;
(statearr_14571_14590[(1)] = (5));

} else {
var statearr_14572_14591 = state_14565__$1;
(statearr_14572_14591[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14566 === (6))){
var inst_14545 = (state_14565[(7)]);
var inst_14548 = (state_14565[(8)]);
var inst_14552 = (state_14565[(9)]);
var inst_14552__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14545,inst_14548) : f.call(null,inst_14545,inst_14548));
var inst_14553 = cljs.core.reduced_QMARK_(inst_14552__$1);
var state_14565__$1 = (function (){var statearr_14573 = state_14565;
(statearr_14573[(9)] = inst_14552__$1);

return statearr_14573;
})();
if(inst_14553){
var statearr_14574_14592 = state_14565__$1;
(statearr_14574_14592[(1)] = (8));

} else {
var statearr_14575_14593 = state_14565__$1;
(statearr_14575_14593[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14566 === (3))){
var inst_14563 = (state_14565[(2)]);
var state_14565__$1 = state_14565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14565__$1,inst_14563);
} else {
if((state_val_14566 === (2))){
var state_14565__$1 = state_14565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14565__$1,(4),ch);
} else {
if((state_val_14566 === (9))){
var inst_14552 = (state_14565[(9)]);
var inst_14545 = inst_14552;
var state_14565__$1 = (function (){var statearr_14576 = state_14565;
(statearr_14576[(7)] = inst_14545);

return statearr_14576;
})();
var statearr_14577_14594 = state_14565__$1;
(statearr_14577_14594[(2)] = null);

(statearr_14577_14594[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14566 === (5))){
var inst_14545 = (state_14565[(7)]);
var state_14565__$1 = state_14565;
var statearr_14578_14595 = state_14565__$1;
(statearr_14578_14595[(2)] = inst_14545);

(statearr_14578_14595[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14566 === (10))){
var inst_14559 = (state_14565[(2)]);
var state_14565__$1 = state_14565;
var statearr_14579_14596 = state_14565__$1;
(statearr_14579_14596[(2)] = inst_14559);

(statearr_14579_14596[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14566 === (8))){
var inst_14552 = (state_14565[(9)]);
var inst_14555 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_14552) : cljs.core.deref.call(null,inst_14552));
var state_14565__$1 = state_14565;
var statearr_14580_14597 = state_14565__$1;
(statearr_14580_14597[(2)] = inst_14555);

(statearr_14580_14597[(1)] = (10));


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
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13682__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13682__auto____0 = (function (){
var statearr_14584 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14584[(0)] = cljs$core$async$reduce_$_state_machine__13682__auto__);

(statearr_14584[(1)] = (1));

return statearr_14584;
});
var cljs$core$async$reduce_$_state_machine__13682__auto____1 = (function (state_14565){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_14565);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e14585){if((e14585 instanceof Object)){
var ex__13685__auto__ = e14585;
var statearr_14586_14598 = state_14565;
(statearr_14586_14598[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14565);

return cljs.core.cst$kw$recur;
} else {
throw e14585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__14599 = state_14565;
state_14565 = G__14599;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13682__auto__ = function(state_14565){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13682__auto____1.call(this,state_14565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13682__auto____0;
cljs$core$async$reduce_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13682__auto____1;
return cljs$core$async$reduce_$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_14587 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_14587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_14587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
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
var args14600 = [];
var len__7652__auto___14652 = arguments.length;
var i__7653__auto___14653 = (0);
while(true){
if((i__7653__auto___14653 < len__7652__auto___14652)){
args14600.push((arguments[i__7653__auto___14653]));

var G__14654 = (i__7653__auto___14653 + (1));
i__7653__auto___14653 = G__14654;
continue;
} else {
}
break;
}

var G__14602 = args14600.length;
switch (G__14602) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14600.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_14627){
var state_val_14628 = (state_14627[(1)]);
if((state_val_14628 === (7))){
var inst_14609 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14629_14656 = state_14627__$1;
(statearr_14629_14656[(2)] = inst_14609);

(statearr_14629_14656[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (1))){
var inst_14603 = cljs.core.seq(coll);
var inst_14604 = inst_14603;
var state_14627__$1 = (function (){var statearr_14630 = state_14627;
(statearr_14630[(7)] = inst_14604);

return statearr_14630;
})();
var statearr_14631_14657 = state_14627__$1;
(statearr_14631_14657[(2)] = null);

(statearr_14631_14657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (4))){
var inst_14604 = (state_14627[(7)]);
var inst_14607 = cljs.core.first(inst_14604);
var state_14627__$1 = state_14627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14627__$1,(7),ch,inst_14607);
} else {
if((state_val_14628 === (13))){
var inst_14621 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14632_14658 = state_14627__$1;
(statearr_14632_14658[(2)] = inst_14621);

(statearr_14632_14658[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (6))){
var inst_14612 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
if(cljs.core.truth_(inst_14612)){
var statearr_14633_14659 = state_14627__$1;
(statearr_14633_14659[(1)] = (8));

} else {
var statearr_14634_14660 = state_14627__$1;
(statearr_14634_14660[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (3))){
var inst_14625 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14627__$1,inst_14625);
} else {
if((state_val_14628 === (12))){
var state_14627__$1 = state_14627;
var statearr_14635_14661 = state_14627__$1;
(statearr_14635_14661[(2)] = null);

(statearr_14635_14661[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (2))){
var inst_14604 = (state_14627[(7)]);
var state_14627__$1 = state_14627;
if(cljs.core.truth_(inst_14604)){
var statearr_14636_14662 = state_14627__$1;
(statearr_14636_14662[(1)] = (4));

} else {
var statearr_14637_14663 = state_14627__$1;
(statearr_14637_14663[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (11))){
var inst_14618 = cljs.core.async.close_BANG_(ch);
var state_14627__$1 = state_14627;
var statearr_14638_14664 = state_14627__$1;
(statearr_14638_14664[(2)] = inst_14618);

(statearr_14638_14664[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (9))){
var state_14627__$1 = state_14627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14639_14665 = state_14627__$1;
(statearr_14639_14665[(1)] = (11));

} else {
var statearr_14640_14666 = state_14627__$1;
(statearr_14640_14666[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (5))){
var inst_14604 = (state_14627[(7)]);
var state_14627__$1 = state_14627;
var statearr_14641_14667 = state_14627__$1;
(statearr_14641_14667[(2)] = inst_14604);

(statearr_14641_14667[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (10))){
var inst_14623 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14642_14668 = state_14627__$1;
(statearr_14642_14668[(2)] = inst_14623);

(statearr_14642_14668[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14628 === (8))){
var inst_14604 = (state_14627[(7)]);
var inst_14614 = cljs.core.next(inst_14604);
var inst_14604__$1 = inst_14614;
var state_14627__$1 = (function (){var statearr_14643 = state_14627;
(statearr_14643[(7)] = inst_14604__$1);

return statearr_14643;
})();
var statearr_14644_14669 = state_14627__$1;
(statearr_14644_14669[(2)] = null);

(statearr_14644_14669[(1)] = (2));


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
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_14648 = [null,null,null,null,null,null,null,null];
(statearr_14648[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_14648[(1)] = (1));

return statearr_14648;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_14627){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_14627);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e14649){if((e14649 instanceof Object)){
var ex__13685__auto__ = e14649;
var statearr_14650_14670 = state_14627;
(statearr_14650_14670[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14627);

return cljs.core.cst$kw$recur;
} else {
throw e14649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__14671 = state_14627;
state_14627 = G__14671;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_14627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_14627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_14651 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_14651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_14651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
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
var cs = (function (){var G__14900 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14900) : cljs.core.atom.call(null,G__14900));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14901 = (function (mult,ch,cs,meta14902){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14902 = meta14902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14903,meta14902__$1){
var self__ = this;
var _14903__$1 = this;
return (new cljs.core.async.t_cljs$core$async14901(self__.mult,self__.ch,self__.cs,meta14902__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14903){
var self__ = this;
var _14903__$1 = this;
return self__.meta14902;
});})(cs))
;

cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14901.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14904_15128 = self__.cs;
var G__14905_15129 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14904_15128,G__14905_15129) : cljs.core.reset_BANG_.call(null,G__14904_15128,G__14905_15129));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14901.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14902], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14901";

cljs.core.async.t_cljs$core$async14901.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async14901");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14901 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14901(mult__$1,ch__$1,cs__$1,meta14902){
return (new cljs.core.async.t_cljs$core$async14901(mult__$1,ch__$1,cs__$1,meta14902));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14901(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13795__auto___15130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___15130,cs,m,dchan,dctr,done){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___15130,cs,m,dchan,dctr,done){
return (function (state_15040){
var state_val_15041 = (state_15040[(1)]);
if((state_val_15041 === (7))){
var inst_15036 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15042_15131 = state_15040__$1;
(statearr_15042_15131[(2)] = inst_15036);

(statearr_15042_15131[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (20))){
var inst_14939 = (state_15040[(7)]);
var inst_14951 = cljs.core.first(inst_14939);
var inst_14952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14951,(0),null);
var inst_14953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14951,(1),null);
var state_15040__$1 = (function (){var statearr_15043 = state_15040;
(statearr_15043[(8)] = inst_14952);

return statearr_15043;
})();
if(cljs.core.truth_(inst_14953)){
var statearr_15044_15132 = state_15040__$1;
(statearr_15044_15132[(1)] = (22));

} else {
var statearr_15045_15133 = state_15040__$1;
(statearr_15045_15133[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (27))){
var inst_14983 = (state_15040[(9)]);
var inst_14908 = (state_15040[(10)]);
var inst_14988 = (state_15040[(11)]);
var inst_14981 = (state_15040[(12)]);
var inst_14988__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14981,inst_14983);
var inst_14989 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14988__$1,inst_14908,done);
var state_15040__$1 = (function (){var statearr_15046 = state_15040;
(statearr_15046[(11)] = inst_14988__$1);

return statearr_15046;
})();
if(cljs.core.truth_(inst_14989)){
var statearr_15047_15134 = state_15040__$1;
(statearr_15047_15134[(1)] = (30));

} else {
var statearr_15048_15135 = state_15040__$1;
(statearr_15048_15135[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (1))){
var state_15040__$1 = state_15040;
var statearr_15049_15136 = state_15040__$1;
(statearr_15049_15136[(2)] = null);

(statearr_15049_15136[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (24))){
var inst_14939 = (state_15040[(7)]);
var inst_14958 = (state_15040[(2)]);
var inst_14959 = cljs.core.next(inst_14939);
var inst_14917 = inst_14959;
var inst_14918 = null;
var inst_14919 = (0);
var inst_14920 = (0);
var state_15040__$1 = (function (){var statearr_15050 = state_15040;
(statearr_15050[(13)] = inst_14917);

(statearr_15050[(14)] = inst_14919);

(statearr_15050[(15)] = inst_14918);

(statearr_15050[(16)] = inst_14958);

(statearr_15050[(17)] = inst_14920);

return statearr_15050;
})();
var statearr_15051_15137 = state_15040__$1;
(statearr_15051_15137[(2)] = null);

(statearr_15051_15137[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (39))){
var state_15040__$1 = state_15040;
var statearr_15055_15138 = state_15040__$1;
(statearr_15055_15138[(2)] = null);

(statearr_15055_15138[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (4))){
var inst_14908 = (state_15040[(10)]);
var inst_14908__$1 = (state_15040[(2)]);
var inst_14909 = (inst_14908__$1 == null);
var state_15040__$1 = (function (){var statearr_15056 = state_15040;
(statearr_15056[(10)] = inst_14908__$1);

return statearr_15056;
})();
if(cljs.core.truth_(inst_14909)){
var statearr_15057_15139 = state_15040__$1;
(statearr_15057_15139[(1)] = (5));

} else {
var statearr_15058_15140 = state_15040__$1;
(statearr_15058_15140[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (15))){
var inst_14917 = (state_15040[(13)]);
var inst_14919 = (state_15040[(14)]);
var inst_14918 = (state_15040[(15)]);
var inst_14920 = (state_15040[(17)]);
var inst_14935 = (state_15040[(2)]);
var inst_14936 = (inst_14920 + (1));
var tmp15052 = inst_14917;
var tmp15053 = inst_14919;
var tmp15054 = inst_14918;
var inst_14917__$1 = tmp15052;
var inst_14918__$1 = tmp15054;
var inst_14919__$1 = tmp15053;
var inst_14920__$1 = inst_14936;
var state_15040__$1 = (function (){var statearr_15059 = state_15040;
(statearr_15059[(13)] = inst_14917__$1);

(statearr_15059[(14)] = inst_14919__$1);

(statearr_15059[(18)] = inst_14935);

(statearr_15059[(15)] = inst_14918__$1);

(statearr_15059[(17)] = inst_14920__$1);

return statearr_15059;
})();
var statearr_15060_15141 = state_15040__$1;
(statearr_15060_15141[(2)] = null);

(statearr_15060_15141[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (21))){
var inst_14962 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15064_15142 = state_15040__$1;
(statearr_15064_15142[(2)] = inst_14962);

(statearr_15064_15142[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (31))){
var inst_14988 = (state_15040[(11)]);
var inst_14992 = done(null);
var inst_14993 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14988);
var state_15040__$1 = (function (){var statearr_15065 = state_15040;
(statearr_15065[(19)] = inst_14992);

return statearr_15065;
})();
var statearr_15066_15143 = state_15040__$1;
(statearr_15066_15143[(2)] = inst_14993);

(statearr_15066_15143[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (32))){
var inst_14983 = (state_15040[(9)]);
var inst_14982 = (state_15040[(20)]);
var inst_14980 = (state_15040[(21)]);
var inst_14981 = (state_15040[(12)]);
var inst_14995 = (state_15040[(2)]);
var inst_14996 = (inst_14983 + (1));
var tmp15061 = inst_14982;
var tmp15062 = inst_14980;
var tmp15063 = inst_14981;
var inst_14980__$1 = tmp15062;
var inst_14981__$1 = tmp15063;
var inst_14982__$1 = tmp15061;
var inst_14983__$1 = inst_14996;
var state_15040__$1 = (function (){var statearr_15067 = state_15040;
(statearr_15067[(22)] = inst_14995);

(statearr_15067[(9)] = inst_14983__$1);

(statearr_15067[(20)] = inst_14982__$1);

(statearr_15067[(21)] = inst_14980__$1);

(statearr_15067[(12)] = inst_14981__$1);

return statearr_15067;
})();
var statearr_15068_15144 = state_15040__$1;
(statearr_15068_15144[(2)] = null);

(statearr_15068_15144[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (40))){
var inst_15008 = (state_15040[(23)]);
var inst_15012 = done(null);
var inst_15013 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15008);
var state_15040__$1 = (function (){var statearr_15069 = state_15040;
(statearr_15069[(24)] = inst_15012);

return statearr_15069;
})();
var statearr_15070_15145 = state_15040__$1;
(statearr_15070_15145[(2)] = inst_15013);

(statearr_15070_15145[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (33))){
var inst_14999 = (state_15040[(25)]);
var inst_15001 = cljs.core.chunked_seq_QMARK_(inst_14999);
var state_15040__$1 = state_15040;
if(inst_15001){
var statearr_15071_15146 = state_15040__$1;
(statearr_15071_15146[(1)] = (36));

} else {
var statearr_15072_15147 = state_15040__$1;
(statearr_15072_15147[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (13))){
var inst_14929 = (state_15040[(26)]);
var inst_14932 = cljs.core.async.close_BANG_(inst_14929);
var state_15040__$1 = state_15040;
var statearr_15073_15148 = state_15040__$1;
(statearr_15073_15148[(2)] = inst_14932);

(statearr_15073_15148[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (22))){
var inst_14952 = (state_15040[(8)]);
var inst_14955 = cljs.core.async.close_BANG_(inst_14952);
var state_15040__$1 = state_15040;
var statearr_15074_15149 = state_15040__$1;
(statearr_15074_15149[(2)] = inst_14955);

(statearr_15074_15149[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (36))){
var inst_14999 = (state_15040[(25)]);
var inst_15003 = cljs.core.chunk_first(inst_14999);
var inst_15004 = cljs.core.chunk_rest(inst_14999);
var inst_15005 = cljs.core.count(inst_15003);
var inst_14980 = inst_15004;
var inst_14981 = inst_15003;
var inst_14982 = inst_15005;
var inst_14983 = (0);
var state_15040__$1 = (function (){var statearr_15075 = state_15040;
(statearr_15075[(9)] = inst_14983);

(statearr_15075[(20)] = inst_14982);

(statearr_15075[(21)] = inst_14980);

(statearr_15075[(12)] = inst_14981);

return statearr_15075;
})();
var statearr_15076_15150 = state_15040__$1;
(statearr_15076_15150[(2)] = null);

(statearr_15076_15150[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (41))){
var inst_14999 = (state_15040[(25)]);
var inst_15015 = (state_15040[(2)]);
var inst_15016 = cljs.core.next(inst_14999);
var inst_14980 = inst_15016;
var inst_14981 = null;
var inst_14982 = (0);
var inst_14983 = (0);
var state_15040__$1 = (function (){var statearr_15077 = state_15040;
(statearr_15077[(9)] = inst_14983);

(statearr_15077[(27)] = inst_15015);

(statearr_15077[(20)] = inst_14982);

(statearr_15077[(21)] = inst_14980);

(statearr_15077[(12)] = inst_14981);

return statearr_15077;
})();
var statearr_15078_15151 = state_15040__$1;
(statearr_15078_15151[(2)] = null);

(statearr_15078_15151[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (43))){
var state_15040__$1 = state_15040;
var statearr_15079_15152 = state_15040__$1;
(statearr_15079_15152[(2)] = null);

(statearr_15079_15152[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (29))){
var inst_15024 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15080_15153 = state_15040__$1;
(statearr_15080_15153[(2)] = inst_15024);

(statearr_15080_15153[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (44))){
var inst_15033 = (state_15040[(2)]);
var state_15040__$1 = (function (){var statearr_15081 = state_15040;
(statearr_15081[(28)] = inst_15033);

return statearr_15081;
})();
var statearr_15082_15154 = state_15040__$1;
(statearr_15082_15154[(2)] = null);

(statearr_15082_15154[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (6))){
var inst_14972 = (state_15040[(29)]);
var inst_14971 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14972__$1 = cljs.core.keys(inst_14971);
var inst_14973 = cljs.core.count(inst_14972__$1);
var inst_14974 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14973) : cljs.core.reset_BANG_.call(null,dctr,inst_14973));
var inst_14979 = cljs.core.seq(inst_14972__$1);
var inst_14980 = inst_14979;
var inst_14981 = null;
var inst_14982 = (0);
var inst_14983 = (0);
var state_15040__$1 = (function (){var statearr_15083 = state_15040;
(statearr_15083[(9)] = inst_14983);

(statearr_15083[(20)] = inst_14982);

(statearr_15083[(30)] = inst_14974);

(statearr_15083[(29)] = inst_14972__$1);

(statearr_15083[(21)] = inst_14980);

(statearr_15083[(12)] = inst_14981);

return statearr_15083;
})();
var statearr_15084_15155 = state_15040__$1;
(statearr_15084_15155[(2)] = null);

(statearr_15084_15155[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (28))){
var inst_14980 = (state_15040[(21)]);
var inst_14999 = (state_15040[(25)]);
var inst_14999__$1 = cljs.core.seq(inst_14980);
var state_15040__$1 = (function (){var statearr_15085 = state_15040;
(statearr_15085[(25)] = inst_14999__$1);

return statearr_15085;
})();
if(inst_14999__$1){
var statearr_15086_15156 = state_15040__$1;
(statearr_15086_15156[(1)] = (33));

} else {
var statearr_15087_15157 = state_15040__$1;
(statearr_15087_15157[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (25))){
var inst_14983 = (state_15040[(9)]);
var inst_14982 = (state_15040[(20)]);
var inst_14985 = (inst_14983 < inst_14982);
var inst_14986 = inst_14985;
var state_15040__$1 = state_15040;
if(cljs.core.truth_(inst_14986)){
var statearr_15088_15158 = state_15040__$1;
(statearr_15088_15158[(1)] = (27));

} else {
var statearr_15089_15159 = state_15040__$1;
(statearr_15089_15159[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (34))){
var state_15040__$1 = state_15040;
var statearr_15090_15160 = state_15040__$1;
(statearr_15090_15160[(2)] = null);

(statearr_15090_15160[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (17))){
var state_15040__$1 = state_15040;
var statearr_15091_15161 = state_15040__$1;
(statearr_15091_15161[(2)] = null);

(statearr_15091_15161[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (3))){
var inst_15038 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15040__$1,inst_15038);
} else {
if((state_val_15041 === (12))){
var inst_14967 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15092_15162 = state_15040__$1;
(statearr_15092_15162[(2)] = inst_14967);

(statearr_15092_15162[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (2))){
var state_15040__$1 = state_15040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15040__$1,(4),ch);
} else {
if((state_val_15041 === (23))){
var state_15040__$1 = state_15040;
var statearr_15093_15163 = state_15040__$1;
(statearr_15093_15163[(2)] = null);

(statearr_15093_15163[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (35))){
var inst_15022 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15094_15164 = state_15040__$1;
(statearr_15094_15164[(2)] = inst_15022);

(statearr_15094_15164[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (19))){
var inst_14939 = (state_15040[(7)]);
var inst_14943 = cljs.core.chunk_first(inst_14939);
var inst_14944 = cljs.core.chunk_rest(inst_14939);
var inst_14945 = cljs.core.count(inst_14943);
var inst_14917 = inst_14944;
var inst_14918 = inst_14943;
var inst_14919 = inst_14945;
var inst_14920 = (0);
var state_15040__$1 = (function (){var statearr_15095 = state_15040;
(statearr_15095[(13)] = inst_14917);

(statearr_15095[(14)] = inst_14919);

(statearr_15095[(15)] = inst_14918);

(statearr_15095[(17)] = inst_14920);

return statearr_15095;
})();
var statearr_15096_15165 = state_15040__$1;
(statearr_15096_15165[(2)] = null);

(statearr_15096_15165[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (11))){
var inst_14917 = (state_15040[(13)]);
var inst_14939 = (state_15040[(7)]);
var inst_14939__$1 = cljs.core.seq(inst_14917);
var state_15040__$1 = (function (){var statearr_15097 = state_15040;
(statearr_15097[(7)] = inst_14939__$1);

return statearr_15097;
})();
if(inst_14939__$1){
var statearr_15098_15166 = state_15040__$1;
(statearr_15098_15166[(1)] = (16));

} else {
var statearr_15099_15167 = state_15040__$1;
(statearr_15099_15167[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (9))){
var inst_14969 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15100_15168 = state_15040__$1;
(statearr_15100_15168[(2)] = inst_14969);

(statearr_15100_15168[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (5))){
var inst_14915 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14916 = cljs.core.seq(inst_14915);
var inst_14917 = inst_14916;
var inst_14918 = null;
var inst_14919 = (0);
var inst_14920 = (0);
var state_15040__$1 = (function (){var statearr_15101 = state_15040;
(statearr_15101[(13)] = inst_14917);

(statearr_15101[(14)] = inst_14919);

(statearr_15101[(15)] = inst_14918);

(statearr_15101[(17)] = inst_14920);

return statearr_15101;
})();
var statearr_15102_15169 = state_15040__$1;
(statearr_15102_15169[(2)] = null);

(statearr_15102_15169[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (14))){
var state_15040__$1 = state_15040;
var statearr_15103_15170 = state_15040__$1;
(statearr_15103_15170[(2)] = null);

(statearr_15103_15170[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (45))){
var inst_15030 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15104_15171 = state_15040__$1;
(statearr_15104_15171[(2)] = inst_15030);

(statearr_15104_15171[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (26))){
var inst_14972 = (state_15040[(29)]);
var inst_15026 = (state_15040[(2)]);
var inst_15027 = cljs.core.seq(inst_14972);
var state_15040__$1 = (function (){var statearr_15105 = state_15040;
(statearr_15105[(31)] = inst_15026);

return statearr_15105;
})();
if(inst_15027){
var statearr_15106_15172 = state_15040__$1;
(statearr_15106_15172[(1)] = (42));

} else {
var statearr_15107_15173 = state_15040__$1;
(statearr_15107_15173[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (16))){
var inst_14939 = (state_15040[(7)]);
var inst_14941 = cljs.core.chunked_seq_QMARK_(inst_14939);
var state_15040__$1 = state_15040;
if(inst_14941){
var statearr_15108_15174 = state_15040__$1;
(statearr_15108_15174[(1)] = (19));

} else {
var statearr_15109_15175 = state_15040__$1;
(statearr_15109_15175[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (38))){
var inst_15019 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15110_15176 = state_15040__$1;
(statearr_15110_15176[(2)] = inst_15019);

(statearr_15110_15176[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (30))){
var state_15040__$1 = state_15040;
var statearr_15111_15177 = state_15040__$1;
(statearr_15111_15177[(2)] = null);

(statearr_15111_15177[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (10))){
var inst_14918 = (state_15040[(15)]);
var inst_14920 = (state_15040[(17)]);
var inst_14928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14918,inst_14920);
var inst_14929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14928,(0),null);
var inst_14930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14928,(1),null);
var state_15040__$1 = (function (){var statearr_15112 = state_15040;
(statearr_15112[(26)] = inst_14929);

return statearr_15112;
})();
if(cljs.core.truth_(inst_14930)){
var statearr_15113_15178 = state_15040__$1;
(statearr_15113_15178[(1)] = (13));

} else {
var statearr_15114_15179 = state_15040__$1;
(statearr_15114_15179[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (18))){
var inst_14965 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15115_15180 = state_15040__$1;
(statearr_15115_15180[(2)] = inst_14965);

(statearr_15115_15180[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (42))){
var state_15040__$1 = state_15040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15040__$1,(45),dchan);
} else {
if((state_val_15041 === (37))){
var inst_14908 = (state_15040[(10)]);
var inst_14999 = (state_15040[(25)]);
var inst_15008 = (state_15040[(23)]);
var inst_15008__$1 = cljs.core.first(inst_14999);
var inst_15009 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15008__$1,inst_14908,done);
var state_15040__$1 = (function (){var statearr_15116 = state_15040;
(statearr_15116[(23)] = inst_15008__$1);

return statearr_15116;
})();
if(cljs.core.truth_(inst_15009)){
var statearr_15117_15181 = state_15040__$1;
(statearr_15117_15181[(1)] = (39));

} else {
var statearr_15118_15182 = state_15040__$1;
(statearr_15118_15182[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15041 === (8))){
var inst_14919 = (state_15040[(14)]);
var inst_14920 = (state_15040[(17)]);
var inst_14922 = (inst_14920 < inst_14919);
var inst_14923 = inst_14922;
var state_15040__$1 = state_15040;
if(cljs.core.truth_(inst_14923)){
var statearr_15119_15183 = state_15040__$1;
(statearr_15119_15183[(1)] = (10));

} else {
var statearr_15120_15184 = state_15040__$1;
(statearr_15120_15184[(1)] = (11));

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
});})(c__13795__auto___15130,cs,m,dchan,dctr,done))
;
return ((function (switch__13681__auto__,c__13795__auto___15130,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13682__auto__ = null;
var cljs$core$async$mult_$_state_machine__13682__auto____0 = (function (){
var statearr_15124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15124[(0)] = cljs$core$async$mult_$_state_machine__13682__auto__);

(statearr_15124[(1)] = (1));

return statearr_15124;
});
var cljs$core$async$mult_$_state_machine__13682__auto____1 = (function (state_15040){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_15040);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e15125){if((e15125 instanceof Object)){
var ex__13685__auto__ = e15125;
var statearr_15126_15185 = state_15040;
(statearr_15126_15185[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15040);

return cljs.core.cst$kw$recur;
} else {
throw e15125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__15186 = state_15040;
state_15040 = G__15186;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13682__auto__ = function(state_15040){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13682__auto____1.call(this,state_15040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13682__auto____0;
cljs$core$async$mult_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13682__auto____1;
return cljs$core$async$mult_$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___15130,cs,m,dchan,dctr,done))
})();
var state__13797__auto__ = (function (){var statearr_15127 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_15127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___15130);

return statearr_15127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___15130,cs,m,dchan,dctr,done))
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
var args15187 = [];
var len__7652__auto___15190 = arguments.length;
var i__7653__auto___15191 = (0);
while(true){
if((i__7653__auto___15191 < len__7652__auto___15190)){
args15187.push((arguments[i__7653__auto___15191]));

var G__15192 = (i__7653__auto___15191 + (1));
i__7653__auto___15191 = G__15192;
continue;
} else {
}
break;
}

var G__15189 = args15187.length;
switch (G__15189) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15187.length)].join('')));

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
var len__7652__auto___15204 = arguments.length;
var i__7653__auto___15205 = (0);
while(true){
if((i__7653__auto___15205 < len__7652__auto___15204)){
args__7659__auto__.push((arguments[i__7653__auto___15205]));

var G__15206 = (i__7653__auto___15205 + (1));
i__7653__auto___15205 = G__15206;
continue;
} else {
}
break;
}

var argseq__7660__auto__ = ((((3) < args__7659__auto__.length))?(new cljs.core.IndexedSeq(args__7659__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7660__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15198){
var map__15199 = p__15198;
var map__15199__$1 = ((((!((map__15199 == null)))?((((map__15199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15199):map__15199);
var opts = map__15199__$1;
var statearr_15201_15207 = state;
(statearr_15201_15207[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__15199,map__15199__$1,opts){
return (function (val){
var statearr_15202_15208 = state;
(statearr_15202_15208[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15199,map__15199__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15203_15209 = state;
(statearr_15203_15209[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15194){
var G__15195 = cljs.core.first(seq15194);
var seq15194__$1 = cljs.core.next(seq15194);
var G__15196 = cljs.core.first(seq15194__$1);
var seq15194__$2 = cljs.core.next(seq15194__$1);
var G__15197 = cljs.core.first(seq15194__$2);
var seq15194__$3 = cljs.core.next(seq15194__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15195,G__15196,G__15197,seq15194__$3);
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
var cs = (function (){var G__15378 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15378) : cljs.core.atom.call(null,G__15378));
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
if(typeof cljs.core.async.t_cljs$core$async15379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15379 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15380){
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
this.meta15380 = meta15380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15381,meta15380__$1){
var self__ = this;
var _15381__$1 = this;
return (new cljs.core.async.t_cljs$core$async15379(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15380__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15381){
var self__ = this;
var _15381__$1 = this;
return self__.meta15380;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15382_15546 = self__.cs;
var G__15383_15547 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15382_15546,G__15383_15547) : cljs.core.reset_BANG_.call(null,G__15382_15546,G__15383_15547));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async15379.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15380], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15379";

cljs.core.async.t_cljs$core$async15379.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async15379");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15379 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15379(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15380){
return (new cljs.core.async.t_cljs$core$async15379(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15380));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15379(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13795__auto___15548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___15548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___15548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15483){
var state_val_15484 = (state_15483[(1)]);
if((state_val_15484 === (7))){
var inst_15399 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
var statearr_15485_15549 = state_15483__$1;
(statearr_15485_15549[(2)] = inst_15399);

(statearr_15485_15549[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (20))){
var inst_15411 = (state_15483[(7)]);
var state_15483__$1 = state_15483;
var statearr_15486_15550 = state_15483__$1;
(statearr_15486_15550[(2)] = inst_15411);

(statearr_15486_15550[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (27))){
var state_15483__$1 = state_15483;
var statearr_15487_15551 = state_15483__$1;
(statearr_15487_15551[(2)] = null);

(statearr_15487_15551[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (1))){
var inst_15387 = (state_15483[(8)]);
var inst_15387__$1 = calc_state();
var inst_15389 = (inst_15387__$1 == null);
var inst_15390 = cljs.core.not(inst_15389);
var state_15483__$1 = (function (){var statearr_15488 = state_15483;
(statearr_15488[(8)] = inst_15387__$1);

return statearr_15488;
})();
if(inst_15390){
var statearr_15489_15552 = state_15483__$1;
(statearr_15489_15552[(1)] = (2));

} else {
var statearr_15490_15553 = state_15483__$1;
(statearr_15490_15553[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (24))){
var inst_15457 = (state_15483[(9)]);
var inst_15443 = (state_15483[(10)]);
var inst_15434 = (state_15483[(11)]);
var inst_15457__$1 = (inst_15434.cljs$core$IFn$_invoke$arity$1 ? inst_15434.cljs$core$IFn$_invoke$arity$1(inst_15443) : inst_15434.call(null,inst_15443));
var state_15483__$1 = (function (){var statearr_15491 = state_15483;
(statearr_15491[(9)] = inst_15457__$1);

return statearr_15491;
})();
if(cljs.core.truth_(inst_15457__$1)){
var statearr_15492_15554 = state_15483__$1;
(statearr_15492_15554[(1)] = (29));

} else {
var statearr_15493_15555 = state_15483__$1;
(statearr_15493_15555[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (4))){
var inst_15402 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
if(cljs.core.truth_(inst_15402)){
var statearr_15494_15556 = state_15483__$1;
(statearr_15494_15556[(1)] = (8));

} else {
var statearr_15495_15557 = state_15483__$1;
(statearr_15495_15557[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (15))){
var inst_15428 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
if(cljs.core.truth_(inst_15428)){
var statearr_15496_15558 = state_15483__$1;
(statearr_15496_15558[(1)] = (19));

} else {
var statearr_15497_15559 = state_15483__$1;
(statearr_15497_15559[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (21))){
var inst_15433 = (state_15483[(12)]);
var inst_15433__$1 = (state_15483[(2)]);
var inst_15434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15433__$1,cljs.core.cst$kw$solos);
var inst_15435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15433__$1,cljs.core.cst$kw$mutes);
var inst_15436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15433__$1,cljs.core.cst$kw$reads);
var state_15483__$1 = (function (){var statearr_15498 = state_15483;
(statearr_15498[(13)] = inst_15435);

(statearr_15498[(12)] = inst_15433__$1);

(statearr_15498[(11)] = inst_15434);

return statearr_15498;
})();
return cljs.core.async.ioc_alts_BANG_(state_15483__$1,(22),inst_15436);
} else {
if((state_val_15484 === (31))){
var inst_15465 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
if(cljs.core.truth_(inst_15465)){
var statearr_15499_15560 = state_15483__$1;
(statearr_15499_15560[(1)] = (32));

} else {
var statearr_15500_15561 = state_15483__$1;
(statearr_15500_15561[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (32))){
var inst_15442 = (state_15483[(14)]);
var state_15483__$1 = state_15483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15483__$1,(35),out,inst_15442);
} else {
if((state_val_15484 === (33))){
var inst_15433 = (state_15483[(12)]);
var inst_15411 = inst_15433;
var state_15483__$1 = (function (){var statearr_15501 = state_15483;
(statearr_15501[(7)] = inst_15411);

return statearr_15501;
})();
var statearr_15502_15562 = state_15483__$1;
(statearr_15502_15562[(2)] = null);

(statearr_15502_15562[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (13))){
var inst_15411 = (state_15483[(7)]);
var inst_15418 = inst_15411.cljs$lang$protocol_mask$partition0$;
var inst_15419 = (inst_15418 & (64));
var inst_15420 = inst_15411.cljs$core$ISeq$;
var inst_15421 = (inst_15419) || (inst_15420);
var state_15483__$1 = state_15483;
if(cljs.core.truth_(inst_15421)){
var statearr_15503_15563 = state_15483__$1;
(statearr_15503_15563[(1)] = (16));

} else {
var statearr_15504_15564 = state_15483__$1;
(statearr_15504_15564[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (22))){
var inst_15442 = (state_15483[(14)]);
var inst_15443 = (state_15483[(10)]);
var inst_15441 = (state_15483[(2)]);
var inst_15442__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15441,(0),null);
var inst_15443__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15441,(1),null);
var inst_15444 = (inst_15442__$1 == null);
var inst_15445 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15443__$1,change);
var inst_15446 = (inst_15444) || (inst_15445);
var state_15483__$1 = (function (){var statearr_15505 = state_15483;
(statearr_15505[(14)] = inst_15442__$1);

(statearr_15505[(10)] = inst_15443__$1);

return statearr_15505;
})();
if(cljs.core.truth_(inst_15446)){
var statearr_15506_15565 = state_15483__$1;
(statearr_15506_15565[(1)] = (23));

} else {
var statearr_15507_15566 = state_15483__$1;
(statearr_15507_15566[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (36))){
var inst_15433 = (state_15483[(12)]);
var inst_15411 = inst_15433;
var state_15483__$1 = (function (){var statearr_15508 = state_15483;
(statearr_15508[(7)] = inst_15411);

return statearr_15508;
})();
var statearr_15509_15567 = state_15483__$1;
(statearr_15509_15567[(2)] = null);

(statearr_15509_15567[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (29))){
var inst_15457 = (state_15483[(9)]);
var state_15483__$1 = state_15483;
var statearr_15510_15568 = state_15483__$1;
(statearr_15510_15568[(2)] = inst_15457);

(statearr_15510_15568[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (6))){
var state_15483__$1 = state_15483;
var statearr_15511_15569 = state_15483__$1;
(statearr_15511_15569[(2)] = false);

(statearr_15511_15569[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (28))){
var inst_15453 = (state_15483[(2)]);
var inst_15454 = calc_state();
var inst_15411 = inst_15454;
var state_15483__$1 = (function (){var statearr_15512 = state_15483;
(statearr_15512[(15)] = inst_15453);

(statearr_15512[(7)] = inst_15411);

return statearr_15512;
})();
var statearr_15513_15570 = state_15483__$1;
(statearr_15513_15570[(2)] = null);

(statearr_15513_15570[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (25))){
var inst_15479 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
var statearr_15514_15571 = state_15483__$1;
(statearr_15514_15571[(2)] = inst_15479);

(statearr_15514_15571[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (34))){
var inst_15477 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
var statearr_15515_15572 = state_15483__$1;
(statearr_15515_15572[(2)] = inst_15477);

(statearr_15515_15572[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (17))){
var state_15483__$1 = state_15483;
var statearr_15516_15573 = state_15483__$1;
(statearr_15516_15573[(2)] = false);

(statearr_15516_15573[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (3))){
var state_15483__$1 = state_15483;
var statearr_15517_15574 = state_15483__$1;
(statearr_15517_15574[(2)] = false);

(statearr_15517_15574[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (12))){
var inst_15481 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15483__$1,inst_15481);
} else {
if((state_val_15484 === (2))){
var inst_15387 = (state_15483[(8)]);
var inst_15392 = inst_15387.cljs$lang$protocol_mask$partition0$;
var inst_15393 = (inst_15392 & (64));
var inst_15394 = inst_15387.cljs$core$ISeq$;
var inst_15395 = (inst_15393) || (inst_15394);
var state_15483__$1 = state_15483;
if(cljs.core.truth_(inst_15395)){
var statearr_15518_15575 = state_15483__$1;
(statearr_15518_15575[(1)] = (5));

} else {
var statearr_15519_15576 = state_15483__$1;
(statearr_15519_15576[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (23))){
var inst_15442 = (state_15483[(14)]);
var inst_15448 = (inst_15442 == null);
var state_15483__$1 = state_15483;
if(cljs.core.truth_(inst_15448)){
var statearr_15520_15577 = state_15483__$1;
(statearr_15520_15577[(1)] = (26));

} else {
var statearr_15521_15578 = state_15483__$1;
(statearr_15521_15578[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (35))){
var inst_15468 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
if(cljs.core.truth_(inst_15468)){
var statearr_15522_15579 = state_15483__$1;
(statearr_15522_15579[(1)] = (36));

} else {
var statearr_15523_15580 = state_15483__$1;
(statearr_15523_15580[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (19))){
var inst_15411 = (state_15483[(7)]);
var inst_15430 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15411);
var state_15483__$1 = state_15483;
var statearr_15524_15581 = state_15483__$1;
(statearr_15524_15581[(2)] = inst_15430);

(statearr_15524_15581[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (11))){
var inst_15411 = (state_15483[(7)]);
var inst_15415 = (inst_15411 == null);
var inst_15416 = cljs.core.not(inst_15415);
var state_15483__$1 = state_15483;
if(inst_15416){
var statearr_15525_15582 = state_15483__$1;
(statearr_15525_15582[(1)] = (13));

} else {
var statearr_15526_15583 = state_15483__$1;
(statearr_15526_15583[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (9))){
var inst_15387 = (state_15483[(8)]);
var state_15483__$1 = state_15483;
var statearr_15527_15584 = state_15483__$1;
(statearr_15527_15584[(2)] = inst_15387);

(statearr_15527_15584[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (5))){
var state_15483__$1 = state_15483;
var statearr_15528_15585 = state_15483__$1;
(statearr_15528_15585[(2)] = true);

(statearr_15528_15585[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (14))){
var state_15483__$1 = state_15483;
var statearr_15529_15586 = state_15483__$1;
(statearr_15529_15586[(2)] = false);

(statearr_15529_15586[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (26))){
var inst_15443 = (state_15483[(10)]);
var inst_15450 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15443);
var state_15483__$1 = state_15483;
var statearr_15530_15587 = state_15483__$1;
(statearr_15530_15587[(2)] = inst_15450);

(statearr_15530_15587[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (16))){
var state_15483__$1 = state_15483;
var statearr_15531_15588 = state_15483__$1;
(statearr_15531_15588[(2)] = true);

(statearr_15531_15588[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (38))){
var inst_15473 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
var statearr_15532_15589 = state_15483__$1;
(statearr_15532_15589[(2)] = inst_15473);

(statearr_15532_15589[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (30))){
var inst_15435 = (state_15483[(13)]);
var inst_15443 = (state_15483[(10)]);
var inst_15434 = (state_15483[(11)]);
var inst_15460 = cljs.core.empty_QMARK_(inst_15434);
var inst_15461 = (inst_15435.cljs$core$IFn$_invoke$arity$1 ? inst_15435.cljs$core$IFn$_invoke$arity$1(inst_15443) : inst_15435.call(null,inst_15443));
var inst_15462 = cljs.core.not(inst_15461);
var inst_15463 = (inst_15460) && (inst_15462);
var state_15483__$1 = state_15483;
var statearr_15533_15590 = state_15483__$1;
(statearr_15533_15590[(2)] = inst_15463);

(statearr_15533_15590[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (10))){
var inst_15387 = (state_15483[(8)]);
var inst_15407 = (state_15483[(2)]);
var inst_15408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15407,cljs.core.cst$kw$solos);
var inst_15409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15407,cljs.core.cst$kw$mutes);
var inst_15410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15407,cljs.core.cst$kw$reads);
var inst_15411 = inst_15387;
var state_15483__$1 = (function (){var statearr_15534 = state_15483;
(statearr_15534[(16)] = inst_15409);

(statearr_15534[(17)] = inst_15408);

(statearr_15534[(7)] = inst_15411);

(statearr_15534[(18)] = inst_15410);

return statearr_15534;
})();
var statearr_15535_15591 = state_15483__$1;
(statearr_15535_15591[(2)] = null);

(statearr_15535_15591[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (18))){
var inst_15425 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
var statearr_15536_15592 = state_15483__$1;
(statearr_15536_15592[(2)] = inst_15425);

(statearr_15536_15592[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (37))){
var state_15483__$1 = state_15483;
var statearr_15537_15593 = state_15483__$1;
(statearr_15537_15593[(2)] = null);

(statearr_15537_15593[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (8))){
var inst_15387 = (state_15483[(8)]);
var inst_15404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15387);
var state_15483__$1 = state_15483;
var statearr_15538_15594 = state_15483__$1;
(statearr_15538_15594[(2)] = inst_15404);

(statearr_15538_15594[(1)] = (10));


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
});})(c__13795__auto___15548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13681__auto__,c__13795__auto___15548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13682__auto__ = null;
var cljs$core$async$mix_$_state_machine__13682__auto____0 = (function (){
var statearr_15542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15542[(0)] = cljs$core$async$mix_$_state_machine__13682__auto__);

(statearr_15542[(1)] = (1));

return statearr_15542;
});
var cljs$core$async$mix_$_state_machine__13682__auto____1 = (function (state_15483){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_15483);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e15543){if((e15543 instanceof Object)){
var ex__13685__auto__ = e15543;
var statearr_15544_15595 = state_15483;
(statearr_15544_15595[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15483);

return cljs.core.cst$kw$recur;
} else {
throw e15543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__15596 = state_15483;
state_15483 = G__15596;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13682__auto__ = function(state_15483){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13682__auto____1.call(this,state_15483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13682__auto____0;
cljs$core$async$mix_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13682__auto____1;
return cljs$core$async$mix_$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___15548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13797__auto__ = (function (){var statearr_15545 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_15545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___15548);

return statearr_15545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___15548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args15597 = [];
var len__7652__auto___15600 = arguments.length;
var i__7653__auto___15601 = (0);
while(true){
if((i__7653__auto___15601 < len__7652__auto___15600)){
args15597.push((arguments[i__7653__auto___15601]));

var G__15602 = (i__7653__auto___15601 + (1));
i__7653__auto___15601 = G__15602;
continue;
} else {
}
break;
}

var G__15599 = args15597.length;
switch (G__15599) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15597.length)].join('')));

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
var args15605 = [];
var len__7652__auto___15733 = arguments.length;
var i__7653__auto___15734 = (0);
while(true){
if((i__7653__auto___15734 < len__7652__auto___15733)){
args15605.push((arguments[i__7653__auto___15734]));

var G__15735 = (i__7653__auto___15734 + (1));
i__7653__auto___15734 = G__15735;
continue;
} else {
}
break;
}

var G__15607 = args15605.length;
switch (G__15607) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15605.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15608 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15608) : cljs.core.atom.call(null,G__15608));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6577__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6577__auto__,mults){
return (function (p1__15604_SHARP_){
if(cljs.core.truth_((p1__15604_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15604_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15604_SHARP_.call(null,topic)))){
return p1__15604_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15604_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6577__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15609 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15610){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15610 = meta15610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15611,meta15610__$1){
var self__ = this;
var _15611__$1 = this;
return (new cljs.core.async.t_cljs$core$async15609(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15610__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15611){
var self__ = this;
var _15611__$1 = this;
return self__.meta15610;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15609.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15609.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15609.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15609.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async15609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15612 = self__.mults;
var G__15613 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15612,G__15613) : cljs.core.reset_BANG_.call(null,G__15612,G__15613));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15609.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15610], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15609";

cljs.core.async.t_cljs$core$async15609.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async15609");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15609 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15609(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15610){
return (new cljs.core.async.t_cljs$core$async15609(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15610));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15609(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13795__auto___15737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___15737,mults,ensure_mult,p){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___15737,mults,ensure_mult,p){
return (function (state_15685){
var state_val_15686 = (state_15685[(1)]);
if((state_val_15686 === (7))){
var inst_15681 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15687_15738 = state_15685__$1;
(statearr_15687_15738[(2)] = inst_15681);

(statearr_15687_15738[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (20))){
var state_15685__$1 = state_15685;
var statearr_15688_15739 = state_15685__$1;
(statearr_15688_15739[(2)] = null);

(statearr_15688_15739[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (1))){
var state_15685__$1 = state_15685;
var statearr_15689_15740 = state_15685__$1;
(statearr_15689_15740[(2)] = null);

(statearr_15689_15740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (24))){
var inst_15664 = (state_15685[(7)]);
var inst_15673 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15664);
var state_15685__$1 = state_15685;
var statearr_15690_15741 = state_15685__$1;
(statearr_15690_15741[(2)] = inst_15673);

(statearr_15690_15741[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (4))){
var inst_15616 = (state_15685[(8)]);
var inst_15616__$1 = (state_15685[(2)]);
var inst_15617 = (inst_15616__$1 == null);
var state_15685__$1 = (function (){var statearr_15691 = state_15685;
(statearr_15691[(8)] = inst_15616__$1);

return statearr_15691;
})();
if(cljs.core.truth_(inst_15617)){
var statearr_15692_15742 = state_15685__$1;
(statearr_15692_15742[(1)] = (5));

} else {
var statearr_15693_15743 = state_15685__$1;
(statearr_15693_15743[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (15))){
var inst_15658 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15694_15744 = state_15685__$1;
(statearr_15694_15744[(2)] = inst_15658);

(statearr_15694_15744[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (21))){
var inst_15678 = (state_15685[(2)]);
var state_15685__$1 = (function (){var statearr_15695 = state_15685;
(statearr_15695[(9)] = inst_15678);

return statearr_15695;
})();
var statearr_15696_15745 = state_15685__$1;
(statearr_15696_15745[(2)] = null);

(statearr_15696_15745[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (13))){
var inst_15640 = (state_15685[(10)]);
var inst_15642 = cljs.core.chunked_seq_QMARK_(inst_15640);
var state_15685__$1 = state_15685;
if(inst_15642){
var statearr_15697_15746 = state_15685__$1;
(statearr_15697_15746[(1)] = (16));

} else {
var statearr_15698_15747 = state_15685__$1;
(statearr_15698_15747[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (22))){
var inst_15670 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
if(cljs.core.truth_(inst_15670)){
var statearr_15699_15748 = state_15685__$1;
(statearr_15699_15748[(1)] = (23));

} else {
var statearr_15700_15749 = state_15685__$1;
(statearr_15700_15749[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (6))){
var inst_15616 = (state_15685[(8)]);
var inst_15664 = (state_15685[(7)]);
var inst_15666 = (state_15685[(11)]);
var inst_15664__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15616) : topic_fn.call(null,inst_15616));
var inst_15665 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15666__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15665,inst_15664__$1);
var state_15685__$1 = (function (){var statearr_15701 = state_15685;
(statearr_15701[(7)] = inst_15664__$1);

(statearr_15701[(11)] = inst_15666__$1);

return statearr_15701;
})();
if(cljs.core.truth_(inst_15666__$1)){
var statearr_15702_15750 = state_15685__$1;
(statearr_15702_15750[(1)] = (19));

} else {
var statearr_15703_15751 = state_15685__$1;
(statearr_15703_15751[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (25))){
var inst_15675 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15704_15752 = state_15685__$1;
(statearr_15704_15752[(2)] = inst_15675);

(statearr_15704_15752[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (17))){
var inst_15640 = (state_15685[(10)]);
var inst_15649 = cljs.core.first(inst_15640);
var inst_15650 = cljs.core.async.muxch_STAR_(inst_15649);
var inst_15651 = cljs.core.async.close_BANG_(inst_15650);
var inst_15652 = cljs.core.next(inst_15640);
var inst_15626 = inst_15652;
var inst_15627 = null;
var inst_15628 = (0);
var inst_15629 = (0);
var state_15685__$1 = (function (){var statearr_15705 = state_15685;
(statearr_15705[(12)] = inst_15629);

(statearr_15705[(13)] = inst_15628);

(statearr_15705[(14)] = inst_15626);

(statearr_15705[(15)] = inst_15651);

(statearr_15705[(16)] = inst_15627);

return statearr_15705;
})();
var statearr_15706_15753 = state_15685__$1;
(statearr_15706_15753[(2)] = null);

(statearr_15706_15753[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (3))){
var inst_15683 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15685__$1,inst_15683);
} else {
if((state_val_15686 === (12))){
var inst_15660 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15707_15754 = state_15685__$1;
(statearr_15707_15754[(2)] = inst_15660);

(statearr_15707_15754[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (2))){
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15685__$1,(4),ch);
} else {
if((state_val_15686 === (23))){
var state_15685__$1 = state_15685;
var statearr_15708_15755 = state_15685__$1;
(statearr_15708_15755[(2)] = null);

(statearr_15708_15755[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (19))){
var inst_15616 = (state_15685[(8)]);
var inst_15666 = (state_15685[(11)]);
var inst_15668 = cljs.core.async.muxch_STAR_(inst_15666);
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15685__$1,(22),inst_15668,inst_15616);
} else {
if((state_val_15686 === (11))){
var inst_15626 = (state_15685[(14)]);
var inst_15640 = (state_15685[(10)]);
var inst_15640__$1 = cljs.core.seq(inst_15626);
var state_15685__$1 = (function (){var statearr_15709 = state_15685;
(statearr_15709[(10)] = inst_15640__$1);

return statearr_15709;
})();
if(inst_15640__$1){
var statearr_15710_15756 = state_15685__$1;
(statearr_15710_15756[(1)] = (13));

} else {
var statearr_15711_15757 = state_15685__$1;
(statearr_15711_15757[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (9))){
var inst_15662 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15712_15758 = state_15685__$1;
(statearr_15712_15758[(2)] = inst_15662);

(statearr_15712_15758[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (5))){
var inst_15623 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15624 = cljs.core.vals(inst_15623);
var inst_15625 = cljs.core.seq(inst_15624);
var inst_15626 = inst_15625;
var inst_15627 = null;
var inst_15628 = (0);
var inst_15629 = (0);
var state_15685__$1 = (function (){var statearr_15713 = state_15685;
(statearr_15713[(12)] = inst_15629);

(statearr_15713[(13)] = inst_15628);

(statearr_15713[(14)] = inst_15626);

(statearr_15713[(16)] = inst_15627);

return statearr_15713;
})();
var statearr_15714_15759 = state_15685__$1;
(statearr_15714_15759[(2)] = null);

(statearr_15714_15759[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (14))){
var state_15685__$1 = state_15685;
var statearr_15718_15760 = state_15685__$1;
(statearr_15718_15760[(2)] = null);

(statearr_15718_15760[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (16))){
var inst_15640 = (state_15685[(10)]);
var inst_15644 = cljs.core.chunk_first(inst_15640);
var inst_15645 = cljs.core.chunk_rest(inst_15640);
var inst_15646 = cljs.core.count(inst_15644);
var inst_15626 = inst_15645;
var inst_15627 = inst_15644;
var inst_15628 = inst_15646;
var inst_15629 = (0);
var state_15685__$1 = (function (){var statearr_15719 = state_15685;
(statearr_15719[(12)] = inst_15629);

(statearr_15719[(13)] = inst_15628);

(statearr_15719[(14)] = inst_15626);

(statearr_15719[(16)] = inst_15627);

return statearr_15719;
})();
var statearr_15720_15761 = state_15685__$1;
(statearr_15720_15761[(2)] = null);

(statearr_15720_15761[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (10))){
var inst_15629 = (state_15685[(12)]);
var inst_15628 = (state_15685[(13)]);
var inst_15626 = (state_15685[(14)]);
var inst_15627 = (state_15685[(16)]);
var inst_15634 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15627,inst_15629);
var inst_15635 = cljs.core.async.muxch_STAR_(inst_15634);
var inst_15636 = cljs.core.async.close_BANG_(inst_15635);
var inst_15637 = (inst_15629 + (1));
var tmp15715 = inst_15628;
var tmp15716 = inst_15626;
var tmp15717 = inst_15627;
var inst_15626__$1 = tmp15716;
var inst_15627__$1 = tmp15717;
var inst_15628__$1 = tmp15715;
var inst_15629__$1 = inst_15637;
var state_15685__$1 = (function (){var statearr_15721 = state_15685;
(statearr_15721[(12)] = inst_15629__$1);

(statearr_15721[(13)] = inst_15628__$1);

(statearr_15721[(14)] = inst_15626__$1);

(statearr_15721[(16)] = inst_15627__$1);

(statearr_15721[(17)] = inst_15636);

return statearr_15721;
})();
var statearr_15722_15762 = state_15685__$1;
(statearr_15722_15762[(2)] = null);

(statearr_15722_15762[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (18))){
var inst_15655 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15723_15763 = state_15685__$1;
(statearr_15723_15763[(2)] = inst_15655);

(statearr_15723_15763[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15686 === (8))){
var inst_15629 = (state_15685[(12)]);
var inst_15628 = (state_15685[(13)]);
var inst_15631 = (inst_15629 < inst_15628);
var inst_15632 = inst_15631;
var state_15685__$1 = state_15685;
if(cljs.core.truth_(inst_15632)){
var statearr_15724_15764 = state_15685__$1;
(statearr_15724_15764[(1)] = (10));

} else {
var statearr_15725_15765 = state_15685__$1;
(statearr_15725_15765[(1)] = (11));

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
});})(c__13795__auto___15737,mults,ensure_mult,p))
;
return ((function (switch__13681__auto__,c__13795__auto___15737,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_15729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15729[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_15729[(1)] = (1));

return statearr_15729;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_15685){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_15685);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e15730){if((e15730 instanceof Object)){
var ex__13685__auto__ = e15730;
var statearr_15731_15766 = state_15685;
(statearr_15731_15766[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15685);

return cljs.core.cst$kw$recur;
} else {
throw e15730;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__15767 = state_15685;
state_15685 = G__15767;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_15685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_15685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___15737,mults,ensure_mult,p))
})();
var state__13797__auto__ = (function (){var statearr_15732 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_15732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___15737);

return statearr_15732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___15737,mults,ensure_mult,p))
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
var args15768 = [];
var len__7652__auto___15771 = arguments.length;
var i__7653__auto___15772 = (0);
while(true){
if((i__7653__auto___15772 < len__7652__auto___15771)){
args15768.push((arguments[i__7653__auto___15772]));

var G__15773 = (i__7653__auto___15772 + (1));
i__7653__auto___15772 = G__15773;
continue;
} else {
}
break;
}

var G__15770 = args15768.length;
switch (G__15770) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15768.length)].join('')));

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
var args15775 = [];
var len__7652__auto___15778 = arguments.length;
var i__7653__auto___15779 = (0);
while(true){
if((i__7653__auto___15779 < len__7652__auto___15778)){
args15775.push((arguments[i__7653__auto___15779]));

var G__15780 = (i__7653__auto___15779 + (1));
i__7653__auto___15779 = G__15780;
continue;
} else {
}
break;
}

var G__15777 = args15775.length;
switch (G__15777) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15775.length)].join('')));

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
var args15782 = [];
var len__7652__auto___15853 = arguments.length;
var i__7653__auto___15854 = (0);
while(true){
if((i__7653__auto___15854 < len__7652__auto___15853)){
args15782.push((arguments[i__7653__auto___15854]));

var G__15855 = (i__7653__auto___15854 + (1));
i__7653__auto___15854 = G__15855;
continue;
} else {
}
break;
}

var G__15784 = args15782.length;
switch (G__15784) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15782.length)].join('')));

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
var c__13795__auto___15857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___15857,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___15857,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15823){
var state_val_15824 = (state_15823[(1)]);
if((state_val_15824 === (7))){
var state_15823__$1 = state_15823;
var statearr_15825_15858 = state_15823__$1;
(statearr_15825_15858[(2)] = null);

(statearr_15825_15858[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (1))){
var state_15823__$1 = state_15823;
var statearr_15826_15859 = state_15823__$1;
(statearr_15826_15859[(2)] = null);

(statearr_15826_15859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (4))){
var inst_15787 = (state_15823[(7)]);
var inst_15789 = (inst_15787 < cnt);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15789)){
var statearr_15827_15860 = state_15823__$1;
(statearr_15827_15860[(1)] = (6));

} else {
var statearr_15828_15861 = state_15823__$1;
(statearr_15828_15861[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (15))){
var inst_15819 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15829_15862 = state_15823__$1;
(statearr_15829_15862[(2)] = inst_15819);

(statearr_15829_15862[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (13))){
var inst_15812 = cljs.core.async.close_BANG_(out);
var state_15823__$1 = state_15823;
var statearr_15830_15863 = state_15823__$1;
(statearr_15830_15863[(2)] = inst_15812);

(statearr_15830_15863[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (6))){
var state_15823__$1 = state_15823;
var statearr_15831_15864 = state_15823__$1;
(statearr_15831_15864[(2)] = null);

(statearr_15831_15864[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (3))){
var inst_15821 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15823__$1,inst_15821);
} else {
if((state_val_15824 === (12))){
var inst_15809 = (state_15823[(8)]);
var inst_15809__$1 = (state_15823[(2)]);
var inst_15810 = cljs.core.some(cljs.core.nil_QMARK_,inst_15809__$1);
var state_15823__$1 = (function (){var statearr_15832 = state_15823;
(statearr_15832[(8)] = inst_15809__$1);

return statearr_15832;
})();
if(cljs.core.truth_(inst_15810)){
var statearr_15833_15865 = state_15823__$1;
(statearr_15833_15865[(1)] = (13));

} else {
var statearr_15834_15866 = state_15823__$1;
(statearr_15834_15866[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (2))){
var inst_15786 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15787 = (0);
var state_15823__$1 = (function (){var statearr_15835 = state_15823;
(statearr_15835[(7)] = inst_15787);

(statearr_15835[(9)] = inst_15786);

return statearr_15835;
})();
var statearr_15836_15867 = state_15823__$1;
(statearr_15836_15867[(2)] = null);

(statearr_15836_15867[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (11))){
var inst_15787 = (state_15823[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15823,(10),Object,null,(9));
var inst_15796 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15787) : chs__$1.call(null,inst_15787));
var inst_15797 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15787) : done.call(null,inst_15787));
var inst_15798 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15796,inst_15797);
var state_15823__$1 = state_15823;
var statearr_15837_15868 = state_15823__$1;
(statearr_15837_15868[(2)] = inst_15798);


cljs.core.async.impl.ioc_helpers.process_exception(state_15823__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (9))){
var inst_15787 = (state_15823[(7)]);
var inst_15800 = (state_15823[(2)]);
var inst_15801 = (inst_15787 + (1));
var inst_15787__$1 = inst_15801;
var state_15823__$1 = (function (){var statearr_15838 = state_15823;
(statearr_15838[(10)] = inst_15800);

(statearr_15838[(7)] = inst_15787__$1);

return statearr_15838;
})();
var statearr_15839_15869 = state_15823__$1;
(statearr_15839_15869[(2)] = null);

(statearr_15839_15869[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (5))){
var inst_15807 = (state_15823[(2)]);
var state_15823__$1 = (function (){var statearr_15840 = state_15823;
(statearr_15840[(11)] = inst_15807);

return statearr_15840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15823__$1,(12),dchan);
} else {
if((state_val_15824 === (14))){
var inst_15809 = (state_15823[(8)]);
var inst_15814 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15809);
var state_15823__$1 = state_15823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15823__$1,(16),out,inst_15814);
} else {
if((state_val_15824 === (16))){
var inst_15816 = (state_15823[(2)]);
var state_15823__$1 = (function (){var statearr_15841 = state_15823;
(statearr_15841[(12)] = inst_15816);

return statearr_15841;
})();
var statearr_15842_15870 = state_15823__$1;
(statearr_15842_15870[(2)] = null);

(statearr_15842_15870[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (10))){
var inst_15791 = (state_15823[(2)]);
var inst_15792 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15823__$1 = (function (){var statearr_15843 = state_15823;
(statearr_15843[(13)] = inst_15791);

return statearr_15843;
})();
var statearr_15844_15871 = state_15823__$1;
(statearr_15844_15871[(2)] = inst_15792);


cljs.core.async.impl.ioc_helpers.process_exception(state_15823__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15824 === (8))){
var inst_15805 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15845_15872 = state_15823__$1;
(statearr_15845_15872[(2)] = inst_15805);

(statearr_15845_15872[(1)] = (5));


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
});})(c__13795__auto___15857,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13681__auto__,c__13795__auto___15857,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_15849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15849[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_15849[(1)] = (1));

return statearr_15849;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_15823){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_15823);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e15850){if((e15850 instanceof Object)){
var ex__13685__auto__ = e15850;
var statearr_15851_15873 = state_15823;
(statearr_15851_15873[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15823);

return cljs.core.cst$kw$recur;
} else {
throw e15850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__15874 = state_15823;
state_15823 = G__15874;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_15823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_15823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___15857,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13797__auto__ = (function (){var statearr_15852 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_15852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___15857);

return statearr_15852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___15857,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args15876 = [];
var len__7652__auto___15934 = arguments.length;
var i__7653__auto___15935 = (0);
while(true){
if((i__7653__auto___15935 < len__7652__auto___15934)){
args15876.push((arguments[i__7653__auto___15935]));

var G__15936 = (i__7653__auto___15935 + (1));
i__7653__auto___15935 = G__15936;
continue;
} else {
}
break;
}

var G__15878 = args15876.length;
switch (G__15878) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15876.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13795__auto___15938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___15938,out){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___15938,out){
return (function (state_15910){
var state_val_15911 = (state_15910[(1)]);
if((state_val_15911 === (7))){
var inst_15890 = (state_15910[(7)]);
var inst_15889 = (state_15910[(8)]);
var inst_15889__$1 = (state_15910[(2)]);
var inst_15890__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15889__$1,(0),null);
var inst_15891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15889__$1,(1),null);
var inst_15892 = (inst_15890__$1 == null);
var state_15910__$1 = (function (){var statearr_15912 = state_15910;
(statearr_15912[(7)] = inst_15890__$1);

(statearr_15912[(8)] = inst_15889__$1);

(statearr_15912[(9)] = inst_15891);

return statearr_15912;
})();
if(cljs.core.truth_(inst_15892)){
var statearr_15913_15939 = state_15910__$1;
(statearr_15913_15939[(1)] = (8));

} else {
var statearr_15914_15940 = state_15910__$1;
(statearr_15914_15940[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (1))){
var inst_15879 = cljs.core.vec(chs);
var inst_15880 = inst_15879;
var state_15910__$1 = (function (){var statearr_15915 = state_15910;
(statearr_15915[(10)] = inst_15880);

return statearr_15915;
})();
var statearr_15916_15941 = state_15910__$1;
(statearr_15916_15941[(2)] = null);

(statearr_15916_15941[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (4))){
var inst_15880 = (state_15910[(10)]);
var state_15910__$1 = state_15910;
return cljs.core.async.ioc_alts_BANG_(state_15910__$1,(7),inst_15880);
} else {
if((state_val_15911 === (6))){
var inst_15906 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15917_15942 = state_15910__$1;
(statearr_15917_15942[(2)] = inst_15906);

(statearr_15917_15942[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (3))){
var inst_15908 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15910__$1,inst_15908);
} else {
if((state_val_15911 === (2))){
var inst_15880 = (state_15910[(10)]);
var inst_15882 = cljs.core.count(inst_15880);
var inst_15883 = (inst_15882 > (0));
var state_15910__$1 = state_15910;
if(cljs.core.truth_(inst_15883)){
var statearr_15919_15943 = state_15910__$1;
(statearr_15919_15943[(1)] = (4));

} else {
var statearr_15920_15944 = state_15910__$1;
(statearr_15920_15944[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (11))){
var inst_15880 = (state_15910[(10)]);
var inst_15899 = (state_15910[(2)]);
var tmp15918 = inst_15880;
var inst_15880__$1 = tmp15918;
var state_15910__$1 = (function (){var statearr_15921 = state_15910;
(statearr_15921[(10)] = inst_15880__$1);

(statearr_15921[(11)] = inst_15899);

return statearr_15921;
})();
var statearr_15922_15945 = state_15910__$1;
(statearr_15922_15945[(2)] = null);

(statearr_15922_15945[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (9))){
var inst_15890 = (state_15910[(7)]);
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15910__$1,(11),out,inst_15890);
} else {
if((state_val_15911 === (5))){
var inst_15904 = cljs.core.async.close_BANG_(out);
var state_15910__$1 = state_15910;
var statearr_15923_15946 = state_15910__$1;
(statearr_15923_15946[(2)] = inst_15904);

(statearr_15923_15946[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (10))){
var inst_15902 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15924_15947 = state_15910__$1;
(statearr_15924_15947[(2)] = inst_15902);

(statearr_15924_15947[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (8))){
var inst_15880 = (state_15910[(10)]);
var inst_15890 = (state_15910[(7)]);
var inst_15889 = (state_15910[(8)]);
var inst_15891 = (state_15910[(9)]);
var inst_15894 = (function (){var cs = inst_15880;
var vec__15885 = inst_15889;
var v = inst_15890;
var c = inst_15891;
return ((function (cs,vec__15885,v,c,inst_15880,inst_15890,inst_15889,inst_15891,state_val_15911,c__13795__auto___15938,out){
return (function (p1__15875_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15875_SHARP_);
});
;})(cs,vec__15885,v,c,inst_15880,inst_15890,inst_15889,inst_15891,state_val_15911,c__13795__auto___15938,out))
})();
var inst_15895 = cljs.core.filterv(inst_15894,inst_15880);
var inst_15880__$1 = inst_15895;
var state_15910__$1 = (function (){var statearr_15925 = state_15910;
(statearr_15925[(10)] = inst_15880__$1);

return statearr_15925;
})();
var statearr_15926_15948 = state_15910__$1;
(statearr_15926_15948[(2)] = null);

(statearr_15926_15948[(1)] = (2));


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
});})(c__13795__auto___15938,out))
;
return ((function (switch__13681__auto__,c__13795__auto___15938,out){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_15930 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15930[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_15930[(1)] = (1));

return statearr_15930;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_15910){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_15910);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e15931){if((e15931 instanceof Object)){
var ex__13685__auto__ = e15931;
var statearr_15932_15949 = state_15910;
(statearr_15932_15949[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15910);

return cljs.core.cst$kw$recur;
} else {
throw e15931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__15950 = state_15910;
state_15910 = G__15950;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_15910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_15910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___15938,out))
})();
var state__13797__auto__ = (function (){var statearr_15933 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_15933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___15938);

return statearr_15933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___15938,out))
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
var args15951 = [];
var len__7652__auto___16000 = arguments.length;
var i__7653__auto___16001 = (0);
while(true){
if((i__7653__auto___16001 < len__7652__auto___16000)){
args15951.push((arguments[i__7653__auto___16001]));

var G__16002 = (i__7653__auto___16001 + (1));
i__7653__auto___16001 = G__16002;
continue;
} else {
}
break;
}

var G__15953 = args15951.length;
switch (G__15953) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15951.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13795__auto___16004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___16004,out){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___16004,out){
return (function (state_15977){
var state_val_15978 = (state_15977[(1)]);
if((state_val_15978 === (7))){
var inst_15959 = (state_15977[(7)]);
var inst_15959__$1 = (state_15977[(2)]);
var inst_15960 = (inst_15959__$1 == null);
var inst_15961 = cljs.core.not(inst_15960);
var state_15977__$1 = (function (){var statearr_15979 = state_15977;
(statearr_15979[(7)] = inst_15959__$1);

return statearr_15979;
})();
if(inst_15961){
var statearr_15980_16005 = state_15977__$1;
(statearr_15980_16005[(1)] = (8));

} else {
var statearr_15981_16006 = state_15977__$1;
(statearr_15981_16006[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15978 === (1))){
var inst_15954 = (0);
var state_15977__$1 = (function (){var statearr_15982 = state_15977;
(statearr_15982[(8)] = inst_15954);

return statearr_15982;
})();
var statearr_15983_16007 = state_15977__$1;
(statearr_15983_16007[(2)] = null);

(statearr_15983_16007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15978 === (4))){
var state_15977__$1 = state_15977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15977__$1,(7),ch);
} else {
if((state_val_15978 === (6))){
var inst_15972 = (state_15977[(2)]);
var state_15977__$1 = state_15977;
var statearr_15984_16008 = state_15977__$1;
(statearr_15984_16008[(2)] = inst_15972);

(statearr_15984_16008[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15978 === (3))){
var inst_15974 = (state_15977[(2)]);
var inst_15975 = cljs.core.async.close_BANG_(out);
var state_15977__$1 = (function (){var statearr_15985 = state_15977;
(statearr_15985[(9)] = inst_15974);

return statearr_15985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15977__$1,inst_15975);
} else {
if((state_val_15978 === (2))){
var inst_15954 = (state_15977[(8)]);
var inst_15956 = (inst_15954 < n);
var state_15977__$1 = state_15977;
if(cljs.core.truth_(inst_15956)){
var statearr_15986_16009 = state_15977__$1;
(statearr_15986_16009[(1)] = (4));

} else {
var statearr_15987_16010 = state_15977__$1;
(statearr_15987_16010[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15978 === (11))){
var inst_15954 = (state_15977[(8)]);
var inst_15964 = (state_15977[(2)]);
var inst_15965 = (inst_15954 + (1));
var inst_15954__$1 = inst_15965;
var state_15977__$1 = (function (){var statearr_15988 = state_15977;
(statearr_15988[(8)] = inst_15954__$1);

(statearr_15988[(10)] = inst_15964);

return statearr_15988;
})();
var statearr_15989_16011 = state_15977__$1;
(statearr_15989_16011[(2)] = null);

(statearr_15989_16011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15978 === (9))){
var state_15977__$1 = state_15977;
var statearr_15990_16012 = state_15977__$1;
(statearr_15990_16012[(2)] = null);

(statearr_15990_16012[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15978 === (5))){
var state_15977__$1 = state_15977;
var statearr_15991_16013 = state_15977__$1;
(statearr_15991_16013[(2)] = null);

(statearr_15991_16013[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15978 === (10))){
var inst_15969 = (state_15977[(2)]);
var state_15977__$1 = state_15977;
var statearr_15992_16014 = state_15977__$1;
(statearr_15992_16014[(2)] = inst_15969);

(statearr_15992_16014[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15978 === (8))){
var inst_15959 = (state_15977[(7)]);
var state_15977__$1 = state_15977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15977__$1,(11),out,inst_15959);
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
});})(c__13795__auto___16004,out))
;
return ((function (switch__13681__auto__,c__13795__auto___16004,out){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_15996 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15996[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_15996[(1)] = (1));

return statearr_15996;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_15977){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_15977);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e15997){if((e15997 instanceof Object)){
var ex__13685__auto__ = e15997;
var statearr_15998_16015 = state_15977;
(statearr_15998_16015[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15977);

return cljs.core.cst$kw$recur;
} else {
throw e15997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__16016 = state_15977;
state_15977 = G__16016;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_15977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_15977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___16004,out))
})();
var state__13797__auto__ = (function (){var statearr_15999 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_15999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___16004);

return statearr_15999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___16004,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16026 = (function (map_LT_,f,ch,meta16027){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16027 = meta16027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16028,meta16027__$1){
var self__ = this;
var _16028__$1 = this;
return (new cljs.core.async.t_cljs$core$async16026(self__.map_LT_,self__.f,self__.ch,meta16027__$1));
});

cljs.core.async.t_cljs$core$async16026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16028){
var self__ = this;
var _16028__$1 = this;
return self__.meta16027;
});

cljs.core.async.t_cljs$core$async16026.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16026.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16026.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16029 = (function (map_LT_,f,ch,meta16027,_,fn1,meta16030){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16027 = meta16027;
this._ = _;
this.fn1 = fn1;
this.meta16030 = meta16030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16031,meta16030__$1){
var self__ = this;
var _16031__$1 = this;
return (new cljs.core.async.t_cljs$core$async16029(self__.map_LT_,self__.f,self__.ch,self__.meta16027,self__._,self__.fn1,meta16030__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16031){
var self__ = this;
var _16031__$1 = this;
return self__.meta16030;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16029.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16017_SHARP_){
var G__16032 = (((p1__16017_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16017_SHARP_) : self__.f.call(null,p1__16017_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16032) : f1.call(null,G__16032));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16029.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16027,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16026], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16030], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16029";

cljs.core.async.t_cljs$core$async16029.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async16029");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16029 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16029(map_LT___$1,f__$1,ch__$1,meta16027__$1,___$2,fn1__$1,meta16030){
return (new cljs.core.async.t_cljs$core$async16029(map_LT___$1,f__$1,ch__$1,meta16027__$1,___$2,fn1__$1,meta16030));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16029(self__.map_LT_,self__.f,self__.ch,self__.meta16027,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6565__auto__ = ret;
if(cljs.core.truth_(and__6565__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6565__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16033 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16033) : self__.f.call(null,G__16033));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16026.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16027], null);
});

cljs.core.async.t_cljs$core$async16026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16026";

cljs.core.async.t_cljs$core$async16026.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async16026");
});

cljs.core.async.__GT_t_cljs$core$async16026 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16026(map_LT___$1,f__$1,ch__$1,meta16027){
return (new cljs.core.async.t_cljs$core$async16026(map_LT___$1,f__$1,ch__$1,meta16027));
});

}

return (new cljs.core.async.t_cljs$core$async16026(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16037 = (function (map_GT_,f,ch,meta16038){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16038 = meta16038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16039,meta16038__$1){
var self__ = this;
var _16039__$1 = this;
return (new cljs.core.async.t_cljs$core$async16037(self__.map_GT_,self__.f,self__.ch,meta16038__$1));
});

cljs.core.async.t_cljs$core$async16037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16039){
var self__ = this;
var _16039__$1 = this;
return self__.meta16038;
});

cljs.core.async.t_cljs$core$async16037.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16037.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16037.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16038], null);
});

cljs.core.async.t_cljs$core$async16037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16037";

cljs.core.async.t_cljs$core$async16037.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async16037");
});

cljs.core.async.__GT_t_cljs$core$async16037 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16037(map_GT___$1,f__$1,ch__$1,meta16038){
return (new cljs.core.async.t_cljs$core$async16037(map_GT___$1,f__$1,ch__$1,meta16038));
});

}

return (new cljs.core.async.t_cljs$core$async16037(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16043 = (function (filter_GT_,p,ch,meta16044){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16044 = meta16044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16045,meta16044__$1){
var self__ = this;
var _16045__$1 = this;
return (new cljs.core.async.t_cljs$core$async16043(self__.filter_GT_,self__.p,self__.ch,meta16044__$1));
});

cljs.core.async.t_cljs$core$async16043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16045){
var self__ = this;
var _16045__$1 = this;
return self__.meta16044;
});

cljs.core.async.t_cljs$core$async16043.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16043.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16043.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16043.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16044], null);
});

cljs.core.async.t_cljs$core$async16043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16043";

cljs.core.async.t_cljs$core$async16043.cljs$lang$ctorPrWriter = (function (this__7183__auto__,writer__7184__auto__,opt__7185__auto__){
return cljs.core._write(writer__7184__auto__,"cljs.core.async/t_cljs$core$async16043");
});

cljs.core.async.__GT_t_cljs$core$async16043 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16043(filter_GT___$1,p__$1,ch__$1,meta16044){
return (new cljs.core.async.t_cljs$core$async16043(filter_GT___$1,p__$1,ch__$1,meta16044));
});

}

return (new cljs.core.async.t_cljs$core$async16043(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args16046 = [];
var len__7652__auto___16090 = arguments.length;
var i__7653__auto___16091 = (0);
while(true){
if((i__7653__auto___16091 < len__7652__auto___16090)){
args16046.push((arguments[i__7653__auto___16091]));

var G__16092 = (i__7653__auto___16091 + (1));
i__7653__auto___16091 = G__16092;
continue;
} else {
}
break;
}

var G__16048 = args16046.length;
switch (G__16048) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16046.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13795__auto___16094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___16094,out){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___16094,out){
return (function (state_16069){
var state_val_16070 = (state_16069[(1)]);
if((state_val_16070 === (7))){
var inst_16065 = (state_16069[(2)]);
var state_16069__$1 = state_16069;
var statearr_16071_16095 = state_16069__$1;
(statearr_16071_16095[(2)] = inst_16065);

(statearr_16071_16095[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16070 === (1))){
var state_16069__$1 = state_16069;
var statearr_16072_16096 = state_16069__$1;
(statearr_16072_16096[(2)] = null);

(statearr_16072_16096[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16070 === (4))){
var inst_16051 = (state_16069[(7)]);
var inst_16051__$1 = (state_16069[(2)]);
var inst_16052 = (inst_16051__$1 == null);
var state_16069__$1 = (function (){var statearr_16073 = state_16069;
(statearr_16073[(7)] = inst_16051__$1);

return statearr_16073;
})();
if(cljs.core.truth_(inst_16052)){
var statearr_16074_16097 = state_16069__$1;
(statearr_16074_16097[(1)] = (5));

} else {
var statearr_16075_16098 = state_16069__$1;
(statearr_16075_16098[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16070 === (6))){
var inst_16051 = (state_16069[(7)]);
var inst_16056 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16051) : p.call(null,inst_16051));
var state_16069__$1 = state_16069;
if(cljs.core.truth_(inst_16056)){
var statearr_16076_16099 = state_16069__$1;
(statearr_16076_16099[(1)] = (8));

} else {
var statearr_16077_16100 = state_16069__$1;
(statearr_16077_16100[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16070 === (3))){
var inst_16067 = (state_16069[(2)]);
var state_16069__$1 = state_16069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16069__$1,inst_16067);
} else {
if((state_val_16070 === (2))){
var state_16069__$1 = state_16069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16069__$1,(4),ch);
} else {
if((state_val_16070 === (11))){
var inst_16059 = (state_16069[(2)]);
var state_16069__$1 = state_16069;
var statearr_16078_16101 = state_16069__$1;
(statearr_16078_16101[(2)] = inst_16059);

(statearr_16078_16101[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16070 === (9))){
var state_16069__$1 = state_16069;
var statearr_16079_16102 = state_16069__$1;
(statearr_16079_16102[(2)] = null);

(statearr_16079_16102[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16070 === (5))){
var inst_16054 = cljs.core.async.close_BANG_(out);
var state_16069__$1 = state_16069;
var statearr_16080_16103 = state_16069__$1;
(statearr_16080_16103[(2)] = inst_16054);

(statearr_16080_16103[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16070 === (10))){
var inst_16062 = (state_16069[(2)]);
var state_16069__$1 = (function (){var statearr_16081 = state_16069;
(statearr_16081[(8)] = inst_16062);

return statearr_16081;
})();
var statearr_16082_16104 = state_16069__$1;
(statearr_16082_16104[(2)] = null);

(statearr_16082_16104[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16070 === (8))){
var inst_16051 = (state_16069[(7)]);
var state_16069__$1 = state_16069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16069__$1,(11),out,inst_16051);
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
});})(c__13795__auto___16094,out))
;
return ((function (switch__13681__auto__,c__13795__auto___16094,out){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_16086 = [null,null,null,null,null,null,null,null,null];
(statearr_16086[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_16086[(1)] = (1));

return statearr_16086;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_16069){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_16069);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e16087){if((e16087 instanceof Object)){
var ex__13685__auto__ = e16087;
var statearr_16088_16105 = state_16069;
(statearr_16088_16105[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16069);

return cljs.core.cst$kw$recur;
} else {
throw e16087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__16106 = state_16069;
state_16069 = G__16106;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_16069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_16069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___16094,out))
})();
var state__13797__auto__ = (function (){var statearr_16089 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_16089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___16094);

return statearr_16089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___16094,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16107 = [];
var len__7652__auto___16110 = arguments.length;
var i__7653__auto___16111 = (0);
while(true){
if((i__7653__auto___16111 < len__7652__auto___16110)){
args16107.push((arguments[i__7653__auto___16111]));

var G__16112 = (i__7653__auto___16111 + (1));
i__7653__auto___16111 = G__16112;
continue;
} else {
}
break;
}

var G__16109 = args16107.length;
switch (G__16109) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16107.length)].join('')));

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
var c__13795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto__){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto__){
return (function (state_16279){
var state_val_16280 = (state_16279[(1)]);
if((state_val_16280 === (7))){
var inst_16275 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16281_16322 = state_16279__$1;
(statearr_16281_16322[(2)] = inst_16275);

(statearr_16281_16322[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (20))){
var inst_16245 = (state_16279[(7)]);
var inst_16256 = (state_16279[(2)]);
var inst_16257 = cljs.core.next(inst_16245);
var inst_16231 = inst_16257;
var inst_16232 = null;
var inst_16233 = (0);
var inst_16234 = (0);
var state_16279__$1 = (function (){var statearr_16282 = state_16279;
(statearr_16282[(8)] = inst_16233);

(statearr_16282[(9)] = inst_16234);

(statearr_16282[(10)] = inst_16232);

(statearr_16282[(11)] = inst_16256);

(statearr_16282[(12)] = inst_16231);

return statearr_16282;
})();
var statearr_16283_16323 = state_16279__$1;
(statearr_16283_16323[(2)] = null);

(statearr_16283_16323[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (1))){
var state_16279__$1 = state_16279;
var statearr_16284_16324 = state_16279__$1;
(statearr_16284_16324[(2)] = null);

(statearr_16284_16324[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (4))){
var inst_16220 = (state_16279[(13)]);
var inst_16220__$1 = (state_16279[(2)]);
var inst_16221 = (inst_16220__$1 == null);
var state_16279__$1 = (function (){var statearr_16285 = state_16279;
(statearr_16285[(13)] = inst_16220__$1);

return statearr_16285;
})();
if(cljs.core.truth_(inst_16221)){
var statearr_16286_16325 = state_16279__$1;
(statearr_16286_16325[(1)] = (5));

} else {
var statearr_16287_16326 = state_16279__$1;
(statearr_16287_16326[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (15))){
var state_16279__$1 = state_16279;
var statearr_16291_16327 = state_16279__$1;
(statearr_16291_16327[(2)] = null);

(statearr_16291_16327[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (21))){
var state_16279__$1 = state_16279;
var statearr_16292_16328 = state_16279__$1;
(statearr_16292_16328[(2)] = null);

(statearr_16292_16328[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (13))){
var inst_16233 = (state_16279[(8)]);
var inst_16234 = (state_16279[(9)]);
var inst_16232 = (state_16279[(10)]);
var inst_16231 = (state_16279[(12)]);
var inst_16241 = (state_16279[(2)]);
var inst_16242 = (inst_16234 + (1));
var tmp16288 = inst_16233;
var tmp16289 = inst_16232;
var tmp16290 = inst_16231;
var inst_16231__$1 = tmp16290;
var inst_16232__$1 = tmp16289;
var inst_16233__$1 = tmp16288;
var inst_16234__$1 = inst_16242;
var state_16279__$1 = (function (){var statearr_16293 = state_16279;
(statearr_16293[(8)] = inst_16233__$1);

(statearr_16293[(9)] = inst_16234__$1);

(statearr_16293[(10)] = inst_16232__$1);

(statearr_16293[(14)] = inst_16241);

(statearr_16293[(12)] = inst_16231__$1);

return statearr_16293;
})();
var statearr_16294_16329 = state_16279__$1;
(statearr_16294_16329[(2)] = null);

(statearr_16294_16329[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (22))){
var state_16279__$1 = state_16279;
var statearr_16295_16330 = state_16279__$1;
(statearr_16295_16330[(2)] = null);

(statearr_16295_16330[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (6))){
var inst_16220 = (state_16279[(13)]);
var inst_16229 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16220) : f.call(null,inst_16220));
var inst_16230 = cljs.core.seq(inst_16229);
var inst_16231 = inst_16230;
var inst_16232 = null;
var inst_16233 = (0);
var inst_16234 = (0);
var state_16279__$1 = (function (){var statearr_16296 = state_16279;
(statearr_16296[(8)] = inst_16233);

(statearr_16296[(9)] = inst_16234);

(statearr_16296[(10)] = inst_16232);

(statearr_16296[(12)] = inst_16231);

return statearr_16296;
})();
var statearr_16297_16331 = state_16279__$1;
(statearr_16297_16331[(2)] = null);

(statearr_16297_16331[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (17))){
var inst_16245 = (state_16279[(7)]);
var inst_16249 = cljs.core.chunk_first(inst_16245);
var inst_16250 = cljs.core.chunk_rest(inst_16245);
var inst_16251 = cljs.core.count(inst_16249);
var inst_16231 = inst_16250;
var inst_16232 = inst_16249;
var inst_16233 = inst_16251;
var inst_16234 = (0);
var state_16279__$1 = (function (){var statearr_16298 = state_16279;
(statearr_16298[(8)] = inst_16233);

(statearr_16298[(9)] = inst_16234);

(statearr_16298[(10)] = inst_16232);

(statearr_16298[(12)] = inst_16231);

return statearr_16298;
})();
var statearr_16299_16332 = state_16279__$1;
(statearr_16299_16332[(2)] = null);

(statearr_16299_16332[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (3))){
var inst_16277 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16279__$1,inst_16277);
} else {
if((state_val_16280 === (12))){
var inst_16265 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16300_16333 = state_16279__$1;
(statearr_16300_16333[(2)] = inst_16265);

(statearr_16300_16333[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (2))){
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16279__$1,(4),in$);
} else {
if((state_val_16280 === (23))){
var inst_16273 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16301_16334 = state_16279__$1;
(statearr_16301_16334[(2)] = inst_16273);

(statearr_16301_16334[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (19))){
var inst_16260 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16302_16335 = state_16279__$1;
(statearr_16302_16335[(2)] = inst_16260);

(statearr_16302_16335[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (11))){
var inst_16245 = (state_16279[(7)]);
var inst_16231 = (state_16279[(12)]);
var inst_16245__$1 = cljs.core.seq(inst_16231);
var state_16279__$1 = (function (){var statearr_16303 = state_16279;
(statearr_16303[(7)] = inst_16245__$1);

return statearr_16303;
})();
if(inst_16245__$1){
var statearr_16304_16336 = state_16279__$1;
(statearr_16304_16336[(1)] = (14));

} else {
var statearr_16305_16337 = state_16279__$1;
(statearr_16305_16337[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (9))){
var inst_16267 = (state_16279[(2)]);
var inst_16268 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16279__$1 = (function (){var statearr_16306 = state_16279;
(statearr_16306[(15)] = inst_16267);

return statearr_16306;
})();
if(cljs.core.truth_(inst_16268)){
var statearr_16307_16338 = state_16279__$1;
(statearr_16307_16338[(1)] = (21));

} else {
var statearr_16308_16339 = state_16279__$1;
(statearr_16308_16339[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (5))){
var inst_16223 = cljs.core.async.close_BANG_(out);
var state_16279__$1 = state_16279;
var statearr_16309_16340 = state_16279__$1;
(statearr_16309_16340[(2)] = inst_16223);

(statearr_16309_16340[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (14))){
var inst_16245 = (state_16279[(7)]);
var inst_16247 = cljs.core.chunked_seq_QMARK_(inst_16245);
var state_16279__$1 = state_16279;
if(inst_16247){
var statearr_16310_16341 = state_16279__$1;
(statearr_16310_16341[(1)] = (17));

} else {
var statearr_16311_16342 = state_16279__$1;
(statearr_16311_16342[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (16))){
var inst_16263 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16312_16343 = state_16279__$1;
(statearr_16312_16343[(2)] = inst_16263);

(statearr_16312_16343[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16280 === (10))){
var inst_16234 = (state_16279[(9)]);
var inst_16232 = (state_16279[(10)]);
var inst_16239 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16232,inst_16234);
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16279__$1,(13),out,inst_16239);
} else {
if((state_val_16280 === (18))){
var inst_16245 = (state_16279[(7)]);
var inst_16254 = cljs.core.first(inst_16245);
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16279__$1,(20),out,inst_16254);
} else {
if((state_val_16280 === (8))){
var inst_16233 = (state_16279[(8)]);
var inst_16234 = (state_16279[(9)]);
var inst_16236 = (inst_16234 < inst_16233);
var inst_16237 = inst_16236;
var state_16279__$1 = state_16279;
if(cljs.core.truth_(inst_16237)){
var statearr_16313_16344 = state_16279__$1;
(statearr_16313_16344[(1)] = (10));

} else {
var statearr_16314_16345 = state_16279__$1;
(statearr_16314_16345[(1)] = (11));

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
});})(c__13795__auto__))
;
return ((function (switch__13681__auto__,c__13795__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13682__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13682__auto____0 = (function (){
var statearr_16318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16318[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13682__auto__);

(statearr_16318[(1)] = (1));

return statearr_16318;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13682__auto____1 = (function (state_16279){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_16279);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e16319){if((e16319 instanceof Object)){
var ex__13685__auto__ = e16319;
var statearr_16320_16346 = state_16279;
(statearr_16320_16346[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16279);

return cljs.core.cst$kw$recur;
} else {
throw e16319;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__16347 = state_16279;
state_16279 = G__16347;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13682__auto__ = function(state_16279){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13682__auto____1.call(this,state_16279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13682__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13682__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto__))
})();
var state__13797__auto__ = (function (){var statearr_16321 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_16321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto__);

return statearr_16321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto__))
);

return c__13795__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16348 = [];
var len__7652__auto___16351 = arguments.length;
var i__7653__auto___16352 = (0);
while(true){
if((i__7653__auto___16352 < len__7652__auto___16351)){
args16348.push((arguments[i__7653__auto___16352]));

var G__16353 = (i__7653__auto___16352 + (1));
i__7653__auto___16352 = G__16353;
continue;
} else {
}
break;
}

var G__16350 = args16348.length;
switch (G__16350) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16348.length)].join('')));

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
var args16355 = [];
var len__7652__auto___16358 = arguments.length;
var i__7653__auto___16359 = (0);
while(true){
if((i__7653__auto___16359 < len__7652__auto___16358)){
args16355.push((arguments[i__7653__auto___16359]));

var G__16360 = (i__7653__auto___16359 + (1));
i__7653__auto___16359 = G__16360;
continue;
} else {
}
break;
}

var G__16357 = args16355.length;
switch (G__16357) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16355.length)].join('')));

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
var args16362 = [];
var len__7652__auto___16413 = arguments.length;
var i__7653__auto___16414 = (0);
while(true){
if((i__7653__auto___16414 < len__7652__auto___16413)){
args16362.push((arguments[i__7653__auto___16414]));

var G__16415 = (i__7653__auto___16414 + (1));
i__7653__auto___16414 = G__16415;
continue;
} else {
}
break;
}

var G__16364 = args16362.length;
switch (G__16364) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16362.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13795__auto___16417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___16417,out){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___16417,out){
return (function (state_16388){
var state_val_16389 = (state_16388[(1)]);
if((state_val_16389 === (7))){
var inst_16383 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
var statearr_16390_16418 = state_16388__$1;
(statearr_16390_16418[(2)] = inst_16383);

(statearr_16390_16418[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (1))){
var inst_16365 = null;
var state_16388__$1 = (function (){var statearr_16391 = state_16388;
(statearr_16391[(7)] = inst_16365);

return statearr_16391;
})();
var statearr_16392_16419 = state_16388__$1;
(statearr_16392_16419[(2)] = null);

(statearr_16392_16419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (4))){
var inst_16368 = (state_16388[(8)]);
var inst_16368__$1 = (state_16388[(2)]);
var inst_16369 = (inst_16368__$1 == null);
var inst_16370 = cljs.core.not(inst_16369);
var state_16388__$1 = (function (){var statearr_16393 = state_16388;
(statearr_16393[(8)] = inst_16368__$1);

return statearr_16393;
})();
if(inst_16370){
var statearr_16394_16420 = state_16388__$1;
(statearr_16394_16420[(1)] = (5));

} else {
var statearr_16395_16421 = state_16388__$1;
(statearr_16395_16421[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (6))){
var state_16388__$1 = state_16388;
var statearr_16396_16422 = state_16388__$1;
(statearr_16396_16422[(2)] = null);

(statearr_16396_16422[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (3))){
var inst_16385 = (state_16388[(2)]);
var inst_16386 = cljs.core.async.close_BANG_(out);
var state_16388__$1 = (function (){var statearr_16397 = state_16388;
(statearr_16397[(9)] = inst_16385);

return statearr_16397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16388__$1,inst_16386);
} else {
if((state_val_16389 === (2))){
var state_16388__$1 = state_16388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16388__$1,(4),ch);
} else {
if((state_val_16389 === (11))){
var inst_16368 = (state_16388[(8)]);
var inst_16377 = (state_16388[(2)]);
var inst_16365 = inst_16368;
var state_16388__$1 = (function (){var statearr_16398 = state_16388;
(statearr_16398[(10)] = inst_16377);

(statearr_16398[(7)] = inst_16365);

return statearr_16398;
})();
var statearr_16399_16423 = state_16388__$1;
(statearr_16399_16423[(2)] = null);

(statearr_16399_16423[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (9))){
var inst_16368 = (state_16388[(8)]);
var state_16388__$1 = state_16388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16388__$1,(11),out,inst_16368);
} else {
if((state_val_16389 === (5))){
var inst_16368 = (state_16388[(8)]);
var inst_16365 = (state_16388[(7)]);
var inst_16372 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16368,inst_16365);
var state_16388__$1 = state_16388;
if(inst_16372){
var statearr_16401_16424 = state_16388__$1;
(statearr_16401_16424[(1)] = (8));

} else {
var statearr_16402_16425 = state_16388__$1;
(statearr_16402_16425[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (10))){
var inst_16380 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
var statearr_16403_16426 = state_16388__$1;
(statearr_16403_16426[(2)] = inst_16380);

(statearr_16403_16426[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (8))){
var inst_16365 = (state_16388[(7)]);
var tmp16400 = inst_16365;
var inst_16365__$1 = tmp16400;
var state_16388__$1 = (function (){var statearr_16404 = state_16388;
(statearr_16404[(7)] = inst_16365__$1);

return statearr_16404;
})();
var statearr_16405_16427 = state_16388__$1;
(statearr_16405_16427[(2)] = null);

(statearr_16405_16427[(1)] = (2));


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
});})(c__13795__auto___16417,out))
;
return ((function (switch__13681__auto__,c__13795__auto___16417,out){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_16409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16409[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_16409[(1)] = (1));

return statearr_16409;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_16388){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_16388);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e16410){if((e16410 instanceof Object)){
var ex__13685__auto__ = e16410;
var statearr_16411_16428 = state_16388;
(statearr_16411_16428[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16388);

return cljs.core.cst$kw$recur;
} else {
throw e16410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__16429 = state_16388;
state_16388 = G__16429;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_16388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_16388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___16417,out))
})();
var state__13797__auto__ = (function (){var statearr_16412 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_16412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___16417);

return statearr_16412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___16417,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16430 = [];
var len__7652__auto___16500 = arguments.length;
var i__7653__auto___16501 = (0);
while(true){
if((i__7653__auto___16501 < len__7652__auto___16500)){
args16430.push((arguments[i__7653__auto___16501]));

var G__16502 = (i__7653__auto___16501 + (1));
i__7653__auto___16501 = G__16502;
continue;
} else {
}
break;
}

var G__16432 = args16430.length;
switch (G__16432) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16430.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13795__auto___16504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___16504,out){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___16504,out){
return (function (state_16470){
var state_val_16471 = (state_16470[(1)]);
if((state_val_16471 === (7))){
var inst_16466 = (state_16470[(2)]);
var state_16470__$1 = state_16470;
var statearr_16472_16505 = state_16470__$1;
(statearr_16472_16505[(2)] = inst_16466);

(statearr_16472_16505[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (1))){
var inst_16433 = (new Array(n));
var inst_16434 = inst_16433;
var inst_16435 = (0);
var state_16470__$1 = (function (){var statearr_16473 = state_16470;
(statearr_16473[(7)] = inst_16435);

(statearr_16473[(8)] = inst_16434);

return statearr_16473;
})();
var statearr_16474_16506 = state_16470__$1;
(statearr_16474_16506[(2)] = null);

(statearr_16474_16506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (4))){
var inst_16438 = (state_16470[(9)]);
var inst_16438__$1 = (state_16470[(2)]);
var inst_16439 = (inst_16438__$1 == null);
var inst_16440 = cljs.core.not(inst_16439);
var state_16470__$1 = (function (){var statearr_16475 = state_16470;
(statearr_16475[(9)] = inst_16438__$1);

return statearr_16475;
})();
if(inst_16440){
var statearr_16476_16507 = state_16470__$1;
(statearr_16476_16507[(1)] = (5));

} else {
var statearr_16477_16508 = state_16470__$1;
(statearr_16477_16508[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (15))){
var inst_16460 = (state_16470[(2)]);
var state_16470__$1 = state_16470;
var statearr_16478_16509 = state_16470__$1;
(statearr_16478_16509[(2)] = inst_16460);

(statearr_16478_16509[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (13))){
var state_16470__$1 = state_16470;
var statearr_16479_16510 = state_16470__$1;
(statearr_16479_16510[(2)] = null);

(statearr_16479_16510[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (6))){
var inst_16435 = (state_16470[(7)]);
var inst_16456 = (inst_16435 > (0));
var state_16470__$1 = state_16470;
if(cljs.core.truth_(inst_16456)){
var statearr_16480_16511 = state_16470__$1;
(statearr_16480_16511[(1)] = (12));

} else {
var statearr_16481_16512 = state_16470__$1;
(statearr_16481_16512[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (3))){
var inst_16468 = (state_16470[(2)]);
var state_16470__$1 = state_16470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16470__$1,inst_16468);
} else {
if((state_val_16471 === (12))){
var inst_16434 = (state_16470[(8)]);
var inst_16458 = cljs.core.vec(inst_16434);
var state_16470__$1 = state_16470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16470__$1,(15),out,inst_16458);
} else {
if((state_val_16471 === (2))){
var state_16470__$1 = state_16470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16470__$1,(4),ch);
} else {
if((state_val_16471 === (11))){
var inst_16450 = (state_16470[(2)]);
var inst_16451 = (new Array(n));
var inst_16434 = inst_16451;
var inst_16435 = (0);
var state_16470__$1 = (function (){var statearr_16482 = state_16470;
(statearr_16482[(10)] = inst_16450);

(statearr_16482[(7)] = inst_16435);

(statearr_16482[(8)] = inst_16434);

return statearr_16482;
})();
var statearr_16483_16513 = state_16470__$1;
(statearr_16483_16513[(2)] = null);

(statearr_16483_16513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (9))){
var inst_16434 = (state_16470[(8)]);
var inst_16448 = cljs.core.vec(inst_16434);
var state_16470__$1 = state_16470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16470__$1,(11),out,inst_16448);
} else {
if((state_val_16471 === (5))){
var inst_16443 = (state_16470[(11)]);
var inst_16435 = (state_16470[(7)]);
var inst_16434 = (state_16470[(8)]);
var inst_16438 = (state_16470[(9)]);
var inst_16442 = (inst_16434[inst_16435] = inst_16438);
var inst_16443__$1 = (inst_16435 + (1));
var inst_16444 = (inst_16443__$1 < n);
var state_16470__$1 = (function (){var statearr_16484 = state_16470;
(statearr_16484[(12)] = inst_16442);

(statearr_16484[(11)] = inst_16443__$1);

return statearr_16484;
})();
if(cljs.core.truth_(inst_16444)){
var statearr_16485_16514 = state_16470__$1;
(statearr_16485_16514[(1)] = (8));

} else {
var statearr_16486_16515 = state_16470__$1;
(statearr_16486_16515[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (14))){
var inst_16463 = (state_16470[(2)]);
var inst_16464 = cljs.core.async.close_BANG_(out);
var state_16470__$1 = (function (){var statearr_16488 = state_16470;
(statearr_16488[(13)] = inst_16463);

return statearr_16488;
})();
var statearr_16489_16516 = state_16470__$1;
(statearr_16489_16516[(2)] = inst_16464);

(statearr_16489_16516[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (10))){
var inst_16454 = (state_16470[(2)]);
var state_16470__$1 = state_16470;
var statearr_16490_16517 = state_16470__$1;
(statearr_16490_16517[(2)] = inst_16454);

(statearr_16490_16517[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16471 === (8))){
var inst_16443 = (state_16470[(11)]);
var inst_16434 = (state_16470[(8)]);
var tmp16487 = inst_16434;
var inst_16434__$1 = tmp16487;
var inst_16435 = inst_16443;
var state_16470__$1 = (function (){var statearr_16491 = state_16470;
(statearr_16491[(7)] = inst_16435);

(statearr_16491[(8)] = inst_16434__$1);

return statearr_16491;
})();
var statearr_16492_16518 = state_16470__$1;
(statearr_16492_16518[(2)] = null);

(statearr_16492_16518[(1)] = (2));


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
});})(c__13795__auto___16504,out))
;
return ((function (switch__13681__auto__,c__13795__auto___16504,out){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_16496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16496[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_16496[(1)] = (1));

return statearr_16496;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_16470){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_16470);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e16497){if((e16497 instanceof Object)){
var ex__13685__auto__ = e16497;
var statearr_16498_16519 = state_16470;
(statearr_16498_16519[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16470);

return cljs.core.cst$kw$recur;
} else {
throw e16497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__16520 = state_16470;
state_16470 = G__16520;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_16470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_16470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___16504,out))
})();
var state__13797__auto__ = (function (){var statearr_16499 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_16499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___16504);

return statearr_16499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___16504,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16521 = [];
var len__7652__auto___16595 = arguments.length;
var i__7653__auto___16596 = (0);
while(true){
if((i__7653__auto___16596 < len__7652__auto___16595)){
args16521.push((arguments[i__7653__auto___16596]));

var G__16597 = (i__7653__auto___16596 + (1));
i__7653__auto___16596 = G__16597;
continue;
} else {
}
break;
}

var G__16523 = args16521.length;
switch (G__16523) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16521.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13795__auto___16599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___16599,out){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___16599,out){
return (function (state_16565){
var state_val_16566 = (state_16565[(1)]);
if((state_val_16566 === (7))){
var inst_16561 = (state_16565[(2)]);
var state_16565__$1 = state_16565;
var statearr_16567_16600 = state_16565__$1;
(statearr_16567_16600[(2)] = inst_16561);

(statearr_16567_16600[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (1))){
var inst_16524 = [];
var inst_16525 = inst_16524;
var inst_16526 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16565__$1 = (function (){var statearr_16568 = state_16565;
(statearr_16568[(7)] = inst_16526);

(statearr_16568[(8)] = inst_16525);

return statearr_16568;
})();
var statearr_16569_16601 = state_16565__$1;
(statearr_16569_16601[(2)] = null);

(statearr_16569_16601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (4))){
var inst_16529 = (state_16565[(9)]);
var inst_16529__$1 = (state_16565[(2)]);
var inst_16530 = (inst_16529__$1 == null);
var inst_16531 = cljs.core.not(inst_16530);
var state_16565__$1 = (function (){var statearr_16570 = state_16565;
(statearr_16570[(9)] = inst_16529__$1);

return statearr_16570;
})();
if(inst_16531){
var statearr_16571_16602 = state_16565__$1;
(statearr_16571_16602[(1)] = (5));

} else {
var statearr_16572_16603 = state_16565__$1;
(statearr_16572_16603[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (15))){
var inst_16555 = (state_16565[(2)]);
var state_16565__$1 = state_16565;
var statearr_16573_16604 = state_16565__$1;
(statearr_16573_16604[(2)] = inst_16555);

(statearr_16573_16604[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (13))){
var state_16565__$1 = state_16565;
var statearr_16574_16605 = state_16565__$1;
(statearr_16574_16605[(2)] = null);

(statearr_16574_16605[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (6))){
var inst_16525 = (state_16565[(8)]);
var inst_16550 = inst_16525.length;
var inst_16551 = (inst_16550 > (0));
var state_16565__$1 = state_16565;
if(cljs.core.truth_(inst_16551)){
var statearr_16575_16606 = state_16565__$1;
(statearr_16575_16606[(1)] = (12));

} else {
var statearr_16576_16607 = state_16565__$1;
(statearr_16576_16607[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (3))){
var inst_16563 = (state_16565[(2)]);
var state_16565__$1 = state_16565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16565__$1,inst_16563);
} else {
if((state_val_16566 === (12))){
var inst_16525 = (state_16565[(8)]);
var inst_16553 = cljs.core.vec(inst_16525);
var state_16565__$1 = state_16565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16565__$1,(15),out,inst_16553);
} else {
if((state_val_16566 === (2))){
var state_16565__$1 = state_16565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16565__$1,(4),ch);
} else {
if((state_val_16566 === (11))){
var inst_16529 = (state_16565[(9)]);
var inst_16533 = (state_16565[(10)]);
var inst_16543 = (state_16565[(2)]);
var inst_16544 = [];
var inst_16545 = inst_16544.push(inst_16529);
var inst_16525 = inst_16544;
var inst_16526 = inst_16533;
var state_16565__$1 = (function (){var statearr_16577 = state_16565;
(statearr_16577[(11)] = inst_16545);

(statearr_16577[(7)] = inst_16526);

(statearr_16577[(8)] = inst_16525);

(statearr_16577[(12)] = inst_16543);

return statearr_16577;
})();
var statearr_16578_16608 = state_16565__$1;
(statearr_16578_16608[(2)] = null);

(statearr_16578_16608[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (9))){
var inst_16525 = (state_16565[(8)]);
var inst_16541 = cljs.core.vec(inst_16525);
var state_16565__$1 = state_16565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16565__$1,(11),out,inst_16541);
} else {
if((state_val_16566 === (5))){
var inst_16529 = (state_16565[(9)]);
var inst_16533 = (state_16565[(10)]);
var inst_16526 = (state_16565[(7)]);
var inst_16533__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16529) : f.call(null,inst_16529));
var inst_16534 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16533__$1,inst_16526);
var inst_16535 = cljs.core.keyword_identical_QMARK_(inst_16526,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16536 = (inst_16534) || (inst_16535);
var state_16565__$1 = (function (){var statearr_16579 = state_16565;
(statearr_16579[(10)] = inst_16533__$1);

return statearr_16579;
})();
if(cljs.core.truth_(inst_16536)){
var statearr_16580_16609 = state_16565__$1;
(statearr_16580_16609[(1)] = (8));

} else {
var statearr_16581_16610 = state_16565__$1;
(statearr_16581_16610[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (14))){
var inst_16558 = (state_16565[(2)]);
var inst_16559 = cljs.core.async.close_BANG_(out);
var state_16565__$1 = (function (){var statearr_16583 = state_16565;
(statearr_16583[(13)] = inst_16558);

return statearr_16583;
})();
var statearr_16584_16611 = state_16565__$1;
(statearr_16584_16611[(2)] = inst_16559);

(statearr_16584_16611[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (10))){
var inst_16548 = (state_16565[(2)]);
var state_16565__$1 = state_16565;
var statearr_16585_16612 = state_16565__$1;
(statearr_16585_16612[(2)] = inst_16548);

(statearr_16585_16612[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16566 === (8))){
var inst_16529 = (state_16565[(9)]);
var inst_16533 = (state_16565[(10)]);
var inst_16525 = (state_16565[(8)]);
var inst_16538 = inst_16525.push(inst_16529);
var tmp16582 = inst_16525;
var inst_16525__$1 = tmp16582;
var inst_16526 = inst_16533;
var state_16565__$1 = (function (){var statearr_16586 = state_16565;
(statearr_16586[(14)] = inst_16538);

(statearr_16586[(7)] = inst_16526);

(statearr_16586[(8)] = inst_16525__$1);

return statearr_16586;
})();
var statearr_16587_16613 = state_16565__$1;
(statearr_16587_16613[(2)] = null);

(statearr_16587_16613[(1)] = (2));


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
});})(c__13795__auto___16599,out))
;
return ((function (switch__13681__auto__,c__13795__auto___16599,out){
return (function() {
var cljs$core$async$state_machine__13682__auto__ = null;
var cljs$core$async$state_machine__13682__auto____0 = (function (){
var statearr_16591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16591[(0)] = cljs$core$async$state_machine__13682__auto__);

(statearr_16591[(1)] = (1));

return statearr_16591;
});
var cljs$core$async$state_machine__13682__auto____1 = (function (state_16565){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_16565);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e16592){if((e16592 instanceof Object)){
var ex__13685__auto__ = e16592;
var statearr_16593_16614 = state_16565;
(statearr_16593_16614[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16565);

return cljs.core.cst$kw$recur;
} else {
throw e16592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__16615 = state_16565;
state_16565 = G__16615;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs$core$async$state_machine__13682__auto__ = function(state_16565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13682__auto____1.call(this,state_16565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13682__auto____0;
cljs$core$async$state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13682__auto____1;
return cljs$core$async$state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___16599,out))
})();
var state__13797__auto__ = (function (){var statearr_16594 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_16594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___16599);

return statearr_16594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___16599,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

