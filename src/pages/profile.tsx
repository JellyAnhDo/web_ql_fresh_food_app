import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ProfileView } from 'src/sections/profile/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Thông tin người dùng - ${CONFIG.appName}`}</title>
      </Helmet>

      <ProfileView />
    </>
  );
}
