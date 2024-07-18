import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function MyComponent() {
  return (
    <HelmetProvider>
      <div>
        {/* Your React components */}
        <Helmet>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" crossorigin="anonymous"></script>
          <script>
            {`
              (adsbygoogle = window.adsbygoogle || []).push({});
            `}
          </script>
        </Helmet>
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-4858698331274766"
             data-ad-slot="5724384175"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </HelmetProvider>
  );
}

export default MyComponent;
