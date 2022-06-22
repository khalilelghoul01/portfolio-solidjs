import Typed from './Typed'
import { Motion } from '@motionone/solid'

function Hero({ ...props }: any) {
  const handleSectionClickByID = (e: MouseEvent, id: string) => {
    e.preventDefault()
    const sectionElement = document.getElementById(id)
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <Motion.div
      {...props}
      class="text-white"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1, easing: 'ease-in-out' }}
    >
      <div class=" max-w-[800] mt-[-96] w-full h-[100vh] mx-auto text-center flex flex-col justify-center ">
        <p class=" uppercase text-[#00df9a] font-bold p-2">
          Looking For Beauty Within Chaos
        </p>
        <h1 class="md:text-7xl sm:text-6xl text-4xl md:py-3 font-bold">
          Beyond the limits
        </h1>
        <Motion.div
          class="flex space-x-5 justify-center items-center flex-wrap md:mb-3"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, easing: 'ease-in-out' }}
        >
          <p class="md:text-5xl sm:text-4xl text-xl font-bold">Personality:</p>{' '}
          <Typed
            texts={['Curios  ', 'Problem Solver  ', 'Creative Thinker  ']}
            delay={300}
            class=" md:text-5xl sm:text-4xl text-xl font-bold"
          />
        </Motion.div>
        <p class="md:text-2xl text-xl font-bold text-gray-500 px-5 ">
          <span class=" font-extrabold text-4xl">&#8221;</span>success is a sum
          of small efforts repeated
          <span class=" font-extrabold text-4xl">&#8220;</span> - my motto
        </p>
        <Motion.button
          class="bg-[#00df9a] w-[160px] rounded-md font-medium my-6 py-2 mx-auto text-black"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, easing: 'ease-in-out' }}
          onclick={(e) => handleSectionClickByID(e, 'about')}
        >
          See More
        </Motion.button>
      </div>
    </Motion.div>
  )
}

export default Hero
