interface ToolsType {
  id: number;
  created_at: any;
  title: string;
  image_url: string;
  description: string;
  short_description: string;
  website_url: string;
  pricing: "free" | "paid" | "free & paid";
  categories: string[];
}
