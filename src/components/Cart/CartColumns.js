import React from "react";

export default function CartColumns() {
	return (
		<div className="container-fluid text-center d-none d-lg-block">
			<div className="row">
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upercase">products</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upercase">Name</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upercase">price</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upercase">remove</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upercase">treash</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upercase">Total</p>
				</div>
			</div>
		</div>
	);
}
