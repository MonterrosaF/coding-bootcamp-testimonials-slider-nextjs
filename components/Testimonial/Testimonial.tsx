import { Testimonial } from '../../interfaces';
import cn from 'classnames';
import Image from 'next/image';

type TestimonialProps = {
  testimonial: Testimonial;
  isShowing: boolean;
  handleNext: () => void;
  handlePrev: () => void;
  isLast: boolean;
  isFirst: boolean;
};

const IMAGE_SIZE = 250;

const Testimonial = ({
  testimonial,
  isShowing,
  handleNext,
  handlePrev,
  isFirst,
  isLast,
}: TestimonialProps) => {
  return (
    <div
      className={cn('w-full mt-5 relative', {
        hidden: !isShowing,
      })}
    >
      <Image
        src='/images/pattern-bg.svg'
        alt='background'
        fill
        className='object-contain !h-auto w-full !relative'
      />
      <div className='absolute top-0 left-0 right-0 mx-auto mt-8 rounded-lg w-fit'>
        <Image
          src={`/images/${testimonial.image}`}
          alt={testimonial.image}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          className='rounded-lg shadow-2xl'
        />
        <div className='absolute left-0 right-0 flex gap-3 mx-auto bg-white -bottom-5 w-fit rounded-r-3xl rounded-l-3xl'>
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className={cn('flex px-3 py-4', { 'opacity-30': isFirst })}
          >
            <Image
              src='/images/icon-prev.svg'
              alt='prev'
              width={10}
              height={10}
            />
          </button>
          <button
            className={cn('flex px-3 py-4', { 'opacity-30': isLast })}
            onClick={handleNext}
            disabled={isLast}
          >
            <Image
              src='/images/icon-next.svg'
              alt='next'
              width={11}
              height={11}
            />
          </button>
        </div>
      </div>
      <Image
        src='/images/pattern-quotes.svg'
        alt='background'
        height={50}
        width={60}
        className='mx-auto mt-8'
      />
      <p className='text-center text-[19px]'>
        {'“ '}
        {testimonial.description}
        {' ”'}
      </p>

      <h1 className='mt-5 font-bold text-center text-dark-blue'>
        {testimonial.name}
      </h1>

      <h2 className='font-medium text-center text-grayish-blue'>
        {testimonial.position}
      </h2>
    </div>
  );
};

export default Testimonial;
