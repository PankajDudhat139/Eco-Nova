import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// This file is used to configure the next-intl plugin for Next.js.
const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json' // Path to your default messages file
  }
});

const config: NextConfig = {};

export default withNextIntl(config);
