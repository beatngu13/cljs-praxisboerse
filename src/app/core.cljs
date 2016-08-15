(ns app.core
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
        (print response))))

(defn init! [iz pw]
  (swap! credentials assoc :username iz :password pw))

(defn sign-in! [iz pw]
  (go (let [response (<! (http/get
                           (str base-url "/credential/info")
                           {:basic-auth {:username iz :password pw}}))]
        (if (:success response)
          (do
            (init! iz pw)
            (print (str "Hi " (get-in response [:body :firstName]) "!")))
          (print "Invalid account and/or password.")))))
