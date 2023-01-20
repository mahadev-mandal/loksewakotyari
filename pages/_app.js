import '../styles/globals.css'
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import client from '../lib/apolloClient';
import { ApolloProvider, } from '@apollo/client';
import CmsLayout from '../components/cmsLayout';
import Layout from '../components/Layout';
import { AppWrapper } from '../context/appContext';
import { AuthWrapper } from '../context/authContext';
import DashboardLayout from '../components/dashboardLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  if (router.pathname.startsWith('/cms')) {
    return (
      <ApolloProvider client={client}>
        <AuthWrapper>
          <AppWrapper>
            <CmsLayout>
              <Component {...pageProps} />
              <ToastContainer />
            </CmsLayout>
          </AppWrapper>
        </AuthWrapper>
      </ApolloProvider>
    )
  } else if (router.pathname.startsWith('/dashboard')) {
    return (
      <ApolloProvider client={client}>
        <AuthWrapper>
          <AppWrapper>
            <DashboardLayout>
              <Component {...pageProps} />
              <ToastContainer />
            </DashboardLayout>
          </AppWrapper>
        </AuthWrapper>
      </ApolloProvider>
    )
  }

  return <div>
    <ApolloProvider client={client}>
      <AuthWrapper>
        <AppWrapper>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </AppWrapper>
      </AuthWrapper>
    </ApolloProvider>
  </div>
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
}
export default MyApp
