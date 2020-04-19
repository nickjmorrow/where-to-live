# Weighted Rankings for Places to Live

The demo can be found [here](https://wheretolive.netlify.app/).

## At a Glance

This is a React/Node.js app for viewing useful data to decide where to live and applying a weighted ranking to each metric.

## What is it For

It's hard to find an easy-to-use interface that supports looking through city-related data for where to live. The data is easy to find, but it's all separate and makes cross-comparison difficult. 

## Technical Stack

- The **front-end** is built on React and Webpack. I wanted to reuse components from a central componennt library, and React makes it easy to isolate logic. Redux is used lightly and helps to move the data fetching and handling away from React.
- The **back-end** is built in Node.js and TypeScript, because I wanted to spin something up quickly while maintaining type-safety.
- The **back-end** is built with Postgresql. This data need not be stored relationally, but I have experience with Postgresql and wanted to get going quickly. MongoDB or any other NoSQL database would be a valid alternative. 

## Improvements

- Add horizontal scrolling to the table to make it easier to view additional metrics.
- Make some of the interactions more obvious, like deselecting a city and not including it in calculations.

## Sources

- [Quality of life and other metrics](https://www.numbeo.com/quality-of-life/rankings.jsp)
- [City populations](https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population)

