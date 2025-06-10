import React from 'react';
import FeatureItem from './FeatureItem';

const FeatureSection: React.FC = () => {
    const features = [
        {
            icon: "fas fa-leaf",
            title: "Eco-Friendly",
            description: "Our products are made with sustainable materials and practices."
        },
        {
            icon: "fas fa-recycle",
            title: "Recyclable",
            description: "100% recyclable packaging and materials for a better planet."
        },
        {
            icon: "fas fa-heart",
            title: "Sustainable",
            description: "Promoting a sustainable lifestyle for future generations."
        },
        {
            icon: "fas fa-globe",
            title: "Global Impact",
            description: "Making a positive impact on the environment worldwide."
        }
    ];

    return (
        <section className="feature-section py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;