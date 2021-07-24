const myPromise = new Promise((resolve, reject) => {
    console.log("Loading..");
    setTimeout(() => {
        return resolve("Success");
    }, 3000);
});
myPromise
.then(value => console.log(value));