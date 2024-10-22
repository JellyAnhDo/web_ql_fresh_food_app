import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SignInView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Đăng nhập - ${CONFIG.appName}`}</title>
      </Helmet>

      <SignInView />
    </>
  );
}