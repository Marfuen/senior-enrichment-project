const express = require('express');
const app = express();
const path = require('path');
const {Campus, Student, syncAndSeed} = require("./db/index");

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/campuses', (req,res,next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

app.get('/api/students', (req,res,next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

app.post('/api/campuses', (req,res,next) => {
  Campus.create({
    name: req.body.name,
    address: req.body.name
  })
    .then(campus => res.json(campus))
    .catch(next);
});

app.post('/api/students', (req,res,next) => {
  Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gpa: req.body.gpa,
    campusId: req.body.campusId,
  })
  .then(student => res.json(student))
  .catch(next);
});

app.delete('/api/campuses/:id', (req,res,next) => {
  Campus.destroy({where: {id: req.params.id}})
    .then(campus => res.json(campus))
    .catch(next);
});

app.delete('/api/students/:id', (req,res,next) => {
  Student.destroy({where: {id: req.params.id}})
    .then(student => res.json(student))
    .catch(next);
});

app.put('/api/students/:id', (req,res,next) => {
  Student.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      gpa: req.body.gpa,
      campusId: req.body.campusId,
    },
    {
      returning: true,
      where: {id: req.params.id}
    }
  )
  .then(([[student]]) => res.json(student))
  .catch(next);
});

syncAndSeed()
  .then(() => {
    app.listen(port, ()=> console.log(`listening on port http://localhost:${port}`))
  })
  .catch(e => console.log(e));
