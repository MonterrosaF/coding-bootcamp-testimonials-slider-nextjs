import { NextApiResponse, NextApiRequest } from 'next';
import { allTestimonials } from '../../../data';
import { TTestimonial } from '../../../interfaces';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<TTestimonial[]>
) {
  return res.status(200).json(allTestimonials);
}
