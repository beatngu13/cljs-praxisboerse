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
cljs_http.core.pending_requests = (function (){var G__18850 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18850) : cljs.core.atom.call(null,G__18850));
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
return (function (p__18855){
var vec__18856 = p__18855;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18856,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__18860 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__18860)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__18860)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__18860)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__18860)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__18860)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18860)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__18861){
var map__18865 = p__18861;
var map__18865__$1 = ((((!((map__18865 == null)))?((((map__18865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18865):map__18865);
var request = map__18865__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18865__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18865__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18865__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6577__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__18867 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__18867,default_headers);

cljs_http.core.apply_response_type_BANG_(G__18867,response_type);

G__18867.setTimeoutInterval(timeout);

G__18867.setWithCredentials(send_credentials);

return G__18867;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__18868){
var map__18897 = p__18868;
var map__18897__$1 = ((((!((map__18897 == null)))?((((map__18897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18897):map__18897);
var request = map__18897__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18897__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18897__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18897__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18897__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18897__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18897__$1,cljs.core.cst$kw$progress);
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

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__18899 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__18899) : cljs_http.core.error_kw.call(null,G__18899));
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_18925 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__18900_18926 = xhr__$1;
G__18900_18926.setProgressEventsEnabled(true);

G__18900_18926.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18925,cljs.core.cst$kw$upload));

G__18900_18926.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18925,cljs.core.cst$kw$download));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13795__auto___18927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___18927,channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___18927,channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_18911){
var state_val_18912 = (state_18911[(1)]);
if((state_val_18912 === (1))){
var state_18911__$1 = state_18911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18911__$1,(2),cancel);
} else {
if((state_val_18912 === (2))){
var inst_18902 = (state_18911[(2)]);
var inst_18903 = xhr__$1.isComplete();
var inst_18904 = cljs.core.not(inst_18903);
var state_18911__$1 = (function (){var statearr_18913 = state_18911;
(statearr_18913[(7)] = inst_18902);

return statearr_18913;
})();
if(inst_18904){
var statearr_18914_18928 = state_18911__$1;
(statearr_18914_18928[(1)] = (3));

} else {
var statearr_18915_18929 = state_18911__$1;
(statearr_18915_18929[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18912 === (3))){
var inst_18906 = xhr__$1.abort();
var state_18911__$1 = state_18911;
var statearr_18916_18930 = state_18911__$1;
(statearr_18916_18930[(2)] = inst_18906);

(statearr_18916_18930[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18912 === (4))){
var state_18911__$1 = state_18911;
var statearr_18917_18931 = state_18911__$1;
(statearr_18917_18931[(2)] = null);

(statearr_18917_18931[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18912 === (5))){
var inst_18909 = (state_18911[(2)]);
var state_18911__$1 = state_18911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18911__$1,inst_18909);
} else {
return null;
}
}
}
}
}
});})(c__13795__auto___18927,channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__13681__auto__,c__13795__auto___18927,channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__13682__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13682__auto____0 = (function (){
var statearr_18921 = [null,null,null,null,null,null,null,null];
(statearr_18921[(0)] = cljs_http$core$xhr_$_state_machine__13682__auto__);

(statearr_18921[(1)] = (1));

return statearr_18921;
});
var cljs_http$core$xhr_$_state_machine__13682__auto____1 = (function (state_18911){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_18911);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e18922){if((e18922 instanceof Object)){
var ex__13685__auto__ = e18922;
var statearr_18923_18932 = state_18911;
(statearr_18923_18932[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18911);

return cljs.core.cst$kw$recur;
} else {
throw e18922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__18933 = state_18911;
state_18911 = G__18933;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13682__auto__ = function(state_18911){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13682__auto____1.call(this,state_18911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13682__auto____0;
cljs_http$core$xhr_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13682__auto____1;
return cljs_http$core$xhr_$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___18927,channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__13797__auto__ = (function (){var statearr_18924 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_18924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___18927);

return statearr_18924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___18927,channel,request_url,method,headers__$1,xhr__$1,map__18897,map__18897__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__18934){
var map__18951 = p__18934;
var map__18951__$1 = ((((!((map__18951 == null)))?((((map__18951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18951):map__18951);
var request = map__18951__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18951__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18951__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18951__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18951__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_18967 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_18967], null));

if(cljs.core.truth_(cancel)){
var c__13795__auto___18968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___18968,req_18967,channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___18968,req_18967,channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_18957){
var state_val_18958 = (state_18957[(1)]);
if((state_val_18958 === (1))){
var state_18957__$1 = state_18957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18957__$1,(2),cancel);
} else {
if((state_val_18958 === (2))){
var inst_18954 = (state_18957[(2)]);
var inst_18955 = jsonp__$1.cancel(req_18967);
var state_18957__$1 = (function (){var statearr_18959 = state_18957;
(statearr_18959[(7)] = inst_18954);

return statearr_18959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18957__$1,inst_18955);
} else {
return null;
}
}
});})(c__13795__auto___18968,req_18967,channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13681__auto__,c__13795__auto___18968,req_18967,channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13682__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13682__auto____0 = (function (){
var statearr_18963 = [null,null,null,null,null,null,null,null];
(statearr_18963[(0)] = cljs_http$core$jsonp_$_state_machine__13682__auto__);

(statearr_18963[(1)] = (1));

return statearr_18963;
});
var cljs_http$core$jsonp_$_state_machine__13682__auto____1 = (function (state_18957){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_18957);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e18964){if((e18964 instanceof Object)){
var ex__13685__auto__ = e18964;
var statearr_18965_18969 = state_18957;
(statearr_18965_18969[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18957);

return cljs.core.cst$kw$recur;
} else {
throw e18964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__18970 = state_18957;
state_18957 = G__18970;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13682__auto__ = function(state_18957){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13682__auto____1.call(this,state_18957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13682__auto____0;
cljs_http$core$jsonp_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13682__auto____1;
return cljs_http$core$jsonp_$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___18968,req_18967,channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__13797__auto__ = (function (){var statearr_18966 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_18966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___18968);

return statearr_18966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___18968,req_18967,channel,jsonp__$1,map__18951,map__18951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__18971){
var map__18974 = p__18971;
var map__18974__$1 = ((((!((map__18974 == null)))?((((map__18974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18974):map__18974);
var request__$1 = map__18974__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18974__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
