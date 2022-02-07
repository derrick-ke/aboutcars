require('dotenv').config({ path: './config.env' });
require('./db/db');

const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
