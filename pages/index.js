import Layout from '../components/Layout';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

// const link = createHttpLink({ uri: 'https://engine.apollographql.com/service/ul-test-graph/', fetch: fetch });

const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: 'https://engine.apollographql.com/service/ul-test-graph/'
// });

// const client = new ApolloClient({
//   cache,
//   link
// });

// client
//   .query({
//     query: gql`
//       query GetLaunch {
//         launch(id: 56) {
//           id
//           mission {
//             name
//           }
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

export default function Index() {
  return (
    <Layout>
      <div>
        <div className="box box-primary">
          aaaaaaa
        </div>
      </div>
    </Layout>
  );
}