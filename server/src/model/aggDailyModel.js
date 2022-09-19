import mongoose from 'mongoose';
import aggDailySchema from '../db/schemas/aggDailySchema.js';

const AggDaily = mongoose.model('AggDaily', aggDailySchema, 'agg_daily');

export default AggDaily;
