import { Separator } from "./separator";
import { cn } from "@/lib/utils.ts";

function TextSeparator({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2 py-[0.51px]", className)}>
      <Separator className="flex-1" />
      <span className="text-muted-foreground">{children}</span>
      <Separator className="flex-1" />
    </div>
  );
}

export default TextSeparator;
