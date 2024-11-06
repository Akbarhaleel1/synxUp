import React, { useState } from 'react';
import { X, Upload, ChevronRight, ChevronLeft, Check } from 'lucide-react';

const ApplicationModal = ({ isOpen, onClose, jobTitle }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    portfolio: '',
    resume: null,
    coverLetter: '',
    experience: '',
  });

  const totalSteps = 3;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setStep(4); // Move to success state
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">
            Apply for {jobTitle}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="px-6 pt-4">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3].map((stepNumber) => (
                <div 
                  key={stepNumber}
                  className="flex items-center"
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${step >= stepNumber ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400'}
                  `}>
                    {step > stepNumber ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      stepNumber
                    )}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`
                      w-full h-1 mx-2
                      ${step > stepNumber ? 'bg-purple-600' : 'bg-gray-800'}
                    `} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-400 mb-6">
              <span>Personal Info</span>
              <span>Experience</span>
              <span>Documents</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600"
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600"
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-8">
                <div className="text-center">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">
                    Upload your Resume
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    PDF, DOC, or DOCX (Max 5MB)
                  </p>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    className="hidden"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 cursor-pointer"
                  >
                    Choose File
                  </label>
                  {formData.resume && (
                    <p className="mt-2 text-sm text-gray-300">
                      Selected: {formData.resume.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-400 mb-6">
                Thank you for applying. We will review your application and get back to you soon.
              </p>
              <button
                onClick={onClose}
                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step < 4 && (
          <div className="p-6 border-t border-gray-800 flex justify-between">
            <button
              onClick={() => setStep(prev => prev - 1)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md
                ${step === 1 
                  ? 'text-gray-500 cursor-not-allowed' 
                  : 'text-white hover:bg-gray-800'
                }`}
              disabled={step === 1}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            {step === totalSteps ? (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Submit Application
              </button>
            ) : (
              <button
                onClick={() => setStep(prev => prev + 1)}
                className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;