import React, { useState } from 'react';
import { Home, Utensils, Star, MapPin, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { MOCK_PARTNERS } from '../data/mockData';

export default function TrustedPartners({ onPartnerClick }) {
  const [filter, setFilter] = useState('all');

  const filteredPartners = filter === 'all' 
    ? MOCK_PARTNERS 
    : MOCK_PARTNERS.filter(p => p.category === filter);

  return (
    <section className="py-16 md:py-24 bg-raahi-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-raahi-sageDark bg-raahi-sage/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Trusted Local Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-raahi-dark">
              Affordable Stays & Home Food
            </h2>
            <p className="mt-2 text-raahi-dark/70 text-base max-w-xl">
              Verified PGs, student co-livings, and regional tiffin services recommended by newcomers who stayed there.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-full shadow-soft border border-raahi-primary/10 self-start">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-raahi-primary text-white shadow-soft'
                  : 'text-raahi-dark/70 hover:text-raahi-dark'
              }`}
            >
              All Listings
            </button>
            <button
              onClick={() => setFilter('pg')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === 'pg'
                  ? 'bg-raahi-primary text-white shadow-soft'
                  : 'text-raahi-dark/70 hover:text-raahi-dark'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              Affordable PGs
            </button>
            <button
              onClick={() => setFilter('food')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === 'food'
                  ? 'bg-raahi-primary text-white shadow-soft'
                  : 'text-raahi-dark/70 hover:text-raahi-dark'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              Eat Well (Tiffin/Mess)
            </button>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPartners.map((item) => (
            <div
              key={item.id}
              onClick={() => onPartnerClick(item)}
              className="bg-white rounded-3xl overflow-hidden border border-raahi-primary/15 shadow-soft hover:shadow-warm transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row"
            >
              {/* Image Column */}
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-raahi-dark flex items-center gap-1 shadow-soft">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  {item.rating} ({item.reviewsCount})
                </div>
                <div className="absolute bottom-3 left-3 bg-raahi-dark/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-raahi-sage" />
                  Raahi Verified
                </div>
              </div>

              {/* Content Column */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-raahi-sageDark font-semibold mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.area}, {item.city}
                    </span>
                    <span className="uppercase text-[10px] font-extrabold tracking-wider bg-raahi-clay/30 text-raahi-dark px-2 py-0.5 rounded">
                      {item.category === 'pg' ? 'PG & Stay' : 'Meal Service'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-raahi-dark group-hover:text-raahi-primary transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-raahi-dark/70 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-raahi-sand text-raahi-dark/80 px-2.5 py-1 rounded-full border border-raahi-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Price & Contact */}
                <div className="pt-4 mt-4 border-t border-raahi-primary/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-raahi-dark/60 block font-medium">Starting from</span>
                    <span className="text-sm font-extrabold text-raahi-primary">{item.price}</span>
                  </div>
                  <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-raahi-sand hover:bg-raahi-primary hover:text-white transition-all text-raahi-dark">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
