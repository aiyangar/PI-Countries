const {DataTypes} = require('sequelize');

/* MODELO 2 | Activity

ID. *
Nombre. *
Dificultad (número del 1 al 5). *
Duración (en horas).
Temporada (Verano, Otoño, Invierno o Primavera). * */

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
        }
    });
}