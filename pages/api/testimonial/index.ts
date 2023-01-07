import { NextApiResponse, NextApiRequest } from 'next';
import { allTestimonials } from '../../../data';
import { Testimonial } from '../../../interfaces';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Testimonial[]>
) {
  return res.status(200).json(allTestimonials);
}
