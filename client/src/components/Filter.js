import { useState } from 'react';
import { Button, Cascader, Checkbox, InputNumber } from 'antd';
import classes from './Filter.module.css';

function Filter(props) {
	const [totalRevsFilterValue, setTotalRevsFilterValue] = useState(100);
	const [totalRevsFilterMode, setTotalRevsFilterMode] = useState('more_than');
	const [isTotalRevsFilterEnabled, setIsTotalRevsFilterEnabled] = useState(false);

	function totalRevsCheckboxChangeHandler({ target } = {}) {
		setIsTotalRevsFilterEnabled(target.checked);
	}

	function totalRevsValueChangeHandler(value) {
		setTotalRevsFilterValue(value);
	}

	// Here the mode arg is an array!
	function totalRevsModeChangeHandler([mode] = []) {
		setTotalRevsFilterMode(mode);
	}

	function onApplyFilters() {
		const filters = {};

		if (isTotalRevsFilterEnabled) {
			filters.totalRevsValue = totalRevsFilterValue;
			filters.totalRevsMode = totalRevsFilterMode;
		}

		if (Object.keys(filters).length === 0) return;
		props.onFilter(filters);
	}

	return (
		<div className={classes.wrapper}>
			<h3>Filters</h3>
			<div className={classes.inputs}>
				<div>
					<div className={classes.inputLabel}>
						<label>Revenues</label>
					</div>
					<InputNumber
						addonBefore={
							<Cascader
								fieldNames={{
									label: 'name',
									value: 'code',
								}}
								options={[
									{
										code: 'more_than',
										name: 'More than',
									},
									{
										code: 'less_than',
										name: 'Less than',
									},
								]}
								defaultValue={'more_than'}
								onChange={totalRevsModeChangeHandler}
							/>
						}
						addonAfter={<Checkbox onChange={totalRevsCheckboxChangeHandler} />}
						defaultValue={100}
						onChange={totalRevsValueChangeHandler}
					/>
				</div>
			</div>
			<div className={classes.actions}>
				<Button onClick={onApplyFilters}>Apply filters</Button>
			</div>
		</div>
	);
}

export default Filter;
