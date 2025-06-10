import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative py-16">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550757750-107dfbca40bc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center"
        style={{opacity: 0.6}}
      />
      <div className="absolute inset-0 bg-blue-100/80" />{' '}
      {/* Optional green tint */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-600 mb-4">
          Join the Eco-Friendly Revolution
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Take action today and be part of the solution for a sustainable
          tomorrow. Together, we can make a difference in creating a greener
          future.
        </p>
        <a
          href="https://next-intl.dev"
          className="inline-block bg-white text-gray-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;
