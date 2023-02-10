import '../styles/globals.css'
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import client from '../lib/apolloClient';
import { ApolloProvider, } from '@apollo/client';
import CmsLayout from '../components/cmsLayout';
import Layout from '../components/layout';
import { AppWrapper } from '../context/appContext';
import { AuthWrapper } from '../context/authContext';
import DashboardLayout from '../components/dashboardLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeWrapper } from '../context/themeContext';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname.startsWith('/cms')) {
    return (
      <ApolloProvider client={client}>
        <AuthWrapper>
          <AppWrapper>
            <ThemeWrapper>
              <CmsLayout>
                <Component {...pageProps} />
                <ToastContainer />
              </CmsLayout>
            </ThemeWrapper>
          </AppWrapper>
        </AuthWrapper>
      </ApolloProvider>
    )
  } else if (router.pathname.startsWith('/dashboard')) {
    return (
      <ApolloProvider client={client}>
        <AuthWrapper>
          <AppWrapper>
            <ThemeWrapper>
              <DashboardLayout>
                <Component {...pageProps} />
                <ToastContainer />
              </DashboardLayout>
            </ThemeWrapper>
          </AppWrapper>
        </AuthWrapper>
      </ApolloProvider>
    )
  }

  return <div>
    <ApolloProvider client={client}>
      <AuthWrapper>
        <AppWrapper>
          <ThemeWrapper>
            <Layout>
              <Component {...pageProps} />
              <ToastContainer />
            </Layout>
          </ThemeWrapper>
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
