import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../views/HomePage'
import PortfolioDetailPage from '../views/PortfolioDetailPage'
import PortfoliosPage from '../views/PortfoliosPage'
import ResumePage from '../views/ResumePage'
import RootPage from '../views/RootPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "resume",
        element: <ResumePage />
      },
      {
        path: "portfolio",
        element: <PortfoliosPage />
      },
      {
        path: "portfolio/:portoName",
        element: <PortfolioDetailPage />
      }
    ]
  }
])

export default router