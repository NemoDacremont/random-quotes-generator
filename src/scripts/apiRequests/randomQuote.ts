
import axios from 'axios';

const randomURLRequest = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';

export interface Quote {
	_id: string;
	quoteText: string;
	quoteAuthor: string;
}

export interface ApiRandomQuoteResponse {
	statusCode: number;
	quote: Quote;
}

export async function getRandomQuote (): Promise<ApiRandomQuoteResponse> {
	return new Promise((resolve, reject) => {
		axios.get(randomURLRequest).then((response) => {
			resolve(response.data);
		}).catch((err) => {
			reject(err);
		});
	})
}
