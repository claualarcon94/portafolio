const projects = [
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    category: 'games',
    subtitle: 'Classic Minesweeper',
    description: 'Buscaminas completo con celdas, banderas, indicador de estado y efectos de sonido. Incluye lógica de revelación por flood-fill, detección de victoria/derrota y modo interactivo con clics.',
    tags: ['Processing', 'Grid logic', 'Flood-fill', 'Minim audio'],
    icon: 'M',
    color: 'cat-games'
  },
  {
    id: 'snaaake',
    title: 'Snaaake',
    category: 'games',
    subtitle: 'Snake Game',
    description: 'Juego clásico de Snake con movimiento por grilla, crecimiento al comer comida y colisiones contra paredes o el propio cuerpo. Control por flechas del teclado.',
    tags: ['Processing', 'Grid movement', 'Collision', 'Keyboard input'],
    icon: 'S',
    color: 'cat-games'
  },
  {
    id: 'resortes',
    title: 'Resortes',
    category: 'physics',
    subtitle: 'Mass-Spring Physics',
    description: 'Simulación realista de una cadena de masas conectadas por resortes. Aplica la ley de Hooke y gravedad para oscilación armónica con punto superior fijo.',
    tags: ['Processing', 'Hooke\'s law', 'Newtonian physics', 'Vector math'],
    icon: 'Re',
    color: 'cat-physics'
  },
  {
    id: 'fuerza_rotacion',
    title: 'Fuerza Rotación',
    category: 'physics',
    subtitle: 'Centripetal Force',
    description: 'Partícula orbitando un centro bajo fuerza centrípeta constante. Demostración visual de movimiento circular con integración de Euler y vectores.',
    tags: ['Processing', 'Centripetal force', 'Euler integration', 'Orbital'],
    icon: 'Fr',
    color: 'cat-physics'
  },
  {
    id: 'steering',
    title: 'Steering',
    category: 'physics',
    subtitle: 'Steering Behaviors',
    description: 'Implementación de los comportamientos de dirección de Craig Reynolds: seek, flee, path following, flow-field y sistemas de partículas. Agentes autónomos reaccionando a campos vectoriales.',
    tags: ['Processing', 'Steering forces', 'AI agents', 'Vector fields'],
    icon: 'St',
    color: 'cat-physics'
  },
  {
    id: 'cubes_and_waves',
    thumbFit: 'contain',
    title: 'Cubes and Waves',
    category: '3d',
    subtitle: '3D Box Wave',
    description: 'Grilla de cubos 3D cuyas alturas oscilan con una onda sinusoidal propagándose desde el centro. Iluminado con luz ambiental y puntual en modo WEBGL.',
    tags: ['p5.js', 'WEBGL', 'Sine wave', 'Grid animation', '3D'],
    icon: 'Cw',
    color: 'cat-3d',
    p5: true,
    square: true,
    controls: [
      { key: 'Click+arrastrar', action: 'Rota la escena' }
    ]
  },
  {
    id: 'flow_field',
    title: 'Flow Field',
    category: 'generative',
    subtitle: 'Perlin Flow Field',
    description: 'Campo de vectores generado con ruido Perlin que guía el movimiento de cientos de partículas. Sliders interactivos para controlar color, fuerza y velocidad en tiempo real.',
    tags: ['p5.js', 'Perlin noise', 'Particle system', 'Vector field'],
    icon: 'Ff',
    color: 'cat-generative',
    p5: true,
    controls: [
      { key: 'Click', action: 'Reinicia las partículas' }
    ]
  },
  {
    id: 'terrain',
    title: 'Terrain',
    category: '3d',
    subtitle: '3D Perlin Terrain',
    description: 'Terreno 3D generado con ruido Perlin mapeado a alturas Z. Renderizado como malla de triángulos con cámara rotatoria para efecto de sobrevuelo.',
    tags: ['Processing', 'Perlin noise', 'Heightmap', 'TRIANGLE_STRIP'],
    icon: 'T',
    color: 'cat-3d'
  },
  {
    id: 'colored_squares',
    title: 'Colored Squares',
    category: 'generative',
    subtitle: 'Perlin Color Grid',
    description: 'Grilla a pantalla completa de rectángulos coloreados cuyos valores RGB son animados por ruido Perlin, creando un campo de color cambiante y fluido.',
    tags: ['Processing', 'Perlin noise', 'Color mapping', 'Full-screen'],
    icon: 'Cc',
    color: 'cat-generative',
    p5: true,
    controls: [
      { key: '+', action: 'Aumenta el tamaño de los rectángulos' },
      { key: '-', action: 'Reduce el tamaño de los rectángulos (mín. 10 px)' }
    ]
  },
  {
    id: 'fractal_tree',
    thumbPos: 'bottom',
    title: 'Fractal Trees',
    category: 'generative',
    subtitle: 'Recursive Tree with Wind',
    description: 'Árbol fractal con ramificación recursiva estilo L-system. Incluye hojas que caen y responden al viento simulado con ruido Perlin.',
    tags: ['p5.js', 'Recursion', 'L-system', 'Wind simulation'],
    icon: 'Ft',
    color: 'cat-generative',
    p5: true,
    controls: [
      { key: 'Click', action: 'Hace crecer el árbol una generación' }
    ]
  },
  {
    id: 'perlin_wave',
    title: 'Perlin Wave Slider',
    category: 'generative',
    subtitle: 'Noise Wave with Controls',
    description: 'Onda continua dibujada con ruido Perlin para los valores Y. Dos sliders personalizados controlan la velocidad y el incremento del muestreo de ruido en tiempo real.',
    tags: ['Processing', 'Perlin noise', 'Custom UI', 'Real-time control'],
    icon: 'Pw',
    color: 'cat-generative'
  },
  {
    id: 'pic_walker',
    title: 'Pic Walker',
    category: 'generative',
    subtitle: 'Perlin Walker on Image',
    description: 'Un caminante guiado por ruido Perlin se mueve sobre una imagen, muestrea el color subyacente y dibuja círculos de ese color. Crea una reconstrucción pictórica estilo puntillismo.',
    tags: ['Processing', 'Perlin walker', 'Color sampling', 'Pointillism'],
    icon: 'Pi',
    color: 'cat-generative'
  },
  {
    id: 'marching_squares',
    title: 'Marching Squares',
    category: 'algorithms',
    subtitle: 'Contour Extraction',
    description: 'Implementación del algoritmo Marching Squares sobre un campo escalar generado por metaballs (burbujas). Interactúa con los controles de teclado y mouse abajo.',
    tags: ['p5.js', 'Marching Squares', 'Metaballs', 'Contour lines'],
    icon: 'Ms',
    color: 'cat-algorithms',
    p5: true,
    controls: [
      { key: 'Click / Click der', action: 'Añade o remueve burbujas' },
      { key: '+ / -', action: 'Aumenta/disminuye tamaño de celda' },
      { key: 'l', action: 'Interpolación lineal on/off' },
      { key: 'b', action: 'Muestra/oculta burbujas' },
      { key: 'g', action: 'Muestra/oculta rejilla' },
      { key: 'r', action: 'Muestra/oculta relleno' }
    ]
  },
  {
    id: 'rc3',
    title: 'RC3',
    category: 'algorithms',
    subtitle: '2D Raycasting',
    description: 'Raycasting 2D desde un punto central con 360 rayos. Los rayos se extienden hasta chocar con paredes colocadas aleatoriamente. Visualización top-down en 2D.',
    tags: ['Processing', 'Raycasting', 'Ray-segment intersection', '2D'],
    icon: 'Rc',
    color: 'cat-algorithms'
  },
  {
    id: 'rendered_raycasting',
    title: 'Rendered Raycasting',
    category: 'algorithms',
    subtitle: 'Wolfenstein 3D Engine',
    description: 'Motor de raycasting estilo Wolfenstein 3D. Lanza rayos desde el jugador, calcula distancias a paredes y renderiza columnas 3D con altura corregida por distancia (sin ojo de pez).',
    tags: ['Processing', 'DDA raycasting', '3D projection', 'FPS engine'],
    icon: 'Rr',
    color: 'cat-algorithms'
  },
  {
    id: 'perceptron_process',
    title: 'Perceptron Process',
    category: 'ml',
    subtitle: 'Batch Training Perceptron',
    description: 'Perceptrón de una capa entrenado en 100 puntos aleatorios con aprendizaje por lotes. Visualiza clasificación con puntos verdes (correctos) y rojos (incorrectos).',
    tags: ['Processing', 'Perceptron', 'Batch learning', 'Classification'],
    icon: 'Pp',
    color: 'cat-ml'
  },
  {
    id: 'perceptron_solo',
    title: 'Perceptron Solo',
    category: 'ml',
    subtitle: 'Animated Perceptron Training',
    description: 'Perceptrón con entrenamiento animado punto por punto sobre 1000 muestras. Muestra la frontera de decisión evolucionando en tiempo real.',
    tags: ['Processing', 'Perceptron', 'Online learning', 'Decision boundary'],
    icon: 'Ps',
    color: 'cat-ml'
  },
  {
    id: 'firma',
    title: 'Firma',
    category: 'tools',
    subtitle: 'Signature Processor',
    description: 'Carga una imagen JPEG de firma, aplica filtro de umbral en canal azul para binarizarla (píxeles con azul < 100 se vuelven negros) y guarda el resultado como PNG.',
    tags: ['Processing', 'Image processing', 'Threshold', 'Binarization'],
    icon: 'Fi',
    color: 'cat-tools'
  }
];

// Instancia activa de p5.js para el sketch en el modal
var currentSketch = null;

const webApps = [
  { name: 'Dark Dwarf', desc: 'CMS personalizado para comunidad wargame con sistema de usuarios, registro, gestión de contenido, eventos y blog. Desarrollado con PHP, MySQL, HTML, CSS y JavaScript.', url: 'https://www.dark-dwarf.com', screenshot: 'images/dark-dwarf-screenshot.png' },
  { name: 'Proyecto Web 2', desc: 'Próximamente', url: '#' },
  { name: 'Proyecto Web 3', desc: 'Próximamente', url: '#' }
];

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle?.addEventListener('click', () => {
    links?.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      links?.classList.remove('open');
      toggle?.classList.remove('active');
    });
  });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar?.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;

  var ordenados = projects.slice().sort(function(a, b) {
    if ((a.p5 ? 1 : 0) !== (b.p5 ? 1 : 0)) return a.p5 ? -1 : 1;
    return a.title.localeCompare(b.title);
  });

  grid.innerHTML = ordenados.map(p => {
    var thumbSrc = p.thumbnail || 'projects/' + p.id + '/thumbnail.png';
    var imgStyle = ' style="';
    if (p.thumbPos) imgStyle += 'object-position:' + p.thumbPos + ';';
    if (p.thumbFit) imgStyle += 'object-fit:' + p.thumbFit + ';';
    imgStyle += '"';
    if (imgStyle === ' style="') imgStyle = '';
    var topHtml = p.p5
      ? '<div class="project-card-top"><img src="' + thumbSrc + '" alt="' + p.title + '" class="card-thumbnail"' + imgStyle + '><span class="tag">p5.js</span></div>'
      : '<div class="project-card-top ' + p.color + '"><span class="prox-text">Próximamente</span><span class="tag">Processing</span></div>';
    return `
    <div class="project-card" data-category="${p.category}" onclick="openModal('${p.id}')">
      ${topHtml}
      <div class="card-body">
        <span class="subtitle">${p.subtitle}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="card-tags">
          <span class="${p.p5 ? 'badge-p5' : 'badge-processing'}">${p.p5 ? 'p5.js' : 'Processing'}</span>
          ${p.tags.slice(1, 3).map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderWebApps() {
  const grid = document.getElementById('webappsGrid');
  if (!grid) return;

  grid.innerHTML = webApps.map(a => {
    if (a.screenshot) {
      return `
    <a href="${a.url}" class="webapp-card webapp-card--with-img" target="_blank" rel="noopener">
      <div class="webapp-img" style="background-image:url(${a.screenshot})"></div>
      <div class="webapp-info">
        <h4>${a.name}</h4>
        <p>${a.desc}</p>
        <span class="webapp-link">Visitar sitio →</span>
      </div>
    </a>`;
    }
    return `
    <a href="${a.url}" class="webapp-card" target="_blank" rel="noopener">
      <div class="webapp-icon">
        ${a.icon ? `<img src="${a.icon}" alt="${a.name}" width="22" height="22">` : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`}
      </div>
      <div class="webapp-info">
        <h4>${a.name}</h4>
        <p>${a.desc}</p>
        <span class="webapp-link">Visitar sitio →</span>
      </div>
    </a>`;
  }).join('');
}

function openModal(id) {
  // Cerrar sketch previo si existiera
  closeSketch();

  const p = projects.find(pr => pr.id === id);
  if (!p) return;

  const overlay = document.getElementById('modalOverlay');
  const topSection = document.getElementById('modalTopSection');
  const canvasWrap = document.getElementById('p5-canvas');
  const iconEl = document.getElementById('modalIcon');

  // Limpiar contenedor del canvas
  canvasWrap.innerHTML = '';

  // Resetear estilos dinámicos del modal previo
  topSection.style.aspectRatio = '';
  topSection.style.maxWidth = '';
  topSection.style.margin = '';

  // Llenar datos del proyecto
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalSubtitle').textContent = p.subtitle;
  document.getElementById('modalDesc').textContent = p.description;
  document.getElementById('modalTags').innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');

  // Controles interactivos
  var controlsEl = document.getElementById('modalControls');
  if (p.controls && p.controls.length) {
    controlsEl.innerHTML = '<h4 class="controls-title">⌨ Controles</h4>' +
      '<div class="controls-list">' +
      p.controls.map(function(c) {
        return '<div class="control-item"><kbd>' + c.key + '</kbd><span>' + c.action + '</span></div>';
      }).join('') +
      '</div>';
    controlsEl.style.display = '';
  } else {
    controlsEl.style.display = 'none';
  }

  // Mostrar el modal ANTES de crear p5 para que el canvas tenga dimensiones
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (p.p5) {
    topSection.className = 'modal-top';
    topSection.style.aspectRatio = p.square ? '1 / 1' : '';
    topSection.style.maxWidth = p.square ? '506px' : '';
    topSection.style.margin = p.square ? '0 auto' : '';
    canvasWrap.style.display = 'flex';
    iconEl.style.display = 'none';

    var statusEl = document.getElementById('modalStatus');
    statusEl.innerHTML = '<span class="dot"></span>Demo interactiva en vivo — JavaScript';
    statusEl.style.background = 'rgba(16,185,129,.1)';
    statusEl.style.color = '#059669';

    // Esperar al siguiente frame para que el navegador calcule las dimensiones
    requestAnimationFrame(function() {
      if (id === 'colored_squares') {
        currentSketch = new p5(coloredSquaresSketch, 'p5-canvas');
      } else if (id === 'cubes_and_waves') {
        currentSketch = new p5(cubesAndWavesSketch, 'p5-canvas');
      } else if (id === 'fractal_tree') {
        currentSketch = new p5(fractalTreesSketch, 'p5-canvas');
      } else if (id === 'flow_field') {
        currentSketch = new p5(flowFieldSketch, 'p5-canvas');
      } else if (id === 'marching_squares') {
        currentSketch = new p5(marchingSquaresSketch, 'p5-canvas');
      }
    });
  } else {
    topSection.className = 'modal-top ' + p.color;
    canvasWrap.style.display = 'none';
    iconEl.style.display = 'flex';
    iconEl.textContent = p.icon;

    var statusEl = document.getElementById('modalStatus');
    statusEl.innerHTML = '<span class="dot"></span>Versión Processing — Próximamente en JavaScript';
    statusEl.style.background = 'rgba(59,130,246,.1)';
    statusEl.style.color = 'var(--blue)';
  }
}

function closeSketch() {
  var sliders = document.querySelectorAll('.slider-section');
  for (var i = 0; i < sliders.length; i++) sliders[i].remove();
  if (currentSketch) {
    currentSketch.remove();
    currentSketch = null;
  }
}

function closeModal() {
  closeSketch();
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function updateStats() {
  var projEl = document.getElementById('statProjects');
  var webEl = document.getElementById('statWebApis');
  if (projEl) projEl.textContent = projects.length;
  if (webEl) webEl.textContent = webApps.length;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderWebApps();
  initNavbar();
  initProjectFilters();
  updateStats();

  document.getElementById('modalOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderé a la brevedad.');
    e.target.reset();
  });
});
