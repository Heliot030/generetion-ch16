USE sakila;
-- titulo y lenguaje
SELECT title, name FROM film, language; 

-- consulta de monto especifico y dia 
SELECT customer_id, SUM(amount) 
AS total_dia FROM payment WHERE
 payment_date BETWEEN '2005-06-15 00:00:00' 
 AND '2005-06-15 23:59:59' GROUP BY customer_id 
 ORDER BY total_dia DESC;
