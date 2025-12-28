const agents = ['jett', 'phoenix', 'sage', 'skye'];
const inputContent = document.querySelector("#agentInput");
const cards = document.querySelectorAll(".agentCard");

inputContent.addEventListener('input', (event) => {

const guessInput = inputContent.value.toLowerCase();

cards.forEach(card => {
    const agentNames = card.dataset.agent.toLowerCase();

    if (agentNames.includes(guessInput) && guessInput !== "") {
        card.id = "visible"; 
    } else {
        card.id = "hidden";
    }
})
    console.log(event.target.value);
})  