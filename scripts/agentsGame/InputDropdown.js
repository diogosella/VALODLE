const input = document.querySelector("#agentInput");
const cardList = document.querySelector(".cards");
const submitButton = document.querySelector("#submit-button")

input.addEventListener("input", async () => {
    const value = input.value.trim();
    console.log(input.value);

    if (!value) {
        cardList.innerHTML = "";
        return;
    }

    const response = await fetch(
        `http://localhost:3001/agents?search=${encodeURIComponent(value)}`
    );

    const data = await response.json();

    cardList.innerHTML = "";

    const availableAgents = data.filter(agent => {
        const normalizedName = agent.agentname.trim().toLowerCase();

        return !window.gameState.chosenAgents.has(normalizedName);
    });

    availableAgents.forEach(agent => {
        const card = document.createElement("div");
        const normalizedName = agent.agentname.trim().toLowerCase();

        card.classList.add("agentCard");
        card.dataset.agentName = normalizedName;

        card.innerHTML = `
            <img src="assets/images/agent-images/${agent.agenticon}">
            <span>${agent.agentname}</span>
        `;

        card.addEventListener("click", () => {
            input.value = agent.agentname;
            cardList.innerHTML = "";
            submitButton.click();
        });

        cardList.appendChild(card);
    });
});
