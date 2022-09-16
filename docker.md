## PostgreSQL:
```$
docker run --name basic-postgres --rm -e POSTGRES_USER=username -e POSTGRES_PASSWORD=password -e PGDATA=/var/lib/postgresql/data/pgdata -v /tmp:/var/lib/postgresql/data -p 5432:5432 -it postgres:14.1-alpine
```

### Docker build apps and run apps:
```$
docker build -t app .
docker run -p 8000:8000 app
```

### Accessing the Docker containers:
```$
docker exec -it expenses_list bash
```

### Others comands for Docker:
```$
docker rmi image-id  # Remove images by image-id
```
---

## Redis:
```$
docker run --name recorder-redis -p 6379:6379 -d redis:alpine
```

- redis-cli
- auth yourpassword
- keys *
- get key_name

### Install redis-tools
```$
sudo apt-get install redis-tools 
```

### Connect to redis
```$
redis-cli -h 172.17.0.2 -p 6379
```
