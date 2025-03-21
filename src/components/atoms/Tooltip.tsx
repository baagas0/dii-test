import React from 'react';

interface TooltipProps {
  message?: string;
  children: React.ReactNode;
  position: 'top' | 'bottom' | 'left' | 'right';
}

function Tooltip(props: TooltipProps): React.JSX.Element {
  const { message, children, position } = props;

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2 flex items-center justify-center',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2 flex items-center justify-center',
    left: 'right-full top-1/2 -translate-y-1/2 -translate-x- mr-2 flex items-start justify-center',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2 flex items-center justify-center'
  };

  const arrowPositionClasses = {
    top: 'bottom-[-8px] left-1/2 -translate-x-1/2 rotate-180',
    bottom: 'top-[-8px] left-1/2 -translate-x-1/2',
    left: 'right-[5px] top-1/2 -translate-y-1/2 rotate-90',
    right: 'left-[1px] top-1/2 -translate-y-1/2 -rotate-90'
  };

  return (
    <div className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <div id='position class' className={`absolute min-w-[150px] scale-0 transform transition-all duration-500 group-hover:scale-100 ${positionClasses[position]}`}>
        <div className="flex w-fit flex-col items-center justify-center shadow-lg">
          <div id='arrowposition' className={`h-2 w-4 clip-bottom bg-gray-800 absolute ${arrowPositionClasses[position]}`}></div>
          <div className="rounded bg-gray-800 p-2 text-center text-xs text-white flex justify-end">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;