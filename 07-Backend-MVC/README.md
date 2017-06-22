# Ejemplo de uso del Framewrok Sailsjs

##Instalación

Comando para instalar sails

````
>sudo npm install -g sails
````

[Documentación de instalación](http://sailsjs.com)

##Crear nueva aplicación

```
> sails new aplicacion
```

"aplicacion" es el nombre de la carpeta que va a contener los archivos
de sails

##Levantar el Servidor

Para levantar el servidor

```
> sails lift
```

Para levantar en un diferente puerto

```
> sails lift --port 8080
```

```
> node app.js --port 8080
```
##Comando para crear controladores

Comando para crear controladores

```
> sails generate controller Saludo
```