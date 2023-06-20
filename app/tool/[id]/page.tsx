import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

import Container from "@/components/container";
import supabase from "@/services/supabase";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // const id = params.id;

  // fetch data
  const { data } = await supabase
    .from("websites")
    .select("*")
    .eq("id", params.id);

  const tool = data?.[0];

  // optionally access and extend (rather than replace) parent metadata
  var previousImages: any[] = [];
  if (parent) {
    previousImages = (await parent).openGraph?.images || [];
  }

  return {
    title: tool.title,
    description: tool.short_description,
    openGraph: {
      images: [tool.image_url, ...previousImages],
    },
  };
}

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
        <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2">
          <div className="w-full">
            <Image
              src={data[0].image_url}
              width={500}
              height={500}
              sizes="40vw"
              className="object-cover w-full h-auto rounded-lg aspect-video"
              alt={data[0].title}
            />
          </div>
          <div className="">
            <p className="">{data[0].description}</p>
            <div className="flex gap-1.5 mt-6 text-lg">
              <p className="font-medium">Price: </p>
              <p>{data[0].pricing} plans available</p>
            </div>
            <div className="mt-8">
              <a
                target="_blank"
                href={modified_link}
                className="px-4 py-3 text-lg border rounded-lg border-white/10"
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

export async function generateStaticParams() {
  const { data } = await supabase.from("websites").select("id");

  return data!.map((tool) => ({
    id: tool.id.toString(),
  }));
}
