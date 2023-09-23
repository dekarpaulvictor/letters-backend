# Letters Backend App

This is the backend for the Letters app, a simple newsletter subscription app.

Follow the steps below to install and run the app locally.

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (>=16.0.0)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/bryanbill/letters-backend.git
   ```

2. Navigate to the project directory and install the dependencies:

   ```bash
    cd letters-backend && npm install
   ```

## Running the App

You can start the Letters Backend app using one of the following methods:

### Development Mode

To run the app in development mode with hot-reloading using Nodemon, use the following command:

```bash
npm run dev
```

The server will start on the specified port (default is 3000), and you can access it at <http://localhost:3000>.

### Production Mode

To run the app in production mode, you can use the following command:

```bash
npm start
```

This command will run ESLint to check for code quality before starting the server. If ESLint passes, the server will start and be accessible at <http://localhost:3000>.

## Testing

The app uses the AVA testing framework. To run the tests, use the following command:

``` bash
npm test
```

This will execute the tests defined in the test directory.

## License

This project is licensed under the ISC License.

## Author

Brian Omondi

Feel free to reach out to [me](mailto://bryanbill254@gmail.com) for any questions or support related to this app
