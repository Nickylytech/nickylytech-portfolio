import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import ProjectModal from "../components/ProjectModal";
import { projectsData, type Project } from "../data/projects";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projectsData[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const getStatusClasses = (status: string) => {
    if (status === "Live") {
      return "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50";
    } else if (status === "In Progress") {
      return "bg-purple-500/20 text-purple-300 border border-purple-500/50";
    }
    return "bg-amber-500/20 text-amber-300 border border-amber-500/50";
  };

  const getDelayClass = (index: number) => {
    const delays = ["scroll-fade-delay-1", "scroll-fade-delay-2", "scroll-fade-delay-3"];
    return delays[index % 3];
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="py-20 md:py-40 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <a
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            ← Back to Home
          </a>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-lg text-gray-300 mb-16">
            Explore my complete portfolio of projects and case studies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Card
                key={project.id}
                className={`flex flex-col scroll-fade ${getDelayClass(index)} hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 border border-border/50 bg-secondary/30 rounded-lg`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getStatusClasses(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    onClick={() => handleViewProject(project)}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default ProjectsPage;
