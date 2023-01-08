// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { allTestimonials } from '../../../data';
import { TTestimonial } from '../../../interfaces';

type ResponseError = {
  message: string;
};

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<TTestimonial | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const testimonial = allTestimonials.find(
    p => p.id === parseInt(id as string, 10)
  );

  return testimonial
    ? res.status(200).json(testimonial)
    : res
        .status(404)
        .json({ message: `Testimonial with id: ${id} not found.` });
}
