// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__18551 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18551) : cljs.core.atom.call(null,G__18551));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__18556){
var vec__18557 = p__18556;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18557,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__18561 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__18561)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__18561)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__18561)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__18561)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__18561)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18561)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__18562){
var map__18566 = p__18562;
var map__18566__$1 = ((((!((map__18566 == null)))?((((map__18566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18566):map__18566);
var request = map__18566__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18566__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18566__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18566__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6577__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__18568 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__18568,default_headers);

cljs_http.core.apply_response_type_BANG_(G__18568,response_type);

G__18568.setTimeoutInterval(timeout);

G__18568.setWithCredentials(send_credentials);

return G__18568;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__18569){
var map__18598 = p__18569;
var map__18598__$1 = ((((!((map__18598 == null)))?((((map__18598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18598):map__18598);
var request = map__18598__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18598__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18598__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18598__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18598__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18598__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18598__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__6577__auto__ = request_method;
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__18600 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__18600) : cljs_http.core.error_kw.call(null,G__18600));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr__$1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_18626 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__18601_18627 = xhr__$1;
G__18601_18627.setProgressEventsEnabled(true);

G__18601_18627.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18626,cljs.core.cst$kw$upload));

G__18601_18627.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18626,cljs.core.cst$kw$download));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15461__auto___18628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___18628,channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___18628,channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_18612){
var state_val_18613 = (state_18612[(1)]);
if((state_val_18613 === (1))){
var state_18612__$1 = state_18612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18612__$1,(2),cancel);
} else {
if((state_val_18613 === (2))){
var inst_18603 = (state_18612[(2)]);
var inst_18604 = xhr__$1.isComplete();
var inst_18605 = cljs.core.not(inst_18604);
var state_18612__$1 = (function (){var statearr_18614 = state_18612;
(statearr_18614[(7)] = inst_18603);

return statearr_18614;
})();
if(inst_18605){
var statearr_18615_18629 = state_18612__$1;
(statearr_18615_18629[(1)] = (3));

} else {
var statearr_18616_18630 = state_18612__$1;
(statearr_18616_18630[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18613 === (3))){
var inst_18607 = xhr__$1.abort();
var state_18612__$1 = state_18612;
var statearr_18617_18631 = state_18612__$1;
(statearr_18617_18631[(2)] = inst_18607);

(statearr_18617_18631[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18613 === (4))){
var state_18612__$1 = state_18612;
var statearr_18618_18632 = state_18612__$1;
(statearr_18618_18632[(2)] = null);

(statearr_18618_18632[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18613 === (5))){
var inst_18610 = (state_18612[(2)]);
var state_18612__$1 = state_18612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18612__$1,inst_18610);
} else {
return null;
}
}
}
}
}
});})(c__15461__auto___18628,channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__15347__auto__,c__15461__auto___18628,channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__15348__auto__ = null;
var cljs_http$core$xhr_$_state_machine__15348__auto____0 = (function (){
var statearr_18622 = [null,null,null,null,null,null,null,null];
(statearr_18622[(0)] = cljs_http$core$xhr_$_state_machine__15348__auto__);

(statearr_18622[(1)] = (1));

return statearr_18622;
});
var cljs_http$core$xhr_$_state_machine__15348__auto____1 = (function (state_18612){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_18612);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e18623){if((e18623 instanceof Object)){
var ex__15351__auto__ = e18623;
var statearr_18624_18633 = state_18612;
(statearr_18624_18633[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18612);

return cljs.core.cst$kw$recur;
} else {
throw e18623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__18634 = state_18612;
state_18612 = G__18634;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__15348__auto__ = function(state_18612){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__15348__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__15348__auto____1.call(this,state_18612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__15348__auto____0;
cljs_http$core$xhr_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__15348__auto____1;
return cljs_http$core$xhr_$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___18628,channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__15463__auto__ = (function (){var statearr_18625 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_18625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___18628);

return statearr_18625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___18628,channel,request_url,method,headers__$1,xhr__$1,map__18598,map__18598__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__18635){
var map__18652 = p__18635;
var map__18652__$1 = ((((!((map__18652 == null)))?((((map__18652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18652):map__18652);
var request = map__18652__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18652__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18652__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18652__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18652__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_18668 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_18668], null));

if(cljs.core.truth_(cancel)){
var c__15461__auto___18669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15461__auto___18669,req_18668,channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__15462__auto__ = (function (){var switch__15347__auto__ = ((function (c__15461__auto___18669,req_18668,channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_18658){
var state_val_18659 = (state_18658[(1)]);
if((state_val_18659 === (1))){
var state_18658__$1 = state_18658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18658__$1,(2),cancel);
} else {
if((state_val_18659 === (2))){
var inst_18655 = (state_18658[(2)]);
var inst_18656 = jsonp__$1.cancel(req_18668);
var state_18658__$1 = (function (){var statearr_18660 = state_18658;
(statearr_18660[(7)] = inst_18655);

return statearr_18660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18658__$1,inst_18656);
} else {
return null;
}
}
});})(c__15461__auto___18669,req_18668,channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__15347__auto__,c__15461__auto___18669,req_18668,channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__15348__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__15348__auto____0 = (function (){
var statearr_18664 = [null,null,null,null,null,null,null,null];
(statearr_18664[(0)] = cljs_http$core$jsonp_$_state_machine__15348__auto__);

(statearr_18664[(1)] = (1));

return statearr_18664;
});
var cljs_http$core$jsonp_$_state_machine__15348__auto____1 = (function (state_18658){
while(true){
var ret_value__15349__auto__ = (function (){try{while(true){
var result__15350__auto__ = switch__15347__auto__(state_18658);
if(cljs.core.keyword_identical_QMARK_(result__15350__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15350__auto__;
}
break;
}
}catch (e18665){if((e18665 instanceof Object)){
var ex__15351__auto__ = e18665;
var statearr_18666_18670 = state_18658;
(statearr_18666_18670[(5)] = ex__15351__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18658);

return cljs.core.cst$kw$recur;
} else {
throw e18665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15349__auto__,cljs.core.cst$kw$recur)){
var G__18671 = state_18658;
state_18658 = G__18671;
continue;
} else {
return ret_value__15349__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__15348__auto__ = function(state_18658){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__15348__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__15348__auto____1.call(this,state_18658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__15348__auto____0;
cljs_http$core$jsonp_$_state_machine__15348__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__15348__auto____1;
return cljs_http$core$jsonp_$_state_machine__15348__auto__;
})()
;})(switch__15347__auto__,c__15461__auto___18669,req_18668,channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__15463__auto__ = (function (){var statearr_18667 = (f__15462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15462__auto__.cljs$core$IFn$_invoke$arity$0() : f__15462__auto__.call(null));
(statearr_18667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15461__auto___18669);

return statearr_18667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15463__auto__);
});})(c__15461__auto___18669,req_18668,channel,jsonp__$1,map__18652,map__18652__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__18672){
var map__18675 = p__18672;
var map__18675__$1 = ((((!((map__18675 == null)))?((((map__18675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18675):map__18675);
var request__$1 = map__18675__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
