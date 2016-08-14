(ns app.core
  (:require [cljs.core.async :refer [<!]]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def base-url "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST")

(defn sign-in [iz pw]
  (go (let [response (<! (http/get
                           (str base-url "/credential/info")
                           {:basic-auth {:username iz :password pw}}))]
        (if (:success response)
          (print (str "Hi " (get-in response [:body :firstName]) "!"))
          (print "Invalid account and/or password.")))))
