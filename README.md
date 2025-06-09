# StudentProjectHub

A full-stack web application for showcasing student technical projects with AI-powered project descriptions.

## Features

- Interactive 3D Computer Model using Three.js
- Project Showcase with filtering
- AI-powered project descriptions
- Contact form with database integration
- Responsive design with Tailwind CSS
- Cyberpunk-themed UI

## Tech Stack

- Frontend: React + Vite + TypeScript + Tailwind CSS
- Backend: Express.js + TypeScript
- Database: PostgreSQL (Neon.tech)
- ORM: Drizzle
- 3D Graphics: Three.js
- AI Integration: OpenAI/Together AI

## Setup Instructions

1. Clone the repository
```bash
git clone <your-repo-url>
cd StudentProjectHub
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with:
```
DATABASE_URL="your_neon_database_url"
```

4. Initialize database
```bash
npm run db:push
```

5. Run development server
```bash
npm run dev
```

## Database Setup

The project uses Neon.tech PostgreSQL database. Make sure to:
1. Create a database in Neon.tech
2. Add the connection string to .env
3. Run migrations using `npm run db:push`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
