import CallToActionSection from '@/components/CallToActionSection';
import FeatureSection from '@/components/FeatureSection';
import HeroSection from '@/components/HeroSection';
import TestimonialSection from '@/components/TestimonialSection';
import { fetchPageContent } from '@/lib/fetchPageContent';

export default async function LandingPage({ params }: { params: { lang: string } }) {
  const content = await fetchPageContent('eco-nova', params.lang || 'en');
console.log("TOKEN:", process.env.CONTENTFUL_ACCESS_TOKEN);
  if (!content) return <div>404 - Page Not Found</div>;

  return (
    <main>
      {content.sectionsCollection.items.map((section: any, index: number) => {
        switch (section.__typename) {
          case 'HeroSection':
            return <HeroSection key={index} {...section} />;
          case 'FeatureSection':
            return <FeatureSection key={index} {...section} />;
          case 'CallToActionSection':
            return <CallToActionSection key={index} {...section} />;
          case 'TestimonialSection':
            return <TestimonialSection key={index} {...section} />;
          // Add more cases as needed
          default:
            return null;
        }
      })}
    </main>
  );
}
