import { Button } from "./ui/button"; import { Input } from "./ui/input"; import { useState } from "react";
function Contact() { const [formData, setFormData] = useState({ name: "", email: "", message: "", });
const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">( "idle" );
const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => { setFormData({ ...formData, [e.target.name]: e.target.value, }); };
const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setStatus("sending");
try {
  const response = await fetch("https://formspree.io/f/mgaerzpb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setStatus("success");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } else {
    setStatus("error");
  }
} catch {
  setStatus("error");
}
};
return ( <section
id="contact"
className="py-20 md:py-40 bg-gradient-to-t from-secondary/20 to-transparent"
> <div className="container mx-auto px-4 max-w-2xl"> <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up"> Let's Work Together </h2>
    <p className="text-lg text-muted-foreground mb-12">
      I'm open to collaborations, freelance work, and junior developer
      opportunities. If you have a project, idea, or role you think I'd
      fit, feel free to reach out.
    </p>

    {status === "success" ? (
      <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-8 text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Message Sent Successfully! 🎉
        </h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out. I'll get back to you as soon as
          possible.
        </p>

        <Button
          type="button"
          onClick={() => setStatus("idle")}
          size="lg"
          className="rounded-lg"
        >
          Send Another Message
        </Button>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-3">Name</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="rounded-lg border-border/50 focus:border-cyan-500/50 focus:shadow-lg focus:shadow-cyan-500/10 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="rounded-lg border-border/50 focus:border-cyan-500/50 focus:shadow-lg focus:shadow-cyan-500/10 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            rows={5}
            className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:shadow-lg focus:shadow-cyan-500/10 transition-all"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="w-full rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>

        {status === "error" && (
          <p className="text-sm text-red-400 text-center">
Something went wrong. Please try again or contact me directly
            by email.
          </p>
        )}
      </form>
    )}

    <div className="mt-16 pt-12 border-t border-border">
      <p className="text-sm font-medium mb-6">
        You can also reach me directly:
      </p>

      <div className="flex flex-col sm:flex-row gap-8">
        <a
          href="mailto:Nickylytech@yahoo.com"
          className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300"
        >
          Email: Nickylytech@yahoo.com
        </a>

        <a
          href="https://twitter.com/Nickylytech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-cyan-400 transition-colors duration-300"
        >
          Twitter: @Nickylytech
        </a>
      </div>
    </div>
  </div>
</section>
); }
export default Contact;
