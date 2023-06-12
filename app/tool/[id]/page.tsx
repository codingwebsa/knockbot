import Container from "@/components/container";
import supabase from "@/services/supabase";
import Image from "next/image";
import Link from "next/link";

const Tool = async () => {
  const { data } = await supabase.from("websites").select("*").eq("id", 13);
  // console.log("🚀 ~ file: page.tsx:5 ~ Tool ~ data:", data);
  if (!data) {
    return <h1>Page not found.</h1>;
  }

  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-5xl font-bold">{data[0].title}</h1>
        <div className="flex gap-8 mt-20">
          <div className="w-[40%]">
            <Image
              src={data[0].image_url}
              width={500}
              height={500}
              sizes="40vw"
              className="w-full h-auto rounded-lg aspect-video"
              alt={data[0].title}
            />
          </div>
          <div className="max-w-[50%]">
            <p className="">{data[0].description}</p>
            <div className="flex gap-1.5 mt-6 text-lg">
              <p className="font-medium">Price: </p>
              <p>{data[0].pricing} plans available</p>
            </div>
            <div className="mt-8">
              <Link
                target="_blank"
                href={data[0].website_url}
                className="px-4 py-3 text-lg border rounded-lg border-white/10"
              >
                View Tool
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Tool;
