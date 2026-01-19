const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "agents",
    "root",
    "sqlpass",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then((function() {
    console.log("deu bom");
})).catch(function(erro) {
    console.log("nao deu bom: " + erro);
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}