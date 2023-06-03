import supabase from "@/services/supabase";

export async function GET(req: Request) {
  let { data: websites, error } = await supabase.from("websites").select("*");

  if (error) {
    return new Response("Failed", {
      status: 500,
    });
  }

  return new Response(JSON.stringify(websites), {
    status: 200,
  });
}
