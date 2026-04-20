const SERVICES_DATA = {
    'privacy-fences': {
        title: 'Privacy Fences',
        image: 'assets/images/service_fence.png',
        shortDesc: 'Cedar horizontal slats with iron oxide finish. Built to withstand 80mph winds.',
        longDesc: 'Our privacy fences are engineered for both aesthetic appeal and structural integrity. We use premium Western Red Cedar horizontal slats mounted to heavy-duty PostMaster steel posts. This combination ensures maximum privacy while providing a modern, clean look that can withstand high wind loads and the elements.',
        features: [
            { title: 'Western Red Cedar', desc: 'Natural rot resistance and stunning grain patterns.' },
            { title: 'Steel Reinforcement', desc: 'PostMaster steel posts that won\'t warp or rot underground.' },
            { title: 'Wind Resistant', desc: 'Engineered to withstand gusts up to 80mph.' }
        ]
    },
    'composite-decks': {
        title: 'Composite Decks',
        image: 'assets/images/service_deck.png',
        shortDesc: 'High-performance Trex and TimberTech installation with hidden fasteners.',
        longDesc: 'Experience the beauty of wood without the maintenance. Our composite decks feature top-tier materials from Trex and TimberTech, installed with precision hidden fastener systems. These decks are stain, scratch, and mold resistant, ensuring a beautiful outdoor living space for decades.',
        features: [
            { title: 'Low Maintenance', desc: 'No sanding, staining, or painting required—ever.' },
            { title: 'Hidden Fasteners', desc: 'A smooth, screw-free surface for ultimate safety and style.' },
            { title: 'Sustainability', desc: 'Made from up to 95% recycled materials.' }
        ]
    },
    'arbors-pergolas': {
        title: 'Arbors & Pergolas',
        image: 'assets/images/service_arbor.png',
        shortDesc: 'Custom cedar arbors and automated louvered pergolas.',
        longDesc: 'Transform your garden into a sanctuary with our custom-built arbors and pergolas. Whether you want a traditional cedar structure for climbing vines or a modern automated louvered system that provides shade at the touch of a button, we design it to fit your landscape perfectly.',
        features: [
            { title: 'Custom Design', desc: 'Tailored to match your home\'s architecture and your lifestyle.' },
            { title: 'Louvered Options', desc: 'Control your sunlight with adjustable roof slats.' },
            { title: 'Aesthetic Focus', desc: 'Architectural details that add significant value to your property.' }
        ]
    },
    'custom-gates': {
        title: 'Custom Gates',
        image: 'assets/images/service_gate.png',
        shortDesc: 'Heavy-duty industrial gates with modern hardware integration.',
        longDesc: 'Our custom gates combine security with sophistication. From majestic driveway entrances to secure garden walk-throughs, we use heavy-duty hardware and precision engineering to ensure smooth operation and long-lasting durability.',
        features: [
            { title: 'Precision Hardware', desc: 'Heavy-duty hinges and latches designed for daily use.' },
            { title: 'Smart Integration', desc: 'Optional electronic locks and automated opening systems.' },
            { title: 'Structural Integrity', desc: 'Reinforced frames to prevent sagging over time.' }
        ]
    },
    'outdoor-kitchens': {
        title: 'Outdoor Kitchens',
        image: 'assets/images/gallery_1.png',
        shortDesc: 'Modular outdoor cooking stations with stone and cedar finishes.',
        longDesc: 'Take your hosting to the next level with a custom outdoor kitchen. We build modular cooking stations featuring high-end appliances, durable stone countertops, and beautiful cedar accents, all designed to weather the seasons.',
        features: [
            { title: 'Weatherproof Storage', desc: 'Stainless steel and sealed cabinetry for outdoor use.' },
            { title: 'Pro-Grade Appliances', desc: 'Integrated grills, smokers, and refrigeration.' },
            { title: 'Social Layouts', desc: 'Designed for optimal flow between cooking and socializing.' }
        ]
    },
    'cedar-railing': {
        title: 'Cedar Railing',
        image: 'assets/images/gallery_2.png',
        shortDesc: 'Hand-built railing systems for existing decks and stairs.',
        longDesc: 'Safety meets craftsmanship with our hand-built cedar railing systems. Perfect for upgrading an existing deck or completing a new build, our railings are designed to provide secure support while enhancing the visual appeal of your outdoor space.',
        features: [
            { title: 'Hand-Finished', desc: 'Every joint is sanded and fitted for a premium feel.' },
            { title: 'Code Compliant', desc: 'Built to exceed local safety and structural requirements.' },
            { title: 'Multiple Styles', desc: 'Choose from traditional balusters to modern cable infills.' }
        ]
    },
    'retaining-walls': {
        title: 'Retaining Walls',
        image: 'assets/images/gallery_3.png',
        shortDesc: 'Engineered stone and timber walls for erosion control.',
        longDesc: 'Master your landscape with engineered retaining walls. Whether you need to manage a slope, prevent erosion, or create tiered garden beds, we use stone and timber solutions that are as beautiful as they are functional.',
        features: [
            { title: 'Erosion Control', desc: 'Strategic drainage and structural design to manage water flow.' },
            { title: 'Natural Materials', desc: 'Selection of stone and timber that blends with your garden.' },
            { title: 'Engineered Strength', desc: 'Built a depth and reinforcement to last generations.' }
        ]
    },
    'modern-trellis': {
        title: 'Modern Trellis',
        image: 'assets/images/gallery_4.png',
        shortDesc: 'Architectural cedar privacy screens for modern gardens.',
        longDesc: 'Our modern trellises serve as architectural highlights and functional privacy screens. Using precisely spaced cedar slats, we create patterns that filter light beautifully while providing the seclusion you need.',
        features: [
            { title: 'Privacy Screening', desc: 'Strategic slat spacing to block views without blocking air.' },
            { title: 'Garden Integration', desc: 'Perfect support for vertical gardens and climbing plants.' },
            { title: 'Modern Lines', desc: 'Minimalist designs that complement contemporary homes.' }
        ]
    },
    'pool-fencing': {
        title: 'Pool Fencing',
        image: 'assets/images/Pool Fence.jfif',
        shortDesc: 'Safety-compliant glass and metal framing for pools.',
        longDesc: 'Secure your pool area without sacrificing the view. Our pool fencing solutions include sleek glass panels and durable metal framing, all designed to meet strict safety codes while maintaining an elegant, open feel.',
        features: [
            { title: 'Safety First', desc: 'Self-closing, self-latching gates meeting all local pool codes.' },
            { title: 'Clear Views', desc: 'Tempered glass panels for an unobstructed sightline.' },
            { title: 'Corrosion Resistant', desc: 'Materials designed to withstand chlorine and saltwater.' }
        ]
    },
    'deck-staining': {
        title: 'Deck Staining',
        image: 'assets/images/deck_staining.jpg',
        shortDesc: 'Professional staining and sealing for long-term protection.',
        longDesc: 'Protect your investment with our professional staining and sealing services. We use high-penetration oils and UV-resistant finishes that nourish the wood and prevent the graying and cracking caused by sun and moisture.',
        features: [
            { title: 'Deep Penetration', desc: 'Oils that soak into the wood fibers for lasting protection.' },
            { title: 'UV Protection', desc: 'Prevents the sun from bleaching and breaking down the wood.' },
            { title: 'Rich Color', desc: 'Enhances the natural beauty and grain of your timber.' }
        ]
    },
    'site-clearing': {
        title: 'Site Clearing',
        image: 'assets/images/Site_clearing.jpg',
        shortDesc: 'Old structure demolition and environmentally safe hauling.',
        longDesc: 'The first step to a great build is a clean site. We handle the demolition of old fences and decks, site leveling, and environmentally responsible disposal of all debris, leaving you with a perfect canvas for your new structure.',
        features: [
            { title: 'Safe Demolition', desc: 'Careful removal of structures without damaging landscaping.' },
            { title: 'Responsible Disposal', desc: 'Recycling and hauling materials to proper facilities.' },
            { title: 'Level Foundation', desc: 'Prepping the ground for a perfectly stable new build.' }
        ]
    },
    'security-perimeter': {
        title: 'Security Perimeter',
        image: 'assets/images/security_perimiter.jfif',
        shortDesc: 'Industrial-grade fencing for commercial security needs.',
        longDesc: 'Protect your assets with our industrial-grade security fencing. Designed for commercial and perimeter security, these systems prioritize strength and deterrence while maintaining a professional appearance.',
        features: [
            { title: 'Anti-Climb Design', desc: 'Configurations that discourage unauthorized entry.' },
            { title: 'Heavy Duty', desc: 'Reinforced materials that resist tampering and impact.' },
            { title: 'Perimeter Access', desc: 'Integration with secure gate systems and monitoring.' }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SERVICES_DATA;
}
