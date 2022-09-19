import { Table } from 'antd';

import 'antd/dist/antd.css';

function AggDailyDataTable(props) {
	return (
		<div className='Table'>
			<Table
				loading={props.isLoading}
				dataSource={props.aggDailyData}
				columns={columns}
				pagination={{ position: ['bottomCenter'] }}
			/>
		</div>
	);
}

const columns = [
	{
		title: 'Ad name',
		dataIndex: 'ad_name',
		key: 'ad_name',
	},
	{
		title: 'Revenues',
		dataIndex: 'total_revs',
		key: 'total_revs',
		render: (text) => <span>$&nbsp;{text}</span>,
	},
	{
		title: 'Spend',
		dataIndex: 'total_spend',
		key: 'total_spend',
		render: (text) => <span>$&nbsp;{text}</span>,
	},
	{
		title: 'Profit',
		dataIndex: 'total_profit',
		key: 'total_profit',
		render: (text) => <span>$&nbsp;{text}</span>,
	},
	{
		title: 'Sessions',
		dataIndex: 'total_sessions',
		key: 'total_sessions',
	},
	{
		title: 'Paid Clicks',
		dataIndex: 'total_paid_clicks',
		key: 'total_paid_clicks',
	},
	{
		title: 'Page Views',
		dataIndex: 'total_page_views',
		key: 'total_page_views',
	},
	{
		title: 'CPC',
		dataIndex: 'cpc',
		key: 'cpc',
		render: (text) => <span>$&nbsp;{text}</span>,
	},
	{
		title: 'ROAS',
		dataIndex: 'roas',
		key: 'roas',
		render: (text) => <span>{text}&nbsp;%</span>,
	},
	{
		title: 'Discrepancy',
		dataIndex: 'discrepancy',
		key: 'discrepancy',
		render: (text) => <span>{text}&nbsp;%</span>,
	},
	{
		title: 'PRPM',
		dataIndex: 'prpm',
		key: 'prpm',
		render: (text) => <span>$&nbsp;{text}</span>,
	},
];

export default AggDailyDataTable;
