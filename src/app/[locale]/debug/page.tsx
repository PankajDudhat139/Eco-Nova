import {getContentfulClient} from '@/lib/contentfulClient';

export default async function DebugPage() {
  try {
    const client = getContentfulClient();
    console.log("CLIENT:", client);

    const res = await client.request(`
      {
        landingPageCollection(limit: 1) {
          items {
            title
          }
        }
      }
    `);
    return <pre>{JSON.stringify(res, null, 2)}</pre>;
  } catch (error: any) {
    return (
      <div>
        <h2>Error</h2>
        <pre>{JSON.stringify(error.response?.errors || error, null, 2)}</pre>
      </div>
    );
  }
}
