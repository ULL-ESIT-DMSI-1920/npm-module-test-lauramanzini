 # Testing de la extensión gh-repo-rename

Estudiante: Laura Manzini - alu0101531700@ull.edu.es

## Descripción 

En esta practica se hace el testing de la extensión *gh-repo-rename* a través del utilizo de Mocha y Chai.

Por primero es necesario instalar Mocha y Chain ejecutando el siguiente comando:

```
npm install mocha --save-dev
npm install chai --save-dev
```

Es necesario añadir al fichero package.json las siguiente dipendencias:

```
 "devDependencies": {
    "mocha": "latest"
  },
```

Luego se instalan las dipendencias y se inicializa Mocha.
```
npm install
mocha init test
```` 

Se inicializa un fichero llamado (tests)[./tests/tests.js] para crear los tests.

## Mocha y Chai

**Mocha** es un framework de pruebas de JavaScript que se ejecuta en Node.js. Las pruebas de Mocha se ejecutan en serie, lo que permite informes flexibles y precisos.

Al describir de las pruebas Mocha utilizas dos funciones principales que son:

* describe(): función que agrupa las pruebas en mocha
* it(): funcioón que se utiliza para un caso de prueba individual. In particular la función toma dos argumentos, una cadena que explica lo que debe hacer la prueba y una función de devolución de llamada


**Chai** es un librería de aserciones, la cual se puede emparejar con cualquier marco de pruebas de Javascript. Chai tiene varias interfaces: assert, expect y should, que permiten al desarrollador elegir el estilo que le resulte más legible y cómodo a la hora de desarrollar sus tests.

## Documentación
 
A través de **JSDoc 3** es posible generar la documentación. JSDoc 3 es un generador de documentación API para JavaScript, similar a Javadoc o phpDocumentor. Un vez que se han añadidos los comentarios al código fuente la herramienta JSDoc escaneará el gódigo y generará un sitio web de documentación HTML.

Para instalar la herramienta es necesario ejecutar el siguiente comando:

```
npm install jsdoc
```

La documentación se genera ejecutando:

```
jsdoc book.js
```