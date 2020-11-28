
import { getRandomQuote, Quote, ApiRandomQuoteResponse } from './randomQuote';
import { getAuthorQuotes, ApiAuthorResponse } from './authorQuote';

// Export ./randomQuote interfaces

export {
	Quote,
	ApiRandomQuoteResponse
}

// Export ./authorQuote interfaces

export {
	ApiAuthorResponse
}

// Export api requests function

export {
	getRandomQuote,
	getAuthorQuotes
}
