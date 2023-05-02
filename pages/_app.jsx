import '@/styles/globals.css';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import { SSRProvider } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { ReactDOM } from 'react';




export default function App({ Component, pageProps }) {
    return ( 
        <SSRProvider > 
            <Layout >
        <Component {...pageProps }/>
         </Layout>
         </SSRProvider>

       
    )

}