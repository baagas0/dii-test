import React from 'react';
import { IconProps } from '@/components/icons/type';
import classNames from 'classnames';

function DownloadIcon(props: IconProps): React.JSX.Element {
  const { className = '', containerClassName = '' } = props;
  const computedClassNames = classNames(
    'fill-icon-gray',
    className,
  );

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className={containerClassName} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={computedClassNames} d="M14.1172 6.61719L11.25 9.48438V2.5C11.25 1.80898 10.691 1.25 10 1.25C9.30898 1.25 8.75 1.80898 8.75 2.5V9.48438L5.88398 6.61719C5.63984 6.37109 5.31992 6.25 5 6.25C4.68008 6.25 4.36055 6.37109 4.11641 6.61719C3.62813 7.10547 3.62813 7.89648 4.11641 8.38477L9.11641 13.3848C9.60469 13.873 10.3957 13.873 10.884 13.3848L15.884 8.38477C16.3723 7.89648 16.3723 7.10547 15.884 6.61719C15.3957 6.12891 14.6055 6.12891 14.1172 6.61719ZM16.25 16.25H3.75C3.05898 16.25 2.5 16.809 2.5 17.5C2.5 18.191 3.05898 18.75 3.75 18.75H16.25C16.941 18.75 17.5 18.191 17.5 17.5C17.5 16.809 16.9414 16.25 16.25 16.25Z" />
    </svg>
  );
}

export default DownloadIcon;
