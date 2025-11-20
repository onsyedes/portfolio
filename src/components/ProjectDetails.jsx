import { motion } from "motion/react";
import { Tooltip } from 'react-tooltip'


const ProjectDetails = ({
  projectId,
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal
}) => {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <Tooltip id="tool-name" style={{zIndex:10, backgroundColor:'white', color: 'black', borderRadius: "10%", fontWeight: "bold"}} />
      <motion.div
        className="relative md:max-h-[90%]  md:overflow-y-auto md:my-1.5 max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral-400" key={`project-description-${projectId}-${index}`}>{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
              <img
                data-tooltip-id="tool-name" 
                data-tooltip-content={tag.name}
                data-tooltip-place="top"
                src={tag.path}
                alt={tag.name}
                className={`rounded-lg cursor-pointer  ${tag?.style ? tag.style : 'size-10'} hover-animation`}
              />))}
            </div>
            
          </div>
          <a  
             
            className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation float-end p-3" href={href} target="_blank" rel="noopener noreferrer">
              View Project{" "}  
              <img src="assets/arrow-up.svg" className="size-4"  />
            </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
