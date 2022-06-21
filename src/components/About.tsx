import student from '../assets/images/read.png'

function About() {
  return (
    <div class="py-16 px-4 w-full bg-white">
      <div class="mx-auto max-w-[1240] grid md:grid-cols-2 ">
        <img
          src={student}
          alt="/"
          class="mx-auto md:w-auto sm:w-[350px] w-[250px]"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="700"
          data-aos-once="false"
        />
        <div
          class="flex flex-col justify-center p-5 "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="700"
          data-aos-once="false"
        >
          <div class="flex flex-col justify-center items-center md:justify-start md:items-start">
            <h1 class="font-bold text-3xl md:text-7xl sm:text-4xl ">
              Khalil El Ghoul
            </h1>
            <p class="font-medium text-[#00df9a]">
              Paris Saclay University 2020-2022
            </p>
            <h1 class="font-bold">IT College Student</h1>
            <p>
              I am someone who tries to learn new technologies and programming
              languages during my free time, I was able to acquire an
              intermediate or even advanced level in python. I am currently
              learning Nodejs (React, Electron, Next js, React native, Solid js)
              because I hope strongly progress in the field of web development.
              I have a good foundation in computer science, I learn quite
              quickly with ease. I am a person who is always ready to learn new
              things and I am always willing to improve my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
