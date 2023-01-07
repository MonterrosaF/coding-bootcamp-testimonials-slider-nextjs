import TestimonialComponent from '../components/Testimonial/Testimonial';
import Head from 'next/head';
import useSWR from 'swr';
import { Testimonial } from '../interfaces';
import { fetcher } from '../utils/fetcher';
import { useState } from 'react';
import Image from 'next/image';

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
      <main className='flex flex-wrap px-8 overflow-hidden'>
        {data.map((t: Testimonial) => (
          <TestimonialComponent
            key={t.id}
            testimonial={t}
            isShowing={currentId === t.id}
            handleNext={() => setCurrentId((prev) => prev + 1)}
            handlePrev={() => setCurrentId((prev) => prev - 1)}
            isFirst={currentId <= 1}
            isLast={currentId >= data.length}
          />
        ))}
      </main>
      <div className='absolute bottom-0 w-full h-20'>
        <Image src='/images/pattern-curve.svg' alt='background' fill />
      </div>
    </>
  );
}
