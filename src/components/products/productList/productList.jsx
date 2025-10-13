const products = [
    // 🧠 Telekinesis
    { id: 1, name: 'Guantes Psiónicos', price: 1200, category: 'Telekinesis', image: '🧤' },
    { id: 2, name: 'Casco Mentalis', price: 2200, category: 'Telekinesis', image: '🪖' },
    { id: 3, name: 'Píldora Psicoactiva', price: 750, category: 'Telekinesis', image: '💊' },
    { id: 4, name: 'Anillo de Control Mental', price: 1600, category: 'Telekinesis', image: '💍' },
    { id: 5, name: 'Cristal de Levitar', price: 1900, category: 'Telekinesis', image: '🔮' },
    { id: 6, name: 'Capa de Energía Mental', price: 1300, category: 'Telekinesis', image: '🧥' },
    { id: 7, name: 'Amuleto de la Mente', price: 980, category: 'Telekinesis', image: '🧿' },
    { id: 8, name: 'Visor Psíquico', price: 1450, category: 'Telekinesis', image: '👓' },

    // 🔥 Elementales
    { id: 9, name: 'Guante de Fuego Infernal', price: 1700, category: 'Elementales', image: '🔥' },
    { id: 10, name: 'Botas de Tierra Ancestral', price: 1100, category: 'Elementales', image: '🥾' },
    { id: 11, name: 'Amuleto del Agua Eterna', price: 2100, category: 'Elementales', image: '💧' },
    { id: 12, name: 'Báculo de Tormentas', price: 2600, category: 'Elementales', image: '⚡' },
    { id: 13, name: 'Píldora de Aire Vital', price: 890, category: 'Elementales', image: '💨' },
    { id: 14, name: 'Cinturón Magmático', price: 1750, category: 'Elementales', image: '🌋' },
    { id: 15, name: 'Túnica de Hielo Puro', price: 1400, category: 'Elementales', image: '🧊' },
    { id: 16, name: 'Collar del Rayo', price: 1550, category: 'Elementales', image: '⚡' },

    // ⚡ Velocidad
    { id: 17, name: 'Botas Relámpago', price: 1300, category: 'Velocidad', image: '👟' },
    { id: 18, name: 'Suero Acelerador', price: 950, category: 'Velocidad', image: '💉' },
    { id: 19, name: 'Banda del Tiempo', price: 1800, category: 'Velocidad', image: '⌚' },
    { id: 20, name: 'Visor Cinético', price: 1250, category: 'Velocidad', image: '🕶️' },
    { id: 21, name: 'Píldora de Reflejos', price: 800, category: 'Velocidad', image: '💊' },
    { id: 22, name: 'Guantes de Fricción Cero', price: 1400, category: 'Velocidad', image: '🧤' },
    { id: 23, name: 'Traje Aerodinámico', price: 1900, category: 'Velocidad', image: '🦺' },
    { id: 24, name: 'Cristal del Tiempo', price: 2300, category: 'Velocidad', image: '⏳' },

    // 💪 Fuerza
    { id: 25, name: 'Brazaletes Titánicos', price: 1750, category: 'Fuerza', image: '💪' },
    { id: 26, name: 'Píldora Muscular X', price: 950, category: 'Fuerza', image: '💊' },
    { id: 27, name: 'Armadura de Poder Alfa', price: 2500, category: 'Fuerza', image: '🦾' },
    { id: 28, name: 'Guantes de Gigante', price: 1450, category: 'Fuerza', image: '🧤' },
    { id: 29, name: 'Anillo de Titanio Vivo', price: 1250, category: 'Fuerza', image: '💍' },
    { id: 30, name: 'Poción de Coloso', price: 780, category: 'Fuerza', image: '🧪' },
    { id: 31, name: 'Cinturón Hércules', price: 1600, category: 'Fuerza', image: '🧢' },
    { id: 32, name: 'Botas del Golpe Sísmico', price: 1350, category: 'Fuerza', image: '🥾' },

    // 👻 Invisibilidad
    { id: 33, name: 'Capa Fantasma', price: 1900, category: 'Invisibilidad', image: '🧥' },
    { id: 34, name: 'Gafas de Desvanecer', price: 1200, category: 'Invisibilidad', image: '🕶️' },
    { id: 35, name: 'Píldora del Velo', price: 850, category: 'Invisibilidad', image: '💊' },
    { id: 36, name: 'Anillo Espectral', price: 1550, category: 'Invisibilidad', image: '💍' },
    { id: 37, name: 'Pulsera Etérea', price: 1100, category: 'Invisibilidad', image: '📿' },
    { id: 38, name: 'Perfume Traslúcido', price: 780, category: 'Invisibilidad', image: '🧴' },
    { id: 39, name: 'Traje Óptico', price: 2000, category: 'Invisibilidad', image: '🦺' },
    { id: 40, name: 'Cristal del Silencio', price: 1750, category: 'Invisibilidad', image: '🔮' },

    // 🌌 Teletransportación
    { id: 41, name: 'Anillo Warp', price: 1800, category: 'Teletransportación', image: '💍' },
    { id: 42, name: 'Píldora del Salto Espacial', price: 900, category: 'Teletransportación', image: '💊' },
    { id: 43, name: 'Guante de Portales', price: 1900, category: 'Teletransportación', image: '🧤' },
    { id: 44, name: 'Cinturón Dimensional', price: 2100, category: 'Teletransportación', image: '🌀' },
    { id: 45, name: 'Reloj de Fase Cuántica', price: 2300, category: 'Teletransportación', image: '⌚' },
    { id: 46, name: 'Cristal de Salto Instantáneo', price: 1750, category: 'Teletransportación', image: '🔮' },
    { id: 47, name: 'Túnica Warp', price: 1600, category: 'Teletransportación', image: '🧥' },
    { id: 48, name: 'Báculo de Portales', price: 2500, category: 'Teletransportación', image: '🪄' },
    { id: 49, name: 'Botas de Traslación', price: 1550, category: 'Teletransportación', image: '🥾' },
    { id: 50, name: 'Disco de Fase Rápida', price: 950, category: 'Teletransportación', image: '💽' },
];

export default products;