//premiere tâche
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        console.log(value);
        await delay(1000);  // Attendre 1 seconde
    }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5]);


//deuxieme tâche
function simulateApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { message: "Données récupérées de l'API" };
            resolve(data);
        }, 2000);  // Simuler un délai de 2 secondes pour la réponse de l'API
    });
}

async function waitCall() {
    console.log("Appel API en cours...");
    const data = await simulateApiCall();
    console.log("Données reçues :", data);
}

waitCall();


// troisiéme tâche
function simulateApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random();
            console.log("num", num);
            const success = num > 0.5 ;  // Simuler un succès ou un échec aléatoire
            if (success) {
                const data = { message: "Données récupérées de l'API" };
                resolve(data);
            } else {
                reject(new Error("Échec de l'appel API"));
            }
        }, 2000);  
    });
}

async function waitCall() {
    console.log("Appel API en cours...");
    try {
        const data = await simulateApiCall();
        console.log("Données reçues :", data);
    } catch (error) {
        console.error("Erreur lors de l'appel API :", error.message);
    }
}


waitCall();


async function Promise1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1 résolue");
        }, 1000);
    });
}

async function Promise2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2 résolue");
        }, 1000);
    });
}

async function Promise3 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 3 résolue");
        }, 1000);
    });
}


async function chainedAsyncFunctions() {
    const result1 = await Promise1();
    console.log(result1);
    const result2 = await Promise2();
    console.log(result2);
    const result3 = await Promise3();
    console.log(result3);
}

chainedAsyncFunctions();