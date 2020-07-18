import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const {
						id,
						company,
						img,
						info,
						title,
						price,
						inCart,
					} = value.detailProduct;
					return (
						<div className="container">
							{/* title */}
							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue my-5 ">
									<h1>{title}</h1>
								</div>
							</div>
							{/* end title */}
							{/* product ingo */}
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<img src={img} alt="product" className="img-fluid" />
								</div>
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<h2>model: {title} </h2>
									<h4 className="text-title text-upercase text-muted mt-3 mb-2">
										made by: <span className="upercase"> {company} </span>
									</h4>
									<h4 className="text-blue">
										<strong>
											price: <span>$</span>
											{price}
										</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										Product Description:
									</p>
									<p className="text-muted lead">{info}</p>
									<div>
										<Link to="/">
											<ButtonContainer>back to Products</ButtonContainer>
										</Link>
										<ButtonContainer
											cart
											disabled={inCart ? true : false}
											onClick={() => {
												value.addToCart(id);
												value.openModal(id);
											}}
										>
											{inCart ? "inCart" : "add to cart"}
										</ButtonContainer>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
