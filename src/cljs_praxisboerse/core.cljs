(ns cljs-praxisboerse.core
  (:require [cljs.core.async :refer [<!]]
            [javelin.core :refer [cell]]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [javelin.core :refer [cell= defc defc=]]))

(defc iz "")
(defc pw "")
(defc first-name "")
(defc signed-in? false)

(defc= invalid-iz? (nil? (re-matches #"^$|[a-z]{4}\d{4}" iz)))

(def base-url "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST")

(defn fetch-offer-types! []
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offertypes/all")
                           {:basic-auth {:username @iz :password @pw}}))]
        (print (map :name (:body response))))))

(defn fetch-offers-by-type! [type]
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offers/" type "/0/-1")
                           {:basic-auth {:username @iz :password @pw}}))]
        (print (map :shortDescription (get-in response [:body :offers]))))))

(defn init! [response]
  (fetch-offer-types!)
  (reset! first-name (get-in response [:body :firstName]))
  (reset! signed-in? true))

(defn sign-in! []
  (go (let [response (<! (http/get
                           (str base-url "/credential/info")
                           {:basic-auth {:username @iz :password @pw}}))]
        (if (:success response)
          (init! response)
          (reset! pw "")))))
