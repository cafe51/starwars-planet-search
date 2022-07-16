import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
// import { createMemoryHistory } from 'history';
// import renderWithRouter from './helpers/renderWithRouter';

describe("Testes", () => {
  beforeEach(() => {
    render(<App />);
  });
  test('se o render dos inputs de filtragem são renderizados', () => {
    const inputName = screen.getByLabelText(/nome/i)
    const inputCollumn = screen.getByLabelText(/coluna/i)
    const inputOperator = screen.getByLabelText(/operador/i)
    const inputValue = screen.getByLabelText(/valor/i)
    const filterButton = screen.getByRole('button', {name: /filtrar/i})
    const deleteAllButton = screen.getByRole('button', {name: /x all/i})


    userEvent.click(filterButton)
    const deleteButton = screen.getAllByRole('button', {name: /x/i})

    expect(inputName).toBeInTheDocument();
    expect(inputCollumn).toBeInTheDocument();
    expect(inputOperator).toBeInTheDocument();
    expect(inputValue).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
    expect(deleteAllButton).toBeInTheDocument();
    expect(deleteButton[0]).toBeInTheDocument();
  });
  test('se os planetas são devidamente renderizados', async () => {
    // render(<App />);

    const inputName = screen.getByLabelText(/nome/i)
    const inputCollumn = screen.getByLabelText(/coluna/i)
    const inputOperator = screen.getByLabelText(/operador/i)
    const inputValue = screen.getByLabelText(/valor/i)
    const filterButton = screen.getByRole('button', {name: /filtrar/i})
    const deleteAllButton = screen.getByRole('button', {name: /x all/i})

    const planetas = screen.getAllByRole('columnheader')
    const tatooine = await screen.findByText(/tatooine/i)
    const alderaan = await screen.findByText(/alderaan/i)

    expect(planetas.length).toBe(13);
    expect(tatooine).toBeInTheDocument();
    
    userEvent.selectOptions(inputCollumn, 'population')
    userEvent.selectOptions(inputOperator, 'menor que')
    userEvent.type(inputValue, '6000000')
    userEvent.click(filterButton)

    expect(tatooine).toBeInTheDocument();
  });
});
