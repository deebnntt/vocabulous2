import React from 'react';
import UsageForm from './UsageForm';
import { fetchWord } from './fetch';

export default class Word extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			word: '',
			definition1: '',
			partOfSpeech1: '',
			example1: '',
			sentence: '',
			used: false
		};
	}

	componentDidMount() {
		fetchWord().then(json =>
			this.setState({
				word: json.word,
				definition1: json.definitions[0].text,
				partOfSpeech1: json.definitions[0].partOfSpeech,
				example1: json.examples[0].text
			})
		);
	}

	handleSubmit = ev => {
		ev.preventDefault();
		this.setState({
			sentence: this.state.sentence
		});
	};

	handleSentenceUpdate = sentence => {
		this.setState({
			sentence: sentence
		});
	};

	handleCheck = ev => {
		this.setState({
			used: true
		});
	};

	displayWord = () => {
		return (
			<div>
				<h2 className="word-header">{this.state.word}</h2>
				<ol>
					<li>
						{this.state.definition1} ({this.state.partOfSpeech1})
					</li>
					<br />
				</ol>
				<h3>Example uses:</h3>
				<ol>
					<li>{this.state.example1}</li>
				</ol>
			</div>
		);
	};

	displaySentence = () => {
		return <p>{this.state.sentence}</p>;
	};

	render() {
		return (
			<div>
				<div className="vocab-div">
					<h2>Word of the Day</h2>
					<br />
					{this.displayWord()}
				</div>
				<br />
				<br />
				<div className="input-div">
					<h2>Task</h2>
					<br />
					<UsageForm
						onAdd={this.handleSentenceUpdate}
						onCheck={this.handleCheck}
					/>
					<div className="sentence-div">{this.displaySentence()}</div>
				</div>
			</div>
		);
	}
}
