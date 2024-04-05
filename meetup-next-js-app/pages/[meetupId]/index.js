import { Fragment } from 'react';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import { MongoClient, ObjectId } from 'mongodb';

import Meetup from '../../components/meetups/Meetup';

const URL = 'mongodb://127.0.0.1:27017/react-meetups';

// const MOCK_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'The First Meetup',
//     image: 'https://image.shutterstock.com/image-photo/view-malaga-bullring-harbor-spain-600w-281599199.jpg',
//     address: '5th Avenue, Malaga',
//     description: 'This is the first meetup description'
//   },
//   {
//     id: 'm2',
//     title: 'The Second Meetup',
//     image: 'https://image.shutterstock.com/image-photo/dusk-view-barcelona-spain-plaza-600w-520067140.jpg',
//     address: '10th Street, Barcelona',
//     description: 'This is the second meetup description'
//   },
//   {
//     id: 'm3',
//     title: 'The Third Meetup',
//     image: 'https://image.shutterstock.com/image-photo/old-town-prince-palace-on-600w-427693039.jpg',
//     address: '20th Avenue, Monaco',
//     description: 'This is the third meetup description'
//   }
// ];

function MeetupDetail({ meetup }) {
  // const router = useRouter();
  // const { meetupId } = router.query;

  // const meetup = MOCK_MEETUPS.find(meetup => meetup.id === meetupId);

  return (
    <Fragment>
      <Head>
        <title>Meetup: { meetup.title }</title>
        <meta name="description" content={ meetup.description } />
      </Head>

      <Meetup meetup={ meetup } />
    </Fragment>
  );
}

/*
  When a page has dynamic routes and uses `getStaticProps()`,
  it needs to define a list of paths to be statically generated.
  It returns an object with a `path` property which is an array
  of `params` of each value that we can have for the dynamic
  route. The returned object also has a `fallback` property which
  is a boolean. If the `fallback` property is set to false then
  this indicates Next.js that the list of path params is complete
  and if a param that does not exist is provided the show a 404
  page. If it is set to true, then this indicates Next.js to try
  generate dynamically on the server if a params that does not
  exist is passed as routing parameter
*/
export async function getStaticPaths() {
  // Fetching data from an API
  const client = await MongoClient.connect(URL);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  const paths = meetups.map(meetup => ({
    params: {
      meetupId: meetup._id.toString()
    }
  }));

  client.close();

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps(context) {
  /*
    The `context` argument has access to routing
    parameters
  */
  const { meetupId } = context.params;

  console.log('getStaticProps - meetupId: ', meetupId);

  // const meetup = MOCK_MEETUPS.find(meetup => meetup.id === meetupId);

  const client = await MongoClient.connect(URL);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const result = await meetupsCollection.findOne({ _id: ObjectId(meetupId) }, { _id: 0 });

  const meetup = { ...result };

  delete meetup._id;

  client.close();

  return {
    props: {
      meetup
    }
  };
}

export default MeetupDetail;
