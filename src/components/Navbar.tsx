import { AiOutlineClose, AiOutlineMenu } from 'solid-icons/ai'
import { createSignal, Show } from 'solid-js'
import { Motion } from '@motionone/solid'

function Navbar() {
  const [nav, setNav] = createSignal(true)

  const handleNav = () => {
    setNav(!nav())
  }

  return (
    <Motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2, easing: 'ease-in-out' }}
      class="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white "
    >
      <h1 class="w-full text-3xl font-bold text-[#00df9a]">!LIMITS.</h1>
      <ul class="hidden md:flex">
        <li class="p-4">Home</li>
        <li class="p-4">About</li>
        <li class="p-4">Projects</li>
        <li class="p-4">Resume</li>
        <li class="p-4">Contact</li>
      </ul>
      <div onclick={handleNav} class="cursor-pointer block md:hidden ">
        {nav() ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <Motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2.5, easing: 'ease-in-out' }}
        class={
          nav()
            ? 'fixed left-[-100%] ease-in-out duration-1000 md:hidden'
            : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden'
        }
      >
        <h1 class="w-full text-3xl font-bold text-[#00df9a] m-4">!LIMITS.</h1>
        <ul class="p-4 uppercase">
          <li class="p-4 border-b border-b-gray-600">Home</li>
          <li class="p-4 border-b border-b-gray-600">About</li>
          <li class="p-4 border-b border-b-gray-600">Projects</li>
          <li class="p-4 border-b border-b-gray-600">Resume</li>
          <li class="p-4">Contact</li>
        </ul>
      </Motion.div>
    </Motion.div>
  )
}

export default Navbar
