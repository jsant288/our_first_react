import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Abraham = () => {
	return (
		<div className="text-center mt-5">
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							Space X
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#">
										More space
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Moon Landing
									</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										Stars
									</a>
									<ul
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<li>
											<a
												className="dropdown-item"
												href="#">
												Planets
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Expanding Universe
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#">
												Hope it works
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a
										className="nav-link disabled"
										href="#"
										tabIndex={-1}
										aria-disabled="true"></a>
								</li>
							</ul>
							<form className="d-flex">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button
									className="btn btn-outline-success"
									type="submit">
									Search
								</button>
							</form>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Abraham;
