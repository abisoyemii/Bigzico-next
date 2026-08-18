// Category Page Section Configuration
// Set each section to true to display, false to hide
// This allows you to control the entire page layout from one file

export interface CategorySettings {
  // Header and navigation
  showHeader: boolean;

  // Main sections
  showHero: boolean;
  showFilters: boolean;
  showFeaturedProducts: boolean;
  showBestSellers: boolean;
  showLimitedOffer: boolean;
  showBenefits: boolean;
  showTrendingNow: boolean;
  showBrowseCategories: boolean;
  showTrustedBrands: boolean;
  showWhyChoose: boolean;
  showTestimonials: boolean;
  showNewsletter: boolean;
  showWhatsAppCTA: boolean;
  showDeliveryServices: boolean;
  showFAQ: boolean;
  showMainCollection: boolean;
  showRelatedProducts: boolean;

  // Footer
  showFooter: boolean;
}

export const defaultCategorySettings: CategorySettings = {
  showHeader: true,
  showHero: true,
  showFilters: true,
  showFeaturedProducts: true,
  showBestSellers: true,
  showLimitedOffer: true,
  showBenefits: true,
  showTrendingNow: true,
  showBrowseCategories: true,
  showTrustedBrands: true,
  showWhyChoose: true,
  showTestimonials: true,
  showNewsletter: true,
  showWhatsAppCTA: true,
  showDeliveryServices: true,
  showFAQ: true,
  showMainCollection: true,
  showRelatedProducts: true,
  showFooter: true,
};

// Category-specific overrides (optional)
export const categorySettingsOverrides: Record<string, Partial<CategorySettings>> = {
  // Example: Disable certain sections for specific categories
  // 'refrigerators': { showComparison: false },
  // 'smartphones': { showWhyChoose: false },
};

export function getCategorySettings(slug?: string): CategorySettings {
  const baseSettings = { ...defaultCategorySettings };

  if (!slug) {
    return baseSettings;
  }

  const overrides = categorySettingsOverrides[slug];
  if (overrides) {
    return { ...baseSettings, ...overrides };
  }

  return baseSettings;
}
