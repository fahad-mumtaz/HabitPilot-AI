# HabitPilot AI

A full-stack SaaS habit tracking application with AI-powered coaching, featuring both web and mobile applications.

## 🚀 Features

- **Web App**: Next.js with TypeScript, Tailwind CSS, and Shadcn UI
- **Mobile App**: Expo React Native with NativeWind
- **Shared Backend**: Express.js API with Prisma and MongoDB
- **AI Coach**: Personalized habit improvement tips and weekly planning
- **Analytics**: Progress tracking with charts and insights
- **Streak System**: Bronze, Silver, Gold badges for consistency
- **Dark/Light Theme**: Beautiful UI with theme switching

## 📁 Project Structure

```
HabitPilot-AI/
├── packages/
│   ├── backend/     # Express.js API server
│   ├── web/         # Next.js web application
│   └── mobile/      # Expo React Native app
├── package.json     # Root workspace configuration
└── README.md
```

## 🛠 Tech Stack

### Backend
- Node.js with Express.js
- Prisma ORM with MongoDB
- JWT Authentication
- OpenAI Integration for AI Coach
- TypeScript

### Web App
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- React Query for state management
- NextAuth.js for authentication

### Mobile App
- Expo React Native
- TypeScript
- NativeWind for styling
- React Navigation
- React Query for state management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB instance (local or cloud)
- OpenAI API key (for AI Coach features)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install:all
   ```

3. Set up environment variables:
   ```bash
   cp packages/backend/.env.example packages/backend/.env
   ```

4. Set up the database:
   ```bash
   npm run db:push
   ```

5. Start development servers:
   ```bash
   npm run dev
   ```

### Environment Variables

Create a `.env` file in `packages/backend/`:

```env
DATABASE_URL="mongodb://localhost:27017/habitpilot"
JWT_SECRET="your-super-secret-jwt-key"
OPENAI_API_KEY="your-openai-api-key"
PORT=3001
```

## 📱 Usage

- **Web App**: Available at http://localhost:3000
- **Mobile App**: Run `npm run dev:mobile` and use Expo Go app
- **API**: Available at http://localhost:3001

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

MIT License - see LICENSE file for details
