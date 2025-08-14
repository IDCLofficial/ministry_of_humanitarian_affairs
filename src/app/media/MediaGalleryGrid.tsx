"use client"

import React, { useState, useMemo } from "react";
import MediaGalleryCard from "./MediaGalleryCard";
import SearchBar from "../components/SearchBar";
import ImageViewer from "./ImageViewer";

interface MediaItem {
  image: string;
  title: string;
  isVideo?: boolean;
}

interface MediaGalleryGridProps {
  items: MediaItem[];
}

const MediaGalleryGrid: React.FC<MediaGalleryGridProps> = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);
  const [viewerAlt, setViewerAlt] = useState<string>("");

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter(item => 
      item.title.toLowerCase().includes(query)
    );
  }, [items, searchQuery]);

  if(filteredItems.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium">No media items found</h1>
      </div>
    )
  }
  return (
    <>
      <SearchBar
        placeholder="Search media..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={() => {}}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <MediaGalleryCard
            key={idx}
            image={item.image}
            title={item.title}
            isVideo={item.isVideo}
            onClick={!item.isVideo ? () => {
              setViewerSrc(item.image);
              setViewerAlt(item.title);
              setViewerOpen(true);
            } : undefined}
          />
        ))}
      </div>
      <ImageViewer
        isOpen={viewerOpen}
        src={viewerSrc}
        alt={viewerAlt}
        onClose={() => {
          setViewerOpen(false);
          setViewerSrc(null);
          setViewerAlt("");
        }}
      />
    </>
  );
};

export default MediaGalleryGrid; 