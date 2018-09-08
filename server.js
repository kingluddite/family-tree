const express = require('express');
const mongoose = require('mongoose'); // add this
require('dotenv').config({ path: 'variables.env' });

const PORT = process.env.PORT || 4444;

// connect to db (add these lines)
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('DB connected');
  })
  .catch(err => {
    console.log('Error on start: ' + err.stack);
    process.exit(1);
  });

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
