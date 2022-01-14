# Testing de la extensión gh-repo-rename

Estudiante: Laura Manzini - alu0101531700@ull.edu.es

1. [Descripción](#descr)
2. [Mocha y Chai](#mochaychai)
3. [Ejecución](#ejec)
4. [GitHub Actions](#githubactions)
5. [Documentación](#doc)

<a name="descr"/>
## 1. Descripción 

En esta practica se hace el testing de la extensión *gh-repo-rename* a través de las herramientas Mocha y Chai.

Por primero es necesario instalar Mocha y Chai ejecutando el siguiente comando:

```
npm install mocha --save-dev
npm install chai --save-dev
```

Es necesario añadir al fichero [package.json](./package.json) las siguientes dipendencias:

```
 "devDependencies": {
    "mocha": "latest"
  },
```

Luego se instalan las dipendencias y se inicializa Mocha.

```
npm install
mocha init test
```

Se inicializa un fichero llamado [tests](./tests/tests.js) para desarrollar los tests.

<a name="mochaychai"/>
## 2. Mocha y Chai

**Mocha** es un framework de pruebas de JavaScript que se ejecuta en Node.js. Las pruebas de Mocha se ejecutan en serie, lo que permite informes flexibles y precisos.

Al describir de las pruebas Mocha utilizas dos funciones principales que son:

* *describe()*: función que agrupa las pruebas en mocha.
* *it()*: función que se utiliza para un caso de prueba individual. In particular la función toma dos argumentos, una cadena que explica lo que debe hacer la prueba y una función de devolución de llamada.

**Chai** es un librería de aserciones, la cual se puede emparejar con cualquier marco de pruebas de Javascript. Chai tiene varias interfaces: assert, expect y should, que permiten al desarrollador elegir el estilo que le resulte más legible y cómodo a la hora de desarrollar sus tests.


<a name="ejec"/>
## 3. Ejecución 

Los pruebas que sen han desarrollado por la extension se encuentran en el fichero [tests](./tests/tests.js). En el fichero [package.json](./package.json) se define en corrispondencia de "test" el siguiente comando: 

```js
"scripts": {
    "test": "mocha --recursive ./tests/tests.js"
```

Luego se comproba el correcto funcionamiento de las pruebas ejecutando el siguiente comando:

```
npm run test
```

<a name="githubactions"/>
## 4. GitHub Actions
GitHub Actions es una herramienta que permite reducir la cadena de acciones necesaria para la ejecución de código, mediante la creación de un de flujo de trabajo encargado del Pipeline. Siendo configurable para que GitHub reaccione a ciertos eventos de forma automática según nuestras preferencias.

Para poner en marcha GitHub Actions se define un fichero `node.js.yml` donde se denfine el flujo de trabajo, también conocido como **workflow**. Es fundamental que se defina sobre este workflow el *GITHUB_TOKEN* como un segreto del repositorio, sino no se ejecutaran las pruebas por un problema de credenciales de gh.

Lo siguiente es el resultado obtenido por la ejecución del workflow.

```
> @lauramanzini/gh-repo-rename@1.2.5 test /home/runner/work/npm-module-test-lauramanzini/npm-module-test-lauramanzini
> mocha --recursive ./tests/tests.js

  Get repository information
    ✔ 	 gets function length
    ✔ 	 gets repository id through should function (1590ms)
    ✔ 	 gets repository Id through assert function (216ms)
    ✔ 	 repository id is not equal to another repository id (195ms)

  Change repository name
    ✔ 	 gets repository new name (306ms)
    ✔ 	 new repository name is correct (293ms)


  6 passing (3s)
```

<a name="doc"/>
## 5. Documentación
 
A través de **JSDoc 3** es posible generar la documentación. JSDoc 3 es un generador de documentación API para JavaScript, similar a Javadoc o phpDocumentor. Un vez que se han añadidos los comentarios al código fuente la herramienta JSDoc escaneará el código y generará un sitio web de documentación HTML.

Para instalar la herramienta es necesario ejecutar:

```
npm install -g jsdoc
```

La documentación se genera utilizando la función `jsdoc` y indicando el fichero en el que se han definidos los comentarios, en este caso el fichero `repo-rename.js`.

```
jsdoc repo-rename.js
```

La documentación se encontrará en el fichero [out](./out) que la herramienta JSDoc 3 ha creado.
