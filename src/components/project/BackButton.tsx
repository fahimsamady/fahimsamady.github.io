import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <div className="pt-8 pb-4">
      <Link href="/" className="btn inline-flex items-center gap-2">
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
}
