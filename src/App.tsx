import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero
        name="Sunnatbek"
        title="Full Stack Web Developer"
        description="React va TypeScript yordamida zamonaviy saytlar yarataman"
      />

      <About
        title="Men haqimda"
        description="Men 2 yildan beri frontend development bilan shug‘ullanaman. React, TypeScript va zamonaviy vositalar yordamida foydalanuvchiga qulay interfeyslar yaratishni yaxshi ko‘raman."
      />

      <Skills
        title="Mening Bilimlarim"
        skills={[
          { name: "HTML & CSS", level: "Advanced" },
          { name: "JavaScript", level: "Advanced" },
          { name: "React", level: "Advanced" },
          { name: "Next.js", level: "Advanced" },
          { name: "TypeScript", level: "Intermediate" },
          { name: "Git", level: "Advanced" },
          { name: "Node.js & Express", level: "Advanced" },
          { name: "MongoDB", level: "Advanced" },
        ]}
      />

      <Projects
        title="Mening Loyihalarim"
        projects={[
          {
            title: "Portfolio Website",
            description: "O‘zimning shaxsiy portfolio saytim. React + TypeScript da yozilgan.",
            technologies: ["React", "TypeScript", "CSS"],
            liveLink: "https://example.com",
            githubLink: "https://github.com/username/portfolio",
          },
          {
            title: "Todo App",
            description: "Vazifalarni boshqarish uchun oddiy va qulay ilova.",
            technologies: ["React", "TypeScript", "LocalStorage"],
            githubLink: "https://github.com/username/todo-app",
          },
        ]}
      />

      <Contact
        title="Bog‘lanish"
        info={{
          email: "sunnatbek@example.com",
          phone: "+998 94 385 11 81",
          location: "Toshkent, O‘zbekiston",
          telegram: "https://t.me/username",
          github: "https://github.com/username",
          linkedin: "https://linkedin.com/in/username",
        }}
      />

      <Footer name="Sunnatbek" />
    </div>
  );
}

export default App;