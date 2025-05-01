# 🚀 Express Init

`express-init` is a command-line tool that scaffolds a modern Express.js application with a clean, modular folder structure. It helps you skip the tedious setup and dive straight into building.

---

## ✨ Features

- Interactive CLI prompts:
  - App name
  - Optional Zod validation support
- Creates a project with a pre-defined folder structure:
  - `public`: Static assets (images, CSS, JS)
  - `controllers`: Business logic
  - `routes`: API routes
  - `db`: Database config & models
  - `middleware`: Custom Express middleware
  - `views`: Template engine support
  - `validations`: Zod schemas (if selected)
- Auto-generates:
  - `package.json` with dependencies
  - Basic `app.js` to start the server

---

## 📦 Installation

To install globally via npm:

```bash
npm install -g express-init
```

---

## 🛠️ Usage

### 1. Initialize a new Express app

```bash
express-init
```

Follow the prompts:

1. **App Name** – e.g. `my-express-app`
2. **Use Zod for validation?** – `Yes` / `No`

It will create the folder with all necessary files and configuration.

### 2. Navigate to the project

```bash
cd my-express-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the app

```bash
node app.js
```

Or if a `start` script is added:

```bash
npm start
```

You’ll see something like:

```bash
Server running at http://localhost:3000
```

---

## 📁 Folder Structure

```plaintext
your-app-name/
├── app.js
├── controllers/
├── db/
├── middleware/
├── public/
├── routes/
├── validations/
└── views/
```

### app.js

The entry point of the application, pre-configured with:

- `express.json()` middleware
- Static file serving from `/public`
- Route integration placeholder

### controllers/

Contains route-handling logic (e.g., `userController.js`, `postController.js`)

### routes/

Defines route files and links them with controllers (e.g., `userRoutes.js`, `authRoutes.js`)

### db/

For database configuration and connection setup

### middleware/

For custom middleware like authentication, logging, and error handling

### public/

Stores static frontend files (images, JS, CSS)

### validations/ (optional)

Only included if Zod is enabled. Define schema-based validations here.

### views/

Template files for HTML rendering (EJS, Pug, etc.)

---

## ⚙️ Configuration & Dependencies

By default, `express-init` installs:

- `express`: Web framework
- `dotenv`: Environment variable support
- `inquirer`: CLI prompt utility
- `fs-extra`: Enhanced filesystem utilities
- `zod`: (Optional) for schema-based validation

You can customize or extend the generated `package.json` as needed.

---

## 🤝 Contributing

We welcome contributions!

```bash
# Fork & clone the repo
git checkout -b feature-name
# Make changes and commit
git commit -m "Add your feature"
# Push to your fork and create a pull request
```

### Bug Reports & Issues

Open issues at [GitHub Issues](https://github.com/your-repository/issues)

---

## 📄 License

Licensed under the **ISC License**. See `LICENSE` for details.

---

## 🙌 Acknowledgments

- Inspired by popular Express.js boilerplates
- Special thanks to [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

---

> 💡 Don’t forget to bump the version in `package.json` when you publish updates!
