import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Joel = () => {
	return (
		<div className="text-center mt-5">
			<div>
				<div className="card-group">
					<div className="card">
						<img
							className="card-img-top"
							src="data:image/jpeg;base64,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"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src="https://image.cnbcfm.com/api/v1/image/105700741-1548435293613thomasmueller0125.jpg?v=1548435522"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This card has supporting text below as a natural
								lead-in to additional content.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
					<div className="card">
						<img
							className="card-img-top"
							src="..."
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								card has even longer content than the first to
								show that equal height action.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Joel;
