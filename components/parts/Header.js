var React = require('react');

var Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

  getDefaultProps(){
      return {
        status: 'disconnected'
      }
  },

	render() {
		return (
			<header className>
				<h1>{this.props.title}</h1>
			</header>
		);
	}

});

module.exports = Header;
