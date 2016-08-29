(ns cljs-praxisboerse.templates
  (:require [hoplon.core :refer [a br div h4 li small span]])
  (:require-macros [hoplon.core :refer [text]]))

(defn offer-list-item [offer company]
  (let [web     (:website company)
        contact (:contact offer)
        mail    (:email contact)]
    (li :class "list-group-item"
      (span :id (str "company-" (:id offer)) :style "cursor: pointer;"
        (h4
          (text (:shortDescription offer))
          (small (:companyName company) ", " (:city company))))
      (div :style "display: none;" :class "row"
        (div :class "col-md-12" (text (:description offer)))
        (div :class "col-md-12 well well-lg"
          (div :class "row"
            (div :class "col-md-3 col-xs-12"
              ;; TODO Use text for consistency?
              (h4 "Über das Unternehmen")
              (:companyName company) (br)
              (:street company) (br)
              (:zipCode company) " " (:city company) (br)
              (br)
              (a :href web :target "_blank" (text web)))
            (div :class "col-md-3 col-xs-12"
              ;; TODO Use text for consistency?
              (h4 "Kontakt")
              (:formOfAddress contact) " " (:firstName contact) " " (:secondName contact) (br)
              "Telefon: " (:telephone contact) (br)
              "E-Mail: " (a :href (str "mailto:" mail) (text mail)))))))))
