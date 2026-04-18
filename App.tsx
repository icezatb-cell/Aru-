import React from 'react';
import { Search, ShoppingBag, ArrowRight, Star, Instagram, Twitter, Facebook } from 'lucide-react';

// ==========================================
// 🖼️ แก้ไขรูปภาพทั้งหมดได้ที่นี่ (Edit Images Here)
// 
// 💡 วิธีใช้รูปภาพในเครื่องของคุณเอง:
// 1. นำไฟล์รูปภาพไปใส่ไว้ในโฟลเดอร์ `public/images/` (ผมสร้างโฟลเดอร์เตรียมไว้ให้แล้ว)
// 2. เปลี่ยน URL ด้านล่างเป็น path ของรูป เช่น "/images/my-hero.jpg" (ต้องมี / นำหน้าเสมอ)
// ==========================================
const IMAGES = {
  // ตัวอย่างการใช้รูปในเครื่อง: heroBackground: "/images/hero-bg.jpg",
  heroBackground: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=2000&auto=format&fit=crop",
  
  products: {
    wildLavender: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=800&auto=format&fit=crop",
    eucalyptusDew: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
    activeCharcoal: "https://images.unsplash.com/photo-1611078500743-7ed17622b311?q=80&w=800&auto=format&fit=crop"
  },
  
  philosophy: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop"
};

export default function App() {
  return (
    <div className="min-vh-100 text-brand-dark bg-white">
      {/* Navigation */}
      <nav className="position-absolute top-0 start-0 end-0 z-3 px-4 py-4 d-flex align-items-center justify-content-between bg-transparent">
        <div className="d-none d-md-flex align-items-center gap-4">
          <a href="#" className="nav-link-custom">Shop</a>
          <a href="#" className="nav-link-custom">Collections</a>
          <a href="#" className="nav-link-custom">About</a>
          <a href="#" className="nav-link-custom">Journal</a>
        </div>
        <div className="fs-3 font-serif fst-italic fw-bold text-brand-dark tracking-wider">
          Aura
        </div>
        <div className="d-flex align-items-center gap-3 text-brand-dark">
          <button className="btn btn-link text-brand-dark p-0 text-decoration-none"><Search size={18} strokeWidth={1.5} /></button>
          <button className="btn btn-link text-brand-dark p-0 text-decoration-none position-relative">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-brand-green" style={{ fontSize: '0.5rem', padding: '0.25em 0.4em' }}>0</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="position-relative vh-100 d-flex align-items-center" style={{ minHeight: '600px' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
          <img 
            src={IMAGES.heroBackground} 
            alt="Handcrafted soap bar" 
            className="w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.5), transparent)' }}></div>
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent, transparent)' }}></div>
        </div>
        
        <div className="container position-relative z-1 pt-5">
          <div style={{ maxWidth: '600px' }}>
            <p className="small fw-bold tracking-widest text-uppercase mb-3">Nature's Crafted</p>
            <h1 className="display-3 font-serif text-brand-dark mb-4" style={{ lineHeight: 1.1 }}>
              Handcrafted <br/> Nature <br/> <span className="fst-italic">in a Bar</span>
            </h1>
            <button className="btn btn-brand rounded-pill px-4 py-2 small fw-bold tracking-widest text-uppercase" style={{ fontSize: '0.75rem' }}>
              Shop Collection
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-5 container mt-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div>
            <h2 className="fs-2 font-serif mb-2">The Signature Trio</h2>
            <p className="text-muted mb-0">Discover our best-selling botanical bars for every skin need.</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
              <ArrowRight size={16} className="text-muted" style={{ transform: 'rotate(180deg)' }} />
            </button>
            <button className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
              <ArrowRight size={16} className="text-dark" />
            </button>
          </div>
        </div>

        <div className="row g-4">
          {/* Product 1 */}
          <div className="col-md-4">
            <div className="product-card">
              <div className="product-img-wrapper mb-3">
                <img src={IMAGES.products.wildLavender} alt="Wild Lavender" className="product-img" />
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="font-serif h5 mb-1">Wild Lavender</h3>
                  <p className="text-muted fw-bold text-uppercase tracking-widest mb-0" style={{ fontSize: '0.65rem' }}>Calming & Soothing</p>
                </div>
                <span className="fw-medium">$12.00</span>
              </div>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="col-md-4">
            <div className="product-card">
              <div className="product-img-wrapper mb-3">
                <img src={IMAGES.products.eucalyptusDew} alt="Eucalyptus Dew" className="product-img" />
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="font-serif h5 mb-1">Eucalyptus Dew</h3>
                  <p className="text-muted fw-bold text-uppercase tracking-widest mb-0" style={{ fontSize: '0.65rem' }}>Invigorating & Fresh</p>
                </div>
                <span className="fw-medium">$12.00</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-4">
            <div className="product-card">
              <div className="product-img-wrapper mb-3">
                <img src={IMAGES.products.activeCharcoal} alt="Active Charcoal" className="product-img" />
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="font-serif h5 mb-1">Active Charcoal</h3>
                  <p className="text-muted fw-bold text-uppercase tracking-widest mb-0" style={{ fontSize: '0.65rem' }}>Detoxifying & Cleansing</p>
                </div>
                <span className="fw-medium">$14.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-5 bg-brand-light overflow-hidden mt-5">
        <div className="container py-5">
          <div className="row align-items-center gy-5">
            <div className="col-md-6 position-relative">
              <div className="rounded-circle overflow-hidden mx-auto border border-5 border-white shadow-lg position-relative z-1" style={{ aspectRatio: '1/1', maxWidth: '400px' }}>
                <img src={IMAGES.philosophy} alt="Botanical ingredients" className="w-100 h-100 object-fit-cover" />
              </div>
              <div className="position-absolute z-2 bg-white rounded-circle d-flex align-items-center justify-content-center text-center shadow" 
                   style={{ width: '100px', height: '100px', bottom: '10%', right: '10%', backgroundColor: '#F3E8D8 !important' }}>
                <span className="fw-bold text-uppercase tracking-widest" style={{ fontSize: '0.65rem', lineHeight: 1.4 }}>100%<br/>Natural</span>
              </div>
            </div>
            
            <div className="col-md-6">
              <div style={{ maxWidth: '500px' }} className="mx-auto mx-md-0">
                <p className="fw-bold tracking-widest text-uppercase text-muted mb-3" style={{ fontSize: '0.7rem' }}>The Aura Philosophy</p>
                <h2 className="display-5 font-serif mb-4" style={{ lineHeight: 1.2 }}>Rooted in Earth, <br/> Refined by Ritual.</h2>
                <p className="text-muted fw-light mb-4" style={{ lineHeight: 1.8 }}>
                  We believe that skincare is a ritual, a moment of connection to nature and oneself. Our products are crafted with the finest botanical ingredients, sustainably sourced and thoughtfully formulated to nourish your skin and elevate your wellbeing.
                </p>
                <a href="#" className="text-decoration-none text-brand-dark fw-bold text-uppercase tracking-widest d-inline-flex align-items-center gap-2" style={{ fontSize: '0.75rem' }}>
                  Our Story <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 container text-center mt-5">
        <h2 className="fs-2 font-serif mb-5">The Sensorial Experience</h2>
        
        <div className="row g-4 text-start">
          <div className="col-md-6">
            <div className="bg-brand-light p-5 rounded h-100">
              <div className="text-brand-green mb-4 d-flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="fs-5 font-serif fst-italic mb-4 text-dark" style={{ lineHeight: 1.6 }}>
                "The Eucalyptus Dew is more than soap; it's a morning meditation. The natural scent fills the room without being overwhelming."
              </p>
              <div>
                <p className="fw-bold mb-0 small">Sarah M.</p>
                <p className="text-muted fw-bold text-uppercase tracking-widest mb-0" style={{ fontSize: '0.65rem' }}>Verified Buyer</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-brand-light p-5 rounded h-100">
              <div className="text-brand-green mb-4 d-flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="fs-5 font-serif fst-italic mb-4 text-dark" style={{ lineHeight: 1.6 }}>
                "I've never felt soap so tactile and creamy. It leaves my skin refreshed and the Wild Lavender scent is pure botanical bliss."
              </p>
              <div>
                <p className="fw-bold mb-0 small">Emily R.</p>
                <p className="text-muted fw-bold text-uppercase tracking-widest mb-0" style={{ fontSize: '0.65rem' }}>Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-green text-white py-5 text-center mt-5">
        <div className="container py-5">
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <p className="fw-bold tracking-widest text-uppercase text-white-50 mb-3" style={{ fontSize: '0.7rem' }}>Stay Rooted</p>
            <h2 className="display-5 font-serif mb-3">Join the Circle</h2>
            <p className="text-white-50 mb-5 fw-light small">
              Sign up for our newsletter to receive 10% off your first order, mindful rituals, and more.
            </p>
            
            <form className="d-flex flex-column flex-sm-row gap-3 mx-auto" style={{ maxWidth: '500px' }}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="form-control newsletter-input rounded-pill px-4 py-3 bg-transparent text-white border-light"
                required
              />
              <button type="submit" className="btn btn-light text-brand-green rounded-pill px-4 py-3 fw-bold text-uppercase tracking-widest text-nowrap" style={{ fontSize: '0.75rem' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 mb-4">
            <div className="fs-4 font-serif fst-italic fw-bold tracking-wider">
              Aura
            </div>
            
            <div className="d-flex flex-wrap justify-content-center gap-4 fw-bold text-uppercase tracking-widest text-muted" style={{ fontSize: '0.65rem' }}>
              <a href="#" className="text-decoration-none text-muted">Privacy Policy</a>
              <a href="#" className="text-decoration-none text-muted">Terms of Service</a>
              <a href="#" className="text-decoration-none text-muted">Contact</a>
              <a href="#" className="text-decoration-none text-muted">Wholesale</a>
            </div>

            <div className="d-flex align-items-center gap-3 text-muted">
              <a href="#" className="text-muted"><Instagram size={18} /></a>
              <a href="#" className="text-muted"><Twitter size={18} /></a>
              <a href="#" className="text-muted"><Facebook size={18} /></a>
            </div>
          </div>
          <div className="text-center text-md-end text-muted fw-bold text-uppercase tracking-widest" style={{ fontSize: '0.6rem' }}>
            © 2024 Aura Botanicals. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
