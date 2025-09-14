import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Wine {
  id: string;
  name: string;
  image: string;
  description: string;
  vintage: string;
  alcohol: string;
  servingTemp: string;
  pairings: string[];
  soil: string;
}

const wines: Record<string, Wine> = {
  'misia': {
    id: 'misia',
    name: 'MISIÀ',
    image: 'MISIA.jpg',
    description: 'Vino bianco fresco ed elegante con note floreali e sentori di frutta a polpa bianca.',
    vintage: '2022',
    alcohol: '12.5%',
    servingTemp: '10-12°C',
    pairings: ['Antipasti di mare', 'Pesce crudo', 'Insalate estive'],
    soil: 'Terreno morenico con presenza di ciottoli'
  },
  'bardolino': {
    id: 'bardolino',
    name: 'BARDOLINO',
    image: 'BARDOLINO.jpg',
    description: 'Vino rosso giovane e fruttato, espressione del territorio del Lago di Garda.',
    vintage: '2021',
    alcohol: '12%',
    servingTemp: '14-16°C',
    pairings: ['Pasta al ragù', 'Carni bianche', 'Formaggi freschi'],
    soil: 'Terreno morenico'
  },
  'chiaretto': {
    id: 'chiaretto',
    name: 'CHIARETTO',
    image: 'CHIARETTO.jpg',
    description: 'Rosé fresco e fragrante, perfetto per l\'aperitivo o i piatti estivi.',
    vintage: '2022',
    alcohol: '12.5%',
    servingTemp: '10-12°C',
    pairings: ['Aperitivi', 'Pesce', 'Insalate di mare'],
    soil: 'Terreno sabbioso-argilloso'
  },
  'vin-da-cagnara': {
    id: 'vin-da-cagnara',
    name: 'VIN DA CAGNARA',
    image: 'VIN DA CAGNARA.jpg',
    description: 'Vino rosso complesso e strutturato, espressione della tradizione vinicola locale.',
    vintage: '2020',
    alcohol: '14%',
    servingTemp: '16-18°C',
    pairings: ['Arrosti', 'Selvaggina', 'Formaggi stagionati'],
    soil: 'Terreno morenico con presenza di sassi'
  },
  'esotico': {
    id: 'esotico',
    name: 'ESOTICO',
    image: 'ESOTICO.jpg',
    description: 'Vino bianco da uve antiche, espressione massima del nostro terroir con note di frutta esotica.',
    vintage: '2021',
    alcohol: '13%',
    servingTemp: '10-12°C',
    pairings: ['Carpacci di pesce', 'Piatti speziati', 'Formaggi di capra'],
    soil: 'Terreno morenico ricco di minerali'
  },
  'pinot-grigio': {
    id: 'pinot-grigio',
    name: 'PINOT GRIGIO',
    image: 'PINOT GRIGIO.jpg',
    description: 'Pinot grigio ramato con macerazione sulle bucce, fresco e aromatico.',
    vintage: '2022',
    alcohol: '12.5%',
    servingTemp: '10-12°C',
    pairings: ['Crudi di mare', 'Sushi', 'Piatti a base di verdure'],
    soil: 'Terreno argilloso-calcareo'
  },
  'coconar': {
    id: 'coconar',
    name: 'COCONAR',
    image: 'COCONAR.jpg',
    description: 'Vino d\'autore da uve trebbiano, fresco e minerale con note agrumate.',
    vintage: '2022',
    alcohol: '12%',
    servingTemp: '10-12°C',
    pairings: ['Fritture di pesce', 'Tartare', 'Piatti etnici'],
    soil: 'Terreno sabbioso con buona componente calcarea'
  },
  'vin-de-anfora': {
    id: 'vin-de-anfora',
    name: 'VIN DE ANFORA',
    image: 'ANFORA.jpg',
    description: 'Vino arancione da uve garganega, fermentato e affinato in anfora.',
    vintage: '2021',
    alcohol: '13%',
    servingTemp: '12-14°C',
    pairings: ['Piatti speziati', 'Formaggi stagionati', 'Carni bianche aromatiche'],
    soil: 'Terreno vulcanico'
  },
  'garbo-fiz': {
    id: 'garbo-fiz',
    name: 'GARBO FIZ',
    image: 'GARBO FIZ.jpg',
    description: 'Vino frizzante fresco e fruttato, perfetto come aperitivo.',
    vintage: '2022',
    alcohol: '11.5%',
    servingTemp: '8-10°C',
    pairings: ['Aperitivi', 'Frutti di mare', 'Piatti leggeri'],
    soil: 'Terreno sabbioso-argilloso'
  }
};

const WineDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const wine = id ? wines[id.toLowerCase()] : null;

  if (!wine) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white/80">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Vino non trovato</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Torna alla lista vini
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white/80">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-600 hover:text-green-800 mb-8 transition-colors group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Torna alla selezione vini
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Immagine vino */}
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <img
                src={`/images/${wine.image}`}
                alt={wine.name}
                className="max-h-[500px] w-auto object-contain"
              />
            </div>

            {/* Dettagli vino */}
            <div className="flex flex-col">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-1">{wine.name}</h1>
                <p className="text-green-600">Annata {wine.vintage} - {wine.alcohol} vol.</p>
              </div>

              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">{wine.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Temperatura di servizio</h3>
                  <p className="text-gray-700 font-medium">{wine.servingTemp}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Terreno</h3>
                  <p className="text-gray-700">{wine.soil}</p>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Abbinamenti consigliati</h3>
                <div className="flex flex-wrap gap-2">
                  {wine.pairings.map((pairing, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-100"
                    >
                      {pairing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineDetail;
