const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    await doSomethingAsync();
    res.send('Hello World!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function doSomethingAsync() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
}