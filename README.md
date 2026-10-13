<div align="center">

[![header](https://capsule-render.vercel.app/api?type=waving&color=0:141e30,50:e44d26,100:f7b733&height=200&section=header&text=1%25%20Better%20Everyday&fontSize=44&fontColor=ffffff&animation=fadeIn&fontAlignY=34&desc=Behavioural%20intelligence%20for%20continuous%20growth&descAlignY=54&descSize=16&descColor=f0e6d3)](https://github.com/gitswagata1/1per-Better-Everyday-with-sb)

**Diagnose your habits. Analyze your patterns. Improve every day.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-00C853?style=for-the-badge&logo=vercel&logoColor=white)](https://v0-1perbettereveryday.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/gitswagata1/1per-Better-Everyday-with-sb?style=for-the-badge&logo=github&color=f7b733)](https://github.com/gitswagata1/1per-Better-Everyday-with-sb/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white)
![Cognito](https://img.shields.io/badge/Cognito-DD344C?style=flat-square&logo=amazonaws&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

</div>

---

## The Problem

Most productivity tools track actions but ignore behavioural patterns. They offer generic advice, lack personalization, and don't adapt to real routines — so users abandon them within weeks.

**1% Better Everyday** takes a different approach: a 7-day behavioural diagnostic that builds an Ideal Behaviour Model unique to you, then continuously compares your actual patterns against it to surface actionable gaps.

## How It Works

```
Goal Definition → Behaviour Capture (7 days) → Gap Analysis → Continuous Improvement
```

1. **Goal Definition** — Set a goal; the system builds an Ideal Behaviour Model
2. **Behaviour Capture** — Records study/work duration, sleep, focus, screen usage, mood, and energy over 7 days
3. **Gap Analysis** — Compares ideal vs. actual behaviour to find inefficiencies and habit gaps
4. **Continuous Improvement** — Smart recommendations, progress analytics, iterative feedback

## Architecture

```
┌──────────────┐     ┌───────────────┐     ┌─────────────┐     ┌──────────────┐
│   Browser    │────▶│  Next.js App  │────▶│ API Gateway │────▶│ AWS Lambda   │
│   (React)    │◀────│  (Vercel)     │◀────│   (REST)    │◀────│  (Python)    │
└──────────────┘     └───────────────┘     └──────┬──────┘     └──────┬───────┘
                                                  │                   │
                                           ┌──────▼──────┐    ┌──────▼───────┐
                                           │ AWS Cognito  │    │  DynamoDB    │
                                           │   (Auth)     │    │  (4 Tables)  │
                                           └─────────────┘    └──────────────┘
                                                               • Users
                                                               • Assessments
                                                               • Habits
                                                               • DailyLogs
```

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS, Radix UI, Recharts |
| **Backend** | AWS Lambda (Python), API Gateway (REST) |
| **Database** | DynamoDB — single-table design, sub-10ms reads |
| **Auth** | AWS Cognito (JWT) |
| **Monitoring** | CloudWatch |
| **Deployment** | Vercel (frontend) · AWS (backend) |

## Features

- Secure authentication via AWS Cognito with JWT
- 7-day behavioural diagnostic assessment engine
- Goal and habit management with daily consistency tracking
- Analytics dashboard with progress insights and Recharts visualizations
- Behaviour map for pattern recognition
- Fully serverless backend — zero cold-start optimization
- Dark/light theme support

## Getting Started

### Prerequisites

- **Node.js** 18+ (see `.nvmrc`)
- **pnpm** — `npm install -g pnpm`
- **AWS Account** — for Cognito, Lambda, DynamoDB, API Gateway

### Installation

```bash
# Clone the repository
git clone https://github.com/gitswagata1/1per-Better-Everyday-with-sb.git
cd 1per-Better-Everyday-with-sb

# Install dependencies
pnpm install
```

### Environment Setup

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_COGNITO_USER_POOL_ID=us-east-1_XXXXXXXXX
NEXT_PUBLIC_COGNITO_CLIENT_ID=your-client-id
NEXT_PUBLIC_API_GATEWAY_URL=https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/prod
```

### Run Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Other Commands

```bash
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## AWS Deployment

### Backend (Lambda + DynamoDB)

1. **DynamoDB** — Create 4 tables: `Users`, `Assessments`, `Habits`, `DailyLogs` with on-demand capacity
2. **Cognito** — Create a User Pool with email sign-up and a corresponding App Client
3. **Lambda** — Deploy handler functions with DynamoDB access IAM roles
4. **API Gateway** — Create REST API with Cognito authorizer, connect to Lambda functions

### Frontend (Vercel)

```bash
# Deploy to Vercel
vercel --prod
```

Set environment variables in the Vercel dashboard matching your `.env.local`.

## Roadmap

- [ ] AI-based recommendation engine
- [ ] Habit streak visualization with charts
- [ ] Offline support with service worker
- [ ] Export habits data to CSV
- [ ] Smart notifications and reminders
- [ ] Mobile application (React Native)
- [ ] Advanced analytics — Life Score composite metric
- [ ] SaaS deployment model

## Contributing

Contributions are welcome! Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "feat: add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See our [good first issues](https://github.com/gitswagata1/1per-Better-Everyday-with-sb/labels/good%20first%20issue) for beginner-friendly tasks.

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Recharts](https://recharts.org/), and [AWS Serverless](https://aws.amazon.com/serverless/).

---

<div align="center">

**Built by [Swagata Banerjee](https://github.com/gitswagata1)**

If this project helped you, consider giving it a ⭐

[![footer](https://capsule-render.vercel.app/api?type=waving&color=0:f7b733,50:e44d26,100:141e30&height=100&section=footer)](https://github.com/gitswagata1/1per-Better-Everyday-with-sb)

</div>
