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

Un **Thunk es una función que está dentro de una función**, esto es una función común pero en esté caso lo especial de está funcion es que está funcion está siendo retornada a esa función y Redux Thunk lo que hace con esté Thunk es hacerle un atach o un bind de la función dispatch para poder despachar acciones y la función getState, estó nos garantiza que cuando estemos trabajando con funciones asincronas, en esté caso cuando vamos a hacer la petición de nuestro inicio de sessión o de nuestro registro de usuario tenemos que seguir ciertos pasos, si estamos haciendo la petición al incio de sesión, todo está bien, luego vamos a tener que ejecutar o despachar otra acción, que va ha ser la que va ha settear el estado de nuestro store, y si quisieramos en algún otro momento cambiar algún otro estado, podemos hacerlo agregando un then o un try catch y en ese caso despachamos otra acción, de igual forma si ocurre algún error podemos settear un action que tenga que ver con errores que maneje nuestros errores y despachamos esa acción, para nuestro errores.

### Intalación

``npm redux-thunk``
``yarn add redux-thunk``

Despues de la instalación vamos a iniciar el proceso de configuración de esté Thunk, para poder hacer eso primero tenemos que ir a nuestro servidor de Frontend y en el archivo index que es donde inicia todo está historia del lado del cliente vamos a crear e importar 2 cosas; 

**applyMiddleware**: Lo que hace es aplicar el middleware de redux-thunk  


## Configuración de fileMocks y styleMocks


Nuestra aplicación está casi lista, ya tenemos integrados enpoints como el de registro de usuarios y el inicio de sesión de usuarios también integramos endpoints como el del listado de las peliculas o el listado de peliculas asociadas al usuario con la sesión iniciada, ahora ha llegado el momento de agregarlo otro paso a nuestro proyecto que es agregarle pruebas con la ayuda de Jest y enzyne, para esto procedemos a instalar estos paquetes:

``yarn add jest enzyme babel-jest enzyme-adapter-react-16 react-test-renderer --dev``

- Instalamos jest y enzyne también instalamos un adapter para react16 y también instalamos un utils de react para renderizar componentes.


Ya que estó está instalado, vamos a proceder a ir a nuestro packages.json y vamos a crear 2 comandos, el primer comando va ha ser test y estó va ha ejecutar jest:

``"test": "jest"``: Una vez que hagamos esto, va a ejecutar todas las pruebas en un folder que tenga cierta estructura, en esté caso nosotros ocuparemos la estrucutura "__test___".
``"test:watch" : "jest --watch"`` estó lo que va hacer es ejecutar y quedarse observando todo cambio en nuestros test.

Ya con estó podriamos empezar la prueba de nuestros componentes pero primero de esto tenemos que hacer una configuración primero, está configuración se tiene primero que hacer en nuestro packages.json, para precisamente poder observar de ciertos archivos que no vamos a poder mockear, **mockear**: Es simular un archivo, para hacer esto simplemente llamamos a jest al momento de ejcutarse va ha buscar esto en el script.

```json
"jest": {
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif)$": "<rootDir>/src/frontend/__mocks__/fileMock.js",
      "\\.(scss|sass)$": "<rootDir>/src/frontend/__mocks__/styleMock.js"
    }
```

fileMock.js 
```js
module.exports = 'test-file-stubs';
```

styleMock.js
```js
module.exports = {};
```


## Implementando pruebas en el footer

Ha llegado el momento de realizar las pruebas a nuestros componentes para esto vamos a empezar con una pequeña prueba para el footer, luego vamos a ir progresando y añadiendo un poco más de complejidad.

Lo primero que tenemos que hacer es crear un folder donde van ha estar contedidos nuestras pruebas ``_test_`` y aquí vamos a añadir nuestras pruebas de ciertos componentes. 

Probando el componete de Footer.

```jsx
import React from 'react';
import { create } from 'react-test-renderer';
import { render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('Footer testing', () => {
  test('Match Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });

  // Test que sirve para comprobar que nuestro componente
  // tenga la clase Footer
  test('Footer haves class .footer', () => {
    const footer = shallow(<Footer />);
    const footerElement = footer.find('footer');
    expect(footerElement.hasClass('footer')).toBe(true);
  });

// Probando la cantidad de elementos acla
  test('Footer haves 3 anchor tags', () => {
    const footer = render(<Footer />);
    expect(footer.find('a')).toHaveLength(3);
  });
});
```

Un Snapshot es una copia de nuestro componente, normalmente los snapshot se prueban cuando un componente de snapshot no va ha cambiar a lo largo del tiempo, un footer en realizad no cambia mucho pues siempre va ha los mimos links y es muy raro que cambie algo de esté componente.

Shadow: es una función de enzyme que básicamente virtualiza el dom y renderiza nuestro componente para poder acceder a elementos como las clases.

find: Sirve para buscar alguna propiedad de nuestro componente, podemos buscar por tag HTML, por Clase o por ID; 
```js
const htmlElement = footer.find('footer');
const htmlClass = footer.find('.footer');
const htmlId = footer.find('#footer');
```

con esta instrucción compara si esté elemento html contiene la clase footer.
```js
  expect(footerElement.hasClass('footer')).toBe(true);
```

Ahora podemos correr nuestros test con el comando test que agregamos al principio.

## Creando Mocks del Store

Ahora vamos aprender a hacer un mock de nuestro store porque cuando estamos usando react-router y redux, es necesario hacer un wrapper porque hay ciertas funciones o ciertos componentes que están siendo conectados, entonces necesitamos hacer esté mock para que todo funcione de manera adecuada y nuestros test no se rompan.

A continuación vamos a crear un mock, y es precisamente nuestro providerStore

```js
import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import initialState from '../initialState';
import reducer from '../reducers';
import { createBrowserHistory } from 'history';

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
);


export default ProviderMock;
```


Ya que tenemos incorporado nuestro provider mock vamos a probarlo haciendo un test para nuestro componente de header, lo primero que tenemos que hacer es crear un nuevo archivo `Header.test.js` aquí vamos a hacer casí lo mismo que hemos venido haciendo en todo nuestros test, que es importar react, la fuction create, nuestro componente Header y nuestro ProviderMock. Ya con estó tenemos todo para describir nuestra prueba 

Header.test.js
```js
import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../Header';

describe('Header component', () => {
  test('Match Snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });

});
```
Debemos ocupar el ProviderMock en todos nuestros componentes que estén conectados al store, de igual manera pada con el `CarouselItem.test.js`.

```js
import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import CarouselItem from '../CarouselItem';

describe('Carousel component', () => {
  test('Match Snapshot', () => {
    const carousel = create(
      <ProviderMock>
        <CarouselItem />
      </ProviderMock>,
    );
    expect(carousel.toJSON()).toMatchSnapshot();
  });

});
```

## Provando el envío del formulario

Ahora vamos a comprobar nuestro componente de registro no hallá cambios, y despues vamos a probar el formulario del registro para que cuando hagamos submit, o click en el botón submit lleguemos a nuestra función de envió de formulario, para esto lo que tenemos que hacer es ir a container que es donde tenemos nuestro formulario de registro.

```js
import React from 'react';
import { create } from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProviderMock from '../../__mocks__/providerMock';
import Register from '../Register';

configure({ adapter: new Adapter() });

describe('Register container', () => {
  test('Match Snapshot', () => {
    const register = create(
      <ProviderMock>
        <Register />
      </ProviderMock>,
    );
    expect(register.toJSON()).toMatchSnapshot();
  });
  it('Calls and executes preventDefault function onSumit from', () => {
    const preventDefault = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Register />
      </ProviderMock>,
    );
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  })
});
```

Usamos provider porque el registro está conectado a Redux


Si luego de crear un snapshot utilizando yarn jest, debemos realizar cambios en un script, necesitamos actualizar el snapshot para que el script actualizado y el nuevo snapshot puedan hacer match.

Para esto iniciamos

``yarn test:watch``

En donde vamos a utilizar una función para regenerar snapshots.

Presionamos u (To update failling snapshots)
y se actualizan todos los snapshots.

## Probando acciones

Ha llegado el momento de probar nuestras acciones y para esto lo que tenemos que hacer es lo que hemos venido haciendo todo esté tiempo, creando nuestro folder de `__test__` dentro de la carpeta de nuestras acciones, aquí adentro vamos a escribir "actions.test.js". Un test muy sencillo que podemos probar es que al momento de enviar una accion o despachar una accion con ciertos datos se apruebe que está enviando el mismo tipo y el mismo payload que estemos enviando en está función, para esto vamos a probar con un mock que será un MovieMock.js

```js
import { setFavorite, loginRequest, logoutRequest } from '../index';
import movieMock from '../../__mocks__/movieMock';

describe('Actions', () => {
  it('It should create an action to set favorite', () => {
    const payload = movieMock;
    const expected = {
      type: 'SET_FAVORITE',
      payload,
    };
    expect(setFavorite(payload)).toEqual(expected);
  });

  it('It should create an action to set loginRequest', () => {
    const payload = {
      email: 'test@test.com',
      password: 'thisisasecurepassword',
    };
    const expected = {
      type: 'LOGIN_REQUEST',
      payload,
    };
    expect(loginRequest(payload)).toEqual(expected);
  });
  
  it('It should create an action to set logoutRequest', () => {
    const payload = {};
    const expected = {
      type: 'LOGOUT_REQUEST',
      payload,
    };
    expect(logoutRequest(payload)).toEqual(expected);
  });
});
```

## Probando Gravatar function

Ahora vamos a proceder a probar el gravatar como ya hemos comentado, es una function que si la buscamos en nuestra carpeta de utils, es una function que recibe un email, y hace la transformación de un email que esté asociado a gravatar nos va a devolver esté mismo elemento y si no, gravatar nos va ha devolver una imagen por defecto, entonces lo que vamos a proceder a hacer aquí es agregar el test correspondiente.

Aquí vamos a probar que si estamos pasando un email que estemos seguros que no esté asociado, nos devuelva una imagen por defecto, la cual es una url de gravatar/avatar.

```js
import gravatar from '../gravatar';

describe('Gravatar function', () => {
  it('Should return gravatar default url', () => {
    const email = 'j@san.com';
    const gravatarDefaultImage = 'https://gravatar.com/avatar/bc0abafb0ca69600f35fa2a8d5e3729f';
    expect(gravatar(email)).toEqual(gravatarDefaultImage);
  });

});
```

Si nos damos cuenta los test siguen un patron bastante sencillo: es un string, una function, lo único que cambia es el expect que también es una function.

## Jest Coverages

Vamos a revizar con un pequeño reporte que vamos a generar con la ayuda de jest coverages, cual es el alcance de nuestro proyecto en pruebas y como podríamos implementar más, para eso sencillamente debemos ir a nuestro packages.json y añadir un comando más, esté comando que vamos a estar agregando vamos a decir que es coverage.

```json
{  
  "scripts": {
    "test:coverage": "jest --coverage"
  }
}
```

Lo que hace esté comando es que nos lanzará un reporte de que tiene pruebas y que no, pero si queremos ver esto más a detalle, podemos ingresar a la carpeta coverage/Icov-report/index.html, y esto va ha ser el reporte que se acaba de generar, y esté archivo lo podremos ver y analizar a detalle en nuestro navegador, aquí podemos ver que tiene pruebas y que no, la realidad depende de lo que necesitamos en nuestro proyecto lo que va ha tener pruebas, es muy dificil mantener un proyecto con 100% de pruebas, esto en la vida real es imposible, pero lo ideal es que sea de un 50% a un 80% de pruebas lo ideal.

Ya con esté reporte podemos saber exactamente cual es el alcance de nuestro proyecto y poder verificar a donde vamos a y que queremos hacer con las pruebas de nuestro proyecto, de igual forma si quieres profundizar más con testing, puedes ir a [jest](www.platzi.com/jest) aquí puedes ver un curso bastante completo de temas bastante completo donde te hablan temas fundamentales del testing, como implementarlo, como hacer pruebas a componentes a express y a todo lo que necesites y de igual forma si necesitas probar o analizar más temas acerca de como se hacen las pruebas en redux puedes ir a [redux-testing](https://redux.js.org/recipes/writing-tests) 