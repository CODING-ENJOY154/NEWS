import moment from "moment";

export const navbarBrand = "Your News";
export const header = (category) => `News - Top ${category} Headlines`;
export const noFound = "No Results Found";
export const searching = "Searching...";
export const summary = "Channel and PublishedAt"; // ✅ Added missing export

// Simple arrow icon
export const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

// Navbar links
export const navs = [
  { nav: "Home", page: "/" },
  { nav: "General", page: "/categories/general" },
  { nav: "Business", page: "/categories/business" },
  { nav: "Sports", page: "/categories/sports" },
  { nav: "Science", page: "/categories/science" },
  { nav: "Health", page: "/categories/health" },
  { nav: "Entertainment", page: "/categories/entertainment" },
  { nav: "Technology", page: "/categories/technology" },
];

// Routes for React Router
export const router = [
  { path: "/", key: "home", category: "general", country: "us" },
  { path: "/categories/general", key: "general", category: "general", country: "us" },
  { path: "/categories/business", key: "business", category: "business", country: "us" },
  { path: "/categories/sports", key: "sports", category: "sports", country: "us" },
  { path: "/categories/science", key: "science", category: "science", country: "us" },
  { path: "/categories/health", key: "health", category: "health", country: "us" },
  { path: "/categories/entertainment", key: "entertainment", category: "entertainment", country: "us" },
  { path: "/categories/technology", key: "technology", category: "technology", country: "us" }
];

// Display news channel name
export const newsChannel = (channel) => `Channel: ${channel}`;

// Format published date using Moment.js
export const lastUpdate = (published) =>
  `${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;
