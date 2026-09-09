function About() {
  return (
    <section id="about" className="py-20 md:py-40 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <div className="scroll-fade scroll-fade-delay-1">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a hands-on developer who focuses on building practical platforms and tools. I enjoy turning ideas into working systems — from dashboards and booking platforms to automation tools.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked on projects like construction platforms, logistics concepts, email validation tools, and web dashboards. I care about clean structure, scalability, and solving real problems, not just writing code.
            </p>
          </div>
          <div className="scroll-fade scroll-fade-delay-2">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Right now I'm improving my skills in Python, backend systems, and application development while building full projects that move from idea → design → deployment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm open to freelance work, collaborations, and junior developer opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
