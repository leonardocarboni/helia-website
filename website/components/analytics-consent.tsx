'use client';

import { useIubenda } from '@mep-agency/next-iubenda';
import { GoogleAnalytics, consent } from "nextjs-google-analytics";
import { useEffect } from "react";

export function AnalyticsConsent() {
  const { userPreferences } = useIubenda();
  
  useEffect(() => {
    if (userPreferences.hasBeenLoaded) {
      // Check if user has consented to measurement (analytics)
      const consentValue = userPreferences.gdprPurposes.measurement ? 'granted' : 'denied';
      
      // Update Google Analytics consent
      consent({
        arg: 'update',
        params: {
          analytics_storage: consentValue,
        },
      });
      
      console.log(`Google Analytics consent updated: ${consentValue}`);
    }
  }, [userPreferences]);
  
  return (
    <GoogleAnalytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} trackPageViews />
  );
} 