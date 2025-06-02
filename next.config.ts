const nextConfig = {
  output: 'export',
  basePath: '/SKC-Portfolio',
  assetPrefix: '/SKC-Portfolio',
  // ...other config if you have
};


import type {NextConfig} from 'next';

// IMPORTANT: Replace 'your-repository-name' with the actual name of your GitHub repository.
// For example, if your GitHub repository URL is https://github.com/yourusername/my-portfolio,
// then repositoryName should be 'my-portfolio'.
const repositoryName = 'SKC-Portfolio';

const nextConfig: NextConfig = {
  // basePath needs to be set for GitHub Pages deployments if your site is in a subdirectory.
  // It should be the name of your repository, preceded by a slash.
  basePath: `/${repositoryName}`,

  // assetPrefix also needs to be set for GitHub Pages to ensure static assets load correctly.
  assetPrefix: `/${repositoryName}/`,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Image optimization is not compatible with `output: 'export'`.
    // Setting unoptimized to true disables image optimization.
    unoptimized: true,
  },
  output: 'export',
  /* other config options here */
};

export default nextConfig;
