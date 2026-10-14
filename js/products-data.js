// ==========================================================================
// LUMIÈRE CRÈME - LUXURY SKINCARE PRODUCTS DATASET
// ==========================================================================

const PRODUCTS_DATA = [
  {
    id: "lumiere-velvet-creme",
    name: "Crème Veloutée Intense",
    subtitle: "Ultra-Rich Barrier Restorative Face Cream",
    category: "face-creams",
    categoryName: "Face Creams",
    skinType: ["dry", "sensitive", "mature"],
    skinTypeName: "Dry, Sensitive & Mature",
    price: 88.00,
    originalPrice: 110.00,
    rating: 4.9,
    reviewsCount: 328,
    badge: "Award Winner",
    isBestseller: true,
    isNew: false,
    size: "50ml / 1.7 fl. oz.",
    texture: "Whipped Velvet Soufflé",
    scent: "Subtle Damask Rose & White Tea (Natural)",
    shortDesc: "A deeply nourishing, cloud-soft barrier cream formulated with 5 biomimetic ceramides, multi-weight hyaluronic acid, and alpine edelweiss extract to seal in 72-hour moisture.",
    description: "Indulge your skin in the pinnacle of French botanical luxury. Crème Veloutée Intense acts as a second-skin lipid shield, replenishing depleted barrier functions while melting effortlessly into the epidermis without a trace of greasy residue. Infused with wild-harvested Swiss Alpine Edelweiss, this antioxidant powerhouse shields against urban pollutants and micro-stressors, restoring plump, supple luminosity.",
    keyBenefits: [
      "Clinically proven 72-hour continuous hydration lock",
      "Restores compromised moisture barrier in just 3 days",
      "Noticeably firms and plumps fine expression lines",
      "Soothes redness and environmental sensitivity instantly",
      "Silky matte-glow finish ideal under makeup or bare skin"
    ],
    heroIngredients: [
      { name: "5 Biomimetic Ceramides (EOP, NS, NP, AS, AP)", benefit: "Identical to skin's natural lipids to fortify the moisture barrier." },
      { name: "Alpine Edelweiss Stem Cells", benefit: "Twice the antioxidant power of Vitamin C to shield against free radicals." },
      { name: "Triple Molecular Hyaluronic Complex", benefit: "Penetrates deep into the dermis for multi-layer hydration." },
      { name: "Organic Cold-Pressed Camellia Oil", benefit: "Rich in Oleic acid and Omegas 3 & 6 for velvety suppleness." }
    ],
    howToUse: "Warm a pea-sized amount between clean fingertips to activate the lipid emulsion. Gently press and sweep upward across the cleansed face, neck, and décolletage every morning and evening. For elevated radiance, pair with our Éclat Rosée Elixir.",
    fullIngredients: "Aqua/Water/Eau, Caprylic/Capric Triglyceride, Butyrospermum Parkii (Shea) Butter, Camellia Japonica Seed Oil, Glycerin, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Leontopodium Alpinum (Edelweiss) Flower/Leaf Extract, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Niacinamide, Squalane, Tocopherol (Vitamin E), Rosa Damascena Flower Water, Panthenol, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608248597359-009d7367c336?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512290903048-791e8f81711d?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "nuit-regenerante-balm",
    name: "Baume Nuit Régénérante",
    subtitle: "Overnight Peptide & Bakuchiol Cell-Renewing Balm",
    category: "night-creams",
    categoryName: "Night Creams",
    skinType: ["mature", "combo", "dry"],
    skinTypeName: "Mature, Normal & Combination",
    price: 96.00,
    originalPrice: 120.00,
    rating: 5.0,
    reviewsCount: 245,
    badge: "Cult Favorite",
    isBestseller: true,
    isNew: false,
    size: "50ml / 1.7 fl. oz.",
    texture: "Silken Melting Night Balm",
    scent: "Calming French Lavender & Madagascan Vanilla",
    shortDesc: "Wake up to transformed, baby-smooth skin. A rejuvenating nighttime treatment powered by 2% natural Bakuchiol, Copper Tripeptides, and Evening Primrose Oil.",
    description: "While you sleep, your skin enters its peak regenerative cycle. Baume Nuit Régénérante works synchronously with circadian repair mechanisms. Formulated with 2% Bakuchiol—nature's gentle, photostable alternative to Retinol—it accelerates cellular turnover without dryness or flaking, while bio-fermented Copper Tripeptides stimulate collagen synthesis.",
    keyBenefits: [
      "Visible reduction in wrinkle depth and fine lines in 14 nights",
      "Gentle alternative to retinol; zero peeling or irritation",
      "Deep cellular renewal and morning bounce",
      "Restores even tone and fades age-related hyperpigmentation",
      "Deeply calming aroma enhances restful sleep"
    ],
    heroIngredients: [
      { name: "2% Phyto-Bakuchiol", benefit: "Boosts cellular renewal and collagen production without retinol sensitivity." },
      { name: "Copper Tripeptide-1", benefit: "Promotes skin firmness, elasticity, and micro-damage repair." },
      { name: "Organic Evening Primrose Oil", benefit: "High in GLA fatty acids to soothe stressed skin overnight." },
      { name: "Bio-Fermented Resveratrol", benefit: "Neutralizes oxidative damage accumulated during daytime." }
    ],
    howToUse: "As the final ritual of your evening routine, scoop a generous pearl of balm with the golden spatula. Massage in slow, circular motions over face and neck, focusing on tension points along the jawline.",
    fullIngredients: "Caprylic/Capric Triglyceride, Theobroma Cacao (Cocoa) Seed Butter, Oenothera Biennis (Evening Primrose) Oil, Bakuchiol, Copper Tripeptide-1, Resveratrol Ferment Extract, Lavandula Angustifolia (Lavender) Oil, Squalane, Tocopheryl Acetate, Bisabolol, Helianthus Annuus Seed Oil.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608248597359-009d7367c336?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "eclat-gel-hydratant",
    name: "Gelée D'Or Éclat Hydratant",
    subtitle: "24H Quenching Dewdrop Gel-Cream",
    category: "face-creams",
    categoryName: "Face Creams",
    skinType: ["oily", "combo", "sensitive"],
    skinTypeName: "Oily, Combination & Sensitive",
    price: 74.00,
    originalPrice: 85.00,
    rating: 4.8,
    reviewsCount: 189,
    badge: "Trending",
    isBestseller: false,
    isNew: true,
    size: "60ml / 2.0 fl. oz.",
    texture: "Cooling Water-Burst Gel",
    scent: "Crisp Green Tea & Cucumber Hydrosol",
    shortDesc: "A featherlight, oil-free gel cream that bursts into refreshing hydration upon contact. Balances sebum, tightens pores, and leaves a glass-skin dewy finish.",
    description: "Designed specifically for warm climates, combination skin, or anyone seeking weightless hydration. Gelée D'Or Éclat is formulated with pristine Glacier Water from Mont Blanc, fermented Japanese Green Tea, and 5% Niacinamide to clarify congested pores while flooding parched skin cells with essential moisture.",
    keyBenefits: [
      "Instant cooling effect that lowers skin surface temperature by 2.5°C",
      "100% oil-free, non-comedogenic hydration that will not clog pores",
      "Balances excess shine while boosting inner radiance",
      "Refines enlarged pores and creates a smooth canvas for makeup"
    ],
    heroIngredients: [
      { name: "5% Niacinamide (Vitamin B3)", benefit: "Controls sebum production and unifies uneven skin tone." },
      { name: "Mont Blanc Glacier Mineral Water", benefit: "Rich in trace minerals (Zinc, Calcium) to strengthen skin resistance." },
      { name: "Fermented Green Tea Filtrate", benefit: "Potent EGCG polyphenols soothe inflammation and breakouts." },
      { name: "Polyglutamic Acid", benefit: "Holds 4x more water than hyaluronic acid for bouncy radiance." }
    ],
    howToUse: "Smooth over clean skin morning and night. For an ultra-cooling depuffing treatment, store your jar in the skincare fridge before application.",
    fullIngredients: "Aqua/Water (Mont Blanc Glacier Water), Butylene Glycol, Niacinamide, Glycerin, Camellia Sinensis (Green Tea) Leaf Extract, Polyglutamic Acid, Betaine, Allantoin, Carbomer, Sodium Hydroxide, 1,2-Hexanediol, Hydroxyacetophenone.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608248597359-009d7367c336?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "regard-divin-eye-cream",
    name: "Crème Regard Divin",
    subtitle: "Triple Caffeine & Diamond Peptide Eye Contour Cream",
    category: "eye-creams",
    categoryName: "Eye Creams",
    skinType: ["all", "mature", "sensitive"],
    skinTypeName: "All Skin Types & Delicate Eyes",
    price: 78.00,
    originalPrice: 92.00,
    rating: 4.9,
    reviewsCount: 412,
    badge: "Editor's Pick",
    isBestseller: true,
    isNew: false,
    size: "15ml / 0.5 fl. oz.",
    texture: "Silky Cushioning Cream",
    scent: "100% Fragrance-Free (Ophthalmologist Tested)",
    shortDesc: "A targeted lifting eye cream that visibly diminishes dark circles, reduces morning puffiness, and smooths crow's feet with diamond-encapsulated peptides.",
    description: "The delicate skin around the orbital eye area is 10 times thinner than the rest of the face. Crème Regard Divin delivers surgical-grade botanical precision without irritation. Combining Green Coffee Bean extract, micronized diamond peptides, and marine glycogen, it brightens vascular dark circles and lifts sagging upper eyelid contours.",
    keyBenefits: [
      "87% reported visible lightening of dark circles in 10 days",
      "Instantly drains fluid retention to deflate puffy eye bags",
      "Smooths crepey skin and relaxes micro-tension lines",
      "Ophthalmologist tested; completely safe for contact lens wearers"
    ],
    heroIngredients: [
      { name: "Encapsulated Green Coffee Bean Extract", benefit: "Boosts microcirculation to banish stubborn dark circles." },
      { name: "Diamond Acetyl Sh-Pentapeptide", benefit: "Illuminates eye contour and stimulates elastin synthesis." },
      { name: "Marine Glycogen Complex", benefit: "Energizes tired cellular metabolism for visible lifting." },
      { name: "Centella Asiatica (Cica)", benefit: "Calms inflammation and strengthens fragile capillaries." }
    ],
    howToUse: "Using your ring finger, gently pat half a pump along the orbital bone from the inner corner outward toward the temples. Never pull or rub the sensitive skin.",
    fullIngredients: "Aqua, Squalane, Caffeine, Coffea Arabica (Coffee) Seed Extract, Acetyl Sh-Pentapeptide-35, Diamond Powder, Centella Asiatica Extract, Sodium Hyaluronate, Glycogen, Polyglyceryl-3 Polyricinoleate, Propanediol, Caprylyl Glycol.",
    images: [
      "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "serum-botanique-lumineux",
    name: "Sérum Botanique Lumineux",
    subtitle: "15% Pure Vitamin C & Ferulic Bio-Active Serum",
    category: "serums",
    categoryName: "Serums & Elixirs",
    skinType: ["all", "dull", "combo"],
    skinTypeName: "Dull, Hyperpigmented & Uneven",
    price: 92.00,
    originalPrice: 115.00,
    rating: 4.9,
    reviewsCount: 380,
    badge: "Bestseller",
    isBestseller: true,
    isNew: false,
    size: "30ml / 1.0 fl. oz.",
    texture: "Golden Liquid Silk",
    scent: "Zesty Blood Orange & Neroli Blossom",
    shortDesc: "A golden elixir that fades stubborn sun spots, defends against free radical damage, and bestows an unmatched lit-from-within glow.",
    description: "Formulated at the gold-standard pH of 3.2 for optimal cutaneous bioavailability, Sérum Botanique Lumineux stabilizes 15% pure L-Ascorbic Acid with natural Ferulic Acid and Kakadu Plum—the world's richest known source of Vitamin C. It sweeps away dullness, clarifies dark spots, and shields skin against UV-induced premature aging.",
    keyBenefits: [
      "Fades dark spots, sun damage, and acne marks by 42% in 4 weeks",
      "Shields skin against atmospheric pollution and UV damage",
      "Stimulates natural collagen production for bouncy firmness",
      "Imparts an instant glass-skin radiance from the first drop"
    ],
    heroIngredients: [
      { name: "15% Pure L-Ascorbic Acid", benefit: "The most potent, gold-standard form of Vitamin C." },
      { name: "0.5% Ferulic Acid", benefit: "Plant-derived antioxidant that doubles Vitamin C potency and stability." },
      { name: "Wild Australian Kakadu Plum", benefit: "Contains 100x more Vitamin C than oranges for illuminated glow." },
      { name: "Pure Hyaluronic Acid", benefit: "Hydrates and cushions while actives absorb." }
    ],
    howToUse: "In the morning, apply 4-5 drops onto cleansed, dry face, neck, and chest before applying your Crème Veloutée Intense and sunscreen.",
    fullIngredients: "Aqua/Water, Ascorbic Acid, Ethoxydiglycol, Ferulic Acid, Terminalia Ferdinandiana (Kakadu Plum) Fruit Extract, Citrus Aurantium Dulcis (Orange) Flower Oil, Sodium Hyaluronate, Panthenol, Glycerin, Triethanolamine.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608248597359-009d7367c336?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "creme-purifiante-clarifiante",
    name: "Crème Purifiante Botanique",
    subtitle: "Probiotic Salicylic & Blue Tansy Clarifying Cream",
    category: "face-creams",
    categoryName: "Face Creams",
    skinType: ["oily", "acne-prone", "combo"],
    skinTypeName: "Oily, Acne-Prone & Blemish-Prone",
    price: 68.00,
    originalPrice: 80.00,
    rating: 4.7,
    reviewsCount: 164,
    badge: "Clean Formula",
    isBestseller: false,
    isNew: true,
    size: "50ml / 1.7 fl. oz.",
    texture: "Silky Velvet Mattifying Emulsion",
    scent: "Soothing Moroccan Blue Tansy & Rosemary",
    shortDesc: "Clears blemishes, balances sebum, and soothes angry redness with micro-encapsulated BHA and calming Moroccan Blue Tansy without stripping skin.",
    description: "Traditional acne treatments often compromise the skin's vital moisture barrier. Crème Purifiante Botanique takes a revolutionary biomimetic approach: gentle time-released Salicylic acid dissolves pore congestion, while bio-fermented lactobacillus strengthens the protective acid mantle, eliminating future breakouts.",
    keyBenefits: [
      "Clears blemishes and reduces redness within 24 hours",
      "Regulates excess sebum without stripping moisture",
      "Fortifies the skin microbiome to prevent bacterial breakouts",
      "Smooths bumpy skin texture and fades post-blemish red marks"
    ],
    heroIngredients: [
      { name: "1.5% Encapsulated Salicylic Acid (BHA)", benefit: "Penetrates deep into pores to dissolve sebum and dead skin cells." },
      { name: "Moroccan Blue Tansy Essential Oil", benefit: "Rich in Chamazulene to powerfully calm angry redness and inflammation." },
      { name: "Lactobacillus Ferment Lysate", benefit: "Probiotic active that supports healthy skin flora and resistance." },
      { name: "Zinc PCA", benefit: "Regulates sebum flow and minimizes enlarged pores." }
    ],
    howToUse: "Apply morning and evening after cleansing with gentle upward strokes. Ideal for breakout-prone zones or as an all-over balancing daily cream.",
    fullIngredients: "Aqua, Hamamelis Virginiana (Witch Hazel) Water, Salicylic Acid, Tanacetum Annuum (Blue Tansy) Flower Oil, Lactobacillus Ferment, Zinc PCA, Squalane, Cetearyl Olivate, Sorbitan Olivate, Allantoin, Melaleuca Alternifolia Leaf Oil.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "baume-corps-nourrissant",
    name: "Baume Corps Sublime Velours",
    subtitle: "Rich Shea & Monoi Botanical Body Sculpting Cream",
    category: "body-creams",
    categoryName: "Body Creams",
    skinType: ["all", "dry"],
    skinTypeName: "All Body Skin & Extremely Dry",
    price: 64.00,
    originalPrice: 75.00,
    rating: 4.9,
    reviewsCount: 215,
    badge: "Body Luxury",
    isBestseller: false,
    isNew: false,
    size: "200ml / 6.7 fl. oz.",
    texture: "Decadent Whipped Butter Balm",
    scent: "Tahitian Monoi Blossom, Amber & Coconut Milk",
    shortDesc: "A decadently rich whipped body butter that melts into thirsty skin, infusing it with raw African Shea butter, Polynesian Monoi, and botanical squalane.",
    description: "Transform your daily body care into a spa sanctuary. Baume Corps Sublime Velours wraps limbs in a heavenly veil of hydration. Clinically proven to soften rough elbows, heels, and knees while restoring suppleness to skin that has lost elasticity.",
    keyBenefits: [
      "48-hour continuous body hydration with zero stickiness",
      "Deeply nourishes dry, flaky elbows, knees, and shins",
      "Improves skin tone and elasticity across the décolletage and limbs",
      "Exquisite tropical floral scent lingers delicately all day"
    ],
    heroIngredients: [
      { name: "Raw Unrefined Shea Butter", benefit: "Rich in vitamins A, E, and F to heal and regenerate dry skin." },
      { name: "Tahitian Tiare Flower (Monoi)", benefit: "Infuses skin with celestial softness and intoxicating scent." },
      { name: "Olive-Derived Squalane", benefit: "Mimics natural body sebum to lock in moisture effortlessly." }
    ],
    howToUse: "Warm between palms and massage liberally into damp skin immediately following a bath or shower.",
    fullIngredients: "Butyrospermum Parkii Butter, Cocos Nucifera Oil, Gardenia Taitensis Flower Extract, Squalane, Simmondsia Chinensis Seed Oil, Theobroma Grandiflorum Seed Butter, Tocopherol, Parfum.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608248597359-009d7367c336?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "masque-creme-resurfacant",
    name: "Masque Crème Resurfaçant",
    subtitle: "AHA/BHA Fruit Enzymes Radiance Flash Cream Mask",
    category: "face-creams",
    categoryName: "Treatment Creams",
    skinType: ["dull", "combo", "mature"],
    skinTypeName: "Dull, Congested & Uneven Texture",
    price: 82.00,
    originalPrice: 95.00,
    rating: 4.8,
    reviewsCount: 153,
    badge: "10-Min Flash Glow",
    isBestseller: false,
    isNew: true,
    size: "75ml / 2.5 fl. oz.",
    texture: "Creamy Marshmallow Texture",
    scent: "Subtle Pomegranate & Wild Strawberry",
    shortDesc: "A transformative 10-minute facial in a jar. Gently dissolves dead surface cells with gentle Papaya enzymes and Glycolic acid for porcelain smoothness.",
    description: "Experience the results of a Parisian clinic facial in the comfort of your boudoir. Masque Crème Resurfaçant pairs dual chemical exfoliation with comforting marshmallow root extract so your skin is renewed without any redness or stinging.",
    keyBenefits: [
      "Instant luminous glow in just 10 minutes",
      "Refines uneven texture and smooths dry patches",
      "Visibly shrinks the appearance of enlarged pores",
      "Boosts absorption rate of serums and moisturizers"
    ],
    heroIngredients: [
      { name: "7% Glycolic & Lactic Acid Complex", benefit: "Sloughs away dull surface cells to reveal fresh baby skin." },
      { name: "Papaya & Pomegranate Enzymes", benefit: "Naturally digest keratin buildup without physical abrasives." },
      { name: "Organic Marshmallow Root Extract", benefit: "Coats skin in a soothing mucilage to prevent irritation." }
    ],
    howToUse: "Apply an even layer to clean, dry skin. Leave on for 10-15 minutes. Rinse thoroughly with warm water. Use 1-2 times weekly.",
    fullIngredients: "Aqua, Glycolic Acid, Lactic Acid, Carica Papaya Fruit Extract, Punica Granatum Extract, Althaea Officinalis (Marshmallow) Root Extract, Kaolin, Glycerin, Sodium Hydroxide, Sorbic Acid.",
    images: [
      "https://images.unsplash.com/photo-1608248597359-009d7367c336?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
    ]
  }
];

// Skin Routines Data for Quiz / Routine Builder
const SKIN_ROUTINES_DATA = {
  "dry-dehydrated": {
    name: "The Intensive Barrier Nourishment Ritual",
    description: "A decadent 3-step lipid-restoring system engineered for dehydrated, tight, or flaky skin in need of immediate comfort.",
    discountPercent: 15,
    bundlePrice: 198.00,
    originalBundlePrice: 242.00,
    products: ["serum-botanique-lumineux", "lumiere-velvet-creme", "regard-divin-eye-cream"],
    stepNotes: [
      "Morning & Evening: Flood skin with hyaluronic hydration",
      "Lock in deep moisture with 5 biomimetic ceramides",
      "Nourish delicate eye contours with diamond peptides"
    ]
  },
  "aging-firmness": {
    name: "The Cellular Ageless Radiance Protocol",
    description: "Target fine lines, loss of collagen, and dullness with clinical peptides and bio-bakuchiol.",
    discountPercent: 15,
    bundlePrice: 215.00,
    originalBundlePrice: 254.00,
    products: ["serum-botanique-lumineux", "nuit-regenerante-balm", "regard-divin-eye-cream"],
    stepNotes: [
      "Defend against free radicals with 15% Vitamin C",
      "Stimulate overnight cell renewal with Phyto-Bakuchiol",
      "Lift and firm the orbital eye contour"
    ]
  },
  "oily-blemish": {
    name: "The Pure Balance & Pore Refining Regimen",
    description: "Weightless, non-comedogenic balancing care that calms inflammation and hydrates without shine.",
    discountPercent: 15,
    bundlePrice: 168.00,
    originalBundlePrice: 204.00,
    products: ["eclat-gel-hydratant", "creme-purifiante-clarifiante", "masque-creme-resurfacant"],
    stepNotes: [
      "Morning: 24-hour oil-free waterburst hydration",
      "Night: Probiotic BHA & Blue Tansy blemish control",
      "Twice weekly: 10-minute enzyme radiance flash treatment"
    ]
  },
  "sensitive-redness": {
    name: "The Calming Recovery & Cica Barrier Cure",
    description: "Zero fragrance, hypoallergenic formulas that cool irritation and repair damaged skin barriers.",
    discountPercent: 15,
    bundlePrice: 185.00,
    originalBundlePrice: 226.00,
    products: ["lumiere-velvet-creme", "regard-divin-eye-cream", "eclat-gel-hydratant"],
    stepNotes: [
      "Soothe surface heat with glacier mineral gel",
      "Shield sensitized barrier with velvet edelweiss cream",
      "Comfort eye micro-capillaries with fragrance-free cica"
    ]
  }
};

// Customer Reviews dataset
const REVIEWS_DATA = [
  {
    author: "Geneviève de Saint-Germain",
    location: "Paris, France",
    rating: 5,
    date: "October 8, 2026",
    product: "Crème Veloutée Intense",
    title: "My holy grail moisturizer forever",
    content: "After moving between chilly mountain air and heated apartments, my skin barrier was completely broken. Within 48 hours of using Crème Veloutée Intense, all flakiness and tightness vanished. The texture is pure whipped decadence. Worth every single cent.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    author: "Elena Rostova",
    location: "New York, USA",
    rating: 5,
    date: "September 24, 2026",
    product: "Baume Nuit Régénérante",
    title: "Retinol results without any irritation!",
    content: "I have ultra-sensitive rosacea-prone skin that cannot tolerate standard retinol. This Bakuchiol balm is a miracle. I wake up with the plumpest, most radiant skin of my life. My forehead lines look visibly softened after 3 weeks.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    author: "Amina Al-Mansoor",
    location: "Dubai, UAE",
    rating: 5,
    date: "October 1, 2026",
    product: "Gelée D'Or Éclat Hydratant",
    title: "Perfection in high humidity",
    content: "Finding a cream that hydrates without leaving grease in 38°C weather was impossible until Gelée D'Or. It sinks in like cool silk and leaves the most ethereal glow under my SPF. Truly exceptional.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    author: "Sophia Sterling",
    location: "London, UK",
    rating: 5,
    date: "September 15, 2026",
    product: "Crème Regard Divin",
    title: "Erased my perpetual dark circles",
    content: "As an executive working 60-hour weeks, my eye bags were notorious. The green coffee and diamond peptides in Regard Divin have noticeably lightened my under-eye darkness and lifted my eyes. Even my concealer applies flawlessly now.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    verified: true
  }
];
