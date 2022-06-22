import Form from './Form'
import emailjs from 'emailjs-com'
function Contact() {
  const SERVICE_ID = 'service_po7s0yg'
  const TEMPLATE_ID = 'template_tv8xjh7'
  const USER_ID = 'myK85vJ2sCA4HQfSS'
  const handleOnSubmit = (e: Event) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, target, USER_ID).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      },
    )
    target.reset()
  }
  return (
    <div class="py-16 w-full ">
      <h1 class="text-white font-bold text-4xl md:text-7xl sm:text-5xl p-5 mt-5 mx-auto text-center">
        Contact
      </h1>
      <div class="mx-auto max-w-[1240px] flex flex-col items-center justify-center">
        <form onSubmit={(event) => handleOnSubmit(event!)}>
          <Form />
        </form>
      </div>
    </div>
  )
}

export default Contact
