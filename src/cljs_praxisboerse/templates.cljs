(ns cljs-praxisboerse.templates
  (:require [hoplon.core :refer [a br div h4 li small span]]
            [javelin.core :refer [cell]])
  (:require-macros [hoplon.core :refer [text]]
                   [javelin.core :refer [cell=]]))

(defn offer-list-item [offer company]
  (let [web      (cell= (:website company))
        contact  (cell= (:contact offer))
        mail     (cell= (:email contact))
        details? (cell false)]
    (li :class "list-group-item"
      (span :style "cursor: pointer;" :click #(swap! details? not)
        (h4
          (text (:shortDescription offer))
          (small " " (cell= (:companyName company)) ", " (cell= (:city company)))))
      (div :class "row" :toggle details?
        (div :class "col-md-12" (text (:description offer)))
        (div :class "details-wrapper"
          (div :class "col-md-12 well"
            (div :class "row"
              (div :class "col-md-4"
                (h4 "Über das Unternehmen")
                (cell= (:companyName company)) (br)
                (cell= (:street company)) (br)
                (cell= (:zipCode company)) " " (cell= (:city company)) (br))
              (div :class "col-md-4"
                (h4 "Kontakt")
                (cell= (:formOfAddress contact)) " " (cell= (:firstName contact)) " " (cell= (:secondName contact)) (br)
                (span :class "glyphicon glyphicon-phone-alt" :aria-hidden "true") (cell= (:telephone contact)) (br)
                (span :class "glyphicon glyphicon-envelope" :aria-hidden "true") (cell= (a :href (str "mailto:" mail) (text mail))))
              (div :class "col-md-4"
                (h4 "Weitere Informationen")
                (span :class "glyphicon glyphicon-user" :aria-hidden "true") (cell= (:numberOfEmployees company)) " Mitarbeiter" (br)
                (span :class "glyphicon glyphicon-tags" :aria-hidden "true") (cell= (:numberOfOffers company)) " Angebote" (br)
                (span :class "glyphicon glyphicon-globe" :aria-hidden "true") (cell= (a :href web :target "_blank" (text web)))))))))))
