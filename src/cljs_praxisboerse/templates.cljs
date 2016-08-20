(ns cljs-praxisboerse.templates
  (:require [hoplon.core :as h]))

(h/defelem dropdown-menu [_ children]
  (h/ul :class "dropdown-menu"
    (map #(h/li (h/a :href "#" (h/text %))) children)))
