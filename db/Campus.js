const Sequelize = require("sequelize");
const db = require("./db");

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://img.pngio.com/school-png-photos-transparentpng-image-information-jpg-free-library-school-png-512_512.png'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  description: Sequelize.TEXT,
});

module.exports = Campus;
