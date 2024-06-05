// Set Timeout (delay, then)
function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
};

mySetTimeout(3000).then(() => {
    console.log("3 seconds have passed")
});

// Toy Shop (.then().catch())
function makeToys(delay = 3000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Undefected");
            } else {
                reject("Defected");
            }
        }, delay);
    });
}

function sellToys(status, delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === "Undefected") {
                if (Math.random() > 0.5) {
                    resolve("Toy has been sold");
                } else {
                    reject("Toy was unsuccessful");
                }
            } else {
                reject("Cannot sell a defected toy");
            }
        }, delay);
    });
}

function deliverToys(status, delay = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === "Toy has been sold") {
                resolve("Toy has been delivered");
            } else {
                reject("Toy was not delivered");
            }
        }, delay);
    });
}

makeToys()
    .then(status => sellToys(status))
    .then(result => deliverToys(result))
    .then(finalResult => console.log(finalResult))
    .catch(err => console.log(err));

// Toy Shop (async/await)
function makeToys(delay = 3000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Undefected");
            } else {
                reject("Defected");
            }
        }, delay);
    });
}

function sellToys(status, delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === "Undefected") {
                if (Math.random() > 0.5) {
                    resolve("Toy has been sold");
                } else {
                    reject("Toy was unsuccessful");
                }
            } else {
                reject("Cannot sell a defected toy");
            }
        }, delay);
    });
}

function deliverToys(status, delay = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === "Toy has been sold") {
                resolve("Toy has been delivered");
            } else {
                reject("Toy was not delivered");
            }
        }, delay);
    });
}

async function processToys() {
    try {
        const status = await makeToys();
        const sellStatus = await sellToys(status);
        const deliverStatus = await deliverToys(sellStatus);
        console.log(deliverStatus);
    } catch (err) {
        console.log(err);
    }
}

processToys();