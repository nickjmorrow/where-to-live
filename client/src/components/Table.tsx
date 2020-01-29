// @ts-nocheck

import styled from 'styled-components';
import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { useThemeContext, Theme } from '@nickjmorrow/react-component-library';
import { getMetricGroups, getVisibleCitiesSelector, getMetricsSelector } from 'reduxUtilities/uiSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { MetricGroup } from 'types/MetricGroup';
import Flip from 'react-flip-move';
import { NumberInputButton } from 'components/NumberInputButton';
import { uiActions } from 'reduxUtilities/uiActions';
import { Metric } from 'types/Metric';

const getReactTableColumns = (metricGroups: MetricGroup[]) =>
	metricGroups.map(mg => ({
		Header: mg.name,
		columns: mg.metrics
			.filter(m => m.isVisible)
			.map(m => ({
				Header: m.label,
				accessor: m.accessor,
			})),
	}));

const TableInternal: React.FC = () => {
	const data = useSelector(getVisibleCitiesSelector);
	const metricGroups = useSelector(getMetricGroups);
	const metrics = useSelector(getMetricsSelector);

	const formattedData = data.map(d => ({
		...d,
	}));

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{
			columns: getReactTableColumns(metricGroups),
			data,
		},
		useSortBy,
	);

	const theme = useThemeContext();

	const getMetric = (index: number) => metrics[index];

	const dispatch = useDispatch();

	const decrement = (metric: Metric) => dispatch(uiActions.updateCounter.decrement(metric));
	const increment = (metric: Metric) => dispatch(uiActions.updateCounter.increment(metric));

	return (
		<StyledTable {...getTableProps()} theme={theme}>
			<Heading>
				{headerGroups.map(headerGroup => (
					<Row {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column, columnIndex) => (
							<Head>
								<div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
									<span style={{ width: 'max-content' }}>{column.render('Header')}</span>
									{!column.columns && (
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
												alignItems: 'center',
												marginRight: '6px',
											}}
										>
											<div
												style={{ display: 'flex', flexDirection: 'column', marginRight: '6px' }}
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
											{getMetric(columnIndex).multiplier}
										</div>
									)}
								</div>
							</Head>
						))}
					</Row>
				))}
			</Heading>

			<Flip style={{ display: 'table-row-group', height: '600px' }} {...getTableBodyProps()}>
				{rows
					.sort((a, b) => (a.original.score > b.original.score ? -1 : 1))
					.map((row, i) => {
						prepareRow(row);
						return (
							<Row {...row.getRowProps()}>
								{row.cells.map(cell => {
									return <Cell {...cell.getCellProps()}>{cell.render('Cell')}</Cell>;
								})}
							</Row>
						);
					})}
			</Flip>
		</StyledTable>
	);
};

const Styles = styled.div`
	padding: 1rem;
`;

const Row = styled.tr`
	border: none;
	display: table-row;
`;

const Head = styled.th`
	padding: 0.5rem;
	min-width: 120px;
`;

const Cell = styled.td`
	border: none;
	padding: 1rem;
	display: table-cell;
`;

const StyledTable = styled('table')<{ theme: Theme }>`
	display: table;
	width: 100%;
`;

const Heading = styled.div`
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
