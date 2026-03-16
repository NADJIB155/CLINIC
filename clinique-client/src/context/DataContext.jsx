import React, { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../services/mockApi';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [validations, setValidations] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [apptsData, valsData, statsData] = await Promise.all([
        api.getAppointments(),
        api.getValidations(),
        api.getDashboardStats()
      ]);
      setAppointments(apptsData);
      setValidations(valsData);
      setStats(statsData);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleValidationAction = async (id, actionStatus) => {
    try {
      // Optimistic upate (or wait for the api response)
      await api.updateValidationStatus(id, actionStatus);
      // Remove from pending list
      setValidations(prev => prev.filter(v => v.id !== id));
    } catch (error) {
      console.error("Failed to update validation", error);
    }
  };

  const value = {
    appointments,
    validations,
    stats,
    loading,
    fetchDashboardData,
    handleValidationAction
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
