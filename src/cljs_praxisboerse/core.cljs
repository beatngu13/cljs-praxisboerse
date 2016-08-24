(ns cljs-praxisboerse.core
  (:require [cljs-http.client :as http]
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
(def offer-type-input (cell ""))
(def country-input (cell "Weltweit"))
(def query-result (cell '()))

(def invalid-iz? (cell= (nil? (re-matches #"^$|[a-z]{4}\d{4}" iz))))
(def signed-in? (cell= (not= "" first-name)))

(defn fetch-offers-by-type! []
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offers/" @offer-type-input "/0/-1")
                           {:basic-auth {:username @iz :password @pw}}))]
        (reset! query-result (map :shortDescription (get-in response [:body :offers]))))))

(defn fetch-offer-types! []
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offertypes/all")
                           {:basic-auth {:username @iz :password @pw}}))]
        (swap! offer-types concat (map #(select-keys % [:shortname :name]) (:body response)))
        (swap! offer-type-input #(:shortname (first @offer-types))))))

(defn sign-in! []
  (go (let [response (<! (http/get
                           (str base-url "/credential/info")
                           {:basic-auth {:username @iz :password @pw}}))]
        (if (:success response)
          (reset! first-name (get-in response [:body :firstName]))
          (reset! pw "")))))

(add-watch signed-in? :fetch-offer-types (fn [_ _ _ new-state]
                                           (if (true? new-state) (fetch-offer-types!))))

(add-watch offer-type-input :fetch-offers-by-type (fn [_ _ old-state new-state]
                                                    (if (not= old-state new-state) (fetch-offers-by-type!))))
