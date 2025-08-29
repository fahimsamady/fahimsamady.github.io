import { getProjectById } from "@/lib/data";
import {
  BackButton,
  ProjectHeader,
  ProjectGallery,
  ProjectContent,
  ProjectNotFound,
} from "@/components/project";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    return (
      <main className="min-h-screen px-60 bg-white">
        <ProjectNotFound />
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-24 px-60 bg-white">
      <BackButton />

      <ProjectHeader project={project} />
      <ProjectGallery project={project} />

      {/* Main Content */}
      <div className="max-w-4xl">
        <ProjectContent project={project} />
      </div>
    </main>
  );
}
