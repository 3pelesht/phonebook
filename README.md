# phonebook
Phonebook nodejs server for best guys

install with npm `npm install git+ssh://git@github.com/3pelesht/phonebook.git`

for install db and configs `npm run install`

for reinstall db and configs `npm run reinstall`

for once test :) `npm run test`

for run project `npm start`

## POST user
### REQUEST
```
POST localhost:3000
path /add

{
    "displayname" : "displayname",
    "mobile" : 98999999,
    "phonenumber" : 9899999
}
```
### RESPONSE
```
{
    ok: true,
    statusCode: 200,
    statusText: 'ok'
}
```

## GET user
### REQUEST
```
GET localhost:3000
path /get
```
### RESPONSE
```
{
    ok: true,
    statusCode: 200,
    statusText: 'ok',
    data: [
        {
            id: 1,
            displayname: 'displayname',
            phonenumber: '98999999',
            mobile: '98999999'
        }
    ]
}
```