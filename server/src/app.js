import './db/mongoose.js';
import express from 'express';
import aggDailyRouter from './routes/aggDailyRoute.js';
import cors from 'cors';

const PORT = process.env.PORT;

const app = express();

app.use(cors({ origin: process.env.FRONT_URL }));
app.use('/', aggDailyRouter);

app.use((error, req, res, next) => {
	console.error(error);

	res.status(500).send({
		error: error.message,
	});
});

app.listen(PORT, () => {
	console.log(`Server is up and running on port: ${PORT}`);
});
