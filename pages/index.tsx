import React, { useEffect, useState } from "react";
import Hero from "@/components/common/Hero";
import Listing from "@/components/common/Listing";
// import Filter from "@/components/common/Filter";
import HorizontalScroll from "@/components/common/HorizontalScroll";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import { ALL_CATEGORIES } from "@/constants";
import FilterControls from "@/components/common/FilterControls";

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(
    []
  );

  useEffect(() => {
    if (selectedFilters.includes("All") || selectedFilters.length === 0) {
      setFilteredProperties(PROPERTYLISTINGSAMPLE);
    } else {
      const newFilteredProperties = PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.some((category) => selectedFilters.includes(category))
      );
      setFilteredProperties(newFilteredProperties);
    }
  }, [selectedFilters]);

  const handleQuickFilterChange = (category: string) => {
    setSelectedFilters([category]);
  };

  const handleAdvancedFiltersApply = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HorizontalScroll />
      <Hero />
      <FilterControls
        quickCategories={ALL_CATEGORIES}
        allCategories={ALL_CATEGORIES}
        selectedFilters={selectedFilters}
        onQuickFilterChange={handleQuickFilterChange}
        onAdvancedFiltersApply={handleAdvancedFiltersApply}
      />
      <Listing properties={filteredProperties} />
    </div>
  );
}
