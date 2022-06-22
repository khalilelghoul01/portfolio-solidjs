import Form from './Form'
import emailjs from 'emailjs-com'
function Contact({ ...props }: any) {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
  const USER_ID = import.meta.env.VITE_USER_ID

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
    <div class="py-16 w-full " {...props}>
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
