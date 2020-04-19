// @ts-nocheck

import { Fade, Theme, useThemeContext, Typography } from '@nickjmorrow/react-component-library';
import { NumberInputButton } from 'components/NumberInputButton';
import React from 'react';
import Flip from 'react-flip-move';
import { useDispatch, useSelector } from 'react-redux';
import { useSortBy, useTable, Row as RowType } from 'react-table';
import { uiActions } from 'reduxUtilities/uiActions';
import { getCities, getMetricsSelector, selectors } from 'reduxUtilities/uiSelectors';
import styled, { css } from 'styled-components';
import { City } from 'types/City';
import { Metric } from 'types/Metric';
import format from 'number-format.js';
import { UiState } from 'reduxUtilities/uiReducer';
import { MetricPillbox } from 'components/MetricPillbox';

const TableInternal: React.FC = () => {
	const dispatch = useDispatch();
	const theme = useThemeContext();
	const metrics = useSelector(getMetricsSelector);
	const data = useSelector(getCities);
	const sortedMetric = useSelector(selectors.getSortedMetric);

	const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable(
		{
			columns: metrics.map(m => ({ ...m, id: m.accessor })),
			data,
		},
		useSortBy,
	);

	const toggleCityVisibility = (city: City) => dispatch(uiActions.toggleCity(city));

	const getMetric = (index: number) => metrics[index];

	const sortMetric = (metric: Metric) => dispatch(uiActions.sortMetric(metric));

	const [hoveredMetric, setHoveredMetric] = React.useState<Metric | null>(null);

	const ALWAYS_SHOW_PILLBOX = false;

	const isSortedMetric = (metric: Metric) => metric.accessor === sortedMetric.accessor;

	return (
		<div>
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
							onClick={() => sortMetric(getMetric(columnIndex))}
							index={columnIndex}
							numMetrics={metrics.length}
							theme={theme}
							key={columnIndex}
							isSortedMetric={isSortedMetric(getMetric(columnIndex))}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: getContentJustification(getMetric(columnIndex)),
									minWidth: '155px',
									flexDirection: 'row-reverse',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<Typography style={{ marginRight: '8px' }} colorVariant={'inherit'}>
										{getMetric(columnIndex).label}
									</Typography>
									<Typography colorVariant={'inherit'}>
										{getMetric(columnIndex).calculationConfig.isIncludedInCalculation &&
											getMetric(columnIndex).calculationConfig.multiplier + 'x'}
									</Typography>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row-reverse',
										alignItems: 'center',
										height: '40px',
										minWidth: 'max-content',
									}}
								>
									{
										<Fade
											in={
												!column.columns &&
												getMetric(columnIndex).calculationConfig.isIncludedInCalculation &&
												((hoveredMetric &&
													getMetric(columnIndex).accessor === hoveredMetric.accessor) ||
													ALWAYS_SHOW_PILLBOX)
											}
											unmountOnExit={true}
										>
											<div
												style={{
													display: 'flex',
													flexDirection: 'row',
													alignItems: 'center',
												}}
											>
												<MetricPillbox metricIndex={columnIndex} />
											</div>
										</Fade>
									}
								</div>
							</div>
						</Head>
					))}
				</HeadRow>
			</Heading>
			<div style={{ height: '400px', overflowY: 'scroll', marginTop: '16px' }}>
				<StyledTable {...getTableProps()} theme={theme}>
					<Heading>
						<HiddenHeadRow>
							{headers.map((column, columnIndex) => (
								<HiddenHead key={columnIndex}>
									<div
										style={{
											display: 'flex',
											justifyContent: 'flex-start',
											minWidth: '155px',
											flexDirection: 'row-reverse',
										}}
									></div>
								</HiddenHead>
							))}
						</HiddenHeadRow>
					</Heading>

					<Flip style={{ display: 'table-row-group' } as any} {...getTableBodyProps()}>
						{rows.sort(sortFunc(sortedMetric)).map((row, i) => {
							prepareRow(row);
							return (
								<BodyRow
									{...row.getRowProps()}
									city={row.original}
									key={row.original.label}
									theme={theme}
									onClick={() => toggleCityVisibility(row.original)}
								>
									{row.cells.map((cell, cellIndex) => {
										return (
											<Cell
												index={cellIndex}
												numMetrics={metrics.length}
												theme={theme}
												metric={getMetric(cellIndex)}
												key={cellIndex}
												{...cell.getCellProps()}
											>
												<Typography>{format('#,##0.####', cell.value)}</Typography>
											</Cell>
										);
									})}
								</BodyRow>
							);
						})}
					</Flip>
				</StyledTable>
			</div>
		</div>
	);
};

const sortFunc = (sortedMetric: UiState['sortedMetric']) => (aRow: RowType<City>, bRow: RowType<City>) => {
	const a = aRow.original;
	const b = bRow.original;
	if (a.isVisible !== b.isVisible) {
		return a.isVisible ? -1 : 1;
	}

	const comparison =
		sortedMetric.order === 'ascending'
			? a[sortedMetric.accessor] > b[sortedMetric.accessor]
			: a[sortedMetric.accessor] < b[sortedMetric.accessor];

	return comparison ? -1 : 1;
};

const getContentJustification = (metric: Metric) => {
	switch (metric.textAlignment) {
		case 'left':
			return 'flex-end';
		case 'right':
			return 'flex-start';
		default:
			throw new Error('Unexpected text justification.');
	}
};

const Styles = styled.div`
	padding: 1rem;
`;

const Row = styled('tr')`
	border: none;
	display: table-row;
	border-radius: 15px;
`;

const BodyRow = styled(Row)<{ city: City; theme: Theme }>`
	color: ${p => (p.city.isVisible ? p.theme.colors.neutral.cs9 : p.theme.colors.neutral.cs6)};
	cursor: pointer;
`;

const HeadRow = styled(Row)`
	height: 60px;
`;

const HiddenHeadRow = styled(HeadRow)`
	visbility: hidden;
	height: 0;
`;

interface CellStyleArguments {
	index: number;
	numMetrics: number;
	theme: Theme;
}

const Head = styled('th')<CellStyleArguments & { isSortedMetric: boolean }>`
	padding: 8px;
	min-width: max-content;
	background-color: white;
	cursor: pointer;
	${({ isSortedMetric, theme }) => {
		if (isSortedMetric) {
			return css`
				color: ${theme.colors.core.cs5};
			`;
		}
		return `color: ${theme.colors.neutral.cs7}`;
	}}
	transition: color ${({ theme }) => theme.transitions.fast};
	&:hover {
		color: ${({ theme }) => theme.colors.core.cs5};
	}
	${({ index, numMetrics, theme }) => getCellStyle({ index, numMetrics, theme })}
`;

const HiddenHead = styled.th`
	padding: 0.5rem;
`;

const Cell = styled('td')<{ cellIndex: number; numMetrics: number; theme: Theme; metric: Metric }>`
	border: none;
	padding: 1rem;
	display: table-cell;
	width: max-content;
	text-align: right;
	background-color: white;
	text-align: ${p => p.metric.textAlignment};
	${({ index, numMetrics, theme }) => getCellStyle({ index, numMetrics, theme })}
`;

const getCellStyle = ({ index, numMetrics, theme }: CellStyleArguments): string | void => {
	if (index === 0) {
		return `
			border-top-left-radius: ${theme.border.borderRadius.br1};
			border-bottom-left-radius: ${theme.border.borderRadius.br1};
		`;
	}

	if (index === numMetrics - 1) {
		return `
			border-top-right-radius: ${theme.border.borderRadius.br1};
			border-bottom-right-radius: ${theme.border.borderRadius.br1};
		`;
	}
};

const StyledTable = styled('table')<{ theme: Theme }>`
	display: table;
	width: 100%;
	border-collapse: separate;
	margin-top: -${p => p.theme.spacing.ss8};
	border-spacing: 0 ${p => p.theme.spacing.ss2};
	width: max-content;
`;

const Heading = styled.th`
	display: table-header-group;
	font-weight: bold;
`;

export const Table = () => (
	<Styles>
		<TableInternal />
	</Styles>
);
