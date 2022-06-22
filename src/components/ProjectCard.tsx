function TextAbstract(text: string, length: number): string {
  if (text == null) {
    return ''
  }
  if (text.length <= length) {
    return text
  }
  text = text.substring(0, length)
  let last = text.lastIndexOf(' ')
  text = text.substring(0, last)
  return text + '...'
}
function ProjectCard({
  title,
  description,
  link,
  ...props
}: {
  title: string
  description: string
  link: string
  [key: string]: any
}) {
  const newDescription = TextAbstract(description, 120)

  return (
    <div
      {...props}
      class="text-center h-full max-w-sm rounded-lg border shadow-md border-gray-700 mx-auto min-h-[150px] w-full "
    >
      <div class="p-5 flex flex-col justify-between h-full items-center">
        <div>
          <a href={link} target="_blank">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-400">{newDescription}</p>
        </div>
        <a
          href={link}
          target="_blank"
          class="inline-flex justify-center max-w-[100px] items-center py-2 px-3 text-sm font-medium text-center text-black bg-[#00df9a] rounded-lg hover:bg-[#0d805b] focus:ring-4 focus:outline-none focus:bg-[#95ffdd] "
        >
          Discover
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
