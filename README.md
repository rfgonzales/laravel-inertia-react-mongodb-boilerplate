# Laravel Inertia React MongoDB Boilerplate

This boilerplate provides a starting point for Laravel 13 applications using Inertia.js with React 19 and MongoDB as the default database.

## Features

- **Laravel 13**: PHP framework for building web applications.
- **PHP 8.4**: Required application runtime.
- **Inertia.js 3**: Modern single-page applications using server-side routing.
- **React 19**: JavaScript library for building user interfaces.
- **Laravel Breeze**: Authentication scaffolding.
- **MongoDB**: Default database with the Laravel MongoDB integration.
- **Docker**: Development and deployment containers.
- **Redis**: Caching support.
- **Tailwind CSS 4**: Utility-first styling.
- **React Bootstrap**: UI components.

## Requirements

- PHP >= 8.4
- Node.js >= 24.x
- MongoDB
- Docker

## Getting Started

```bash
git clone https://github.com/rfgonzales/laravel-inertia-react-mongodb-boilerplate.git
cd laravel-inertia-react-mongodb-boilerplate
composer install
npm install
cp .env.example .env
php artisan key:generate
```

### Docker

```bash
docker compose up -d
```

### Development

Run the server in one terminal:

```bash
php artisan serve
```

Run Vite in another terminal:

```bash
npm run dev
```

## MongoDB Replication

The Docker Compose configuration includes MongoDB replication setup. Start the primary MongoDB container first, stop it, then start all MongoDB containers and the setup container. Review the setup container logs for replication errors.

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md).
