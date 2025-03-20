import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import classNames from 'classnames';
import Loading from '@/components/atoms/Loading';
import Tooltip from '@/components/atoms/Tooltip';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'light-blue' | 'light-green' | 'light-red' | 'light-purple' | 'light-yellow';
type IconPosition = 'left' | 'right';
type IconBackground = 'circle' | 'square' | 'none';
type iconBackgroundColor = 'white' | 'blue' | 'green' | 'red' | 'purple' | 'yellow';
type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  testID: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconColor?: iconBackgroundColor | string;
  iconPosition?: IconPosition;
  iconBackground?: IconBackground;
  iconBackgroundColor?: iconBackgroundColor | string;
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
}

function Button(props: ButtonProps): React.JSX.Element {
  const {
    testID,
    children,
    loading = false,
    disabled = false,
    size = 'md',
    variant = 'blue',
    icon,
    iconColor,
    iconPosition = 'left',
    iconBackground = 'none',
    iconBackgroundColor = 'white',
    tooltip,
    tooltipPosition = 'top',
    className,
    ...rest
  } = props;

  const buttonSizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const buttonVariants = {
    blue: 'bg-blue hover:bg-blue/80 text-white',
    green: 'bg-green hover:bg-green/80 text-white',
    red: 'bg-red hover:bg-red/80 text-white',
    purple: 'bg-purple hover:bg-purple/80 text-white',
    yellow: 'bg-yellow hover:bg-yellow/80 text-white',
    'light-blue': 'bg-light-blue hover:bg-blue text-blue hover:text-white border border-blue',
    'light-green': 'bg-light-green hover:bg-green text-green hover:text-white border border-green',
    'light-red': 'bg-light-red hover:bg-red text-red hover:text-white border border-red',
    'light-purple': 'bg-light-purple hover:bg-purple text-purple hover:text-white border border-purple',
    'light-yellow': 'bg-light-yellow hover:bg-yellow text-yellow hover:text-white border border-yellow'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  const iconColorVariants = {
    blue: 'fill-white group-hover:fill-white',
    green: 'fill-white group-hover:fill-white',
    red: 'fill-white group-hover:fill-white',
    purple: 'fill-white group-hover:fill-white',
    yellow: 'fill-white group-hover:fill-white',
    'light-blue': 'fill-blue group-hover:fill-white',
    'light-green': 'fill-green group-hover:fill-white',
    'light-red': 'fill-red group-hover:fill-white',
    'light-purple': 'fill-purple group-hover:fill-white',
    'light-yellow': 'fill-yellow group-hover:fill-white'
  };

  const iconBackgrounds = {
    circle: `rounded-full bg-${iconBackgroundColor} p-1`,
    square: `rounded bg-${iconBackgroundColor} p-1`,
    none: ''
  };

  const buttonClasses = classNames(
    'group h-fit rounded-md font-medium transition-colors duration-200 flex items-center justify-center cursor-pointer',
    buttonSizes[size],
    buttonVariants[variant],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  // const iconWrapper = (iconElement: React.ReactNode) => (
  //   React.cloneElement(iconElement as React.ReactElement, {
  //     className: classNames(
  //       'transition-colors duration-200 circle',
  //       iconColorVariants[variant],
  //       iconSizes[size],
  //       (iconElement as React.ReactElement<{ className?: string }>).props?.className
  //     ),
  //     containerClassName: `${iconSizes[size]}`
  //   }  as React.Attributes)
  // );

  const iconWrapper = (iconElement: React.ReactNode) => {
    const iconClasses = classNames(
      'transition-colors duration-200',
      iconColor ? `fill-${iconColor} hover:fill-white` : iconColorVariants[variant],
      iconSizes[size],
      (iconElement as React.ReactElement<{ className?: string }>).props?.className
    );

    const wrapperClasses = classNames(
      'flex items-center justify-center',
      iconBackgrounds[iconBackground]
    );

    const wrappedIcon = React.cloneElement(
      iconElement as React.ReactElement,
      { className: iconClasses } as React.Attributes
    );

    return iconBackground === 'none' ? (
      wrappedIcon
    ) : (
      <div className={wrapperClasses}>{wrappedIcon}</div>
    );
  };

  const loadingStyles = classNames(
    'mr-2 !w-4 !h-4 border-white'
  );

  const content = (
    <button
      data-testid={testID}
      disabled={disabled || loading}
      className={buttonClasses}
      {...rest}
    >
      <div className="flex items-center gap-2">
        {loading && <Loading className={loadingStyles} />}
        {icon && iconPosition === 'left' && !loading && iconWrapper(icon)}
        {children}
        {icon && iconPosition === 'right' && !loading && iconWrapper(icon)}
      </div>
    </button>
  );

  if (tooltip) {
    return (
      <Tooltip message={tooltip} position={tooltipPosition}>
        {content}
      </Tooltip>
    );
  }

  return content;
}

export default Button;