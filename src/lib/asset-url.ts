// Asset paths are served by Lovable's CDN, not by an external deployment.
// Keep their origin explicit so GitHub → Vercel uses the same real photographs.
const assetOrigin = "https://oovevacafe.lovable.app";

export function assetUrl(asset: { url: string }): string {
  return new URL(asset.url, assetOrigin).href;
}