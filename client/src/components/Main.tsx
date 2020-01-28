import * as React from 'react';
import { Table } from 'components/Table';
import { useThemeContext } from '@nickjmorrow/react-component-library';
import { Controls } from 'components/Controls';
import { CalculateButton } from 'components/CalculateButton';

export const Main: React.FC = () => {
	const theme = useThemeContext();
	return (
		<div
			style={{
				backgroundColor: theme.colors.background,
				height: '100%',
				margin: 0,
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'center',
				flexDirection: 'row',
			}}
		>
			<Controls />
			<Table />
			<CalculateButton />
		</div>
	);
};
