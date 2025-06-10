// Import required Node.js modules
import {dirname} from 'path';
import {fileURLToPath} from 'url';
// Import FlatCompat for ESLint configuration compatibility
import {FlatCompat} from '@eslint/eslintrc';

// Convert import.meta.url to file path for ES modules
const __filename = fileURLToPath(import.meta.url);
// Get directory name from file path
const __dirname = dirname(__filename);

// Create new FlatCompat instance for converting ESLint config format
const compat = new FlatCompat({
  baseDirectory: __dirname
});

// Define ESLint configuration
const eslintConfig = [
  // Extend Next.js recommended configurations for core-web-vitals and TypeScript
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Disable the TypeScript rule that prevents using 'any' type
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
];

// Export the configuration
export default eslintConfig;
