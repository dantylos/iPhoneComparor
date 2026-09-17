/**
 * iPhone Upgrade Selection - Ultra-Lightweight Vanilla ES6+ State & UI Controller
 */

// =============================================================================
// 1. Data Store: Models, Authentic Colors, and Capacities
// =============================================================================

export const OLD_IPHONE_MODELS = [
  {
    id: 'iphone-11',
    name: 'iPhone 11',
    tagline: 'Dual-camera system with A13 Bionic',
    startingPrice: '$249',
    cameraType: 'dual-vertical',
    islandType: 'notch',
    storageOptions: ['64 GB', '128 GB', '256 GB'],
    colors: [
      { name: 'Black', hex: '#1F2022' },
      { name: 'Purple', hex: '#D1CDDA' },
      { name: 'Green', hex: '#AEE1CD' },
      { name: 'White', hex: '#F9F6EF' },
      { name: '(PRODUCT)RED', hex: '#BA0C2E' }
    ]
  },
  {
    id: 'iphone-12',
    name: 'iPhone 12',
    tagline: 'Ceramic Shield, 5G & A14 Bionic',
    startingPrice: '$319',
    cameraType: 'dual-vertical',
    islandType: 'notch',
    storageOptions: ['64 GB', '128 GB', '256 GB'],
    colors: [
      { name: 'Black', hex: '#1F2022' },
      { name: 'White', hex: '#FBF7F4' },
      { name: 'Blue', hex: '#2D4B5E' },
      { name: 'Green', hex: '#DBEADA' },
      { name: 'Purple', hex: '#BDB7DE' }
    ]
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    tagline: 'Cinematic mode with A15 Bionic',
    startingPrice: '$429',
    cameraType: 'dual-diagonal',
    islandType: 'notch',
    storageOptions: ['128 GB', '256 GB', '512 GB'],
    colors: [
      { name: 'Midnight', hex: '#222930' },
      { name: 'Starlight', hex: '#F9F6EF' },
      { name: 'Blue', hex: '#276787' },
      { name: 'Pink', hex: '#FADDD7' },
      { name: 'Green', hex: '#394C38' }
    ]
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    tagline: 'Photonic Engine & Crash Detection',
    startingPrice: '$499',
    cameraType: 'dual-diagonal',
    islandType: 'notch',
    storageOptions: ['128 GB', '256 GB', '512 GB'],
    colors: [
      { name: 'Midnight', hex: '#222930' },
      { name: 'Starlight', hex: '#FAF6F2' },
      { name: 'Blue', hex: '#A0B4C8' },
      { name: 'Purple', hex: '#E5DDEA' },
      { name: 'Yellow', hex: '#F9E479' }
    ]
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    tagline: 'Dynamic Island, USB-C & 48MP',
    startingPrice: '$599',
    cameraType: 'dual-diagonal',
    islandType: 'island',
    storageOptions: ['128 GB', '256 GB', '512 GB'],
    colors: [
      { name: 'Black', hex: '#35393B' },
      { name: 'Blue', hex: '#D3DCE0' },
      { name: 'Green', hex: '#D2E0D4' },
      { name: 'Pink', hex: '#EAD4D7' },
      { name: 'Yellow', hex: '#F1EDD4' }
    ]
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    tagline: 'Apple Intelligence & Camera Control',
    startingPrice: '$699',
    cameraType: 'dual-pill',
    islandType: 'island',
    storageOptions: ['128 GB', '256 GB', '512 GB'],
    colors: [
      { name: 'Ultramarine', hex: '#445E8E' },
      { name: 'Teal', hex: '#7C9D96' },
      { name: 'Pink', hex: '#E1A2B2' },
      { name: 'White', hex: '#F3F4F5' },
      { name: 'Black', hex: '#38393B' }
    ]
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    tagline: 'Expansive 6.7" display with A18',
    startingPrice: '$799',
    cameraType: 'dual-pill',
    islandType: 'island',
    storageOptions: ['128 GB', '256 GB', '512 GB'],
    colors: [
      { name: 'Ultramarine', hex: '#445E8E' },
      { name: 'Teal', hex: '#7C9D96' },
      { name: 'Pink', hex: '#E1A2B2' },
      { name: 'White', hex: '#F3F4F5' },
      { name: 'Black', hex: '#38393B' }
    ]
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    tagline: 'Grade 5 Titanium & 4K 120 fps Dolby',
    startingPrice: '$899',
    cameraType: 'triple-pro',
    islandType: 'island',
    storageOptions: ['128 GB', '256 GB', '512 GB', '1 TB'],
    colors: [
      { name: 'Desert Titanium', hex: '#C3A691' },
      { name: 'Natural Titanium', hex: '#9E988F' },
      { name: 'White Titanium', hex: '#EDECE8' },
      { name: 'Black Titanium', hex: '#3C3B37' }
    ]
  }
];

export const NEW_IPHONE_MODEL = {
  id: 'iphone-17-pro-max',
  name: 'iPhone 17 Pro Max',
  tagline: 'Next-Gen Neural Titanium Flagship',
  cameraType: 'triple-pro-advanced',
  islandType: 'island',
  storageOptions: ['256 GB', '512 GB', '1 TB', '2 TB'],
  colors: [
    { name: 'Cosmic Amber', hex: '#FF6B00' },
    { name: 'Deep Ocean', hex: '#203248' },
    { name: 'Natural Titanium', hex: '#9E988F' },
    { name: 'Space Black', hex: '#28282B' },
    { name: 'White Titanium', hex: '#EDECE8' }
  ]
};

// =============================================================================
// 2. State Management via localStorage
// =============================================================================

const STORAGE_KEY = 'iphone_upgrade_selection_state';
let memoryStore = {};

export function getUpgradeState() {
  try {
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    }
    return memoryStore;
  } catch (err) {
    console.warn('LocalStorage access issue:', err);
    return memoryStore;
  }
}

export function saveUpgradeState(partialState) {
  try {
    const current = getUpgradeState();
    const updated = { ...current, ...partialState };
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } else {
      memoryStore = updated;
    }
    return updated;
  } catch (err) {
    console.warn('LocalStorage save issue:', err);
    return partialState;
  }
}

export function clearUpgradeState() {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    memoryStore = {};
  } catch (err) {
    console.warn('LocalStorage clear issue:', err);
  }
}

// =============================================================================
// 3. Dynamic Vector Phone Renderer (SVG)
// =============================================================================

export function generatePhoneSVG(options = {}) {
  const {
    colorHex = '#222930',
    cameraType = 'dual-vertical',
    width = 160,
    height = 240,
    showCameraBump = true
  } = options;

  let cameraBumpMarkup = '';

  if (cameraType === 'dual-vertical') {
    cameraBumpMarkup = `
      <rect x="22" y="24" width="46" height="84" rx="23" fill="#111" fill-opacity="0.22" />
      <circle cx="45" cy="46" r="14" fill="#0C0D0E" stroke="#444" stroke-width="1.5" />
      <circle cx="45" cy="46" r="6" fill="#1B232E" />
      <circle cx="43" cy="44" r="2" fill="#88B8DF" opacity="0.8" />
      <circle cx="45" cy="84" r="14" fill="#0C0D0E" stroke="#444" stroke-width="1.5" />
      <circle cx="45" cy="84" r="6" fill="#1B232E" />
      <circle cx="43" cy="82" r="2" fill="#88B8DF" opacity="0.8" />
      <circle cx="56" cy="65" r="3.5" fill="#FFEAA7" opacity="0.9" />
    `;
  } else if (cameraType === 'dual-diagonal') {
    cameraBumpMarkup = `
      <rect x="20" y="22" width="56" height="56" rx="20" fill="#111" fill-opacity="0.22" />
      <circle cx="37" cy="38" r="12" fill="#0C0D0E" stroke="#444" stroke-width="1.5" />
      <circle cx="37" cy="38" r="5" fill="#1B232E" />
      <circle cx="35" cy="36" r="1.8" fill="#88B8DF" opacity="0.8" />
      <circle cx="59" cy="61" r="12" fill="#0C0D0E" stroke="#444" stroke-width="1.5" />
      <circle cx="59" cy="61" r="5" fill="#1B232E" />
      <circle cx="57" cy="59" r="1.8" fill="#88B8DF" opacity="0.8" />
      <circle cx="58" cy="36" r="3.5" fill="#FFEAA7" opacity="0.9" />
    `;
  } else if (cameraType === 'dual-pill') {
    cameraBumpMarkup = `
      <rect x="24" y="24" width="38" height="74" rx="19" fill="#111" fill-opacity="0.28" />
      <circle cx="43" cy="43" r="13" fill="#0C0D0E" stroke="#444" stroke-width="1.5" />
      <circle cx="43" cy="43" r="5.5" fill="#1B232E" />
      <circle cx="41" cy="41" r="2" fill="#88B8DF" opacity="0.8" />
      <circle cx="43" cy="78" r="13" fill="#0C0D0E" stroke="#444" stroke-width="1.5" />
      <circle cx="43" cy="78" r="5.5" fill="#1B232E" />
      <circle cx="41" cy="76" r="2" fill="#88B8DF" opacity="0.8" />
      <circle cx="68" cy="60" r="3.5" fill="#FFEAA7" opacity="0.9" />
    `;
  } else {
    // Triple Pro / Flagship
    cameraBumpMarkup = `
      <rect x="20" y="20" width="66" height="68" rx="22" fill="#111" fill-opacity="0.25" />
      <circle cx="39" cy="39" r="13" fill="#0C0D0E" stroke="#444" stroke-width="1.5" />
      <circle cx="39" cy="39" r="5.5" fill="#1B232E" />
      <circle cx="37" cy="37" r="2" fill="#88B8DF" opacity="0.8" />
      <circle cx="39" cy="69" r="13" fill="#0C0D0E" stroke="#444" stroke-width="1.5" />
      <circle cx="39" cy="69" r="5.5" fill="#1B232E" />
      <circle cx="37" cy="67" r="2" fill="#88B8DF" opacity="0.8" />
      <circle cx="67" cy="54" r="13" fill="#0C0D0E" stroke="#444" stroke-width="1.5" />
      <circle cx="67" cy="54" r="5.5" fill="#1B232E" />
      <circle cx="65" cy="52" r="2" fill="#88B8DF" opacity="0.8" />
      <circle cx="68" cy="32" r="3.5" fill="#FFEAA7" opacity="0.9" />
      <circle cx="68" cy="76" r="2.5" fill="#111" />
    `;
  }

  return `
    <svg viewBox="0 0 160 240" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="iPhone visual representation">
      <defs>
        <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorHex}" />
          <stop offset="100%" stop-color="${colorHex}" stop-opacity="0.88" />
        </linearGradient>
        <linearGradient id="edgeGleam" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.4" />
          <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.35" />
        </linearGradient>
      </defs>

      <!-- Outer Bezel / Rim -->
      <rect x="4" y="4" width="152" height="232" rx="32" fill="none" stroke="url(#edgeGleam)" stroke-width="2.5" />
      
      <!-- Back Chassis Body -->
      <rect x="6" y="6" width="148" height="228" rx="30" fill="url(#chassisGrad)" />
      
      <!-- Camera Module Area -->
      ${showCameraBump ? cameraBumpMarkup : ''}
      
      <!-- Centered Minimal Apple Silhouette -->
      <g transform="translate(73, 115) scale(0.65)" opacity="0.38" fill="#FFFFFF">
        <path d="M15.5 12.3c-.1-2.9 2.4-4.3 2.5-4.4-1.4-2-3.5-2.3-4.2-2.3-1.8-.2-3.5 1-4.4 1-.9 0-2.3-1-3.8-.9-1.9.1-3.7 1.1-4.7 2.8-2 3.5-.5 8.7 1.4 11.5 1 1.4 2.1 2.9 3.6 2.9 1.5-.1 2-.9 3.8-.9 1.7 0 2.2.9 3.7.9 1.6 0 2.6-1.4 3.5-2.8 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-3-1.2-3-4.5zM12.7 3.7c.8-1 1.3-2.3 1.2-3.7-1.1.1-2.5.7-3.3 1.7-.7.8-1.3 2.2-1.2 3.5 1.3.1 2.5-.6 3.3-1.5z"/>
      </g>
    </svg>
  `;
}

// =============================================================================
// 4. Page Initializers
// =============================================================================

/**
 * Step 1: index.html - Catalog Grid
 */
export function initCatalogPage() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  grid.innerHTML = OLD_IPHONE_MODELS.map(model => {
    const primaryColor = model.colors[0];
    const phoneSvg = generatePhoneSVG({
      colorHex: primaryColor.hex,
      cameraType: model.cameraType,
      width: 120,
      height: 180
    });

    return `
      <article class="model-card fade-in" data-id="${model.id}" tabindex="0" role="button" aria-label="Select ${model.name}">
        <span class="card-top-badge">${model.storageOptions[0]} - ${model.storageOptions[model.storageOptions.length - 1]}</span>
        <div class="card-image-wrap">
          ${phoneSvg}
        </div>
        <div class="card-info">
          <h2 class="card-model-name">${model.name}</h2>
          <p class="card-model-meta">${model.tagline}</p>
          <div class="card-price-tag">Trade-in from ${model.startingPrice}</div>
          <div class="card-select-hint">
            <span>Configure</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Event delegation for cards
  grid.addEventListener('click', e => {
    const card = e.target.closest('.model-card');
    if (!card) return;
    const modelId = card.dataset.id;
    selectOldModel(modelId);
  });

  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.model-card');
      if (card) {
        e.preventDefault();
        selectOldModel(card.dataset.id);
      }
    }
  });

  function selectOldModel(modelId) {
    const model = OLD_IPHONE_MODELS.find(m => m.id === modelId) || OLD_IPHONE_MODELS[0];
    saveUpgradeState({
      oldPhone: {
        modelId: model.id,
        name: model.name,
        colorName: null,
        colorHex: null,
        storage: null
      }
    });
    window.location.href = 'old-iphone.html';
  }
}

/**
 * Step 2: old-iphone.html - Old iPhone Configuration
 */
export function initOldIPhoneConfigPage() {
  const state = getUpgradeState();
  const modelId = state.oldPhone?.modelId || 'iphone-14';
  const model = OLD_IPHONE_MODELS.find(m => m.id === modelId) || OLD_IPHONE_MODELS[0];

  // DOM Elements
  const titleEl = document.getElementById('selected-model-title');
  const stageBadgeEl = document.getElementById('stage-badge');
  const stagePreviewEl = document.getElementById('stage-preview');
  const stageColorNameEl = document.getElementById('stage-color-name');
  const colorSwatchesEl = document.getElementById('color-swatches');
  const storageOptionsEl = document.getElementById('storage-options');
  const okBtn = document.getElementById('btn-ok-step2');
  const colorHintEl = document.getElementById('color-hint');
  const storageHintEl = document.getElementById('storage-hint');

  if (!stagePreviewEl || !colorSwatchesEl || !storageOptionsEl) return;

  // Set Title & Badge
  if (titleEl) titleEl.textContent = model.name;
  if (stageBadgeEl) stageBadgeEl.textContent = model.name;

  let selectedColor = state.oldPhone?.colorName
    ? model.colors.find(c => c.name === state.oldPhone.colorName)
    : null;
  let selectedStorage = state.oldPhone?.storage || null;

  // Render Swatches
  colorSwatchesEl.innerHTML = model.colors.map(color => `
    <button type="button" class="swatch-btn ${selectedColor?.name === color.name ? 'is-selected' : ''}" data-name="${color.name}" data-hex="${color.hex}" aria-label="Color ${color.name}">
      <span class="swatch-circle-ring" style="background-color: ${color.hex};"></span>
      <span class="swatch-name">${color.name}</span>
    </button>
  `).join('');

  // Render Storage Options
  storageOptionsEl.innerHTML = model.storageOptions.map(storage => `
    <button type="button" class="storage-chip ${selectedStorage === storage ? 'is-selected' : ''}" data-storage="${storage}">
      <span>${storage}</span>
    </button>
  `).join('');

  // Initial stage render
  updatePreview(selectedColor ? selectedColor.hex : model.colors[0].hex);
  updateStateUI();

  // Swatch Click Listener
  colorSwatchesEl.addEventListener('click', e => {
    const btn = e.target.closest('.swatch-btn');
    if (!btn) return;
    const colorName = btn.dataset.name;
    const colorHex = btn.dataset.hex;
    selectedColor = { name: colorName, hex: colorHex };

    colorSwatchesEl.querySelectorAll('.swatch-btn').forEach(el => el.classList.remove('is-selected'));
    btn.classList.add('is-selected');

    updatePreview(colorHex);
    updateStateUI();
  });

  // Storage Click Listener
  storageOptionsEl.addEventListener('click', e => {
    const chip = e.target.closest('.storage-chip');
    if (!chip) return;
    selectedStorage = chip.dataset.storage;

    storageOptionsEl.querySelectorAll('.storage-chip').forEach(el => el.classList.remove('is-selected'));
    chip.classList.add('is-selected');

    updateStateUI();
  });

  // OK Button Listener
  if (okBtn) {
    okBtn.addEventListener('click', () => {
      if (!selectedColor || !selectedStorage) return;

      saveUpgradeState({
        oldPhone: {
          modelId: model.id,
          name: model.name,
          colorName: selectedColor.name,
          colorHex: selectedColor.hex,
          storage: selectedStorage
        }
      });

      window.location.href = 'new-iphone.html';
    });
  }

  function updatePreview(hex) {
    stagePreviewEl.innerHTML = generatePhoneSVG({
      colorHex: hex,
      cameraType: model.cameraType,
      width: 170,
      height: 255
    });
    if (stageColorNameEl) {
      stageColorNameEl.textContent = selectedColor ? selectedColor.name : 'Choose a color';
    }
  }

  function updateStateUI() {
    if (colorHintEl) {
      colorHintEl.textContent = selectedColor ? `Selected: ${selectedColor.name}` : 'Select a color';
    }
    if (storageHintEl) {
      storageHintEl.textContent = selectedStorage ? `Selected: ${selectedStorage}` : 'Select storage';
    }
    if (okBtn) {
      const isReady = Boolean(selectedColor && selectedStorage);
      okBtn.disabled = !isReady;
      okBtn.setAttribute('aria-disabled', String(!isReady));
    }
  }
}

/**
 * Step 3: new-iphone.html - iPhone 17 Pro Max Configuration
 */
export function initNewIPhoneConfigPage() {
  const model = NEW_IPHONE_MODEL;
  const state = getUpgradeState();

  const stagePreviewEl = document.getElementById('new-stage-preview');
  const stageColorNameEl = document.getElementById('new-stage-color-name');
  const colorSwatchesEl = document.getElementById('new-color-swatches');
  const storageOptionsEl = document.getElementById('new-storage-options');
  const okBtn = document.getElementById('btn-ok-step3');
  const colorHintEl = document.getElementById('new-color-hint');
  const storageHintEl = document.getElementById('new-storage-hint');

  if (!stagePreviewEl || !colorSwatchesEl || !storageOptionsEl) return;

  let selectedColor = state.newPhone?.colorName
    ? model.colors.find(c => c.name === state.newPhone.colorName)
    : null;
  let selectedStorage = state.newPhone?.storage || null;

  // Render Swatches
  colorSwatchesEl.innerHTML = model.colors.map(color => `
    <button type="button" class="swatch-btn ${selectedColor?.name === color.name ? 'is-selected' : ''}" data-name="${color.name}" data-hex="${color.hex}" aria-label="Color ${color.name}">
      <span class="swatch-circle-ring" style="background-color: ${color.hex};"></span>
      <span class="swatch-name">${color.name}</span>
    </button>
  `).join('');

  // Render Storage Options
  storageOptionsEl.innerHTML = model.storageOptions.map(storage => `
    <button type="button" class="storage-chip ${selectedStorage === storage ? 'is-selected' : ''}" data-storage="${storage}">
      <span>${storage}</span>
    </button>
  `).join('');

  // Initial stage render
  updatePreview(selectedColor ? selectedColor.hex : model.colors[0].hex);
  updateStateUI();

  // Swatch Click Listener
  colorSwatchesEl.addEventListener('click', e => {
    const btn = e.target.closest('.swatch-btn');
    if (!btn) return;
    const colorName = btn.dataset.name;
    const colorHex = btn.dataset.hex;
    selectedColor = { name: colorName, hex: colorHex };

    colorSwatchesEl.querySelectorAll('.swatch-btn').forEach(el => el.classList.remove('is-selected'));
    btn.classList.add('is-selected');

    updatePreview(colorHex);
    updateStateUI();
  });

  // Storage Click Listener
  storageOptionsEl.addEventListener('click', e => {
    const chip = e.target.closest('.storage-chip');
    if (!chip) return;
    selectedStorage = chip.dataset.storage;

    storageOptionsEl.querySelectorAll('.storage-chip').forEach(el => el.classList.remove('is-selected'));
    chip.classList.add('is-selected');

    updateStateUI();
  });

  // OK Button Listener
  if (okBtn) {
    okBtn.addEventListener('click', () => {
      if (!selectedColor || !selectedStorage) return;

      saveUpgradeState({
        newPhone: {
          modelId: model.id,
          name: model.name,
          colorName: selectedColor.name,
          colorHex: selectedColor.hex,
          storage: selectedStorage
        }
      });

      window.location.href = 'success.html';
    });
  }

  function updatePreview(hex) {
    stagePreviewEl.innerHTML = generatePhoneSVG({
      colorHex: hex,
      cameraType: model.cameraType,
      width: 180,
      height: 270
    });
    if (stageColorNameEl) {
      stageColorNameEl.textContent = selectedColor ? selectedColor.name : 'Choose a finish';
    }
  }

  function updateStateUI() {
    if (colorHintEl) {
      colorHintEl.textContent = selectedColor ? `Selected: ${selectedColor.name}` : 'Select a finish';
    }
    if (storageHintEl) {
      storageHintEl.textContent = selectedStorage ? `Selected: ${selectedStorage}` : 'Select capacity';
    }
    if (okBtn) {
      const isReady = Boolean(selectedColor && selectedStorage);
      okBtn.disabled = !isReady;
      okBtn.setAttribute('aria-disabled', String(!isReady));
    }
  }
}

/**
 * Step 4: success.html - All Set!
 */
export function initSuccessPage() {
  const state = getUpgradeState();

  const oldModelEl = document.getElementById('summary-old-model');
  const oldColorEl = document.getElementById('summary-old-color');
  const oldStorageEl = document.getElementById('summary-old-storage');

  const newModelEl = document.getElementById('summary-new-model');
  const newColorEl = document.getElementById('summary-new-color');
  const newStorageEl = document.getElementById('summary-new-storage');
  const restartBtn = document.getElementById('btn-start-over');

  // Fallback defaults if user directly lands on success page
  const oldPhone = state.oldPhone || {
    name: 'iPhone 13',
    colorName: 'Midnight',
    colorHex: '#222930',
    storage: '128 GB'
  };

  const newPhone = state.newPhone || {
    name: 'iPhone 17 Pro Max',
    colorName: 'Cosmic Amber',
    colorHex: '#FF6B00',
    storage: '512 GB'
  };

  if (oldModelEl) oldModelEl.textContent = oldPhone.name || 'iPhone (Classic)';
  if (oldColorEl) {
    oldColorEl.innerHTML = `
      <span class="summary-swatch-dot" style="background-color: ${oldPhone.colorHex || '#333'}"></span>
      <span>${oldPhone.colorName || 'Default'}</span>
    `;
  }
  if (oldStorageEl) oldStorageEl.textContent = oldPhone.storage || '128 GB';

  if (newModelEl) newModelEl.textContent = newPhone.name || 'iPhone 17 Pro Max';
  if (newColorEl) {
    newColorEl.innerHTML = `
      <span class="summary-swatch-dot" style="background-color: ${newPhone.colorHex || '#FF6B00'}"></span>
      <span>${newPhone.colorName || 'Cosmic Amber'}</span>
    `;
  }
  if (newStorageEl) newStorageEl.textContent = newPhone.storage || '512 GB';

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      clearUpgradeState();
      window.location.href = 'index.html';
    });
  }
}

// Auto-run matching page initializer on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const pageId = document.body?.dataset?.page;
    if (pageId === 'catalog') initCatalogPage();
    else if (pageId === 'old-config') initOldIPhoneConfigPage();
    else if (pageId === 'new-config') initNewIPhoneConfigPage();
    else if (pageId === 'success') initSuccessPage();
  });
}
