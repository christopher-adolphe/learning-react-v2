import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const URL = 'mongodb://127.0.0.1:27017/react-meetups';

const MOCK_MEETUPS = [
  {
    id: 'm1',
    title: 'The First Meetup',
    image: 'https://image.shutterstock.com/image-photo/view-malaga-bullring-harbor-spain-600w-281599199.jpg',
    address: '5th Avenue, Malaga',
    description: 'This is the first meetup description'
  },
  {
    id: 'm2',
    title: 'The Second Meetup',
    image: 'https://image.shutterstock.com/image-photo/dusk-view-barcelona-spain-plaza-600w-520067140.jpg',
    address: '10th Street, Barcelona',
    description: 'This is the second meetup description'
  },
  {
    id: 'm3',
    title: 'The Third Meetup',
    image: 'https://image.shutterstock.com/image-photo/old-town-prince-palace-on-600w-427693039.jpg',
    address: '20th Avenue, Monaco',
    description: 'This is the third meetup description'
  }
];

function Home({ meetups }) {
  // const [ meetups, setMeetups ] = useState([]);

  // useEffect(() => {
  //   setMeetups(MOCK_MEETUPS);
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a list of worldwide React meetups" />
      </Head>

      <MeetupList meetups={ meetups } />
    </Fragment>
  );
}

/*
  Using the `getStaticProps()` function to inform
  Next.js to wait for data when building the
  pages. It should return an object with a `props`
  key which will then be automatically provided as
  a prop to the page component.
  The `getStaticProps()` function take a `context`
  argument which provides access to routing params

  NOTE: The `getStaticProps()` function only works
  in `page` components and this function is executed
  when we run the build process
  It is more suitable to use `getStaticProps()` when
  we have a page where the data is rarely updated
  This data fetching strategy is know as Static
  Site Generation (SSG)
*/
export async function getStaticProps() {
  // Fetching data from an API
  const client = await MongoClient.connect(URL);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const result = await meetupsCollection.find().toArray();
  const meetups = result.map(meetup =>({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    description: meetup.description
  }));

  client.close();

  return {
    props: {
      meetups
    },
    /*
      Using the `revalidate` key to schedule a regular
      update of the prerendered page
    */
    revalidate: 3600
  };
}

/*
  Using the `getServerSideProps()` function to inform
  Next.js to wait for data on each page request.
  It should return an object with a `props`
  key which will then be automatically provided as
  a prop to the page component.
  The `getServerSideProps()` function take a `context`
  argument which provides access to the request and
  response objects. Having access these object is
  helpful if we need to perform logic base on the
  request object like for example, authentication

  NOTE: The `getServerSideProps()` function only works
  in `page` components and this function is executed
  when the page is prerendered on the server.
  It is more suitable to use `getServerSideProps()` when
  we have a page where the data is frequently updated and
  where we might also need to get access to the request
  object
  This data fetching strategy is know as Server Side
  Rendering (SSR)
*/
// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   // Fetching data from an API

//   return {
//     props: {
//       meetups: MOCK_MEETUPS
//     }
//   };
// }

export default Home;
