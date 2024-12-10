const Portfolio = () => {
  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Himachal Pradesh University, Shimla",
      year: "2021 - 2024",
    },
    {
      degree: "MCA (current)",
      institution: "IGNOU, Delhi",
      year: "2024 - 2026",
    },
  ];

  const projects = [
    {
      title: "Mailfu",
      description: "Send AI-generated mails.",
      github: "https://github.com/soamn/mailfu",
      liveLink: "https://mailfu.in",
    },
    {
      title: "RngChess",
      description: "Chess with a dice.",
      github: "https://github.com/soamn/rngchess",
      liveLink: "https://github.com/soamn/rngchess",
    },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com/soamn" },
    { name: "LinkedIn", url: "https://linkedin.com/in/soamn" },
    { name: "Twitter", url: "https://twitter.com/soamn" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-white p-8 rounded-lg max-w-3xl w-full text-center animate-fadeIn">
        <div className="mb-24">
          <h1 className="text-4xl font-bold mb-4 text-yellow-500 group">
            <span className="group-hover:text-white group-hover:cursor-pointer">
              Aman Negi
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-3">
            Developer | SDE Intern | Problem-solver
          </p>
          <div className="mb-6">
            <div className="flex gap-4 justify-center">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <div className="mt-2">
              <a
                href="/resume.pdf"
                download
                className=" text-blue-400 hover:underline "
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-2xl font-semibold mb-4 ">Projects</h2>
          <div className="grid grid-cols-1 gap-4 justify-items-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-2 rounded-lg w-96 h-fit text-nowrap text-left  flex flex-col justify-between hover:scale-105 transition-transform "
              >
                <h3 className="text-lg font-semibold  ">{project.title}</h3>
                <div className="flex gap-2">
                  <p className="text-gray-400 mb-2 ">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Github link
                  </a>
                  |
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="w-full md:flex-row flex justify-center flex-col">
            {education.map((item, index) => (
              <div key={index} className="p-4 rounded-lg text-left">
                <h3 className="text-lg font-semibold">{item.degree}</h3>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-gray-500 text-sm">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
