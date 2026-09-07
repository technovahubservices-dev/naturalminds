import { fireEvent, render, screen, within } from '@testing-library/react';
import Navbar from './Navbar';

const setup = (props = {}) => {
  const onNavigate = jest.fn();
  const onToggleTheme = jest.fn();
  const view = render(<Navbar onNavigate={onNavigate} onToggleTheme={onToggleTheme} {...props} />);
  return { ...view, onNavigate, onToggleTheme, nav: within(screen.getByRole('navigation', { name: 'Main navigation' })) };
};
test('all six main pages retain their actions and active state follows the prop', () => {
  const { nav, onNavigate } = setup({ activePage: 'about' });
  for (const [name, page] of [['Home','home'],['About Us','about'],['Our Breads','products'],['Ingredients','ingredients'],['Our Promise','quality'],['Contact','contact']]) {
    const button = nav.getByRole('button', { name, exact: true });
    expect(button.getAttribute('aria-current')).toBe(page === 'about' ? 'page' : null);
    fireEvent.click(button);
    expect(onNavigate).toHaveBeenLastCalledWith(page, undefined);
  }
});
test('desktop dropdown opens on focus and Escape closes it with focus restored', () => {
  const { nav } = setup();
  fireEvent.focus(nav.getByRole('button', { name: 'About Us', exact: true }));
  const toggle = nav.getByRole('button', { name: 'Toggle About Us sections' });
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  const story = nav.getByRole('button', { name: 'Our Story' });
  fireEvent.keyDown(story, { key: 'Escape' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();
});
test('dropdown links reuse About Us with section targets', () => {
  const { nav, onNavigate } = setup();
  for (const [name,id] of [['Our Story','about-story'],['Our Journey','about-journey'],['Our Mission','about-mission'],['Our Values','about-values']]) {
    fireEvent.click(nav.getByRole('button', { name: 'Toggle About Us sections' }));
    fireEvent.click(nav.getByRole('button', { name }));
    expect(onNavigate).toHaveBeenLastCalledWith('about', id);
  }
});
test('search, cart, theme and ordering keep their existing actions', () => {
  const { nav, onNavigate, onToggleTheme } = setup({ cartCount: 3 });
  fireEvent.click(nav.getByRole('button', { name: 'Search our breads' }));
  expect(onNavigate).toHaveBeenLastCalledWith('products', undefined);
  fireEvent.click(nav.getByRole('button', { name: 'Shopping cart' }));
  expect(onNavigate).toHaveBeenLastCalledWith('cart', undefined);
  fireEvent.click(nav.getByRole('button', { name: 'Switch to dark mode' }));
  expect(onToggleTheme).toHaveBeenCalledTimes(1);
  fireEvent.click(nav.getByRole('button', { name: 'Order Now' }));
  expect(onNavigate).toHaveBeenLastCalledWith('products', undefined);
});
test('mobile menu supports the About accordion and closes after navigation', () => {
  const { nav, onNavigate } = setup();
  fireEvent.click(nav.getByRole('button', { name: 'Toggle menu' }));
  const mobile = within(screen.getByRole('navigation', { name: 'Mobile navigation' }));
  fireEvent.click(mobile.getByRole('button', { name: 'Toggle About Us sections' }));
  fireEvent.click(mobile.getByRole('button', { name: 'Our Journey' }));
  expect(onNavigate).toHaveBeenLastCalledWith('about', 'about-journey');
  expect(nav.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute('aria-expanded', 'false');
});
