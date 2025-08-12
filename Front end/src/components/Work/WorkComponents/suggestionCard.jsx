import { Link } from "react-router-dom";
import { memo, useMemo } from "react";
import { projects } from "../WorkData";

function SuggestionCard({ currentProjectId }) {
  const randomProjects = useMemo(() => {
    const filteredProjects = projects.filter(
      (project) => project.id !== currentProjectId
    );
    
    if (filteredProjects.length === 0) return [];
    
    // Simple random selection without complex shuffling
    const shuffled = filteredProjects.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }, [currentProjectId]);

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      {randomProjects.length > 0 ? randomProjects.map((project) => (
        <Link to={`/work-pages/${project.slug}`} key={project.id}>
          <div className="relative rounded-2xl overflow-hidden cursor-pointer group h-[300px] md:h-[350px] lg:h-[400px] w-full max-w-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
      )) : (
        <div className="text-center text-gray-500">
          <p>No other projects available</p>
        </div>
      )}
    </div>
  );
}

export default memo(SuggestionCard);
