export const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["how-it-works", "How It Works"],
  ["who-we-serve", "Who We Serve"],
  ["features", "Features"],
  ["business-records", "Business Records"],
  ["funding", "Become Fundable"],
  ["help", "Help / FAQ"],
];
export const people = [
  {
    id: "rider",
    icon: "bike",
    name: "Riders",
    description: "Manage trips, earnings, payments and expenses.",
    benefits: [
      "Manage trips and jobs",
      "Receive cash and Mobile Money",
      "Track earnings and expenses",
      "Build a verifiable work record",
    ],
  },
  {
    id: "courier",
    icon: "package",
    name: "Delivery Operators",
    description: "Manage deliveries, payments and earnings.",
    benefits: [
      "Manage deliveries and orders",
      "Receive cash and Mobile Money",
      "Track earnings and expenses",
      "Build a delivery performance record",
    ],
  },
  {
    id: "driver",
    icon: "car",
    name: "Drivers",
    description: "Track trips, earnings and business activity.",
    benefits: [
      "Track trips and transport jobs",
      "Receive cash and Mobile Money",
      "Monitor earnings and expenses",
      "Build a verifiable business record",
    ],
  },
];
export type Feature = { icon: string; title: string; description: string };
export const features: Feature[] = [
  {
    icon: "briefcase",
    title: "Trips & Jobs",
    description: "Accept and manage trips, deliveries and transport jobs.",
  },
  {
    icon: "wallet",
    title: "Payments",
    description:
      "Receive customer payments through Airtel Money, MTN MoMo or cash.",
  },
  {
    icon: "wallet",
    title: "ENFUNA Wallet",
    description:
      "Keep your earnings in one wallet. View your balance and manage withdrawals.",
  },
  {
    icon: "layers",
    title: "Earnings & Expenses",
    description:
      "Track daily earnings and business expenses to understand your real income.",
  },
  {
    icon: "chart",
    title: "Business Records",
    description:
      "Keep a digital history of your trips, payments, earnings and expenses.",
  },
  {
    icon: "star",
    title: "Ratings & Reviews",
    description:
      "Build trust and grow your opportunities through customer feedback.",
  },
  {
    icon: "shield",
    title: "Trust Score",
    description:
      "Build your digital reputation through activity, reliability and customer feedback.",
  },
  {
    icon: "coins",
    title: "Savings",
    description:
      "Save towards personal and business goals, individually or with a group.",
  },
  {
    icon: "bell",
    title: "Notifications & Alerts",
    description:
      "Stay informed about payments, jobs and important account activity.",
  },
  {
    icon: "headphones",
    title: "Support Center",
    description: "Get help, raise issues and track resolution within the app.",
  },
];
export const records: Feature[] = [
  {
    icon: "route",
    title: "Trips & Jobs Record",
    description:
      "A history of your trips, deliveries and transport jobs, with dates and values.",
  },
  {
    icon: "coins",
    title: "Earnings Record",
    description: "See what you earn daily, weekly and monthly.",
  },
  {
    icon: "wallet",
    title: "Payments Record",
    description: "Keep track of cash and Mobile Money payments you receive.",
  },
  {
    icon: "clipboard",
    title: "Expenses Record",
    description: "Track fuel, maintenance, data and other business costs.",
  },
  {
    icon: "chart",
    title: "Business Performance",
    description: "Understand your earnings, expenses and profit over time.",
  },
  {
    icon: "file",
    title: "Download & Share",
    description:
      "Get statements and reports for your records and future opportunities.",
  },
];
export const walletFeatures: Feature[] = [
  {
    icon: "wallet",
    title: "Get Paid",
    description: "Receive payments through Airtel Money, MTN MoMo or QR.",
  },
  {
    icon: "wallet",
    title: "Manage Your Money",
    description: "View and manage your earnings in your ENFUNA Wallet.",
  },
  {
    icon: "coins",
    title: "Withdraw Your Earnings",
    description: "Send money to your Airtel Money, MTN MoMo or bank account.",
  },
  {
    icon: "card",
    title: "Make Payments",
    description: "Pay for fuel, supplies, services and other business needs.",
  },
  {
    icon: "clipboard",
    title: "Track Transactions",
    description: "See money in and out, with a clear transaction history.",
  },
  {
    icon: "shield",
    title: "Account Security",
    description:
      "Identity verification and account security help protect your money and data.",
  },
];
export const faqs = [
  {
    category: "Getting started",
    question: "What is ENFUNA?",
    answer:
      "ENFUNA is a digital platform that helps riders, delivery operators and drivers manage their work, receive payments, track earnings and expenses, and build a reliable business record.",
  },
  {
    category: "Getting started",
    question: "Who can use ENFUNA?",
    answer:
      "The current phase is built for riders, delivery operators and drivers. Vendors and merchants are planned for Phase 2, followed by small and medium businesses in Phase 3.",
  },
  {
    category: "Account & Security",
    question: "How do I sign up and get verified (KYC)?",
    answer:
      "Create an account in the ENFUNA app and follow the identity verification steps. Provide the personal and work information and documents requested in the app.",
  },
  {
    category: "Payments & Wallet",
    question: "How do I receive payments?",
    answer:
      "ENFUNA supports Airtel Money, MTN MoMo and cash records. Use the payment options shown in the app for your account.",
  },
  {
    category: "Payments & Wallet",
    question: "How can I withdraw my money?",
    answer:
      "Open your ENFUNA Wallet, choose Withdraw, select an available Mobile Money or bank destination and review the details before confirming in the app.",
  },
  {
    category: "Payments & Wallet",
    question: "What fees does ENFUNA charge?",
    answer:
      "Review the applicable charges in the app before confirming a transaction. A public fee schedule has not yet been provided for this website.",
  },
  {
    category: "Funding",
    question: "How do I access funding through Funderspick?",
    answer:
      "Verify your identity and build a business history through your work and payments on ENFUNA. Funderspick assesses funding applications, subject to eligibility and their terms. Approval is not guaranteed.",
  },
  {
    category: "Account & Security",
    question: "How do I keep my account secure?",
    answer:
      "Keep your PIN and password private, never share verification codes, and use the security settings available in your ENFUNA account.",
  },
];
