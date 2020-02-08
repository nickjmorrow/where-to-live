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
				backgroundColor: theme.colors.neutral.cs2,
				margin: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<div>
				<Table />
				<CalculateButton />
			</div>
		</div>
	);
};
