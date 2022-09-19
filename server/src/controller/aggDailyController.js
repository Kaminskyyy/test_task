import AggDaily from '../model/aggDailyModel.js';

async function get(req, res, next) {
	try {
		let data;

		if (Object.keys(req.query).length !== 0) {
			data = await AggDaily.filter(req.query);
		} else {
			data = await AggDaily.find({});
		}

		res.send(data);
	} catch (error) {
		next(error);
	}
}

export { get };
