import styled from 'styled-components';

export const NumberInputButton = styled('div')<{ backgroundColor: string; hoverBackgroundColor: string }>`
	height: 15px;
	width: 15px;
	cursor: pointer;
	background-color: ${p => p.backgroundColor};
	transition: all 250ms;
	&: hover {
		transition: all 250ms;
		background-color: ${p => p.hoverBackgroundColor};
	}
`;
