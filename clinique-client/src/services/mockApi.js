// src/services/mockApi.js

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const MOCK_APPOINTMENTS = [
  { id: 1, time: '09:00 AM', date: '2023-10-12', patientName: 'Robert Fox', doctorName: 'Dr. Sarah Jenkins', type: 'Check-up', description: 'Previous surgery recovery review. Post-op week 4.', status: 'scheduled' },
  { id: 2, time: '10:30 AM', date: '2023-10-12', patientName: 'Jane Cooper', doctorName: 'Dr. Sarah Jenkins', type: 'Consultation', description: 'Chronic migraine follow-up and prescription adjustment.', status: 'scheduled' },
  { id: 3, time: '01:15 PM', date: '2023-10-12', patientName: 'Guy Hawkins', doctorName: 'Dr. Sarah Jenkins', type: 'Urgent', description: 'Severe lower back pain following lifting incident.', status: 'scheduled' },
  { id: 4, time: '02:00 PM', date: '2023-10-15', patientName: 'John Doe', doctorName: 'General Health Checkup', type: 'Consultation', description: 'Annual physical examination', status: 'scheduled' }, // For patient dashboard
];

export const MOCK_VALIDATIONS = [
  { id: 101, patientName: "Albert Flores", requestTime: "10:00 AM Tomorrow", avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFaw5ISsOdIP3hYKtu9ycGbMVAIwlCXEtAnHb7XI9AMUKzMTGYRNznrmC4jl7ItXutixrsp9OeKbRjjNzLWA-qiP88SwgcISjEn4kgNIl7OjY_GJPZYoS0SFwzxWhDRzVWTVt2Qr8OLjn1ltWMrssvVzoa6NztyxNjUDqQGnJPuT705NbBc4hAZZUpsOeTPvyyWLVIw0JtsF06JCSmDfpuU-kYc19B3jzjR_gh9B7oz83qLgxeyZi_fB-1fatglcDu40qF-td0GO4", status: 'pending' },
  { id: 102, patientName: "Kristin Watson", requestTime: "02:30 PM Friday", avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfYbzjVDI4hs-SisYuwKzW6TW3tRb7byZx6ITWNKgOLKkngE-Se9d4uYFzwcLkG1NsVzBGexAKNHZsDwvGcw47UjA9MDbMC9vx6klfSW8QQzWs4isFp_6WvaehenfU-4q0QTsI_SNj3pP7JEm0R1OtWmQnWZ6NZgz0w8DvSulcAh6VTrg4y0Sdff-kJ0ezaefOHvU5BdhhjkBjJ2Y9PDnc6yiVy8gBtw7ZWd4O4dY2zqdNOeiW34o7LhcI5g40ZhIDPbNH1vSWHTY", status: 'pending' },
  { id: 103, patientName: "Cody Fisher", requestTime: "09:15 AM Monday", avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNNCvd1H3i8Ui2Tkj4j9sh-Zo4IW6pnoDz4p6FlJNM8bqDhdUlIHNIfbcOCBkFYOGTBUCgMFkcewRK7_4ifrhz5UA3ny2D2FaVAiDIGbFxHr8sThFWi68aFsW-4DFhu5DJPYrnSf1Th8rcIlX7e22zOhShQXFq20rSGzPp9ZQDim-uT2ioc7CCQ9NeL3i14tprIBDMPUpt7oQ_x77abQUvY5Fl3meWTqx0Jmb1NhDXAxO6m0DBgqAK02GJ20xduOHx5FxcLSNyK_U", status: 'pending' }
];

export const MOCK_STATS = {
   totalPatients: "1,248",
   appointmentsToday: 18,
   avgConsultationTime: "22 min",
   pendingReports: 7
};

export const MOCK_USER = {
  id: "U-1902",
  role: "doctor", // 'doctor' or 'patient'
  name: "Dr. Sarah Richardson",
  title: "Head of Neurology",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQvG7_galkur2o-XN36dgIfutB0Bd2ek-u4uOeuVovEzgwwft2nETKOa3YBCtlbDFhVRzp-AIh8g3TKPMSWUwAwWpdFzGOVdBUJKsbgZS5X0C-N3gYkMoWyuY_4q5rHxFfaloWFDgP-aUH1QPkv7EILG1fFM07-pfVpXpY6qx4v7rCaTfE7bEv9r0NxQBTwIjvImv10Kk8aamXrVUU" 
};

export const api = {
  login: async (email, password) => {
    await wait(800);
    if(email === 'doctor@clinic.com') return { ...MOCK_USER };
    if(email === 'patient@clinic.com') return { ...MOCK_USER, role: 'patient', name: 'John Doe', title: 'Patient ID: #8821' };
    throw new Error("Invalid credentials. Try doctor@clinic.com or patient@clinic.com");
  },
  
  getAppointments: async () => {
    await wait(600);
    return [...MOCK_APPOINTMENTS];
  },
  
  getValidations: async () => {
    await wait(500);
    return [...MOCK_VALIDATIONS];
  },
  
  getDashboardStats: async () => {
    await wait(400);
    return { ...MOCK_STATS };
  },

  updateValidationStatus: async (id, newStatus) => {
    await wait(500);
    // In a real app we'd update the DB. Here we just return success.
    return { success: true, id, status: newStatus };
  }
};
