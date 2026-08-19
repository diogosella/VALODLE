import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "valodle",
    "postgres",
    "pgpassword",
    {
        host: "127.0.0.1",
        port: 5432,
        dialect: "postgres"
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("Conectado ao PostgreSQL");
    })
    .catch((error) => {
        console.error("Erro ao conectar ao PostgreSQL:", error);
    });

export default {
    Sequelize,
    sequelize
};