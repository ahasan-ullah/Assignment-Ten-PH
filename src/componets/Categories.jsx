const Categories = () => (
  <section id="categories" className="py-12 border-b">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-black mb-6">Sports Items Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          "Football",
          "Basketball",
          "Tennis",
          "Cricket",
          "Hiking",
          "Swimming",
          "Cycling",
          "Yoga",
        ].map((category) => (
          <div key={category} className="cursor-pointer border rounded-lg shadow-md text-center py-6 bg-gray-800 text-white hover:bg-gray-700 transition">
            <h3 className="font-bold text-lg">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Categories;