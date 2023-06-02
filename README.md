## Instalar JSON Server


```shell
$ npm i json-server --save-dev
```

## Modificar el package.json y en la seccion de scripts agregar lo siguiente:

```json
...
"scripts": {
    ...
    "dev:api": "json-server --watch ./src/data/db.json"
    ...
}
```