import { Image } from "lucide-react";

interface ProjectPreviewProps {
  title: string;
}

function ProjectPreview({ title }: ProjectPreviewProps) {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700/50 rounded-lg overflow-hidden relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-3">
        <div className="flex justify-center">
          <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
            <Image className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Screenshot coming soon</p>
          <p className="text-xs text-muted-foreground/60 mt-1">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
