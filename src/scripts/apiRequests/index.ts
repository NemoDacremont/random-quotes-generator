
import { getRandomQuote } from './randomQuote';
import { getAuthorQuotes } from './authorQuote';

export interface Quote {
	_id: string;
	quoteText: string;
	quoteAuthor: string;
	quoteGenre: string;
}

export interface ApiRandomQuoteResponse {
	statusCode: number;
	quote: Quote;
}

export interface ApiAuthorResponse {
	statusCode: number;
  message: string;
  totalPages: number;
  currentPage: number;
  quotes: Quote[];
}

// Export api requests function

export {
	getRandomQuote,
	getAuthorQuotes
}
