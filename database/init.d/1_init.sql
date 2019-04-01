--
-- Initialization Script for Database
--

CREATE DATABASE db1;
GRANT ALL PRIVILEGES ON DATABASE db1 TO postgres;

\c db1;

--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;
