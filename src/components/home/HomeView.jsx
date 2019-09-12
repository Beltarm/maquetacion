import React from 'react';
import './HomeView.css';

const HomeView = () => {
	return (
		<div className="row home-view  align-items-center">
			<div className="col-6" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">
				<p className="title">Shopping online feels easier and more fun</p>
				<p className="subtitle">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, veritatis distinctio laudantium
					vitae hic perspiciatis, id officia ullam, fugit voluptatem dignissimos culpa alias quaerat
					necessitatibus reprehenderit at animi aperiam dolor?
				</p>
				<button className="btn btn-outline-primary shop-button">Shop Now</button>
			</div>

			<div
				className="col-6 fade-in"
				data-aos="fade-left"
				data-aos-easing="ease"
				data-aos-delay="350"
				data-aos-duration="1000"
			>
				<img src="assets/storePicture.png" />
			</div>
		</div>
	);
};

export default HomeView;
