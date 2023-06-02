import { PostData as data } from "@/constants/postdata";
import Image from "next/image";

const Posts = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
        {data.map((x, index) => (
          <div key={index} className="">
            {/* image */}
            <div className="relative">
              <Image
                src={x.imageUrl}
                className="object-cover w-full aspect-video rounded-xl"
                alt={x.title}
                width={360}
                height={360}
              />
              <span className="absolute bottom-2 left-2">
                <p className="bg-black/50 backdrop-blur-lg px-3 py-1.5 rounded-sm">
                  {x.price}
                </p>
              </span>
            </div>
            {/* ...rest */}
            <div className="mt-1.5">
              {/* title */}
              <div className="flex gap-2">
                <p className="text-xl">🤖</p>
                <p className="text-2xl font-semibold">{x.title}</p>
              </div>
              {/* category */}
              <div className="flex gap-1">
                <button className="px-2 py-1 text-sm rounded-full bg-emerald-900/30">
                  Chatbot
                </button>
                <button className="px-2 py-1 text-sm rounded-full bg-rose-900/30">
                  Production
                </button>
              </div>
              {/* description */}
              <div className="mt-1">
                <p className="text-base font-medium line-clamp-3 max-w-[80%]">
                  {x.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
