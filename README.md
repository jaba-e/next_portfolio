### Overview

### Project Structure

- `src/app/`: Contains pages for routing.
- `src/components/`: Reusable components and sections.
- `src/static/`: Static files such as css constants.
- `public/`: Holds static assets like images and fonts.
- `lib/`: Utility functions or external configurations.

## Getting Started

1. **Copy environment variables:**

```bash
cp .env.example .env.local
```

2. **Start container:**

```bash
docker compose up -d
```

3. **The application will be accessible at:**

```bash
http://localhost:3000
```

## Deployment

Any commit to the main branch is automatically deployed into production using CI-CD. Initiate a merge to the development branch beforehand for preview deployment.

## Feedback and Issues

If you encounter any issues or have suggestions for improvement, please feel free to create an issue.
