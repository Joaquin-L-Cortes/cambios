const malla = {
    "I Semestre": [
        { nombre: "Introducción a la Sociología", id: "intro_sociologia", creditos: 3 },
        { nombre: "Sociedad Colombiana del Siglo XIX", id: "sociedad_xix", creditos: 3 },
        { nombre: "Software Aplicado a las Ciencias Sociales", id: "software", creditos: 3 },
        { nombre: "Estructura de la Sociedad Moderna I", id: "estructura_i", creditos: 3 },
        { nombre: "Inglés I", id: "ingles_i", creditos: 3 }
    ],
    "II Semestre": [
        { nombre: "Análisis de Datos Cuantitativos", id: "analisis_datos", creditos: 3 },
        { nombre: "Sociedad Colombiana del Siglo XX", id: "sociedad_xx", creditos: 3 },
        { nombre: "Teoría Sociológica: Durkheim", id: "durkheim", creditos: 3 },
        { nombre: "Estructura de la Sociedad Moderna II", id: "estructura_ii", creditos: 3 },
        { nombre: "Inglés II", id: "ingles_ii", creditos: 3, prerreq: ["ingles_i"] }
    ],
    "III Semestre": [
        { nombre: "Demografía", id: "demografia", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Espacio y Sociedad", id: "espacio_sociedad", creditos: 3 },
        { nombre: "Optativa: Sociologías Temáticas I", id: "tematicas_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Teoría Sociológica: Marx", id: "marx", creditos: 3 },
        { nombre: "Libre Elección I", id: "libre_i", creditos: 3 },
        { nombre: "Inglés III", id: "ingles_iii", creditos: 3, prerreq: ["ingles_i", "ingles_ii"] }
    ],
    "IV Semestre": [
        { nombre: "Métodos Cuantitativos", id: "metodos_cuanti", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Taller I: Documentación e Investigación", id: "taller_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Optativa: Sociologías Temáticas II", id: "tematicas_ii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Teoría Sociológica: Weber", id: "weber", creditos: 3 },
        { nombre: "Libre Elección II", id: "libre_ii", creditos: 3 },
        { nombre: "Inglés IV", id: "ingles_iv", creditos: 3, prerreq: ["ingles_i", "ingles_ii", "ingles_iii"] }
    ],
    "V Semestre": [
        { nombre: "Indicadores Sociales", id: "indicadores", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Optativa: Sociologías Especiales I", id: "especiales_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Optativa: Sociologías Temáticas III", id: "tematicas_iii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Optativa: Teorías Sociológicas I", id: "teorias_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Libre Elección III", id: "libre_iii", creditos: 3 },
        { nombre: "Libre Elección IV", id: "libre_iv", creditos: 3 }
    ],
    "VI Semestre": [
        { nombre: "Métodos Cualitativos", id: "metodos_cuali", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Optativa: Sociologías Especiales II", id: "especiales_ii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Pensamiento Sociológico Latinoamericano", id: "pensamiento_latam", creditos: 3 },
        { nombre: "Optativa: Teorías Sociológicas II", id: "teorias_ii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Libre Elección V", id: "libre_v", creditos: 3 },
        { nombre: "Libre Elección VI", id: "libre_vi", creditos: 3 }
    ],
    "VII Semestre": [
        { nombre: "Optativa: Métodos de Investigación", id: "metodos_invest", creditos: 3 },
        { nombre: "Optativa: Sociologías Especiales III", id: "especiales_iii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Taller 2: Proyecto de Investigación", id: "taller_ii", creditos: 8, prerreq: ["taller_i", "demografia", "metodos_cuanti", "indicadores", "metodos_cuali", "durkheim", "marx", "weber", "teorias_i", "teorias_ii", "tematicas_i", "tematicas_ii", "especiales_i", "especiales_ii"] },
        { nombre: "Optativa: Teorías Sociológicas III", id: "teorias_iii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Libre Elección VII", id: "libre_vii", creditos: 3 }
    ],
    "VIII Semestre": [
        { nombre: "Trabajo de Grado", id: "trabajo_grado", creditos: 10, prerreq: ["taller_ii"] },
        { nombre: "Libre Elección VIII", id: "libre_viii", creditos: 3 },
        { nombre: "Libre Elección IX", id: "libre_ix", creditos: 3 },
        { nombre: "Libre Elección X", id: "libre_x", creditos: 3 }
    ]
};

// Métodos de investigación disponibles
const metodosInvestigacion = [
    { nombre: "Taller de Técnicas Etnográficas", id: "taller_etnograficas", creditos: 3 },
    { nombre: "Bibliometría", id: "bibliometria", creditos: 3 },
    { nombre: "Cartografía Social", id: "cartografia_social", creditos: 3 },
    { nombre: "Análisis del Discurso", id: "analisis_discurso", creditos: 3 },
    { nombre: "Teoría Fundada", id: "teoria_fundada", creditos: 3 },
    { nombre: "Claves para la Investigación Acción Participativa I.A.P.", id: "iap", creditos: 3 },
    { nombre: "Hermenéutica y Análisis Simbólico", id: "hermeneutica", creditos: 3 },
    { nombre: "Métodos Biográficos", id: "metodos_biograficos", creditos: 3 },
    { nombre: "Archivística", id: "archivistica", creditos: 3 },
    { nombre: "Métodos Históricos", id: "metodos_historicos", creditos: 3 },
    { nombre: "Paleografía", id: "paleografia", creditos: 3 },
    { nombre: "Etnografía", id: "etnografia", creditos: 3 },
    { nombre: "Análisis del Discurso I", id: "analisis_discurso_i", creditos: 3 },
    { nombre: "Métodos Etnográficos", id: "metodos_etnograficos", creditos: 3 },
    { nombre: "Investigación sobre la Intervención Social", id: "investigacion_intervencion", creditos: 3 },
    { nombre: "Cartografía General", id: "cartografia_general", creditos: 3 },
    { nombre: "Introducción al Trabajo Científico", id: "trabajo_cientifico", creditos: 3 },
    { nombre: "Análisis Cualitativo de Datos: Atlas Ti", id: "atlas_ti", creditos: 3 },
    { nombre: "Formulación y evaluación de proyectos sociales", id: "proyectos_sociales", creditos: 3 },
    { nombre: "Análisis de coyuntura social y política", id: "analisis_coyuntura", creditos: 3 },
    { nombre: "Práctica de Investigación - Lapis", id: "practica_lapis", creditos: 4, prerreq: ["metodos_cuali", "metodos_cuanti", "taller_i"] },
    { nombre: "Práctica profesional en sociología", id: "practica_profesional", creditos: 3, prerreq: ["metodos_cuali", "metodos_cuanti", "taller_i"] }
];

const estado = {};
function guardarEstado() {
    // Función vacía para mantener compatibilidad
}

function calcularEstadisticas() {
    const totalMaterias = Object.values(malla).flat().length;
    const totalCreditos = Object.values(malla).flat().reduce((sum, ramo) => sum + ramo.creditos, 0);
    const aprobadas = Object.values(estado).filter(Boolean).length;
    const creditosAprobados = Object.values(malla).flat()
        .filter(ramo => estado[ramo.id])
        .reduce((sum, ramo) => sum + ramo.creditos, 0);
    
    return {
        totalMaterias,
        totalCreditos,
        aprobadas,
        creditosAprobados,
        porcentaje: Math.round((aprobadas / totalMaterias) * 100)
    };
}

function actualizarEstadisticas() {
    const stats = calcularEstadisticas();
    document.getElementById('stats').innerHTML = `
        <span>Materias: ${stats.aprobadas}/${stats.totalMaterias}</span>
        <span>Créditos: ${stats.creditosAprobados}/${stats.totalCreditos}</span>
        <span>Progreso: ${stats.porcentaje}%</span>
    `;
}

function mostrarModalMetodos() {
    const modal = document.getElementById('metodosModal');
    const lista = document.getElementById('metodosLista');
    
    // Limpiar lista anterior
    lista.innerHTML = '';
    
    // Crear opciones de métodos
    metodosInvestigacion.forEach(metodo => {
        const div = document.createElement('div');
        div.className = 'metodo-option';
        
        // Verificar si cumple prerrequisitos
        const prerreqCumplidos = (metodo.prerreq || []).every(id => estado[id]);
        const disponible = !metodo.prerreq || prerreqCumplidos;
        
        if (!disponible) {
            div.classList.add('bloqueado');
        } else {
            div.classList.add('disponible');
        }
        
        div.innerHTML = `
            <div class="metodo-info">
                <div class="metodo-nombre">${metodo.nombre}</div>
                <div class="metodo-creditos">${metodo.creditos} créditos</div>
                ${!disponible ? `<div class="metodo-prereq">Prerrequisitos: ${metodo.prerreq.map(id => obtenerNombreMateria(id)).join(', ')}</div>` : ''}
            </div>
        `;
        
        if (disponible) {
            div.addEventListener('click', () => {
                seleccionarMetodo(metodo);
            });
        }
        
        lista.appendChild(div);
    });
    
    modal.style.display = 'block';
}

function obtenerNombreMateria(id) {
    const materia = Object.values(malla).flat().find(m => m.id === id);
    return materia ? materia.nombre : id;
}

function seleccionarMetodo(metodo) {
    // Marcar el método como aprobado
    estado[metodo.id] = true;
    
    // Marcar "Optativa: Métodos de Investigación" como aprobado
    estado['metodos_invest'] = true;
    
    // Cerrar modal
    cerrarModal();
    
    // Actualizar vista
    crearMalla();
    actualizarEstadisticas();
    
    // Guardar estado
    guardarEstado();
}

function cerrarModal() {
    document.getElementById('metodosModal').style.display = 'none';
}

function crearMalla() {
    const contenedor = document.getElementById("malla");
    contenedor.innerHTML = "";

    Object.entries(malla).forEach(([semestre, ramos]) => {
        const columna = document.createElement("div");
        columna.className = "semestre";

        const titulo = document.createElement("h2");
        titulo.textContent = semestre;
        columna.appendChild(titulo);

        ramos.forEach(ramo => {
            const div = document.createElement("div");
            div.className = "ramo";
