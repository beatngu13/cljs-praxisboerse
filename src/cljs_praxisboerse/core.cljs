(ns cljs-praxisboerse.core
  (:require [cljs.core.async :refer [<!]]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def base-url "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST")
(def credentials (atom {:username "", :password ""}))

(defn fetch-offer-types! []
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offertypes/all")
                           {:basic-auth @credentials}))]
        (print (map :name (:body response))))))

(defn fetch-offers-by-type! [type]
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offers/" type "/0/-1")
                           {:basic-auth @credentials}))]
        (print (map :shortDescription (get-in response [:body :offers]))))))

(defn init! [iz pw]
  (swap! credentials assoc :username iz :password pw))

(defn sign-in! [iz pw com]
  (go (let [response (<! (http/get
                           (str base-url "/credential/info")
                           {:basic-auth {:username iz :password pw}}))]
        (>! com {:topic :sign-in :content (when (:success response)
                                            (init! iz pw)
                                            {:firstName (get-in response [:body :firstName])})}))))
