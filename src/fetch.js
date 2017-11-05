export function fetchWord() {
	console.log('hi');
	let today = new Date();
	let yyyy = today.getYear() + 1900;
	let dd = today.getDate();
	let mm = today.getMonth() + 1;
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	today = yyyy + '-' + mm + '-' + dd;

	return fetch(
		`http://api.wordnik.com:80/v4/words.json/wordOfTheDay?date=${today}&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`
	).then(res => res.json());
}
