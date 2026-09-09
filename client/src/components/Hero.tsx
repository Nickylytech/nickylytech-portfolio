import { Button } from "./ui/button";

function Hero() {
  const handleCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-40 overflow-hidden" style={{
      background: `linear-gradient(135deg, rgba(10, 14, 6, 0.92) 0%, rgba(10, 20, 40, 0.92) 100%), 
                   url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-3xl animate-fade-in-up">
             <p className="text-lg md:text-xl text-cyan-300 mb-4 font-medium">
               Hi, I'm Nickylytech
             </p>
             <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
               Full-Stack Developer & Problem Solver
             </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
              I build real-world web applications, tools, and platforms. Focused on practical systems, automation, and scalable solutions.
            </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" className="rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleCTA}
              className="rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
