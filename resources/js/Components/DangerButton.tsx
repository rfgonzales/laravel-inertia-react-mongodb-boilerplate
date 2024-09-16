import { ButtonHTMLAttributes } from 'react';

export default function DangerButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-bg-red-600 tw-border tw-border-transparent tw-rounded-md tw-font-semibold tw-text-xs tw-text-white tw-uppercase tw-tracking-widest hover:tw-bg-red-500 active:tw-bg-red-700 focus:outline-none focus:tw-ring-2 focus:tw-ring-red-500 focus:tw-ring-offset-2 dark:focus:tw-ring-offset-gray-800 tw-transition tw-ease-in-out tw-duration-150 ${disabled && 'tw-opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>

    );
}
