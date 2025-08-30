import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Leaf, Cpu, Sprout, TrendingUp, Search } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const InsightsPage = () => {
  const categories = ["All", "Agriculture", "Investment"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredArticles = blogPosts.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = blogPosts.find(article => article.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2F5233] to-[#76B947] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Maqaalada iyo Aragtiyaha
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Lasoco maqaaladii ugu dambaysay ee ku saabsan beeraha, hal-abuurka dijitaalka ah iyo maalgashiga beeraha.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-full text-[#2F5233] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-12 animate-fade-in-up">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#76B947] text-white shadow-md'
                      : 'text-[#2F5233] hover:bg-[#B1D8B7] hover:bg-opacity-30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {featuredArticle && selectedCategory === "All" && !searchTerm && (
            <div className="mb-16 animate-fade-in-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <featuredArticle.icon className="w-5 h-5 text-[#76B947]" />
                      <span className="text-[#76B947] font-medium">{featuredArticle.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">Featured</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2F5233] mb-4 leading-tight">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredArticle.date}
                        </div>
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <Link 
                        to={`/insights/${featuredArticle.slug}`}
                        className="group flex items-center gap-2 text-[#76B947] font-semibold hover:text-[#2F5233] transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured || selectedCategory !== "All" || searchTerm).map((article, index) => (
              <div 
                key={article.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2">
                      <article.icon className="w-4 h-4 text-[#76B947]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#76B947] font-medium text-sm">{article.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2F5233] mb-3 leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <Link 
                      to={`/insights/${article.slug}`}
                      className="group flex items-center gap-1 text-[#76B947] font-semibold hover:text-[#2F5233] transition-colors duration-300 text-sm"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;