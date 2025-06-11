import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import ProductSection from '@/components/ProductSection';
import CallToActionSection from '@/components/CallToActionSection';
import FooterSection from '@/components/FooterSection';

type Props = {
  params: Promise<{locale: Locale}>;
};

const items = [
  {
    title: 'Eco-Friendly Product',
    description: 'This is a great eco-friendly product.',
    images: [
      'https://images.pexels.com/photos/8294617/pexels-photo-8294617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8294649/pexels-photo-8294649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8294661/pexels-photo-8294661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8294658/pexels-photo-8294658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
];

export default function IndexPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <HeroSection
        backgroundUrl="https://images.pexels.com/photos/9783346/pexels-photo-9783346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        isVideo={false}
      />
      <FeatureSection />
      <ProductSection items={items} />
      <CallToActionSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}
