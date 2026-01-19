const input = document.querySelector("#agentInput");
const cardList = document.querySelector(".cards");

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

    data.forEach(agent => {
        const card = document.createElement("div");
        card.classList.add("agentCard");

        card.innerHTML = `
            <img src="assets/images/agent-images/${agent.agenticon}">
            <span>${agent.agentname}</span>
        `;

        card.addEventListener("click", () => {
            input.value = agent.agentname;
            cardList.innerHTML = "";
        });

        cardList.appendChild(card);
    });
});
