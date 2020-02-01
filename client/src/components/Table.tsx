// @ts-nocheck

import styled from 'styled-components';
import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { useThemeContext, Theme } from '@nickjmorrow/react-component-library';
import { getMetricGroups, getVisibleCitiesSelector, getMetricsSelector, getCities } from 'reduxUtilities/uiSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { MetricGroup } from 'types/MetricGroup';
import Flip from 'react-flip-move';
import { NumberInputButton } from 'components/NumberInputButton';
import { uiActions } from 'reduxUtilities/uiActions';
import { Metric } from 'types/Metric';
import { City } from 'types/City';

interface ColumnModel {
	Header: string;
	accessor: string;
}

const TableInternal: React.FC = () => {
	const dispatch = useDispatch();
	const theme = useThemeContext();
	const metrics = useSelector(getMetricsSelector);
	const data = useSelector(getCities);

	const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable(
		{
			columns: metrics.map(m => ({ ...m, id: m.accessor })),
			data,
		},
		useSortBy,
	);

	const toggleCityVisibility = (city: City) => dispatch(uiActions.toggleCity(city));

	const getMetric = (index: number) => metrics[index];

	const decrement = (metric: Metric) => dispatch(uiActions.updateCounter.decrement(metric));
	const increment = (metric: Metric) => dispatch(uiActions.updateCounter.increment(metric));

	const [hoveredMetric, setHoveredMetric] = React.useState<Metric | null>(null);

	return (
		<StyledTable {...getTableProps()} theme={theme}>
			<Heading>
				<HeadRow>
					{headers.map((column, columnIndex) => (
						<Head
							onMouseEnter={() => setHoveredMetric(getMetric(columnIndex))}
							onMouseLeave={() => {
								if (getMetric(columnIndex) === hoveredMetric) {
									setHoveredMetric(null);
								}
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
								{getMetric(columnIndex).label}{' '}
								{getMetric(columnIndex).isIncludedInCalculation && (
									<div style={{ display: 'flex', alignItems: 'center', marginLeft: '16px' }}>
										{getMetric(columnIndex).accessor === hoveredMetric?.accessor && (
											<div
												style={{
													display: 'flex',
													flexDirection: 'column',
													marginRight: '6px',
												}}
											>
												<NumberInputButton
													backgroundColor={'hsl(150, 75%, 70%)'}
													onHoverBackgroundColor={'hsl(150, 75%, 85%)'}
													onClick={() => increment(getMetric(columnIndex))}
													style={{
														borderTopLeftRadius: '6px',
														borderTopRightRadius: '6px',
													}}
												></NumberInputButton>
												<NumberInputButton
													style={{
														borderBottomLeftRadius: '6px',
														borderBottomRightRadius: '6px',
													}}
													onClick={() => decrement(getMetric(columnIndex))}
													backgroundColor={'hsl(0, 75%, 70%)'}
													onHoverBackgroundColor={'hsl(0, 75%, 85%)'}
												></NumberInputButton>
											</div>
										)}
										{getMetric(columnIndex).multiplier}
									</div>
								)}
							</div>
						</Head>
					))}
				</HeadRow>
			</Heading>

			<Flip style={{ display: 'table-row-group', height: '600px' }} {...getTableBodyProps()}>
				{rows.sort(sortFunc).map((row, i) => {
					prepareRow(row);
					return (
						<BodyRow
							{...row.getRowProps()}
							city={row.original}
							theme={theme}
							onClick={() => toggleCityVisibility(row.original)}
						>
							{row.cells.map(cell => {
								return <Cell {...cell.getCellProps()}>{cell.render('Cell')}</Cell>;
							})}
						</BodyRow>
					);
				})}
			</Flip>
		</StyledTable>
	);
};

const sortFunc = (aRow: any, bRow: any) => {
	const a = aRow.original;
	const b = bRow.original;
	if (a.isVisible != b.isVisible) {
		return a.isVisible ? -1 : 1;
	}

	return a.score > b.score ? -1 : 1;
};

const Styles = styled.div`
	padding: 1rem;
`;

const Row = styled('tr')`
	border: none;
	display: table-row;
`;

const BodyRow = styled(Row)<{ city: City; theme: Theme }>`
	color: ${p => (p.city.isVisible ? p.theme.colors.neutral.cs9 : p.theme.colors.neutral.cs6)};
	cursor: pointer;
`;

const HeadRow = styled(Row)`
	height: 60px;
`;

const Head = styled.th`
	padding: 0.5rem;
	min-width: 120px;
`;

const Cell = styled.td`
	border: none;
	padding: 1rem;
	display: table-cell;
	width: max-content;
`;

const StyledTable = styled('table')<{ theme: Theme }>`
	display: table;
	width: 100%;
	box-shadow: ${p => p.theme.boxShadow.bs2};
	padding: ${p => p.theme.spacing.ss4};
`;

const Heading = styled.th`
	display: table-header-group;
	font-weight: bold;
`;

const Body = styled('tbody')<{ theme: Theme }>`
	display: table-row-group;
	tr:nth-child(odd) {
		background-color: ${p => p.theme.colors.neutral.cs3};
	}
	td:last-child {
		border-bottom-right-radius: ${p => p.theme.border.borderRadius.br1};
		border-top-right-radius: ${p => p.theme.border.borderRadius.br1};
	}
	td:first-child {
		border-bottom-left-radius: ${p => p.theme.border.borderRadius.br1};
		border-top-left-radius: ${p => p.theme.border.borderRadius.br1};
	}
`;

export const Table = () => (
	<Styles>
		<TableInternal />
	</Styles>
);
