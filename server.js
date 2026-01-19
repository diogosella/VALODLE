import express from "express";
import cors from "cors";
import agents from "./models/Agents.js";
import { Op } from "sequelize";

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
          [Op.like]: `%${searchInput}%`
        }
      }
    });

    res.json(agentList);
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao buscar agentes" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
