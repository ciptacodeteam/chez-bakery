'use client';

import dayjs from 'dayjs';
import { PropsWithChildren } from 'react';
import 'dayjs/locale/id';

dayjs.locale('id');

const MainProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default MainProvider;
