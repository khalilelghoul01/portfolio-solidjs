function Form() {
  return (
    <div class="text-white w-full">
      <div class=" text-3xl flex flex-col justify-center items-center px-5">
        Name:
        <input
          class=" border-gray-700 border-2 rounded-xl my-4 w-full text-xl h-[40px] max-w-md p-2  bg-transparent text-white "
          type="text"
          placeholder="Name"
          required
        />
      </div>
      <div class=" text-3xl flex flex-col justify-center items-center px-5 text-gray-400">
        Email:
        <input
          class=" border-gray-700 border-2 rounded-xl my-4 w-full text-xl h-[40px] max-w-md p-2  bg-transparent text-white "
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div class=" text-3xl flex flex-col justify-center items-center px-5 text-gray-400">
        Subject:
        <input
          class=" border-gray-700 border-2 rounded-xl my-4 w-full text-xl h-[40px] max-w-md p-2  bg-transparent text-white "
          type="text"
          placeholder="Subject"
          required
        />
      </div>
      <div class=" text-3xl flex flex-col justify-center items-center px-5">
        Message:
        <textarea
          class=" border-gray-700 border-2 rounded-xl my-4 w-full text-xl h-[140px] max-w-md p-2  bg-transparent text-white "
          placeholder="Message"
          required
        />
      </div>
    </div>
  )
}

export default Form
