import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div data-tf-widget="zqo7SABV"
      data-tf-opacity="100"
      data-tf-inline-on-mobile
      data-tf-iframe-props="title=Contact Me"
      data-tf-transitive-search-params
      data-tf-auto-focus
      data-tf-medium="snippet"
      data-tf-full-screen
    />
  );
};

export default Contact;
