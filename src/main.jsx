import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowRight, CakeSlice, ChevronDown, Clock3, Heart, Instagram, MapPin, Menu, MessageCircle, Phone, Sparkles, Star, X } from 'lucide-react'
import './styles.css'
import './contact.css'

const WHATSAPP = '919080419891'
const whatsappUrl = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`

const cakes = [
  { name: 'Red Velvet', type: 'Signature favourite', description: 'Velvety cocoa sponge, cloud-like cream cheese frosting.', image: '/images/red-velvet.jpg' },
  { name: 'Black Forest', type: 'Classic indulgence', description: 'Rich chocolate, cherry compote and generous cream.', image: '/images/black-forest.jpg' },
  { name: 'White Forest', type: 'Light & lovely', description: 'Tender vanilla sponge with white chocolate curls.', image: '/images/white-forest.jpg' },
  { name: 'Chocolate Truffle', type: 'For chocolate lovers', description: 'Silky ganache layered over deep chocolate sponge.', image: '/images/chocolate-truffle.jpg' },
  { name: 'Strawberry Cake', type: 'Fresh & fruity', description: 'Fluffy sponge, fresh berries and a soft pink finish.', image: '/images/strawberry.jpg' },
  { name: 'Tres Leches', type: 'A creamy delight', description: 'Moist, milky and delicately sweet with a cloud of cream.', image: '/images/tres-leches.jpg' }
]

const gallery = [
  { image: '/images/gallery-floral.jpg', alt: 'Elegant white celebration cake with florals', tall: true },
  { image: '/images/gallery-birthday.jpg', alt: 'Pink frosted birthday cake with candles' },
  { image: '/images/gallery-chocolate.jpg', alt: 'Layered cake decorated with chocolate and berries' },
  { image: '/images/gallery-small.jpg', alt: 'Small cake with a joyful pink celebration detail' },
  { image: '/images/gallery-slice.jpg', alt: 'Chocolate cake slice with rich ganache' }
]

function Image({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false)
  return <div className={`image-wrap ${loaded ? 'is-loaded' : ''} ${className}`}><div className="image-placeholder" /><img src={src} alt={alt} loading="lazy" onLoad={() => setLoaded(true)} /></div>
}

function Announcement() {
  return <div className="announcement"><Sparkles size={14} /> Make every celebration sweeter <span>·</span> Custom cake orders welcome <span>·</span> Urgent orders subject to availability <Sparkles size={14} /></div>
}

function Brand() {
  return <a className="brand" href="#home" aria-label="The Home Cafe Home Baker home"><span className="brand-mark"><CakeSlice size={20} strokeWidth={1.8} /></span><span>The Home <b>Cafe</b></span></a>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Our Cakes', 'cakes'], ['Custom Cakes', 'custom'], ['About Us', 'about'], ['Visit Us', 'visit']]
  return <header className="navbar"><div className="container nav-inner"><Brand /><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-order" href={whatsappUrl('Hi The Home Cafe Home Baker! I would like to enquire about your cakes.')} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Order on WhatsApp</a></nav><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div></header>
}

function Hero() {
  return <section className="hero" id="home"><motion.div className="container hero-grid" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}><div className="hero-copy"><div className="eyebrow"><span /> Baked for your best moments</div><h1>Every celebration deserves <em>a beautiful cake.</em></h1><p>From timeless favourites to extraordinary custom creations, make your special moments sweeter with The Home Cafe Home Baker.</p><div className="hero-actions"><a className="button primary" href="#cakes">Explore our cakes <ArrowRight size={17} /></a><a className="text-link" href="#custom">Create something personal <ArrowRight size={16} /></a></div><div className="hero-note"><div className="avatar-stack"><span>R</span><span>♡</span><span>+</span></div><span>Made with care in<br /><b>Salem</b></span></div></div><div className="hero-art"><div className="hero-blob" /><Image className="hero-image" src="/images/hero-cake.jpg" alt="Beautiful layered pink and cream celebration cake" /><div className="hero-badge"><Star size={15} fill="currentColor" /><span>Made for<br /><b>memories</b></span></div><div className="sprinkle sprinkle-one" /><div className="sprinkle sprinkle-two" /></div></motion.div></section>
}

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><div className="eyebrow"><span /> {eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function CakeCard({ cake }) {
  return <article className="cake-card"><div className="cake-image"><Image src={cake.image} alt={`${cake.name} cake`} /><span className="cake-tag">{cake.type}</span><button className="card-arrow" aria-label={`Enquire about ${cake.name}`} onClick={() => window.open(whatsappUrl(`Hi The Home Cafe Home Baker! I am interested in ordering a ${cake.name} Cake. Please share the available sizes, prices and order details.`), '_blank')}><ArrowRight size={17} /></button></div><div className="cake-info"><h3>{cake.name}</h3><p>{cake.description}</p><div className="cake-bottom"><span>Price on request</span><button onClick={() => window.open(whatsappUrl(`Hi The Home Cafe Home Baker! I am interested in ordering a ${cake.name} Cake. Please share the available sizes, prices and order details.`), '_blank')}>Enquire <ArrowRight size={14} /></button></div></div></article>
}

function CakeCollection() {
  return <section className="section collection" id="cakes"><div className="container"><div className="collection-head"><SectionHeading eyebrow="The cake counter" title={<>Little slices of <em>happiness.</em></>} text="Our much-loved flavours, made to bring a little more joy to every table." /><a className="outline-button" href={whatsappUrl('Hi The Home Cafe Home Baker! Please help me choose a cake for my celebration.')} target="_blank" rel="noreferrer">Ask us for a recommendation <ArrowRight size={16} /></a></div><div className="cake-grid">{cakes.map((cake) => <CakeCard key={cake.name} cake={cake} />)}</div></div></section>
}

function CustomStudio() {
  const [form, setForm] = useState({ name: '', phone: '', occasion: '', date: '', flavour: '', weight: '', details: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); if (!form.name || !form.phone || !form.occasion || !form.details) { setError('Please add your name, contact number, occasion and design details.'); return } setError(''); const message = `Hi The Home Cafe Home Baker! I would like to enquire about a custom cake.\n\nName: ${form.name}\nContact: ${form.phone}\nOccasion: ${form.occasion}\nPreferred date: ${form.date || 'To be discussed'}\nFlavour: ${form.flavour || 'Please suggest'}\nApproximate weight: ${form.weight || 'To be discussed'}\nDesign details: ${form.details}\n\nI understand that final price, availability, design feasibility and delivery arrangements require confirmation by The Home Cafe Home Baker. I will attach any reference image in WhatsApp.`; window.open(whatsappUrl(message), '_blank'); setSent(true) }
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  return <section className="section custom-section" id="custom"><div className="container custom-grid"><div className="custom-copy"><div className="custom-label"><Heart size={15} fill="currentColor" /> The custom cake studio</div><h2>Your idea.<br /><em>Our cake.</em><br />Your celebration.</h2><p>Whether it is a tiny wish or a big, beautiful vision, tell us what you are imagining. We will help shape it into something deliciously memorable.</p><div className="custom-list"><span><Sparkles size={16} /> Birthday & anniversary cakes</span><span><Sparkles size={16} /> Wedding, baby shower & theme cakes</span><span><Sparkles size={16} /> Reference-image-based enquiries</span></div><div className="studio-images"><Image src="/images/custom-cake.jpg" alt="Elegant custom celebration cake" /><Image src="/images/custom-pink.jpg" alt="Decorated pink custom cake" /></div></div><div className="form-card"><div className="form-head"><span>01 — Start your enquiry</span><h3>Let's make it yours.</h3><p>Share a few details and we will open a WhatsApp conversation for you.</p></div><form onSubmit={submit}><div className="form-row"><label>Name *<input name="name" value={form.name} onChange={update} placeholder="Your name" /></label><label>Contact number *<input name="phone" value={form.phone} onChange={update} placeholder="+91" type="tel" /></label></div><div className="form-row"><label>Occasion *<select name="occasion" value={form.occasion} onChange={update}><option value="">Choose occasion</option><option>Birthday</option><option>Anniversary</option><option>Wedding</option><option>Baby shower</option><option>Theme celebration</option><option>Other</option></select></label><label>Preferred date<input name="date" value={form.date} onChange={update} type="date" /></label></div><div className="form-row"><label>Flavour preference<input name="flavour" value={form.flavour} onChange={update} placeholder="Chocolate, vanilla..." /></label><label>Approx. weight<input name="weight" value={form.weight} onChange={update} placeholder="e.g. 1 kg" /></label></div><label>Tell us about your cake *<textarea name="details" value={form.details} onChange={update} placeholder="Colours, theme, message on the cake..." rows="3" /></label>{error && <div className="form-error" role="alert">{error}</div>}{sent && <div className="form-success">WhatsApp opened — please attach any reference image there. Your order is confirmed only after we respond.</div>}<button className="button dark full" type="submit">Continue on WhatsApp <ArrowRight size={17} /></button><small>Final price, availability and delivery arrangements are confirmed by the shop.</small></form></div></div></section>
}

function WhyUs() {
  return <section className="section why-section"><div className="container why-grid"><div><SectionHeading eyebrow="The SVC difference" title={<>Made for <em>your moments.</em></>} text="A good cake is delicious. A great cake becomes part of the story you tell for years." /><a className="text-link dark-link" href="#visit">Come say hello <ArrowRight size={16} /></a></div><div className="reasons">{[['01', 'Thoughtfully made', 'Every cake is prepared with care for the moment it is meant to celebrate.'], ['02', 'Flavours for every mood', 'From timeless classics to indulgent chocolate and creamy tres leches.'], ['03', 'Your idea, heard', 'Share a reference, a colour or just a feeling. We love making it personal.'], ['04', 'Easy local ordering', 'A friendly WhatsApp conversation from first idea to final confirmation.']].map(([num, title, text]) => <div className="reason" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>
}

function Gallery() {
  return <section className="section gallery-section"><div className="container"><SectionHeading centered eyebrow="A little inspiration" title={<>Moments worth <em>celebrating.</em></>} text="A few beautiful directions for your next sweet memory." /><div className="gallery-grid">{gallery.map((item, i) => <div className={`gallery-item ${item.tall ? 'tall' : ''}`} key={i}><Image src={item.image} alt={item.alt} /><span>{['Birthday', 'Milestones', 'Just because', 'Sweet details', 'Chocolate'][i]}</span></div>)}</div></div></section>
}

function HowToOrder() {
  return <section className="order-strip"><div className="container"><div className="order-intro"><div className="eyebrow light"><span /> Simple as three steps</div><h2>From craving to<br /><em>celebration.</em></h2></div><div className="steps">{[['01', 'Explore', 'Browse the flavours and find your kind of cake.'], ['02', 'Enquire', 'Tell us your occasion, weight and design needs on WhatsApp.'], ['03', 'Confirm', 'Finalise price, availability and arrangements directly with us.']].map(([num, title, text]) => <div className="step" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div><a className="button light-button" href={whatsappUrl('Hi The Home Cafe Home Baker! I would like to enquire about a cake for my celebration.')} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Start a WhatsApp enquiry</a></div></section>
}

function About() {
  return <section className="section about-section" id="about"><div className="container about-grid"><div className="about-image"><Image src="/images/about-cake.jpg" alt="Cake being finished with delicate decoration" /><div className="about-stamp"><CakeSlice size={21} /><span>Sweet things<br /><b>made local</b></span></div></div><div className="about-copy"><SectionHeading eyebrow="A little about us" title={<>The sweet side of <em>every story.</em></>} text="At The Home Cafe Home Baker, we believe the cake is more than a dessert. It is the first slice, the candle wish, the happy mess and the reason everyone gathers around the table." /><p>We are here to make choosing that cake feel as joyful as eating it — with familiar favourites, thoughtful custom creations and a warm local service you can count on.</p><a className="outline-button" href="#visit">Visit our store <ArrowRight size={16} /></a></div></div></section>
}

function Visit() {
  return <section className="section visit-section" id="visit"><div className="container visit-grid"><div className="visit-copy"><SectionHeading eyebrow="Come find us" title={<>Your next favourite<br /><em>cake is here.</em></>} /><div className="address"><MapPin size={20} /><p><b>The Home Cafe Home Baker</b><br />Muthunaickenpatti<br />Salem, Tamil Nadu, India</p></div><div className="contact-actions"><a className="button primary" href="tel:+919080419891"><Phone size={16} /> Call now</a><a className="button whatsapp" href={whatsappUrl('Hi The Home Cafe Home Baker! I am at/near your store and would like some help.')} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a><a className="outline-button" href="https://www.google.com/maps/search/?api=1&query=The+Home+Cafe+Home+Baker+Muthunaickenpatti+Salem+Tamil+Nadu" target="_blank" rel="noreferrer">Get directions <ArrowRight size={15} /></a></div></div><div className="hours-card visit-info-card"><div className="hours-icon"><MapPin size={22} /></div><h3>Find us in Salem</h3><p>For custom cake ideas, flavours and availability, use the enquiry form above or message us directly on WhatsApp.</p><div className="visit-links"><a href="mailto:homecafe2912@gmail.com">homecafe2912@gmail.com <ArrowRight size={14} /></a><a href="https://www.instagram.com/thehomecafe_salem/" target="_blank" rel="noreferrer">@thehomecafe_salem <ArrowRight size={14} /></a></div></div></div></section>
}

function Footer() {
  return <footer><div className="container footer-top"><div><Brand /><p className="footer-blurb">Beautiful cakes for life's<br />most beautiful moments.</p><a className="instagram" href="https://www.instagram.com/thehomecafe_salem/" target="_blank" rel="noreferrer" aria-label="The Home Cafe Instagram"><Instagram size={17} /> @thehomecafe_salem</a><a className="instagram" href="https://www.facebook.com/100087225073829/?locale=de_DE" target="_blank" rel="noreferrer">Facebook page</a></div><div className="footer-col"><h4>Explore</h4><a href="#cakes">Our cakes</a><a href="#custom">Custom cakes</a><a href="#about">About us</a><a href="#visit">Visit us</a></div><div className="footer-col"><h4>Contact</h4><a href="tel:+919080419891">+91 90804 19891</a><a href="mailto:homecafe2912@gmail.com">homecafe2912@gmail.com</a><a href={whatsappUrl('Hi The Home Cafe Home Baker!')} target="_blank" rel="noreferrer">WhatsApp us</a><span>Muthunaickenpatti, Salem</span></div><div className="footer-cta"><span>Planning something sweet?</span><a href={whatsappUrl('Hi The Home Cafe Home Baker! I would like to enquire about a cake.')} target="_blank" rel="noreferrer">Let's talk cake <ArrowRight size={16} /></a></div></div><div className="container footer-bottom"><span>© 2025 The Home Cafe Home Baker. Made for celebrations.</span><span>Freshly imagined in Salem</span></div></footer>
}

function App() {
  return <><Announcement /><Navbar /><main><Hero /><CakeCollection /><CustomStudio /><WhyUs /><Gallery /><HowToOrder /><About /><Visit /></main><Footer /><a className="floating-whatsapp" href={whatsappUrl('Hi The Home Cafe Home Baker! I would like to enquire about a cake.')} target="_blank" rel="noreferrer" aria-label="Chat with The Home Cafe Home Baker on WhatsApp"><MessageCircle size={23} /><span>Chat with us</span></a></>
}

createRoot(document.getElementById('root')).render(<App />)
