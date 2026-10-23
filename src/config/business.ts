export const businessConfig = {
  parent: {
    name: "Sai Groups",
    tagline: "Two Businesses. One Trusted Group.",
    description:
      "Sai Groups is the umbrella identity for two distinct, trusted businesses — Sai Paint House and Sai Event. One transforms spaces with colour, the other transforms moments into memories.",
    mapsUrl: "https://maps.app.goo.gl/73qNyst6vKRhAG1T7",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
    // NOTE: Address/phone must be verified via Maps listing before launch.
    // No address, phone, review score or stats are invented here.
    verifiedNote:
      "Business details are verified via the official Google Maps listing. Visit the listing for directions, hours and contact options.",
    hours: "Hours as listed on Google Maps — please check Maps for latest",
    enquiryEmail: "hello@saigroups.example (replace before launch)",
  },
  paint: {
    slug: "paint",
    name: "Sai Paint House",
    headline: "Bring Your Walls to Life.",
    sub: "Explore colours, finishes and painting solutions for your space — curated with professional guidance.",
    accent: "#FF6B2C",
    categories: [
      {
        title: "Interior Emulsions",
        desc: "Washable, rich-pigment finishes for living spaces, bedrooms and kitchens. Sheen options from matte to silk.",
        image:
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
        note: "Category verified as core offering. Brands & shades updated on enquiry.",
      },
      {
        title: "Exterior Coatings",
        desc: "Weather-resistant protection with long-lasting colour for facades, balconies and compounds.",
        image:
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
        note: "Includes weather-proof & textured options",
      },
      {
        title: "Primers & Undercoats",
        desc: "Foundation layers for durability, adhesion and true colour payoff.",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
        note: "Wall primer, metal primer, putty",
      },
      {
        title: "Wood & Metal Finishes",
        desc: "Enamels, varnishes and stains for doors, grills, gates and furniture.",
        image:
          "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
        note: "Gloss / matt enamel, melamine",
      },
      {
        title: "Waterproofing Solutions",
        desc: "Damp-proof, terrace and bathroom systems to protect structures long-term.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        note: "Owner to confirm preferred systems",
      },
      {
        title: "Tools & Accessories",
        desc: "Rollers, brushes, tapes, sheets and designer stencil tools — everything for a clean finish.",
        image:
          "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
        note: "Retail accessories",
      },
    ],
    colors: [
      { name: "Warm Stone", hex: "#E8ddd0", text: "#3a2f2a" },
      { name: "Sage Mist", hex: "#C9D6C1", text: "#2b332b" },
      { name: "Sai Terracotta", hex: "#FF6B2C", text: "white" },
      { name: "Ocean Slate", hex: "#4A6572", text: "white" },
      { name: "Mustard Glow", hex: "#E9C46A", text: "#2b1d0e" },
      { name: "Charcoal Ink", hex: "#1A1E22", text: "white" },
    ],
  },
  event: {
    slug: "events",
    name: "Sai Event",
    headline: "Your Vision. Beautifully Celebrated.",
    sub: "Thoughtfully planned experiences, brought to life with creativity and care — from intimate moments to grand stages.",
    accent: "#7C1C2B",
    categories: [
      { title: "Weddings & Receptions", desc: "Mandap, stage, entry and guest experience crafted end-to-end.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" },
      { title: "Engagements & Sangeet", desc: "Elegant, photo-ready setups with lighting and floral curation.", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop" },
      { title: "Birthdays & Anniversaries", desc: "Joyful themes for all ages — decor, entertainment and flow.", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop" },
      { title: "Family Functions", desc: "Housewarmings, baby showers, thread ceremonies — intimate and warm.", image: "https://images.unsplash.com/photo-1520854221256-589c3572f5c2?q=80&w=800&auto=format&fit=crop" },
      { title: "Corporate Events", desc: "Launches, annual meets and conferences with refined staging.", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" },
      { title: "Stage & Venue Decoration", desc: "Backdrops, lighting, drapes and floral artistry for any venue.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" },
    ],
    portfolio: [
      { id: 1, title: "Blush Garden Reception", type: "Wedding", location: "Banquet Venue", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=900&auto=format&fit=crop", desc: "Soft drapes, cascading florals and warm chandelier glow." },
      { id: 2, title: "Midnight Burgundy Sangeet", type: "Engagement", location: "Terrace Venue", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=900&auto=format&fit=crop", desc: "Deep plum palette with gold accents and layered lighting." },
      { id: 3, title: "Golden Corporate Gala", type: "Corporate", location: "Hotel Ballroom", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=900&auto=format&fit=crop", desc: "Minimal stage language, brand-forward illumination." },
      { id: 4, title: "Pastel First Birthday", type: "Birthday", location: "Garden", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=900&auto=format&fit=crop", desc: "Playful arches, airy balloons, family-focused flow." },
      { id: 5, title: "Ivory Mandap Ceremony", type: "Wedding", location: "Outdoor Venue", image: "https://images.unsplash.com/photo-1520854221256-589c3572f5c2?q=80&w=900&auto=format&fit=crop", desc: "Architectural florals, sheer drapes, serene lighting." },
      { id: 6, title: "Emerald Stage Edit", type: "Stage Decor", location: "Convention Hall", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop", desc: "Botanical stage with textured backdrop and spotlights." },
    ],
  },
};

export type PaintColor = (typeof businessConfig.paint.colors)[number];
