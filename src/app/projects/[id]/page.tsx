import { getProjectById, getProjects } from "@/lib/data";
import {
  BackButton,
  ProjectHeader,
  ProjectGallery,
  ProjectContent,
  ProjectNotFound,
} from "@/components/project";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

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
