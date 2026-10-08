import { describe, expect, it } from "vitest";
import { assetUrl } from "@/lib/asset-url";

describe("Portable image URLs", () => {
  it("resolves Lovable asset paths independently of the deployment host", () => {
    expect(assetUrl({ url: "/__l5e/assets-v1/example/logo.png" })).toBe(
      "https://oovevacafe.lovable.app/__l5e/assets-v1/example/logo.png",
    );
  });

  it("preserves an existing absolute image URL", () => {
    expect(assetUrl({ url: "https://images.example.org/photo.png" })).toBe(
      "https://images.example.org/photo.png",
    );
  });
});