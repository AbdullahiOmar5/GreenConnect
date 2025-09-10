import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogPosts.find(post => post.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = blogPosts
    .filter(post => post.id !== article.id && post.category === article.category)
    .slice(0, 3);

  return (
    <div className="pt-16">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-[#2F5233] to-[#76B947] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Link 
              to="/insights"
              className="inline-flex items-center gap-2 text-[#B1D8B7] hover:text-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Dib U laabo
            </Link>
            
            <div className="flex items-center gap-2 mb-6">
              <article.icon className="w-6 h-6 text-[#B1D8B7]" />
              <span className="text-[#B1D8B7] font-medium">{article.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-[#B1D8B7] mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
            </div>
            
            <button className="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
              <Share2 className="w-4 h-4" />
              La wadaag maqaalka
            </button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
                {article.excerpt}
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {article.content.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-[#B1D8B7] bg-opacity-30 text-[#2F5233] px-4 py-2 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-[#2F5233] mb-4">
                Maqaallada la xiriira
              </h2>
              <p className="text-gray-600">
                Sii wad baaritaanka aragtiyada ku saabsan {article.category}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <Link
                  key={relatedArticle.id}
                  to={`/insights/${relatedArticle.slug}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={relatedArticle.image} 
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <relatedArticle.icon className="w-4 h-4 text-[#76B947]" />
                      <span className="text-[#76B947] font-medium text-sm">{relatedArticle.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#2F5233] mb-2 leading-tight line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {relatedArticle.date}
                      </div>
                      <span>{relatedArticle.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;