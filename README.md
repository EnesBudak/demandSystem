# Basit Talep Sistemi

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

2 Tür talep türü (belge talebi,destek talebi )üzerinden talep oluşturulabilen ve takibinin yapıldığı talep sistemi.

# Detaylar

Projenin içerdikleri:

- Belge üzerinde CRUD işlemleri
- Belgelerin bağlı oldugu birim üzerinde CRUD işlemleri
- Belgelerin bağlı oldu branşlar üzerinde CRUD işlemleri
- Belgelerin durumu ile ilgili işleyiş işlemleri

### Kullanılan Teknolojiler

Dillinger uses a number of open source projects to work properly:

- [Express] - fast node.js network app framework
- [Mongoose] - elegant mongodb object modeling for node.js
- [Socket.io] - FEATURING THE FASTEST AND MOST RELIABLE REAL-TIME ENGINE
- [multer] - for file upload and storage
- [node.js] - is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### Kurulum

Projenin çalışması için [Node.js](https://nodejs.org/) v4+ üzeri olmalı.

Install the dependencies and devDependencies and start the server.

```sh
$ cd demandSystem
$ npm install -d
$ npm start
```

### Rotalar

```sh
BASE URL = localhost:3000/api/v1/
```

| Request         | GET/POST/PATCH/DELETE                     |
| --------------- | ----------------------------------------- |
| documentRequest | localhost:3000/api/v1/documentRequest/:id |
| supportRequest  | localhost:3000/api/v1/supportRequest/:id  |
| unit            | localhost:3000/api/v1/unit/:id            |
| branch          | localhost:3000/api/v1/branch/:id          |
| requestStatus   | localhost:3000/api/v1/requestStatus       |

### Todos

- Testler yazılacak
- Socket eklenecek
- Docker eklenecek

## License

MIT

[node.js]: http://nodejs.org
[express]: http://expressjs.com
