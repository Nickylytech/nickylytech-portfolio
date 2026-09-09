interface Skill {
  category: string;
  items: string[];
}

function Skills() {
  const skills: Skill[] = [
    {
      category: "Web Fundamentals",
      items: ["HTML", "CSS", "JavaScript (Basics)"],
    },
    {
      category: "Programming",
      items: ["Python (Learning & Practice)", "Swift (Learning)"],
    },
    {
      category: "Development Concepts",
      items: ["Problem Solving", "Application Logic", "System Thinking"],
    },
  ];

  const getDelayClass = (index: number) => {
    const delays = ["scroll-fade-delay-1", "scroll-fade-delay-2", "scroll-fade-delay-3"];
    return delays[index % 3];
  };

  return (
    <section id="skills" className="py-20 md:py-40 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">Skills & Tech</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          {skills.map((skill, index) => (
            <div key={skill.category} className={`scroll-fade ${getDelayClass(index)}`}>
              <h3 className="text-lg font-semibold mb-6">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground flex items-center gap-3 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
