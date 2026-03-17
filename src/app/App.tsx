import { useState, useEffect } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-kdcc61xn1e";
import imgImage1 from "../assets/e3020925f0aa6addc2bb7e10d36de08358d0c6d0.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "education", "expertise", "projects", "achievements"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-[#1d1b18] relative w-full">
      {/* Header Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed backdrop-blur-[6px] bg-[rgba(8,8,8,0.8)] w-full z-50 border-b border-[rgba(3,2,0,0.1)]"
      >
        <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#aa8517] rounded-[2px] size-8 flex items-center justify-center">
              <svg className="size-[14px]" fill="none" viewBox="0 0 22.4 13.65">
                <path d={svgPaths.p33936400} fill="white" />
              </svg>
            </div>
            <h2 className="font-['Public_Sans:Black',sans-serif] font-black text-[#ff9500] text-xl tracking-tight uppercase">
              Siddhesh Shinde
            </h2>
          </div>
          <nav className="flex items-center gap-10">
            {[
              { label: "About", id: "hero" },
              { label: "Projects", id: "projects" },
              { label: "Expertise", id: "expertise" },
              { label: "Achievements", id: "achievements" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Public_Sans:Semi_Bold',sans-serif] text-sm transition-colors hover:text-[#ff9500] ${
                  activeSection === item.id ? "text-[#ff9500]" : "text-[#f3e8d8]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#aa8517] px-6 py-2 rounded-[2px] font-['Public_Sans:Bold',sans-serif] font-bold text-sm text-white tracking-wider hover:bg-[#8a6a12] transition-colors">
              RESUME
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-32 px-8 flex justify-center">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="max-w-[960px] w-full"
        >
          <motion.div variants={fadeInUp}>
            <p className="font-['Public_Sans:Bold',sans-serif] font-bold text-[#aa8517] text-sm tracking-[1.4px] uppercase mb-4">
              Full Stack Developer & Designer
            </p>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="font-['Russo_One:Regular',sans-serif] text-[#ff9500] text-6xl leading-[72px] tracking-[-1.8px] mb-6"
          >
            Creative Technologist<br />
            AI Engineer × Designer × Builder
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="font-['Public_Sans:Regular',sans-serif] text-[#fff4ca] text-lg leading-[29.25px] mb-8 max-w-[576px]"
          >
            Building AI systems, digital products, and large-scale creative experiences.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(170, 133, 23, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="bg-[#aa8517] flex items-center gap-2 px-8 py-4 rounded-[2px] font-['Public_Sans:Black',sans-serif] font-black text-white hover:bg-[#8a6a12] transition-colors"
            >
              VIEW PROJECTS
              <svg className="size-4" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p1a406200} fill="white" />
              </svg>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactModalOpen(true)}
              className="border-2 border-[rgba(255,193,7,0.2)] px-8 py-4 rounded-[2px] font-['Public_Sans:Black',sans-serif] font-black text-[#ff9500] hover:bg-[rgba(255,193,7,0.1)] transition-colors"
            >
              CONTACT ME
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-[rgba(97,85,50,0.05)] py-20 px-8 flex justify-center">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="max-w-[1200px] w-full"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
            <svg className="w-[33px] h-[27px]" fill="none" viewBox="0 0 33 27">
              <path d={svgPaths.p2edc0780} fill="#AA8517" />
            </svg>
            <h2 className="font-['Public_Sans:Black',sans-serif] font-black text-[#ff9500] text-3xl">
              Education
            </h2>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(170, 133, 23, 0.2)" }}
            className="bg-[#282621] border border-[rgba(3,2,0,0.1)] rounded-lg p-8 max-w-[800px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-['Public_Sans:Bold',sans-serif] font-bold text-[#ff9500] text-2xl mb-2">
                  Sardar Patel Institute of Technology
                </h3>
                <p className="font-['Public_Sans:Semi_Bold',sans-serif] text-[#aa8517] mb-3">
                  Bachelor of Technology in Computer Science
                </p>
                <p className="font-['Public_Sans:Regular',sans-serif] text-[#f3e8d8] leading-6">
                  Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database<br />
                  Management, Machine Learning, Web Technologies.
                </p>
              </div>
              <div className="bg-[rgba(255,193,7,0.2)] px-4 py-1 rounded-xl">
                <p className="font-['Public_Sans:Bold',sans-serif] font-bold text-white text-sm whitespace-nowrap">
                  2021 — 2025
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What I Build Section */}
      <section id="expertise" className="py-32 px-8 flex justify-center">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="max-w-[960px] w-full"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-['Public_Sans:Black',sans-serif] font-black text-[#ff9500] text-4xl mb-4">
              WHAT I BUILD
            </h2>
            <div className="bg-[#aa8517] h-1.5 w-24 mx-auto rounded-xl" />
          </motion.div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: svgPaths.p3cf6e1e0,
                title: "Full-Stack Platforms",
                description: "Scalable web and mobile systems. React, Next.js, Node.js, Tailwind CSS, MongoDB, PostgreSQL, RESTful APIs"
              },
              {
                icon: svgPaths.p3f5d9a00,
                title: "AI Applications",
                description: "Computer vision systems and ML products. Python ,React, Flask, Node.js, YOLOv8"
              },
              {
                icon: svgPaths.p9c1d400,
                title: "Creative Experiences",
                description: "Digital visuals, branding, and design systems"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(170, 133, 23, 0.3)" 
                }}
                className="bg-[#282621] border border-[rgba(3,2,0,0.1)] rounded-lg p-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer"
              >
                <div className="bg-[rgba(3,2,0,0.1)] rounded size-14 flex items-center justify-center mb-8">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 25 25">
                    <path d={item.icon} fill="#AA8517" />
                  </svg>
                </div>
                <h3 className="font-['Public_Sans:Bold',sans-serif] font-bold text-[#ff9500] text-xl mb-3">
                  {item.title}
                </h3>
                <p className="font-['Public_Sans:Regular',sans-serif] text-[#fff4ca] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[rgba(97,85,50,0.05)] py-16 px-8 flex justify-center">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
          className="max-w-[1200px] w-full"
        >
          <motion.div variants={fadeInUp} className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-['Public_Sans:Black',sans-serif] font-black text-[#ff9500] text-4xl leading-tight mb-2">
                PROJECT SECTION<br />
              </h2>
              <p className="font-['Public_Sans:Regular',sans-serif] text-[#fff4ca]">
                Turning ideas into scalable digital products.
              </p>
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 font-['Public_Sans:Bold',sans-serif] font-bold text-[#aa8517] hover:text-[#ff9500] transition-colors"
            >
              ALL PROJECTS
              <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p22fc1b80} fill="currentColor" />
              </svg>
            </motion.button>
          </motion.div>

          <div className="grid gap-12">
            {/* Project 1 */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-[1fr_auto] gap-8 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg cursor-pointer"
              >
                <img 
                  src={imgImage1} 
                  alt="NutriLens Project" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              <div className="max-w-[494px]">
                <h3 className="font-['Public_Sans:Black',sans-serif] font-black text-[#ff9500] text-3xl mb-4">
                  NutriLens
                </h3>
                <p className="font-['Public_Sans:Regular',sans-serif] text-[#fff4ca] text-lg leading-relaxed mb-4">
                  AI system that recognizes Indian food and automatically tracks nutrition.
                </p>
                <div className="flex gap-2 mb-6">
                  {["React", "YOLO", "Flask"].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-[#282621] border border-[rgba(255,193,7,0.2)] px-3 py-1 rounded text-[#ff9500] text-xs font-['Public_Sans:Bold',sans-serif] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-[rgba(64,63,57,0.2)] px-6 py-2 rounded text-[#ff9500] text-sm font-['Public_Sans:Bold',sans-serif] font-bold hover:bg-[rgba(255,193,7,0.1)] transition-colors"
                >
                  Github
                </motion.button>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-[auto_1fr] gap-8 items-center"
            >
              <div className="max-w-[496px]">
                <h3 className="font-['Public_Sans:Black',sans-serif] font-black text-[#ff9500] text-3xl mb-4">
                  Citation Detection System
                </h3>
                <p className="font-['Public_Sans:Regular',sans-serif] text-[#fff4ca] text-lg leading-relaxed mb-4">
                  Backend system that scrapes websites and maps responses to their source citations.
                </p>
                <div className="flex gap-2 mb-6">
                  {["Next.js", "Express", "SQLite"].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-[#282621] border border-[rgba(255,193,7,0.2)] px-3 py-1 rounded text-[#ff9500] text-xs font-['Public_Sans:Bold',sans-serif] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-[rgba(64,63,57,0.2)] px-6 py-2 rounded text-[#ff9500] text-sm font-['Public_Sans:Bold',sans-serif] font-bold hover:bg-[rgba(255,193,7,0.1)] transition-colors"
                >
                  Github
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 px-8 flex justify-center">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="max-w-[960px] w-full"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['Public_Sans:Black',sans-serif] font-black text-[#ff9500] text-4xl text-center mb-16"
          >
            Extracurricular Activites
          </motion.h2>
          
          <div className="grid grid-cols-2 gap-10">
            {[
              {
                icon: svgPaths.p16032960,
                title: "CREATIVE WORK",
                items: ["Blender 3D renders", "Poster designs", "Festival branding", "Motion graphics"]
              },
              {
                icon: svgPaths.p3f4cecb0,
                title: "ADD LEADERSHIP SECTION",
                description: "Oculus Festival Director\nLeading a 100+ member team organizing SPIT's largest festival with 3000+ attendees."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  x: 5,
                  boxShadow: "0 10px 30px rgba(170, 133, 23, 0.2)" 
                }}
                className="bg-[#282621] border-l-4 border-[#aa8517] rounded-lg p-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <div className="flex gap-6">
                  <svg className={index === 0 ? "w-5 h-10" : "w-9 h-9"} fill="none" viewBox={index === 0 ? "0 0 20 40" : "0 0 36 36"}>
                    <path d={item.icon} fill="#AA8517" />
                  </svg>
                  <div>
                    <h3 className="font-['Public_Sans:Bold',sans-serif] font-bold text-[#ff9500] text-xl mb-2">
                      {item.title}
                    </h3>
                    {item.items ? (
                      <ul className="font-['Public_Sans:Regular',sans-serif] text-[#fff4ca] leading-relaxed space-y-1">
                        {item.items.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="font-['Public_Sans:Regular',sans-serif] text-[#fff4ca] leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24 px-8 flex justify-center">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="max-w-[1200px] w-full text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['Public_Sans:Black',sans-serif] font-black text-[#935f17] text-6xl leading-tight mb-6"
          >
            Got an idea?<br />
            Let's build something incredible.
          </motion.h2>
          
          <motion.div variants={fadeInUp}>
            <a 
              href="mailto:siddhesh.shinde23@spit.ac.in"
              className="font-['Public_Sans:Bold',sans-serif] font-bold text-[#aa8517] text-3xl hover:text-[#935f17] transition-colors inline-block mb-8"
            >
              siddhesh.shinde23@spit.ac.in
            </a>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex justify-center gap-8 mb-20">
            {[
              { icon: svgPaths.pc80eb80, label: "LinkedIn" },
              { icon: svgPaths.p18c14180, label: "GitHub" },
              { icon: svgPaths.p1167b760, label: "Twitter" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 text-[#935f17] hover:text-[#aa8517] transition-colors"
              >
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={social.icon} fill="currentColor" />
                </svg>
                <span className="font-['Public_Sans:Regular',sans-serif]">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="pt-8 border-t border-[#1e293b] flex justify-between items-center"
          >
            <p className="font-['Public_Sans:Regular',sans-serif] text-[#f3e8d8] text-sm">
              © 2024 Krish Sodhi. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-['Public_Sans:Regular',sans-serif] text-[#f3e8d8] text-sm">
                Designed with Precision
              </span>
              <span className="text-[#aa8517]">•</span>
              <span className="font-['Public_Sans:Regular',sans-serif] text-[#f3e8d8] text-sm">
                Built with Passion
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsContactModalOpen(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#282621] rounded-lg p-8 max-w-md w-full border border-[rgba(255,193,7,0.2)]"
          >
            <h3 className="font-['Public_Sans:Black',sans-serif] font-black text-[#ff9500] text-2xl mb-4">
              Get In Touch
            </h3>
            <p className="font-['Public_Sans:Regular',sans-serif] text-[#fff4ca] mb-6">
              Reach out via email or connect on social media:
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:siddhesh.shinde23@spit.ac.in"
                className="block w-full bg-[#aa8517] text-white text-center py-3 rounded font-['Public_Sans:Bold',sans-serif] font-bold hover:bg-[#8a6a12] transition-colors"
              >
                Send Email
              </a>
              <div className="flex gap-4">
                {["LinkedIn", "GitHub", "Twitter"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="flex-1 border border-[rgba(255,193,7,0.2)] text-[#ff9500] text-center py-2 rounded text-sm hover:bg-[rgba(255,193,7,0.1)] transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="w-full text-[#f3e8d8] text-center py-2 hover:text-[#ff9500] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
