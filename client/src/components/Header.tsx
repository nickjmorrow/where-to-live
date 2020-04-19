import * as React from 'react';
import styled from 'styled-components';
import {
	useThemeContext,
	Theme,
	Typography,
	PopulatedAppBar,
	GithubIcon,
	LinkedInIcon,
	InvisibleLink,
} from '@nickjmorrow/react-component-library';
import { appName } from 'core/constants';

export const Header: React.FC = () => {
	const theme = useThemeContext();
	const {
		appSettings: { linkedInUrl, githubUrl },
	} = theme;
	const iconStyles: React.CSSProperties = { padding: '8px', cursor: 'pointer' };
	return (
		<StyledHeader theme={theme}>
			<Left />
			<Center>
				<Title theme={theme}>{appName}</Title>
			</Center>
			<Right>
				<IconGroup>
					<InvisibleLink href={githubUrl} target={'_blank'}>
						<GithubIcon colorVariant={'secondaryDark'} style={iconStyles} />
					</InvisibleLink>
					<InvisibleLink href={linkedInUrl} target={'_blank'}>
						<LinkedInIcon colorVariant={'secondaryDark'} style={iconStyles} />
					</InvisibleLink>
				</IconGroup>
			</Right>
		</StyledHeader>
	);
};

const IconGroup = styled.div`
	margin: 0 8px;
`;

const HeaderSection = styled.div`
	width: 100%;
`;

const Left = styled(HeaderSection)``;

const Center = styled(HeaderSection)`
	display: flex;
	justify-content: center;
`;

const Right = styled(HeaderSection)`
	display: flex;
	justify-content: flex-end;
`;

const StyledHeader = styled('header')<{ theme: Theme }>`
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
`;

const Title = styled(Typography)<{ theme: Theme }>`
	font-size: ${p => p.theme.typography.fontSizes.fs8};
	color: ${p => p.theme.colors.neutral.cs7};
	line-height: 48px;
	width: max-content;
`;
