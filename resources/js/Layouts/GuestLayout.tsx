import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="tw-bg-[#FCF5E5] tw-min-h-screen tw-flex tw-flex-col sm:tw-justify-center tw-items-center tw-pt-6 sm:tw-pt-0 tw-bg-gray-100 dark:tw-bg-gray-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="tw-w-20 tw-h-20 tw-fill-current tw-text-gray-500" />
                </Link>
            </div>

            <div className=" tw-bg-[#ffffff] tw-w-full sm:tw-max-w-md tw-mt-6 tw-px-6 tw-py-4 tw-bg-white dark:tw-bg-gray-800 tw-shadow-md tw-overflow-hidden sm:tw-rounded-lg">
                {children}
            </div>
        </div>
    );
}
