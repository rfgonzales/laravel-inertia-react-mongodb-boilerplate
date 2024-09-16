import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'tw-rounded dark:tw-bg-gray-900 tw-border-gray-300 dark:tw-border-gray-700 tw-text-indigo-600 tw-shadow-sm tw-focus:ring-indigo-500 dark:tw-focus:ring-indigo-600 dark:tw-focus:ring-offset-gray-800 ' +
                className
            }
        />
    );
}
