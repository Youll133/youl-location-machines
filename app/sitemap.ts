import { MetadataRoute } from "next";
import { createClient } from "../lib/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient();

const { data: machines } = await supabase
  .from("machines")
  .select("id");
  const machineUrls =
  machines?.map((machine) => ({
    url: `https://www.youllocationmachines.com/machine/${machine.id}`,
    lastModified: new Date(),
  })) || [];
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
    ...machineUrls,
  ];
}