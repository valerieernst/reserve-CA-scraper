const express = require('express');

const app = express();
const PORT = process.env.PORT || 5678

app.listen(PORT, console.log('app listening on 5678'));
