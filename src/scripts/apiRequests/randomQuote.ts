
import axios from 'axios';
import { ApiRandomQuoteResponse } from './index';

const randomURLRequest = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';

export function getRandomQuote (): Promise<ApiRandomQuoteResponse> {
	return new Promise((resolve, reject) => {
		axios.get(randomURLRequest).then((response) => {
			resolve(response.data);
		}).catch((err) => {
			reject(err);
		});
	})
}
