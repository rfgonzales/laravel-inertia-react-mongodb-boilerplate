import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }: { mustVerifyEmail: boolean, status?: string, className?: string }) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="tw-text-lg tw-font-medium tw-text-gray-900 dark:tw-text-gray-100">Profile Information</h2>

                <p className="tw-mt-1 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="tw-mt-6 tw-space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="tw-mt-1 tw-block tw-w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="tw-mt-1 tw-block tw-w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="tw-text-sm tw-mt-2 tw-text-gray-800 dark:tw-text-gray-200">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="tw-underline tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 hover:tw-text-gray-900 dark:hover:tw-text-gray-100 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500 dark:focus:tw-ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
