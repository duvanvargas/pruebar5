import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, RouteComponentProps } from '@reach/router';
import * as serviceWorker from './serviceWorker';
import Provider from '@laststance/use-app-state'
import { ThemeProvider } from 'styled-components';
import { LoadingAppStateFromLocalStorage, BlankAppState } from './App/Store/Store';
import { Header } from './App/Components/Header/Header';
import GlobalStyles from './App/Utils/GlobalStyles';
import theme from './App/Utils/Theme';
import { NotFound } from './App/Pages/NotFound/NotFound';
import { BookDetail } from './App/Pages/Book/Book';
import { Reviews } from './App/Pages/Reviews/Reviews';

// Set initial state for our app
const initialAppState = LoadingAppStateFromLocalStorage(BlankAppState);

let Home = (props: RouteComponentProps) => <App />
let BookDetailPage = (props: RouteComponentProps) => <BookDetail />
let ErrorPage = (props: RouteComponentProps) => <NotFound />
let ReviewsPage = (props: RouteComponentProps) => <Reviews />

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Provider appState={initialAppState}>
        <Router>
          <Home path="/" />
          <BookDetailPage path="/book/:bookId" />
          <ReviewsPage path="/reviews" />
          <ErrorPage default />
        </Router>
      </Provider>
     </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
