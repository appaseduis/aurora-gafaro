/* ==========================================================
   DATA — contenido estructurado del sitio
   Fuentes: "HOJA DE VIDA Aurora_Gáfaro R_2026" (HV) y
   "Propuesta_Rectoria_Aurora_Gafaro_2026-2030" (PR).
   Editar aquí actualiza todas las páginas que usan el dato.
   ========================================================== */
window.SITE_DATA = {

  /* ---------- Perfiles académicos oficiales ---------- */
  perfiles: [
    { sigla: 'CvLAC', nombre: 'CvLAC – Minciencias', detalle: 'Hoja de vida académica registrada en la plataforma ScienTI de Minciencias.', enlace: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000256706' },
    { sigla: 'ORCID', nombre: 'ORCID', detalle: 'Identificador de investigadora 0000-0003-2950-5603.', enlace: 'https://orcid.org/0000-0003-2950-5603' }
  ],

  /* ---------- Cifras (PR, sección 1.2) ---------- */
  cifras: [
    { valor: 30, prefijo: '', sufijo: '', etiqueta: 'años de trayectoria (desde 1996)' },
    { valor: 50, prefijo: '+', sufijo: '', etiqueta: 'ponencias en congresos nacionales e internacionales' },
    { valor: 50, prefijo: '+', sufijo: '', etiqueta: 'trabajos de pregrado y posgrado dirigidos' },
    { valor: 15, prefijo: '', sufijo: '', etiqueta: 'artículos científicos' },
    { valor: 6, prefijo: '', sufijo: '', etiqueta: 'libros publicados' },
    { valor: 11, prefijo: '', sufijo: '', etiqueta: 'cartillas digitales en salud' }
  ],

  /* ---------- Formación académica (HV, sección 2) ---------- */
  formacion: [
    {
      nivel: 'Doctorado', anio: '2007',
      titulo: 'PhD en Estadística, Matemática e Informática',
      institucion: 'Universidad Pública de Navarra', lugar: 'Pamplona, España',
      nota: 'Calificación SOBRESALIENTE «Cum laude» por unanimidad.', destacado: true
    },
    {
      nivel: 'Convalidación', anio: '2008',
      titulo: 'Doctorado en Matemática Aplicada (convalidación)',
      institucion: 'Ministerio de Educación Nacional – MEN', lugar: 'Colombia',
      nota: 'Convalidación del título doctoral obtenido en España.'
    },
    {
      nivel: 'Estudios avanzados', anio: '2003',
      titulo: 'Diploma de Estudios Avanzados en Estadística e Investigación Operativa',
      institucion: 'Universidad Pública de Navarra', lugar: 'Pamplona, España',
      nota: 'Registrado en la hoja de vida como certificado de maestría.'
    },
    {
      nivel: 'Especialización', anio: '1997',
      titulo: 'Especialista en Educación Matemática',
      institucion: 'Universidad de Pamplona', lugar: 'Pamplona, Colombia'
    },
    {
      nivel: 'Pregrado', anio: '1996',
      titulo: 'Licenciada en Matemáticas y Computación',
      institucion: 'Universidad de Pamplona', lugar: 'Pamplona, Colombia'
    },
    {
      nivel: 'Bachillerato', anio: '1989',
      titulo: 'Bachiller',
      institucion: 'Centro de Educación Media de la Universidad de Pamplona – CEMUP', lugar: 'Pamplona, Colombia',
      nota: 'Reconocimiento: beca otorgada por la Universidad de Pamplona por rendimiento académico para continuar estudios universitarios.'
    }
  ],

  /* HV sección 7 · tipo: diplomado | curso | congreso | seminario */
  formacionComplementaria: [
    { tipo: 'diplomado', anio: 2020, titulo: 'Diplomado en Economía de la Salud', institucion: 'Universidad Industrial de Santander', lugar: 'Bucaramanga', horas: 116 },
    { tipo: 'diplomado', anio: 2018, titulo: 'Diplomado en Docencia Universitaria', institucion: 'Politécnico Superior de Colombia', lugar: 'Medellín', horas: 120 },

    { tipo: 'curso', anio: 2018, titulo: 'Programa Familias Fuertes: Amor y Límites', institucion: 'Secretaría de Salud Departamental (Dimensión Convivencia Social y Salud Mental) y UIS', lugar: 'Bucaramanga', horas: 36 },
    { tipo: 'curso', anio: 2015, titulo: 'Primer Congreso Internacional sobre Problemáticas en Educación y Salud', institucion: 'Fundación Sociedades Complejas', lugar: 'Buenos Aires, Argentina', horas: 33 },
    { tipo: 'curso', anio: 2014, titulo: 'Jornada de inducción a pares: verificación de condiciones de calidad de registros calificados', institucion: 'Ministerio de Educación Nacional', lugar: 'Bucaramanga', horas: 12 },
    { tipo: 'curso', anio: 2014, titulo: 'Bioestadística – Master Class en docencia de investigación científica', institucion: 'Hotel DoubleTree', lugar: 'Ciudad de México, México' },
    { tipo: 'curso', anio: 2014, titulo: 'Protección del participante humano de la investigación', institucion: 'Instituto Nacional de Salud – NIH', lugar: 'Bogotá', horas: 10 },
    { tipo: 'curso', anio: 2014, titulo: 'Desafíos da educação moderna', institucion: 'Pontificia Universidad Católica – PUC-Rio', lugar: 'Río de Janeiro, Brasil', horas: 10 },
    { tipo: 'curso', anio: 2014, titulo: 'TIC y evaluación por competencias', institucion: 'Pontificia Universidad Católica – PUC-Rio', lugar: 'Río de Janeiro, Brasil', horas: 10 },
    { tipo: 'curso', anio: 2013, titulo: 'Modelación de enfermedades infecciosas', institucion: 'Instituto de Evaluación Tecnológica en Salud – IETS', lugar: 'Bogotá', horas: 24 },
    { tipo: 'curso', anio: '2012 · 2013', titulo: 'Funcionalidades de la plataforma Moodle 2.0 (dos cursos)', institucion: 'Universidad Industrial de Santander', lugar: 'Bucaramanga', horas: 64 },
    { tipo: 'curso', anio: 2012, titulo: 'Epidemiología y estadística: principios y práctica', institucion: 'Hospital Italiano de Buenos Aires (B-Learning)', lugar: 'Buenos Aires, Argentina', horas: 135 },
    { tipo: 'curso', anio: 2012, titulo: 'Análisis multivariado', institucion: 'Instituto Nacional de Salud Pública – INSP', lugar: 'Cuernavaca, México', horas: 40 },
    { tipo: 'curso', anio: 2012, titulo: 'Análisis de encuestas nacionales de salud', institucion: 'Instituto Nacional de Salud Pública – INSP', lugar: 'Cuernavaca, México', horas: 40 },
    { tipo: 'curso', anio: 2011, titulo: 'XIII Conferencia Interamericana de Educación Matemática', institucion: 'Universidad Federal de Pernambuco', lugar: 'Recife, Brasil', horas: 45 },
    { tipo: 'curso', anio: 2011, titulo: 'Curso intensivo de revisiones sistemáticas y metaanálisis', institucion: 'Instituto de Efectividad Clínica y Sanitaria – The Cochrane Collaboration y UIS', lugar: 'Bucaramanga', horas: 40 },
    { tipo: 'curso', anio: 2011, titulo: 'Diseño de cursos y mediaciones', institucion: 'Universidad Industrial de Santander', lugar: 'Bucaramanga', horas: 60 },
    { tipo: 'curso', anio: 2011, titulo: 'Uso de bases de datos y recursos electrónicos para la recuperación de información científica', institucion: 'Universidad Industrial de Santander', lugar: 'Bucaramanga', horas: 20 },
    { tipo: 'curso', anio: 2011, titulo: 'Curso básico de portugués', institucion: 'Universidad Santo Tomás', lugar: 'Bucaramanga', horas: 120 },
    { tipo: 'curso', anio: 2011, titulo: 'Proyecto institucional', institucion: 'Universidad Industrial de Santander', lugar: 'Bucaramanga', horas: 20 },
    { tipo: 'curso', anio: 2010, titulo: 'Estadística aplicada en la investigación biomédica', institucion: 'Centro Internacional de Entrenamiento e Investigaciones Médicas – CIDEIM (B-Learning)', lugar: 'Valle del Cauca', horas: 80 },
    { tipo: 'curso', anio: 2008, titulo: 'Michigan Test of English Language Proficiency', institucion: 'Instituto de enseñanza de inglés', lugar: 'Bucaramanga' },
    { tipo: 'curso', anio: '2000 – 2002', titulo: 'A course in conversational English', institucion: 'Talk Now Corporation', lugar: 'Pamplona', duracion: '1 año' },
    { tipo: 'curso', anio: 1997, titulo: 'Computación nivel I', institucion: 'Universidad Francisco de Paula Santander', lugar: 'Cúcuta' },

    { tipo: 'congreso', anio: '2019 – 2020', titulo: 'II Congreso Nacional de Estadística: «Potenciando la estadística como herramienta de modelación, análisis y comunicación científica en los entornos virtuales»', institucion: 'Universidad de Panamá', lugar: 'Panamá' },
    { tipo: 'congreso', anio: 2019, titulo: 'XXI Evento Internacional «La matemática, la estadística y la computación: enseñanza y aplicaciones» – MATECOMPU', institucion: 'Universidad de Matanzas', lugar: 'Matanzas, Cuba' },
    { tipo: 'congreso', anio: 2019, titulo: 'VIII Congreso Internacional sobre Educación y Aprendizaje', institucion: 'Universidade do Porto', lugar: 'Oporto, Portugal' },
    { tipo: 'congreso', anio: 2018, titulo: '18.º Congreso Internacional del Colegio Nacional de Bacteriología', institucion: 'CNB Colombia', lugar: 'Barranquilla' },
    { tipo: 'congreso', anio: 2018, titulo: 'VIII Congreso Internacional sobre Formación en Ciencia, Tecnología y Competencias – CIFCOM 2018', institucion: 'CIMTED', lugar: 'Cancún, México' },
    { tipo: 'congreso', anio: 2018, titulo: '7th International Congress on Education and Learning', institucion: 'Université Paris Diderot', lugar: 'París, Francia' },
    { tipo: 'congreso', anio: 2017, titulo: '80 Aniversario del Instituto de Medicina Tropical Pedro Kourí, IX Congreso Cubano de Microbiología y Parasitología y VI Congreso Nacional de Medicina Tropical', institucion: 'Instituto de Medicina Tropical Pedro Kourí', lugar: 'La Habana, Cuba' },
    { tipo: 'congreso', anio: 2017, titulo: 'XIX Evento Internacional «La enseñanza de la matemática, la estadística y la computación»', institucion: 'Universidad de Matanzas', lugar: 'Matanzas, Cuba' },
    { tipo: 'congreso', anio: 2017, titulo: '10.º Congreso Internacional de Salud Pública «Salud, paz y equidad social»', institucion: 'Universidad de Antioquia', lugar: 'Medellín' },
    { tipo: 'congreso', anio: 2017, titulo: 'IV Encuentro de Semilleros de Investigación en Ciencias de la Salud', institucion: 'Fundación Universitaria de Ciencias de la Salud – FUCS', lugar: 'Bogotá' },
    { tipo: 'congreso', anio: 2016, titulo: 'Socialización de resultados de investigación 2016', institucion: 'UNICIENCIA', lugar: 'Bucaramanga' },
    { tipo: 'congreso', anio: 2016, titulo: 'XVIII Evento Internacional «La matemática, la estadística y la computación: su enseñanza y aplicaciones»', institucion: 'Universidad de Matanzas', lugar: 'Varadero, Cuba', horas: 48 },
    { tipo: 'congreso', anio: 2016, titulo: 'III Cumbre Iberoamericana de Agendas Locales de Género «Mujer y ciudad»', institucion: 'Municipalistas', lugar: 'Santiago, Chile' },
    { tipo: 'congreso', anio: 2014, titulo: 'I Congreso Internacional de Investigación y Responsabilidad Social', institucion: 'UNIMINUTO', lugar: 'Bucaramanga' },
    { tipo: 'congreso', anio: 2014, titulo: 'Socialización de resultados y productos de investigación 2014', institucion: 'UNICIENCIA', lugar: 'Bucaramanga' },
    { tipo: 'congreso', anio: 2013, titulo: '8.º Congreso Internacional de Salud Pública: justicia social, derechos humanos y equidad en salud', institucion: 'Universidad de Antioquia', lugar: 'Medellín' },
    { tipo: 'congreso', anio: 2011, titulo: 'Encuentro internacional «Experiencias de transversalización de la equidad de género en la educación superior»', institucion: 'Universidad Central – FEGES', lugar: 'Bogotá' },
    { tipo: 'congreso', anio: 2011, titulo: 'Congreso Panamericano de Salud y Ambiente (asistencia y organización)', institucion: 'Universidad Industrial de Santander', lugar: 'Bucaramanga' },
    { tipo: 'congreso', anio: 2008, titulo: 'XVII Convención Científica Nacional: transferencia de conocimiento y tecnología', institucion: 'Asociación Colombiana para el Avance de la Ciencia', lugar: 'Neiva' },
    { tipo: 'congreso', anio: 2006, titulo: '4th Conference on Simulation in Industry and Services', institucion: 'EHSAL – SIS 2006', lugar: 'Bruselas, Bélgica' },
    { tipo: 'congreso', anio: 2006, titulo: 'International Workshop on Spatio-Temporal Modelling', institucion: 'Universidad Pública de Navarra', lugar: 'Pamplona, España' },
    { tipo: 'congreso', anio: 2006, titulo: 'IV Congreso de Metodología de Encuestas', institucion: 'Universidad Pública de Navarra', lugar: 'Pamplona, España' },
    { tipo: 'congreso', anio: 2006, titulo: 'XXIX Congreso Nacional de Estadística e Investigación Operativa', institucion: 'Universidad de La Laguna', lugar: 'Tenerife, España' },
    { tipo: 'congreso', anio: 2005, titulo: 'II Encuentro Iberoamericano de Pedagogía y Educación Especial', institucion: 'Universidad de Pamplona', lugar: 'Pamplona', horas: 24 },

    { tipo: 'seminario', anio: 2013, titulo: 'III Encuentro Internacional de Estudios de Género en el siglo XXI: experiencias de transversalidad', institucion: 'Universidad Autónoma de Guerrero', lugar: 'Acapulco, México' },
    { tipo: 'seminario', anio: 2009, titulo: 'Estrategia de apertura de establecimientos educativos como centros de acceso comunitario a internet – TIC', institucion: 'Ministerio de Comunicaciones, COMPARTEL y MEN', lugar: 'Pamplona' },
    { tipo: 'seminario', anio: 2008, titulo: 'Herramienta SPSS para el análisis de encuestas y estadísticas avanzadas', institucion: 'Universidad de Pamplona', lugar: 'Pamplona' },
    { tipo: 'seminario', anio: 2008, titulo: 'Financiación de proyectos de investigación y desarrollo en instituciones educativas y centros de investigación', institucion: 'Asociación Colombiana para el Avance de la Ciencia', lugar: 'Neiva' },
    { tipo: 'seminario', anio: 2008, titulo: 'Investigación en el aula', institucion: 'Asociación Colombiana para el Avance de la Ciencia', lugar: 'Neiva' },
    { tipo: 'seminario', anio: 2008, titulo: 'Capacitación SPSS versión 14', institucion: 'Universidad de Pamplona', lugar: 'Pamplona' },
    { tipo: 'seminario', anio: 2005, titulo: 'Formación de formadores para la apropiación de Estándares de Competencias Básicas y Ciudadanas', institucion: 'Ministerio de Educación Nacional', lugar: 'Bucaramanga' },
    { tipo: 'seminario', anio: 2001, titulo: 'Análisis de datos y resolución de problemas', institucion: 'Universidad de los Andes', lugar: 'Bogotá', horas: 16 },
    { tipo: 'seminario', anio: 2001, titulo: 'Primer seminario taller: manejo y aplicaciones del software SPSS', institucion: 'Universidad de Pamplona', lugar: 'Pamplona', horas: 20 },
    { tipo: 'seminario', anio: 2000, titulo: 'II Encuentro Colombiano de Matemática Educativa', institucion: 'Universidad Popular del Cesar', lugar: 'Valledupar', horas: 24 },
    { tipo: 'seminario', anio: 2000, titulo: 'Seminario taller: evaluación de competencias y proyectos pedagógicos', institucion: 'Universidad Industrial de Santander', lugar: 'Bucaramanga', horas: 12 },
    { tipo: 'seminario', anio: 1999, titulo: 'I Encuentro Colombiano de Matemática Educativa', institucion: 'Universidad Distrital Francisco José de Caldas', lugar: 'Bogotá', horas: 24 },
    { tipo: 'seminario', anio: 1998, titulo: 'II Encuentro Regional de Matemáticas', institucion: 'Universidad de Pamplona', lugar: 'Pamplona', horas: 40 },
    { tipo: 'seminario', anio: 1997, titulo: 'I Encuentro Regional de Matemáticas', institucion: 'Universidad de Pamplona', lugar: 'Pamplona', horas: 40 },
    { tipo: 'seminario', anio: 1996, titulo: 'XIV Coloquio Regional de Matemáticas', institucion: 'Universidad de Pamplona', lugar: 'Pamplona', horas: 40 },
    { tipo: 'seminario', anio: 1993, titulo: 'XII Coloquio Regional de Matemáticas', institucion: 'Universidad de Pamplona', lugar: 'Pamplona', horas: 40 },
    { tipo: 'seminario', anio: 1992, titulo: 'III Seminario Taller sobre la Enseñanza de las Ciencias Naturales y la Matemática', institucion: 'Universidad de Pamplona', lugar: 'Pamplona', horas: 16 },
    { tipo: 'seminario', anio: 1991, titulo: 'II Seminario Taller sobre la Enseñanza de las Ciencias Naturales y la Matemática', institucion: 'Universidad de Pamplona', lugar: 'Pamplona', horas: 16 }
  ],

  /* HV sección 8 · niveles: R = regular, B = bien, MB = muy bien */
  idiomas: [
    { idioma: 'Portugués', habla: null, lee: 'R', escribe: null, soporte: ['Curso básico de portugués – Universidad Santo Tomás, 120 horas (2011)'] }
  ],

  /* ---------- Trayectoria (HV secciones 3 y 4.1; PR 1.2) ----------
     area: docencia | gestion | empresa | investigacion            */
  trayectoria: [
    { inicio: 2021, fin: '2023', area: 'gestion', destacado: true,
      cargo: 'Directora del Departamento de Salud Pública',
      institucion: 'Escuela de Medicina, Universidad Industrial de Santander',
      descripcion: 'Dirección académico-administrativa del Departamento de Salud Pública de la Facultad de Salud.' },
    { inicio: 2018, fin: '2026', area: 'gestion', destacado: true,
      cargo: 'Coordinadora y ordenadora del gasto de contratos interadministrativos',
      institucion: 'Universidad Industrial de Santander – Gobernación de Santander (Secretaría de Salud Departamental)',
      descripcion: 'Productos: primera plataforma de capacitación y contenidos en salud reconocida en Colombia (.gov), aula virtual y aplicaciones en salud (georreferenciación de Equipos Básicos de Salud, Geovacuna, Bibliovisal, Ecosalud, registro de certificación de discapacidad, Economía popular, CUPS y PIC).' },
    { inicio: 2018, fin: 'Actualidad', area: 'empresa',
      cargo: 'Directora, supervisora y ordenadora del gasto de proyectos',
      institucion: 'CIBERTAXI',
      descripcion: 'Diseño e implementación de una máquina de desinfección (Powerozono-4) para el transporte público en época de COVID-19.' },
    { inicio: 2017, fin: '2018', area: 'empresa',
      cargo: 'Directora, supervisora y ordenadora del gasto de proyectos',
      institucion: 'TECNIAMARILLO (Franquicia Taxis Libres – Bogotá)',
      descripcion: 'Aplicativo para la gestión, seguimiento y control de servicios del conductor y aplicativo de usuario para la solicitud del servicio.' },
    { inicio: 2017, fin: '2017', area: 'gestion',
      cargo: 'Asesora del Centro de Investigación y Servicio Empresarial (CISE)',
      institucion: 'Corporación Universitaria de Ciencia y Desarrollo – UNICIENCIA, Bucaramanga',
      descripcion: 'Producto: primer Call Center Académico en Colombia.' },
    { inicio: 2014, fin: '2016', area: 'gestion', destacado: true,
      cargo: 'Directora del Centro de Investigaciones y Servicio Empresarial (CISE)',
      institucion: 'Corporación Universitaria de Ciencia y Desarrollo – UNICIENCIA, Bucaramanga',
      descripcion: 'Producto: 4 grupos de investigación clasificados y 1 grupo reconocido por COLCIENCIAS (hoy MINCIENCIAS).' },
    { inicio: 2014, fin: '2024', area: 'investigacion',
      cargo: 'Coordinadora y ordenadora del gasto del semillero SISPEM',
      institucion: 'Universidad Industrial de Santander – Grupo GUINDESS',
      descripcion: 'Semillero de pregrado multidisciplinar en Salud Pública, Educación, Economía, Medicina, Matemáticas y Microbiología. Posicionamiento en eventos científicos de Colombia, Cuba, España, México y Chile.' },
    { inicio: 2014, fin: '2019', area: 'empresa',
      cargo: 'Directora y supervisora de proyectos',
      institucion: 'Asociación Club Kiwanis Horizontes (Kiwanis International)',
      descripcion: 'Producto: Aula lúdico-hospitalaria del Hospital Universitario de Santander (HUS), 2014.' },
    { inicio: 2014, fin: '2016', area: 'empresa',
      cargo: 'Directora, supervisora y ordenadora del gasto de proyectos',
      institucion: 'Cooperativa multiactiva de taxistas, conductores y transportadores de servicio público multimodal de Colombia (COOPODERAMARILLO)',
      descripcion: 'Creación de la cooperativa (2014) y caracterización ergonómica de los conductores de taxis en Bucaramanga.' },
    { inicio: 2013, fin: '2018', area: 'investigacion',
      cargo: 'Analista estadística',
      institucion: 'PNUD, Cámara de Comercio de Bucaramanga, Red ORMET y UNIRED – Escuela de Economía UIS',
      descripcion: 'Asistencia técnica en perfiles productivos municipales, trabajo decente y competitividad regional.' },
    { inicio: 2013, fin: '2014', area: 'gestion',
      cargo: 'Coordinadora docente del Campus Virtual de Salud Pública (CVSP)',
      institucion: 'Organización Panamericana de la Salud (OPS) – nodo Colombia',
      descripcion: 'Administración descentralizada del campus virtual dentro del acuerdo de cooperación con la OPS.' },
    { inicio: 2013, fin: '2013', area: 'gestion',
      cargo: 'Asesora externa para registros calificados',
      institucion: 'Corporación Universitaria de Ciencia y Desarrollo – UNICIENCIA, Bucaramanga',
      descripcion: 'Creación de programas para presentar y obtener el registro calificado. Producto: estudio de egresados.' },
    { inicio: 2011, fin: '2012', area: 'docencia',
      cargo: 'Docente — Diplomado en Estadística para la investigación',
      institucion: 'Universidad Pontificia Bolivariana – UPB, Facultad de Ingeniería',
      descripcion: '' },
    { inicio: 2010, fin: 'Actualidad', area: 'docencia', destacado: true,
      cargo: 'Profesora — Salud Pública y Bioestadística',
      institucion: 'Universidad Industrial de Santander – UIS, Facultad de Salud',
      descripcion: 'Docencia universitaria e investigación. Docente invitada en posgrados de la Universidad Santo Tomás (Doctorado y Maestría en Odontología; Especialización en Auditoría en Salud) y de la Universidad de Santander – UDES (Doctorado y Maestría en Enfermedades Infecciosas).' },
    { inicio: 2010, fin: 'Actualidad', area: 'investigacion', destacado: true,
      cargo: 'Investigadora clasificada en Minciencias',
      institucion: 'Grupo de investigación en demografía, salud pública y sistemas de salud – GUINDESS-UIS (A1 Minciencias)',
      descripcion: 'Investigadora Asociada (I) – Minciencias.' },
    { inicio: 2008, fin: '2008', area: 'gestion',
      cargo: 'Directora del Departamento de Matemáticas',
      institucion: 'Facultad de Ciencias Básicas, Universidad de Pamplona',
      descripcion: '' },
    { inicio: 2005, fin: '2006', area: 'gestion',
      cargo: 'Directora del Departamento de Matemáticas y Ciencias Naturales',
      institucion: 'Facultad de Educación, Universidad de Pamplona',
      descripcion: '' },
    { inicio: 2002, fin: '2007', area: 'investigacion', destacado: true,
      cargo: 'Investigadora — Grupo de Estadística e Investigación Operativa',
      institucion: 'Universidad Pública de Navarra, España',
      descripcion: 'Formación doctoral e investigación en simulación y optimización aplicadas a la gestión sanitaria.' },
    { inicio: 2001, fin: '2001', area: 'gestion',
      cargo: 'Directora del programa de Licenciatura en Matemáticas e Informática Educativa',
      institucion: 'Universidad de Pamplona',
      descripcion: '' },
    { inicio: 1996, fin: '2010', area: 'docencia', destacado: true,
      cargo: 'Docente — Departamento de Matemáticas',
      institucion: 'Universidad de Pamplona',
      descripcion: 'Docencia universitaria en las facultades de Ciencias Básicas y Educación; docente investigadora en Educación Matemática (1999-2001) y analista estadística del grupo GICA-UP (2009-2010).' },
    { inicio: 1996, fin: '2010', area: 'docencia',
      cargo: 'Docente de informática y matemáticas',
      institucion: 'ISER, Instituto de Educación de Adultos, Caja de Compensación COMFAORIENTE y Centro de Educación Media UP',
      descripcion: 'Experiencia profesional calificada en educación media y de adultos (1996-1999 y 2010).' }
  ],

  /* ---------- Investigación ---------- */
  publicaciones: {
    articulos: [
      { anio: 2019, titulo: 'Leishmaniasis y otras enfermedades asociadas al postconflicto en Colombia', medio: 'Revista Facultad Nacional de Salud Pública, vol. 37', lugar: 'Medellín' },
      { anio: 2017, titulo: 'Validez de la prueba de actividad enzimática de la glucocerebrosidasa para el diagnóstico de enfermedad de Gaucher: revisión sistemática', medio: 'Revista MedUNAB', lugar: 'Bucaramanga' },
      { anio: 2017, titulo: 'Call Center Académico – Una estrategia pedagógica de TIC: caso Corporación Universitaria de Ciencia y Desarrollo UNICIENCIA', medio: 'Revista Visión', lugar: 'Bucaramanga' },
      { anio: 2017, titulo: 'Condiciones laborales y riesgos psicosociales en conductores de transporte público', medio: 'Revista Cubana de Salud y Trabajo', lugar: 'La Habana' },
      { anio: 2016, titulo: 'Condiciones laborales y de salud en conductores de transporte público individual de pasajeros', medio: 'Revista Médica de Panamá, vol. 38', lugar: 'Ciudad de Panamá' },
      { anio: 2016, titulo: 'Factores de riesgo asociados al dolor lumbar en conductores de transporte público', medio: 'Revista Visión', lugar: 'Bucaramanga' },
      { anio: 2016, titulo: 'Caracterización socioeconómica y vocacional de estudiantes de últimos grados de bachillerato en colegios públicos y privados: el caso del Área Metropolitana de Bucaramanga', medio: 'Revista Lebret – Universidad Santo Tomás', lugar: 'Bucaramanga' },
      { anio: 2015, titulo: 'Una mirada multivariable del clima laboral en docentes universitarios', medio: 'Revista Visión', lugar: 'Bucaramanga' },
      { anio: 2015, titulo: 'Uso de tipos abstractos de datos (TAD) en la demostración de teoremas propios de la teoría de conjuntos', medio: 'Revista Visión', lugar: 'Bucaramanga' },
      { anio: 2015, titulo: 'Influence of precipitation scavenging on the PM2.5/PM10 ratio at the Kennedy locality of Bogotá, Colombia', medio: 'Revista Facultad de Ingeniería – Universidad de Antioquia (Redin), n.º 76', lugar: 'Colombia' },
      { anio: 2014, titulo: 'Modelado de la atención en consulta externa en un hospital público: una herramienta de gestión', medio: 'Revista Gerencia y Políticas de Salud, vol. 27', lugar: 'Bogotá' },
      { anio: 2008, titulo: 'Multiobjective optimization in health care management. A metaheuristic and simulation approach', medio: 'Algorithmic Operations Research', lugar: 'Canadá' },
      { anio: 2006, titulo: 'La investigación operativa en las ciencias de la salud: ¿reconocemos estas técnicas en la literatura actual?', medio: 'Anales del Sistema Sanitario de Navarra, vol. 29', lugar: 'Navarra, España' }
    ],
    libros: [
      { anio: 2014, titulo: 'Perfil productivo del municipio de Piedecuesta', medio: 'Libro · ISBN 978-958-8902-06-7', lugar: 'Bucaramanga' },
      { anio: 2014, titulo: 'Perfil productivo del municipio de Girón', medio: 'Libro · ISBN 978-958-8902-00-5', lugar: 'Bucaramanga' },
      { anio: 2014, titulo: 'Perfil productivo del municipio de Charalá', medio: 'Libro · ISBN 978-958-8863-60-3', lugar: 'Bucaramanga' },
      { anio: 2014, titulo: 'Perfil productivo del municipio de Barbosa', medio: 'Libro · ISBN 978-958-8863-59-7', lugar: 'Bucaramanga' },
      { anio: 2001, titulo: 'Módulo de Conocimiento matemático y aptitud matemática', medio: 'Módulo · COMFAORIENTE', lugar: 'Pamplona' },
      { anio: 1999, titulo: 'Módulo de Probabilidad y Estadística', medio: 'Módulo · Universidad de Pamplona', lugar: 'Pamplona' }
    ],
    capitulos: [
      { anio: 2016, titulo: 'Análisis de las brechas de capital humano en el sector salud del departamento de Santander', medio: 'Obra colectiva «Ciencias Administrativas, Pública y Gestión Terapéutica», capítulo 20 · ISBN 978-84-16956-28-9', lugar: 'Almería, España' },
      { anio: 2016, titulo: 'Percepción de las enfermedades de transmisión sexual en población escolar, Bucaramanga-Colombia 2015', medio: 'Obra colectiva «Ciencias Administrativas y Gestión Sanitaria» · ISBN 978-84-16956-50-0', lugar: 'Almería, España' },
      { anio: 2015, titulo: 'Lineamientos para la identificación y el cierre de brechas de capital humano para las apuestas productivas departamentales del país', medio: 'Capítulo de libro · ISBN 978-958-8575-71-1', lugar: 'Bogotá' },
      { anio: 2006, titulo: 'A simulation and optimization methodology for performance analysis in health care', medio: 'Simulation in Industry and Services · ISBN 84-9769-171-7', lugar: 'EHSAL, Bruselas, Bélgica' },
      { anio: 2006, titulo: 'Evaluación y optimización de recursos sanitarios en el Hospital San Juan de Dios de Pamplona, Colombia', medio: 'XXIX Congreso Nacional de Estadística e Investigación Operativa y III Jornadas de Estadística Pública · ISBN 84-689-8553-8', lugar: 'Tenerife, España' }
    ],
    cartillas: {
      grupos: [
        { anio: '2019', titulo: 'Fortalecimiento de las acciones de la dimensión de convivencia social y la salud mental', detalle: '7 cartillas: Barbosa, Güepsa, Puerto Wilches, Curití, Capitanejo, corregimiento de Vado Real (Suaita) y corregimiento de Riachuelo (Charalá).' },
        { anio: '2023', titulo: 'Proyecto pedagógico de aula: «Sin picaduras, la escuela y la casa son más seguras»', detalle: '4 cartillas: preescolar y primero; segundo a quinto de primaria; secundaria y media vocacional; comunidad educativa (padres, madres, cuidadores y docentes).' }
      ]
    }
  },

  proyectosInvestigacion: [
    { periodo: '2021 – actualidad', titulo: 'Medio de desinfección de vehículos de transporte público por autoservicio. Producto: máquina de desinfección y limpieza Powerozono-4 (COVID-19)', entidad: 'CIBERTAXI' },
    { periodo: '2017 – 2018', titulo: 'Enfermedades asociadas al posconflicto en Colombia', entidad: 'GUINDESS – SISPEM' },
    { periodo: '2017 – 2018', titulo: 'Adaptación de la aplicación para movilidad de taxis en Bucaramanga: aplicativo del conductor y aplicativo de usuario', entidad: 'TECNIAMARILLO' },
    { periodo: '2016 – 2019', titulo: 'Proyecto de aula: levitación magnética', entidad: 'GUINDESS' },
    { periodo: '2016', titulo: 'Diseño y aplicación de conceptos de ciencias básicas en transformadores', entidad: 'GUINDESS' },
    { periodo: '2016', titulo: 'Impacto de los metales pesados en el cultivo de alimentos para el consumo humano', entidad: 'Grupo interdisciplinario GIDEC' },
    { periodo: '2016', titulo: 'Propuesta para mejorar las actividades de promoción y prevención en el municipio de Oiba (Santander) en el marco de la política de atención integral en salud', entidad: 'GUINDESS' },
    { periodo: '2015 – 2016', titulo: 'Pilotaje de APS en el marco del plan nacional de salud pública, estrategia de atención primaria en salud del departamento de Santander', entidad: 'GUINDESS' },
    { periodo: '2015', titulo: 'Estudio sobre posibles afectaciones a la salud por olores y calidad de aguas asociadas a la Central Hidroeléctrica Sogamoso (consultoría para ISAGEN)', entidad: 'GUINDESS' },
    { periodo: '2015', titulo: 'Influence of precipitation scavenging on the PM2.5/PM10 ratio at the Kennedy locality of Bogotá, Colombia', entidad: 'GUINDESS' },
    { periodo: '2015', titulo: 'El trabajo decente como factor dinamizador de la competitividad regional. Estudio Bucaramanga y Barrancabermeja', entidad: 'GUINDESS – Escuela de Economía UIS' },
    { periodo: '2015', titulo: 'Estrategia didáctica: simulación del sistema circulatorio humano representado en un modelo matemático del cálculo diferencial', entidad: 'GUINDESS – GIII' },
    { periodo: '2014 – 2015', titulo: 'Medición del cuidado de enfermería como alternativa disciplinar y formación educativa', entidad: 'GUINDESS' },
    { periodo: '2014 – 2015', titulo: 'Apoyo técnico en la transferencia e implementación de la estrategia PASE a la Equidad en Salud', entidad: 'GUINDESS' },
    { periodo: '2014 – 2015', titulo: 'Diseño metodológico e identificación de brechas de capital humano en el sector salud del departamento de Santander (incluye prueba piloto)', entidad: 'GUINDESS – Escuela de Economía UIS' },
    { periodo: '2014', titulo: 'Territorialización de la política pública de mujer y equidad de género de Santander', entidad: 'GUINDESS – GIDROP' },
    { periodo: '2014', titulo: 'Evaluación económica de la prueba de actividad enzimática de la glucocerebrosidasa', entidad: 'Instituto de Evaluación Tecnológica en Salud – IETS' },
    { periodo: '2014 – 2016', titulo: 'Caracterización de conductores y condiciones laborales y riesgos psicosociales en conductores de transporte público', entidad: 'COOPODERAMARILLO' },
    { periodo: '2013 – 2015', titulo: 'Tendencias e informe sobre el sistema cooperativo con actividad financiera del departamento de Santander', entidad: 'GUINDESS – Escuela de Economía UIS' },
    { periodo: '2013 – 2014', titulo: 'Asistencia técnica al PNUD para el perfil productivo de los municipios de Girón, Piedecuesta, Barbosa y Charalá', entidad: 'GUINDESS – Escuela de Economía UIS' },
    { periodo: '2013 – 2014', titulo: 'Los cepillos de dientes: contaminación, uso, cuidado y descontaminación', entidad: 'GUINDESS / semillero' },
    { periodo: '2013', titulo: 'Asistencia técnica y científica al pilotaje de APS y al Plan Decenal de Salud Pública 2012-2021', entidad: 'GUINDESS' },
    { periodo: '2011 – 2012', titulo: 'Fortalecimiento del modelo de Atención Primaria en Salud, salas ERA y acciones colectivas del Plan de Salud Pública en Santander', entidad: 'GUINDESS' },
    { periodo: '2011 – 2012', titulo: 'Mujeres y hombres en la universidad: perfiles sociodemográficos, educativos y laborales desde una perspectiva de género', entidad: 'GUINDESS – Convenio Nuffic (Holanda)' },
    { periodo: '2010', titulo: 'Caracterización de colombianos retornados de Venezuela', entidad: 'Grupo Psicología y Sociedad – OIM' },
    { periodo: '2009 – 2010', titulo: 'Caracterización molecular de especies de mora (Rubus sp.) cultivadas y multiplicación clonal de accesiones promisorias', entidad: 'GICA – Universidad de Pamplona' },
    { periodo: '2002 – 2003', titulo: 'Técnicas de simulación en la gestión de sistemas', entidad: 'Universidad Pública de Navarra' },
    { periodo: '2000 – 2001', titulo: 'Material educativo multimedia de apoyo a los procesos de enseñar y aprender', entidad: 'Grupo de Producción de Material Educativo Multimedia – G.P.M.' },
    { periodo: '1999 – 2001', titulo: 'Creación de la red ADEMAT de maestros que enseñan matemáticas en el municipio de Pamplona', entidad: 'Grupo Espiral' }
  ],

  proyectosExtension: [
    { periodo: '2022 – 2023', titulo: 'Fortalecimiento de procesos de gestión de la salud pública, concertación del PIC departamental y desarrollo de capacidades del talento humano en salud', entidad: 'Secretaría de Salud Departamental de Santander' },
    { periodo: '2022', titulo: 'Fortalecimiento de habilidades comunitarias para el empoderamiento del control social y la participación en salud en Santander', entidad: 'Secretaría de Salud Departamental de Santander' },
    { periodo: '2019', titulo: 'Estrategia Zona de Orientación Escolar (ZOE), estrategia comunicativa digital y caracterización de población escolar priorizada', entidad: 'Secretaría de Salud Departamental de Santander' },
    { periodo: '2019', titulo: 'Implementación del componente de salud mental en la estrategia de APS: prueba piloto en 15 municipios de Santander', entidad: 'Secretaría de Salud Departamental de Santander' },
    { periodo: '2018 – 2019', titulo: 'Fortalecimiento de las acciones de la dimensión de convivencia social y la salud mental en el departamento de Santander', entidad: 'Secretaría de Salud Departamental de Santander' },
    { periodo: '2012', titulo: 'Estudio epidemiológico municipal', entidad: 'Secretaría de Salud y Ambiente de Bucaramanga' }
  ],

  estudiosEducacionSuperior: [
    { periodo: '2024 – 2025', titulo: 'Caracterización del trabajo decente en profesionales de enfermería' },
    { periodo: '2015', titulo: 'Caracterización socioeconómica, vocacional y ocupacional de jóvenes de último grado de colegios públicos del Área Metropolitana de Bucaramanga' },
    { periodo: '2014 – 2016', titulo: 'Estrategia educativa a favor de la prevención del embarazo en niñas adolescentes en cinco instituciones educativas de Bucaramanga' },
    { periodo: '2014 – 2015', titulo: 'Evaluación de la calidad de vida relacionada con la salud en estudiantes de la Facultad de Salud de la UIS' },
    { periodo: '2014', titulo: 'Modelo de aula lúdico-pedagógica hospitalaria para la unidad de pediatría del Hospital Universitario de Santander' },
    { periodo: '2013', titulo: 'Satisfacción de los estudiantes de la UIS al momento de graduarse' },
    { periodo: '2013', titulo: 'Impacto socioeconómico de egresados – UNICIENCIA' },
    { periodo: '2012 – 2013', titulo: 'Causas de deserción y de larga permanencia estudiantil en los programas de pregrado presencial de la UIS' },
    { periodo: '2011 – 2012', titulo: 'Género y educación superior: una lectura crítica desde hombres y mujeres en la UIS (convenio Nuffic – Holanda)' }
  ],

  /* Ponencias (HV, sección 6) · tipo: exterior | colombia | posgrado */
  ponencias: [
    { anio: 2026, fecha: '8-9 octubre', lugar: 'Villavicencio, Colombia', tipo: 'colombia', evento: 'XIII Encuentro Regional y X Nacional de Grupos de Estudio, Investigación y Proyección Social en el Área de la Salud – Universidad de los Llanos', titulo: 'Ecosistema digital para la gestión integral de la salud pública en Santander: alianza academia-Estado' },
    { anio: 2026, fecha: '24-27 junio', lugar: 'Ceuta, España', tipo: 'exterior', evento: 'XXXIX Congreso Internacional de Economía Aplicada – ASEPELT 2026 (Universidad de Granada)', titulo: 'Trabajo decente en enfermería: una estructura invisible del sector salud en países emergentes' },
    { anio: 2026, fecha: '24-27 junio', lugar: 'Ceuta, España', tipo: 'exterior', evento: 'XXXIX Congreso Internacional de Economía Aplicada – ASEPELT 2026 (Universidad de Granada)', titulo: 'Georreferenciación y análisis multivariado de microterritorios como herramienta para la eficiencia en la asignación de recursos públicos en Santander, Colombia' },
    { anio: 2026, fecha: '17-18 junio', lugar: 'Ciudad de México, México', tipo: 'exterior', evento: 'Conferencia Internacional sobre Aprendizaje Estadístico y Aplicaciones de Inteligencia Artificial (ICSL-AIA-26)', titulo: 'Georreferenciación semiautomática y análisis multivariado de microterritorios y territorios para la gestión de salud pública en Santander, Colombia' },
    { anio: 2025, fecha: '26-28 noviembre', lugar: 'Bogotá, Colombia', tipo: 'colombia', evento: 'I Congreso Internacional de Desarrollo y Ciencias Económicas – Universidad Nacional de Colombia', titulo: 'Análisis empírico de las condiciones laborales de profesionales de enfermería del departamento de Santander' },
    { anio: 2024, fecha: '8-10 mayo', lugar: 'Cúcuta, Colombia', tipo: 'colombia', evento: 'III Congreso Internacional de Ciencias Empresariales y Afines – Universidad Francisco de Paula Santander', titulo: 'Satisfacción laboral en Colombia: objetividad y subjetividad' },
    { anio: 2022, fecha: '30 junio-2 julio', lugar: 'Madrid, España', tipo: 'exterior', evento: 'XII Congreso Internacional de Educación y Aprendizaje – Global Knowledge', titulo: 'La taxonomía SOLO: herramienta para la caracterización de víctimas de violencia en la Asociación de Mujeres Integradas de Santander (AMIR)' },
    { anio: 2022, fecha: '1 julio', lugar: 'Madrid, España', tipo: 'exterior', evento: 'XII Congreso Internacional de Educación y Aprendizaje – Global Knowledge', titulo: 'Influencia del estrés académico en el aprendizaje de estudiantes universitarios' },
    { anio: 2022, fecha: '29 junio-2 julio', lugar: 'Madrid, España', tipo: 'exterior', evento: 'ASEPELT: Ciencia de datos para la economía aplicada – Universidad Complutense de Madrid', titulo: 'Trabajo decente, sector salud en Santander, Colombia' },
    { anio: 2021, fecha: '18, 20, 25 y 27 mayo', lugar: 'Evento en línea', tipo: 'exterior', evento: 'FlexSim Healthcare', titulo: 'Modelo de prestación de servicios de salud basado en técnicas de simulación que imiten la atención del laboratorio de la Unidad Intermedia Materno Infantil Santa Teresa – ESE ISABU' },
    { anio: 2021, fecha: '21 mayo', lugar: 'Tuxtla Gutiérrez, Chiapas, México', tipo: 'exterior', evento: 'Encuentro de cuerpos académicos y grupos de investigación – Universidad de Ciencias y Artes de Chiapas', titulo: 'Contribuciones científicas para el mejoramiento de la salud y nutrición' },
    { anio: 2019, fecha: '19-21 noviembre', lugar: 'Matanzas, Cuba', tipo: 'exterior', evento: 'XXI Evento internacional «La enseñanza de la matemática, la estadística y la computación» – MATECOMPU, Universidad de Matanzas', titulo: 'Caracterización sociodemográfica de municipios priorizados de Santander, Colombia, para el fortalecimiento de las acciones de convivencia social y salud mental' },
    { anio: 2019, fecha: '19-21 junio', lugar: 'Oporto, Portugal', tipo: 'exterior', evento: 'VIII Congreso Internacional sobre Educación y Aprendizaje – Universidade do Porto', titulo: 'Diagnóstico de nuevas masculinidades y feminidades de niños y niñas a la luz de las representaciones sociales: oportunidad e inclusión para la protección de los derechos humanos en Santander' },
    { anio: 2018, fecha: '9-12 noviembre', lugar: 'Barranquilla, Colombia', tipo: 'colombia', evento: '18.º Congreso Internacional del Colegio Nacional de Bacteriología – CNB Colombia', titulo: 'Obtención de metano mediante digestión anaerobia: revisión bibliográfica' },
    { anio: 2018, fecha: '24-26 octubre', lugar: 'Cancún, México', tipo: 'exterior', evento: 'VIII Congreso Internacional sobre Formación en Ciencia, Tecnología y Competencias – CIFCOM 2018 (CIMTED)', titulo: 'Docentes empoderados con la enseñanza: lectura y escritura comprensiva en niños de preescolar' },
    { anio: 2018, fecha: '18-20 julio', lugar: 'París, Francia', tipo: 'exterior', evento: '7th International Congress on Education and Learning – Université Paris Diderot', titulo: 'Relación de la formación profesional y la práctica docente' },
    { anio: 2017, fecha: 'Diciembre', lugar: 'La Habana, Cuba', tipo: 'exterior', evento: '80 Aniversario del Instituto de Medicina Tropical Pedro Kourí, IX Congreso Cubano de Microbiología y Parasitología y VI Congreso Nacional de Medicina Tropical', titulo: 'Leishmaniosis y malaria: enfermedades prevalentes en Colombia' },
    { anio: 2017, fecha: '18 noviembre', lugar: 'Matanzas, Cuba', tipo: 'exterior', evento: 'XIX Evento internacional «La enseñanza de la matemática, la estadística y la computación» – Universidad de Matanzas', titulo: 'Estudio físico-matemático del método 0,2 % para calcular el esfuerzo de fluencia en materiales polímeros, como proyecto de aula' },
    { anio: 2017, fecha: '18 noviembre', lugar: 'Matanzas, Cuba', tipo: 'exterior', evento: 'XIX Evento internacional «La enseñanza de la matemática, la estadística y la computación» – Universidad de Matanzas', titulo: 'Resultados científicos para la práctica pedagógica' },
    { anio: 2017, fecha: 'Octubre', lugar: 'Medellín, Colombia', tipo: 'colombia', evento: '10.º Congreso Internacional de Salud Pública «Salud, paz y equidad social» – Universidad de Antioquia', titulo: 'Leishmaniosis y otras enfermedades asociadas al posconflicto en Colombia' },
    { anio: 2017, fecha: '23-25 agosto', lugar: 'Bogotá, Colombia', tipo: 'colombia', evento: 'IV Encuentro de semilleros de investigación en ciencias de la salud – FUCS', titulo: 'Enfermedades asociadas al posconflicto en Colombia' },
    { anio: 2016, fecha: '19 noviembre', lugar: 'Varadero, Cuba', tipo: 'exterior', evento: 'XVIII Evento internacional «La matemática, la estadística y la computación: su enseñanza y aplicaciones» – Universidad de Matanzas', titulo: 'Diseño y aplicación de ciencias básicas en transformadores' },
    { anio: 2016, fecha: '19 noviembre', lugar: 'Varadero, Cuba', tipo: 'exterior', evento: 'XVIII Evento internacional «La matemática, la estadística y la computación: su enseñanza y aplicaciones» – Universidad de Matanzas', titulo: 'Estudio de las aplicaciones prácticas de la levitación magnética' },
    { anio: 2016, fecha: '21-28 octubre', lugar: 'Almería, España', tipo: 'exterior', evento: 'II Congreso Internacional – Universidad de Almería', titulo: 'Análisis de las brechas de capital humano en el sector salud del departamento de Santander' },
    { anio: 2016, fecha: '21-23 octubre', lugar: 'Cuernavaca, México', tipo: 'exterior', evento: 'I Congreso Internacional y IX Congreso Nacional de Salud Sexual – Asociación Mexicana para la Salud Sexual A.C.', titulo: 'Percepción de conocimientos sobre infecciones de transmisión sexual en población escolar' },
    { anio: 2016, fecha: '18-21 enero', lugar: 'Santiago, Chile', tipo: 'exterior', evento: 'III Cumbre Iberoamericana de Agendas Locales de Género «Mujer y ciudad»', titulo: 'Costo en el tratamiento de mujeres con cáncer de mama en Bucaramanga, Colombia' },
    { anio: 2016, fecha: '18-21 enero', lugar: 'Santiago, Chile', tipo: 'exterior', evento: 'III Cumbre Iberoamericana de Agendas Locales de Género «Mujer y ciudad»', titulo: 'Política de género y equidad en la educación superior: caso de la Corporación Universitaria de Ciencia y Desarrollo UNICIENCIA, Bucaramanga' },
    { anio: 2015, fecha: 'Diciembre', lugar: 'Bucaramanga, Colombia', tipo: 'colombia', evento: 'Socialización de resultados y productos de investigación – UNICIENCIA', titulo: 'Gestión y avances del Centro de Investigaciones CISE – II semestre 2015' },
    { anio: 2015, fecha: '20-23 octubre', lugar: 'Barranquilla, Colombia', tipo: 'colombia', evento: 'XI Encuentro Internacional de Matemáticas – EIMAT, Universidad del Atlántico', titulo: 'Dimensión fractal Box Counting en modelo de medición de oxígeno disuelto' },
    { anio: 2015, fecha: '19-21 octubre', lugar: 'Madrid, España', tipo: 'exterior', evento: 'Cumbre Atlántica de Promoción de la Salud y Educación para la Salud – Universidad Rey Juan Carlos', titulo: 'La universidad, escenario privilegiado para el fomento de estilos de vida y conductas que potencian la salud de cada individuo' },
    { anio: 2015, fecha: '19-21 octubre', lugar: 'Madrid, España', tipo: 'exterior', evento: 'Cumbre Atlántica de Promoción de la Salud y Educación para la Salud – Universidad Rey Juan Carlos', titulo: 'Experiencia didáctica: simulación del sistema circulatorio humano, representado en un modelo matemático del cálculo diferencial' },
    { anio: 2015, fecha: '19-21 octubre', lugar: 'Madrid, España', tipo: 'exterior', evento: 'Cumbre Atlántica de Promoción de la Salud y Educación para la Salud – Universidad Rey Juan Carlos', titulo: 'Medición del cuidado de enfermería como alternativa disciplinar y formación educativa' },
    { anio: 2015, fecha: '5-8 octubre', lugar: 'Bogotá, Colombia', tipo: 'colombia', evento: 'III Congreso Nacional de Investigación e Innovación en Salud Pública – Instituto Nacional de Salud', titulo: 'Calidad de vida relacionada con la salud en estudiantes de carreras de la salud' },
    { anio: 2015, fecha: '11-13 junio', lugar: 'Buenos Aires, Argentina', tipo: 'exterior', evento: 'I Congreso Internacional sobre problemáticas en educación y salud: ¿qué necesitan niños y adolescentes de los adultos hoy? – Universidad Nacional de Buenos Aires', titulo: 'Aula lúdico-pedagógica hospitalaria para niños, niñas y jóvenes de la unidad de pediatría como un acuerdo educativo entre la escuela y el hospital' },
    { anio: 2015, fecha: '5 junio', lugar: 'Bucaramanga, Colombia', tipo: 'colombia', evento: 'Socialización de resultados y productos de investigación – UNICIENCIA', titulo: 'Gestión y avances del Centro de Investigaciones CISE – I semestre 2015' },
    { anio: 2014, fecha: '27 noviembre', lugar: 'Bucaramanga, Colombia', tipo: 'colombia', evento: 'Socialización de resultados y productos de investigación 2014 – UNICIENCIA', titulo: 'Gestión y avances del Centro de Investigaciones CISE – 2014' },
    { anio: 2014, fecha: '22-26 noviembre', lugar: 'Cartagena, Colombia', tipo: 'colombia', evento: 'XXVIII Congreso APAL y LIII Congreso Colombiano de Psiquiatría – Asociación Colombiana de Psiquiatría', titulo: 'Implementación del componente de salud mental en la estrategia de Atención Primaria en 15 municipios' },
    { anio: 2014, fecha: '13-15 noviembre', lugar: 'Valparaíso, Chile', tipo: 'exterior', evento: 'VII Congreso Internacional de Universidades Promotoras de la Salud – Pontificia Universidad Católica de Valparaíso', titulo: 'Los cepillos de dientes: contaminación, uso, cuidado y descontaminación' },
    { anio: 2014, fecha: '7-8 noviembre', lugar: 'Bucaramanga, Colombia', tipo: 'colombia', evento: 'I Congreso Internacional de Investigación y Responsabilidad Social – UNIMINUTO', titulo: 'Implementación del modelo de aula lúdico-pedagógica hospitalaria para niños, niñas y jóvenes de la unidad de pediatría de la ESE Hospital Universitario de Santander' },
    { anio: 2014, fecha: '14-18 septiembre', lugar: 'Madrid, España', tipo: 'exterior', evento: 'XVI World Congress of Psychiatry «Focusing on access, quality and humane care» – World Psychiatric Association', titulo: 'Análisis de diagnósticos relacionados con salud mental en instituciones de primer nivel de atención en 15 municipios del departamento de Santander' },
    { anio: 2013, fecha: '7 octubre', lugar: 'Bucaramanga, Colombia', tipo: 'colombia', evento: 'Encuentro académico de salud pública – UIS', titulo: 'Aplicación de técnicas de optimización y simulación en la planificación de un centro de atención primaria' },
    { anio: 2013, fecha: '6-8 junio', lugar: 'Acapulco, México', tipo: 'exterior', evento: 'III Encuentro Internacional de Estudios de Género en el siglo XXI: experiencias de transversalidad – Universidad Autónoma de Guerrero', titulo: 'Género y educación superior: una reflexión crítica, el caso de la Universidad Industrial de Santander' },
    { anio: 2011, fecha: '26-30 junio', lugar: 'Recife, Brasil', tipo: 'exterior', evento: 'XIII Conferencia Interamericana de Educación Matemática – Universidad Federal de Pernambuco', titulo: 'Proceso de Poisson: una propuesta para el sistema de salud' },
    { anio: 2009, fecha: '10-11 septiembre', lugar: 'Duitama, Colombia', tipo: 'colombia', evento: 'VIII Encuentro Nacional de Educación Matemática y Estadística – UPTC', titulo: 'Estrategia metodológica para promover habilidades cognitivas, procedimentales y actitudinales para el aprendizaje de la geometría en sexto grado' },
    { anio: 2009, fecha: '8-13 junio', lugar: 'Soacha, Colombia', tipo: 'colombia', evento: 'Capacitación a promotores de Centros de Acceso Comunitario a Internet – TIC (Ministerio de Comunicaciones, COMPARTEL, MEN)', titulo: 'Estrategia de apertura de establecimientos educativos como centros de acceso comunitario a internet' },
    { anio: 2008, fecha: '9-11 octubre', lugar: 'Pamplona, Colombia', tipo: 'colombia', evento: 'Jornada de Matemáticas – Universidad de Pamplona', titulo: 'Análisis de información · Simulación' },
    { anio: 2008, fecha: '16-18 abril', lugar: 'Cúcuta, Colombia', tipo: 'colombia', evento: 'III Seminario Binacional de Matemáticas Aplicadas – Universidad Francisco de Paula Santander', titulo: 'Modelos matemáticos con simulación y optimización en el área de la salud' },
    { anio: 2006, fecha: '6-8 diciembre', lugar: 'Bruselas, Bélgica', tipo: 'exterior', evento: '4th Conference on Simulation in Industry and Services – EHSAL', titulo: 'A simulation and optimization methodology for performance analysis in health care' },
    { anio: 2006, fecha: '27-29 septiembre', lugar: 'Pamplona, España', tipo: 'exterior', evento: 'International Workshop on Spatio-Temporal Modelling (METMAT3) – Universidad Pública de Navarra', titulo: 'Integrante del comité organizador' },
    { anio: 2006, fecha: '15-19 mayo', lugar: 'Tenerife, España', tipo: 'exterior', evento: 'XXIX Congreso Nacional de Estadística e Investigación Operativa y III Jornadas de Estadística Pública – Universidad de La Laguna', titulo: 'Evaluación y optimización de recursos sanitarios en el Hospital San Juan de Dios de Pamplona, Colombia' },
    { anio: 1998, fecha: '18-22 mayo', lugar: 'Pamplona, Colombia', tipo: 'colombia', evento: 'II Encuentro Regional de Matemáticas – Universidad de Pamplona', titulo: 'Matemática recreativa' },
    { anio: 1997, fecha: '6-10 octubre', lugar: 'Pamplona, Colombia', tipo: 'colombia', evento: 'I Encuentro Regional de Matemáticas – Universidad de Pamplona', titulo: 'Matemática recreativa' },

    { anio: 2016, fecha: '', lugar: 'Bucaramanga, Colombia', tipo: 'posgrado', evento: 'Cursos de la Maestría en Enfermedades Infecciosas – UDES', titulo: 'Bioestadística · Investigación cuantitativa' },
    { anio: '2014 – actualidad', fecha: '', lugar: 'Bucaramanga, Colombia', tipo: 'posgrado', evento: 'Seminarios de la Maestría en Pedagogía – UIS', titulo: 'Métodos cuantitativos' },
    { anio: 2012, fecha: '24 febrero-3 marzo', lugar: 'Bucaramanga, Colombia', tipo: 'posgrado', evento: 'Diplomado en Estadística para la investigación – UPB', titulo: 'Probabilidad' },
    { anio: '2011 – actualidad', fecha: '', lugar: 'Bucaramanga, Colombia', tipo: 'posgrado', evento: 'Seminarios de la Maestría en Epidemiología – UIS', titulo: 'Bioestadística II' },
    { anio: 2010, fecha: 'Marzo-abril', lugar: 'Pamplona, Colombia', tipo: 'posgrado', evento: 'Seminarios de la Maestría en Ingeniería Ambiental – Universidad de Pamplona', titulo: 'Diseño de experimentos' },
    { anio: 2009, fecha: 'Septiembre-noviembre', lugar: 'Pamplona, Colombia', tipo: 'posgrado', evento: 'Seminarios de la Maestría en Educación – Universidad de Pamplona', titulo: 'Metodología de la investigación' },
    { anio: 2000, fecha: 'Junio y noviembre-diciembre', lugar: 'Pamplona, Colombia', tipo: 'posgrado', evento: 'Seminario de Educación a Distancia – Universidad de Pamplona', titulo: 'Didáctica de la aritmética' },
    { anio: 2000, fecha: 'Marzo y abril', lugar: 'Valledupar y Montería, Colombia', tipo: 'posgrado', evento: 'Seminarios para la Especialización en Educación Matemática – Universidad de Pamplona', titulo: 'Evaluación por competencias' },
    { anio: 1999, fecha: '25-30 enero', lugar: 'Pamplona, Colombia', tipo: 'posgrado', evento: 'Seminario de Educación a Distancia – Universidad de Pamplona', titulo: 'Didáctica de la estadística y la probabilidad' },
    { anio: 1998, fecha: '25-26 septiembre', lugar: 'Santa Marta, Colombia', tipo: 'posgrado', evento: 'Seminario para la Especialización en Educación Matemática – Universidad de Pamplona', titulo: 'Pensamiento matemático' }
  ],

  formacionInvestigadores: {
    resumen: 'Directora de más de 50 trabajos de pregrado y tesis de posgrado en matemáticas, economía, ingeniería industrial, pedagogía, administración de servicios de salud, políticas públicas y derechos humanos, entre otras áreas.',
    /* HV sección 9: muestra de trabajos dirigidos en los últimos 10 años */
    dirigidos: [
      { grupo: 'maestria', anio: '2025-2026', nivel: 'Maestría en Gestión y Políticas Públicas', titulo: 'Manual de procesos para la administración del fondo local de salud municipal: estrategia para la asignación eficiente de recursos y el cumplimiento de la política pública en salud' },
      { grupo: 'maestria', anio: '', nivel: 'Maestría en Derechos Humanos', titulo: 'Estrategias de prevención de los trastornos mentales ocasionados por la violencia de género en niños y niñas de instituciones educativas en Santander, Colombia' },
      { grupo: 'maestria', anio: '2022', nivel: 'Maestría en Economía y Desarrollo', titulo: 'Eficiencia de la salud en Santander' },
      { grupo: 'maestria', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El lenguaje en la enseñanza de las expresiones algebraicas en los estudiantes del grado octavo del colegio San Benito de Palermo' },
      { grupo: 'maestria', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El proceso de enseñanza-aprendizaje significativo de los números fraccionarios en los niños del grado sexto del colegio San Benito de Palermo en el trapiche panelero, base de la economía del municipio' },
      { grupo: 'maestria', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El proceso de enseñanza-aprendizaje de la estadística dentro de la matemática en los estudiantes de grado quinto de la institución educativa Aguatendida del municipio de Carcasí' },
      { grupo: 'maestria', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El juego como estrategia didáctica en el conocimiento de los números enteros en el grado séptimo del colegio Eliseo Pinilla Rueda del municipio de Villanueva' },
      { grupo: 'maestria', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El material didáctico como estrategia lúdico-pedagógica en la construcción de aprendizaje de geometría con estudiantes de la institución educativa Los Molinos, sede Sebaruta, del municipio de Capitanejo' },
      { grupo: 'maestria', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'GeoGebra como método de enseñanza y aprendizaje de las funciones de variable real a estudiantes del grado 10-2 del colegio San Carlos del municipio de San Gil' },
      { grupo: 'maestria', anio: '2017', nivel: 'Maestría en Pedagogía', titulo: 'El microfútbol como herramienta didáctica en la enseñanza de los números naturales en los niños y niñas del grado 5.º A del Instituto Técnico Industrial Monseñor Carlos Ardila García del municipio del Socorro' },
      { grupo: 'maestria', anio: '2015', nivel: 'Maestría en Pedagogía', titulo: 'Factores de deserción estudiantil en los programas de pregrado presencial de la Universidad Industrial de Santander' },
      { grupo: 'maestria', anio: '2013', nivel: 'Maestría en Pedagogía', titulo: 'Causas de larga permanencia estudiantil en los programas de pregrado presencial de la Universidad Industrial de Santander' },
      { grupo: 'maestria', anio: '2011', nivel: 'Maestría en Educación', titulo: 'El aprendizaje estratégico para la búsqueda, selección y utilización de la información en internet' },
      { grupo: 'maestria', anio: '2010', nivel: 'Maestría en Educación', titulo: 'Estrategia metodológica para promover habilidades cognitivas, procedimentales y actitudinales para el aprendizaje de la geometría de sexto grado' },
      { grupo: 'especializacion', anio: '2016', nivel: 'Especialización en Administración de Servicios de Salud', titulo: 'Propuesta para mejorar las actividades de promoción y prevención en el municipio de Oiba-Santander dentro del marco de la política de atención integral en salud (PAIS)' },
      { grupo: 'pregrado', anio: '2017', nivel: 'Pregrado en Economía', titulo: 'Análisis de las condiciones de contratación del régimen subsidiado para el Área Metropolitana de Bucaramanga (2014-2016)' },
      { grupo: 'pregrado', anio: '2015-2016', nivel: 'Pregrado en Economía', titulo: 'Análisis de las condiciones de trabajo decente en los departamentos fronterizos de Colombia con Venezuela y Ecuador' },
      { grupo: 'pregrado', anio: '2015-2016', nivel: 'Pregrado en Economía', titulo: 'Condiciones que han incidido en el ambiente competitivo del departamento de Santander desde el pilar de la educación superior (2012-2015)' },
      { grupo: 'pregrado', anio: '2015-2016', nivel: 'Pregrado en Economía', titulo: 'Factores que han incidido en el ambiente competitivo del departamento de Santander desde el pilar de la educación superior (2008-2015)' },
      { grupo: 'pregrado', anio: '2013-2014', nivel: 'Pregrado en Economía – Escuela de Economía UIS', titulo: 'Las cooperativas con actividad financiera en el departamento de Santander (2008-2012)' }
    ],
    /* HV sección 10 */
    evaluados: [
      { grupo: 'tesis', anio: '2020', nivel: 'Maestría en Ingeniería Industrial', titulo: 'Modelos Deep Learning para el proceso de vigilancia de enfermedades arbovirales: aplicación a los datos de dengue, zika y chikungunya en Santander' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'Fortalecimiento de la competencia comunicativa a partir de situaciones problemáticas con números enteros en estudiantes de grado séptimo del colegio nacional José Antonio Galán de Charalá' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'La comprensión del valor posicional en los números naturales mediada por el uso de material concreto' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El contexto como potenciador significativo del aprendizaje de la matemática' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El juego como estrategia metodológica para fortalecer el pensamiento numérico-variacional y la resolución de problemas con números naturales en estudiantes de grado sexto de la institución educativa Los Molinos, sede Plata' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'La huerta escolar, un escenario pedagógico para el fortalecimiento del razonamiento matemático de los estudiantes de 4.º y 5.º del colegio técnico Luis Carlos Galán Sarmiento, sede E La Caldera, del municipio de Confines' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'GeoGebra, herramienta dinámica para fortalecer el razonamiento matemático en la enseñanza de la geometría en el Colegio Integrado de Cabrera' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El tangram, un material manipulativo estructurado para fortalecer el razonamiento matemático en los estudiantes de quinto grado de la Escuela Normal Superior de Oiba' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'GeoGebra: herramienta interactiva para el desarrollo del razonamiento matemático en estudiantes del grado sexto del colegio San Carlos del municipio de San Gil' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El razonamiento matemático en un ambiente de geometría dinámica' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'Uso del software de geometría dinámica para el desarrollo de procesos comunicativos' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'Fortalecer las competencias en comunicación, representación y modelación de las gráficas estadísticas a través de la resolución de problemas en los estudiantes de segundo grado' },
      { grupo: 'tesis', anio: '2018', nivel: 'Maestría en Pedagogía', titulo: 'El juego como estrategia didáctica para potenciar la resolución de problemas relacionados con proporcionalidad en estudiantes de séptimo grado' },
      { grupo: 'tesis', anio: '2017', nivel: 'Maestría en Investigación en Enfermedades Infecciosas', titulo: 'Generación de un mapa de riesgo de la ocurrencia de casos de rabia silvestre en especies domésticas en Colombia' },
      { grupo: 'tesis', anio: '2017', nivel: 'Maestría', titulo: 'Factores asociados a la prevalencia del castigo físico en población infantil colombiana: análisis de la Encuesta Nacional de Demografía y Salud del año 2015' },
      { grupo: 'tesis', anio: '', nivel: 'Maestría en Pedagogía', titulo: 'Desarrollo del pensamiento numérico en estudiantes de séptimo grado: una mirada desde el enfoque de planteamiento y resolución de problemas' },
      { grupo: 'tesis', anio: '', nivel: 'Maestría en Pedagogía', titulo: 'El juego como estrategia para desarrollar el pensamiento lógico-matemático en la resolución de problemas relacionados con las cuatro operaciones básicas en el grado quinto' },
      { grupo: 'tesis', anio: '', nivel: 'Maestría en Pedagogía', titulo: 'Producción de materiales de educación y comunicación para la prevención de la caries dental en estudiantes de pregrado universitario' },
      { grupo: 'tesis', anio: '', nivel: 'Maestría en Epidemiología', titulo: 'Variaciones en la refracción causada por la inducción de hiperglucemia en población no diabética' },
      { grupo: 'obra', anio: '2022', nivel: 'Universidad de Pamplona', titulo: 'Miradas complementarias en la construcción de una universidad saludable desde el modelo de creencias' },
      { grupo: 'obra', anio: '2022', nivel: 'ESAP', titulo: 'Perfiles productivos de Nariño 2022' },
      { grupo: 'obra', anio: '2021', nivel: 'Universidad Nacional de Colombia, sede Medellín', titulo: 'R paso a paso' },
      { grupo: 'obra', anio: '2015', nivel: 'Universidad Pedagógica y Tecnológica de Colombia – UPTC', titulo: 'Elementos de probabilidad: apoyo al estudio independiente' },
      { grupo: 'obra', anio: '', nivel: 'Universidad de Cundinamarca', titulo: 'Laboratorio aula viva: democratización del conocimiento científico en la ciudad de Girardot' }
    ],
    evaluadora: [
      'Par evaluadora del Ministerio de Educación Nacional.',
      'Jurado de tesis de pregrado y posgrado.',
      'Evaluadora de obras: libros, cartillas y ponencias de eventos científicos.'
    ]
  },

  desarrollosDigitales: [
    { titulo: 'Portal de la Secretaría de Salud de Santander', detalle: 'Diseño y puesta en marcha de la página web.' },
    { titulo: 'Aula virtual en salud (Moodle)', detalle: 'Plataforma de cursos virtuales de salud.' },
    { titulo: 'Georreferenciación y análisis multivariado de Equipos Básicos de Salud (EBS)', detalle: 'Aplicación semiautomática dispuesta en la plataforma de salud.' },
    { titulo: 'Geovacuna', detalle: 'Georreferenciación de vacunación en menores de 5 años.' },
    { titulo: 'Bibliovisal', detalle: 'Biblioteca digital en salud.' },
    { titulo: 'Ecosalud', detalle: 'Salud ambiental: registros de Inspección, Vigilancia y Control (IVC).' },
    { titulo: 'Registro de certificación de discapacidad en Santander', detalle: 'Aplicación de registro.' },
    { titulo: 'Economía popular', detalle: 'Registro de trabajadores informales.' },
    { titulo: 'CUPS y PIC', detalle: 'Aplicaciones para Códigos Únicos de Prestación de Servicios y Plan de Intervenciones Colectivas.' },
    { titulo: 'HELPTUTOR · UNISOFTH · Sistema de gestión del CISE', detalle: 'Prototipo de app de apoyo docente, software en la nube para talento humano y sistema de control del centro de investigaciones (UNICIENCIA, 2015-2016).' },
    { titulo: 'Cursos virtuales en Moodle', detalle: 'Bioestadística, estadística, matemáticas, metodología de la investigación, demografía y biometría, entre otros.' }
  ],

  redes: [
    { sigla: 'OPS', nombre: 'Organización Panamericana de la Salud', rol: 'Coordinadora docente del Campus Virtual de Salud Pública – nodo Colombia (2013-2014)', ambito: 'Internacional' },
    { sigla: 'PNUD', nombre: 'Programa de las Naciones Unidas para el Desarrollo', rol: 'Colaboradora y asistencia técnica en perfiles productivos municipales', ambito: 'Internacional' },
    { sigla: null, nombre: 'Sociedad Hispana de Investigadores Científicos', rol: 'Master Class en docencia e investigación científica', ambito: 'Internacional' },
    { sigla: 'ORMET', nombre: 'Red de Observatorios Regionales del Mercado de Trabajo', rol: 'Trabajo decente y competitividad regional', ambito: 'Nacional' },
    { sigla: 'UNIRED', nombre: 'Corporación Red de Instituciones de Educación, Investigación y Desarrollo del Oriente Colombiano', rol: 'Integrante de la red', ambito: 'Regional' }
  ],

  comites: [
    { grupo: 'calidad', titulo: 'Comités curriculares', detalle: 'Creación de programas y autoevaluación con fines de renovación de registros calificados.',
      entidades: ['Facultad de Educación – Universidad de Pamplona', 'UNICIENCIA', 'Escuela de Medicina – UIS', 'Escuela de Microbiología – UIS', 'Departamento de Salud Pública – UIS (2010-actualidad)', 'Escuela de Pedagogía – UIS'] },
    { grupo: 'calidad', titulo: 'Autoevaluación para la renovación de la acreditación', detalle: 'Escuela de Medicina, Universidad Industrial de Santander.', periodos: ['Desde 2012'] },
    { grupo: 'calidad', titulo: 'Comité primario del proceso de Formación', detalle: 'Sistema de Gestión Integrado de la UIS, liderado por la Vicerrectoría Académica.' },
    { grupo: 'convivencia', titulo: 'Comité de convivencia laboral', detalle: 'Universidad Industrial de Santander.', periodos: ['2023-2025', '2025-actualidad'] },
    { grupo: 'convivencia', titulo: 'Comité de derechos humanos', detalle: 'Universidad Industrial de Santander.', periodos: ['2025-actualidad'] }
  ]

};

/* ==========================================================
   PROPUESTA RECTORAL 2026-2030 (fuente: PR)
   ========================================================== */
window.SITE_DATA.propuesta = {
  lema: 'Conocimiento que inspira, tecnología que transforma, datos que orientan y liderazgo humano que construye futuro',
  sello: 'Multicampus Inteligente y Sostenible',

  presentacion: [
    'La Universidad de Pamplona ha construido, a lo largo de su historia, capacidades académicas, científicas y humanas que representan una oportunidad para transformar vidas y contribuir al desarrollo de las regiones. Como institución pública comprometida con la formación y la movilidad social, su futuro exige consolidar los avances alcanzados, cerrar brechas y convertir el conocimiento en mayores oportunidades para sus estudiantes, su comunidad y el territorio.',
    'Como egresada de esta casa de estudios, presento ante el Consejo Superior Universitario, la comunidad universitaria y la sociedad nortesantandereana mi propuesta de gestión rectoral. Mi vínculo con la Universidad es parte de mi historia; mi trayectoria posterior en docencia, investigación, dirección académica, gestión de proyectos y trabajo con instituciones y comunidades me ha permitido ampliar esa experiencia y regresar con una mirada integradora, rigurosa y comprometida con su transformación.',
    'Mi propuesta parte de una convicción: las universidades de excelencia no se dirigen por intuición, sino con conocimiento, diálogo, responsabilidad y decisiones sustentadas en evidencia. Por ello, propongo fortalecer el Plan de Desarrollo Institucional 2021–2030, en coherencia con la misión, la visión y los valores de la Universidad.',
    'Estos principios orientarán una gestión basada en metas verificables, seguimiento periódico y rendición de cuentas, orientada a consolidar lo que funciona, cerrar brechas y acelerar aquello que la Universidad puede hacer mejor.'
  ],

  compromisos: [
    'Excelencia académica y calidad.',
    'Sostenibilidad institucional y responsabilidad en el uso de los recursos.',
    'Investigación e innovación con impacto.',
    'Relación activa con las regiones y transformación social.',
    'Una universidad inteligente, humana y transparente, que aproveche los datos, la tecnología y la inteligencia artificial responsable para mejorar el conocimiento, las decisiones y los servicios, bajo el compromiso real de proteger el medio ambiente.'
  ],

  /* 1.3 Eslogan: componentes articulados con los pilares del PDI 2021-2030 */
  componentes: [
    { clave: 'Inspirar', titulo: 'Conocimiento que inspira', pilar: 'Docencia y excelencia académica',
      texto: 'El conocimiento es el punto de partida de la transformación universitaria. Una educación de calidad desarrolla el pensamiento crítico, despierta la curiosidad y prepara profesionales capaces de responder a los desafíos de su tiempo. Este componente expresa el compromiso con la excelencia académica, el fortalecimiento de la enseñanza y el aprendizaje, el desarrollo profesoral y la formación integral de los estudiantes.',
      puntos: ['Calidad académica verificable', 'Acreditación nacional e internacional', 'Docentes cualificados y estables', 'Egresados competitivos', 'Posicionamiento real en los diferentes rankings'] },
    { clave: 'Transformar', titulo: 'Tecnología que transforma', pilar: 'Investigación, innovación y creación artística y cultural',
      texto: 'La tecnología debe estar al servicio del conocimiento y de la solución de problemas reales. Este componente expresa el compromiso con la investigación, la innovación, la transformación digital y el uso responsable de tecnologías emergentes, incluida la inteligencia artificial, para fortalecer la investigación y los procesos académicos. La innovación debe proyectarse más allá de las aulas y los laboratorios, articulándose con la extensión, la proyección social y la cooperación nacional e internacional.',
      puntos: ['Investigación de impacto regional', 'Investigar para comprender, innovar para resolver', 'Transformar para generar valor en la sociedad', 'Investigación de impacto nacional', 'Indicadores Minciencias'] },
    { clave: 'Orientar', titulo: 'Datos que orientan', pilar: 'Eficiencia administrativa y financiera, con aplicación transversal a los cuatro pilares',
      texto: 'Una universidad que aspira a la excelencia necesita decisiones sustentadas en información confiable, análisis riguroso y evaluación permanente. Este componente propone fortalecer la planeación institucional y usar indicadores para evaluar resultados, identificar necesidades y orientar responsablemente los recursos humanos, físicos, tecnológicos y financieros, contribuyendo a la transparencia, la eficiencia, la sostenibilidad financiera y el cumplimiento de los objetivos institucionales.',
      puntos: ['Decidir con evidencia', 'Administrar con responsabilidad', 'Evaluar para mejorar', 'Analítica e IA responsable', 'Evaluación permanente de resultados', 'Ciudad universitaria y/o Multicampus inteligente'] },
    { clave: 'Construir futuro', titulo: 'Liderazgo humano que construye futuro', pilar: 'Articulación transversal de los cuatro pilares, con énfasis en extensión, proyección social e internacionalización',
      texto: 'El liderazgo humano orienta y articula toda la propuesta de gobierno universitario. Significa escuchar a la comunidad, promover el diálogo, reconocer el talento y actuar con ética en favor del bienestar colectivo y la misión institucional. También fortalece los vínculos con las comunidades, las instituciones públicas y privadas, los sectores productivos y las redes académicas nacionales e internacionales.',
      puntos: ['Inclusión y permanencia estudiantil', 'Equidad de género y bienestar', 'Salud mental y convivencia', 'Compromiso con la cultura, la historia, la paz y el territorio', 'Visibilidad universitaria'] }
  ],

  multicampus: {
    intro: [
      'La Universidad de Pamplona será un espacio donde la tecnología sirve a la ecología y los datos se convierten en la herramienta principal para tomar decisiones académicas y administrativas, logrando una operación eficiente que respeta, cuida y regenera el medio ambiente.',
      'Un Multicampus Universitario Inteligente y Sostenible se entenderá como la red de sedes de la Universidad de Pamplona interconectadas que fusiona la tecnología de vanguardia con la responsabilidad ambiental para transformar la gestión, el aprendizaje y el impacto en el territorio. No es solo la suma de edificios con computadores; es un organismo vivo que utiliza los datos y la Inteligencia Artificial (IA) para optimizar recursos mientras reduce al mínimo su huella ecológica.'
    ],
    cerebro: {
      titulo: 'El componente inteligente', subtitulo: 'El cerebro',
      texto: 'Utiliza la Inteligencia Artificial, el Big Data y el Internet de las Cosas (IoT) para que las decisiones institucionales dejen de ser intuitivas y pasen a ser predictivas.',
      items: [
        { t: 'Gestión predictiva de recursos', d: 'Sensores inteligentes que regulan automáticamente la iluminación y la climatización de las aulas híbridas según el aforo real y el clima, evitando el desperdicio de energía.' },
        { t: 'Analítica de datos para el éxito académico', d: 'Algoritmos que analizan el comportamiento y rendimiento estudiantil multicampus en tiempo real para alertar tempranamente sobre riesgos de deserción.' },
        { t: 'Optimización de la movilidad interna', d: 'Sistemas de IA que coordinan las rutas y flujos entre sedes de forma eficiente para ahorrar tiempo y combustible.' }
      ]
    },
    corazon: {
      titulo: 'El componente sostenible', subtitulo: 'El corazón',
      texto: 'Aplica políticas reales y medibles para mitigar el impacto ambiental y sembrar una cultura ecológica en la comunidad.',
      items: [
        { t: 'Transición energética real', d: 'Integración de fuentes renovables (como paneles solares) para autoabastecer la infraestructura tecnológica que requiere el Multicampus.' },
        { t: 'Mitigación y compensación de la huella de carbono', d: 'Medición sistemática de las emisiones de gases de efecto invernadero generadas por los desplazamientos intersedes y la operación digital, aplicando programas de reforestación y digitalización de procesos (cero papel).' },
        { t: 'Campus circular', d: 'Laboratorios y espacios académicos diseñados bajo principios de arquitectura bioclimática, gestión integral de residuos y reutilización de agua.' }
      ]
    }
  },

  /* II · Eje transversal: datos al servicio de la Universidad */
  ejeTransversal: {
    intro: 'La fortaleza de Aurora Gáfaro como académica-científica en el análisis de datos estará al servicio de toda la Universidad y constituirá un eje transversal de la propuesta rectoral para el período 2026-2030. El propósito es consolidar una gestión institucional en la que las decisiones académicas, investigativas, administrativas, financieras y de bienestar se fundamenten en información confiable, oportuna y accesible.',
    lineas: [
      { t: 'Gobernanza de datos', d: 'Una política institucional que establezca responsabilidades, estándares de calidad y mecanismos de protección de los datos personales, para garantizar que los datos que orientan las decisiones sean íntegros, consistentes y verificables.' },
      { t: 'Bodega institucional de datos e interoperabilidad', d: 'Integración de las fuentes de información académica, financiera, investigativa y de bienestar para reducir duplicidad y reprocesos y responder a los sistemas nacionales de información (SNIES, SPADIES, Observatorio Laboral para la Educación, entre otros).' },
      { t: 'Tableros de control', d: 'Indicadores estratégicos por programa académico, facultad y proceso institucional, con niveles de acceso diferenciados y publicación periódica para el seguimiento de las metas rectorales y la transparencia.' },
      { t: 'Analítica predictiva e IA responsable', d: 'Incorporación progresiva, con conciencia ambiental: la IA se usará sólo cuando se requiera, con criterios éticos, revisión humana y controles para prevenir sesgos, sin sustituir el juicio de las personas.' },
      { t: 'Cultura institucional de datos', d: 'Formación de directivos, docentes y personal administrativo en lectura, interpretación y uso de indicadores, para que el conocimiento técnico sea una capacidad instalada que trascienda el período rectoral.' }
    ],
    cita: { texto: 'Que la tecnología viva en la nube y parezca invisible no significa que no deje una huella en el planeta.', autor: 'Cosmin, 2026' },
    cierre: 'No se trata de acumular información ni de incorporar tecnología por sí misma, sino de construir una Universidad que aprenda de su propia evidencia, actúe con responsabilidad y tome decisiones con sentido académico, rigor científico y compromiso social.'
  },

  pilares: [
    {
      numero: 1, id: 'pilar-1',
      titulo: 'Docencia y Excelencia Académica',
      descripcion: 'Fortalecimiento de la calidad académica, los procesos de formación y el desarrollo profesoral.',
      enfoque: 'Calidad académica verificable, formación pertinente y permanencia estudiantil basada en evidencia.',
      agenda: 'Agenda para la excelencia formativa y desarrollo profesoral',
      ejes: [
        { titulo: 'Sostener y ampliar la acreditación institucional y de programas', acciones: [
          'Tablero de condiciones de calidad por programa y facultad, con alertas de vencimiento de registros calificados y acreditaciones.',
          'Plan de acompañamiento a programas por acreditar, con asesoría en autoevaluación y uso de evidencia.',
          'Articulación entre autoevaluación, planeación institucional y asignación presupuestal.',
          'Trabajar por la acreditación y calidad de los programas.',
          'Mantener o aumentar los años de acreditación institucional, de facultades y programas.',
          'Fortalecimiento de las condiciones para la Acreditación de Alta Calidad en los CREAD de la Universidad de Pamplona.'
        ] },
        { titulo: 'Permanencia y graduación oportuna', acciones: [
          'Sistema de alertas tempranas de deserción con modelos estadísticos predictivos y protocolos de intervención, para la prevención y detección oportuna.',
          'Nivelación en asignaturas con mayor índice de mortalidad académica, mediante tutorías entre pares y acompañamiento psicosocial focalizado.',
          'Seguimiento a larga permanencia y rutas de grado para estudiantes rezagados de últimos semestres con mora.',
          'Diseñar protocolos de reactivación de matrícula simplificados para que los estudiantes que hicieron una pausa académica puedan retomar sin trámites punitivos ni pérdida de créditos.'
        ] },
        { titulo: 'Currículos pertinentes, innovadores y evaluados con datos', acciones: [
          'Actualización curricular con estudios de pertinencia y seguimiento a egresados.',
          'Incluir aprendizaje basado en retos reales y proyectos del entorno en los programas: un espacio para proyectos de impacto real e interdisciplinarios, con retos formulados por municipios, empresas, ONG o el sector público, para generar impacto social desde el proceso curricular.',
          'Introducir el razonamiento cuantitativo y la alfabetización de datos como competencia transversal de todos los programas y sus actores.',
          'Internacionalización del currículo y experiencias globales de aprendizaje: asignaturas compartidas, aulas espejo, clases colaborativas internacionales y experiencias de aprendizaje con instituciones extranjeras.',
          'Crear lineamientos institucionales para una política sobre el uso de la IA frente al currículo.',
          'Plantear nueva oferta académica con certificaciones intermedias o completas.'
        ] },
        { titulo: 'Cualificación y estabilidad de la planta docente; calidad en regiones', programa: 'Centro de Excelencia y Formación Docente de Unipamplona (CEFUP)', acciones: [
          'Plan de formación posgradual y movilidad docente mediante convenios y becas.',
          'Evaluación y desarrollo docente que integre innovación pedagógica, investigación y proyección social.',
          'Formación docente en pedagogías activas e inclusivas, educación intercultural, evaluación y analítica del aprendizaje, lengua de señas colombiana, educación especial o de necesidades educativas especiales e Inteligencia Artificial, entre otras.',
          'Revisión técnica, académica y tecnológica de los Centros Regionales de Educación a Distancia (CREAD) para asegurar su conectividad y calidad educativa.',
          'Evaluación de las condiciones del docente local de los CREAD como mecanismo de verificación y diseño de estrategias.',
          'Concertar con los estudiantes de los CREAD estancias intensivas de 1 o 2 semanas en la sede central, para encuentros de actualización y/o prácticas cuando el programa lo amerite, visibilizando más la Universidad.'
        ] }
      ]
    },
    {
      numero: 2, id: 'pilar-2',
      titulo: 'Investigación, Innovación y/o Creación Artística y Cultural',
      descripcion: 'Generación de conocimiento, innovación y creación como aportes al desarrollo científico, artístico y cultural.',
      enfoque: 'Investigación de impacto regional y nacional, con recursos externos, visibilidad y talento humano de alto nivel.',
      agenda: 'Agenda de desarrollo científico e impacto social',
      ejes: [
        { titulo: 'Consolidar grupos, centros y semilleros de investigación', acciones: [
          'Convocatorias internas de investigación con criterios transparentes, seguimiento y evaluación de resultados.',
          'Programa de formación en métodos cuantitativos, cualitativos y estadística aplicada para semilleros y jóvenes investigadores.',
          'Acompañamiento para la clasificación de grupos e investigadores en Minciencias.',
          'Permitir que los investigadores regionales y/o estudiantes de semilleros del CREAD realicen estancias intensivas de 1 o 2 semanas en los laboratorios de alta tecnología de la sede central.'
        ] },
        { titulo: 'Recursos externos y proyectos con impacto territorial', acciones: [
          'Oficina de formulación de proyectos para Minciencias, Ministerios, Sistema General de Regalías y cooperación internacional.',
          'Alianzas con la gobernación, alcaldías y sector productivo mediante contratos y convenios interadministrativos.',
          'Observatorios regionales (salud, educación, mercado laboral) al servicio de las políticas públicas del territorio.',
          'Fomentar la participación de investigadores y grupos en convocatorias, proyectos y contratos.',
          'Aumentar la financiación externa de la investigación.',
          'Consolidar la relación academia, empresa y Estado.'
        ] },
        { titulo: 'Centro de Analítica de Datos e Inteligencia Artificial', programa: 'Creación del «Centro de analítica de datos e inteligencia artificial de UNIPAMPLONA»', acciones: [
          'Servicio transversal para toda la institución y su entorno: investigación, docencia, extensión y gestión institucional, articulado con iniciativas locales y nacionales.',
          'Servicios de consultoría estadística, econometría, big data, minería de datos y bioestadística a grupos internos y entidades externas (ingresos propios).',
          'Plataforma de datos abiertos y ciencia abierta, con protocolos de ética y protección de datos personales (Ley 1581 de 2012).'
        ] },
        { titulo: 'Visibilidad, producción y talento humano', acciones: [
          'Fortalecimiento de la Editorial institucional y de las revistas científicas hacia su indexación.',
          'Incentivos y apoyo a la publicación en revistas de alto impacto y a la redacción científica.',
          'Gestión de becas de maestría y doctorado y estancias de investigación nacionales e internacionales.',
          'Apoyo a eventos científicos regionales, nacionales e internacionales que cuenten con comité científico y/o académico y memorias.',
          'Escalamiento en rankings: incrementar las publicaciones indexadas aprovechando los laboratorios actualizados para ascender decididamente en el Ranking U-Sapiens y otros que miden los méritos.',
          'Utilizar diferentes medios de comunicación físicos y digitales, pertinentes a cada actuación de los integrantes de la Universidad, con responsabilidad, sentido de pertinencia y pertenencia.'
        ] }
      ]
    },
    {
      numero: 3, id: 'pilar-3',
      titulo: 'Extensión, Internacionalización y Desarrollo Social Universitario',
      descripcion: 'Articulación de la Universidad con la sociedad, proyección regional e internacional y contribución al desarrollo social.',
      enfoque: 'Una universidad cercana a su gente y comprometida con su territorio, con proyección internacional y egresados cuyo legado trasciende generaciones.',
      agenda: 'Agenda de proyección institucional y desarrollo social',
      ejes: [
        { titulo: 'Egresados y empleabilidad', acciones: [
          'Fortalecer el observatorio de egresados, empleabilidad y/o mercado laboral con seguimiento longitudinal.',
          'Encuentros por programa y facultad para retroalimentar el currículo: el egresado como invitado fundamental en la autoevaluación y creación de programas, y como observador institucional con propósito de mejora.',
          'Relación estudiante-egresado en las prácticas profesionales, el emprendimiento y los Spin-Offs universitarios.',
          'Articulación de la red de espacios culturales y patrimoniales: integración de museos, teatros y escenarios de la Universidad en una agenda cultural permanente y abierta, como referente del turismo cultural, histórico y gastronómico regional y de reconexión con los egresados.'
        ] },
        { titulo: 'Bienestar integral e inclusión para la permanencia', acciones: [
          'Consolidar una universidad inclusiva, diversa y comprometida con la permanencia, con estrategias diferenciales de acompañamiento a las trayectorias estudiantiles y comités con participación de todos los actores como órganos preventivos, conciliadores y promotores de los derechos humanos.',
          'Consolidar un sistema integral de bienestar que garantice el acceso y mejoramiento de los servicios de alimentación, transporte y salud física, con un programa de alimentación, estudio del alcance de los comedores universitarios y apoyo a la subsistencia básica de los estudiantes menos favorecidos mediante auxiliaturas estudiantiles.',
          'Crear una ruta de salud mental, con prevención, detección y atención oportuna, para todos los actores de la comunidad universitaria y su entorno familiar, liderada inicialmente por las facultades de Ciencias de la Salud y de Artes y Humanidades.',
          'Diagnóstico y revisión de políticas y normas internas que busquen la equidad, la salud física y mental y la inclusión.',
          'Impulsar el deporte como elemento de identidad, integración y orgullo institucional, mediante la recuperación de los equipos representativos, la consolidación de escuelas deportivas y un proyecto de deportes base y universitario.'
        ] },
        { titulo: 'Internacionalización con sentido', acciones: [
          'Consolidación de alianzas estratégicas para la movilidad académica internacional entrante y saliente de estudiantes, docentes e investigadores.',
          'Fortalecimiento de las competencias comunicativas: estrategia institucional para el aprendizaje, dominio y certificación de una segunda lengua.',
          'Proyección internacional de la investigación y la cooperación científica: redes, proyectos colaborativos, publicaciones conjuntas, estancias cortas y misiones de cooperación.',
          'Fortalecimiento de la visibilidad y el posicionamiento internacional de las capacidades académicas, científicas y culturales de la Universidad.',
          'Aprovechar la ubicación geopolítica de la Universidad en Norte de Santander como centro atractor de inversión científica internacional para estudiar fenómenos de frontera, migración, biodiversidad andina y cuencas hidrográficas, incluido el cambio climático en el Páramo de Santurbán.',
          'Pensar en programas de Doble Titulación Híbrida y/o por asignaturas, mediante convenios de titulación conjunta o acreditación por bloques curriculares con instituciones del exterior.'
        ] },
        { titulo: 'Extensión y proyección social en el territorio', programa: 'Creación de la unidad de prácticas, proyección y regionalización: UPProyecta', acciones: [
          'Realizar un portafolio de extensión (educación continua, asesoría, consultoría y asistencia técnica) con las 7 facultades de la Universidad, al servicio de los nortesantandereanos y su área de influencia.',
          'Diseñar proyectos sociales liderados desde las facultades para las 6 subregiones (provincias) y zonas de frontera de Norte de Santander.',
          'Estrategia integral de articulación con las instituciones educativas de los 40 municipios de Norte de Santander, los municipios de influencia de los CREAD y la sede Villa del Rosario: tránsito armónico colegio-universidad, orientación vocacional y acceso preferencial para comunidades vulnerables y rurales.',
          'Articular los programas acreditados de Alta Calidad con las vocaciones socioeconómicas de los territorios y elaborar un diagnóstico situacional para acompañar a los programas en proceso de acreditación.',
          'Consolidar una alianza estratégica entre la Universidad de Pamplona y el Hospital San Juan de Dios para optimizar la atención y el acceso a los servicios de salud de los más de 52.000 residentes permanentes del municipio y de la población flotante estudiantil.',
          'Fortalecimiento del ecosistema institucional de comunicaciones y medios: potenciar la emisora universitaria y los medios institucionales como plataformas de divulgación científica, cultural y académica.'
        ] }
      ]
    },
    {
      numero: 4, id: 'pilar-4',
      titulo: 'Gestión Administrativa y Financiera Transparente y Sostenible',
      descripcion: 'Planeación y presupuesto basados en evidencia, diversificación de ingresos y modernización institucional.',
      enfoque: 'Agenda para el fortalecimiento institucional y la sostenibilidad financiera.',
      agenda: 'Agenda para el fortalecimiento institucional y la sostenibilidad financiera',
      ejes: [
        { titulo: 'Planeación y presupuesto con evidencia', acciones: [
          'Generar los tableros de control financiero y de gestión con indicadores permanentes y claros para la toma de decisiones.',
          'Diagnosticar el costeo por programa y analizar la eficiencia del gasto mediante el análisis de datos en tiempo real.',
          'Realizar un plan de inversión plurianual alineado con el Plan de Desarrollo 2021-2030.',
          'Decidir con datos y publicar los indicadores clave con periodicidad constante.'
        ] },
        { titulo: 'Diversificación y sostenibilidad de ingresos', acciones: [
          'Crecer en recursos propios sin trasladar costos a los estudiantes: consultoría, educación continua, contrataciones, programas y proyectos especiales.',
          'Gestionar recursos de la Nación, regalías y cooperación internacional.',
          'Realizar alianzas público-privadas para investigación, infraestructura y prácticas.',
          'Gestionar los recursos con transparencia y rendir cuentas ante la comunidad.'
        ] },
        { titulo: 'Modernización institucional y talento humano administrativo', acciones: [
          'Gestionar por procesos, certificaciones de calidad y automatización de trámites prioritarios.',
          'Revisión y actualización de la normatividad interna, incluido el Estatuto General de la Universidad de Pamplona.',
          'Fortalecimiento, formación y bienestar del personal administrativo.',
          'Gobernar con diálogo: mesas permanentes con todos los estamentos y humanizar el trato de todos los actores con funciones administrativas.'
        ] },
        { titulo: 'Infraestructura y campus sostenible', programa: 'Crear el Multicampus inteligente y sostenible', acciones: [
          'Crear aulas híbridas de vanguardia y procesos eficientes, cuidando el planeta con energías limpias y metas reales de carbono neutralidad: medición científica de la huella de carbono (servidores de IA, buses entre sedes, papel impreso), reducción efectiva de emisiones (paneles solares, sensores inteligentes, digitalización del 100 % de los trámites) y compensación local (siembra de bosques y protección de ecosistemas en la región de Pamplona).',
          'Plan maestro de infraestructura física, tecnológica, laboratorios y espacios de aprendizaje.',
          'Conectar las sedes a través de la inteligencia artificial para tomar decisiones, logrando una universidad de alta calidad tecnológica que respira, respeta y protege la biodiversidad de la región.',
          'La tecnología trabajará todos los días para reducir la huella de carbono y transformar el territorio.'
        ] }
      ]
    }
  ],

  cierre: 'Con la convicción de que la Universidad de Pamplona merece una dirección académica, científica y transparente, presento esta propuesta como un compromiso con la calidad, con la permanencia de nuestros estudiantes y con el desarrollo de la región. La invitación a docentes, estudiantes, administrativos, egresados y a la sociedad nortesantandereana es a construir juntos una universidad que se distinga por su excelencia con evidencia, ciencia y humanismo.'
};
