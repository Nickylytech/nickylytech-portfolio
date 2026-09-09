import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import ProjectPreview from "./ProjectPreview";
import ScreenshotsGallery from "./ScreenshotsGallery";

interface ProjectDetails {
  id: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  status: "Live" | "In Progress" | "Prototype";
  link?: string;
  image?: string;
  screenshots?: string[];
}

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-0 bg-gradient-to-b from-slate-900 to-slate-950">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        {/* Hero Section with Background */}
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

           {/* Hero Image or Screenshots Gallery */}
            <div className="w-full border-b border-cyan-500/20 bg-slate-900/50 p-6">
              {project.screenshots && project.screenshots.length > 0 ? (
                <ScreenshotsGallery images={project.screenshots} title={project.title} />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
              ) : (
                <ProjectPreview title={project.title} />
              )}
            </div>

           {/* Header Content */}
           <div className="px-8 pt-8 pb-6 bg-gradient-to-b from-slate-900/50 to-transparent">
              <div className="flex items-start justify-between mb-3">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <span className={`text-xs font-semibold px-3 py-2 rounded-full whitespace-nowrap ${
                  project.status === "Live" 
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                    : project.status === "In Progress"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/50"
                    : "bg-amber-500/20 text-amber-300 border border-amber-500/50"
                }`}>
                  {project.status}
                </span>
               </div>
              <p className="text-lg text-gray-300">{project.description}</p>
              {project.status === "In Progress" && (
                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-sm text-purple-200">
                    This system is actively being developed. Screens represent the current design and workflow direction.
                  </p>
                </div>
              )}
            </div>
         </div>

        {/* Content Section */}
        <div className="px-8 pb-8 space-y-8">
          {/* Overview Section */}
          <div className="border-l-4 border-cyan-500 pl-6 py-2">
            <h2 className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-3">Overview</h2>
            <p className="text-gray-300 leading-relaxed">{project.overview}</p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h2 className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 text-sm font-bold">✓</span>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

           {/* Action Buttons */}
           <div className="flex gap-3 pt-4 border-t border-slate-700/50">
             {project.status === "Live" && project.link ? (
               <a
                 href={project.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex-1"
               >
                 <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-6 rounded-lg transition-all">
                   View Live Project
                 </Button>
               </a>
             ) : (
               <Button 
                 disabled
                 className="flex-1 bg-slate-700 text-slate-400 font-semibold py-6 rounded-lg cursor-not-allowed"
               >
                 {project.status === "In Progress" ? "Coming Soon" : "View Live Project"}
               </Button>
             )}
             <Button
               variant="outline"
               className="flex-1 border-slate-600 hover:border-cyan-500/50 hover:bg-slate-800/50 py-6 rounded-lg"
               onClick={onClose}
             >
               Close
             </Button>
           </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectModal;
