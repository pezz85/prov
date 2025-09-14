import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Grape, Leaf, Users, MapPin, Phone, Mail, Instagram, ChevronRight } from 'lucide-react';
import WineDetail from './components/WineDetail';

function App() {
  const wines = [
    {
      id: 'misia',
      name: "MISIÀ",
      image: "MISIA.jpg",
      description: "Garganega, trebbiano, trebbianello, breve contatto con le bucce, colore giallo vivo, ricorda il profumo del biancospino, buona salinità.",
      shortDescription: "Vino bianco fresco ed elegante con note floreali e sentori di frutta a polpa bianca."
    },
    {
      id: 'bardolino',
      name: "BARDOLINO",
      image: "BARDOLINO.jpg",
      description: "Corvina, rondinella, molinara, colore rosso rubino, profumi di ciliegia, lampone e mandorla tostata, fresco e beverino.",
      shortDescription: "Vino rosso giovane e fruttato, espressione del territorio del Lago di Garda."
    },
    {
      id: 'chiaretto',
      name: "CHIARETTO",
      image: "CHIARETTO.jpg",
      description: "Corvina, molinara, rondinella, colore rosa tenue, profumi di fragola, lampone e rosa canina, fresco e minerale.",
      shortDescription: "Rosé fresco e fragrante, perfetto per l'aperitivo o i piatti estivi."
    },
    {
      id: 'vin-da-cagnara',
      name: "VIN DA CAGNARA",
      image: "VIN DA CAGNARA.jpg",
      description: "Corvina, corvinone, rondinella, colore rosso rubino intenso, profumi di frutti di bosco, spezie dolci e liquirizia, struttura importante e tannini setosi.",
      shortDescription: "Vino rosso complesso e strutturato, espressione della tradizione vinicola locale."
    },
    {
      id: 'esotico',
      name: "ESOTICO",
      image: "ESOTICO.jpg",
      description: "Il vino che più ci rappresenta, il vigneto più vecchio dell'azienda, vigne di oltre 60 anni, breve macerazione per un'esplosione di frutta esotica succosa tutta da gustare.",
      shortDescription: "Vino bianco da uve antiche, espressione massima del nostro terroir con note di frutta esotica."
    },
    {
      id: 'pinot-grigio',
      name: "PINOT GRIGIO",
      image: "PINOT GRIGIO.jpg",
      description: "100% pinot grigio, vino dal colore ramato, breve macerazione per 5 giorni, profumo di agrumi, gelsomino e note di miele.",
      shortDescription: "Pinot grigio ramato con macerazione sulle bucce, fresco e aromatico."
    },
    {
      id: 'coconar',
      name: "COCONAR",
      image: "COCONAR.jpg",
      description: "100% trebbiano, vinificazione e macerazione in acciaio per 4 mesi, profumo intenso di buccia d'arancia.",
      shortDescription: "Vino d'autore da uve trebbiano, fresco e minerale con note agrumate."
    },
    {
      id: 'vin-de-anfora',
      name: "VIN DE ANFORA",
      image: "ANFORA.jpg",
      description: "100% garganega, vinificazione e macerazione in anfora con le bucce per 6 mesi.",
      shortDescription: "Vino arancione da uve garganega, fermentato e affinato in anfora."
    },
    {
      id: 'garbo-fiz',
      name: "GARBO FIZ",
      image: "GARBO FIZ.jpg",
      description: "100% trebbiano, pet nat con breve macerazione, senza solfiti, fresco fruttato, salino.",
      shortDescription: "Vino frizzante fresco e fruttato, perfetto come aperitivo."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <Routes>
        <Route path="/wine/:id" element={<WineDetail />} />
        <Route 
          path="/" 
          element={
            <>
              {/* Fixed Background */}
            <div 
              className="fixed inset-0 -z-10"
              style={{
                backgroundImage: 'url(/SFONDO%20SITO.jpg)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
                zIndex: -1,
                filter: 'brightness(1.1) contrast(1.1)',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                imageRendering: 'crisp-edges'
              }}
            ></div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/LANDING%20PAGE.jpg')"
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="p-8 sm:p-12 lg:p-16">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    SASSARA VINI
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4 [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Vini Biologici & Biodinamici – Vini delle Morene
                  </h2>
                  <p className="text-lg sm:text-xl text-white mb-8 max-w-4xl mx-auto leading-relaxed [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Quattro generazioni di vignaioli, una visione naturale del vino. VIN DE UA vini fatti solo con l'uva, 
                    tornare alla tradizione, ai profumi e colori dei vini autentici, dei vini dei nostri padri.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button 
                      onClick={() => scrollToSection('chi-siamo')}
                      className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <Users size={20} />
                      Chi siamo
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => scrollToSection('agricoltura')}
                      className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <Leaf size={20} />
                      Scopri la nostra agricoltura
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => scrollToSection('vini')}
                      className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <Grape size={20} />
                      Scopri i nostri vini
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Chi siamo */}
            <section id="chi-siamo" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white/80">
              <div className="relative">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center gap-3 mb-6">
                        <Users className="text-green-600" size={32} />
                        <h2 className="text-3xl sm:text-4xl font-bold text-green-800">Chi siamo – Alessia & Stefano</h2>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Siamo Alessia e Stefano, vignaioli per passione e per tradizione.
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Da oltre 20 anni coltiviamo le nostre uve con metodo Biologico e Biodinamico su una ridente collina morenica, 
                        Monte Mamaor a sud del Lago di Garda, a Valeggio sul Mincio (Regione Veneto). Siamo la terza generazione di 
                        vignaioli nella nostra famiglia, le nostre vigne (10 ettari) sono state piantate più di 50 anni fa dal papà 
                        di Stefano, solo varietà tradizionali: bianche (garganega, trebbiano, trebbianello, fernanda, malvasia) e 
                        rosse (corvina, rondinella, molinara, merlot) e tante uve antiche.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        La nostra agricoltura rispetta le persone, le piante, gli animali, il suolo e l'ambiente, rispetta la vita, 
                        i ritmi del tempo e la biodiversità. Questa è la Biodinamica per noi. Quello che vogliamo lasciare ai nostri figli.
                      </p>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img 
                        src="/images/FOTO%20PROPRIETARI.jpg"
                        alt="Alessia e Stefano"
                        className="w-full h-auto max-h-[600px] object-contain rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Agricoltura Biodinamica */}
            <section id="agricoltura" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white/80">
              <div className="relative">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <Leaf className="text-green-600" size={32} />
                      <h2 className="text-3xl sm:text-4xl font-bold text-green-800">La Nostra Agricoltura Biodinamica</h2>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-green-700 mb-4">Cos'è la biodinamica?</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        È un'agricoltura che dialoga con la terra, ne segue i ritmi e la sostiene con pratiche rigenerative.
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Usiamo preparati naturali come cornoletame e cornosilice, preparati da cumulo e tisane di ortica ed equiseto, 
                        seminiamo sovesci e osserviamo le fasi lunari per ogni attività sia in campagna sia in cantina.
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Non trattiamo la terra come una risorsa, ma come un organismo vivente.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Per questo i nostri vigneti sono ricchi di biodiversità, insetti utili, erbe spontanee, e profumano di vita.
                      </p>
                    </div>
                    <div className="flex justify-center items-center h-full">
                      <img 
                        src="/images/LA%20NOSTRA%20AGRICOLTURA%20BIODINAMICA.jpg"
                        alt="La nostra agricoltura"
                        className="w-full h-96 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-4 border-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* I Nostri Vini */}
            <section id="vini" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white/80">
              <div className="relative">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <Grape className="text-green-600" size={32} />
                      <h2 className="text-3xl sm:text-4xl font-bold text-green-800">I Nostri Vini</h2>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {wines.map((wine, index) => (
                      <div key={index} className="h-full">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-4 border-white flex flex-col h-full">
                          <div className="h-56 bg-white rounded-xl mb-4 flex items-center justify-center p-4">
                            <img 
                              src={"/images/" + wine.image}
                              alt={wine.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <h3 className="text-xl font-semibold text-green-800 mb-3">{wine.name}</h3>
                          {wine.shortDescription && <p className="text-gray-600 mb-4 line-clamp-3">{wine.shortDescription}</p>}
                          <div className="mt-auto">
                            <Link 
                              to={`/wine/${wine.id}`}
                              className="mt-4 inline-flex items-center justify-center border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 w-full text-center"
                            >
                              Scopri di più
                              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-white">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Come li facciamo:</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Raccolta e selezione manuale delle uve, fermentazioni spontanee con pied de cuve, nessuna filtrazione, 
                      nessuna chiarifica, solfiti solo se necessari. Ogni bottiglia racconta l'annata, il suolo e il nostro lavoro.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Visite & Degustazione */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white/80">
              <div className="relative">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Grape className="text-green-600" size={32} />
                        <h2 className="text-3xl sm:text-4xl font-bold text-green-800">Vieni a Trovarci – Visita & Degustazione</h2>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Vuoi scoprire davvero i nostri vini? Vieni a trovarci!
                      </p>
                      <p className="text-gray-600 mb-6">
                        Contattaci sui nostri social per una visita.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-700">
                          <MapPin className="text-green-600" size={20} />
                          <span>Az Agr Pezzini - Sassara<br />Via Monte Mamaor, 17 – 37067 Valeggio sul Mincio (VR)</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <Instagram className="text-green-600" size={20} />
                          <span>@sassara_vini</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                          📅 Visite e degustazioni solo su prenotazione
                        </p>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="/images/1619089114289.jpg"
                        alt="Degustazione vini"
                        className="w-full h-96 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Az Agr Pezzini - Sassara</h3>
                    <p className="text-green-100 mb-4">Vini Biologici & Biodinamici</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <MapPin size={18} />
                        <span className="text-sm">Via Monte Mamaor, 17 – 37067 Valeggio sul Mincio (VR)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} />
                        <span className="text-sm">+39 339 7825418</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={18} />
                        <span className="text-sm">sassaravini@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Instagram size={18} />
                        <span className="text-sm">@sassara_vini</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-end">
                    <div className="text-center">
                      <Leaf className="text-green-400 mx-auto mb-4" size={48} />
                      <p className="text-green-100 text-sm">
                        Quattro generazioni di vignaioli<br />
                        Una visione naturale del vino
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-green-700 mt-8 pt-8 text-center">
                  <p className="text-sm text-green-200">
                    &copy; 2025 Sassara Vini. Tutti i diritti riservati.
                  </p>
                </div>
              </div>
            </footer>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;