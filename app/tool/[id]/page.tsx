import Image from "next/image";

import Container from "@/components/container";
import supabase from "@/services/supabase";

const Tool = async ({ params }: { params: { id: any } }) => {
  const { data, error } = await supabase
    .from("websites")
    .select("*")
    .eq("id", params.id);
  // console.log("🚀 ~ file: page.tsx:5 ~ Tool ~ data:", data);
  if (!data || error) {
    return <h1>Page not found.</h1>;
  }

  const link = data[0].website_url;
  const modified_link = link.startsWith("https://") ? link : "https://" + link;

  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-5xl font-bold">{data[0].title}</h1>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="w-full">
            <Image
              src={data[0].image_url}
              width={500}
              height={500}
              sizes="40vw"
              className="aspect-video h-auto w-full rounded-lg object-cover"
              alt={data[0].title}
            />
          </div>
          <div className="">
            <p className="">{data[0].description}</p>
            <div className="mt-6 flex gap-1.5 text-lg">
              <p className="font-medium">Price: </p>
              <p>{data[0].pricing} plans available</p>
            </div>
            <div className="mt-8">
              <a
                target="_blank"
                href={modified_link}
                className="rounded-lg border border-white/10 px-4 py-3 text-lg"
              >
                View Tool
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Tool;
