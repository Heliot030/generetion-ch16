USE tienda; /* seleciono la tabla*/

CREATE DATABASE tienda;

CREATE TABLE compra (
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cliente_id INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(5,2) NOT NULL,
cantidad_productos INT NOT NULL
);




INSERT INTO clientes(nombre,apellido,telefono,dirrecion)

VALUES('Pedro','Paramo','23456765','Comala'),
('Ped','Par','2345','Coma'),
('P','P','2','C');

SELECT * FROM clientes;

DELETE FROM clientes
WHERE cliente_id = 5;

DROP TABLE clientes;

TRUNCATE TABLE compra;

TRUNCATE TABLE clientes;


