import type { FC } from "react";

const MainButton: FC = () => {
  return (
    <button className="w-[90%] h-12 rounded-4xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-700  ease-in-out bg-[linear-gradient(to_right,_#ffc500,_#c21500)]
    bg-[length:200%_200%]
    bg-left
    hover:bg-[linear-gradient(to_left,_#ffc500,_#c21500)]
    hover:bg-right">
      <span className="text-white font-bold">Submit</span>
    </button>
  )
}

export default MainButton
