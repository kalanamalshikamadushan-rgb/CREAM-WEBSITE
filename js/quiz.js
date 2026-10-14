// ==========================================================================
// LUMIÈRE CRÈME - INTERACTIVE SKIN DIAGNOSTIC & ROUTINE FINDER
// ==========================================================================

const QUIZ_QUESTIONS = [
  {
    id: "concern",
    title: "What is your primary skin goal or challenge?",
    subtitle: "Select the condition you would most like our botanical formulations to target.",
    options: [
      { label: "Dryness, Dehydration & Flaky Skin", desc: "Craving intense lipid restoration and deep cushiony moisture.", key: "dry-dehydrated", icon: "💧" },
      { label: "Fine Lines, Firmness & Radiance", desc: "Seeking cellular renewal, peptide lifting, and youthful plumpness.", key: "aging-firmness", icon: "✨" },
      { label: "Excess Sebum, Blemishes & Pores", desc: "Desiring weightless oil-balancing, clarity, and pore refinement.", key: "oily-blemish", icon: "🌿" },
      { label: "Redness, Irritation & Reactivity", desc: "Needs gentle cica barrier defense and zero fragrance soothing.", key: "sensitive-redness", icon: "🌸" }
    ]
  },
  {
    id: "feel",
    title: "How does your skin feel mid-day without makeup?",
    subtitle: "This reveals your natural sebum output and protective acid mantle state.",
    options: [
      { label: "Tight, dry, or shows fine dehydration lines", desc: "Needs ceramide fortification and moisture trapping.", weight: "dry-dehydrated", icon: "🍂" },
      { label: "Lacking firmness or looks somewhat tired and dull", desc: "Needs antioxidant infusion and cellular bio-actives.", weight: "aging-firmness", icon: "⏳" },
      { label: "Greasy around forehead and nose with enlarged pores", desc: "Needs non-comedogenic water burst hydration.", weight: "oily-blemish", icon: "🍃" },
      { label: "Stinging, flushed, or sensitive to temperature changes", desc: "Needs gentle microbiome restoration and calming balms.", weight: "sensitive-redness", icon: "☁️" }
    ]
  },
  {
    id: "texture",
    title: "Which cream texture indulges your senses most?",
    subtitle: "Every Lumière emulsion is crafted to deliver a unique tactile experience.",
    options: [
      { label: "Whipped Velvet Soufflé", desc: "Ultra-rich, buttery cushion that melts into pure softness.", weight: "dry-dehydrated", icon: "🏺" },
      { label: "Silken Overnight Melting Balm", desc: "Concentrated lipid nectar that renews while you sleep.", weight: "aging-firmness", icon: "🌙" },
      { label: "Cooling Water-Burst Gelée", desc: "Featherweight splash of glacier hydration with zero weight.", weight: "oily-blemish", icon: "💧" },
      { label: "Hypoallergenic Comfort Emulsion", desc: "Ultra-clean soothing lotion with protective plant lipids.", weight: "sensitive-redness", icon: "🕊️" }
    ]
  }
];

let currentQuizStep = 0;
let userAnswers = {};

function initSkinQuiz() {
  const container = document.getElementById('skin-quiz-wrapper');
  if (!container) return;

  renderQuizStep();
}

function renderQuizStep() {
  const container = document.getElementById('skin-quiz-wrapper');
  if (!container) return;

  const q = QUIZ_QUESTIONS[currentQuizStep];
  const progressPct = ((currentQuizStep + 1) / QUIZ_QUESTIONS.length) * 100;

  container.innerHTML = `
    <div class="quiz-card-box">
      <div class="quiz-header">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progressPct}%"></div>
        </div>
        <span class="quiz-step-label">Step ${currentQuizStep + 1} of ${QUIZ_QUESTIONS.length}</span>
        <h2 class="quiz-question-title">${q.title}</h2>
        <p class="quiz-question-sub">${q.subtitle}</p>
      </div>

      <div class="quiz-options-grid">
        ${q.options.map((opt, idx) => `
          <button class="quiz-option-btn" onclick="selectQuizAnswer('${q.id}', '${opt.key || opt.weight}')">
            <span class="quiz-opt-icon">${opt.icon}</span>
            <div class="quiz-opt-text">
              <strong class="quiz-opt-title">${opt.label}</strong>
              <span class="quiz-opt-desc">${opt.desc}</span>
            </div>
          </button>
        `).join('')}
      </div>

      <div class="quiz-footer-nav">
        ${currentQuizStep > 0 ? `
          <button class="btn btn-secondary-outline" onclick="prevQuizStep()">
            &larr; Back
          </button>
        ` : '<div></div>'}
        <span class="quiz-disclaimer">✨ Formulated with Dermatologist Precision</span>
      </div>
    </div>
  `;
}

function selectQuizAnswer(questionId, value) {
  userAnswers[questionId] = value;
  
  if (currentQuizStep < QUIZ_QUESTIONS.length - 1) {
    currentQuizStep++;
    renderQuizStep();
  } else {
    renderQuizResults();
  }
}

function prevQuizStep() {
  if (currentQuizStep > 0) {
    currentQuizStep--;
    renderQuizStep();
  }
}

function restartQuiz() {
  currentQuizStep = 0;
  userAnswers = {};
  renderQuizStep();
}

function renderQuizResults() {
  const container = document.getElementById('skin-quiz-wrapper');
  if (!container) return;

  // Determine key
  const routineKey = userAnswers['concern'] || 'dry-dehydrated';
  const routine = SKIN_ROUTINES_DATA[routineKey] || SKIN_ROUTINES_DATA['dry-dehydrated'];
  const matchedProducts = routine.products.map(id => PRODUCTS_DATA.find(p => p.id === id)).filter(Boolean);

  container.innerHTML = `
    <div class="quiz-result-box">
      <div class="result-badge">Your Personalized Prescription</div>
      <h2 class="result-title">${routine.name}</h2>
      <p class="result-desc">${routine.description}</p>

      <div class="result-products-grid">
        ${matchedProducts.map((p, idx) => `
          <div class="result-product-card">
            <span class="step-num">Step 0${idx + 1}</span>
            <div class="result-prod-img">
              <img src="${p.images[0]}" alt="${p.name}">
            </div>
            <h4 class="result-prod-name">${p.name}</h4>
            <span class="result-prod-sub">${p.subtitle}</span>
            <span class="result-prod-price">$${p.price.toFixed(2)}</span>
            <div class="result-step-note">${routine.stepNotes[idx] || ''}</div>
          </div>
        `).join('')}
      </div>

      <div class="result-bundle-checkout">
        <div class="bundle-pricing-info">
          <span class="bundle-discount-tag">Save 15% Complete Ritual Discount</span>
          <div class="bundle-prices">
            <span class="original-bundle-price">$${routine.originalBundlePrice.toFixed(2)}</span>
            <span class="bundle-final-price">$${routine.bundlePrice.toFixed(2)}</span>
          </div>
          <span class="free-ship-note">Includes Complimentary White Glove Express Shipping</span>
        </div>

        <div class="bundle-actions">
          <button class="btn btn-luxury-primary lg" onclick="addBundleToCart(${JSON.stringify(routine.products)})">
            Add Entire 3-Step Ritual to Bag • $${routine.bundlePrice.toFixed(2)}
          </button>
          <button class="btn btn-secondary-outline" onclick="restartQuiz()">
            Retake Diagnostic Quiz
          </button>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', initSkinQuiz);
