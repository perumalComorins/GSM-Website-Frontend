import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default App;
function App({ Component, pageProps }) {

  return (
    <>
        <Head>
            <title>GSM WEBSITE</title>

            {/* eslint-disable-next-line @next/next/no-css-tags */}
            
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="/assets/css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="/assets/css/owl.carousel.min.css"/>
            <link rel='stylesheet' type='text/css' media='screen' href='/assets/css/theme.css'/>
            <link rel="stylesheet" href="/assets/css/responsive.css" />
        </Head>

            <Component {...pageProps} />


            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script src="https://mdbootstrap.com/api/snippets/static/download/MDB-Pro_4.20.0/js/mdb.min.js"></script>
            <script src="/assets/js/owl.carousel.js"></script>
            <script src="/assets/js/main.js"></script>
    </>

  );
}
