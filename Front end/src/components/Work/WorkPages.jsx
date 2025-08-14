import { useParams } from "react-router-dom";
import { memo } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Body from "../Work/WorkComponents/Body";
import { projects } from "./WorkData";
import { removeLoader } from "../../Loader/RemoveLoader";
import { useEffect } from "react";

function WorkPages() {
  useEffect(() => {
    removeLoader();
  }, []);

  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Navbar />
      <main>
        <Body
          title={project.title}
          img={project.image}
          about={project.about}
          clients={project.clientInfo}
          res={project.results}
          currentProjectId={project.id}
        />
      </main>
      <Footer />
    </>
  );
}

export default memo(WorkPages);
