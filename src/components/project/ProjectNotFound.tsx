import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="section-padding text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Project Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The project you're looking for doesn't exist.
      </p>
      <Link href="/" className="btn">
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
}
