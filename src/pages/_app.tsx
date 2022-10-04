import { AppProps } from "next/app";
import { globalCss } from "../styles";

export default function App({ Component, pageProps }: AppProps) {
  globalCss();
  
  return <Component {...pageProps} />
}


