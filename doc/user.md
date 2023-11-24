# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "test",
  "password": "12345678",
  "name": "test"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "test",
    "name": "test"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "test",
  "password": "12345678"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or Password Wrong"
}
```

## Update User API

Endpoint : PATH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "test",
  "password": "12345678"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "test",
    "name": "test"
  }
}
```

Response Body Error :

```json
{
  "errors": "Name or Password length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "test",
    "name": "test"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```