import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
	const { cartTax, cartSubTotal, cartTotal, clearCart } = value;
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10-xm mt-2 ml-sm-5 ml-md-auto col-sm-8 text capilalize text-right">
						<Link to="/">
							<button
								className="btn btn-outline-danger text-upercase mb-3 px-5"
								onClick={() => clearCart()}
							>
								Clear Cart
							</button>
						</Link>
						<h5>
							<span className="title-text">
								subtotal:
								<strong> ${cartSubTotal}</strong>
							</span>
						</h5>
						<h5>
							<span className="title-text">
								tax:
								<strong> ${cartTax}</strong>
							</span>
						</h5>
						<h5>
							<span className="title-text">
								Cart Toal:
								<strong> ${cartTotal}</strong>
							</span>
						</h5>
						<PayPalButton
							total={cartTotal}
							clearCart={clearCart}
							history={history}
						></PayPalButton>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
