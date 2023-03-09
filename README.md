# Aplicación descentralizada para la gestión de estudiantes y profesorado

Blockchain: Desarrollo de aplicaciones

Máster Universitario en Ingeniería de Redes y Servicios Telemáticos de la UPM

2022 - 2023

## Configuración de Ganache

1. Ejecutar Ganache
2. Crear un Workspace nuevo usando el fichero [truffle-config.js](truffle/truffle-config.js)
3. Desde la terminal en el directorio truffle/ del proyecto ejecutar:
    ```
    npx truffle compile
    npx truffle migrate
    ```

## Configuración de Metamask
1. Crear una nueva red

    1.1. Nombre de la red: Ganache

    1.2. Nueva dirección URL de RPC: http://127.0.0.1:7545

    1.3. Identificador de cadena: 1337

    1.4. Símbolo de moneda: ETH
2. Importar cuentas de Ganache a Metamask: por lo menos una para el owner del contrato, otra para el coordinador, otra para un profesor y otra para un alumno.

## Configuración de la dapp
1. Desde la terminal en el directorio dapp/ ejecutar `npm install` para instalar todas las dependencias del [package.json](dapp/package.json)
2. Importar los artefactos en la dapp: copiar la carpeta truffle/build/contracts/ y su contenido en dapp/src
3. Ejecutar la dapp
    ```
    npm start
    ```
