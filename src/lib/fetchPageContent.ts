import { getContentfulClient } from './contentfulClient';
import { gql } from 'graphql-request';

const query = gql`
  query GetPage($slug: String!, $locale: String!) {
    pageCollection(where: { slug: $slug }, limit: 1, locale: $locale) {
      items {
        title
        sys {
          id
        }
        contentCollection {
          items {
            ... on ComponentHero {
              title
              subtitle
              backgroundImage {
                url
              }
              ctaText
              ctaLink
            }
            ... on ComponentFeatures {
              title
              featuresCollection {
                items {
                  title
                  description
                  icon
                }
              }
            }
            ... on ComponentCta {
              headline
              text
              ctaText
              ctaLink
            }
            ... on ComponentTestimonials {
              title
              testimonialsCollection {
                items {
                  quote
                  authorName
                  authorTitle
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function fetchPageContent(slug: string, locale: string) {
  const client = getContentfulClient();

  try {
    const data = await client.request(query, { slug, locale });
    return data?.landingPageCollection?.items?.[0] || null;
  } catch (err) {
    console.error('Contentful fetch error:', err);
    return null;
  }
}