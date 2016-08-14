(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.228-1"]
                  [adzerk/boot-reload        "0.4.12"]
                  [hoplon/boot-hoplon        "0.2.2"]
                  [hoplon/hoplon             "6.0.0-alpha16"]
                  [hoplon/twitter-bootstrap  "0.2.0"]
                  [org.clojure/clojure       "1.8.0"]
                  [org.clojure/clojurescript "1.9.93"]
                  [tailrecursion/boot-jetty  "0.1.3"]
                  [org.clojure/core.async    "0.2.385"]
                  [cljs-http                 "0.1.41"]]
  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]]
  '[clojure.java.io :as io])

(deftask dev
  "Build cljs-praxisboerse for local development."
  []
  (comp
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs)
    (serve :port 8000)))

(deftask prod
  "Build cljs-praxisboerse for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (target :dir #{"target"})))

(defn- generate-lein-project-file!
  [& {:keys [keep-project] :or {:keep-project true}}]
  (let [pfile (io/file "project.clj")
        pname (or (get-env :project) 'boot-project)
        pvers (or (get-env :version) "0.1.0-SNAPSHOT")
        prop #(when-let [x (get-env %2)] [%1 x])
        head (list* 'defproject pname pvers
               (concat
                 (prop :url :url)
                 (prop :license :license)
                 (prop :description :description)
                 [:dependencies (get-env :dependencies)
                  :source-paths (vec (get-env :source-paths))]))
        proj (pp-str (concat head (mapcat identity (get-env :lein))))]
    (if-not keep-project (.deleteOnExit pfile))
    (spit pfile proj)))

(deftask lein-generate
  "Generate a leiningen `project.clj` file.
  This task generates a leiningen `project.clj` file based on the boot
  environment configuration, including project name and version (generated
  if not present), dependencies, and source paths. Additional keys may be added
  to the generated `project.clj` file by specifying a `:lein` key in the boot
  environment whose value is a map of keys-value pairs to add to `project.clj`."
  [] (generate-lein-project-file! :keep-project true))
