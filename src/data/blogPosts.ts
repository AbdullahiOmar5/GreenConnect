import { Leaf, Cpu, Sprout, TrendingUp, ShieldClose, Lightbulb } from 'lucide-react';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
  icon: any;
  featured: boolean;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Waraabinta Caqliga leh: Sida IoT u Beddelayo Beeraha Soomaaliyeed",
    slug: "smart-irrigation-iot-somali-farms",
    excerpt: "Ogow sida nidaamyada waraabinta IoT ay uga caawinayaan beeraleyda Soomaaliyeed inay keydsadaan biyaha, kordhiyaan wax-soosaarka, isla markaana uga adkaadaan abaarta.",
    content: [
      "Somalia, beeraha waa laf-dhabarta dhaqaalaha iyo nolosha malaayiin qof. Haddana caqabadda ugu weyn ee beeraleydu wajahaan waa yaraanta biyaha, taasoo yaraysa wax-soosaarka dalagyada isla markaana khatar gelinaysa sugnaanta cuntada qaranka.",
      "Halkaan ayay ka soo muuqataa waraabinta caqliga leh ee ku dhisan IoT. Adigoo adeegsanaya dareemayaal cabbira qoyaanka ciidda, beeraleydu waxay si toos ah u ogaan karaan heerka biyaha ee dhulkooda, iyagoo helaya xog waqtigeeda ah oo hagaajinaysa jadwalka waraabinta.",
      "Nidaamyada waraabinta caqliga leh ee ku xiran moobilada ayaa u oggolaanaya beeraleyda inay si fog u xakameeyaan bamamka biyaha, taas oo hubinaysa in dalagyadu helaan qaddarka saxda ah ee biyo waqtiga ku habboon. Taasi waxay badbaadisaa biyo, shaqo, iyo kharashka tamarta.",
      "Ka baxsan beero gaar ah, waraabinta caqliga leh waxay gacan ka geysataa maaraynta waara ee biyaha bulshada. Iyadoo laga fogaanayo khasaaraha, beeraleydu waxay ilaaliyaan kheyraadka biyaha ee la wadaago sida wabiyada, ceelasha, iyo biyaha dhulka hoostiisa.",
      "Intaas waxaa dheer, isku darka waraabinta caqliga leh iyo saadaasha cimilada iyo falanqaynta AI waxay abuurtaa waraabin saadaal leh, halkaasoo go’aamada biyaha lagu saleeyo cimilada soo socota, nooca dalagga, iyo baahida ciidda.",
      "Saamaynta mustaqbalka fog waxay ka sii weyn tahay wax-soosaarka oo kaliya. Bulshooyinka waxay yeelan karaan adkaysi ka dhan ah isbeddelka cimilada, waxayna yarayn karaan khilaafaadka biyaha, iyagoo ilaalinaya amniga cuntada jiilasha soo socda."
    ],
    category: "Beeraha",
    date: "Febraayo 28, 2024",
    readTime: "6 daqiiqo akhris",
    image: "https://images.pexels.com/photos/30733229/pexels-photo-30733229.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Leaf,
    featured: true,
    author: "Dr. Amina Warsame",
    tags: ["IoT", "Waraabin Caqli leh", "Somalia", "AgriTech", "Maaraynta Biyaha"]
  },
  {
    id: 2,
    title: "Xakamaynta Cayayaanka Dijitaalka ah: Ilaalinta Dalagyada iyada oo Teknoolojiyad la adeegsanayo",
    slug: "digital-pest-control-agriculture",
    excerpt: "Sida qalabka dijitaalka ah ee cayayaanka loogu dagaallamayo ay uga caawinayaan beeraleyda Soomaaliyeed si hufan oo waara.",
    content: [
      "Cayayaanka dalagga sida ayaxa, cayayaanka stem borer, iyo armyworm-ka ayaa muddo dheer khatar ku ahaa beeraleyda Soomaaliyeed, mararka qaarkoodna waxay burburiyaan goosashada oo dhan.",
      "Xalka cusub ayaa ah xakamaynta cayayaanka dijitaalka ah, taas oo ku shaqeysa dareemayaal IoT, moodallo saadaalinta AI, iyo shabakado digniino bulsho ku dhisan. Nidaamyadani waxay si waqtigeeda ah u raacaan tirada cayayaanka waxayna u diraan digniino degdeg ah beeraleyda marka halis la ogaado.",
      "Markaas kadib, beeraleydu waxay qaadan karaan tallaabooyin bartilmaameed sida isticmaalka bio-pesticides, dabinno farsamo, ama xitaa ugaarsadayaasha dabiiciga ah. Tani waxay yaraynaysaa sunta kiimikada isla markaana dhowraysa deegaanka.",
      "Qaarkood madalaha waxay ku daraan AI si ay u saadaaliyaan cudurada mustaqbalka ku saleysan isbeddelka cimilada, wareegga dalagga, iyo xogta hore ee cayayaanka. Saadaashani waxay ka caawisaa beeraleyda inay ka hortagaan ka hor inta aysan dhibaatadu weynaan.",
      "Mustaqbalka, Soomaaliya waxay qaadan kartaa shabakado qaran oo bulshada ku dhisan si cayayaanka loogu wargeliyo, taasoo abuuraysa khariidado waqtigeeda ah oo digniin ah.",
      "Xakamaynta cayayaanka dijitaalka ahi ma aha oo keliya teknoolojiyad—waxay awood siisaa beeraleyda, ilaalisaa sugnaanta cuntada, waxayna dhiirrigelisaa beeris waarta."
    ],
    category: "Beeraha",
    date: "Febraayo 28, 2024",
    readTime: "5 daqiiqo akhris",
    image: "https://www.relentless-digital.com/wp-content/uploads/2023/08/Pest-Control-1.jpg?auto=compress&cs=tinysrgb&w=800",
    icon: ShieldClose,
    featured: false,
    author: "Prof. Hassan Ali",
    tags: ["Cayayaanka", "Beeraha Dijitaalka ah", "IoT", "Amniga Cuntada", "Somalia"]
  },
  {
    id: 3,
    title: "Maalgashiga Beeraha: Fursadaha Mustaqbalka Cagaaran ee Soomaaliya",
    slug: "investment-agriculture-somalia",
    excerpt: "Sababta beeraha Soomaaliya ay u yihiin fursadaha maalgashi ee ugu aan la taaban ee qaaradda Afrika.",
    content: [
      "Qaybta beeraha ee Soomaaliya waxay matalaysaa fursad weyn oo aan weli la taaban, iyadoo leh dhul bacrin ah, qorax badan, iyo dad ku tiirsan beero.",
      "Waxay ka koobantahay dalagyada, xoolaha, kalluumaysiga, iyo farsamaynta cuntooyinka—kuwaas oo dhammaantood ka faa’iidaysan kara tiknoolajiyad iyo maalgelin.",
      "Beeraha dijitaalka ah sida app-yada mobilada, madalaha talo bixinta, iyo qalabka beerista saxda ah ayaa ah goob horumar leh oo maalgashadayaashu ku maalgelin karaan hal-abuurnimo.",
      "Maalgashiga kaydinta, farsamaynta, iyo kaabayaasha silsiladda sahaydu waxay yareyn karaan khasaaraha goosashada kadib waxayna kordhin karaan faa’iidada beeraleyda iyo ganacsatada.",
      "Ugu dambeyntii, maalgashiga beeraha Soomaaliya ma aha oo keliya faa’iido dhaqaale—wuxuu taageeraa horumar waara, adkaysi ka dhan ah cimilada, iyo sugnaanta cuntada qaranka."
    ],
    category: "Maalgashi",
    date: "Febraayo 28, 2024",
    readTime: "7 daqiiqo akhris",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: TrendingUp,
    featured: false,
    author: "Layla Mohamed",
    tags: ["Maalgashi", "Ganacsiga Beeraha", "Somalia", "Dhaqaalaha Cagaaran", "AgriTech"]
  },
  {
    id: 4,
    title: "Ganacsiga Galleyda: Laga soo bilaabo Beer ilaa Suuq",
    slug: "business-of-maize-farm-to-market",
    excerpt: "Baadhid sida galleyda Soomaaliyeed looga dhigi karo mid ka baxda nolol ku tiirsanaan una gudubta ganacsi faa’iido leh.",
    content: [
      "Galleydu waa dalagga ugu muhiimsan ee Soomaaliya, waxayna bixisaa cunto iyo dhaqaale. Haddana caqabado sida abuur tayo liita, cayayaanka, iyo kaydinta oo liidata ayaa xaddidaya.",
      "Suuqyada ayaa muhiim ah. Beeraley badan ayaa ku iibsha galleyda qiime hoose dhexdhexaadiyeyaasha, iyagoo ka luminaya fursado fiican.",
      "Farsamaynta kadib goosashada—sida shiididda ama u beddelidda quudinta xoolaha—waxay kordhisaa qiimaha, abuurtaa shaqo, waxayna dhiirrigelisaa ganacsi maxalli ah.",
      "Haddii la isku daro tiknoolajiyada, maalgashiga, iyo awood-siinta beeraleyda, galleydu waxay isu beddeli kartaa tiir dhaqaale cagaaran iyo amniga cuntada dalka.",
      "Sidoo kale, waxay ka caawin kartaa beeraleyda inay helaan suuqyo cusub oo ay ku iibin karaan dalagooda, iyagoo lasocona qiimaha uu marayo dalagoodu maalinkasta."
    ],
    category: "Maalgashi",
    date: "Febraayo 28, 2024",
    readTime: "6 daqiiqo akhris",
    image: "https://images.pexels.com/photos/13168947/pexels-photo-13168947.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Sprout,
    featured: false,
    author: "Yusuf Abdi",
    tags: ["Galley", "Ganacsiga Beeraha", "Silsiladda Qiimaha", "Somalia", "AgriTech"]
  },
  {
    id: 5,
    title: "Dhisidda Buundooyin Dijitaal ah: Isku xirka Beeraleyda iyo Khubarada",
    slug: "building-digital-bridges-farmers-experts",
    excerpt: "Sida madalaha dijitaalka ah u beddelayaan beeraha Soomaaliyeed iyagoo isku xira beeraleyda, khubarada, iyo maal-gashadayaasha.",
    content: [
      "Caqabadda ugu weyn ee beeraleyda Soomaaliyeed wajahan waa helitaanka talo khubaro oo joogto ah, taas oo xaddidaysa awooddooda ay ugu gudbaan beero waara.",
      "Madalaha dijitaalka ah waxay bixiyaan xal xoog leh iyagoo noqda buundooyin isku xidha beeraleyda iyo khubarada. App-yada mobilada, adeegyada SMS-ka, iyo khadadka taleefanka ayaa bixiya talo waqtigeeda ah oo la jaanqaadeysa baahida beeraleyda.",
      "Madalahan waxay fududeeyaan wadaagga aqoonta ku saabsan hababka ugu fiican ee beerista, xakamaynta cayayaanka, iyo helitaanka suuqyada, taasoo ka caawisa beeraleyda inay go’aanno sax ah qaataan.",
      "Mustaqbalka fog, dhisidda isku xirnaanta dijitaalka ah waxay awood siisaa beeraleyda, waxayna ka qayb qaadataa beeris waara iyo hal-abuurnimo bulsho.",
      "In la isku xiro beeraleyda, khubarada, iyo maal-gashadayaasha, ayadoo la adeegsanayo teknoolijiyada casriga ah waxay abuurayaan bulsho ka dhameystiran dhinac walba."
    ],
    category: "Beeraha",
    date: "Febraayo 28, 2024",
    readTime: "5 daqiiqo akhris",
    image: "https://img.freepik.com/premium-photo/indian-agronomist-officer-with-farmer-agriculture-field-holding-whiteboard_621325-20.jpg?auto=compress&cs=tinysrgb&w=800",
    icon: Lightbulb,
    featured: false,
    author: "Asha Nur",
    tags: ["Madalaha Dijitaalka ah", "Taageerada Beeraleyda", "Wadaagga Aqoonta", "Somalia", "AgriTech"]
  }
];
