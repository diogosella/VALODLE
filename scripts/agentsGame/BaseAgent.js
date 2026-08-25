window.baseAgentPromise = fetch("http://localhost:3001/daily-agent")
    .then(response => {
        if (!response.ok) {
            throw new Error("Não foi possivel carregar agente");
        }

        return response.json();
    })
    .catch(error => {
        console.error(error);
        return null;
    })