"use client";

import React from "react";
import MediaGalleryCard from "./MediaGalleryCard";
import SearchBar from "../components/SearchBar";

interface MediaItem {
  image: string;
  title: string;
  isVideo?: boolean;
}

interface MediaGalleryGridProps {
  items: MediaItem[];
}

const MediaGalleryGrid: React.FC<MediaGalleryGridProps> = ({ items }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(items);

  React.useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredItems(items);
      return;
    }
    const lowerQuery = searchQuery.toLowerCase();
    setFilteredItems(
      items.filter(
        (item) =>
          item.title?.toLowerCase().includes(lowerQuery) ||
          item.image?.toLowerCase().includes(lowerQuery)
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if(e.target.value.length===0){
      setFilteredItems(items);
    }
    else{
      const lowerQuery = e.target.value.toLowerCase();
      setFilteredItems(
        items.filter(
          (item) =>
            item.title?.toLowerCase().includes(lowerQuery) ||
            item.image?.toLowerCase().includes(lowerQuery)
        )
      );
    }
  };

  return (
    <>
      <SearchBar
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        onSearch={handleSearch}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <MediaGalleryCard key={idx} image={item.image} title={item.title} isVideo={item.isVideo} />
        ))}
      </div>
    </>
  );
};

export default MediaGalleryGrid; 