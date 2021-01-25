# Customer Products Technical Interview

I completed the challenge after the interview as I decided that it posed an interesting challenge and I was interested in continuing to learn.

## Getting started

1. Install the dependencies with `npm install`
2. Start the app with `npm start`
3. Run the tests with `npm test`

***

## Measuring Performance / Evaluated

Performance of Express Handlebars ranges. I preformed a few tests and on completion of the default GET (/) route on localhost.
Performance ranges from 600ms on first run to less than 47ms after several runs...
This clearly means that the caching built in is fast and effective and is a good solution for a distributed API based approach.

***

## The data from the web is from the following data... 

**HTTP Request**

`GET https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes`

**URL Query Parameters**

| Parameter | Description |
|-----------|-------------|
| `symbols` | Any valid symbol for a security, e.g. for the FTSE 100 use `FTSE:FSI`. |

**Symbols**

We would like you to display the information from the following symbols (these are the securities we show on the [FT.com front page](https://www.ft.com) 📰).

| Security        | Symbol     |
|-----------------|------------|
| FTSE 100        | `FTSE:FSI` |
| S&P 500         | `INX:IOM`  |
| Euro/Dollar     | `EURUSD`   |
| Pound/Dollar    | `GBPUSD`   |
| Brent Crude Oil | `IB.1:IEU` |
