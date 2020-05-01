const Sequelize = require('sequelize');

const sequelize = new Sequelize('class4', 'root', null, {
    host: 'localhost',
    dialect: 'mariadb'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

class Users extends Sequelize.Model { }
Users.init({
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    telephone: {
        type: Sequelize.STRING
    },
    adress: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'users' });

sequelize.sync()
    .then(() => Users.create({
        firstName: 'Juan',
        lastName: 'Gonzalez',
        telephone: 123456,
        adress: 'concordia 789'
    }))
    .then(user => {
        console.log(user.toJSON());
    });


Users.update({ firstName: "Lola" }, {
    where: {
        lastName: 'Rodriguez'
    }
}).then(() => {
    console.log("Done");
});