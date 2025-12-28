USE agents

CREATE TABLE agents (
  agentid int AUTO_INCREMENT PRIMARY KEY,  
  agentname varchar(50),
  agentrole varchar(12),
  agentsex ENUM ('male', 'female', 'other'),
  agentyear YEAR,
);

ALTER TABLE agents
    ADD agentpic varchar(255)

INSERT INTO agents(agentname, agentrole, agentsex, agentyear, agentpic)
VALUES
('Brimstone', 'Controlador', 'male', 2020, 'brimstone.webp'),
('Phoenix', 'Duelista', 'male', 2020, 'phoenix.webp'),
('Sage', 'Sentinela', 'female', 2020, 'sage.webp'),
('Sova', 'Iniciador', 'male', 2020, 'sova.webp'),
('Viper', 'Controlador', 'female', 2020, 'viper.webp'),
('Cypher', 'Sentinela', 'male', 2020, 'cypher.webp'),
('Reyna', 'Duelista', 'female', 2020, 'reyna.webp'),
('Killjoy', 'Sentinela', 'female', 2020, 'killjoy.webp'),
('Breach', 'Iniciador', 'male', 2020, 'breach.webp'),
('Omen', 'Controlador', 'other', 2020, 'omen.webp'),
('Jett', 'Duelista', 'female', 2020, 'jett.webp'),
('Raze', 'Duelista', 'female', 2020, 'raze.webp'),
('Skye', 'Iniciador', 'female', 2020, 'skye.webp'),
('Yoru', 'Duelista', 'male', 2021, 'yoru.webp'),
('Astra', 'Controlador', 'female', 2021, 'astra.webp'),
('KAY/O', 'Iniciador', 'other', 2021, 'kayo.webp'),
('Chamber', 'Sentinela', 'male', 2021, 'chamber.webp'),
('Neon', 'Duelista', 'female', 2022, 'neon.webp'),
('Fade', 'Iniciador', 'female', 2022, 'fade.webp'),
('Harbor', 'Controlador', 'male', 2022, 'harbor.webp'),
('Gekko', 'Iniciador', 'male', 2023, 'gekko.webp'),
('Deadlock', 'Sentinela', 'female', 2023, 'deadlock.webp'),
('Iso', 'Duelista', 'male', 2023, 'iso.webp'),
('Clove', 'Controlador', 'other', 2024, 'clove.webp'),
('Vyse', 'Sentinela', 'female', 2024, 'vyse.webp');