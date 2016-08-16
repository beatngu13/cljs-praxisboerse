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
cljs_http.core.pending_requests = (function (){var G__18354 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18354) : cljs.core.atom.call(null,G__18354));
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
return (function (p__18359){
var vec__18360 = p__18359;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18360,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18360,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__18364 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__18364)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__18364)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__18364)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__18364)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__18364)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18364)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__18365){
var map__18369 = p__18365;
var map__18369__$1 = ((((!((map__18369 == null)))?((((map__18369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18369):map__18369);
var request = map__18369__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18369__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18369__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18369__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6577__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__18371 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__18371,default_headers);

cljs_http.core.apply_response_type_BANG_(G__18371,response_type);

G__18371.setTimeoutInterval(timeout);

G__18371.setWithCredentials(send_credentials);

return G__18371;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__18372){
var map__18401 = p__18372;
var map__18401__$1 = ((((!((map__18401 == null)))?((((map__18401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18401):map__18401);
var request = map__18401__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,cljs.core.cst$kw$progress);
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

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__18403 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__18403) : cljs_http.core.error_kw.call(null,G__18403));
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_18429 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__18404_18430 = xhr__$1;
G__18404_18430.setProgressEventsEnabled(true);

G__18404_18430.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18429,cljs.core.cst$kw$upload));

G__18404_18430.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18429,cljs.core.cst$kw$download));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13795__auto___18431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___18431,channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___18431,channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_18415){
var state_val_18416 = (state_18415[(1)]);
if((state_val_18416 === (1))){
var state_18415__$1 = state_18415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18415__$1,(2),cancel);
} else {
if((state_val_18416 === (2))){
var inst_18406 = (state_18415[(2)]);
var inst_18407 = xhr__$1.isComplete();
var inst_18408 = cljs.core.not(inst_18407);
var state_18415__$1 = (function (){var statearr_18417 = state_18415;
(statearr_18417[(7)] = inst_18406);

return statearr_18417;
})();
if(inst_18408){
var statearr_18418_18432 = state_18415__$1;
(statearr_18418_18432[(1)] = (3));

} else {
var statearr_18419_18433 = state_18415__$1;
(statearr_18419_18433[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18416 === (3))){
var inst_18410 = xhr__$1.abort();
var state_18415__$1 = state_18415;
var statearr_18420_18434 = state_18415__$1;
(statearr_18420_18434[(2)] = inst_18410);

(statearr_18420_18434[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18416 === (4))){
var state_18415__$1 = state_18415;
var statearr_18421_18435 = state_18415__$1;
(statearr_18421_18435[(2)] = null);

(statearr_18421_18435[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18416 === (5))){
var inst_18413 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18415__$1,inst_18413);
} else {
return null;
}
}
}
}
}
});})(c__13795__auto___18431,channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__13681__auto__,c__13795__auto___18431,channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__13682__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13682__auto____0 = (function (){
var statearr_18425 = [null,null,null,null,null,null,null,null];
(statearr_18425[(0)] = cljs_http$core$xhr_$_state_machine__13682__auto__);

(statearr_18425[(1)] = (1));

return statearr_18425;
});
var cljs_http$core$xhr_$_state_machine__13682__auto____1 = (function (state_18415){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_18415);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e18426){if((e18426 instanceof Object)){
var ex__13685__auto__ = e18426;
var statearr_18427_18436 = state_18415;
(statearr_18427_18436[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18415);

return cljs.core.cst$kw$recur;
} else {
throw e18426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__18437 = state_18415;
state_18415 = G__18437;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13682__auto__ = function(state_18415){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13682__auto____1.call(this,state_18415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13682__auto____0;
cljs_http$core$xhr_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13682__auto____1;
return cljs_http$core$xhr_$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___18431,channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__13797__auto__ = (function (){var statearr_18428 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_18428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___18431);

return statearr_18428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___18431,channel,request_url,method,headers__$1,xhr__$1,map__18401,map__18401__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__18438){
var map__18455 = p__18438;
var map__18455__$1 = ((((!((map__18455 == null)))?((((map__18455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18455):map__18455);
var request = map__18455__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18455__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18455__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18455__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18455__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_18471 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_18471], null));

if(cljs.core.truth_(cancel)){
var c__13795__auto___18472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___18472,req_18471,channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___18472,req_18471,channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_18461){
var state_val_18462 = (state_18461[(1)]);
if((state_val_18462 === (1))){
var state_18461__$1 = state_18461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18461__$1,(2),cancel);
} else {
if((state_val_18462 === (2))){
var inst_18458 = (state_18461[(2)]);
var inst_18459 = jsonp__$1.cancel(req_18471);
var state_18461__$1 = (function (){var statearr_18463 = state_18461;
(statearr_18463[(7)] = inst_18458);

return statearr_18463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18461__$1,inst_18459);
} else {
return null;
}
}
});})(c__13795__auto___18472,req_18471,channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13681__auto__,c__13795__auto___18472,req_18471,channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13682__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13682__auto____0 = (function (){
var statearr_18467 = [null,null,null,null,null,null,null,null];
(statearr_18467[(0)] = cljs_http$core$jsonp_$_state_machine__13682__auto__);

(statearr_18467[(1)] = (1));

return statearr_18467;
});
var cljs_http$core$jsonp_$_state_machine__13682__auto____1 = (function (state_18461){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_18461);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e18468){if((e18468 instanceof Object)){
var ex__13685__auto__ = e18468;
var statearr_18469_18473 = state_18461;
(statearr_18469_18473[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18461);

return cljs.core.cst$kw$recur;
} else {
throw e18468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__18474 = state_18461;
state_18461 = G__18474;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13682__auto__ = function(state_18461){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13682__auto____1.call(this,state_18461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13682__auto____0;
cljs_http$core$jsonp_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13682__auto____1;
return cljs_http$core$jsonp_$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___18472,req_18471,channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__13797__auto__ = (function (){var statearr_18470 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_18470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___18472);

return statearr_18470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___18472,req_18471,channel,jsonp__$1,map__18455,map__18455__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__18475){
var map__18478 = p__18475;
var map__18478__$1 = ((((!((map__18478 == null)))?((((map__18478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18478):map__18478);
var request__$1 = map__18478__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
