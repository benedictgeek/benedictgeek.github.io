import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

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

        <script defer src="js/jquery-2.1.4.min.js"></script>

        <script defer src="js/jquery.easytabs.min.js"></script>
        <script defer src="http://maps.google.com/maps/api/js?"></script>
        <script defer src="js/isotope.pkgd.min.js"></script>

        <script defer src="js/jquery.magnific-popup.min.js"></script>

        <script defer src="js/styleswitcher.js"></script>
        <script defer src="perfect-scrollbar/jquery.mousewheel.js"></script>
        <script defer src="perfect-scrollbar/perfect-scrollbar.js"></script>
        <script defer src="js/main.js"></script>
        <script defer src="js/ready.js"></script>
      </body>
    </Html>
  );
}
