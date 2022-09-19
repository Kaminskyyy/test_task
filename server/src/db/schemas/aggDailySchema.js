import mongoose from 'mongoose';

const aggDailySchema = new mongoose.Schema({
	ag_name: String,
	total_revs: Number,
	total_spend: Number,
	total_profit: Number,
	total_sessions: Number,
	total_paid_clicks: Number,
	total_page_views: Number,
	cpc: Number,
	roas: Number,
	image_url: String,
	status: String,
});

aggDailySchema.static('filter', async function (filters) {
	const AggDaily = this;

	const query = {};

	if (filters.totalRevsValue && filters.totalRevsMode) {
		const mode = filters.totalRevsMode === 'more_than' ? '$gt' : '$lt';

		query.total_revs = { [mode]: Number(filters.totalRevsValue) };
	}

	return AggDaily.find(query);
});

export default aggDailySchema;
