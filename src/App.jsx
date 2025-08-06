import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'
import {
  IoLogoAndroid,
  IoLogoApple,
  IoLogoUsd,
  IoIosPie,
  IoMdCloudUpload,
  IoMdStats,
  IoIosNotifications,
  IoIosTrendingUp,
  IoMdCash
} from "react-icons/io";


const services = [
  {
    title: "Add and track expenses", 
    content:
      "Easily record your daily expenses and track where your money goes.\n💡 Keep your spending in check, one entry at a time.",
    buttonText: "Add Task", 
    icon: <IoLogoAndroid  size={60}/>,
  },
  {
    title: "Manage your income", 
    content:
      "Log your income sources and get real-time updates on your earnings.\n💡 Understand your true earning capacity.",
    buttonText: "Track Income", 
    icon: <IoLogoApple size={60} />,
  },
  {
    title: "Smart budgeting", 
    content:
      "Set your monthly budgets and avoid overspending with alerts.\n💡 Stay ahead, never overspend.",
    buttonText: "Set Budget", 
    icon: <IoLogoUsd size={60}/>,
  },
  {
    title: "Category-wise breakdown", 
    content:
      "Organize expenses into categories like Food, Travel, and Bills.\n💡 Visualize your spending patterns easily.",
    buttonText: "View Categories", 
    icon: <IoIosPie size={60}/>,
  },
  {
    title: "Cloud sync & backup", 
    content:
      "Your data is securely stored and accessible anytime, anywhere.\n💡 Secure. Synced. Seamless.",
    buttonText: "Enable Sync", 
    icon: <IoMdCloudUpload size={60} />,
  },
  {
    title: "Reports & insights", 
    content:
      "Generate charts and reports to understand your spending trends.\n💡 Make decisions based on real data.",
    buttonText: "Generate Report", 
    icon: <IoMdStats size={60}/>,
  },
  {
    title: "Bill reminders", 
    content:
      "Never miss due dates with timely bill reminders and alerts.\n💡 Avoid late fees. Stay alert.",
    buttonText: "View Bills", 
    icon: <IoIosNotifications size={60} />,
  },
  {
    title: "Daily average tracker", 
    content:
      "Track how much you’re spending on average each day.\n💡 Small savings daily lead to big results.",
    buttonText: "Check Stats", 
    icon: <IoIosTrendingUp size={60}/>,
  },
  {
    title: "Savings goal tracker", 
    content:
      "Set and monitor your financial goals with progress tracking.\n💡 Stay motivated. Save with purpose.",
    buttonText: "Set Goal", 
    icon: <IoMdCash size={60}/>,
  },
];

function App() {
  return (
    <>
    <Header />
    <div className='flex px-10 gap-5 flex-wrap '>
          {
services.map((card)=>(
  <Cards
            title={card.title}
            content={card.content}
            buttonText={card.buttonText}
            icon={card.icon}
            />

)
)
    }
    </div>
  </>
  )
}

export default App
