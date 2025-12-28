const TestimonialSection = ({ departmentData }) => {
  return (
    <section 
      className="py-20 bg-cover bg-center" 
      style={{ 
        backgroundImage: `url(${departmentData.testimonialBackground || '/images/testimonial-bg.jpg'})` 
      }}
    >
      <div className="bg-black bg-opacity-60 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See more job offers in other departments
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Explore exciting opportunities across our organization and find your perfect fit.
          </p>
          <a 
            href="/career" 
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Browse All Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;