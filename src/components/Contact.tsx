import Form from './Form'
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from 'solid-icons/ai'
function Contact() {
  return (
    <div class="py-16 w-full ">
      <h1 class="text-white font-bold text-4xl md:text-7xl sm:text-5xl p-5 mt-5 mx-auto text-center">
        Contact
      </h1>
      <div class="mx-auto max-w-[1240px] flex flex-col items-center justify-center">
        <Form />
      </div>
    </div>
  )
}

export default Contact
