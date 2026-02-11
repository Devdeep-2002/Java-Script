function saveToDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4){
        success();
    }else {
        failure();
    }
}

saveToDb("dev",() => {
    console.log("Success : your data was saved");
    saveToDb("fire", () => {
        console.log("Success2 : data2 was saved");
        saveToDb("the Gun", () => {
            console.log("Success3 : data3 was saved");
        }, () => {
            console.log("Failure3 : weak connection. data3 was not saved");
        })
    }, () => {
        console.log("Failure2 : weak connection. data2 was not saved");
    });
}, () => {
    console.log("Failure : weak connection. data was not saved");
});
