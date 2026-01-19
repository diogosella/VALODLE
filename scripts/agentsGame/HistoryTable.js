
const searchbar = document.querySelector("#agentInput");
const button = document.querySelector("#submit-button")
const line = document.querySelector("#guessing-line")

const name = document.querySelector("#guessing-name")
const sex = document.querySelector("#guessing-sex")
const role = document.querySelector("#guessing-role")
const year = document.querySelector("#guessing-year")


button.addEventListener('click', async(event) => {
    event.preventDefault();
    
    
  const chosenAgent = searchbar.value.trim();
  
  if (searchbar.value == "") {
      return 0;
    }
    
    const response = await fetch(
        `http://localhost:3001/agents?search=${encodeURIComponent(chosenAgent)}`
    );
    
    const data = await response.json();
    const agent = data[0];
    console.log(data);

        if (data.length === 0) {
        alert("Agente não encontrado");
        return;
    }

    let agentsex = agent.agentsex;
    
    if (agent.agentsex === "male") {
        agentsex = "Masculino";
    } else if (agent.agentsex === "female") {
        agentsex = "Feminino"
    } else {
        agentsex = "Outro" };


        const guess = document.createElement("tr");
        guess.innerHTML = `
            <td>${agent.agentname}</td>
            <td>${agentsex}</td>
            <td>${agent.agentrole}</td>
            <td>${agent.agentyear}</td>
        `
    
        line.appendChild(guess);
        console.log("clicou");
})

