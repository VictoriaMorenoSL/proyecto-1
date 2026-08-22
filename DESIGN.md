---
version: alpha
name: Valeria Victoria Moreno San Luis
description: Sistema de diseño de la marca personal — vibrante, ordenada, centrada en la creatividad y el diseño. Contrastes de morado y naranja saturados, espacios amplios, tipografía amigable y formas orgánicas.
colors:
  primary: "#7D6EFF"           # Morado vibrante — color principal: títulos, identidad, contornos de botones
  primary-dark: "#232653"      # Morado oscuro — cuerpos de texto y elementos de alto contraste
  primary-medium: "#424A93"    # Morado medio — textos secundarios e info complementaria
  primary-container: "#CAC7FF" # Morado claro — fondos decorativos, bordes, halos y detalles suaves
  primary-deep: "#6A5AE6"      # Morado más oscuro (REVISAR: nuevo, para contraste AA en rellenos con texto blanco)
  accent: "#F24210"            # Naranja vibrante — color de acento: títulos destacados, botones, acciones
  accent-light: "#FF7150"      # Naranja claro — enlaces e interacciones secundarias
  accent-deep: "#CC3808"       # Naranja más oscuro (REVISAR: nuevo, para contraste AA en rellenos con texto blanco)
  surface: "#F4F3F2"           # Gris muy claro — fondo base
  surface-light: "#FFFFFF"     # Blanco — tarjetas, campos y secciones de contraste
typography:
  headline-display:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: 700
    lineHeight: 58px
  headline-lg:
    fontFamily: Quicksand
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
  headline-md:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: 700
    lineHeight: 40px
  headline-sm:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
  body-lg:
    fontFamily: Nunito
    fontSize: 20px
    fontWeight: 300
    lineHeight: 30px
    # REVISAR: cursiva (font-style: italic) descrita en el doc; el formato no tiene clave fontStyle.
  body-md:
    fontFamily: Nunito
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-sm:
    fontFamily: Nunito
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px # REVISAR: interlineado no especificado en el doc
  label-nav:
    fontFamily: Nunito
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px # REVISAR: interlineado no especificado en el doc
  label-button:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px # REVISAR: interlineado no especificado en el doc
  label-link:
    fontFamily: Nunito
    fontSize: 18px
    fontWeight: 600
    lineHeight: 28px # REVISAR: interlineado no especificado en el doc
  label-tag:
    fontFamily: Nunito
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px # REVISAR: interlineado no especificado en el doc
spacing:
  unit: 8px
  micro: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xl-2: 40px
  xl-3: 48px
  xl-4: 64px
  xl-5: 80px
  xl-6: 96px
  xl-7: 120px
  content-width: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
  columns-desktop: 12
  columns-tablet: 8
  columns-mobile: 4
rounded:
  none: 0px   # Fotografías y tarjetas de proyectos: estética limpia y editorial
  sm: 8px     # Componentes secundarios y detalles
  md: 12px    # Campos de texto
  lg: 16px    # Etiquetas y componentes secundarios
  pill: 40px  # Botones
elevation:
  card: "0 6px 18px rgba(0, 0, 0, 0.10)"
  card-raised: "0 14px 32px rgba(0, 0, 0, 0.18)"
  modal: "0 18px 48px rgba(0, 0, 0, 0.18)"
  floating: "0 20px 56px rgba(0, 0, 0, 0.22)"
components:
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.accent}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    padding: 12px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.surface-light}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    padding: 12px
    height: 44px
  button-secondary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.surface-light}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.accent-light}"
    typography: "{typography.label-link}"
  button-ghost-hover:
    textColor: "{colors.accent}"
  link-inline:
    textColor: "{colors.accent-light}"
    typography: "{typography.label-link}"
  link-inline-hover:
    textColor: "{colors.accent}"
  nav-link:
    textColor: "{colors.primary-dark}"
    typography: "{typography.label-nav}"
  nav-link-hover:
    textColor: "{colors.accent}"
  nav-link-active:
    textColor: "{colors.primary-dark}"
  card-project:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 24px
  card-education:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.surface-light}"
    rounded: "{rounded.none}"
    padding: 24px # REVISAR: padding no especificado en el doc (asumido igual a card-project)
  chip-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-dark}"
    typography: "{typography.label-tag}"
    rounded: "{rounded.lg}"
    padding: 8px # REVISAR: padding no especificado (asumido)
  field-text:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.primary-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px
  text-secondary:
    textColor: "{colors.primary-medium}"
    typography: "{typography.body-sm}"
  divider:
    backgroundColor: "{colors.primary-container}"
    size: 2px
  cursor:
    backgroundColor: "{colors.primary}"
    size: 16px
---

# Valeria Victoria · Sistema de Diseño

## Overview

Marca personal de **Valeria Victoria Moreno San Luis**: portafolio y proyectos presentados de forma visual y escrita. Comunica una estética **vibrante, ordenada y creativa**, con contrastes de morado y naranja saturados que transmiten calidez y confianza. Prioriza la claridad con composiciones limpias e interactivas, espacios amplios, tipografía amigable y formas orgánicas que aportan movimiento y espontaneidad. Es una marca **creativa, alegre y expresiva** que equilibra organización y dinamismo: cada proyecto tiene su propio espacio sin perder una identidad reconocible.

> **Para revisar** — Datos que no estaban en el documento original y fueron completados con un valor razonable:
> - Color de las sombras asumido negro (`rgba(0,0,0,…)`).
> - Interlineados de etiquetas, navegación, botones y textos pequeños (asumidos).
> - Padding de las etiquetas/tags y de las tarjetas de educación y experiencia (asumidos).
> - Halo de foco de campos: asumido `{colors.primary}` a baja opacidad.
> - El formato especifica `font-style` mediante el front matter no es soportado: la cursiva de `{typography.body-lg}` se aplica en CSS.
> - **Nuevos tonos añadidos para accesibilidad:** `{colors.primary-deep}` y `{colors.accent-deep}` fueron creados porque el blanco sobre `{colors.primary}` o `{colors.accent}` no alcanza el contraste AA (4.5:1). Revisa que respeten la identidad de la marca.

## Colors

La paleta se construye con **dos colores de alto contraste** (morado y naranja) más sus variaciones.

| Token | Valor | Rol |
|---|---|---|
| `{colors.primary}` | `#7D6EFF` | Color principal: títulos, identidad de marca y contorno de botones. |
| `{colors.primary-dark}` | `#232653` | Cuerpos de texto y elementos de mayor contraste y legibilidad. |
| `{colors.primary-medium}` | `#424A93` | Textos secundarios, info complementaria y menor jerarquía. |
| `{colors.primary-container}` | `#CAC7FF` | Fondos, elementos decorativos y presencia suave. No como fondo de lectura. |
| `{colors.primary-deep}` | `#6A5AE6` | Morado profundo: rellenos de hover y fondos con texto blanco (contraste AA). *(REVISAR)* |
| `{colors.accent}` | `#F24210` | Acento: títulos destacados, botones y elementos importantes. |
| `{colors.accent-light}` | `#FF7150` | Enlaces e interacciones secundarias. |
| `{colors.accent-deep}` | `#CC3808` | Naranja profundo: rellenos de hover y fondos con texto blanco (contraste AA). *(REVISAR)* |
| `{colors.surface}` | `#F4F3F2` | Fondo base. |
| `{colors.surface-light}` | `#FFFFFF` | Contraste máximo en secciones y separación de contenidos. |

Reglas: combinar siempre un color dominante y uno de acento; nunca saturar un componente con demasiados colores. El blanco separa contenidos; el gris muy claro es el fondo base.

## Typography

Dos familias con roles específicos:

- **Nunito** — tipografía principal: cuerpo de texto, navegación y contenido general.
- **Quicksand** — tipografía secundaria: títulos, botones y énfasis. **Quicksand Bold** para los títulos más importantes.

| Token | Familia | Peso | Tamaño | Interlineado | Uso |
|---|---|---|---|---|---|
| `{typography.headline-display}` | Quicksand | 700 | 48px | 58px | Título display |
| `{typography.headline-lg}` | Quicksand | 700 | 40px | 48px | Título 1 |
| `{typography.headline-md}` | Quicksand | 700 | 32px | 40px | Título 2 |
| `{typography.headline-sm}` | Quicksand | 600 | 24px | 32px | Título 3 |
| `{typography.body-lg}` | Nunito | 300 *cursiva* | 20px | 30px | Intro o destacados |
| `{typography.body-md}` | Nunito | 400 | 18px | 28px | Cuerpo principal |
| `{typography.body-sm}` | Nunito | 400 | 16px | 24px (R) | Textos pequeños |
| `{typography.label-nav}` | Nunito | 600 | 16px | 24px (R) | Navegación |
| `{typography.label-button}` | Quicksand | 700 | 16px | 24px (R) | Etiqueta de botón |
| `{typography.label-link}` | Nunito | 600 | 18px | 28px (R) | Enlaces |
| `{typography.label-tag}` | Nunito | 600 | 14px | 20px (R) | Etiquetas (skills/categorías) |

La jerarquía se construye con cambios de **tamaño, peso y color**. *(R) = interlineado asumido, pendiente de revisión.* El cuerpo de texto nunca baja de **16px**. Los títulos principales nunca bajan de **28px**.

## Layout

Espaciado basado en una **unidad de 8px**, con escala `{spacing.micro}` (4px) y `{spacing.xs}` a `{spacing.xl-7}` (8 → 120px).

- **Botones:** 12–16px vertical, 24–32px horizontal (`{spacing.sm}`–`{spacing.md}` / `{spacing.lg}`–`{spacing.xl}`).
- **Tarjetas y contenedores:** 24–32px internos (`{spacing.lg}`–`{spacing.xl}`).
- **Elementos relacionados:** separados 8–24px (`{spacing.xs}`–`{spacing.lg}`).
- **Secciones principales:** separación vertical 80–120px (`{spacing.xl-5}`–`{spacing.xl-7}`).
- **Contenido:** ancho máximo `{spacing.content-width}` (1200px).

Retícula responsiva (4 breakpoints):

| Dispositivo | Ancho | Columnas | Márgenes | Separación de secciones |
|---|---|---|---|---|
| Móvil | 320–599px | 4 | 16px | 64px |
| Tableta | 600–1023px | 8 | 32px | 80px |
| Escritorio | 1024–1439px | 12 | 64px | 96px |
| Amplio | 1440px+ | centrado | — | hasta 120px |

Medianiles de `{spacing.gutter}` (24px). En móvil el navegador se convierte en menú y las tarjetas pasan a una sola columna; logotipo y fotografía del hero se apilan. La navegación usa desplazamiento suave con transiciones de 200–400ms. El espacio en blanco es generoso e intencional: el contenido nunca debe sentirse saturado y las secciones deben distinguirse claramente.

## Elevation & Depth

Se construye con **sombras suaves, superposición, bloques de color y cambios sutiles de escala**.

| Token | Sombra | Uso |
|---|---|---|
| `{elevation.card}` | `0 6px 18px rgba(0,0,0,0.10)` | Base de tarjetas |
| `{elevation.card-raised}` | `0 14px 32px rgba(0,0,0,0.18)` | Tarjetas en hover (y elevación real de 4px) |
| `{elevation.modal}` | `0 18px 48px rgba(0,0,0,0.18)` | Menús y modales |
| `{elevation.floating}` | `0 20px 56px rgba(0,0,0,0.22)` | Elementos flotantes |

No se usan sombras más profundas que `{elevation.floating}`. La intención es una interfaz **viva, interactiva y organizada, sin perder ligereza**.

## Shapes

El lenguaje de formas es **orgánico y editorial**:

- **Esquinas rectas** (`{rounded.none}`, 0px): fotografías y tarjetas de proyectos.
- **8–16px** (`{rounded.sm}`–`{rounded.lg}`): campos, etiquetas y componentes secundarios.
- **40px** (`{rounded.pill}`): botones.
- **Círculos pequeños:** viñetas y detalles gráficos en morado o naranja.
- **Flor del isotipo:** ícono identificador junto al nombre de la página; puede aparecer puntual en esquinas.
- **Líneas curvas y figuras orgánicas:** movimiento y espontaneidad, sin alterar las fotografías.

## Components

### Botones
- **Primario:** fondo transparente, contorno 2px `{colors.primary}`, texto `{colors.accent}`, `{typography.label-button}`, `{rounded.pill}`, padding 12×24px, alto mínimo 44px. Hover: relleno morado profundo `{colors.primary-deep}` + texto blanco (contraste AA).
- **Secundario/alterno:** contorno 2px `{colors.accent}`, texto `{colors.primary}`; hover con relleno naranja profundo `{colors.accent-deep}` + texto blanco (contraste AA).
- **Clic:** se comprime al 94%, se desplaza 2px hacia abajo y rebota; **200–300ms**.
- **Fantasma (enlace):** sin fondo ni contorno, texto `{colors.accent-light}` en `{typography.label-link}`. Hover: `{colors.accent}` + subrayado.

> Corrección de accesibilidad: el blanco sobre `{colors.primary}` (3.79:1) o `{colors.accent}` (3.78:1) no cumple AA; por eso los estados de relleno usan los tonos profundos `{colors.primary-deep}` y `{colors.accent-deep}`.

### Cursor e interacción
Círculo morado de 16px (`{components.cursor}`, `{colors.primary}`) que crece sobre enlaces, botones y proyectos; deja un trazo suave y temporal al desplazarse. Al hacer clic se comprime y rebota. En dispositivos táctiles se desactiva. Debe ser sutil y no dificultar lectura ni navegación.

### Tarjetas y contenedores
- **Proyectos:** fondo `{colors.surface}`, texto `{colors.primary-dark}` en `{typography.body-md}`, esquinas rectas, padding 24px. Hover: elevación de 4px + `{elevation.card-raised}`. Las fotos se centran al hacer hover; la imagen va arriba y el título en Quicksand Bold. Se recorren horizontalmente con drag.
- **Educación y experiencia:** fondos de color con texto blanco; el morado oscuro `{colors.primary-dark}` es la opción por defecto y `{colors.primary-deep}` o `{colors.accent-deep}` las variantes vibrantes, todas con contraste AA.
- **Divisores y detalles decorativos:** se usan con `{colors.primary-container}` en trazos finos (`{components.divider}`).
- **Hero:** ancho completo, logotipo + fotografía + intro + botón; fondo `{colors.surface}`, 64px horizontales, 96–120px verticales, ancho máx. 1200px, fotografía con esquinas rectas.

### Navegación y enlaces
- **Menú principal:** `{typography.label-nav}` en `{colors.primary-dark}`; hover `{colors.accent}` + subrayado 2px; activo con subrayado morado 3px.
- **Enlaces en texto:** `{colors.accent-light}` sin subrayado; hover `{colors.accent}` + subrayado. Nunca distinguir enlaces solo por color.
- **Títulos-enlace:** Quicksand Bold en `{colors.primary}`; hover naranja.

### Campos y formularios
Fondo blanco, texto `{colors.primary-dark}` en `{typography.body-md}`, padding 12×16px, borde 2px `{colors.primary-container}`, `{rounded.md}`. Foco: borde `{colors.primary}` + halo suave (asumido a baja opacidad). Placeholder y textos secundarios `{colors.primary-medium}` (token `{components.text-secondary}`); etiquetas `{typography.label-nav}`.

### Etiquetas, avatar y habilidades
- **Tags (skills/categorías/programas):** fondo `{colors.surface}`, texto `{colors.primary-dark}` en `{typography.label-tag}`, contorno `{colors.primary}` (padding pendiente de revisión), `{rounded.lg}`.
- **Avatar:** fotografía personal rectangular, esquinas rectas, solo en la pestaña principal.
- **Contacto:** botones con ícono + etiqueta, texto `{colors.accent-light}`, ícono `{colors.primary}`, contorno 2px; hover texto `{colors.accent}`.
- **Habilidades:** círculos pequeños en morado o naranja seguidos del texto.

## Do's and Don'ts

### Sí
- Usa `{colors.primary}` como color principal y `{colors.accent}` para contrastes, enlaces y acciones.
- Mantén `{colors.surface}` como fondo base; usa blanco para tarjetas, campos y secciones de contraste.
- Cuerpo en `{typography.body-md}` (Nunito Regular 18px) en escritorio; nunca por debajo de 16px.
- Usa Quicksand para títulos, botones y énfasis; reserva Quicksand Bold para títulos principales.
- Espaciado basado en la unidad de 8px; separa secciones 80–120px.
- Fotografías y tarjetas de proyecto con esquinas rectas (0px).
- Botones `{rounded.pill}` (40px); campos, etiquetas y secundarios 8–16px.
- Estados hover mediante rellenos de color, subrayados, sombras o movimientos sutiles.
- Profundidad mediante sombras, superposiciones y formas orgánicas.
- Tarjetas de educación/experiencia con fondos de color y texto blanco; usa los tonos profundos (`{colors.primary-deep}`, `{colors.accent-deep}`) si el fondo es vibrante para mantener contraste AA.
- Cursor circular y su trazo animado de forma sutil.

### No
- No uses `{colors.primary-container}` como fondo; resérvalo para bordes, halos y detalles gráficos.
- No redondees esquinas de fotografías ni tarjetas de proyecto.
- No uses Nunito Light en cuerpos pequeños o extensos (pérdida de legibilidad).
- No combines demasiados colores en un mismo componente: un dominante y un acento.
- No uses sombras más profundas que `{elevation.floating}`.
- No hagas botones menores a 44px de alto ni reduzcas su área interactiva.
- No uses animaciones de clic mayores a 300ms ni movimientos que retrasen la navegación.
- No distingas enlaces solo por color; usa subrayado o cambios visibles en hover.
- No agregues texturas, formas o animaciones que compitan con fotografías y proyectos.
- No incorpores otras familias tipográficas en la jerarquía principal.