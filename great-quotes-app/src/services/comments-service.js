const commentsMock = [
  {
    id: 'cmt1',
    quoteId: 'q1',
    text: 'Oh, this quote is so inspiring. I love it.'
  },
  {
    id: 'cmt2',
    quoteId: 'q1',
    text: 'This quote was a game changer for me!'
  },
  {
    id: 'cmt3',
    quoteId: 'q2',
    text: 'I want this quote a poster in my office.'
  },
  {
    id: 'cmt4',
    quoteId: 'q2',
    text: 'Each time I read this quote, it gives me a boost of motivation!'
  },
  {
    id: 'cmt5',
    quoteId: 'q2',
    text: 'This quote lead me to start my freelancing career.'
  },
  {
    id: 'cmt6',
    quoteId: 'q3',
    text: 'This is such an inspirational quote. Thanks for sharing.'
  }
];

export const getComments = (quoteId) => {
  return commentsMock.filter(comment => comment.quoteId === quoteId);
};

const commentsService = {
  getComments
};

export default commentsService;
