import styled from 'styled-components';

export const ButtonContainer = styled.button`
	color: var(--lightBlue);
	text-transform:upercase;
	font-size:1rem;
	background: transparent;
	border: .05rem solid var(--lightBlue);
	border-color: var(--lightBlue);
	badding: 0.2rem 0.5rem;
	transition:all 0.5s ease-in-out;
	&:hover{
		background: var(--lightBlue);
		color: var(--white);
	}
`