# Cansat-Monitoring-App

<div align="center">
	<a href="https://cansatmonitoring.herokuapp.com/">
		<img src="https://i.imgur.com/guYeuTz.jpeg" alt="Web" height="731" width="634">
	</a>
</div>
<br/>
<div align="center">
	<a href="#changelog">
		<img src="https://img.shields.io/badge/stability-stable-succes.svg?style=flat-square&logo=appveyor" alt="Status">
	</a>
	<a href="#changelog">
		<img src="https://img.shields.io/badge/release-v1.1.0-blue.svg?style=flat-square&logo=appveyor" alt="Version">
	</a>
	<a href="#changelog">
		<img src="https://img.shields.io/badge/update-june-yellowgreen.svg?style=flat-square&logo=appveyor" alt="Update">
	</a>
	<a href="#license">
		<img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square&logo=appveyor" alt="License">
	</a>
</div>

Aplicación terminada para el monitoreo en tiempo real de dispositivos de vuelo tipo cansat, la app hace uso de Node para capturar por puerto serial los datos recogidos por un sistema tipo cansat, algunos de estos datos que se tomaran en tiempo real son  ***(Temperatura, localización, altitud, presión, datos de giroscopio (X,Y,Z), aceleración en los tres ejes, entre otros)*** ; luego se hace la limpieza y organización de estos datos, para luego enviarlos al cliente por Sockets y mostrarlos en un dashboard del aplicativo web construido en Angular.

Esta aplicación esta hecha principalmente en **(NodeJs - Backend)**, **(Angular - Frontend)** y usando paquetes importantes para el desarrollo como lo son: **(Express, Websocket, dotenv)** entre otros para el back y paquetes y consumo de APIs para el front como: **(chart.js, leaflet, ngx, etc)**

## 📟 Website

<div align="center">
  <a href="https://cansatmonitoring.herokuapp.com/">
    CansatMonitoring.co
  </a>
</div>

### Observaciones

* **Modo Hardware**: Es necesario que disponga de los dispositivos correspondientes y el receptor conectado a algun puerto del ordenador, los datos se reciben por puerto serial y despues se le hace la decodificacion a estos datos para su posterior analisis en el dashboard, ademas es importante que disponga de los diferentes sensores que recibe la aplicacion, como lo son sensores de *temperatura, giroscopio, gps, etc*.

* **Modo Simulación**: Si no dispone de dispositivos, solo basta con que ingrese al website y darle click a iniciar simulación, unos segundos despues se activara el socket y empezara a graficar los datos, estos datos fueron generados manualmente y son aproximados al **comportamiento de un cansat real** para asi poder distinguir bien el funcionamiento de la aplicación.

## 📑 Notas

Si lo que desea es trabajar estre proyecto de manera local, puedes descargalo o clonarlo:

```
git clone https://github.com/SebSalazar/cansat-monitoring-app.git
```

Y luego, instalar los requerimientos:

### Requirimientos

- <img alt="NodeJS" src="https://img.shields.io/badge/NodeJS%20-%068033.svg?&style=for-the-badge&logo=javascript&logoColor=white"/>

- <img alt="Angular" src="https://img.shields.io/badge/Angular CLI 9+%20-%23FF2D20.svg?&style=for-the-badge&logo=angular&logoColor=white"/>

### Otros paquetes usados en el proyecto

```
"bufferutil": "^4.0.3",
"dotenv": "^10.0.0",
"express": "^4.17.1",
"serialport": "^9.0.6",
"utf-8-validate": "^5.0.5",
"websocket": "^1.0.33",
"ws": "^7.5.0"

"chart.js": "^2.9.3",
"jquery": "^3.5.1",
"leaflet": "^1.7.1",
"ngx-scrollreveal": "^3.0.0",
```

## 💻 Instalación de manera local

1. Despues de haber clonado o descargado el proyecto
2. Ubicarse sobre la carpeta raiz
3. Ejecutar **npm install** para instalar los requerimientos 
4. Correr el proyecto con **npm start**
5. Ingresar en el navegador a **localhost:PORT** y listo!

* **PORT** representa la variable de entorno donde se define el puerto a utilizar, por defecto **5000**.

## 👽 Autores

* **Sebastian Salazar** - _Owner_ - [SebSalazar](https://github.com/SebSalazar)
* **Carlos Andres Lopez** - _Guest_ - [carlos97](https://github.com/carlos97)

## 😬 Contribuciones [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/SebSalazar/cansatUD-client/issues)

¡Invitados a colaborar en este proyecto!

## 📝 Licencia

<a href="#">
		<img src="https://img.shields.io/badge/license-MIT-red.svg?style=flat-square&logo=license" alt="Status">
</a>