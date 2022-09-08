USE  sakila;
SELECT *FROM payment;
-- SUM() , AVG(), COUNT()
SELECT customer_id,amount FROM payment; 
-- COUNT() cuenta la filas de un tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;
SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;
-- cantidad de ventas tuvo el trbabajador
SELECT COUNT(*) FROM payment WHERE staff_id = 1;
-- cantidad de clinnetes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;
-- SUM() es numerico 
SELECT SUM(amount) AS 'total rentas' FROM payment;

-- ¿ Cual cliente realizo mas rebtas?
SELECT customer_id, COUNT(*) FROM payment GROUP BY 
customer_di ORDER BY COUNT(*) DESC; -- da error

-- order BY - ordena segun columna o 
-- funcion que le indicamos ASC/ DESC
-- GROUP agrupa solo si se usa con SUM ,AVG Y COUNT
-- pero omite datos repetidos
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;
-- QUIEN CLIENTE GASTO MAS 
SELECT customer_id, SUM(amount) AS 'total' FROM 
payment GROUP BY customer_id ORDER BY SUM(amount) 
DESC;

-- AVG() regla de promedio

SELECT AVG(amount) AS 'Promedio' FROM payment;

-- ¿Cual clinete gasto mas en pprimedio?
SELECT customer_id,  AVG(amount) AS 'Promedio' 
FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;
