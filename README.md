# 1% Better Everyday

> A behavioural intelligence platform for continuous growth. Diagnose, analyze, improve, repeat.

[![Live Demo](https://img.shields.io/badge/Live_Demo-00C853?style=for-the-badge&logo=vercel&logoColor=white)](https://v0-1perbettereveryday.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_Serverless-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white)

## The Problem

Most productivity tools track actions but ignore behavioural patterns, offer generic advice, lack personalization, and don't adapt to real routines. Users abandon them quickly.

## How It Works

```
Goal Definition → Behaviour Capture (7 days) → Gap Analysis → Continuous Improvement
```

1. **Goal Definition** — user sets a goal, system builds an Ideal Behaviour Model
2. **Behaviour Capture** — records study/work duration, sleep, focus, screen usage, mood, energy over 7 days
3. **Gap Analysis** — compares ideal vs. actual behaviour to find inefficiencies and habit gaps
4. **Continuous Improvement** — smart recommendations, progress analytics, iterative feedback

## Architecture

```
User → Next.js Frontend → API Gateway → AWS Lambda → DynamoDB
                                ↓
                          AWS Cognito (Auth)
                          CloudWatch (Monitoring)
```

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Backend | AWS Lambda (Python), API Gateway (REST) |
| Database | DynamoDB (4 tables: Users, Assessments, Habits, DailyLogs) |
| Auth | AWS Cognito |
| Monitoring | CloudWatch |
| Deployment | Vercel (frontend), AWS (backend) |

## Features

- Secure authentication via AWS Cognito
- 7-day behavioural diagnostic assessment engine
- Goal and habit management with daily consistency tracking
- Analytics dashboard with progress insights
- Scalable serverless backend — zero cold-start optimization

## Getting Started

```bash
git clone https://github.com/gitswagata1/1per-Better-Everyday-with-sb.git
cd 1per-Better-Everyday-with-sb
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

## Roadmap

- [ ] AI-based recommendation engine
- [ ] Smart notifications
- [ ] Mobile application
- [ ] Advanced analytics (Life Score)
- [ ] SaaS deployment model

## License

Research and exploratory use.

---

Built by [Swagata Banerjee](https://github.com/gitswagata1)
