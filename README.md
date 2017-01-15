# cljs-praxisboerse

A rudimentary single-page application (SPA) built with [ClojureScript](https://github.com/clojure/clojurescript) and [Hoplon](http://hoplon.io/), written as part of a showcase about JavaScript alternatives. Further ingredients are:

- [Bootstrap](http://getbootstrap.com/)
- [core.async](https://github.com/clojure/core.async)
- [cljs-http](https://github.com/r0man/cljs-http)

Checkout the result at https://beatngu13.github.io/cljs-praxisboerse/. The SPA provides a lightweight browser for [HsKA's Praxisbörse](http://www.iwi.hs-karlsruhe.de/boerse/home) based on the [intranet REST API](https://www.iwi.hs-karlsruhe.de/Intranetaccess/public/restdoc/). Hence, no VPN access is needed.

## Dependencies

- Java 1.7+
- [Boot](http://boot-clj.com/)

## Usage

### Development

1. Start the `dev` task. In a terminal run:
    ```bash
    $ boot dev
    ```
    This will give you a Hoplon development setup with:
    - auto compilation on file changes
    - audible warning for compilation success or failures
    - auto reload the HTML page on changes
    - Clojurescript REPL

2. Go to [http://localhost:8000/](http://localhost:8000/) in your browser. You should see the application's landing page.

3. If you edit and save a file, the task will recompile the code and reload the browser to show the updated version.

### Production

1. Run the `prod` task. In a terminal run:
    ```bash
    $ boot prod
    ```

2. The compiled files will be on the `target/` directory. This will use advanced compilation and prerender the HTML.

## License

Copyright © 2017 Daniel Kraus
