# ORBANIX GROUP — Web Corporativa

> **Building Value, Creating Legacy.**  
> Real Estate · Investment · Advisory en Catalunya (Barcelona, Girona, Lleida y Tarragona).

Sitio web oficial de **ORBANIX GROUP** desarrollado en **Next.js (App Router)**, **React 19** y **TypeScript**, optimizado para máximo rendimiento, SEO y despliegue continuo en **Vercel**.

---

## 🚀 Tecnologías

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack, SSG & Server Components)
- **UI & Lenguaje:** React 19 + TypeScript
- **Estilos:** CSS Vanilla estructurado con diseño responsivo y estética premium
- **Despliegue:** Optimizado para [Vercel](https://vercel.com/) (zero-config)

---

## 📂 Estructura del Proyecto

```text
src/
├── app/                  # Rutas y páginas de la aplicación
│   ├── layout.tsx        # Layout global con Header, Footer y Metadata SEO
│   ├── page.tsx          # Portada principal (Home)
│   ├── grupo/            # El Grupo (Visión, Filosofía, Mercado)
│   ├── areas/            # Áreas de negocio y detalle dinámico [slug]
│   ├── activos/          # Catálogo inmobiliario con buscador y detalle [id]
│   ├── equipo/           # Estructura del equipo multidisciplinar
│   ├── institucional/    # ORBANIX Institutional (Mandatos y carteras)
│   ├── contacto/         # Formulario de contacto interactivo
│   ├── legal/            # Aviso Legal
│   ├── privacidad/       # Política de Privacidad
│   └── cookies/          # Política de Cookies
├── components/           # Componentes reutilizables (Header, Footer, AssetCard, etc.)
├── data/                 # Contenidos corporativos y catálogo de activos
└── types/                # Definiciones de tipos TypeScript
```

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en local (http://localhost:3000)
npm run dev

# Compilar para producción (SSG)
npm run build

# Iniciar servidor de producción local
npm run start
```

---

## 🌐 Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **Add New Project** y selecciona el repositorio `orbanix_web`.
4. Vercel detectará automáticamente Next.js. Haz clic en **Deploy**.
