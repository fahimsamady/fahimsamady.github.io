import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <div className="pt-4 sm:pt-6 md:pt-8 pb-4">
      <Link
        href="/"
        className="btn inline-flex items-center gap-2 text-sm sm:text-base"
      >
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Link>
    </div>
  );
}
