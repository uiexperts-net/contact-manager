// src/tests/ContactPicker.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import ContactPicker from '../components/ContactPicker';

describe('ContactPicker Component', () => {
  it('should render the contact picker button', () => {
    render(<ContactPicker />);
    const button = screen.getByText(/Pick Contacts/i);
    expect(button).toBeInTheDocument();
  });

  it('should alert if Contact Picker API is not supported', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ContactPicker />);
    
    const button = screen.getByText(/Pick Contacts/i);
    fireEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith('Contact Picker API is not supported in your browser');
  });
});
