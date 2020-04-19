import { useThemeContext } from '@nickjmorrow/react-component-library';
import { CalculateButton } from 'components/CalculateButton';
import { Table } from 'components/Table';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import * as React from 'react';
import { withRouter } from 'react-router';

const MainInternal: React.FC = () => {
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
				minHeight: '100vh',
			}}
		>
			<Header />
			<div style={{ display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
				<Table />
				<CalculateButton />
			</div>
			<Footer />
		</div>
	);
};

export const Main = withRouter(MainInternal);
