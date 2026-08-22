# Mi Landing de CV

> Arquitectura de información, diseño y contenido — en lenguaje natural.
> Documento complementario a `DESIGN.md` · El contenido define qué va y en qué orden; `DESIGN.md` gobierna cómo se ve.

Este documento define la arquitectura de información, el contenido, el orden, los enlaces y el comportamiento funcional. Los colores, tipografías, dimensiones, sombras, formas y demás decisiones visuales se toman únicamente de `DESIGN.md`.

**Salida esperada:** un archivo `CV.md` y una sola landing responsiva en un único HTML.
**No crear:** una página adicional de Proyectos, páginas separadas por proyecto ni un preloader entre secciones.

---

## 1. Estructura general y navegación

Mi CV es una página de una sola vista (one-page). El preloader aparece únicamente durante la carga inicial: el ícono de marca se desplaza hacia arriba y descubre la landing, y se queda como el ícono de mi marca al centro del menú fijo; no vuelve a mostrarse al navegar entre secciones. El menú permanece fijo en la parte superior. El ícono de marca lleva a Inicio y los enlaces llevan a Sobre mí, Mis Proyectos y Contacto. Todos los enlaces internos realizan un desplazamiento suave dentro del mismo HTML.

El cursor personalizado funciona en escritorio: sigue el movimiento de manera suave y deja un trazo temporal. En dispositivos táctiles se desactiva. En móvil, la navegación se convierte en un menú desplegable, pero conserva los mismos destinos y el mismo orden. Las interacciones no deben impedir la lectura, la navegación con teclado ni el acceso a los enlaces.

El orden va: primero Inicio, luego Sobre mí, después la sección más larga —la de mis proyectos— y, por último, cómo contactarme. Todo debe ser responsivo y aplicar mi sistema de diseño.

## 2. Inicio (hero)

El hero ocupa la primera pantalla: se ve completa en escritorio y completa en móvil, y utiliza una sola columna. El contenido se presenta centrado en este orden: logo completo en gran formato, frase de presentación, botones de navegación y accesos a redes sociales. No aparece una fotografía personal en esta sección.

- **Texto principal:** "Transformo ideas en experiencias visuales claras, vibrantes y con personalidad".
- **Botón "Conóceme":** lleva a Sobre mí.
- **Botón "Ver proyectos":** lleva a Proyectos.
- **Íconos de redes:** utilizan los mismos enlaces definidos en Contacto.

## 3. Sobre mí

La sección se organiza en dos bloques de contenido: a la izquierda aparece mi fotografía convertida en GIF y a la derecha mi presentación. En móvil, el GIF aparece primero y el texto después.

- **Texto de presentación:** "Soy Valeria/Victoria, diseñadora gráfica digital y estudiante de la Universidad La Salle. Me interesa desarrollar proyectos de identidad visual, diseño editorial, UX/UI, ilustración, campañas y 3D. Disfruto aprender nuevas herramientas, explorar campos distintos y combinar creatividad, organización y estrategia".
- **Texto complementario:** "Soy una persona curiosa y disfruto comprender el propósito detrás de cada proyecto. Para mí, el diseño consiste en configurar nuevas experiencias y medios; al experimentar con ideas, formas y movimiento es posible crear algo claro, útil y memorable".

### Educación (sub-sección)

Grupo de tarjetas:

1. **Licenciatura en Diseño Gráfico Digital** — Universidad La Salle · 2023–2027
2. **Intercambio académico** — Ulster University, Irlanda del Norte · 2026
3. **Finalista en a! Diseño** — Categorías de Identidad de Marca y Tipografía · 2026

En escritorio, las tarjetas pueden arrastrarse horizontalmente y continúan en un loop. En móvil, funcionan como un carrusel horizontal que puede recorrerse con el dedo. También deben incluir controles alternativos para que el contenido no dependa únicamente del arrastre.

### Habilidades (sub-sección)

Segundo grupo de tarjetas. Cada tarjeta contiene el nombre del área, una imagen representativa y una descripción breve del tipo de trabajo que realizo.

| Área | Descripción breve |
|---|---|
| Diseño de Identidad | Construcción de conceptos, logotipos y sistemas visuales coherentes |
| Ilustración | Creación de recursos gráficos que complementan una idea o narrativa |
| Campañas | Desarrollo de conceptos y adaptaciones para distintos medios y formatos |
| Diseño UX/UI | Organización de información, flujos, interfaces y prototipos |
| Diseño editorial | Uso de retículas, jerarquías y composición para ordenar contenidos |
| Modelado 3D | Creación, texturizado y presentación de objetos o escenas tridimensionales |

En escritorio, las tarjetas pueden arrastrarse como una secuencia continua. En móvil, se recorren mediante desplazamiento horizontal. La tarjeta activa debe poder abrirse también con teclado o toque.

### Cierre de la sección

Cita que me inspira:

> "Si podemos sintonizar con la idea de crear cosas y compartirlas sin depender del resultado es más probable que la obra se nos revele en su verdadera expresión." — Rick Rubin

## 4. Mis Proyectos

Sección que reúne una selección de trabajos de Identidad, Ilustración, Campañas, UX/UI, Diseño editorial y Modelado 3D. Se presenta al menos un proyecto representativo por categoría.

Cada proyecto contiene:

- Nombre del proyecto y categoría.
- Año de realización y mi rol o participación.
- Descripción breve del objetivo y del resultado.
- Etiquetas relacionadas con disciplina, herramientas o entregables.
- Galería de imágenes y, cuando corresponda, video mp4.

La galería de cada proyecto se desplaza horizontalmente y conserva la proporción completa de las imágenes, sin recortarlas. En móvil se recorre con el dedo. Todo el contenido permanece dentro de `#proyectos`; no se generan archivos HTML adicionales ni páginas independientes para ampliar cada caso.

## 5. Contacto

La sección reúne mis medios de contacto en una fila de enlaces con ícono. En móvil, los enlaces se apilan o se distribuyen en varias filas sin alterar su destino.

- **Correo:** vm.8612@gmail.com
- **Teléfono:** +52 56 11 24 07 09
- **Behance:** https://www.behance.net/valevicky
- **Instagram:** @_.doblev_

## 6. Pie de página

Pie de página morado oscuro que presenta nuevamente mi logo completo en su versión blanca; al darle clic lleva a Inicio. Lo acompaña la frase de cierre "Hasta aquí llega la página, pero no las ideas". También incluye mis íconos de redes sociales y medios de contacto, utilizando los mismos enlaces de la sección de Contacto.
