import person from "@/assets/images/person.svg";
import people from "@/assets/images/people.svg";
import setting from "@/assets/images/setting.svg";
import duration from "@/assets/images/duration.svg";
import { generateFakeData } from "@/utils";

interface ContactDataItem {
  title: string;
  descData: string[];
}

interface BestResultsItem {
  icon: string;
  title: string;
  desc: string;
}

interface FakeData {
  label: string
  value: string
}

export const contactData: ContactDataItem[] = [
  {
    title: "Let’s talk",
    descData: ["alpertungotour@gmail.com", "+998 99 999 99 99"],
  },
  {
    title: "Location",
    descData: ["Alper Tungo Tour Khorasuv street Toshkent 100023 Uzbekistan"],
  },
  {
    title: "Follow Us:",
    descData: [
      "https://www.instagram.com",
      "https://www.youtube.com",
      "https://www.facebook.com",
    ],
  },
];

export const bestResultsData: BestResultsItem[] = [
  {
    icon: duration.src,
    title: "Duration",
    desc: "8 days 2 nights",
  },
  {
    icon: setting.src,
    title: "Type",
    desc: "Active tour",
  },
  {
    icon: people.src,
    title: "People",
    desc: "10 people",
  },
  {
    icon: person.src,
    title: "Guide",
    desc: "2 people",
  },
];

export const allTagsData = [
  "Flying",
  "Holiday",
  "Family Tour",
  "Features",
  "Explore",
  "Destinations",
  "Ins Travel",
  "Beach",
  "Summer",
  "Touristic",
  "Traveling",
]

export const ticketsData: FakeData[] = generateFakeData(3, (index) => ({
  label: `Ticket Type ${index + 1}`,
  value: `ticket_${index + 1}`,
}))

export const adultData: FakeData[] = generateFakeData(3, (index) => ({
  label: `Adult Option ${index + 1}`,
  value: `adult_${index + 1}`,
}))

export const childData: FakeData[] = generateFakeData(3, (index) => ({
  label: `Child Option ${index + 1}`,
  value: `child_${index + 1}`,
}))

// includesData.ts
export const includeData: string[] = [
  "7 nights in the hotels",
  "Domestic flight Tashkent-Urgench",
  "Train Samarkand-Tashkent/Bukhara-Samarkand (economy class)",
  "Breakfast and dinner",
  "Lunch box (transfer Khiva-Bukhara)",
  "Tickets for the museums, monuments and historical sites mentioned in the itinerary",
  "7 nights in the hotels",
  "Domestic flight Tashkent-Urgench",
  "Train Samarkand-Tashkent/Bukhara-Samarkand (economy class)",
  "Breakfast and dinner",
  "Lunch box (transfer Khiva-Bukhara)",
  "Tickets for the museums, monuments and historical sites mentioned in the itinerary",
  "7 nights in the hotels",
  "Domestic flight Tashkent-Urgench",
  "Train Samarkand-Tashkent/Bukhara-Samarkand (economy class)",
  "Breakfast and dinner",
  "Lunch box (transfer Khiva-Bukhara)",
  "Tickets for the museums, monuments and historical sites mentioned in the itinerary",
  "7 nights in the hotels",
  "Domestic flight Tashkent-Urgench",
  "Train Samarkand-Tashkent/Bukhara-Samarkand (economy class)",
  "Breakfast and dinner",
  "Lunch box (transfer Khiva-Bukhara)",
  "Tickets for the museums, monuments and historical sites mentioned in the itinerary",
];

export const notIncludeData: string[] = [
  "International flight from/to Tashkent",
  "Additional drinks",
  "Expenses of photo and video",
  "Other services not mentioned as included",
];
