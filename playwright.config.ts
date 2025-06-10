/* eslint-disable import/no-extraneous-dependencies */
import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';

// Use a distinct port on CI to avoid conflicts during concurrent tests
const PORT = process.env.CI ? 3001 : 3000;

const config: PlaywrightTestConfig = {
  retries: process.env.CI ? 1 : 0,
  testDir: './tests', // Directory where tests are located
  projects: [
    {
      name: 'chromium', // Project name for Chromium browser
      use: devices['Desktop Chrome'] // Use desktop Chrome device configuration
    }
  ],
  fullyParallel: true, // Run tests in parallel across all workers
  webServer: {
    command: `PORT=${PORT} pnpm start`, // Command to start the server
    port: PORT, // Port the server listens on
    reuseExistingServer: true // Reuse existing server if available
  }
};

export default config;
