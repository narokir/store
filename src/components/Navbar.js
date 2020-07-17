import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to='/'>
					<img src={logo} alt="store" className="navbar-brand"/>
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to ="/" className="nav-link">Products</Link>
					</li>
				</ul>
				<Link to='/cart' className="ml-auto nav-link">
				<ButtonContainer>
					<span>
						<i className="fa fa-cart-plus"></i> My Cart
					</span>
				</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
`