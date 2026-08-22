# TOOLS.md

Herramientas adicionales instaladas para este proyecto.

---

## fonttools

Conversión de fuentes a formato web (TTF -> WOFF2).

- **Qué es:** librería de Python (fontTools.ttLib) usada para convertir los archivos de tipografía a `.woff2`.
- **Cómo se instaló:** `python3 -m pip install --user fonttools`
- **Paquete generado por pip:** solo bibliotecas de Python, sin ejecutable en PATH.

### ¿Dónde se instala?

| Ubicación | Descripción |
|---|---|
| `/Users/valev/Library/Python/3.9/lib/python/site-packages/` | Instalación de la librería (modo `--user`) |
| `/Users/valev/Library/Python/3.9/bin/` | Posibles scripts auxiliares (si aplica) |

Se instala en el entorno de usuario del Python 3.9 (`/usr/bin/python3`).

### Cómo eliminarla

```bash
python3 -m pip uninstall fonttools
```

---

## @google/design.md (linter oficial de DESIGN.md)

Validación del archivo `DESIGN.md` (estructura, referencias de tokens, contraste WCAG AA).

- **Qué es:** CLI oficial del formato `design.md` (`@google/design.md`).
- **Cómo se usa:** `npx -y @google/design.md lint DESIGN.md`
- **Cómo se instaló:** se ejecuta con `npx`, por lo que **no se instala de forma permanente** en el proyecto; solo se descarga temporalmente a la caché de `npm`.

### ¿Dónde se guarda lo descargado?

| Ubicación | Descripción |
|---|---|
| `~/.npm/_npx/` | Paquetes temporales descargados por `npx` |
| `~/.npm/_cacache/` | Caché general de `npm` |

### Cómo eliminarlo

```bash
# Eliminar solo los paquetes npx temporales de esta herramienta
npm cache clean --force
rm -rf ~/.npm/_npx
```

> El `node`/`npm` ya venía instalado en el sistema (`node v24.19.0`, `npm 11.17.0`), no se instaló por este proyecto.

---

> Cualquier herramienta nueva que se instale para este proyecto debe registrarse en este archivo con sus comandos de instalación y eliminación.