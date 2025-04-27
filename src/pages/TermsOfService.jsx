import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function TermsOfService() {
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
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using this mortgage calculator, you agree to be bound by these 
            Terms of Service and all applicable laws and regulations.
          </p>

          <h2>Use License</h2>
          <p>
            This mortgage calculator is provided as a free service for personal use. You may not:
          </p>
          <ul>
            <li>Modify or copy the calculator's code</li>
            <li>Use the calculator for commercial purposes</li>
            <li>Attempt to decompile or reverse engineer the calculator</li>
            <li>Remove any copyright or other proprietary notations</li>
          </ul>

          <h2>Disclaimer</h2>
          <p>
            This mortgage calculator provides estimates only. The calculations are for 
            illustrative purposes and should not be considered financial advice. We recommend 
            consulting with a qualified mortgage professional for accurate information specific 
            to your situation.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall we be liable for any damages arising out of the use or inability 
            to use the calculator, even if we have been notified of the possibility of such 
            damages.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            While we strive to provide accurate calculations, we make no representations or 
            warranties about the accuracy or completeness of the calculator's results.
          </p>

          <h2>Modifications</h2>
          <p>
            We reserve the right to modify or discontinue the calculator at any time without 
            notice. We will not be liable if any part of the calculator is unavailable at 
            any time for any period.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of 
            the United States, without regard to its conflict of law provisions.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us through 
            our website or social media channels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;