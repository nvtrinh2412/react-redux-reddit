import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from './App';
import store from "./app/store";
import Footer from './pages/Home/components/Footer';
import MakePost from './pages/Posts/MakePost';
test('Default ', () => {
  render((
    <Provider store={store}>
      <App />)
    </Provider>));
  const linkElement = screen.getByText(/I'm a software engineer/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Post component", () => {
  test('render makePost ', () => {
    render((
      <Provider store={store}>
        <MakePost />
      </Provider>));
    const postElement = screen.getByText("Post");
    expect(postElement).toBeInTheDocument();
  })
})

describe("Footer component", () => {
  test('render footer ', () => {
    render((
      <Footer />
    ));
    const footerElement = screen.getByText("+");
    expect(footerElement).toBeInTheDocument();

  })


  test("Click on footer", () => {
    render((
      <Provider store={store}>
      <App />
    </Provider>));
    const footerElement = screen.getByText("+");
    userEvent.click(footerElement);

    const postElement = screen.getByText("Post");
    expect(postElement).toBeInTheDocument();
  })

})