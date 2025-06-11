import { GraphQLClient } from 'graphql-request';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

export const contentfulClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
