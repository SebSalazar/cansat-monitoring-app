# Cansat-Node-Server:

Uso de Node para capturar por puerto serial los datos recogidos por un sistema tipo cansat, algunos de estos datos que se tomaran en tiempo real son  *(Temperatura, localización, altitud, presión, datos de giroscopio (X,Y,Z), aceleración en los tres ejes, entre otros)* ; luego se hace la limpieza y organización de estos datos, para luego enviarlos al cliente por Sockets y mostrarlos en un dashboard del aplicativo web construido en Angular.

### Como ejecutar el software
 1. Descargue o clone el proyecto su PC
    ```
    git clone https://github.com/SebSalazar/cansat-node.git
    ```
 2. Asegurese de tener el modulo receptor de los datos conectado al algun puerto del PC
#### Observacion
En caso que no disponga de hardware el software aun funcionara pero entrara en un modo Dummy donde entregara datos aleatorios

 3. Ejecución del programa
### Corriendo el programa
Solo bastara con el comando:
```
node main.js
```
### Notas adicionales
El programa cuenta con un **index.html** donde se podra hacer una pequeña prueba enviando el puerto desde la web, si el socket esta abierto y escuchando empeza la simulacion en la pagina y se vera la impresion cada segundo de los datos.

### Carpeta log
En esta carpeta se guardaran los logs de cada prueba o simulación del sistema.