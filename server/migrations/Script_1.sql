DROP TABLE bb.vacation_plan_dates;

DROP TABLE bb.vacation_plans;

DROP TABLE bb.date_types;

DROP SCHEMA bb;

CREATE SCHEMA bb;

CREATE TABLE bb.vacation_plans (
    vacation_plan_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , url VARCHAR NOT NULL
);

CREATE TABLE bb.date_types (
    date_type_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE bb.vacation_plan_dates (
    vacation_plan_date_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , vacation_plan_id INT NOT NULL REFERENCES bb.vacation_plans(vacation_plan_id)
    , calendar_date DATE NOT NULL
    , date_type_id INT NOT NULL REFERENCES bb.date_types (date_type_id)
);

INSERT INTO bb.date_types (date_type_id, name)
OVERRIDING SYSTEM VALUE
VALUES
    (1, 'empty')
    , (2, 'selected')
    , (3, 'holiday');