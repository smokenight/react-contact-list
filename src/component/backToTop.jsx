import React from "react";
import PropTypes from "prop-types";

class BackToTop extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

export default BackToTop;
BackToTop.propTypes = {
	location: PropTypes.object,
	children: PropTypes.any
};