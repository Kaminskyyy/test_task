import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { message } from 'antd';
import AggDailyDataTable from './components/AggDailyDataTable';
import Filter from './components/Filter';

function App() {
	const [aggDailyData, setAggDailyData] = useState([]);
	const [isLoading, setIsLoading] = useState();

	const getAggDailyData = useCallback(async (filters) => {
		setIsLoading(true);
		let url = 'http://localhost:4000/aggDaily';

		if (filters) {
			url += '?';
			for (let [filter, value] of Object.entries(filters)) {
				url += `${filter}=${value}&`;
			}
			url = url.slice(0, url.length - 1);
		}

		let response;
		try {
			response = await axios.get(url);
		} catch (error) {
			message.error('Something went wrong!\nTry later.');
			setIsLoading(false);
			return console.log(error);
		}

		const data = response.data.map((item) => {
			return {
				...item,
				discrepancy: (item.total_sessions / item.total_paid_clicks) * 100,
				prpm: (1000 * item.total_revs) / item.total_page_views,
				key: item._id,
			};
		});

		setAggDailyData(data);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		getAggDailyData();
	}, [getAggDailyData]);

	function onFilterHandler(filters) {
		getAggDailyData(filters);
	}

	return (
		<div className='App'>
			<Filter onFilter={onFilterHandler} />
			<AggDailyDataTable aggDailyData={aggDailyData} isLoading={isLoading} />
		</div>
	);
}

export default App;
