# Laravel Inertia React MongoDB Boilerplate

This boilerplate provides a starting point for Laravel applications using Laravel 11 using Inertia.js with React. It integrates Laravel Breeze for authentication and uses MongoDB as the default database. This setup helps streamline the development process for modern web applications with a robust stack.

## Features

-   **Laravel**: PHP framework for building web applications.
-   **Inertia.js**: Allows you to build modern single-page applications (SPAs) using classic server-side routing and controllers.
-   **React**: JavaScript library for building user interfaces.
-   **Laravel Breeze**: Simple authentication scaffolding for Laravel.
-   **MongoDB**: NoSQL database used as the default database.
-   **Docker**: Containerization for development and deployment.
-   **Caching**: Uses Redis for caching

## Requirements

-   PHP >= 8.2
-   Node.js >= 18.x
-   MongoDB
-   Docker (for containerized environment)

## Getting Started

Follow these steps to set up the boilerplate on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/rfgonzales/inertia-react-laravel-breeze-mongodb-boilerplate.git
cd laravel-inertia-react-boilerplate
```

### 2. Install PHP dependencies

`composer install`

### 3. Install Node Dependencies

`npm install`

### 4.Docker Setup (for Containerized Environments)

`docker compose up -d`

## Usage

to run the server `php artisan serve`
on a separate terminal run `npm run dev`

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

# Contributing

If you want to contribute to this project, please follow these guidelines:

-   Fork the repository.
-   Create a new branch for your feature or bug fix.
-   Make your changes and test thoroughly.
-   Submit a pull request with a clear description of the changes.


## License Information

This project uses the following open-source libraries and tools:

- **Laravel**
  - **License:** [MIT License](https://opensource.org/licenses/MIT)
  - **URL:** [GitHub Repository](https://github.com/laravel/laravel)

- **Inertia.js**
  - **License:** [MIT License](https://opensource.org/licenses/MIT)
  - **URL:** [GitHub Repository](https://github.com/inertiajs/inertia)

- **React**
  - **License:** [MIT License](https://opensource.org/licenses/MIT)
  - **URL:** [GitHub Repository](https://github.com/facebook/react)

- **Laravel Breeze**
  - **License:** [MIT License](https://opensource.org/licenses/MIT)
  - **URL:** [GitHub Repository](https://github.com/laravel/breeze)

- **MongoDB**
  - **License:** [Server Side Public License (SSPL)](https://www.mongodb.com/licensing/server-side-public-license)
  - **URL:** [MongoDB License Details](https://www.mongodb.com/legal/sspl)

- **Docker**
  - **License:** [Apache License 2.0](https://opensource.org/licenses/Apache-2.0)
  - **URL:** [GitHub Repository](https://github.com/docker/docker)

- **Redis**
  - **License:** [Redis Source Available License (RSAL)](https://redis.io/topics/license)
  - **URL:** [Redis License Details](https://redis.io/topics/license)

## Additional Notes

Please refer to the respective repositories or official documentation for full license details and any additional terms or conditions. Make sure to comply with all licensing requirements when using these libraries and tools in your project.

