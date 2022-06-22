import { AiFillHeart } from 'solid-icons/ai'
function Footer({ ...props }) {
  return (
    <div
      class=" w-full h-20 p-10 text-white flex flex-col justify-center items-center text-center"
      {...props}
    >
      <h1>made with </h1>
      <AiFillHeart class=" text-red-600 animate-pulse" size={20} />{' '}
      <h1>by @khalilelghoul01</h1>
    </div>
  )
}

export default Footer
