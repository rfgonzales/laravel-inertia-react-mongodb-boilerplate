import { FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, FormControl } from 'react-bootstrap';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <FormControl id="email"
                        type="email"
                        name="email"
                        value={data.email}

                        autoComplete="username"

                        onChange={(e) => setData('email', e.target.value)}>

                    </FormControl>

                    <InputError message={errors.email} className="tw-mt-2" />
                </div>

                <div className="tw-mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <FormControl id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="tw-mt-1 tw-block tw-w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}>

                    </FormControl>


                    <InputError message={errors.password} className="tw-mt-2 tw-text-red" />
                </div>

                <div className="tw-block tw-mt-4">
                    <label className="tw-flex tw-items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="tw-ms-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">Remember me</span>
                    </label>
                </div>

                <div className="tw-flex tw-items-center tw-justify-end tw-mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="tw-underline tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 hover:tw-text-gray-900 dark:tw-hover:text-gray-100 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500 dark:tw-focus:tw-ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button variant="primary" className="tw-ms-4" disabled={processing} type='submit'>
                        Log in
                    </Button >
                </div>
            </form>
        </GuestLayout>
    );
}
