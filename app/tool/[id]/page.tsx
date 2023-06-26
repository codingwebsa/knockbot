import { notFound } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

import supabase from "@/services/supabase";
import Container from "@/components/container";
import ShareButton from "./share-button";

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
      <Container className="max-w-3xl mt-10">
        <div>
          <h1 className="text-4xl font-bold text-center">{data[0].title}</h1>
          <p className="mt-4 text-center text-white/50">
            {data[0].short_description}
          </p>
        </div>
        <div className="relative mt-10">
          <Image
            src={data[0].image_url}
            width={660}
            height={600}
            className="object-cover w-full h-auto rounded-lg aspect-video"
            alt={data[0].title}
          />
          <span className="absolute px-3 py-2 rounded-sm bottom-4 left-4 bg-black/70">
            {data[0].category}
          </span>
        </div>
        <div className="mt-6">
          <p className="text-lg text-justify">{data[0].description}</p>
        </div>
        <div className="flex gap-4 mt-6">
          <a
            href={modified_link}
            target="_blank"
            aria-label="website_url"
            className="flex items-center gap-2 px-5 py-2 font-semibold text-black bg-white rounded-md"
          >
            <p>Visit site</p>
            <span>
              <FiExternalLink size={16} />
            </span>
          </a>
          <ShareButton
            url={`knockbot.net/tool/${data[0].id}`}
            title={`${data[0].title} - ${data[0].short_description}`}
          />
        </div>
      </Container>
    </div>
  );
};
export default ToolPage;
