import mongoose from 'mongoose';

mongoose.connect(process.env.DB_CONNECTION_STRING).catch((error) => {
	console.error(error);
});

mongoose.connection.on('error', (error) => {
	console.error(error);
});

mongoose.connection.on('connected', () => {
	console.log('DB connected');
});
