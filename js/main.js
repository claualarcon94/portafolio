const projects = [
  {
    id: 'snake',
    title: 'Snake',
    category: 'games',
    subtitle: 'Snake Game',
    description: 'Juego clásico de Snake con movimiento por grilla, crecimiento al comer comida y colisiones contra paredes o el propio cuerpo. Control por flechas del teclado.',
    tags: ['p5.js', 'Grid movement', 'Collision', 'Keyboard input'],
    icon: 'S',
    color: 'cat-games',
    p5: true,
    square: true,
    controls: [
      { key: '↑ ↓ ← →', action: 'Cambia dirección' }
    ]
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
    date: '2026-06-05',
    title: 'Steering',
    category: 'physics',
    subtitle: 'Steering Behaviors',
    description: 'Implementación de los comportamientos de dirección de Craig Reynolds: seek, flee, path following, flow-field y sistemas de partículas. Agentes autónomos reaccionando a campos vectoriales.',
    tags: ['p5.js', 'Steering forces', 'AI agents', 'Vector fields'],
    icon: 'St',
    color: 'cat-physics',
    p5: true,
    controls: [
      { key: 'Click', action: 'Atrae agentes' },
      { key: 'G', action: 'Muestra campo vectorial' },
      { key: 'P', action: 'Path / Field' }
    ]
  },
  {
    id: 'cubes_and_waves',
    date: '2026-06-02',
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
    date: '2026-06-02',
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
    date: '2026-06-05',
    title: 'Terrain',
    category: '3d',
    subtitle: '3D Perlin Terrain',
    description: 'Terreno 3D generado con ruido Perlin mapeado a alturas Z. Renderizado como malla de triángulos con cámara rotatoria para efecto de sobrevuelo.',
    tags: ['p5.js', 'Perlin noise', 'Heightmap', 'TRIANGLE_STRIP', 'WEBGL'],
    icon: 'T',
    color: 'cat-3d',
    p5: true
  },
  {
    id: 'colored_squares',
    date: '2026-06-02',
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
    date: '2026-06-02',
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
    date: '2026-06-02',
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
    id: 'minesweeper',
    date: '2026-06-05',
    title: 'Minesweeper',
    category: 'games',
    subtitle: 'Classic Minesweeper',
    description: 'Clásico Buscaminas recreado en p5.js',
    tags: ['p5.js', 'Grid logic', 'Flood-fill', 'Mouse input'],
    icon: 'M',
    color: 'cat-games',
    p5: true,
    controls: [
      { key: 'Click izq', action: 'Destapa casilla' },
      { key: 'Click der', action: 'Bandera / ?' },
      { key: '😀', action: 'Reinicia juego' }
    ]
  },
  {
    id: 'raycasting',
    date: '2026-06-02',
    title: 'Raycasting',
    category: 'algorithms',
    subtitle: '2D Raycasting',
    description: 'Raycasting 2D desde un punto central con 360 rayos. Los rayos se extienden hasta chocar con paredes colocadas aleatoriamente. Visualización top-down en 2D.',
    tags: ['p5.js', 'Raycasting', 'Ray-segment intersection', '2D'],
    icon: 'Ra',
    color: 'cat-algorithms',
    p5: true
  },
  {
    id: 'rendered_raycasting',
    date: '2026-06-05',
    title: 'Rendered Raycasting',
    category: 'algorithms',
    subtitle: 'Wolfenstein 3D Engine',
    description: 'Motor de raycasting estilo Wolfenstein 3D. Lanza rayos desde el jugador, calcula distancias a paredes y renderiza columnas 3D con altura corregida por distancia (sin ojo de pez).',
    tags: ['p5.js', 'DDA raycasting', '3D projection', 'FPS engine'],
    icon: 'Rr',
    color: 'cat-algorithms',
    p5: true,
    controls: [
      { key: 'W / S', action: 'Avanza / retrocede 5 px' },
      { key: 'A / D', action: 'Gira todos los rayos ±0.05 rad' }
    ]
  },
  {
    id: 'perceptron',
    date: '2026-06-02',
    title: 'Perceptron',
    category: 'ml',
    subtitle: 'Animated Perceptron Training',
    description: 'Perceptrón de una capa entrenado por lotes sobre 1000 puntos aleatorios. La frontera de decisión evoluciona en tiempo real hasta clasificar correctamente todos los puntos. Después del entrenamiento, haz clic para agregar nuevos puntos y ver cómo los clasifica.',
    tags: ['p5.js', 'Perceptron', 'Online learning', 'Decision boundary'],
    icon: 'P',
    color: 'cat-ml',
    p5: true,
    controls: [
      { key: 'Click (tras entrenar)', action: 'Añade un nuevo punto para clasificar' }
    ]
  },
  {
    id: 'firma',
    title: 'Firma',
    category: 'tools',
    subtitle: 'Signature Processor',
    description: 'Digitaliza una foto o scan de tu firma y guarda el resultado como PNG para que puedas usarla en tus documentos.',
    tags: ['Processing', 'Image processing', 'Threshold', 'Binarization'],
    icon: 'Fi',
    color: 'cat-tools'
  }
];

// Instancia activa de p5.js para el sketch en el modal
var currentSketch = null;

const webApps = [
  { name: 'Dark Dwarf', category: 'clientes', desc: 'CMS personalizado para comunidad wargame con sistema de usuarios, registro, gestión de contenido, eventos y blog. Desarrollado con PHP, MySQL, HTML, CSS y JavaScript.', url: 'https://www.dark-dwarf.com', screenshot: 'images/dark-dwarf-screenshot.png' },
  { name: 'Shoshin Dojo Seishin Kan', category: 'clientes', desc: 'Próximamente', url: '#' },
  { name: 'Proyectos Web', category: 'personales', desc: 'Próximamente', url: '#' },
  { name: 'YouTube Clone', category: 'personales', desc: 'Réplica básica de la interfaz de inicio de YouTube de 2018. Grilla de videos responsiva con thumbnails, canales y métricas. HTML + CSS vanilla.', url: 'web-apis/youtube-clone/index.html', screenshot: 'images/youtube-clone-screenshot.png' }
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

var projectPageSize = 6;
var projectCurrentPage = 1;
var projectFiltered = [];

function initProjectFilters() {
  var buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      buttons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      projectCurrentPage = 1;
      projectFiltered = getFilteredProjects(btn.dataset.filter);
      renderProjectPage();
    });
  });
}

function getFilteredProjects(filter) {
  return projects.filter(function(p) {
    return p.p5 && (filter === 'all' || p.category === filter);
  }).sort(function(a, b) {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
}

function renderProjects() {
  projectFiltered = getFilteredProjects('all');
  projectCurrentPage = 1;
  renderProjectPage();
}

function renderProjectPage() {
  var grid = document.getElementById('projectGrid');
  if (!grid) return;

  var start = (projectCurrentPage - 1) * projectPageSize;
  var pageProjects = projectFiltered.slice(start, start + projectPageSize);

  grid.innerHTML = pageProjects.map(p => {
    var thumbSrc = p.thumbnail || 'projects/' + p.id + '/thumbnail.png';
    var imgStyle = ' style="';
    if (p.thumbPos) imgStyle += 'object-position:' + p.thumbPos + ';';
    if (p.thumbFit) imgStyle += 'object-fit:' + p.thumbFit + ';';
    imgStyle += '"';
    if (imgStyle === ' style="') imgStyle = '';
    return `
    <div class="project-card" data-category="${p.category}" onclick="openModal('${p.id}')">
      <div class="project-card-top"><img src="${thumbSrc}" alt="${p.title}" class="card-thumbnail"${imgStyle}><span class="tag">p5.js</span></div>
      <div class="card-body">
        <span class="subtitle">${p.subtitle}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="card-tags">
          <span class="badge-p5">p5.js</span>
          ${p.tags.slice(1, 3).map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');

  updatePaginationControls();
}

function updatePaginationControls() {
  var html;
  var totalPages = Math.ceil(projectFiltered.length / projectPageSize);
  if (totalPages <= 1) { html = ''; } else {
    html =
      '<button class="pag-btn pag-prev"' + (projectCurrentPage === 1 ? ' disabled' : '') + '>←</button>' +
      '<span class="pag-info">' + projectCurrentPage + ' / ' + totalPages + '</span>' +
      '<button class="pag-btn pag-next"' + (projectCurrentPage === totalPages ? ' disabled' : '') + '>→</button>';
  }

  [].forEach.call(document.querySelectorAll('.pagination'), function(el) {
    el.innerHTML = html;
    if (html === '') return;
    el.querySelector('.pag-prev').addEventListener('click', function() {
      if (projectCurrentPage > 1) { projectCurrentPage--; renderProjectPage(); scrollToProjects(); }
    });
    el.querySelector('.pag-next').addEventListener('click', function() {
      if (projectCurrentPage < totalPages) { projectCurrentPage++; renderProjectPage(); scrollToProjects(); }
    });
  });
}

function scrollToProjects() {
  var el = document.getElementById('proyectos');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderProcessingProjects() {
  var grid = document.getElementById('processingGrid');
  var countEl = document.getElementById('processingCount');
  if (!grid) return;

  var procProjects = projects.filter(function(p) { return !p.p5; }).sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });

  if (countEl) countEl.textContent = procProjects.length;

  grid.innerHTML = procProjects.map(p => {
    return `
    <div class="project-card" data-category="${p.category}" onclick="openModal('${p.id}')">
      <div class="project-card-top ${p.color}"><span class="prox-text">Próximamente</span><span class="tag">Processing</span></div>
      <div class="card-body">
        <span class="subtitle">${p.subtitle}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="card-tags">
          <span class="badge-processing">Processing</span>
          ${p.tags.slice(1, 3).map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderWebAppCard(a) {
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
}

function renderWebApps() {
  var gridClientes = document.getElementById('webappsClientes');
  var gridPersonales = document.getElementById('webappsPersonales');
  if (!gridClientes || !gridPersonales) return;

  function sortWebApps(arr) {
    return arr.sort(function(a, b) {
      var aReal = a.desc !== 'Próximamente';
      var bReal = b.desc !== 'Próximamente';
      return aReal === bReal ? 0 : aReal ? -1 : 1;
    });
  }

  gridClientes.innerHTML = sortWebApps(webApps.filter(a => a.category === 'clientes')).map(renderWebAppCard).join('');
  gridPersonales.innerHTML = sortWebApps(webApps.filter(a => a.category === 'personales')).map(renderWebAppCard).join('');
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
    var html = '<h4 class="controls-title">⌨ Controles</h4><div class="controls-list">';
    for (var i = 0; i < p.controls.length; i++) {
      var c = p.controls[i];
      var isMouse = c.key.toLowerCase().indexOf('click') !== -1 ||
                    c.key.toLowerCase().indexOf('arrastrar') !== -1;
      if (isMouse) {
        html += '<div class="control-item"><kbd>' + c.key + '</kbd><span>' + c.action + '</span></div>';
      } else if (c.key === '↑ ↓ ← →') {
        html += '<div class="control-item arrow-control">';
        html += '<div class="arrow-grid">';
        html += '<button class="ctrl-keybtn" data-key="arrowup">↑</button>';
        html += '<button class="ctrl-keybtn" data-key="arrowleft">←</button>';
        html += '<button class="ctrl-keybtn" data-key="arrowdown">↓</button>';
        html += '<button class="ctrl-keybtn" data-key="arrowright">→</button>';
        html += '</div><span>' + c.action + '</span></div>';
      } else {
        var keys = c.key.split(/[\/\s,]+/).filter(function(k) { return k.length > 0; });
        var btns = keys.map(function(k) {
          return '<button class="ctrl-keybtn" data-key="' + k.toLowerCase() + '">' + k + '</button>';
        }).join('');
        html += '<div class="control-item">' + btns + '<span>' + c.action + '</span></div>';
      }
    }
    html += '</div>';
    controlsEl.innerHTML = html;

    var keyBtns = controlsEl.querySelectorAll('.ctrl-keybtn');
    for (var j = 0; j < keyBtns.length; j++) {
      keyBtns[j].addEventListener('click', function() {
        if (currentSketch) {
          currentSketch.key = this.dataset.key;
          if (currentSketch.keyPressed) currentSketch.keyPressed();
        }
      });
    }

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
      } else if (id === 'minesweeper') {
        currentSketch = new p5(minesweeperSketch, 'p5-canvas');
      } else if (id === 'perceptron') {
        currentSketch = new p5(perceptronSketch, 'p5-canvas');
      } else if (id === 'raycasting') {
        currentSketch = new p5(raycastingSketch, 'p5-canvas');
      } else if (id === 'rendered_raycasting') {
        currentSketch = new p5(renderedRaycastingSketch, 'p5-canvas');
      } else if (id === 'snake') {
        currentSketch = new p5(snakeSketch, 'p5-canvas');
      } else if (id === 'terrain') {
        currentSketch = new p5(terrainSketch, 'p5-canvas');
      } else if (id === 'steering') {
        currentSketch = new p5(steeringSketch, 'p5-canvas');
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
  if (typeof Sound !== 'undefined') Sound.stopAll();
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
  if (webEl) webEl.textContent = '4';
}

function initScrollTop() {
  var btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initProcessingToggle() {
  var toggle = document.getElementById('processingToggle');
  var grid = document.getElementById('processingGrid');
  if (!toggle || !grid) return;

  toggle.addEventListener('click', function() {
    grid.classList.toggle('open');
    toggle.classList.toggle('open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderProcessingProjects();
  renderWebApps();
  initNavbar();
  initProjectFilters();
  initProcessingToggle();
  if (document.getElementById('hero-flow-field')) new p5(flowFieldSketch, 'hero-flow-field');
  updateStats();
  initScrollTop();

  document.getElementById('modalOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('contactForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const data = {
      access_key: 'df269e02-5a0b-4062-af39-8e3be53c3f7f',
      nombre: form.nombre.value,
      email: form.email.value,
      whatsapp: form.whatsapp.value,
      subject: form.asunto.value,
      mensaje: form.mensaje.value
    };
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (json.success) {
        alert('¡Gracias por tu mensaje! Te responderé a la brevedad.');
        form.reset();
      } else {
        alert('Hubo un error al enviar. Intenta de nuevo.');
      }
    } catch {
      alert('Error de conexión. Intenta de nuevo.');
    }
  });
});
