import React from 'react';
import {Users, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-6">
            Hadafkayaga
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Waxay ujeeddadeenu tahay inaan awood siino beeraleyda iyo maal-gashadayaasha Soomaaliyeed iyada oo loo isticmaalayo teknoolojiyada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#B1D8B7] to-[#94C973] text-[#2F5233] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Lightbulb className="w-8 h-8 text-[#76B947]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Hal-abuur Wax ku Ool ah</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Xal kasta oo aan abuurno waxaa loogu talagalay in lagu xalliyo caqabadaha dhabta ah ee beeraleyda iyo maal-gashadayaasha, iyadoo la kordhinayo wax-soosaarka, lana dhimo khataraha, lana fududeynayo isku xirka bulshada beeralayda iyo khuburada beeraha.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#94C973] to-[#76B947] text-[#2F5233] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up animation-delay-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Users className="w-8 h-8 text-[#76B947]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Bulshada Marka Hore</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Waxaan si dhow ula shaqeynaa beeraleyda iyo bulshooyinka maxalliga ah si loo hubiyo in madasheenu la jaanqaado baahidooda, isla markaana kor u qaadno fursadaha. Waxaan sidoo kale dhiirrigelineynaa wada-shaqeyn waarta iyo aqoon wadaag, si bulshooyinku u horumaraan muddo dheer.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#76B947] to-[#B1D8B7] text-[#2F5233] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up animation-delay-400">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Globe className="w-8 h-8 text-[#76B947]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Xiriir Saameyn Leh</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Iyada oo aan beeraleyda, khubarada, iyo maal-gashadayaasha isku xireyno, xalalkayagu waxay dhiirrigeliyaan iskaashi, aqoon wadaagid, iyo horumar wax-ku-ool ah, taasoo faa’iido u leh guud ahaan bulshada Soomaaliyeed. Sidoo kale, waxay abuurayaan fursado dhaqaale iyo wax-soo-saar waara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;