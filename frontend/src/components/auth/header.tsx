import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
  type?: "Login" | "Sign Up";
}

export const Header = ({ label, type }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold")}>{type}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
