
import axios from 'axios';
import { Quote } from './index';

const authorURLRequest = 'https://quote-garden.herokuapp.com/api/v2/authors/{{author}}?page=1&limit=3'

export interface ApiAuthorResponse {
	statusCode : number;
  message : string;
  totalPages : number;
  currentPage : number;
  quotes : Quote[];
}

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
