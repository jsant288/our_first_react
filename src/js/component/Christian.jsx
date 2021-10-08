import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Christian = () => {
	return (
		<div className="text-center mt-5">
			<div>
				<div
					id="carouselExampleCaptions"
					className="carousel slide"
					data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={0}
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={1}
							aria-label="Slide 2"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={2}
							aria-label="Slide 3"
						/>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="https://ca-times.brightspotcdn.com/dims4/default/d197a68/2147483647/strip/true/crop/1024x576+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa9%2Fd2%2F06e1aabd3443b0d46e373b55e9e2%2Fsd-1518739000-icdqtdaj6k-snap-image"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Space X</h5>
								<p>
									SpaceX was formed by entrepreneur Elon Musk
									in the hopes of revolutionizing the
									aerospace industry and making affordable
									spaceflight a reality.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="https://i.natgeofe.com/k/a2a738a9-e019-4911-98e6-17f31c45ac88/milky-way-2.jpg?w=636&h=358"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Infinite Expanding Space</h5>
								<p>
									Outer space is the expanse that exists
									beyond Earth and between celestial bodies.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY0Njg3NzMwODQ3MDAwMTE1/apollo11_moon_landing_promo.jpg"
								className="d-block w-100"
								alt="..."
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Moon Landing</h5>
								<p>
									Apollo 11 was the first manned mission to
									land on the Moon. The first steps by humans
									on another planetary body were taken by Neil
									Armstrong and Buzz Aldrin on July 20, 1969.
								</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev">
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						/>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next">
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						/>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Christian;
