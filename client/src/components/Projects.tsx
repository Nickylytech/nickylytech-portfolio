import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import ProjectModal from "./ProjectModal";
import { projectsData, type Project } from "../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projectsData[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projectsData.slice(0, 2);

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
    <section id="projects" className="py-20 md:py-40 bg-gradient-to-b from-transparent to-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
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

        {/* CTA Button */}
        <div className="flex justify-center">
          <a href="/projects" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              View All Projects
            </Button>
          </a>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default Projects;
