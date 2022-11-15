import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="..." />

        <link rel="stylesheet" href="css/bootstrap.css" />

        <link rel="stylesheet" href="css/style.css" />

        <link rel="stylesheet" href="css/reset.css" />

        <link rel="stylesheet" href="css/magnific-popup.css" />

        <link href="perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" />

        <link href="css/colors/switcher.css" rel="stylesheet" type="text/css" />
        <link href="css/colors/color-1.css" rel="stylesheet" type="text/css" />
        {/* <link
          href="css/colors/color-2.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-2"
        />
        <link
          href="css/colors/color-3.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-3"
        />
        <link
          href="css/colors/color-4.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-4"
        />
        <link
          href="css/colors/color-5.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-5"
        />
        <link
          href="css/colors/color-6.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-6"
        />
        <link
          href="css/colors/color-7.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-7"
        />
        <link
          href="css/colors/color-8.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-8"
        /> */}

        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,900"
          rel="stylesheet"
          type="text/css"
        />

        <link
          rel="stylesheet"
          href="icon-fonts/font-awesome-4.4.0/css/font-awesome.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
