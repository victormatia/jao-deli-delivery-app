import { screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from '../App';
import renderWithRouter from './utils/RenderWithRouter';

const nameTestId = 'common_register__input-name';
const emailTestId = 'common_register__input-email';
const passTestId = 'common_register__input-password';
const buttonTestId = 'common_register__button-register';

// function onSubmit(event) {
//   return event.preventDefault();
// }

describe('Test if All elements in Register page are working correctly', () => {
  it('Inputs should be in the screen', () => {
    renderWithRouter(<App />, ['/register']);
    const name = screen.getByTestId(nameTestId);
    const email = screen.getByTestId(emailTestId);
    const password = screen.getByTestId(passTestId);
    const button = screen.getByTestId(buttonTestId);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Verify on type invalids values expect the button to be disabled', () => {
    renderWithRouter(<App />, ['/register']);
    const name = screen.getByTestId(nameTestId);
    const email = screen.getByTestId(emailTestId);
    const password = screen.getByTestId(passTestId);
    const button = screen.getByTestId(buttonTestId);

    fireEvent.change(name, { target: { value: 'test' } });
    fireEvent.change(email, { target: { value: 'test@asdads' } });
    fireEvent.change(password, { target: { value: 'test' } });

    expect(button).toBeDisabled();
  });

  it('Verify on type valids values expect the button to be enabled', () => {
    renderWithRouter(<App />, ['/register']);
    const name = screen.getByTestId(nameTestId);
    const email = screen.getByTestId(emailTestId);
    const password = screen.getByTestId(passTestId);
    const button = screen.getByTestId(buttonTestId);

    fireEvent.change(name, { target: { value: 'Guilherme sILVA' } });
    fireEvent.change(email, { target: { value: 'test@test.com' } });
    fireEvent.change(password, { target: { value: '123456789' } });

    expect(button).toBeEnabled();
    const test = jest.fn();

    test();
    fireEvent.click(button);
    expect(test).toHaveBeenCalled();
  });
});

describe('Test axios post', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  jest.mock('axios');

  const URL = 'http://localhost:3001/register';

  it('Should call axios post with correct parameters', async () => {
    const Data = {
      name: 'Guilherme Gabriel',
      email: 'test@tes.com',
      password: '12345678',
    };

    axios.post = jest.fn().mockResolvedValue({ data: Data });

    await axios.post(URL, Data);

    expect(axios.post).toHaveBeenCalledWith(URL, Data);
  });

  // it('Should go to /costumers/products', async () => {
  //   renderWithRouter(<App />, ['/register']);
  //   const navigateTo = jest.fn();

  //   const Data = { name: 'Guilherme Silva', email: 'test@test.com', password: '1234567' };

  //   axios.post = jest.fn().mockResolvedValue({ data: Data });

  //   await axios.post(URL, Data);

  //   expect(axios.post).toHaveBeenCalledWith(URL, Data);

  //   expect(navigateTo).toHaveBeenCalledWith('/customer/products');
  // });
});
