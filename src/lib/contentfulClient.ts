//import { GraphQLClient } from 'graphql-request';
import { createClient } from 'contentful';

export const getContentfulClient = () => {
  const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
  const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master';

  if (!SPACE_ID || !ACCESS_TOKEN) {
    throw new Error("Missing Contentful environment variables");
  }

  return createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
    environment: ENVIRONMENT,
  });
};

export const getHomepageEntries = async () => {
  const client = getContentfulClient();
  const response = await client.getEntries({ content_type: 'homepage' });
  return response.items;
};
