import PropTypes from "prop-types";
import React from "react";

//create your first component
export function Home(props) {
	console.log(props.counter);
	return (
		<div className="container text-center mt-5">
			<h1>SIMPLE COUNTER</h1>
			<div className="row">
				<div className="col square text-white bg-dark">
					{props.props1}
				</div>
				<div className="col square text-white bg-primary">
					{props.props2}
				</div>
				<div className="col square text-white bg-danger">
					{props.props3}
				</div>
				<div className="col square text-white bg-success">
					{props.props4}
				</div>
				<div className="col square text-white bg-info">
					{props.props5}
				</div>
				<div className="col square text-white bg-secondary">
					{props.props6}
				</div>
			</div>
			<br />
			<button
				className="btn btn-dark"
				onClick={() => window.location.reload(false)}>
				Click to reload!
			</button>
		</div>
	);
}

Home.propTypes = {
	counter: PropTypes.number,
	props1: PropTypes.string,
	props2: PropTypes.string,
	props3: PropTypes.string,
	props4: PropTypes.string,
	props5: PropTypes.string,
	props6: PropTypes.string
};