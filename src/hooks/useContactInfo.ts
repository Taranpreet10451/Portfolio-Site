
import { useState, useEffect } from 'react';

interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export const useContactInfo = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        // Simulating API call with more realistic timing
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // In a real app, you'd fetch this from an API endpoint
        const apiResponse = {
          status: 'success',
          data: {
            email: "taranpreetkaur1641@gmail.com",
            phone: "+91 93898 86109",
            linkedin: "https://linkedin.com/in/taranpreet-kaur-0b3941251",
            github: "https://github.com/Taranpreet10451"
          }
        };
        
        if (apiResponse.status === 'success') {
          setContactInfo(apiResponse.data);
        } else {
          throw new Error('Failed to fetch data');
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contact info:", err);
        setError("Failed to fetch contact information");
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  return { contactInfo, loading, error };
};
