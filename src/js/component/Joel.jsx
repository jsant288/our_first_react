import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Joel = () => {
	return (
		<div className="text-center mt-5">
			<div>
				<div className="card-group">
					<div className="card hieght-auto">
						<img
							className="card-img-top"
							src="https://i.pinimg.com/originals/00/09/f4/0009f44897c3d9f6eb740dea9ec11022.png"
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
							// style="background-size: cover"
							src="https://d3lut3gzcpx87s.cloudfront.net/image_encoded/aHR0cHM6Ly9zaWxrc3RhcnQuczMuYW1hem9uYXdzLmNvbS81YTY3ODIwOGZkYmE0YjI5OWEyN2NmMjkuanBn/x"
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
