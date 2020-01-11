# where-to-live

Web app with relevant data for deciding where to live.

## Goal

- Make it easier to decide what cities to live in.
- I want to know what cities have the highest standard of living AND the most tech jobs. 

## Procedure

Should filter to some list of "top" cities, likely by minimum population. E.g. include top 50 most populated cities in the US, unioned with the top 50 most populated cities in the world. 

## Useful Datasets

- "Safety" of a country
- Standard of living
- Number of jobs
- Number of technical jobs
- Cost of higher education

## Visualization

- Should be able to filter to "Just US" or "World".
- Mercator projection, either global or US-centric.
- Heat map or some sort of indication for a city being "highly ranked". 
- Next to mercator projection, show a list, sorted, of cities by the current "algorithm". 
- Users can adjust algorithm to favor cities with higher standard of living. And if they don't care about some other metric (e.g. smog), they can deselect that. At the beginning, all characteristics start with equal weighting.
