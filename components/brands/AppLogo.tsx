'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import SiteLogo from '@/public/images/chez.png';

type Props = {
  white?: boolean;
  clickable?: boolean;
  className?: string;
};

const AppLogo = ({ clickable = true, className, ...props }: Props) => {
  return (
    <>
      {clickable ? (
        <Link
          href={'/'}
          prefetch
          {...props}
          className={cn('flex-center max-w-[120px] w-full', className)}
        >
          <Image
            src={SiteLogo}
            alt='chez'
            width={150}
            height={150}
            priority
            className='w-full h-full object-contain'
          />
        </Link>
      ) : (
        <div
          {...props}
          className={cn('flex-center max-w-[120px] w-full', className)}
        >
          <Image
            src={SiteLogo}
            alt='chez'
            width={150}
            height={150}
            priority
            className='w-full h-full object-contain'
          />
        </div>
      )}
    </>
  );
};
export default AppLogo;
