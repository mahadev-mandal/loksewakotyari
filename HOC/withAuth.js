import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthContext } from "../context/authContext";

export function withAuth(WrappedComponent) {
  const Abc = (props) => {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      if (user.token) {
        if (router.pathname.startsWith('/dashboard')) {
          !(user.role === 'normal') && router.replace('/')
        }
        if (router.pathname.startsWith('/cms')) {
          !(user.role === 'admin') && router.replace('/')
        }
      } else {
        router.replace('/')
      }
    }, []);

    if (user.token) {
      if (user.role === 'admin' && router.pathname.startsWith('/cms')) {
        return <WrappedComponent {...props} />
      } else if (user.role === 'normal' && router.pathname.startsWith('/dashboard')) {
        return <WrappedComponent {...props} />
      }
    }
    return null
  }
  return Abc
}



