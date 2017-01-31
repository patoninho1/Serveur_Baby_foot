# Serveur Baby Foot
##Prerequisites

- https://nodejs.org/en/
- https://www.mongodb.com/fr

##Installation:
go to the app floders and run
```
npm install
```

##Start the server: 
```
npm start
```
(Before you have to start mongo and create a "PrjBaby" database).

##Usage: 
- List : get http://localhost:3000/api/:type(babyfoot)
- Read : get http://localhost:3000/api/:type(babyfoot)/:id
- Create : post http://localhost:3000/api/:type(babyfoot)
- Update : patch http://localhost:3000/api/:type(babyfoot)/:id
- Delete : delete http://localhost:3000/api/:type(babyfoot)/:id
