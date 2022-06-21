import { createSignal, onCleanup } from 'solid-js'

function Typed({
  texts,
  delay,
  ...props
}: {
  texts: string[]
  delay: number
  [key: string]: any
}) {
  const [typed, setTyped] = createSignal('')
  let i = 0
  let id = 0

  function typeWriter(id: number) {
    if (i < texts[id].length) {
      setTyped(typed() + texts[id].charAt(i))
      i++
    }
  }

  let interval: number = setInterval(() => {
    typeWriter(id)
    if (i === texts[id].length) {
      setTyped('')
      id = id + 1 >= texts.length ? 0 : id + 1
      i = 0
    }
    if (id === texts.length) {
      id = 0
    }
  }, delay)

  onCleanup(() => {
    clearInterval(interval)
  })

  return (
    <span class="flex justify-center items-center">
      <span {...props}>{typed()} </span>
      <p class="animate-ping-custom md:w-[3px] md:h-[22px] sm:h-[18px] sm:w-[3px] h-[12px] w-[2px]  bg-white "></p>
    </span>
  )
}

export default Typed
