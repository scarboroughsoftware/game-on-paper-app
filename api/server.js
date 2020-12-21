const express = require('express');
const router = require('./routes/router');
const morgan = require("morgan");
const port = 5000

const util = require('util');
const debuglog = util.debuglog('[api]');

const app = express();
app.use(morgan('[api] :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'));
app.use(router);

app.listen(port, "0.0.0.0", () => {
    debuglog(`listening on port ${port}`)
})
