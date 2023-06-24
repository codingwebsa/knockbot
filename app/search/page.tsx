import Container from "@/components/container";
import supabase from "@/services/supabase";
import Display from "./display";

export default async function SearchPage() {
  let { data, error } = await supabase
    .from("websites")
    .select("*")
    .order("id", {
      ascending: false,
    });

  if (error || !data) {
    throw new Error("Page fetch failed! 😢");
  }
  return (
    <div>
      <Container>
        <section className="mt-10">
          <Display data={data} />
        </section>
      </Container>
    </div>
  );
}
