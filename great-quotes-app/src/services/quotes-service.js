const quotesMock = [
  {
    id: 'q1',
    author: 'Oprah Winfrey',
    text: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.'
  },
  {
    id: 'q2',
    author: 'Walt Disney',
    text: 'The way to get started is to quit talking and begin doing.'
  },
  {
    id: 'q3',
    author: 'Dalai Lama',
    text: 'The purpose of our lives is to be happy.'
  }
];

export const getQuotes = () => {
  return [ ...quotesMock ];
};

export const getQuote = (id) => {
  const quote = quotesMock.find(quote => quote.id === id);

  return quote;
}

const quotesService = {
  getQuotes,
  getQuote
};

export default quotesService;
