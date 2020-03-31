# Evaluacion-Primer-Parcial-Aprendizaje-Automatico

Orientaciones para la evaluación del primer parcial para la materia de aprendizaje automático.

## 0. Pre-requisitos
* Tener instalado `docker`. Mas información se encuentra disponible en [Docker](https://www.docker.com/community-edition).
* Acceso a Internet.
* Clonar este repositorio.
* Tener instalado Python3.

## 1.Crear una imagen de la app en docker
1. Cámbiese a la carpeta API
2. Crea una imagen en docker de la app `docker build --tag flask-app .`

## 2. Levantar un contenedor de la imagen de la app
`docker run --name flask-app -p 5000:5000 flask-app`

## 3. Acceder a la siguiente URL en tu navegador.
1. Acceda a la interfaz web de la aplicación en un browser en la URL:

[http://localhost:5000](http://localhost:5000)

## 4. Consultar y cargar los datos.
* http://localhost:5000/read -> Para cargar los datos
* http://localhost:5000/ -> Para visualizar el porcentaje de las aplicaciones por genero
* http://localhost:5000/top-by-user-rating -> Para visualizar las apps mejor calificadas por los usuarios
* http://localhost:5000/best-price-by-gender -> Para visualizar las apps con mejor precio por genero
* http://localhost:5000/top-category-by-installs -> Para visualizar los top generos por instalación.
## 5. Detenga y elimine el contenedor.
* `docker stop flask-app`
* `docker rm flask-app`
