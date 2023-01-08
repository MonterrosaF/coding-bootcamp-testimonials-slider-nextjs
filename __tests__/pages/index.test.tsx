import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Index from '@/pages/index';
import { allTestimonials } from '../../data';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(allTestimonials),
  })
) as jest.Mock;

describe('<Index />', () => {
  const tanyaName = 'Tanya Sinclair';

  test('Should render <Testimonial /> with Tanya Sinclair name', async () => {
    render(<Index />);

    const loading = await screen.findByText('Loading...');
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(tanyaName)).toBeInTheDocument();
    });
  });

  test('Handler functions should be called when are clicked', async () => {
    render(<Index />);

    await waitFor(() => {
      expect(screen.getByText(tanyaName)).toBeInTheDocument();
    });

    const nextButton = screen.getAllByRole('button', { name: 'next' })[0];
    const prevButton = screen.getAllByRole('button', { name: 'prev' })[1];

    expect(prevButton).toBeDisabled();

    fireEvent.click(nextButton);

    expect(nextButton).toBeDisabled();

    await waitFor(() => {
      expect(screen.getByText('John Tarkpor')).toBeInTheDocument();
    });

    fireEvent.click(prevButton);

    await waitFor(() => {
      expect(screen.getByText(tanyaName)).toBeInTheDocument();
    });
  });
});
