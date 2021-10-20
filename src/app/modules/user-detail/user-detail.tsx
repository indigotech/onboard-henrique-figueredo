import React, { useState } from 'react';

import { PageUserDetail } from '../../../atomic/pag.user-detail/user-list.component';
import { PageWrapper } from '../../../themes/global';

export const ScreenUserDetail = () => {
  const [message, setMessage] = useState({ text: '', error: false });

  return (
    <PageWrapper>
      <PageUserDetail message={message} />
    </PageWrapper>
  );
};
