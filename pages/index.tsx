import React, { useEffect, useState } from "react";
import Hero from "@/components/common/Hero";
import Listing from "@/components/common/Listing";
import Filter from "@/components/common/Filter";
import HorizontalScroll from "@/components/common/HorizontalScroll";
import {PROPERTYLISTINGSAMPLE} from '@/constants';
import { PropertyProps } from "@/interfaces";


export default function Home() {

  const [activeFilter, setActiveFIlter] = useState<string>("All");
  const [filterProperties, setFilterProperties] = useState<PropertyProps[]>([])
  
  useEffect(() => {
    if(activeFilter == 'All') {
      setFilterProperties(PROPERTYLISTINGSAMPLE)
    }else {
      const newFilteredProperties = PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      );
      setFilterProperties(newFilteredProperties);
    }
  },[activeFilter])

  const handleFilterChange = (category: string) => {
    setActiveFIlter(category);
  };

  return (
    <div className="min-h-screen">
      <HorizontalScroll />
      <Hero />
      <Filter activeFilter={activeFilter} onFilterChange={handleFilterChange}/>
      <Listing properties={filterProperties}/>
    </div>
  );
}
