import React from 'react';
import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        {/* eslint-disable-next-line no-template-curly-in-string */}
        <meta property="og:image" content="${db.bg}" />
      </Head>
    </div>
  );
}

export default IndexPage;
