const agents = [];
const inputContent = document.querySelector("#agentInput");
const cards = document.querySelectorAll(".agentCard");

inputContent.addEventListener('input', (event) => {
    console.log(event.target.value);
})  