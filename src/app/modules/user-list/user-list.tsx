import React from 'react';

import { PageUserList } from '../../../atomic/pag.user-list/user-list.component';
import { GlobalStyle } from '../../../themes/global';

export const ScreenUserList: React.FC = () => {
  return (
    <GlobalStyle>
      <PageUserList />
    </GlobalStyle>
  );
};
