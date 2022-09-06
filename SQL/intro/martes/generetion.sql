CREATE DATABASE generetion;
USE generetion;

CREATE TABLE cohorte_16(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companeros INT NOT NULL,
dirrecion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);

SELECT * FROM cohorte_16;

INSERT INTO cohorte_16(
nombre,apellido,companeros,dirrecion,proyecto)
VALUES('Victor','Hernandes','7','Tulancingo Hidalgo','Java'),
('Johanatan','Vazquez','6','CDMX','Javascript'),
('Raul','Sanches','4','GDL','Javascript'),
('Maria','Vargas','6','EDOMEX','Javascript'),
('Magali','Quloz','6','CDMX','Javascript');

DELETE FROM cohorte_16
WHERE alumno_id = 3;

UPDATE cohorte_16
SET nombre = 'Marina',
apellido = 'Pardo'

WHERE alumno_id = 5;

SELECT nombre, apellido FROM COHORTE_16 ORDER BY comaneros DESC;




