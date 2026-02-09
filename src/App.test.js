// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RandomForest title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RandomForest/i);
    expect(titleElement).toBeInTheDocument();
});
