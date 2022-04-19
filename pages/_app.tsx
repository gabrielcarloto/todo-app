import '../styles/globals.css';
import '../styles/nprogress.css';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
