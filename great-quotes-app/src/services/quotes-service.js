const fakeQuotes = [
  {
    id: 'q1',
    author: 'Oprah Winfrey',
    text: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.'
  },
  {
    id: 'q2',
    author: 'Walt Disney',
    text: 'The way to get started is to quit talking and begin doing.'
  }
];

export const getQuotes = () => {
  return fakeQuotes;
};

export const getQuote = (id) => {
  const quote = fakeQuotes.find(quote => quote.id === id);

  return quote;
}
