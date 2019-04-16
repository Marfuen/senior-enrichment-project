const Sequelize = require("sequelize");
const db = require("./db");

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://png2.kisspng.com/sh/30375f491c879b05deb062066b1b4fb6/L0KzQYm3VMI3N6ttj5H0aYP2gLBuTgN1fZVqhuY2Z4LkdMbolPlwdl5ofeRubXBxiX76kgViepYyedVqZHXwebS0gBFxNZh3RadqZUG5R4XsWPQ2O2E6Rqg7OEG3QIe3UcUzPGg3SaYDNkW6SIq1kP5o/kisspng-student-graduation-ceremony-square-academic-cap-gr-5ae1674e8d5305.6281406015247214865789.png',
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0,
    }
  },
});

module.exports = Student;
