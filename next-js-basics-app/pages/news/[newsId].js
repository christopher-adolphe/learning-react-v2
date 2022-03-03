import { useRouter } from 'next/router';
import Link from 'next/link';

function NewsItem(props) {
  /*
    Using the `useRouter()` hook from `next/router` to
    extract dynamic parameters from the route
  */
  const router = useRouter();

  console.log('router: ', router);

  const { newsId } = router.query;

  return (
    <div>
      <h1>NewsItem Component - News id: { newsId }</h1>
      <Link href="/news">Back to News</Link>
    </div>
  );
}

export default NewsItem;
