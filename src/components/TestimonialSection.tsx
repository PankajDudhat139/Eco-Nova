import React from 'react';

interface Testimonial {
    quote: string;
    author: string;
    title: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Eco-Nova has transformed how we approach sustainability in our business. Their solutions are innovative and effective.",
        author: "Sarah Johnson",
        title: "CEO, Green Solutions Inc."
    },
    {
        quote: "Working with Eco-Nova was a game-changer for our environmental initiatives. Highly recommended!",
        author: "Michael Chen",
        title: "Director, Tech Enterprises"
    },
    {
        quote: "The expertise and dedication of the Eco-Nova team helped us achieve our sustainability goals ahead of schedule.",
        author: "Emma Rodriguez",
        title: "Manager, Global Green"
    }
];

const TestimonialSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <blockquote className="mb-4">
                                <p className="text-gray-600 italic">`{testimonial.quote}`</p>
                            </blockquote>
                            <div className="mt-4">
                                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                                <p className="text-gray-500 text-sm">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;