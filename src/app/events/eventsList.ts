type event = {
  slug: string;
  date: string;
  location: string;
  title: string;
  description: string;
  img: string;
  time: string;
  organizer: string;
  phone: string;
  address: string;
  speakers: {
    name: string;
    img: string;
    role: string;
  }[];
};

const events: event[] = [
  {
    slug: "resettlement-of-orsu-returnees",
    date: "2025-04-08",
    location: "Orsu LGA, Imo State",
    title: "Assistance Directed to Returnees in Orsu",
    description:
      "Imo State House of Assembly urged Governor Uzodimma to direct the Ministry of Humanitarian Affairs to assist returnees in Orsu LGA with relief materials and infrastructural rehabilitation following years in exile due to insecurity.",
    img: "/images/events/Uzodinma.jpg",
    time: "9:00 am",
    organizer: "Imo State House of Assembly / Ministry of Humanitarian Affairs",
    phone: "",
    address: "Orsu LGA, Imo State",
    speakers: [
      {
        name: "Uche Francis Agabige",
        img: "",
        role: "Member, Orsu Constituency (Mover of Motion)"
      }
    ]
  },
  {
    slug: "ihrc-medical-and-food-outreach",
    date: "2025-09-03",
    location: "Alike Community, Obowo LGA",
    title: "IHRC Humanitarian Outreach in Obowo",
    description:
      "The IHRC-Special Monitoring Mission (Imo Chapter) provided medical bill assistance, essential food packages, and honored a local humanitarian worker during an outreach in Alike community, Obowo LGA.",
    img: "/images/events/IHRC.webp",
    time: "10:00 am",
    organizer: "IHRC-SMM (Imo State Chapter)",
    phone: "",
    address: "Alike, Obowo LGA, Imo State",
    speakers: [
      {
        name: "Ambassador Duru Hezekiah",
        img: "/images/events/hezekiah.jpg",
        role: "Head of Diplomatic Mission & Ambassador-at-Large, IHRC"
      }
    ]
  },
];


export default events; 