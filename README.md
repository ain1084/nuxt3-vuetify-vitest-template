# Nuxt3 Vuetify Vitest Template

![Test Status](https://github.com/ain1084/nuxt3-vuetify-vitest-template/actions/workflows/test.yml/badge.svg)

This template provides a pre-configured development environment for Nuxt 3 with Vuetify, Vitest, and ESLint. It is designed to help beginners set up a Nuxt project with component testing support quickly and easily.

## Features

- **Nuxt 3**: A modern framework for building Vue.js applications.
- **Vuetify**: Material Design component library.
- **Vitest**: A lightweight and fast testing framework for Vue components.
- **ESLint**: Ensures code consistency and quality with recommended rules.
- **Pre-configured VS Code settings**: Includes recommended extensions and settings for optimal development experience.

---

## Getting Started

You can use this template to create a new repository or clone it directly. Follow the steps below:

### Option 1: Use the Template on GitHub

1. Go to the [GitHub repository](https://github.com/ain1084/nuxt3-vuetify-vitest-template).

2. Click on the **"Use this template"** button.

3. Enter a name for your new repository and choose whether it should be public or private.

4. Click **"Create repository from template"**.

5. Clone the newly created repository to your local machine:

   ```bash
   git clone https://github.com/[your username]/your-new-repo.git
   cd your-new-repo
   ```

6. Install dependencies and start the development server (see below).

---

### Option 2: Clone Directly

1. Clone this repository:

   ```bash
   git clone https://github.com/ain1084/nuxt3-vuetify-vitest-template.git
   cd nuxt3-vuetify-vitest-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

### About `package-lock.json`

This template does not include a `package-lock.json` file to ensure flexibility across different platforms (e.g., macOS ARM64, Linux x64, Windows ARM64).

To generate a lock file for your environment, run:

```bash
npm install
```

---

## Directory Structure

Here is a simplified directory structure to help you locate important files mentioned in this README:

```plaintext
nuxt3-vuetify-vitest-template/
├── components/                # Vue components
│   └── HelloWorld.vue         # Example component
├── tests/                     # Test files
│   └── components/
│       └── HelloWorld.spec.ts # Test for HelloWorld.vue
├── .vscode/                   # VS Code settings
│   ├── extensions.json        # Recommended VS Code extensions
│   └── settings.json          # VS Code settings
├── .devcontainer/             # Development container configuration
│   └── devcontainer.json
├── nuxt.config.ts             # Nuxt configuration
├── eslint.config.mjs          # ESLint configuration
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

### Key Files

- **`components/HelloWorld.vue`**: A simple example component.
- **`tests/components/HelloWorld.spec.ts`**: A test file for `HelloWorld.vue` using Vitest.
- **`.vscode/extensions.json`**: Lists recommended extensions for VS Code.
- **`.vscode/settings.json`**: Pre-configured settings for VS Code.
- **`nuxt.config.ts`**: The main configuration file for the Nuxt application.
- **`eslint.config.mjs`**: Custom ESLint rules and settings.

---

## Usage

### Default Components and Tests

The template includes a sample component (`HelloWorld.vue`) and a corresponding test file (`HelloWorld.spec.ts`) to demonstrate how to write and run tests.

#### HelloWorld.vue

   ```vue
   <template>
     <div>
       <p>Hello, {{ name }}!</p>
       <v-btn @click="sayHello">Say Hello</v-btn>
     </div>
   </template>

   <script setup lang="ts">
   const name = ref('World')
   const sayHello = () => {
     name.value = 'Vitest!'
   }
   </script>
   ```

#### HelloWorld.spec.ts

   ```typescript
   import { mount } from '@vue/test-utils'
   import { describe, it, expect } from 'vitest'
   import { createVuetify } from 'vuetify'
   import HelloWorld from '@/components/HelloWorld.vue'

   describe('HelloWorld.vue', () => {
     const vuetify = createVuetify()

     it('renders the correct message', () => {
       const wrapper = mount(HelloWorld, {
         global: {
           plugins: [vuetify]
         }
       })
       expect(wrapper.text()).toContain('Hello, World!')
     })

     it('updates the message when the button is clicked', async () => {
       const wrapper = mount(HelloWorld, {
         global: {
           plugins: [vuetify]
         }
       })
       await wrapper.find('button').trigger('click')
       expect(wrapper.text()).toContain('Hello, Vitest!')
     })
   })
   ```

### Run Tests

To execute the tests, use the following command:

   ```bash
   npm run test
   ```

To view a coverage report:

   ```bash
   npm run test:coverage
   ```

---

## CI/CD with GitHub Actions

This template includes a pre-configured GitHub Actions workflow for running tests automatically.

### Workflow: `test.yml`

The workflow is triggered on:

- **Push events** to the `main` branch.
- **Pull requests** targeting the `main` branch.
- **Manual dispatch** through the GitHub Actions interface.

The workflow performs the following steps:

1. **Checkout code**: Clones the repository.
2. **Set up Node.js**: Ensures the correct Node.js version is installed.
3. **Install dependencies**: Installs all required packages.
4. **Run tests**: Executes unit tests using Vitest.

### Test Status Badge

To display the test status badge for your repository, replace `[Your username]` and `[Your repository]` in the URL below:

```markdown
![Test Status](https://github.com/[Your username]/[Your repository]/actions/workflows/test.yml/badge.svg)
```

For example, if your GitHub username is ain1084 and your repository is nuxt3-vuetify-vitest-template, use:

![Test Status](https://github.com/ain1084/nuxt3-vuetify-vitest-template/actions/workflows/test.yml/badge.svg)

You can add this line at the top of your README.md to display the badge.

---

## Pre-configured Settings

### **VS Code Configuration**

The template includes recommended extensions and settings for a seamless development experience:

- **Recommended Extensions**
  - `dbaeumer.vscode-eslint` (ESLint)
  - `fill-labs.dependi` (Dependency management)
  - `Vue.volar` (Vue.js support)

- **Settings**

   ```json
   {
     "eslint.useESLintClass": true,
     "eslint.useFlatConfig": true,
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit"
     },
     "editor.tabSize": 2,
     "editor.insertSpaces": true,
     "[vue]": {
       "editor.defaultFormatter": "Vue.volar"
     }
   }
   ```

### **Dev Container**

The template includes a `.devcontainer/devcontainer.json` file for users who wish to use a pre-configured development container in Visual Studio Code. This setup is optional and does not require additional steps.

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run generate`: Generate a static site.
- `npm run lint`: Run ESLint to check for code issues.
- `npm run lint:fix`: Automatically fix linting issues.
- `npm run test`: Run unit tests with Vitest.
- `npm run test:coverage`: Generate a coverage report for the tests.
- `npm run test:ui`: Launch the Vitest UI for interactive testing.

---

## Notes

1. **Node.js version**: Ensure you are using Node.js v18 or later.
2. **Vuetify styles**: Vuetify styles are automatically applied through the `vuetify-nuxt-module`.
3. **Ecosystem**: The template is designed for beginners who want a ready-to-use Nuxt 3 setup with testing capabilities.
4. **Experimental nature**: This template has not been extensively tested in active projects yet. Please consider it as a reference or starting point for your own projects.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
