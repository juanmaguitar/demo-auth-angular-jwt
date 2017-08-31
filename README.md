# Project Super COOL

## Installation

To install the dependencies needed for this project you must do first of all

```
npm install
```


## (local) Use

In order to have this project working you'll need a `.env` file w/ the following settings:

```
PORT=XXXX
DB_URI=XXXXXXXXXXXXXXXX
```

## Register 

```
curl -X POST -H "Content-Type: application/json" localhost:3000/register -d '{ "username": "juanma", "password": "12345" }'
```

## Login

```
curl -X POST -H "Content-Type: application/json" localhost:3000/login -d '{ "username": "juanma", "password": "12345" }'
```

## GET w/o JWT

```
curl localhost:3000/private
```

## Auth w/ JWT

```
curl localhost:3000/data --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5YTgxOTNhMzQxMGE1MDc0MGM2YTBmNyIsInVzZXJuYW1lIjoianVhbm1hIiwiaWF0IjoxNTA0MTkxNTQwfQ.LCqJpJmj75kDXq5U__hEYmmOJxTkxan-FxmBX-Yd5Po"
``