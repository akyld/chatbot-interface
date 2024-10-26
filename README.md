This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Chatbot Interface

This is a simple chatbot interface built with React. It includes a theme toggle feature and displays a placeholder message when there are no messages.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/akyld/chatbot-interface.git
   cd chatbot-interface
   ```
2. Install dependencies:
   npm install

## Getting Started

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open your browser and navigate to http://localhost:3000.

Approach
The Home component manages the state of the messages and the theme.
The ChatBox component displays the messages and a placeholder text when there are no messages.
The MessageInput component handles user input and sends messages.
The ThemeToggle component toggles between light and dark themes.
Tailwind CSS and Shadcn.ui used for styling the components.
