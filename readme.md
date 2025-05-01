## Express Init

`express-init` is a command-line tool that helps you quickly initialize a new Express.js application with a pre-defined folder structure. It automates the process of setting up a basic Express app with essential directories and configuration files, allowing you to focus on building your application.

## Features

- Prompts you for the name of your app.
- Asks if you want to use Zod for validation (optional).
- Creates a pre-configured folder structure for your Express app:

  - `public`: Static files such as images, CSS, JS.
  - `controllers`: Controllers to handle route logic.
  - `routes`: Route definitions for different API endpoints.
  - `db`: Database-related files.
  - `middleware`: Custom middleware for the app.
  - `views`: Template views (if needed).
  - `validations`: Zod validation schemas (if opted in).

- Generates a `package.json` file with the app's name and essential dependencies.
- Generates a basic `app.js` file to get your server up and running.
- Provides a simple setup process to get started quickly.

## Installation

To use `express-init`, you can install it globally using npm:

bash

CopyEdit

`npm install -g express-init`

After installation, you can run the tool directly from the command line.

## Usage

### 1. Initialize a New Express App

To create a new Express app with `express-init`, run the following command in your terminal:

bash

CopyEdit

`express-init`

The tool will prompt you for a few details:

1.  **App Name**: Enter the name of your Express app (e.g., `my-express-app`).
2.  **Zod for Validation**: Choose whether to use Zod for validation in your app.

Once you've answered the prompts, `express-init` will generate the necessary files and folder structure for your app.

### 2. After Initialization

Once the initialization is complete, you'll see the following message:

vbnet

CopyEdit

`Your Express app has been created in /path/to/your/project
Don't forget to run 'npm install' to install the dependencies.`

### 3. Install Dependencies

Navigate to the project folder:

bash

CopyEdit

`cd /path/to/your/project`

Then, run the following command to install the required dependencies:

bash

CopyEdit

`npm install`

This will install the necessary packages defined in your `package.json` file.

### 4. Running Your Application

Once dependencies are installed, you can run your application using:

bash

CopyEdit

`node app.js`

Or, you can add a script to run the app more easily:

bash

CopyEdit

`npm start`

This will start the Express server, and you should see a message like:

arduino

CopyEdit

`Server running at http://localhost:3000`

## Folder Structure

The following folders and files will be created:

`your-app-name/
├── app.js
├── controllers/
├── db/
├── middleware/
├── public/
├── routes/
├── validations/
└── views/`

### app.js

A basic Express app configuration that includes:

- Middleware for JSON parsing.
- Middleware for serving static files from the `public` folder.
- Placeholder for routes and controllers.

### controllers/

This folder will contain the business logic for your routes. You can create separate controllers for each resource (e.g., `userController.js`, `postController.js`).

### routes/

In this folder, you define your routes (e.g., `userRoutes.js`, `authRoutes.js`). Routes are linked to controllers to process requests.

### db/

This folder contains files for connecting and managing your database. You can add database configuration files and models here.

### middleware/

This folder contains custom middleware functions. You can add middleware for authentication, logging, error handling, etc.

### public/

This folder is where static files (like images, CSS, JavaScript, etc.) are stored. Express will serve these files to the browser.

### validations/

If you chose to use Zod, this folder will contain validation schemas (e.g., `schema.js`). You can define your validation rules for API requests here.

### views/

If you want to use templates, this folder will store view files (e.g., EJS, Pug templates). It’s usually used if you're building a web app that serves HTML templates.

## Configuration

The default configuration of the `express-init` tool creates an app with the following dependencies:

- **express**: A minimal and flexible Node.js web application framework.
- **dotenv**: For environment variable management.
- **inquirer**: For asking user input during initialization.
- **fs-extra**: A package that adds extra file system methods (like `copyFile` and `mkdir`).
- **zod** (optional): A schema validation library, only if you choose to use it.

You can further customize these configurations by manually editing the `package.json` and adding more dependencies as needed.

## Contributing

Feel free to contribute to the `express-init` package! To do so, follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -am 'Add new feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Create a pull request.

### Bug Reports and Issues

If you encounter any bugs or issues, please report them on the [GitHub Issues page](https://github.com/your-repository/issues).

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

- This tool was inspired by various Express.js starters and scaffolding tools.
- Thanks to the developers of [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) for the interactive command-line prompt.

---

### Customize the README

- You can modify and extend the folder structure or the features as your project evolves. For example, you may choose to add additional configuration files or other features based on user feedback.
- Don't forget to update the **version** number in the `package.json` when making updates or changes to the app.
