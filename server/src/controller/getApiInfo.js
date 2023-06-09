const {Country, Activity} = require('../db.js');
const axios = require('axios');

const getApiInfo = async () => {
    const apiUrl = await axios.get('http://localhost:5000');
    const apiInfo = await apiUrl.data.map((c) => {
        return {
            id: c.cca3,
            name: c.name.common,
            flag: c.flags[0],
            continent: c.continents[0],
            capital: c.capital,
            subregion: c.subregion,
            area: c.area,
            population: c.population,
        }
    })

    const guardar = () => {
        apiInfo.map(i => {
            Country.findOrCreate({
                where: {
                    id: i.id,
                    name: i.name,
                },
                defaults: {
                    flag: i.flag,
                    continent: i.continent,
                    capital: i.capital,
                    subregion: i.subregion,
                    area: i.area,
                    population: i.population,
                },
            }).catch((err) => {console.log(err)});
        });
    }
    guardar();
    return apiInfo;
}

const getDbInfo = async () => {
    await getApiInfo();
    const aux = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: [],
            }
        }
    });
    return aux;
}

const getActivities = async () => {
    const get = await Activity.findAll()
    return get;
}

module.exports = {getDbInfo, getActivities};