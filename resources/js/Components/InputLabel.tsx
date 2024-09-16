import { LabelHTMLAttributes } from 'react';

export default function InputLabel({ value, className = '', children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={`tw-block tw-font-medium tw-text-sm tw-text-gray-700 dark:tw-text-gray-300 ${className}`}
        >
            {value ? value : children}
        </label>

    );
}
