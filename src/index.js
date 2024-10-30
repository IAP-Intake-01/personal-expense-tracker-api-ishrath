import dotenv from 'dotenv';
dotenv.config();
//can access these in other places as well and acees from process.env.NAME

import express from 'express';
import exampleRoute from './routes/exampleRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', exampleRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
