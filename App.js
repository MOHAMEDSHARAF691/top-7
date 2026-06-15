import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('hot');
  const [searchTerm, setSearchTerm] = useState('');

  const menu = {
    hot: [
      { name: 'تركيه', price: '8/5' },
      { name: 'كابتشينو', price: '10/8' },
      { name: 'هوت شوكليت', price: '10/8' },
      { name: 'حليب زنجبيل', price: '5/3' },
      { name: 'كوراتادو', price: '7' },
      { name: 'فلات وايت', price: '7' },
      { name: 'سحلب', price: '8' },
      { name: 'شاي كرك', price: '7/5' },
      { name: 'تسكافيه', price: '6/4' },
      { name: 'ميكاتو', price: '10/8' },
      { name: 'اسبريسو حار', price: '11/9' },
      { name: 'كرم كابتشينو', price: '11/9' },
    ],
    cold: [
      { name: 'Oreo شيك', price: '14/12' },
      { name: 'شيك سينكر', price: '14/12' },
      { name: 'كودرد', price: '11' },
      { name: 'موهيتو', price: '8' },
      { name: 'موكا بارد', price: '12/10' },
      { name: '60 بارد', price: '10' },
      { name: 'أيس أمريكاني', price: '10' },
      { name: 'أيس سينسس لاتيه', price: '10/8' },
      { name: 'أيس لاتيه', price: '10/8' },
      { name: 'أيس كراميل لاتيه', price: '10/8' },
      { name: 'قهوة البوم بارد', price: '5' },
      { name: 'كركيه بارد', price: '6' },
      { name: 'توي بارد', price: '12/10' },
      { name: 'شوكولاتة بارد', price: '12/10' },
      { name: 'ملك شيك كيكات', price: '14/12' },
      { name: 'ملك شيك مارس', price: '14/12' },
      { name: 'ملك شيك كيندر', price: '14/12' },
      { name: 'ملك شيك لونش', price: '14/12' },
      { name: 'ملك شيك نوتيلا', price: '14/12' },
    ],
    tea: [
      { name: 'شاي سادة', price: '4/2' },
      { name: 'شاي كمون', price: '5/3' },
      { name: 'شاي بالونج', price: '5/3' },
      { name: 'شاي بالحليب', price: '5/3' },
      { name: 'شاي أخضر', price: '4/2' },
      { name: 'شاي بالنعناع', price: '5/3' },
      { name: 'شاي انجليزي', price: '5/3' },
      { name: 'شاي بنسيون', price: '5/3' },
    ],
    sweets: [
      { name: 'بان شيك نوتيلا', price: '8' },
      { name: 'بان شيك مكس', price: '10' },
      { name: 'كريب نوتيلا', price: '8' },
      { name: 'كريب مكس', price: '10' },
      { name: 'كيك بارد', price: '6' },
      { name: 'حلاصديق', price: '8' },
      { name: 'حلا بيسطاشو', price: '8' },
      { name: 'كراميل', price: '10' },
      { name: 'بليجكي', price: '12' },
      { name: 'حلا بارد', price: '12' },
      { name: 'كوكيز', price: '6' },
    ],
  };

  const categories = [
    { key: 'hot', label: 'الساخنة', icon: '☕' },
    { key: 'cold', label: 'الباردة', icon: '🧊' },
    { key: 'tea', label: 'الشاي', icon: '🍵' },
    { key: 'sweets', label: 'الحلويات', icon: '🍰' },
  ];

  const currentItems = menu[activeCategory].filter(item =>
    item.name.includes(searchTerm)
  );

  return (
    <div className="app">
      <div className="header">
        <div className="logo">☕</div>
        <h1>TOP7 COFFEE</h1>
        <p>قائمة المشروبات والحلويات</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="ابحث عن مشروبك..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat.key}
            className={`category-btn ${activeCategory === cat.key ? 'active' : ''}`}
            onClick={() => { setActiveCategory(cat.key); setSearchTerm(''); }}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <div className="items-list">
        {currentItems.length > 0 ? (
          currentItems.map((item, idx) => (
            <div key={idx} className="item">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price} ر.س</span>
            </div>
          ))
        ) : (
          <div className="no-results">لا توجد نتائج للبحث</div>
        )}
      </div>

      <div className="whatsapp-button">
        <a href="https://wa.me/966556077416" target="_blank" rel="noopener noreferrer">
          <span>💬</span> اطلب عبر الواتس
        </a>
      </div>
    </div>
  );
}

export default App;
