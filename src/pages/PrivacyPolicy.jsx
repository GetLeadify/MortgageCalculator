import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="mb-8 inline-flex items-center text-sm text-gray-600 hover:text-blue-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Calculator
        </Link>

        <div className="prose prose-blue mx-auto max-w-3xl">
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>Introduction</h2>
          <p>
            We respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your information 
            when you use our mortgage calculator.
          </p>

          <h2>Information We Collect</h2>
          <p>
            Our mortgage calculator operates entirely in your browser and does not collect or 
            store any personal information. Any calculations and data you enter remain on your 
            device and are not transmitted to our servers.
          </p>

          <h2>Usage Data</h2>
          <p>
            We may collect anonymous usage statistics to improve our service, including:
          </p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and features used</li>
            <li>Time and date of visits</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use essential cookies to ensure the proper functioning of our calculator. 
            These cookies do not track you across websites and are deleted when you close 
            your browser.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We do not share any information with third parties. Our calculator is a 
            standalone tool that operates independently of external services.
          </p>

          <h2>Data Security</h2>
          <p>
            Since we don't collect or store personal information, there is no risk of 
            your mortgage calculation data being compromised on our end. All calculations 
            are performed locally in your browser.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of 
            any changes by posting the new policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through 
            our website or social media channels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;