
import axios from 'axios';
import { ApiAuthorResponse } from './index';

const authorURLRequest = 'https://quote-garden.herokuapp.com/api/v2/authors/{{author}}?page=1&limit=3'

export function getAuthorQuotes (author: string): Promise<ApiAuthorResponse> {
	return new Promise((resolve, reject) => {
		const requestURL = authorURLRequest.replace('{{author}}', author);

		axios.get(requestURL).then((response) => {
			resolve(response.data);
		}).catch((error) => {
			reject(error);
		});
	});
}
