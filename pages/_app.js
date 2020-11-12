// import { wrapper } from './redux/store';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps, store }) {
//   //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
//   return <Component {...pageProps} />;
// }

// // MyApp.getInitialProps = async function ({ Component, ctx }) {
// //   const pageProps = Component.getInitialProps
// //     ? await Component.getInitialProps(ctx)
// //     : {};
// //   return {
// //     pageProps: pageProps
// //   };
// // };

// //withRedux wrapper that passes the store to the App Component
// export default wrapper.withRedux(MyApp);

import { Provider } from 'react-redux';
import { useStore } from './redux/store';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
