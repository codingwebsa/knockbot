"use client";

import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";
import "@uploadthing/react/styles.css";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

import Container from "@/components/container";
import { AsteriskIcon, CrossIcon, UploadIcon } from "@/components/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import supabase from "@/services/supabase";

export default function Submit() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [uploadThingImage, setUploadThingImage] = useState<{
    fileKey: string;
    fileUrl: string;
  } | null>(null);
  const [pricingValue, setPricingValue] = useState<string>("");
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(formValues: any) {
    const tool_name = formValues.tool_name,
      fileUrl = uploadThingImage?.fileUrl,
      tool_description = formValues.tool_description,
      tool_short_description = formValues.tool_short_description,
      tool_link = formValues.tool_link,
      pricing = pricingValue,
      category = value;

    if (
      !tool_name ||
      !fileUrl ||
      !tool_description ||
      !tool_short_description ||
      !tool_link ||
      !pricing ||
      !category
    ) {
      return toast.error("All felids are required.");
    }

    try {
      await supabase.from("websites").insert([
        {
          title: tool_name,
          image_url: fileUrl,
          description: tool_description,
          short_description: tool_short_description,
          website_url: tool_link,
          pricing: pricing,
          category: category,
        },
      ]);

      toast.success("Uploaded Successfully");
      setUploadThingImage(null);
      reset();
    } catch (error) {
      toast.error("Failed to upload.");
    }
  }

  console.log(value);

  return (
    <div>
      <Container className="max-w-4xl px-6">
        {/* heading */}
        <div className="mt-28">
          <span>
            <UploadIcon size={75} />
          </span>
          <h1 className="mt-10 text-5xl font-bold">Submit</h1>
          <p className="mt-3 text-white/80">
            Submit your tool for a chance to be featured in our database and/or
            newsletter if it aligns with our criteria!
          </p>
        </div>
        {/* form */}
        <div className="mt-20">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* group- TOOL NAME */}
            <div>
              {/* label */}
              <div className="flex items-center gap-1">
                <p className="text-xl font-semibold">Tool name</p>
                <span className="text-xl rounded-full bg-white/10 h-fit">
                  <AsteriskIcon size={12} />
                </span>
              </div>
              {/* input */}
              <div className="mt-1">
                <input
                  className="bg-white/[5%] w-full px-2 py-2.5 rounded"
                  placeholder="ex: ChatGPT"
                  type="text"
                  {...register("tool_name")}
                />
              </div>
            </div>
            {/* group - DESCRIPTION */}
            <div className="mt-3">
              {/* label */}
              <div className="flex items-center gap-1">
                <p className="text-xl font-semibold">Description</p>
                <span className="text-xl rounded-full bg-white/10 h-fit">
                  <AsteriskIcon size={12} />
                </span>
              </div>
              {/* input */}
              <div className="mt-1">
                <textarea
                  className="bg-white/[5%]  w-full px-2 py-2.5 rounded resize-none"
                  placeholder="Describe you tool."
                  rows={7}
                  maxLength={1000}
                  {...register("tool_description")}
                />
              </div>
            </div>
            {/* group - Price & Category */}
            <div className="flex justify-between gap-2">
              {/* group - PRICING */}
              <div className="w-full mt-3">
                {/* label */}
                <div className="flex items-center gap-1">
                  <p className="text-xl font-semibold">Available Pricing</p>
                  <span className="text-xl rounded-full bg-white/10 h-fit">
                    <AsteriskIcon size={12} />
                  </span>
                </div>
                {/* input */}
                <div className="mt-1">
                  <Select onValueChange={(x) => setPricingValue(x)}>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Pricing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Free">Free</SelectItem>
                      <SelectItem value="Paid">Paid</SelectItem>
                      <SelectItem value="Free & Paid">
                        Free & Paid (both)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* group - CATEGORY */}
              <div className="w-full mt-3">
                {/* label */}
                <div className="flex items-center gap-1">
                  <p className="text-xl font-semibold">Category</p>
                  <span className="text-xl rounded-full bg-white/10 h-fit">
                    <AsteriskIcon size={12} />
                  </span>
                </div>
                {/* input */}
                <div className="w-full mt-1">
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="justify-between w-full"
                      >
                        {value
                          ? categories.find(
                              (category) => category.value === value
                            )?.label
                          : "Select category..."}
                        <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search category..." />
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup>
                          {categories.map((category) => (
                            <CommandItem
                              key={category.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === category.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {category.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            {/* group - SHORT DESCRIPTION */}
            <div className="mt-4">
              {/* label */}
              <div className="flex items-center gap-1">
                <p className="text-xl font-semibold">Short Description</p>
                <span className="text-xl rounded-full bg-white/10 h-fit">
                  <AsteriskIcon size={12} />
                </span>
              </div>
              {/* input */}
              <div className="mt-1">
                <input
                  className="bg-white/[5%] w-full px-2 py-2.5 rounded"
                  placeholder="Describe your tool in 1/2 sentence."
                  type="text"
                  {...register("tool_short_description")}
                />
              </div>
            </div>
            {/* group - TOOL LINK */}
            <div className="mt-4">
              {/* label */}
              <div className="flex items-center gap-1">
                <p className="text-xl font-semibold">Tool Link</p>
                <span className="text-xl rounded-full bg-white/10 h-fit">
                  <AsteriskIcon size={12} />
                </span>
              </div>
              {/* input */}
              <div className="mt-1">
                <input
                  className="bg-white/[5%] w-full px-2 py-2.5 rounded"
                  placeholder="Tool link"
                  type="text"
                  {...register("tool_link")}
                />
              </div>
            </div>
            {/* group - IMAGE */}
            <div className="mt-4">
              {/* label */}
              <div className="flex items-center gap-1">
                <p className="text-xl font-semibold">Tool Image</p>
                <span className="text-xl rounded-full bg-white/10 h-fit">
                  <AsteriskIcon size={12} />
                </span>
              </div>
              <p className="text-sm text-white/50">
                It will appear as a thumbnail of your tool. Make it in a ratio
                of 16/9 for better experience.
              </p>
              {/* input */}
              {!uploadThingImage ? (
                <div className="mt-2">
                  <UploadButton<OurFileRouter>
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      res && setUploadThingImage(res[0]);
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </div>
              ) : (
                <div className="relative mt-3">
                  <Image
                    src={uploadThingImage.fileUrl}
                    alt={uploadThingImage.fileKey}
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-md"
                  />
                  <button
                    aria-label="cancel"
                    onClick={() => setUploadThingImage(null)}
                    className="absolute p-3 rounded-full shadow-lg top-3 right-3 bg-black/20"
                  >
                    <CrossIcon color="white" size={20} />
                  </button>
                </div>
              )}
            </div>
            {/* submit */}
            <div className="mt-4">
              {/* input */}
              <Button className="w-full py-2 font-medium rounded-lg ">
                🔥 Submit Tool
              </Button>
            </div>
          </form>
        </div>
      </Container>

      <Toaster />
    </div>
  );
}

const categories = [
  {
    value: "avatar-creation",
    label: "Avatar-Creation",
  },
  {
    value: "social-media",
    label: "Social-Media",
  },
  {
    value: "video-editing",
    label: "Video-Editing",
  },
  {
    value: "speech-generation",
    label: "Speech-Generation",
  },
  {
    value: "ai-detectors",
    label: "AI-Detectors",
  },
  {
    value: "teachers",
    label: "Teachers",
  },
  {
    value: "students",
    label: "Students",
  },
  {
    value: "chatbots",
    label: "Chatbots",
  },
  {
    value: "writing",
    label: "Writing",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "coding",
    label: "Coding",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "fun",
    label: "Fun",
  },
  {
    value: "inspiration",
    label: "Inspiration",
  },
  {
    value: "generative-art",
    label: "Generative-Art",
  },
  {
    value: "video-creation",
    label: "Video-Creation",
  },
  {
    value: "music",
    label: "Music",
  },
  {
    value: "prompting",
    label: "Prompting",
  },
  {
    value: "productivity",
    label: "Productivity",
  },
  {
    value: "business",
    label: "Business",
  },
  {
    value: "self-improvement",
    label: "Self-Improvement",
  },
  {
    value: "tool-databases",
    label: "Tool-Databases",
  },
  {
    value: "ai-communities",
    label: "AI-Communities",
  },
  {
    value: "others",
    label: "Others",
  },
];
