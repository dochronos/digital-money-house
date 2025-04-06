import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/Toaster";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
