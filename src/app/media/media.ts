interface MediaItem {
    image: string;
    title: string;
    isVideo?: boolean;
}

export const mediaItems: MediaItem[] = [
    {
        image: "/images/media/governor.jpg",
        title:"The Governor",
        isVideo: false
    },
    {
        image:"/images/media/flood-intervention.jpg",
        title:"Flood Intervention in Oguta LGA",
        isVideo: false
    },
    {
        image:"/images/media/iom.jpeg",
        title:"The IOM team",
        isVideo: false
    }
];