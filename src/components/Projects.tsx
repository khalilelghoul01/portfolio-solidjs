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
          link="https://github.com/khalilelghoul01/portfolio-solidjs"
        />
        <ProjectCard
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          title="Semi Working Programming Language"
          description="built an iterpreted programming language from scratch in python using Antlr4"
          link="https://github.com/khalilelghoul01/larisha-python"
        />
        <ProjectCard
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          title="University Project: Android Application"
          description="built an android app from scratch using Java and native APIs"
          link="https://github.com/khalilelghoul01/University-Project-Android-App"
        />

        <ProjectCard
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          title="University Project: Web Application"
          description="built a web app from scratch using PHP and postgresql database"
          link="https://github.com/khalilelghoul01/projetS3"
        />
        <ProjectCard
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          title="HttpFrost: A Web Framework"
          description="built a nested framework like PHP or Ruby every file is a web page using python (need debugging)"
          link="https://github.com/khalilelghoul01/HttpFrost"
        />
        <ProjectCard
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          title="Old Project: Restaurant Web Application"
          description="It's a fully functional restaurant web application using PHP and MySQL that I built when i was a high school student"
          link="https://github.com/khalilelghoul01/University-Project-Android-App"
        />
      </div>
      <h1
        class="mx-auto text-center text-white font-bold text-sm"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        Other projects are coming soon, stay tuned
      </h1>
      <h1
        class="mx-auto text-center text-white font-light text-xs"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        preparing an database to store all my projects
      </h1>
    </div>
  )
}

export default Projects
