import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";

import Image from "next/image";

import supabase from "@/services/supabase";
import Container from "@/components/container";
import ShareButton from "./share-button";

export async function generateStaticParams() {
  let { data } = await supabase.from("websites").select("*");
  console.log(data);

  if (!data) {
    return ["1", "34", "2"];
  }

  return data.map((x: any) => ({
    slug: `${x.id}`,
  }));
}

interface MetadataProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const id = params.id;

  const { data } = await supabase.from("websites").select("*").eq("id", id);

  return {
    title: data ? data[0].title : "Knockbot.net",
    description: data
      ? data[0].short_description
      : "Explore The whole new Era of AI Power Life.",
    openGraph: {
      images: [
        {
          url: data ? data[0].image_url : "/og.jpg",
          width: 1080,
          height: 720,
          alt: data ? data[0].title : "Knockbot.net",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: data ? data[0].title : "Knockbot.net",
      description: data
        ? data[0].short_description
        : "Explore The whole new Era of AI Power Life.",
      images: [data ? data[0].image_url : "/og.jpg"],
    },
  };
}

interface pageProps {
  params: {
    id: any;
  };
}

const ToolPage: React.FC<pageProps> = async ({ params: { id } }) => {
  const { data, error } = await supabase
    .from("websites")
    .select("*")
    .eq("id", id);

  if (!data || error) {
    return notFound();
  }

  const modified_link = data[0].website_url.startsWith("https://")
    ? data[0].website_url
    : "https://" + data[0].website_url;

  return (
    <div>
      <Container className="mt-10 max-w-3xl">
        <div>
          <h1 className="text-center text-4xl font-bold">{data[0].title}</h1>
          <p className="mt-4 text-center text-white/50">
            {data[0].short_description}
          </p>
        </div>
        <div className="relative mt-10">
          <Image
            src={data[0].image_url}
            width={660}
            height={600}
            className="aspect-video h-auto w-full rounded-lg object-cover"
            alt={data[0].title}
          />
          <span className="absolute bottom-4 left-4 rounded-sm bg-black/70 px-3 py-2">
            {data[0].category}
          </span>
        </div>
        <div className="mt-6">
          <p className="text-justify text-lg">{data[0].description}</p>
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href={modified_link}
            target="_blank"
            aria-label="website_url"
            className="flex items-center gap-2 rounded-md bg-white px-5 py-2 font-semibold text-black"
          >
            <p>Visit site</p>
            <span>
              <FiExternalLink size={16} />
            </span>
          </a>
          <ShareButton
            url={`https://knockbot.net/tool/${data[0].id}`}
            title={`${data[0].title} - ${data[0].short_description}`}
          />
        </div>
      </Container>
    </div>
  );
};
export default ToolPage;
