# Estrategias de Persistencia - TP 2024

## Instalación y ejecución

Para instalar la API se debe correr el comando:

```
npm install
```

Una vez instalada se deben correr el comando

```
npm i -D sequelize -cli
npm i -D nodemon
```

Para ejecutar el programa como desarrollador ejecute el siguiente comando

```
npm run dev
```

## Cambiar puerto

Para cambiar el puerto en el que escucha la API, debe ir al archivo package.json y donde dice "dev: cross-env PORT=3000 nodemon src/app.js" cambiar el valor de PORT al puerto que desee usar.
