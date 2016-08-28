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
(def country-input (cell ""))
(def filter-input (cell ""))
(def query (cell '()))

(def invalid-iz? (cell= (nil? (re-matches #"^$|[a-z]{4}\d{4}" iz))))
(def signed-in? (cell= (not= "" first-name)))

(defn fetch-offers! []
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offers/" @offer-type-input "/0/-1")
                           {:basic-auth {:username @iz :password @pw}}))]
        (reset! countries (map #(select-keys % [:code :name]) (vals (get-in response [:body :countries]))))
        (reset! query (select-keys (:body response) [:companies :offers])))))

(defn fetch-offer-types! []
  (go (let [response (<! (http/get
                           (str base-url "/joboffer/offertypes/all")
                           {:basic-auth {:username @iz :password @pw}}))]
        (reset! offer-types (map #(select-keys % [:shortname :name]) (:body response)))
        (reset! offer-type-input (:shortname (first @offer-types))))))

(defn sign-in! []
  (go (let [response (<! (http/get
                           (str base-url "/credential/info")
                           {:basic-auth {:username @iz :password @pw}}))]
        (if (:success response)
          (reset! first-name (get-in response [:body :firstName]))
          (reset! pw "")))))

(add-watch signed-in? :fetch-offer-types (fn [_ _ _ new-state]
                                           (if (true? new-state) (fetch-offer-types!))))

;; TODO Should watch country-input and filter-input as well.
(add-watch offer-type-input :fetch-offers-by-type (fn [_ _ old-state new-state]
                                                    (if (not= old-state new-state) (fetch-offers!))))
