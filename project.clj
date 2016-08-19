(defproject
  cljs-praxisboerse
  "0.1.0-SNAPSHOT"
  :dependencies
  [[adzerk/boot-cljs "1.7.228-1"]
   [adzerk/boot-reload "0.4.12"]
   [hoplon/boot-hoplon "0.2.2"]
   [hoplon "6.0.0-alpha16"]
   [hoplon/twitter-bootstrap "0.2.0"]
   [org.clojure/clojure "1.8.0"]
   [org.clojure/clojurescript "1.9.93"]
   [tailrecursion/boot-jetty "0.1.3"]
   [org.clojure/core.async "0.2.385"]
   [cljs-http "0.1.41"]]
  :repositories
  [["clojars" {:url "https://clojars.org/repo/"}]
   ["maven-central" {:url "https://repo1.maven.org/maven2"}]]
  :source-paths
  ["src"])