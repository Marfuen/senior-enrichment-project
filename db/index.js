const Student = require("./Student");
const Campus = require("./Campus");
const db = require("./db");

const syncAndSeed = () => {
  return db.sync({force: true})
    .then(() => {
      Promise.all([
        Campus.create({id: 1, name: 'Harvard', imageUrl: 'https://www.hcs.harvard.edu/sites/all/themes/hcs/images/splash.jpg',address: '123 Hooligan St, NY, NY, 11160'}),
        Campus.create({id: 2, name: 'Yale', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Benjamin_Franklin_College_Yale.jpg', address: '555 Hulu Ave, 26th st, New York, NY, 11111'}),
        Campus.create({id: 3, name: 'Julliard', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Juilliard_School_-_Alice_Tully_Hall.jpg' , address: '1200 Netflix Ave, 145th st, Hollywood, CA'}),
        Campus.create({id: 4, name: 'Columbia', imageUrl: 'https://timedotcom.files.wordpress.com/2017/02/columbia-university.jpg?quality=85' , address: 'asdasda'}),
      ]);
    })
    .then(() => {
      Promise.all([
        Student.create({firstName: 'Moe', lastName: 'Smith', email: 'moesmith@gmail.com', gpa: 4.0, campusId: 2}),
        Student.create({firstName: 'Larry', lastName: 'Wheels', email: 'larryw@gmail.com', gpa: 1.2, campusId: 1}),
        Student.create({firstName: 'Curly', lastName: 'Mathers', email: 'curlyms@gmail.com', gpa: 3.5, campusId: 1}),
      ]);
    });
};

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Student,
  Campus,
  syncAndSeed
}
