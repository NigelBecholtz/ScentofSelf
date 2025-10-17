# Shopify Integration Setup Guide

## 🛍️ Step 1: Create Shopify Store

If you don't have one yet:
1. Go to https://www.shopify.com
2. Start a free trial
3. Set up your store

## 🔑 Step 2: Get Shopify API Credentials

### Get Storefront Access Token:

1. **Go to your Shopify Admin**
   - Visit: `https://YOUR-STORE.myshopify.com/admin`

2. **Navigate to Settings → Apps and sales channels**

3. **Click "Develop apps"** (at the bottom)

4. **Click "Create an app"**
   - Name: "Scent of Self Website"
   - Click "Create app"

5. **Configure Storefront API**
   - Click "Configure Storefront API scopes"
   - Enable these scopes:
     - ✅ `unauthenticated_read_product_listings`
     - ✅ `unauthenticated_read_checkouts`
     - ✅ `unauthenticated_write_checkouts`
     - ✅ `unauthenticated_read_content`
   - Click "Save"

6. **Install the app**
   - Click "Install app"
   - Confirm

7. **Get your credentials**
   - Click "API credentials" tab
   - Copy the **Storefront API access token**

## ⚙️ Step 3: Configure Your Website

1. **Create `.env` file** in the project root:

```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token_here
```

Replace:
- `your-store` with your actual Shopify store name
- `your_storefront_access_token_here` with the token from step 2.7

2. **Restart your development server**:
```bash
npm run dev
```

## 📦 Step 4: Add Products in Shopify

1. **Go to Products → Add product** in Shopify Admin

2. **Create your SILKY product**:
   - Title: `SILKY EAU DE PARFUM`
   - Price: `49.95 EUR`
   - Add variants for sizes: 30ml, 50ml, 100ml
   - Upload your product images
   - Click "Save"

3. **Make product available to Sales Channel**:
   - In the product page, scroll to "Sales channels and apps"
   - Make sure it's available on "Online Store"

4. **Get Product ID**:
   - Go to Products
   - Click on SILKY product
   - Look at the URL: `...products/1234567890`
   - Note the product ID (the numbers)

## 🔗 Step 5: Update Product Data

Update `src/data/products.ts` with your Shopify product and variant IDs:

```typescript
export const products: Product[] = [
  {
    id: 'silky-eau-de-parfum',
    name: 'SILKY EAU DE PARFUM',
    shopifyProductId: 'gid://shopify/Product/YOUR_PRODUCT_ID',
    shopifyVariants: {
      '30ml': 'gid://shopify/ProductVariant/VARIANT_ID_30ML',
      '50ml': 'gid://shopify/ProductVariant/VARIANT_ID_50ML',
      '100ml': 'gid://shopify/ProductVariant/VARIANT_ID_100ML',
    },
    // ... rest of product data
  }
]
```

To get variant IDs, use the Shopify Admin API or GraphiQL app.

## ✅ Step 6: Test

1. Add product to cart on your website
2. Click "Checkout"
3. You should be redirected to Shopify's secure checkout page
4. Complete the test order

## 🚀 Step 7: Deploy

Push changes to GitHub:
```bash
git add .
git commit -m "Add Shopify integration"
git push
```

Vercel will automatically detect the environment variables from your Vercel dashboard.

**Add environment variables in Vercel:**
1. Go to your Vercel project → Settings → Environment Variables
2. Add `VITE_SHOPIFY_STORE_DOMAIN`
3. Add `VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
4. Redeploy

## 💡 Need Help?

If you need help with any step, let me know!

