import ImageCom from "@/components/ImageCom";
import Link from "next/link";

const Posts = ({ data }: { data: any }) => {
  if (data.length < 1) {
    return <p className="mt-2 text-center text-lg">No tool found 💋</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((x: any, index: number) => {
          return (
            <Link href={`/tool/${x.id}`} key={index} className="">
              {/* image */}
              <div className="relative aspect-video h-auto w-full">
                <ImageCom
                  src={x.image_url}
                  className="aspect-video w-full rounded-xl object-cover"
                  alt={x.title}
                  // width={360}
                  // height={360}
                  fill
                  sizes="25vw"
                />
                {/* <Image
                  src={`https://webstack-screenshot.vercel.app/?url=${x.website_url}`}
                  className="object-cover w-full aspect-video rounded-xl"
                  alt={x.title}
                  width={360}
                  height={360}
                /> */}
                <span className="absolute bottom-2 left-2">
                  <p className="rounded-sm bg-black/50 px-3 py-1.5 backdrop-blur-lg">
                    {x.pricing}
                  </p>
                </span>
              </div>
              {/* ...rest */}
              <div className="mt-1.5">
                {/* title */}
                <div className="flex gap-2">
                  {/* <p className="text-xl">🤖</p> */}
                  <p className="text-2xl font-semibold">{x.title}</p>
                </div>
                {/* category */}
                <div className="flex gap-1">
                  <button
                    className={`rounded-full bg-white/10 px-2 py-1 text-sm`}
                  >
                    {x.category}
                  </button>
                </div>
                {/* description */}
                <div className="mt-1">
                  <p className="line-clamp-2 max-w-[80%] text-base font-medium">
                    {x.short_description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
