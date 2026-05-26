// src/components/forms/ForgotPasswordHelp.tsx
'use client';

import React from 'react';

const ForgotPasswordHelp: React.FC = () => {
  return (
    <div className="w-full mt-10 pt-8 border-t border-black/10">
      <div className="w-full p-6 bg-[#FFFBEB] border border-[#FEE685] rounded-xl">
        <h3 className="font-inter font-medium text-base leading-6 text-[#7B3306] mb-3">
          Need Help?
        </h3>
        
        <p className="font-inter font-normal text-sm leading-5 text-[#973C00]">
          If you&apos;re unable to reset your password, please contact your academy administrator or reach out to our support team at support@elearning.com
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordHelp;