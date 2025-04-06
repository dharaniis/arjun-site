// @ts-ignore
import { TestimonialType } from '@/shared/types';
import TestimonialImage from './TestimonialImage';

function Testimonial({ quote, longquote, name, profession }: TestimonialType) {
  return (
    <div className="flex flex-col gap-5 items-center text-center">
      <h1 className="text-lg font-semibold text-white">
        {quote}
      </h1>
      <p className="text-gray-400">
        {longquote}
      </p>
      <div className="flex flex-row items-center gap-2">
        <TestimonialImage 
          name = {name}  
        />
        <div className="text-white text-left">
          <p>{name}</p>
          <p className="text-sm text-gray-400">{profession}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial