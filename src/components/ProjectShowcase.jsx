import { PROJECTS } from "../constants";

const ProjectShowcase = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:px-8" id="projects">
      <div>
        <h2 className="my-8 text-center justify-center text-4xl font-semibold tracking-tighter">
          Projects
        </h2>
      </div>
      <div className="space-y-16">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center
                 md:flex-row-reverse md:items-start"
          >
            <div className="w-full p-8 md:w-1/2">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full rounded-3xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="mb-2 text-lg text-emerald-950">{project.year}</h2>
              <h3 className=" mb-2 text-2xl font-semibold text-emerald-950">
                {project.title}
              </h3>
              <p className="mb-2 text-3xl text-emerald-950 lg:text-4xl">
                {project.description}
              </p>
              <p className=" mb-4 text-lg text-emerald-950 lg:text-2xl">
                {project.details}
              </p>
              <table className="min-w-full text-lg lg:text-xl">
                <tbody>
                  <tr>
                    <td className="px-6 py-4 font-medium text-emerald-950">
                      Investment
                    </td>
                    <td className="px-6 py-4 text-emerald-950">
                      {project.figures.investment}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-emerald-950">
                      Duration
                    </td>
                    <td className="px-6 py-4 text-emerald-950">
                      {project.figures.duration}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-emerald-950">
                      Outcomes
                    </td>
                    <td className="px-6 py-4 text-emerald-950">
                      {project.figures.outcome}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
