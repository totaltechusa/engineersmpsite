import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import OpenProjectsPage from './pages/OpenProjectsPage'
import ProjectTemplatesPage from './pages/ProjectTemplatesPage'
import FirmsPage from './pages/FirmsPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CommunityPage from './pages/CommunityPage'
import LegalPage from './pages/LegalPage'
import HowItWorksPage from './pages/HowItWorksPage'
import ForEngineersPage from './pages/ForEngineersPage'
import OfficesPage from './pages/OfficesPage'
import PostProjectPage from './pages/PostProjectPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import ResendVerificationPage from './pages/ResendVerificationPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import ProfilePage from './pages/ProfilePage'
import DashboardPage from './pages/DashboardPage'
import './index.css'
import './emp-exact.css'

// Automatically scrolls window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/inspection" element={<ServiceDetailPage />} />
          <Route path="/services/:category" element={<ServiceDetailPage />} />
          <Route path="/find-engineers" element={<ServicesPage />} />
          <Route path="/find-engineers/*" element={<ServicesPage />} />
          <Route path="/search" element={<ServicesPage />} />

          {/* Projects & Templates */}
          <Route path="/projects" element={<OpenProjectsPage />} />
          <Route path="/projects/templates" element={<ProjectTemplatesPage />} />
          <Route path="/teams/builder" element={<ProjectTemplatesPage />} />

          {/* Firms & Teams */}
          <Route path="/firms" element={<FirmsPage />} />
          <Route path="/firms-teams" element={<FirmsPage />} />
          <Route path="/firms/teams" element={<FirmsPage />} />
          <Route path="/enterprise" element={<FirmsPage />} />

          {/* More: Case Studies, Community, Consultations */}
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/consultations" element={<ServiceDetailPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/standards" element={<ProjectTemplatesPage />} />
          <Route path="/standards/*" element={<ProjectTemplatesPage />} />
          <Route path="/software" element={<ServicesPage />} />
          <Route path="/software/*" element={<ServicesPage />} />
          <Route path="/industries/*" element={<ServicesPage />} />

          {/* Legal Pages */}
          <Route path="/legal/terms" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage />} />
          <Route path="/legal/privacy" element={<LegalPage />} />
          <Route path="/privacy" element={<LegalPage />} />
          <Route path="/legal/cookies" element={<LegalPage />} />
          <Route path="/cookies" element={<LegalPage />} />
          <Route path="/legal/professional-disclaimer" element={<LegalPage />} />
          <Route path="/professional-disclaimer" element={<LegalPage />} />
          <Route path="/accessibility" element={<LegalPage />} />

          {/* General & Auth Pages */}
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/for-engineers" element={<ForEngineersPage />} />
          <Route path="/offices" element={<OfficesPage />} />
          <Route path="/post-project" element={<PostProjectPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/resend-verification" element={<ResendVerificationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
