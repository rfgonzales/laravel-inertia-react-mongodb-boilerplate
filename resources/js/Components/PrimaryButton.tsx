import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-bg-gray-800 dark:tw-bg-gray-200 tw-border tw-border-transparent tw-rounded-md tw-font-semibold tw-text-xs tw-text-white dark:tw-text-gray-800 tw-uppercase tw-tracking-widest hover:tw-bg-gray-700 dark:hover:tw-bg-white focus:tw-bg-gray-700 dark:focus:tw-bg-white active:tw-bg-gray-900 dark:active:tw-bg-gray-300 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-indigo-500 tw-focus:ring-offset-2 dark:tw-focus:ring-offset-gray-800 tw-transition tw-ease-in-out tw-duration-150 ${disabled && 'tw-opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>

    );
}
