import { AppProps } from "next/app";
import { globalCss } from "../styles";

import logoImg from "../assets/logo.svg"
import Image from "next/future/image"

import { Container, Header } from "../styles/pages/app"

export default function App({ Component, pageProps }: AppProps) {
  globalCss();
  
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}


