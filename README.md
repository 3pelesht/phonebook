# phonebook
Phonebook nodejs server for best guys

install with npm `npm install git+ssh://git@github.com/3pelesht/phonebook.git`
require in project `const telphoneServer = require('phonebook')`

install with git:
```
git clone git@github.com:3pelesht/phonebook.git
npm run install // install db & configs
npm run reinstall // reinstall db & configs
npm run test // test
npm start // start web service
```
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