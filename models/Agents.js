import db from "./db.js"

const Agents = db.sequelize.define("agents", {
    agentid: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    agentname: {
        type: db.Sequelize.STRING,
    },
    agentrole: {
        type: db.Sequelize.STRING,
    },
    agentsex: {
        type: db.Sequelize.ENUM('Masculino', 'Feminino', 'Outro'),
    },
    agentyear: {
        type: db.Sequelize.INTEGER,
    },
    agenticon: {
        type: db.Sequelize.STRING,
    }
});

Agents.sync({force:false});

export default Agents