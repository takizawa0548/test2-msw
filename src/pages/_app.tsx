import "@/styles/globals.css";
import type { AppProps } from "next/app";

if (process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled') {
  if (typeof window !== 'undefined') {
    import('../mocks/browser').then(({ worker }) => {
      worker.start()
    });
  }else{
    import('../mocks/server').then(({ server }) => {
      server.listen()
    });
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
