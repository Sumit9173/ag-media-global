import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Google Analytics 4 integration component
// Loads the gtag.js script globally and tracks page views on route changes.
// Measurement ID: G-EQHMK9P6YM

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Helper to send page view event
  const sendPageView = () => {
    // @ts-ignore - window may be undefined during SSR
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  };

  useEffect(() => {
    // Send initial page view on mount
    sendPageView();
  }, []);

  useEffect(() => {
    // Send page view on path or query change
    sendPageView();
  }, [pathname, searchParams]);

  return (
    <>
      {/* Load gtag.js globally */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EQHMK9P6YM"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EQHMK9P6YM', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
