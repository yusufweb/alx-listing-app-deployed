// Interfaces for the application - property listing.
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}

export interface PillProp {
  title: string;
}

export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full";

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  [key: string]: any;
}

export interface ReviewsProps {
  name: string;
  rating: PropertyProps["rating"];
  image: string;
  review: string;
}

export interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

export interface FilterControlsProps {
  quickCategories: string[]; // Categories for quick access buttons
  allCategories: string[]; // All possible categories for the dropdown
  selectedFilters: string[]; // The currently selected filters from the parent
  onQuickFilterChange: (category: string) => void; // Callback for quick filter clicks
  onAdvancedFiltersApply: (selectedCategories: string[]) => void; // Callback for advanced filter apply
}

