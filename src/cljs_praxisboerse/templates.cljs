(ns cljs-praxisboerse.templates
  ;; TODO Use refer to avoid prefix.
  (:require [hoplon.core :as h]))

(defn offer-tpl [offer company]
  (h/li :class "list-group-item"
    (h/span :id (str "company-" (:id offer)) :style "cursor: pointer;"
      (h/h4
        (h/text (:shortDescription offer))
        (h/small (:companyName company) ", " (:city company))))
    (h/div :style "display: inline;" :class "row"
      (h/div :class "col-md-12" (h/text (:description offer)))
      (h/div :class "col-md-12 well well-lg"
        (h/div :class "row"
          (h/div :class "col-md-3 col-xs-12"
            ;; TODO Use h/text for consistency?
            (h/h4 "Über das Unternehmen")
            (:companyName company) (h/br)
            (:street company) (h/br)
            (:zipCode company) " " (:city company) (h/br)
            (h/br)
            (let [web (:website company)]
              (h/a :href web :target "_blank" (h/text web))))
          (h/div :class "col-md-3 col-xs-12"
            ;; TODO Use h/text for consistency?
            (h/h4 "Kontakt")
            ;; TODO Use let for :contact and :email.
            (:formOfAddress (:contact offer)) " " (:firstName (:contact offer)) " " (:secondName (:contact offer)) (h/br)
            "Telefon: " (:telephone (:contact offer)) (h/br)
            "E-Mail: " (h/a :href (str "mailto:" (:email (:contact offer))) (h/text (:email (:contact offer)))) (h/br)))))))
