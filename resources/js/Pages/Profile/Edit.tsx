import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Edit({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="tw-font-semibold tw-text-xl tw-text-gray-800 dark:tw-text-gray-200 tw-leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="tw-py-12">
                <div className="tw-max-w-7xl tw-mx-auto sm:tw-px-6 lg:tw-px-8 tw-space-y-6">
                    <div className="tw-p-4 tw-sm:p-8 tw-bg-white dark:tw-bg-gray-800 tw-shadow sm:tw-rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="tw-max-w-xl"
                        />
                    </div>

                    <div className="tw-p-4 sm:tw-p-8 tw-bg-white dark:tw-bg-gray-800 tw-shadow sm:tw-rounded-lg">
                        <UpdatePasswordForm className="tw-max-w-xl" />
                    </div>

                    <div className="tw-p-4 sm:tw-p-8 tw-bg-white dark:tw-bg-gray-800 tw-shadow sm:tw-rounded-lg">
                        <DeleteUserForm className="tw-max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
