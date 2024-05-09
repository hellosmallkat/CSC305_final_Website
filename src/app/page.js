'use client'
import { ArrowTrendingUpIcon, KeyIcon, IdentificationIcon, TagIcon, QuestionMarkCircleIcon, CogIcon } from '@heroicons/react/20/solid'

import Hero from "../components/page-sections/Hero"
import CallToAction from "../components/page-sections/CallToAction"
import Footer from "../components/page-sections/Footer"
import FeatureRight from "../components/page-sections/FeatureRight"
import FeatureLeft from "../components/page-sections/FeatureLeft"

export default function App() {
  return (
    <div>
      <Hero />
      <FeatureRight
        smallText="Sign In / Sign Out"
        title="Get Started with Coin Trail By Signing In or Signing Up!"
        description="Make an effort to start tracking your expenses and budgeting your money today by using Coin Trail."
        features={[
          {
            name: 'Creation of User Account',
            description:
              'Create a user account to start tracking your expenses and budgeting your money today.',
            icon: KeyIcon,
          },
          {
            name: 'Remember Login Credentials',
            description: 'Remember your login credentials to sign in quickly and easily.',
            icon: KeyIcon,
          },
        ]}
        images={[
          {
            src: "/screens/SignInScreen.jpeg",
            alt: "Sign In Screen",
          },
          {
            src: "/screens/SignUpScreen.jpg",
            alt: "Sign Up Screen",
          },
        ]}
      />
      <FeatureLeft
        smallText="Profile"
        title="Customize Your Profile To Your Liking!"
        description="Ability to change your name, gender, birthday, and budget to match your preferences. You can even manage your expense categories."
        features={[
          {
            name: 'Edit Profile Information',
            description:
              'Edit your name, gender, birthday, and budget to match your preferences.',
            icon: IdentificationIcon,
          },
          {
            name: 'Edit Expense Categories',
            description: 'Edit your expense categories with a click of a button.',
            icon: IdentificationIcon,
          },
        ]}
        images={[{
          src: "/screens/ProfileScreen.jpg",
          alt: "Expense Screen",
        }]}
      />
      <FeatureRight
        smallText="Expense Tracking"
        title="Track Your Expenses With Real-Time Updates!"
        description="Ability to track your expenses manually or scanning a receipt with real-time updates and categorize your expenses to organize your spending habits."
        features={[
          {
            name: 'Manual Expense Tracking',
            description:
              'Manually track your expenses with real-time updates.',
            icon: TagIcon,
          },
          {
            name: 'Scan Receipt',
            description: 'Scan a receipt to automatically track your expenses.', 
            icon: TagIcon,
          },
          {
            name: 'Categorization',
            description: 'Categorize your expenses to organize your spending habits.',
            icon: TagIcon,
          },
          {
            name: 'Add Subscription Expenses',
            description: 'Add subscription expenses to your budget.',
            icon: TagIcon,
          },
        ]}
        images={[
          {
            src: "/screens/ExpensesScreen.jpeg",
            alt: "Sign In Screen",
          },
          {
            src: "/screens/SubscriptionScreen.jpeg",
            alt: "Sign In Screen",
          },
        ]}
      />
      <FeatureLeft
        smallText="Spending Analysis"
        title="Analyze Your Spending Habits!"
        description="Ability to analyze your spending habits and make smarter financial decisions."
        features={[
          {
            name: 'Bar Chart',
            description: 'Analyze your spending habits with a bar chart.',
            icon: ArrowTrendingUpIcon,
          },
          {
            name: 'Search Categories',
            description: 'Search for categories to analyze your spending habits.',
            icon: ArrowTrendingUpIcon,
          },
        ]}
        images={[
          {
            src: "/screens/TrendScreen.jpg",
            alt: "Sign In Screen",
          },
        ]}
      />
      <FeatureRight
        smallText="Artificial Intelligence"
        title="Ask Cointrail AI to Make Smarter Financial Decisions!"
        description="Get smarter using Cointrail AI in your financial decisions."
        features={[
          {
            name: 'Customized Answers',
            description: 'Get personalized answers to your financial questions using Cointrail AI.',
            icon: QuestionMarkCircleIcon,
          },
        ]}
        images={[
          {
            src: "/screens/AIScreen.jpeg",
            alt: "Sign In Screen",
          },
        ]}
      /> 
      <FeatureLeft
        smallText="Settings"
        title="Customize Your Settings To Your Like!"
        description="Select your preferred settings to match your preferences."
        features={[
          {
            name: 'App Background Color',
            description: 'Change your background color to match your preferences.',
            icon: CogIcon,
          },
          {
            name: 'App Font Color',
            description: 'Change your font color to match your preferences.',
            available: false,
            icon: CogIcon,
          },  
          {
            name: 'App Font Style',
            description: 'Change your font style to match your preferences.',
            available: false,
            icon: CogIcon,
          },
        ]}        
        images={[
          {
            src: "/screens/UserSettingsScreen.jpg",
            alt: "Sign In Screen",
          },
        ]}
      />
      <CallToAction />
      <Footer />
    </div>
  )
}