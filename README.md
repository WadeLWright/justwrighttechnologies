# Just Wright Technologies Website

This project is a Remix-based website for Just Wright Technologies, featuring dynamic color customization, modern responsive design, and interactive animations.

## Features

- Built with Remix and React for optimal performance and developer experience
- Styled with Tailwind CSS for rapid UI development
- Dynamic color customization for brand flexibility
- Fully responsive design for all device sizes
- Smooth animations and transitions using Framer Motion

## Getting Started

### Prerequisites

- Node.js (v20.0.0 or later)
- pnpm (v8.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/justwrighttechnologies.git
   cd justwrighttechnologies
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

### Development

Run the development server:

```
pnpm run dev
```

The site will be available at `http://localhost:3000`.

### Building for Production

Build the app:

```
pnpm run build
```

### Running in Production

Start the production server:

```
pnpm start
```

## Color Customization

The website features dynamic color customization. Users can change the primary and secondary colors, which are applied throughout the site using Tailwind CSS and CSS variables. This allows for easy branding adjustments without modifying the codebase.

## Animations

We use Framer Motion for smooth, performant animations throughout the site. This library provides a simple API for creating complex animations and transitions.

## Deployment

This app is ready for deployment on platforms that support Node.js applications. Ensure you set up your environment variables and build the app before deploying. Compatible with platforms like Vercel, Netlify, and traditional Node.js hosts.

## Project Structure

- `app/`: Contains the main application code
  - `components/`: Reusable React components
  - `routes/`: Remix route components
  - `styles/`: Global styles and Tailwind CSS configuration
- `public/`: Static assets

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

Please ensure your code adheres to the existing style and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.
