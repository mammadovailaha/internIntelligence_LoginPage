import type { FC } from 'react';

interface ImageComponentProps {
  image: string;
}

const ImageComponent: FC<ImageComponentProps> = ({ image }) => {
  return (
   <div className="relative w-[90%] h-[90%] flex justify-center items-center rounded-4xl">
          <img className="w-full h-full object-cover rounded-4xl" src={image} alt="team photo" />
             <div className="absolute inset-0 bg-[#00000050] z-0 rounded-4xl" />
            <div className='absolute z-10 flex flex-col justify-center items-center gap-2'>
                 <h2 className=" text-white font-bold text-base md:text-xl lg:text-3xl text-center leading-3 md:leading-4 lg:leading-6">Take the first step towards your future.</h2>
             <p className=' text-white text-[10px] md:text-base text-center leading-2.5 md:leading-4'>Join a growing network of learners, doers, and achievers.</p>
            </div>
        </div>
  )
}

export default ImageComponent
