const express = require("express");
const app = express();
const mongoose = require("mongoose");


main()
.then(() => {
    console.log("connection successful");
})


app.get('/', (req,res) => {
    res.send("route is working");
});
app.listen(8080, () => {
    console.log("app is listning");
});