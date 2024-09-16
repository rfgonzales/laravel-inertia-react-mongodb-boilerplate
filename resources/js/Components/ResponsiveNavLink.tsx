import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={`tw-w-full tw-flex tw-items-start tw-ps-3 tw-pe-4 tw-py-2 tw-border-l-4 ${active
                ? 'tw-border-indigo-400 dark:tw-border-indigo-600 tw-text-indigo-700 dark:tw-text-indigo-300 tw-bg-indigo-50 dark:tw-bg-indigo-900/50 focus:tw-text-indigo-800 dark:focus:tw-text-indigo-200 focus:tw-bg-indigo-100 dark:focus:tw-bg-indigo-900 focus:tw-border-indigo-700 dark:focus:tw-border-indigo-300'
                : 'tw-border-transparent tw-text-gray-600 dark:tw-text-gray-400 hover:tw-text-gray-800 dark:hover:tw-text-gray-200 hover:tw-bg-gray-50 dark:hover:tw-bg-gray-700 hover:tw-border-gray-300 dark:hover:tw-border-gray-600 focus:tw-text-gray-800 dark:focus:tw-text-gray-200 focus:tw-bg-gray-50 dark:focus:tw-:bg-gray-700 focus:tw-border-gray-300 dark:focus:tw-border-gray-600'
                } tw-text-base tw-font-medium focus:tw-outline-none tw-transition tw-duration-150 tw-ease-in-out ${className}`}
        >
            {children}
        </Link>

    );
}
