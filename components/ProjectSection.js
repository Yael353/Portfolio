export default function ProjectSection() {
  const projects = [
    {
      title: "Quiz",
      description:
        "This is a quiz-game with the posibility to add or remove questions.",
      githubLink: "https://github.com/Yael353/Quiz.git",
    },
    {
      title: "Radioplayer",
      description: "This is a site using Swedish radio Api.",
      githubLink: "https://github.com/Yael353/Quiz.git",
    },
    {
      title: "News site",
      description: "This is a smal cathegory based news site.",
      githubLink: "https://github.com/Rodrigo-Sebastian/new-site.git",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="grid gap-4 grid-cols-1 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg hover: shadow-md p-4 m-4 transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
