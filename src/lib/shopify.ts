import Client from 'shopify-buy'

// Check if environment variables are set
const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN

if (!domain || !storefrontAccessToken) {
  console.warn(
    'Shopify credentials not found. Please set VITE_SHOPIFY_STORE_DOMAIN and VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN in your .env file.'
  )
}

// Initialize Shopify client
export const shopifyClient = domain && storefrontAccessToken 
  ? Client.buildClient({
      domain: domain,
      storefrontAccessToken: storefrontAccessToken,
      apiVersion: '2024-01',
    })
  : null

export default shopifyClient

