import { Suspense } from "react";
import ProjectDetail from "@/components/ProjectDetail";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="min-h-screen px-60 bg-white">
      <Suspense fallback={<div>Loading project...</div>}>
        <ProjectDetail projectId={params.id} />
      </Suspense>
    </main>
  );
}
