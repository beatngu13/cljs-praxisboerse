(ns cljs-praxisboerse.core
  (:require [clojure.string :as string]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [javelin.core :refer [cell]])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [javelin.core :refer [cell=]]))

(def ^:private base-url "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST")

(def iz (cell ""))
(def pw (cell ""))
(def first-name (cell ""))
(def offer-types (cell '()))
(def countries (cell '()))

(def invalid-iz? (cell= (nil? (re-matches #"^$|[a-z]{4}\d{4}" iz))))
(def signed-in? (cell= (not (string/blank? first-name))))

(def base-url "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST")

(defn fetch-offer-types! []
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offertypes/all")
                           {:basic-auth {:username @iz :password @pw}}))]
        (swap! offer-types concat (map :name (:body response))))))

(defn fetch-offers-by-type! [type]
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offers/" type "/0/-1")
                           {:basic-auth {:username @iz :password @pw}}))]
        (print (map :shortDescription (get-in response [:body :offers]))))))

(defn sign-in! []
  (go (let [response (<! (http/get
                           (str base-url "/credential/info")
                           {:basic-auth {:username @iz :password @pw}}))]
        (if (:success response)
          (do
            (reset! first-name (get-in response [:body :firstName]))
            (fetch-offer-types!))
          (reset! pw "")))))
