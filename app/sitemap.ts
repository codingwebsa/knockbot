import supabase from "@/services/supabase";

const staticRoutes = [
  {
    url: `https://knockbot.net/search`,
    lastModified: new Date(),
  },
];

export default async function sitemap() {
  let { data } = await supabase.from("websites").select("id");

  const toolsRoutes = data?.map((x) => ({
    url: `https://knockbot.net/tool/${x.id}`,
    lastModified: new Date(),
  }));

  const allRoutes = [...staticRoutes, ...toolsRoutes!];
  return allRoutes;
}
