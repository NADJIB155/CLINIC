import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorSchedule from './pages/DoctorSchedule';
import DoctorPatients from './pages/DoctorPatients';
import DoctorDiseaseDocs from './pages/DoctorDiseaseDocs';
import DoctorReports from './pages/DoctorReports';
import PatientDashboard from './pages/PatientDashboard';
import PatientHealthRecord from './pages/PatientHealthRecord';
import PatientConsultationHistory from './pages/PatientConsultationHistory';
import PatientBooking from './pages/PatientBooking';
import PatientDoctors from './pages/PatientDoctors';
import PatientReports from './pages/PatientReports';
import NotFound from './pages/NotFound';

// New Converted Pages
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import PatientOutcomesReport from './pages/PatientOutcomesReport';
import InsuranceClaimAnalysisReport from './pages/InsuranceClaimAnalysisReport';
import BillingInvoicesDashboard from './pages/BillingInvoicesDashboard';
import InsuranceBillingInfo from './pages/InsuranceBillingInfo';
import SecureMessagingInbox from './pages/SecureMessagingInbox';
import SecureMessagingCompose from './pages/SecureMessagingCompose';
import TelehealthRoom from './pages/TelehealthRoom';
import MedicalResourceLibraryHome from './pages/MedicalResourceLibraryHome';
import MedicalResourceLibrarySearch from './pages/MedicalResourceLibrarySearch';
import MedicalResourceLibraryArticle from './pages/MedicalResourceLibraryArticle';
import PatientLoginSocial from './pages/PatientLoginSocial';
import TwoFactorVerification from './pages/TwoFactorVerification';
import SecurityActivityLog from './pages/SecurityActivityLog';
import StaffProviderManagement from './pages/StaffProviderManagement';
import PatientProfileSettings from './pages/PatientProfileSettings';
import DeviceManagement from './pages/DeviceManagement';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Dashboard Routes */}
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/doctor/calendar" element={<DoctorSchedule />} />
            <Route path="/doctor/patients" element={<DoctorPatients />} />
            <Route path="/doctor/diseases" element={<DoctorDiseaseDocs />} />
            <Route path="/doctor/reports" element={<DoctorReports />} />
            
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/health-record" element={<PatientHealthRecord />} />
            <Route path="/patient/consultations" element={<PatientConsultationHistory />} />
            <Route path="/patient/booking" element={<PatientBooking />} />
            <Route path="/patient/doctors" element={<PatientDoctors />} />
            <Route path="/patient/reports" element={<PatientReports />} />

            {/* New Converted Routes */}
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="/analytics/outcomes" element={<PatientOutcomesReport />} />
            <Route path="/analytics/claims" element={<InsuranceClaimAnalysisReport />} />
            <Route path="/billing" element={<BillingInvoicesDashboard />} />
            <Route path="/insurance" element={<InsuranceBillingInfo />} />
            <Route path="/messages" element={<SecureMessagingInbox />} />
            <Route path="/messages/compose" element={<SecureMessagingCompose />} />
            <Route path="/telehealth" element={<TelehealthRoom />} />
            <Route path="/resources" element={<MedicalResourceLibraryHome />} />
            <Route path="/resources/search" element={<MedicalResourceLibrarySearch />} />
            <Route path="/resources/article" element={<MedicalResourceLibraryArticle />} />
            <Route path="/login-social" element={<PatientLoginSocial />} />
            <Route path="/2fa" element={<TwoFactorVerification />} />
            <Route path="/security/activity" element={<SecurityActivityLog />} />
            <Route path="/security/devices" element={<DeviceManagement />} />
            <Route path="/staff" element={<StaffProviderManagement />} />
            <Route path="/profile" element={<PatientProfileSettings />} />

            {/* Redirect Root based on role or to login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
