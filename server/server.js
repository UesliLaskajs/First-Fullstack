const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
app.use(cors())                 /* This is new */
/* This is a short-hand notation we use: */
require('./routes/message.routes')(app);

app.listen(7000, () => {
    console.log("Listening at Port 7000")
})

