import Head from 'next/head';
import useSWR from 'swr';
import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { fetcher } from '../utils/fetcher';
import { TTestimonial } from '../interfaces';
import TestimonialComponent from '../components/Testimonial/Testimonial';

export default function Home() {
  const [currentId, setCurrentId] = useState(1);
  const { data, error, isLoading } = useSWR('/api/testimonial', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Coding Bootcamp Testimonials Slider</title>
        <meta
          name='description'
          content='Coding Bootcamp Testimonials Slider By Frontend Mentor / Felipe Monterrosa'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main className='flex flex-wrap px-8 overflow-hidden md:p-10 md:justify-center md:items-center md:h-screen'>
        {data.map((t: TTestimonial) => (
          <div
            key={t.id}
            className={cn('w-full mt-5 relative', {
              hidden: currentId !== t.id,
              'md:flex md:flex-row-reverse': currentId === t.id,
            })}
          >
            <TestimonialComponent
              testimonial={t}
              handleNext={() => setCurrentId(prev => prev + 1)}
              handlePrev={() => setCurrentId(prev => prev - 1)}
              isFirst={currentId <= 1}
              isLast={currentId >= data.length}
            />
          </div>
        ))}
      </main>
      <div className='relative w-full h-20 md:h-40 md:w-5/12 md:absolute md:bottom-0'>
        <Image src='/images/pattern-curve.svg' alt='background' fill />
      </div>
    </>
  );
}
