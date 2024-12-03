import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    include: [
      'tests/**/*.spec.ts'
    ],
    typecheck: {
      tsconfig: './tsconfig.tests.json'
    }
  },
})
