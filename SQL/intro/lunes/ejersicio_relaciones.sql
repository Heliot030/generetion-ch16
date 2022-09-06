CREATE DATABASE ejersicio_relaciones;

USE ejersicio_relaciones;
/* lo del zomm*/

CREATE TABLE cohorte (
cohorte12_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
alumno_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);

SELECT * FROM cohorte;

CREATE TABLE alumno(
alumno_id INT NOT NULL PRIMARY KEY,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255) NOT NULL,
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);

DROP TABLE cohorte;
SELECT * FROM alumno;

CREATE TABLE direccion(
direccion_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);
DROP TABLE direccion;
SELECT * FROM direccion;
SELECT * FROM equipo;

CREATE TABLE equipo(
equipo_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);
- Agregar llave foránea --
ALTER TABLE cohorte
ADD CONSTRAINT fk_alumno_id
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id); 

ALTER TABLE cohorte
ADD CONSTRAINT fk_instructor_id
FOREIGN KEY (instructor_id)
REFERENCES instructor(instructor_id); 

ALTER TABLE equipo
ADD CONSTRAINT fk_equipo_alumno_id
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id); 

ALTER TABLE direccion
ADD CONSTRAINT fk_direccion_alumno_id
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id);

