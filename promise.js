// Create a function called fetchDataFromDatabase() that returns a Promise.
// • Inside the function, use setTimeout() to simulate a delay of 3 seconds.
// • Use a simple condition like const data = true to simulate whether data is available.
// • If data is true, resolve the Promise with the message "Data fetched successfully!".
// If data is false, reject the Promise with the message "Data not found!".


// Call the function fetchDataFromDatabase() and handle the Promise:
// o Use .then() to print "Data fetched successfully!" if the
// Promise is resolved. o Use .catch() to print "Data not found!" if
// the Promise is rejected

function fetchDataFromDatabase() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data from database...")
        setTimeout(() => {
            const data = true
            if (data) {
                resolve()
            } else {
                reject()
            }
        }, 1000);
    });
}

const a = fetchDataFromDatabase();
a.then(result=>console.log("successfully!")).catch(error=>console.log("not found"));