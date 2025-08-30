import React from "react";
import { Target, AlertTriangle, Lightbulb } from "lucide-react";

const OurWork = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-[#2F5233] to-[#76B947]"
      id="work"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Saameynta aan leenahay
          </h2>
          <p className="text-xl text-[#B1D8B7] max-w-3xl mx-auto leading-relaxed">
            Caqabadaha waan aqoonsanaa, xalal waara oo ku habboon waan abuurnaa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Goal */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#76B947] to-[#94C973] rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            {/* <h3 className="text-2xl font-bold text-[#2F5233] mb-4"> */}
            <h3 className="text-2xl font-bold mb-4"> 
              Ujeeddooyinka
            </h3>
            <ul className="space-y-2 text-gray-600">
              <p className="text-lg opacity-90 leading-relaxed">
                Ujeeddadeenu waa in Kor loo qaado beeraleyda, khubarada, iyo
                maal-gashadayaasha Soomaaliyeed, iyadoo la hagaajinayo
                wax-soosaarka dalagyada, la fududeynayo helitaanka hagid
                khubaro, iyo in la hubiyo qorsheynta maalgashiyada si
                go’aanadoodu u noqdaan kuwo hufan oo waara.
              </p>
            </ul>
          </div>

          {/* Challenge */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#94C973] to-[#B1D8B7] rounded-full flex items-center justify-center mb-6 shadow-lg">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Caqabadaha
            </h3>
            <ul className="space-y-2 text-gray-600">
              <p className="text-lg opacity-90 leading-relaxed">
                Beeraleyda iyo maal-gashadayaasha waxay la kulmaan caqabado kala
                duwan oo ay ka mid yihiin helitaan xadidan oo khubaro ah,
                hubanti la’aan ku saabsan maalgashiga, caqabado isgaarsiineed,
                iyo kheyraad kala firdhan oo aan isku xirnayn, taasoo adkeynaysa
                horumar waara oo beeraha iyo ganacsiga la xiriira.
              </p>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#B1D8B7] to-[#76B947] rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold  mb-4">Xalka</h3>
            <ul className="space-y-2 text-gray-600">
              <p className="text-lg opacity-90 leading-relaxed">
                Xal kasta oo aan abuurno waxaa loogu talagalay in lagu xalliyo
                caqabadaha dhabta ah ee beeraleyda iyo maal-gashadayaasha,
                iyadoo la kordhinayo wax-soosaarka, lana dhimo khataraha, lana
                fududeynayo isku xirka beeraleyda iyo khuburada beeraha, La talinta maalgashadayaasha.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
