DROP TABLE wtl.cities;

CREATE TABLE wtl.top_300_us_city_populations (
    cityId INT NOT NULL GENERATED ALWAYS AS IDENTITY
    , cityName VARCHAR NOT NULL
    , stateName VARCHAR NOT NULL
    , population INT NOT NULL
    , latitude FLOAT NOT NULL
    , longitude FLOAT NOT NULL
)

select * from wtl.top_300_us_city_populations


SELECT * FROM wtl.cities

CREATE TABLE wtl.cities (
    city_id INT NOT NULL GENERATED ALWAYS AS IDENTITY
    , name VARCHAR NOT NULL
    , country_id INT NOT NULL REFERENCES wtl.countries (country_id)
)

DROP TABLE wtl.countries;
CREATE TABLE wtl.countries (
    country_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name VARCHAR NOT NULL
)