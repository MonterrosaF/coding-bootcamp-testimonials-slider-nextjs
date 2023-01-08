import cn from 'classnames';
import Image from 'next/image';
import { TTestimonial } from '../../interfaces';

type TestimonialProps = {
  testimonial: TTestimonial;
  handleNext: () => void;
  handlePrev: () => void;
  isLast: boolean;
  isFirst: boolean;
};

function Testimonial({
  testimonial,
  handleNext,
  handlePrev,
  isFirst,
  isLast,
}: TestimonialProps) {
  return (
    <>
      <div className='md:w-1/2 md:relative'>
        <Image
          src='/images/pattern-bg.svg'
          alt='background'
          fill
          className='object-contain !h-auto w-full !relative'
        />
        <div className='absolute top-0 left-0 right-0 mx-auto mt-8 rounded-lg md:bottom-0 md:my-auto md:mx-0 md:ml-10 w-fit md:right-auto md:w-3/4 md:h-3/4'>
          <div className='w-64 h-64 md:w-80 md:h-80'>
            <Image
              src={`/images/${testimonial.image}`}
              alt={testimonial.image}
              className='rounded-lg shadow-2xl'
              fill
            />
          </div>
          <div className='absolute left-0 right-0 flex gap-3 mx-auto bg-white md:mx-0 md:ml-20 -bottom-5 w-fit rounded-r-3xl rounded-l-3xl'>
            <button
              type='button'
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
              type='button'
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
      </div>

      <div className='items-center content-center md:w-1/2 md:flex md:flex-wrap md:absolute md:left-0 md:ml-[10%] md:top-0 md:bottom-0'>
        <Image
          src='/images/pattern-quotes.svg'
          alt='background'
          height={50}
          width={60}
          className='mx-auto mt-8 md:mx-0 md:ml-40 md:h-fit'
        />
        <p className='text-center text-[19px] md:text-[30px] md:text-left'>
          {'“ '}
          {testimonial.description}
          {' ”'}
        </p>

        <div className='mt-5 md:flex md:gap-2'>
          <h1 className='font-bold text-center text-dark-blue'>
            {testimonial.name}
          </h1>

          <h2 className='font-medium text-center text-grayish-blue'>
            {testimonial.position}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
