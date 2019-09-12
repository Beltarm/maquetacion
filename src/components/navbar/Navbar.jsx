import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand d-block">
			<div className="row justify-content-between">
				<div className="col pl-0">
					<i class="fas fa-shopping-basket mr-2" />
					<p className="navbar-brand" href="#">
						Bestla
					</p>
				</div>
				<div className="col">
					<div className="collapse navbar-collapse d-flex justify-content-end">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<p className="nav-link active" href="#">
									Home
								</p>
							</li>
							<li className="nav-item">
								<p className="nav-link" href="#">
									Product
								</p>
							</li>
							<li className="nav-item">
								<p className="nav-link " href="#">
									About
								</p>
							</li>
							<li className="nav-item">
								<p className="nav-link" href="#">
									Contact
								</p>
							</li>
							<li className="nav-item">
								<p className="nav-link btn btn-outline-primary btn-round" href="#">
									Login
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
