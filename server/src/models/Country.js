const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

/* MODELO 1 | Country

ID (Código de tres letras). *
Nombre. *
Imagen de la bandera. *
Continente. *
Capital. *
Subregión.
Área.
Población. * */

module.exports = (sequelize) => {
	sequelize.define('Country', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		flag: {
			type: DataTypes.STRING,
			allowNull: false
		},
			capital: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: true
		},
			continent: {
			type: DataTypes.STRING,
		},
			subregion: {
			type: DataTypes.STRING,
		},
			area: {
			type: DataTypes.INTEGER,
		},
			population: {
			type: DataTypes.INTEGER,
		}
	});
}