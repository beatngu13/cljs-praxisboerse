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
cljs_http.core.pending_requests = (function (){var G__19212 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19212) : cljs.core.atom.call(null,G__19212));
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
return (function (p__19217){
var vec__19218 = p__19217;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19218,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__19222 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__19222)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__19222)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__19222)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__19222)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__19222)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__19222)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__19223){
var map__19227 = p__19223;
var map__19227__$1 = ((((!((map__19227 == null)))?((((map__19227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19227):map__19227);
var request = map__19227__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19227__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19227__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19227__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6577__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19229 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__19229,default_headers);

cljs_http.core.apply_response_type_BANG_(G__19229,response_type);

G__19229.setTimeoutInterval(timeout);

G__19229.setWithCredentials(send_credentials);

return G__19229;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__19230){
var map__19259 = p__19230;
var map__19259__$1 = ((((!((map__19259 == null)))?((((map__19259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19259):map__19259);
var request = map__19259__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$progress);
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

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__19261 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__19261) : cljs_http.core.error_kw.call(null,G__19261));
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_19287 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__19262_19288 = xhr__$1;
G__19262_19288.setProgressEventsEnabled(true);

G__19262_19288.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19287,cljs.core.cst$kw$upload));

G__19262_19288.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19287,cljs.core.cst$kw$download));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__16389__auto___19289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___19289,channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___19289,channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_19273){
var state_val_19274 = (state_19273[(1)]);
if((state_val_19274 === (1))){
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19273__$1,(2),cancel);
} else {
if((state_val_19274 === (2))){
var inst_19264 = (state_19273[(2)]);
var inst_19265 = xhr__$1.isComplete();
var inst_19266 = cljs.core.not(inst_19265);
var state_19273__$1 = (function (){var statearr_19275 = state_19273;
(statearr_19275[(7)] = inst_19264);

return statearr_19275;
})();
if(inst_19266){
var statearr_19276_19290 = state_19273__$1;
(statearr_19276_19290[(1)] = (3));

} else {
var statearr_19277_19291 = state_19273__$1;
(statearr_19277_19291[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19274 === (3))){
var inst_19268 = xhr__$1.abort();
var state_19273__$1 = state_19273;
var statearr_19278_19292 = state_19273__$1;
(statearr_19278_19292[(2)] = inst_19268);

(statearr_19278_19292[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19274 === (4))){
var state_19273__$1 = state_19273;
var statearr_19279_19293 = state_19273__$1;
(statearr_19279_19293[(2)] = null);

(statearr_19279_19293[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19274 === (5))){
var inst_19271 = (state_19273[(2)]);
var state_19273__$1 = state_19273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19273__$1,inst_19271);
} else {
return null;
}
}
}
}
}
});})(c__16389__auto___19289,channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__16275__auto__,c__16389__auto___19289,channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__16276__auto__ = null;
var cljs_http$core$xhr_$_state_machine__16276__auto____0 = (function (){
var statearr_19283 = [null,null,null,null,null,null,null,null];
(statearr_19283[(0)] = cljs_http$core$xhr_$_state_machine__16276__auto__);

(statearr_19283[(1)] = (1));

return statearr_19283;
});
var cljs_http$core$xhr_$_state_machine__16276__auto____1 = (function (state_19273){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_19273);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e19284){if((e19284 instanceof Object)){
var ex__16279__auto__ = e19284;
var statearr_19285_19294 = state_19273;
(statearr_19285_19294[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19273);

return cljs.core.cst$kw$recur;
} else {
throw e19284;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__19295 = state_19273;
state_19273 = G__19295;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__16276__auto__ = function(state_19273){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__16276__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__16276__auto____1.call(this,state_19273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__16276__auto____0;
cljs_http$core$xhr_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__16276__auto____1;
return cljs_http$core$xhr_$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___19289,channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__16391__auto__ = (function (){var statearr_19286 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_19286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___19289);

return statearr_19286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___19289,channel,request_url,method,headers__$1,xhr__$1,map__19259,map__19259__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__19296){
var map__19313 = p__19296;
var map__19313__$1 = ((((!((map__19313 == null)))?((((map__19313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19313):map__19313);
var request = map__19313__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19313__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19313__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19313__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19313__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_19329 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_19329], null));

if(cljs.core.truth_(cancel)){
var c__16389__auto___19330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16389__auto___19330,req_19329,channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__16390__auto__ = (function (){var switch__16275__auto__ = ((function (c__16389__auto___19330,req_19329,channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_19319){
var state_val_19320 = (state_19319[(1)]);
if((state_val_19320 === (1))){
var state_19319__$1 = state_19319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19319__$1,(2),cancel);
} else {
if((state_val_19320 === (2))){
var inst_19316 = (state_19319[(2)]);
var inst_19317 = jsonp__$1.cancel(req_19329);
var state_19319__$1 = (function (){var statearr_19321 = state_19319;
(statearr_19321[(7)] = inst_19316);

return statearr_19321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19319__$1,inst_19317);
} else {
return null;
}
}
});})(c__16389__auto___19330,req_19329,channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__16275__auto__,c__16389__auto___19330,req_19329,channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__16276__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__16276__auto____0 = (function (){
var statearr_19325 = [null,null,null,null,null,null,null,null];
(statearr_19325[(0)] = cljs_http$core$jsonp_$_state_machine__16276__auto__);

(statearr_19325[(1)] = (1));

return statearr_19325;
});
var cljs_http$core$jsonp_$_state_machine__16276__auto____1 = (function (state_19319){
while(true){
var ret_value__16277__auto__ = (function (){try{while(true){
var result__16278__auto__ = switch__16275__auto__(state_19319);
if(cljs.core.keyword_identical_QMARK_(result__16278__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16278__auto__;
}
break;
}
}catch (e19326){if((e19326 instanceof Object)){
var ex__16279__auto__ = e19326;
var statearr_19327_19331 = state_19319;
(statearr_19327_19331[(5)] = ex__16279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19319);

return cljs.core.cst$kw$recur;
} else {
throw e19326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16277__auto__,cljs.core.cst$kw$recur)){
var G__19332 = state_19319;
state_19319 = G__19332;
continue;
} else {
return ret_value__16277__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__16276__auto__ = function(state_19319){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__16276__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__16276__auto____1.call(this,state_19319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__16276__auto____0;
cljs_http$core$jsonp_$_state_machine__16276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__16276__auto____1;
return cljs_http$core$jsonp_$_state_machine__16276__auto__;
})()
;})(switch__16275__auto__,c__16389__auto___19330,req_19329,channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__16391__auto__ = (function (){var statearr_19328 = (f__16390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16390__auto__.cljs$core$IFn$_invoke$arity$0() : f__16390__auto__.call(null));
(statearr_19328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16389__auto___19330);

return statearr_19328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16391__auto__);
});})(c__16389__auto___19330,req_19329,channel,jsonp__$1,map__19313,map__19313__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__19333){
var map__19336 = p__19333;
var map__19336__$1 = ((((!((map__19336 == null)))?((((map__19336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19336):map__19336);
var request__$1 = map__19336__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19336__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
