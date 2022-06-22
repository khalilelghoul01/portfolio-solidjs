import SkillCard from './SkillCard'
import resume from '../assets/images/resume.png'
function Resume() {
  return (
    <div class="py-16 px-4 w-full bg-white">
      <h1 class="text-black font-bold text-4xl md:text-7xl sm:text-5xl p-5 mt-5 mx-auto text-center">
        Resume
      </h1>
      <div class="mx-auto max-w-[1240px] grid md:grid-cols-2 gap-5 rounded-md mb-5">
        <div class="p-5 relative group">
          <img
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            src={resume}
            alt="resume"
            class=" rounded-lg border-2 h-[400px] md:h-[500px] mx-auto hover:scale-90 ease-in-out duration-1000"
          />
          <div class="absolute bottom-1/2 right-1/2 text-center translate-x-[50%] md:hidden group-hover:block ease-in-out delay-1000">
            <a
              href="#"
              class="text-black text-sm font-bold no-underline hover:text-black py-2 px-3 bg-[#00df9a]  rounded-lg text-center"
            >
              Download
            </a>
          </div>
        </div>
        <div class="w-full flex flex-col items-start">
          <SkillCard
            skill="Python"
            experience={90}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          />
          <SkillCard
            skill="Html/Css"
            experience={60}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          />
          <SkillCard
            skill="JS/TS (Frameworks)"
            experience={60}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          />
          <SkillCard
            skill="Java"
            experience={70}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          />
          <SkillCard
            skill="C# Core/Unity"
            experience={80}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          />
          <SkillCard
            skill="C/C++"
            experience={65}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          />
        </div>
      </div>
    </div>
  )
}

export default Resume
