import ProjectCard from './ProjectCard'

function Projects({ ...props }) {
  return (
    <div class="py-16 px-4 w-full" {...props}>
      <h1 class="text-white font-bold text-4xl md:text-7xl sm:text-5xl p-5 mt-5 mx-auto text-center">
        Projects
      </h1>
      <div class=" max-w-[1240px] mx-auto p-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
        <ProjectCard
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          title="Portfolio Website"
          description="Built with Solid js and tailwindcss"
          link="https://github.com/khalilelghoul01/Core"
        />
      </div>
    </div>
  )
}

export default Projects
