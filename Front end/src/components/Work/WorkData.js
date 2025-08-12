import CrettiImage from "../../assets/Cretti.png";

const getProjectImage = (projectId) => {
  const projectImages = {
    1: CrettiImage,
    2: CrettiImage,
    3: CrettiImage,
  };
  return projectImages[projectId] || CrettiImage;
};

const projects = [
  {
    id: 1,
    year: "2023",
    client: "Gary Neville",
    title: "Refreshing Gary Neville's digital presence",
    slug: "refreshing-gary-neville-digital-presence",
    image: getProjectImage(1),
    about:
      "Gary Neville needed a comprehensive digital transformation to modernize his online presence and better connect with his audience. We developed a sophisticated platform that showcases his expertise in football analysis, business ventures, and media appearances while maintaining his authentic voice and professional credibility.",
    clientInfo:
      "Gary Neville is a former Manchester United defender, successful entrepreneur, and respected football pundit. He required a digital platform that would reflect his multifaceted career and business interests while engaging with fans and business partners effectively.",
    results:
      "The new digital platform resulted in a 300% increase in online engagement, streamlined his business communications, and provided a professional hub for his various ventures. The project successfully elevated his digital brand while maintaining the authentic connection with his audience.",
  },
  {
    id: 2,
    year: "2024",
    client: "Enabl",
    title: "Reimagining the built environment",
    slug: "reimagining-built-environment",
    image: getProjectImage(2),
    about:
      "Enabl needed a complete brand overhaul to position themselves as leaders in sustainable construction and built environment solutions.",
    clientInfo:
      "Enabl is a forward-thinking construction company focused on sustainable building practices and innovative design solutions.",
    results:
      "Successfully launched new brand identity resulting in 40% increase in qualified leads and recognition as industry innovator.",
  },
  {
    id: 3,
    year: "2025",
    client: "TechStart",
    title: "Building a modern startup identity",
    slug: "building-modern-startup-identity",
    image: getProjectImage(3),
    about:
      "TechStart required a complete brand identity from scratch, including logo design, website development, and marketing materials.",
    clientInfo:
      "TechStart is an emerging technology startup specializing in AI-powered business solutions for small and medium enterprises.",
    results:
      "Delivered comprehensive brand package that helped secure $2M in seed funding and establish strong market presence.",
  },
];
export { projects };
