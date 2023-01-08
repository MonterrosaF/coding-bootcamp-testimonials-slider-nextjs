import { render, screen } from '@testing-library/react';
import Testimonial from '@/components/Testimonial/Testimonial';
import { allTestimonials } from '../../../data';

describe('<Testimonial />', () => {
  test('Should render the component', () => {
    render(
      <Testimonial
        testimonial={allTestimonials[0]}
        handleNext={jest.fn}
        handlePrev={jest.fn}
        isLast={false}
        isFirst={false}
      />
    );

    const name = screen.getByText('Tanya Sinclair');

    expect(name).toBeInTheDocument();
  });
});
