### Instalamos dependencias
```bash
$ npm install
```

### Crear red de docker
```bash
$ docker network create net-library
```

### Crear volumen de docker
```bash
$ docker volume create vol-library-book-app
``` 

### Crear imagen
```bash
$ docker build -t library-book:latest .
```

### Crear contenedor
```bash
$ docker run --name library-book -d --hostname bookapi -p 3000:3000 --network net-library -v vol-library-book-app:/usr/src/app library-book
```