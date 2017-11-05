import React, { Component } from 'react';

class UsageForm extends Component {
	state = {
		input: '',
		check: false
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.onAdd(this.state.input);
		this.setState({
			input: ''
		});
	};

	handleInputChange = event => {
		this.setState({
			input: event.target.value
		});
	};

	handleCheck = ev => {
		this.props.onCheck(this.state.check);
		this.setState({
			check: true
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="checkBox-div">
						<label className="container">
							<input
								type="checkbox"
								id="used"
								checked={this.state.check}
								onChange={this.handleCheck}
							/>
							<span class="checkmark" />
							I have used this word today.
						</label>
					</div>
					<br />
					<textarea
						placeholder="Enter your sentence here"
						id="word"
						value={this.state.input}
						onChange={this.handleInputChange}
					/>
					<br />
					<input className="button" type="submit" />
				</form>
			</div>
		);
	}
}

export default UsageForm;
