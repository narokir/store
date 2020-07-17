import styled from "styled-components";

export const ButtonContainer = styled.button`
	margin-right: 0.5rem;
	color: ${(props) =>
		props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
	font-size: 1.5rem;
	font-weight: 600;
	background: transparent;
	text-transform: capitalize;
	border-radius: 0.09rem;
	border: 0.09rem solid var(--lightBlue);
	border-color: ${(props) =>
		props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
	badding: 0.2rem 0.5rem;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: ${(props) =>
			props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
		color: var(--white);
	}
	&:focus {
		outline: none;
	}
`;
