function SkillCard({
  skill,
  experience,
  ...props
}: {
  skill: string
  experience: number
  [key: string]: any
}) {
  const style = `width:${experience}%`

  return (
    <div {...props} class="w-full px-10">
      <h1 class="md:pt-5 font-bold text-xl md:text-2xl ">
        {skill}{' '}
        <span class=" text-lg text-gray-700 md:text-xl">{experience}%</span>
      </h1>
      <div class="mt-2 h-4 w-full relative  rounded-full overflow-hidden">
        <div class=" w-full h-full bg-gray-300 absolute "></div>
        <div class=" h-full bg-[#00df9a] absolute" style={style}></div>
      </div>
    </div>
  )
}

export default SkillCard
