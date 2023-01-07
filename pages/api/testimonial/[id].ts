// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { allTestimonials } from '../../../data';
import { Testimonial } from '../../../interfaces';

type ResponseError = {
  message: string;
};

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Testimonial | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const testimonial = allTestimonials.find(
    (p) => p.id === parseInt(id as string)
  );

  return testimonial
    ? res.status(200).json(testimonial)
    : res
        .status(404)
        .json({ message: `Testimonial with id: ${id} not found.` });
}
