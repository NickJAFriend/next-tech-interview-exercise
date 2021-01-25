const express = require('express');
const expressHandlebars  = require('express-handlebars');
const path = require('path');
/**
 * Require in your library here.
 * 
 */
const {performance} = require('perf_hooks')
const fetch = require('./lib/fetch');


/**
 * Create a new instance of express and define the port to attach to.
 */
const app = express();
const port = process.env.PORT || 3000;

/**
 * Configure the Handlebars view engine with the express app.
 *
 * Views with a `.handlebars` extension will be parsed with this Handlebars view engine.
 *
 * The default layout is `views/layouts/main.handlebars`.
 */
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

/**
 * Configure a path for static assets.
 *
 * Assets in the `static/` folder can be loaded using the `/static` path.
 *
 * @example
 *
 * ```html
 * <link rel="stylesheet" type="text/css" href="/static/stylesheet.css">
 * ```
 */
app.use('/static', express.static(path.join(__dirname, 'static')));

/**
 * The index route. Your logic here-ish.
 */
app.get('/', async function (req, res) {
    //Measure time
    let _start = performance.now();

    // This object is passed to the Handlebars template.
    const urls = [
            'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=FTSE:FSI',
            'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=INX:IOM',
            'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=EURUSD',
            'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=GBPUSD',
            'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=IB.1:IEU'
        ]

        
        

        let query = await fetch(urls).then(urlContent => {
                //print json results
                        //Collect multiple arrays :return joined array
                        urlContent.map((item) => {
                            return item
                        })
                        //Remove nulls created by failed requests :return whole array
                        urlContent.filter((item) => {
                            return item != null
                        })
                       
                        console.log(urlContent)
                        return Promise.resolve(urlContent)
                
            })
            .catch(
                //Handle errors from the requests
                (error) => console.error(`One or more of the web links are not JSON formatted API endpoints. \nAnd so: ${error}`))
            .finally( 
                //Handle performance timing
                () =>{
                    //Stop performance clock and save time
                    //let _end = performance.now()
                    //Time taken is the final clock check subtract the first clock check (in milliseconds)
                    //let _timetaken = _end - _start
                    //Thanks for reading my code
                        //console.log(`Thank you for setting the task... It was a pleasure to complete... Wishing you a lovely day.`)
                    //Output Time to console
                    //console.log(`Runtime took ${_timetaken} milliseconds (${_timetaken / 1000} seconds) to complete.`)
            })    


    const templateData = {
        item: query
    };

    // This renders the Handlebars view at `views/layouts/home.handlebars`.
    res.render('home', templateData);

    //End measure of time
    let _stop = performance.now();
    console.log(`Time taken: ${_stop - _start}`)
});

/**
 * If not in a test environment where we don't need the server stared,
 * bind express to the port and start the server.
 */
if(process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Running at http://localhost:${port}!`));
}

/**
 * We export the app so that we can test it in `test/app.spec.js`.
 */
module.exports = app;
