USE tienda;

SELECT * FROM clientes;

/* llaves foraneas
DECIMAL VALORES DE DINELO
*/

CREATE TABLE compra(
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cliente_id INT NOT null,
fecha_compra Date NOT NULL,
total DECIMAL NOT NULL,
cantidad_productos INT NOT null
);

SELECT * FROM compra;

-- Agregar llave foranea --
ALTER TABLE compra
ADD CONSTRAINT fk_clientes_compra
FOREIGN KEY (cliente_id)
REFERENCES clientes(cliente_id);

DROP TABLE clientes;

/* borar llaves foraneas*/
ALTER TABLE compra
DROP FOREIGN KEY fk_clientes_compra;

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
VALUES (6, '2022-09-06', 300.50, 2);


DROP TABLE compra;

