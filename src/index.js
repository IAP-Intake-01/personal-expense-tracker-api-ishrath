
import express from 'express';
import exampleRoute from './routes/exampleRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', exampleRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
