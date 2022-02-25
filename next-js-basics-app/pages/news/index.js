import Link from 'next/link';

function News(props) {
  const news = [
    {
      id: 452,
      title: 'Next.js 101'
    },
    {
      id: 875,
      title: 'Webpack 5 - The Complete Guide'
    },
    {
      id: 354,
      title: 'Gatby from Zero to Hero'
    }
  ];

  return (
    <div>
      <h1>News</h1>

      {
        news.length ? (
          <ul>
            {
              news.map(item => (
                <li key={ item.id }>
                  <Link href={ `/news/${item.id}` }>{ item.title }</Link>
                </li>
              ))
            }
          </ul>
        ) : (
          <p>Sorry, no news available for now.</p>
        )
      }
    </div>
  );
}

export default News;
