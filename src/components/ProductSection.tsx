'use client';

import React from 'react';

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductSectionProps {
  title: string;
  description: string;
  specifications: ProductSpec[];
  images: string[];
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  description,
  specifications,
  images
}) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  if (!images || images.length === 0) {
    return null;
  }
  if (!title || !description) {
    return null;
  }
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="grid grid-cols-1 gap-12">
        <div className="product-info space-y-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          <div className="product-gallery grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="rounded-lg shadow-md group-hover:opacity-80 transform transition-all duration-300 ease-in-out object-cover w-full h-64 cursor-pointer"
                />
                <div className="absolute  inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <>
                    <span
                      onClick={() => setSelectedImage(image)}
                      className="text-white cursor-pointer bg-black bg-opacity-75 px-4 py-2 rounded-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Image {index + 1}
                    </span>
                  </>
                </div>

                {selectedImage === image && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
                    <div className="relative max-w-4xl mx-auto">
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <img
                        src={selectedImage}
                        alt={`Product image ${index + 1}`}
                        className="max-h-[90vh] rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
