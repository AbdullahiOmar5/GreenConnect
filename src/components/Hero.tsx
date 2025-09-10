import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F5233] via-[#76B947] to-[#94C973]">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bulshooyin Wada Jira
            <span className="block text-[#B1D8B7]">Beerasho Casri ah</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Waxaan fududaynaa wada shaqeynta beeraleyda, khubarada, iyo maalgashadayaasha si loo abuuro horumar, shaqo, iyo nolol wanaagsan.
         </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact"
              className="group bg-white text-[#2F5233] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B1D8B7] hover:text-[#2F5233] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              Billow Hadda
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            {/* <button className="group flex items-center gap-3 text-white hover:text-[#B1D8B7] transition-colors duration-300">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </button> */}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;