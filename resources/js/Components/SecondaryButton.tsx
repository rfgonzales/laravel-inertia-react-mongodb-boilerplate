import { ButtonHTMLAttributes } from 'react';

export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            type={type}
            className={`tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-bg-white dark:tw-bg-gray-800 tw-border tw-border-gray-300 dark:tw-border-gray-500 tw-rounded-md tw-font-semibold tw-text-xs tw-text-gray-700 dark:tw-text-gray-300 tw-uppercase tw-tracking-widest tw-shadow-sm hover:tw-bg-gray-50 dark:hover:tw-bg-gray-700 focus:outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2 dark:focus:tw-ring-offset-gray-800 disabled:tw-opacity-25 tw-transition tw-ease-in-out tw-duration-150 ${disabled ? 'tw-opacity-25' : ''} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>

    );
}
