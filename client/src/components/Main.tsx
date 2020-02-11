import { useThemeContext } from '@nickjmorrow/react-component-library';
import { CalculateButton } from 'components/CalculateButton';
import { Table } from 'components/Table';
import * as React from 'react';

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
