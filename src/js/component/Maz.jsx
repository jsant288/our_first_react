import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Maz = () => {
	return (
		<form>
			<div className="container">
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Name</label>
					<input
						type="Name"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Full Name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Email address</label>
					<input
						type="Email"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Enter Email"
					/>
				</div>
				<div className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="exampleCheck1"
					/>
					<label className="form-check-label" htmlFor="exampleCheck1">
						Remember Me
					</label>
				</div>
				<button type="Sign up" className="btn btn-primary">
					Sign up
				</button>
			</div>
		</form>
	);
};

export default Maz;
