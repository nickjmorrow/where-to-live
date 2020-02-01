DROP TABLE wtl.cities;

DROP SCHEMA wtl;

CREATE SCHEMA wtl;

CREATE TABLE wtl.cities (
    city_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name VARCHAR NOT NULL
    , population INT NOT NULL
    , happiness INT NOT NULL
    , cost_of_living INT NOT NULL
    , tech_jobs INT NOT NULL
)