import Head from "next/head";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import Layout from "../components/Layout";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const properties = {
    hits: [
      {
        0: {
          coverPhoto: {
            url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/170790211/7f71a54661bf4a389ccd3e38c766c5d6",
          },
        },
        1: {
          coverPhoto: {
            url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/170790211/7f71a54661bf4a389ccd3e38c766c5d6",
          },
        },
        2: {
          coverPhoto: {
            url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/170790211/7f71a54661bf4a389ccd3e38c766c5d6",
          },
        },
        3: {
          coverPhoto: {
            url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/170790211/7f71a54661bf4a389ccd3e38c766c5d6",
          },
        },
        4: {
          coverPhoto: {
            url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/170790211/7f71a54661bf4a389ccd3e38c766c5d6",
          },
        },
        5: {
          coverPhoto: {
            url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/170790211/7f71a54661bf4a389ccd3e38c766c5d6",
          },
        },
        0: {
          coverPhoto: {
            url: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/170790211/7f71a54661bf4a389ccd3e38c766c5d6",
          },
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hotels.com</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
