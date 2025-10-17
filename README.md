# Scent of Self - Perfume E-commerce Website

A modern, minimalist e-commerce website for Scent of Self perfumes, inspired by Zara's clean aesthetic.

## Features

- 🎨 Modern, Zara-inspired UI design
- 🛍️ Product listing and detail pages
- 🛒 Shopify integrated checkout
- 📱 Fully responsive design
- ⚡ Built with React + TypeScript + Vite
- 💳 Secure payments via Shopify

## Getting Started

### Prerequisites

- Node.js (v22 or higher recommended)
- npm

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd scentofselfperfumes
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. **Configure Shopify** (see [SHOPIFY_SETUP.md](SHOPIFY_SETUP.md) for detailed instructions):
   - Create a `.env` file in the project root
   - Add your Shopify credentials:
     ```env
     VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
     VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here
     ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
scentofselfperfumes/
├── public/
│   └── images/          # Product images
├── src/
│   ├── components/      # Reusable components (Header, Footer)
│   ├── context/         # React context (CartContext)
│   ├── data/           # Product data
│   ├── pages/          # Page components (Home, Shop, ProductDetail, Cart)
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
└── package.json
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Shopify Buy SDK** - E-commerce integration
- **CSS3** - Styling

## Brand Information

**Scent of Self**  
"The scent that becomes you"

- Crafted to reflect who you are
- Follow us on Instagram: @scentofselfperfumes
- DM to order!

## Products

Currently featuring:
- **SILKY EAU DE PARFUM** - €49,95
  - Available in 30ml, 50ml, and 100ml

## Design Philosophy

The website follows a minimalist, Zara-inspired design with:
- Clean typography using Inter font
- Subtle hover effects
- Spacious layouts
- High-quality product imagery
- Mobile-first responsive design

## License

© 2025 Scent of Self. All rights reserved.

