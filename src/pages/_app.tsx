import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg"
import Image from "next/future/image"

import { Container, Header } from "../styles/pages/app"

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}


