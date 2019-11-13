## ¿Qué es Backend for Frontend?

Cuando las organizaciones empezaron a construir software a medida estos eran programas que se llamaban unas ha otras, había mucho, mucho código espaguetti imposible de leer, el proceso de creación de software ha evolucionado y con la creación de patrones de diseño cada vez más sofisticados, las aplicaciones han dejado de estar tan acopladas, esto ha permitido a los desarrolladores crear más y mejores funcionalidades, comenzaron ha desacoplar el código de manera que las funcionalidades más grandes conformaban capas de componentes nuevamente altamente acopladas, pero que permitían el desarrollo de nuevas funcionalidades sin que estás necesariamente afectarán otras capas sin embargo estó precenta un problema muy grave, porque al momento de crear nuevas funcionalidades había que estár copiando y pegando código que es una muy mala práctica porque presenta problemas de rendimiento, es aquí donde se implementan arquitecturas de servicios y microservicios que permiten construir funcionalidades entre capas, con esté modelo se pueden compartir capas y reuzar lógica. 

Cada vez hay más dispositivos y los usuarios comienzan a usar cada vez más aplicaciones estp genera la necesidad de crear nuevas interfaces para cada dispositivo, esto hizo que los desarrolladores separarán las capas en componentes mucho más especializados, diviendo la lógica del backend y del frontend, ahora la arquitectura está hecha por microservicios que preveen la lógica necesaria y una API que se encarga de buscar la información solicitada por el cliente, esté tipo de arquitecturas se llaman API Rest, está evolución nos presenta un nuevo problema, hay nuevos dispositivos con necesidades más especificas haciendo solicitudes a un mismo punto que tiene que ser configurado de múltiples formas, necesitamos contruir estructuras que nos permitan crear backends seperados para ser consumidos por frontends especificos.

El patron Backend For Frontend (BFF) ayuda a los equipos a crear nuevos features rápidamente y tener el control de los backends de uno o otro frontend si afectar a los otros, es decir que permite crear, implementar y probar nuevas caracterisiticas en el cliente móvil sin que el cliente web se vea afectado por esto. Con la Arquitectura de los Microservicios los equipos pueden crear funcionalidades más rápidamente y escalar de manera acelerada.

**BFF es un patrón de software construido con microservicios** solo que más desacoplado, con Backend For Frontend creas **backends especificos para frontends con necesidades propías**.


En esté curso vamos a estar integrando nuestro backend y nuestro frontend, vamos a tomar la autenticación que ya que creamos, el API con nuestro servidor de frontend, para que todo esté integrado adecuadamente, pero primero tenemos que recapitular todo lo que hicimos a lo largo de toda la escuela.

1. Aprendimos a configurar nuestro entorno
2. Creamos el frontend con react y redux.
3. Creamos el servidor de server-side-rendering
4. Creamos una API 
5. Servicios de autenticación con passport.js

Ahora convergen estós dos puntos tanto el backend como el frontend y vamos ha estar integrando nuestro API, vamos a estar creando pruebas con jest, vamos a estar probando también que se envién formularios y que nuestras acciones retornen todo adecuadamente y también vamos a estar haciendo un despligue, esté será en Digital Ocean y vamos a poder acceder a nuestro sitio con cualquier inicio de sessión integrado.

En está clase vamos a estar revisando, hasta ahora que es lo que tenemos y los pasos que debemos de proceder en nuestras siguientes clases.

Para los siguientes pasos debemos traer el código del curso de server side rendering, porque en esté curso vamos a implementar todo los modulos que hicimos a lo largo de la escuela.

### Múltiples versiones de Node con NVMRC

Vamos a usar una librería que se llama NVM la cuál nos permite usar múltiples versiones de Node solo ejecutando un comando, porque aveces necesitamos crear un proyecto que tiene que tener una versión especifica de node o que tiene que hacer un atach porque puede variar mucho una versión de Node a otra, para prever estó tenemos que crear un archivo ``.nvmrc`` y aquí es donde vamos a manejar el Node al que vamos a hacer atach, para poder hacer estó creamos como ya lo dijimos hace un momento el archivo nvm.

Si ya instalaste nvm y la terminal de linux sigue sin reconocerte el comando, tal vez te hallas saltado el sigueinte paso:
``source ~/.nvm/nvm.sh``

Una vez hecho estó podemos comprobar la versión de node haciendo ``node -v``

## Redux Thunk

Un Thunk es una función que está dentro de una función, esto es una función común pero en esté caso lo especial de está funcion es que está funcion está siendo retornada a esa función y Redux Thunk lo que hace con esté Thunk es hacerle un atach o un bind de la función dispatch para poder despachar acciones y la función getState, estó nos garantiza que cuando estemos trabajando con funciones asincronas, en esté caso cuando vamos a hacer la petición de nuestro inicio de sessión o de nuestro registro de usuario tenemos que seguir ciertos pasos, si estamos haciendo la petición al incio de sesión, todo está bien, luego vamos a tener que ejecutar o despachar otra acción, que va ha ser la que va ha settear el estado de nuestro store, y si quisieramos en algún otro momento cambiar algún otro estado, podemos hacerlo agregando un then o un try catch y en ese caso despachamos otra acción, de igual forma si ocurre algún error podemos settear un action que tenga que ver con errores que maneje nuestros errores y despachamos esa acción, para nuestro errores.

### Intalación

``npm redux-thunk``
``yarn add redux-thunk``

Despues de la instalación vamos a iniciar el proceso de configuración de esté Thunk, para poder hacer eso primero tenemos que ir a nuestro servidor de Frontend y en el archivo index que es donde inicia todo está historia del lado del cliente vamos a crear e importar 2 cosas; 

**applyMiddleware**: Lo que hace es aplicar el middleware de redux-thunk  
