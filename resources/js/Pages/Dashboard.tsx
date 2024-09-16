import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="tw-font-semibold tw-text-xl tw-text-gray-800 dark:tw-text-gray-200 tw-leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="tw-py-12">
                <div className="tw-max-w-7xl tw-mx-auto sm:tw-px-6 lg:tw-px-8">
                    <div className="tw-bg-white dark:tw-bg-gray-800 tw-overflow-hidden tw-shadow-sm sm:tw-rounded-lg">
                        <div className="tw-p-6 tw-text-gray-900 dark:tw-text-gray-100">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
