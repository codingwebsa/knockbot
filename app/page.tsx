import Container from "@/components/container";
import HeroSection from "./heroSection";
import supabase from "@/services/supabase";
import Display from "./display";

export const revalidate = 60;

const Home = async () => {
  let { data } = await supabase.from("websites").select("*").order("id", {
    ascending: false,
  });

  if (!data) {
    throw new Error("Something went wrong!");
  }

  return (
    <Container>
      <section>
        <HeroSection />
      </section>
      <section className="mt-10">
        <Display data={data} />
      </section>
    </Container>
  );
};

export default Home;

// relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]
