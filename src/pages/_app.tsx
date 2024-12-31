import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <div className="relative w-full flex items-center justify-center ">
        <Navbar />
      </div>
      <Component {...pageProps} />
    </>
  )
}
