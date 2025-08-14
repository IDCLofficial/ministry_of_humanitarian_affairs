type Category = "latest" | "policies" | "trending";

interface NewsItem {
  title: string;
  date: string;
  img: string;
  badge: string;
  desc: string;
  category: Category;
}

const newsList: NewsItem[] = [
  {
    title: "Commissioner Visits IDP Camp in Ohaji-Egbema",
    date: "July 22, 2025",
    img: "/images/commissioner.png",
    badge: "outreach",
    desc: "The Commissioner visited displaced persons in Ohaji/Egbema, assessing conditions and distributing relief materials.",
    category: "latest",
  },
  {
    title: "Imo State Partners UNDP on Social Protection Expansion",
    date: "July 18, 2025",
    img: "/images/news/undp.jpg",
    badge: "policy",
    desc: "A new collaboration with UNDP aims to expand social safety nets and improve livelihoods across vulnerable communities.",
    category: "policies",
  },
];

export default newsList;