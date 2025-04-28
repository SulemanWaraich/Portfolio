import {
  SiReact, SiNextdotjs, SiTailwindcss, SiMui, SiTypescript, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiMongoose, SiAmazon,
  SiStorybook, SiJavascript, SiGit, SiAngular
} from "react-icons/si";

const frontEndSkills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Angular.js", icon: <SiAngular /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Storybook", icon: <SiStorybook /> },
];

const backEndSkills = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "GIT", icon: <SiGit /> },
];

const Skills = () => {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center"> <span className="hidden md:inline">⚡</span> Tech Stack I Work With</h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          The tools and technologies I use to build fast, scalable, and beautiful web experiences.
        </p>


        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Front-End Section */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 className="text-3xl font-semibold text-center mb-6">Frontend Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {frontEndSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 md:px-5 px-3 py-3 bg-white text-gray-900 shadow-md rounded-full border hover:bg-gray-800 hover:text-white transition-all duration-300 text-base font-medium"
                >
                  <span className="md:text-2xl text-lg">{skill.icon}</span>
                  <span className="md:text-xl text-sm break-words">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back-End Section */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 className="text-3xl font-semibold text-center mb-6">Backend Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {backEndSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 md:px-5 px-3 py-3 bg-white text-gray-900 shadow-md rounded-full border hover:bg-gray-800 hover:text-white transition-all duration-300 text-base font-medium"
                >
                  <span className="md:text-2xl text-lg" >{skill.icon}</span>
                  <span className="md:text-xl text-sm break-words">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;