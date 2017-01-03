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
cljs_http.core.pending_requests = (function (){var G__19172 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19172) : cljs.core.atom.call(null,G__19172));
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
return (function (p__19177){
var vec__19178 = p__19177;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19178,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__19182 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__19182)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__19182)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__19182)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__19182)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__19182)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__19182)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__19183){
var map__19187 = p__19183;
var map__19187__$1 = ((((!((map__19187 == null)))?((((map__19187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19187):map__19187);
var request = map__19187__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19187__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19187__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19187__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6577__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19189 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__19189,default_headers);

cljs_http.core.apply_response_type_BANG_(G__19189,response_type);

G__19189.setTimeoutInterval(timeout);

G__19189.setWithCredentials(send_credentials);

return G__19189;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__19190){
var map__19219 = p__19190;
var map__19219__$1 = ((((!((map__19219 == null)))?((((map__19219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19219):map__19219);
var request = map__19219__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,cljs.core.cst$kw$progress);
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

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__19221 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__19221) : cljs_http.core.error_kw.call(null,G__19221));
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_19247 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__19222_19248 = xhr__$1;
G__19222_19248.setProgressEventsEnabled(true);

G__19222_19248.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19247,cljs.core.cst$kw$upload));

G__19222_19248.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19247,cljs.core.cst$kw$download));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13795__auto___19249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___19249,channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___19249,channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_19233){
var state_val_19234 = (state_19233[(1)]);
if((state_val_19234 === (1))){
var state_19233__$1 = state_19233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19233__$1,(2),cancel);
} else {
if((state_val_19234 === (2))){
var inst_19224 = (state_19233[(2)]);
var inst_19225 = xhr__$1.isComplete();
var inst_19226 = cljs.core.not(inst_19225);
var state_19233__$1 = (function (){var statearr_19235 = state_19233;
(statearr_19235[(7)] = inst_19224);

return statearr_19235;
})();
if(inst_19226){
var statearr_19236_19250 = state_19233__$1;
(statearr_19236_19250[(1)] = (3));

} else {
var statearr_19237_19251 = state_19233__$1;
(statearr_19237_19251[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19234 === (3))){
var inst_19228 = xhr__$1.abort();
var state_19233__$1 = state_19233;
var statearr_19238_19252 = state_19233__$1;
(statearr_19238_19252[(2)] = inst_19228);

(statearr_19238_19252[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19234 === (4))){
var state_19233__$1 = state_19233;
var statearr_19239_19253 = state_19233__$1;
(statearr_19239_19253[(2)] = null);

(statearr_19239_19253[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19234 === (5))){
var inst_19231 = (state_19233[(2)]);
var state_19233__$1 = state_19233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19233__$1,inst_19231);
} else {
return null;
}
}
}
}
}
});})(c__13795__auto___19249,channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__13681__auto__,c__13795__auto___19249,channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__13682__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13682__auto____0 = (function (){
var statearr_19243 = [null,null,null,null,null,null,null,null];
(statearr_19243[(0)] = cljs_http$core$xhr_$_state_machine__13682__auto__);

(statearr_19243[(1)] = (1));

return statearr_19243;
});
var cljs_http$core$xhr_$_state_machine__13682__auto____1 = (function (state_19233){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_19233);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e19244){if((e19244 instanceof Object)){
var ex__13685__auto__ = e19244;
var statearr_19245_19254 = state_19233;
(statearr_19245_19254[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19233);

return cljs.core.cst$kw$recur;
} else {
throw e19244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__19255 = state_19233;
state_19233 = G__19255;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13682__auto__ = function(state_19233){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13682__auto____1.call(this,state_19233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13682__auto____0;
cljs_http$core$xhr_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13682__auto____1;
return cljs_http$core$xhr_$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___19249,channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__13797__auto__ = (function (){var statearr_19246 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_19246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___19249);

return statearr_19246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___19249,channel,request_url,method,headers__$1,xhr__$1,map__19219,map__19219__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__19256){
var map__19273 = p__19256;
var map__19273__$1 = ((((!((map__19273 == null)))?((((map__19273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19273):map__19273);
var request = map__19273__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19273__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_19289 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_19289], null));

if(cljs.core.truth_(cancel)){
var c__13795__auto___19290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13795__auto___19290,req_19289,channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__13796__auto__ = (function (){var switch__13681__auto__ = ((function (c__13795__auto___19290,req_19289,channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_19279){
var state_val_19280 = (state_19279[(1)]);
if((state_val_19280 === (1))){
var state_19279__$1 = state_19279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19279__$1,(2),cancel);
} else {
if((state_val_19280 === (2))){
var inst_19276 = (state_19279[(2)]);
var inst_19277 = jsonp__$1.cancel(req_19289);
var state_19279__$1 = (function (){var statearr_19281 = state_19279;
(statearr_19281[(7)] = inst_19276);

return statearr_19281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19279__$1,inst_19277);
} else {
return null;
}
}
});})(c__13795__auto___19290,req_19289,channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13681__auto__,c__13795__auto___19290,req_19289,channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13682__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13682__auto____0 = (function (){
var statearr_19285 = [null,null,null,null,null,null,null,null];
(statearr_19285[(0)] = cljs_http$core$jsonp_$_state_machine__13682__auto__);

(statearr_19285[(1)] = (1));

return statearr_19285;
});
var cljs_http$core$jsonp_$_state_machine__13682__auto____1 = (function (state_19279){
while(true){
var ret_value__13683__auto__ = (function (){try{while(true){
var result__13684__auto__ = switch__13681__auto__(state_19279);
if(cljs.core.keyword_identical_QMARK_(result__13684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13684__auto__;
}
break;
}
}catch (e19286){if((e19286 instanceof Object)){
var ex__13685__auto__ = e19286;
var statearr_19287_19291 = state_19279;
(statearr_19287_19291[(5)] = ex__13685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19279);

return cljs.core.cst$kw$recur;
} else {
throw e19286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13683__auto__,cljs.core.cst$kw$recur)){
var G__19292 = state_19279;
state_19279 = G__19292;
continue;
} else {
return ret_value__13683__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13682__auto__ = function(state_19279){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13682__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13682__auto____1.call(this,state_19279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13682__auto____0;
cljs_http$core$jsonp_$_state_machine__13682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13682__auto____1;
return cljs_http$core$jsonp_$_state_machine__13682__auto__;
})()
;})(switch__13681__auto__,c__13795__auto___19290,req_19289,channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__13797__auto__ = (function (){var statearr_19288 = (f__13796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13796__auto__.cljs$core$IFn$_invoke$arity$0() : f__13796__auto__.call(null));
(statearr_19288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13795__auto___19290);

return statearr_19288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13797__auto__);
});})(c__13795__auto___19290,req_19289,channel,jsonp__$1,map__19273,map__19273__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__19293){
var map__19296 = p__19293;
var map__19296__$1 = ((((!((map__19296 == null)))?((((map__19296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19296):map__19296);
var request__$1 = map__19296__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19296__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
