import SkillCard from './SkillCard'

function Resume() {
  return (
    <div class="py-16 px-4 w-full bg-white">
      <h1 class="text-black font-bold text-4xl md:text-7xl sm:text-5xl p-5 mt-5 mx-auto text-center">
        Resume
      </h1>
      <div class="mx-auto max-w-[1240px] grid md:grid-cols-2 ">
        <div></div>
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
