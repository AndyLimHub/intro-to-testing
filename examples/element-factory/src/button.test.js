import { screen, fireEvent } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { createButton } from './button.js';

describe('createButton', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  })
  it('should create a button element', () => {
    // const button = createButton()
    // expect(button).toBeInstanceOf(HTMLButtonElement)

    document.body.appendChild(createButton());
    const button = screen.getByRole('button', { name: 'Click Me'})
    expect(button).toBeInTheDocument()
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton())

    const button = screen.getByRole('button', { name: 'Click Me'})
    await userEvent.click(button)
    
    expect(button.textContent).toBe('Clicked!')
  });
});
