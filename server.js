import express from "express";
import cors from "cors";
import agents from "./models/Agents.js";
import { Op } from "sequelize";


function getCurrentDay() {
  return new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Sao_Paulo"
  })
}

function createNumberFromText(text) {
    let result = 0;

    for (const character of text) {
        result = (result * 31 + character.charCodeAt(0)) >>> 0;
    }

    return result;
}

const app = express();

app.use(cors({
  origin: "http://localhost:5500"
}));

app.get("/agents", async (req, res) => {
  try {
    const searchInput = req.query.search || "";

    const agentList = await agents.findAll({
      where: {
        agentname: {
          [Op.iLike]: `${searchInput}%`
        }
      }
    });

    res.json(agentList);
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao buscar agentes" });
  }
});

app.get("/daily-agent", async (req, res) => {
  try {
    const agentList = await agents.findAll({
      order: [["agentid", "ASC"]]
    });

    if (agentList.length == 0) {
      return res.status(404).json({
        error: "Nenhum agente cadastrado"
      });
    }

    const currentDay = getCurrentDay();
    const dailyNumber = createNumberFromText(currentDay);
    const agentIndex = dailyNumber % agentList.length;

    const dailyAgent = agentList[agentIndex];

    res.json(dailyAgent);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Erro ao escolher agente diario"
    })
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
