import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'tw-inline-flex tw-items-center tw-px-1 tw-pt-1 tw-border-b-2 tw-text-sm tw-font-medium tw-leading-5 tw-transition tw-duration-150 tw-ease-in-out focus:tw-outline-none ' +
                (active
                    ? 'tw-border-indigo-400 dark:tw-border-indigo-600 tw-text-gray-900 dark:tw-text-gray-100 focus:tw-border-indigo-700 '
                    : 'tw-border-transparent tw-text-gray-500 dark:tw-text-gray-400 hover:tw-text-gray-700 dark:hover:tw-text-gray-300 hover:tw-border-gray-300 dark:hover:tw-border-gray-700 focus:tw-text-gray-700 dark:focus:tw-text-gray-300 focus:tw-border-gray-300 dark:focus:tw-border-gray-700 ') +
                className
            }
        >
            {children}
        </Link>

    );
}
