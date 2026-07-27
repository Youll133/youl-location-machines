import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.youllocationmachines.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.youllocationmachines.com/machines",
      lastModified: new Date(),
    },
    {
      url: "https://www.youllocationmachines.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.youllocationmachines.com/entreprise",
      lastModified: new Date(),
    },
    {
      url: "https://www.youllocationmachines.com/galerie",
      lastModified: new Date(),
    },
    {
      url: "https://www.youllocationmachines.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.youllocationmachines.com/faq",
      lastModified: new Date(),
    },
    {
      url: "https://www.youllocationmachines.com/reservation",
      lastModified: new Date(),
    },
  ];
}