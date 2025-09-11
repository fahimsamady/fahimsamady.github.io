import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="section-padding text-center px-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
        Project Not Found
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
        The project you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn text-sm sm:text-base">
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Link>
    </div>
  );
}
