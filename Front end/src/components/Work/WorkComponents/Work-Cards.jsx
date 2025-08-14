import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import Container from "../../container";
import OptimizedImage from "../../ui/OptimizedImage";
import { projects } from "../WorkData";

// Memoized project card component
const ProjectCard = memo(({ project }) => (
  <Link to={`/work-pages/${project.slug}`} key={project.id}>
    <div className="relative rounded-2xl overflow-hidden cursor-pointer group h-[300px] md:h-[350px] lg:h-[400px]">
      <OptimizedImage
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        width={400}
        height={400}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="text-sm text-gray-300 mb-2">
          {project.year} • {project.client}
        </div>
        <h3 className="text-xl font-bold text-primary leading-tight">
          {project.title}
        </h3>
      </div>
    </div>
  </Link>
));

function WorkCards() {
  // Memoized column distribution for performance - fix dependency array
  const { oddIndexItems, otherItems } = useMemo(() => {
    // for col alignment
    const oddIndexItems = [];
    const otherItems = [];

    projects.forEach((item, index) => {
      if (index % 2 === 0 && index !== 0) {
        oddIndexItems.push(item);
      } else {
        otherItems.push(item);
      }
    });

    return { oddIndexItems, otherItems };
  }, [projects]);
  return (
    //work cards component
    <Container>
      <section className="bg-primary text-secondary w-full py-12 sm:py-16 max-lg:py-6 flex max-md:flex-col gap-4 sm:gap-6 justify-center items-center">
        {/* first col*/}
        <div className="flex flex-col md:flex-col lg:flex-col gap-4 sm:gap-6 w-full max-w-md items-center md:items-start">
          {otherItems.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* Second col*/}
        <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-md items-center md:items-start">
          {/* Support text */}
          <div className="block rounded-md border border-secondary-300 p-4 shadow-sm sm:p-6">
            <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
              <div className="mt-4 sm:mt-0">
                <h3 className="text-lg font-extrabold text-pretty text-gray-900 italic">
                  Every detail matters, from the first click to the final.
                </h3>

                <p className="mt-1 text-sm text-gray-600 italic font-medium">
                  Cretti
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-col lg:flex-col gap-4 sm:gap-6 items-center md:items-start">
            {oddIndexItems.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}

export default memo(WorkCards);
