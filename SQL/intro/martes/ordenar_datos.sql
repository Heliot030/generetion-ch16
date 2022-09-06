USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name,Population FROM country Where Name = 'Mexico';

SELECT * FROM country Where Name = 'Mexico';
/* Alias AS
Son tipos variables
*/

SELECT 5 +5 ;
SELECT Name AS Nombre_de_pais, Population AS 'Poblacion del pais' FROM country 
ORDER BY Nombre_de_pais; 

/*
WHERE clasura
*/

SELECT * FROM country WHERE lifeExpectancy < 50 ORDER BY lifeExpectancy DESC;

SELECT *FROM country WHERE Continent = 'North America';
