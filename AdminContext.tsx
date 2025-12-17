import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Builder, NewsArticle, SiteSettings, Lead, RecruitmentLead, Property } from './types';
import { MOCK_LEADS, PROPERTIES } from './constants';

interface AdminContextType {
  builders: Builder[];
  newsArticles: NewsArticle[];
  siteSettings: SiteSettings;
  leads: Lead[];
  recruitmentLeads: RecruitmentLead[];
  properties: Property[];
  updateSettings: (settings: Partial<SiteSettings>) => void;
  approveNews: (id: string) => void;
  deleteNews: (id: string) => void;
  fetchNews: () => void;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  addBuilder: (builder: Builder) => void;
  bulkUploadProperties: (data: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [builders, setBuilders] = useState<Builder[]>([]);
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    enableMortgageCalculator: true,
    enableTriggerRateTool: true,
    enableLTTCalculator: true,
    enableNewsScraper: true,
    useExternalRatesWidget: false,
    ratesWidgetUrl: 'https://gopineapple.ca/muditchhura/rates?embed=true',
  });
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS as Lead[]);
  const [recruitmentLeads, setRecruitmentLeads] = useState<RecruitmentLead[]>([]);
  const [properties, setProperties] = useState<Property[]>(PROPERTIES);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({ ...prev, ...newSettings }));
  };

  const approveNews = (id: string) => {
    setNewsArticles(prev => prev.map(a => a.id === id ? { ...a, status: 'approved' } : a));
  };

  const deleteNews = (id: string) => {
    setNewsArticles(prev => prev.filter(a => a.id !== id));
  };

  const fetchNews = () => {
    // Simulated Scraper Logic
    const newArticles: NewsArticle[] = [
      { id: Date.now().toString(), title: "BoC Interest Rate Decision", source: "CBC News", date: new Date().toLocaleDateString(), url: "#", status: 'pending', summary: "Interest rates held steady in latest announcement." },
      { id: (Date.now() + 1).toString(), title: "Toronto Real Estate Forecast 2025", source: "Financial Post", date: new Date().toLocaleDateString(), url: "#", status: 'pending', summary: "Market expected to heat up in Spring." }
    ];
    setNewsArticles(prev => [...prev, ...newArticles]);
  };

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  const addBuilder = (builder: Builder) => {
    setBuilders(prev => [...prev, builder]);
  };

  const bulkUploadProperties = (csvContent: string) => {
    console.log("Processing CSV Upload...", csvContent);
    // Logic to parse CSV and update properties state
  };

  return (
    <AdminContext.Provider value={{ 
      builders, newsArticles, siteSettings, leads, recruitmentLeads, properties,
      updateSettings, approveNews, deleteNews, fetchNews, updateLeadStatus, addBuilder, bulkUploadProperties 
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};
