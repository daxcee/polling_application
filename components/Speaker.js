var React = require('react');
var Display = require('./parts/Display');
var JoinSpeaker = require('./parts/JoinSpeaker');

var Speaker = React.createClass({
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>
					<h2>Start the presentation</h2>
					<JoinSpeaker />
				</Display>
			</div>
		);
	}
});

module.exports = Speaker;
