import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const EmailVerification = () => {
  const location = useLocation();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Get URL parameters
        const params = new URLSearchParams(location.search);
        const id = params.get('id');
        const signature = params.get('signature');
        const expires = params.get('expires');

        if (!id || !signature || !expires) {
          setStatus('error');
          setMessage('Invalid verification link');
          return;
        }

        // Call verification API
        await axios.post('http://localhost:8000/api/verify-email', {
          id,
          signature,
          expires
        });

        setStatus('success');
        setMessage('Email verified successfully! You can now login.');

        // Redirect to login after 3 seconds
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);

      } catch (error) {
        setStatus('error');
        if (error.response?.data?.message) {
          setMessage(error.response.data.message);
        } else {
          setMessage('Failed to verify email. Please try again.');
        }
      }
    };

    verifyEmail();
  }, [location]);

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-blue-600';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      default:
        return '⏳';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <div className="text-4xl mb-4">{getStatusIcon()}</div>
          <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
          <p className={`text-lg ${getStatusColor()}`}>
            {message}
          </p>
          {status === 'success' && (
            <p className="text-sm text-gray-500 mt-4">
              Redirecting to login page in 3 seconds...
            </p>
          )}
          {status === 'error' && (
            <button
              onClick={() => window.location.href = '/login'}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Go to Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
