import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { Button, Sheet } from "@mui/joy";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isDomReady, setIsDomReady] = useState(false);
  useEffect(() => {
    setIsDomReady(true);
  }, []);

  const customTheme = extendTheme({
    fontFamily: {
      body: '"Poppins", var(--joy-fontFamily-fallback)',
      display: '"Poppins", var(--joy-fontFamily-fallback)',
      code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
      fallback:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
  });

  if (!isDomReady) return null;
  return (
    <CssVarsProvider
      theme={customTheme}
      defaultMode="system"
      modeStorageKey="demo_identify-system-mode"
    >
      <Sheet varient="soft">
        <Component {...pageProps} />
      </Sheet>
    </CssVarsProvider>
  );
}

export default MyApp;
