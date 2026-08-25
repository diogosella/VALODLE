const searchbar = document.querySelector("#agentInput");
const button = document.querySelector("#submit-button")
const line = document.querySelector("#guessing-line")

let missCount = 1;  

button.addEventListener('click', async(event) => {
    event.preventDefault();
    
    const chosenAgent = searchbar.value.trim();

        if (!chosenAgent) {
            return;
        }
    
    const baseAgent = await window.baseAgentPromise;

    if (!baseAgent) {
        return;
    }
    
    const response = await fetch(
        `http://localhost:3001/agents?search=${encodeURIComponent(chosenAgent)}`
    );
    
    const data = await response.json();
    
    if (data.length === 0) {
        return;
    }
    
    const normalizedChosenAgent = chosenAgent.toLowerCase();

    const agent = data.find(currentAgent => {
        const normalizedName = currentAgent.agentname.trim().toLowerCase();

        return !window.gameState.chosenAgents.has(normalizedName);
    });

    if (!agent) {
        return;
    }
    
    const normalizedAgent = agent.agentname.trim().toLowerCase();

    if (window.gameState.chosenAgents.has(normalizedAgent)) {
        return;
    }


    const agentsex = agent.agentsex;

        const isCorrect = agent.agentid === baseAgent.agentid;
        const sameSex = agent.agentsex === baseAgent.agentsex;
        const sameRole = agent.agentrole === baseAgent.agentrole;
        const sameYear = agent.agentyear === baseAgent.agentyear;

        if (isCorrect) {
        const resultMessage = document.querySelector(".resultText");
        const mainInput = document.querySelector(".mainInput");
            resultMessage.innerHTML = `
                <img class="resultPic" src="${agent.agenticon}">
                <h1 class="resultTitle">Você acertou!</h1>
                <p class="resultSubtitle">Você descobriu ${agent.agentname} em ${missCount} tentativas!</p>
                
            `;
        searchbar.remove();
        mainInput.remove();
    } else {
        missCount++;
    }


        const guess = document.createElement("tr");
        guess.innerHTML = `
            <td class="${isCorrect ? "correct" : "wrong"}">
            ${agent.agentname}</td>

            <td class="${sameSex ? "correct" : "wrong"}">
            ${agentsex}</td>

            <td class="${sameRole ? "correct" : "wrong"}">
            ${agent.agentrole}</td>

            <td class="${sameYear ? "correct" : "wrong"}">
            ${agent.agentyear}</td>
        `
    
        line.appendChild(guess);
        window.gameState.chosenAgents.add(normalizedAgent);
        
        document.querySelectorAll(".agentCard").forEach(card => {
            if (card.dataset.agentName === normalizedAgent) {
                card.remove();
            }
        });
        document.querySelector(".cards").innerHTML = "";
        searchbar.value = "";
});

