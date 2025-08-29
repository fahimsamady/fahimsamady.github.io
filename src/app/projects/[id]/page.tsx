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
      <main className="main">
        <ProjectNotFound />
      </main>
    );
  }

  return (
    <main className="main">
      <BackButton />

      <ProjectHeader project={project} />
      <ProjectGallery project={project} />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <ProjectContent project={project} />
      </div>
    </main>
  );
}
