import { type ClassValue } from "clsx";

import { cn } from "@/lib/utils";

interface PropsType {
  children: React.ReactNode;
  className?: ClassValue;
}

const Container = ({ children, className, ...props }: PropsType) => {
  return (
    <div className={cn("max-w-7xl mx-auto w-full px-2", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
