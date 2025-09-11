"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back();
    } else {
      // Fallback to home page if no history
      router.push("/");
    }
  };

  return (
    <div className="pt-4 sm:pt-6 md:pt-8 pb-4">
      <button
        onClick={handleBack}
        className="btn inline-flex items-center gap-2 text-sm sm:text-base"
      >
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </button>
    </div>
  );
}
