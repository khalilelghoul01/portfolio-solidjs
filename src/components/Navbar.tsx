import { AiOutlineClose, AiOutlineMenu } from 'solid-icons/ai'
import { createSignal, Show } from 'solid-js'
import { Motion } from '@motionone/solid'

function Navbar() {
  const [nav, setNav] = createSignal(true)
  const [section, setSection] = createSignal('home')
  const handleSectionClick = (e: MouseEvent, mobile: boolean) => {
    e.preventDefault()
    const target = e.target as HTMLAnchorElement
    const href = target.getAttribute('href')!
    const sectionElement = document.getElementById(href.substring(1))
    if (sectionElement) {
      setSection(href.substring(1))
      if (mobile) {
        setNav(!nav())
      }
      sectionElement.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  const handleNav = () => {
    setNav(!nav())
  }

  return (
    <div class="fixed bg-[#000300] z-20 w-full">
      <Motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2, easing: 'ease-in-out' }}
        class=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white "
      >
        <h1 class="w-full text-3xl font-bold text-[#00df9a]">!LIMITS.</h1>
        <ul class="hidden md:flex">
          <li class="p-4">
            <a href="#home" onclick={(e) => handleSectionClick(e, false)}>
              Home
            </a>
          </li>
          <li class="p-4">
            <a href="#about" onclick={(e) => handleSectionClick(e, false)}>
              About
            </a>
          </li>
          <li class="p-4">
            <a href="#projects" onclick={(e) => handleSectionClick(e, false)}>
              Projects
            </a>
          </li>
          <li class="p-4">
            <a href="#resume" onclick={(e) => handleSectionClick(e, false)}>
              Resume
            </a>
          </li>
          <li class="p-4">
            <a href="#contact" onclick={(e) => handleSectionClick(e, false)}>
              Contact
            </a>
          </li>
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
            <li class="p-4 border-b border-b-gray-600">
              <a href="#home" onclick={(e) => handleSectionClick(e, true)}>
                Home
              </a>
            </li>
            <li class="p-4 border-b border-b-gray-600">
              <a href="#about" onclick={(e) => handleSectionClick(e, true)}>
                About
              </a>
            </li>

            <li class="p-4 border-b border-b-gray-600">
              <a href="#projects" onclick={(e) => handleSectionClick(e, true)}>
                Projects
              </a>
            </li>
            <li class="p-4 border-b border-b-gray-600">
              <a href="#resume" onclick={(e) => handleSectionClick(e, true)}>
                Resume
              </a>
            </li>
            <li class="p-4">
              <a href="#contact" onclick={(e) => handleSectionClick(e, true)}>
                Contact
              </a>
            </li>
          </ul>
        </Motion.div>
      </Motion.div>
    </div>
  )
}

export default Navbar
