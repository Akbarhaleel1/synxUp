// import React from 'react';
// import { 
//   ArrowLeft, 
//   Upload,
//   Building2,
//   Mail,
//   Phone,
//   MapPin,
//   Users,
//   Calendar,
//   Briefcase
// } from 'lucide-react';

// const AddEmployeePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto p-8">
//         {/* Header */}
//         <div className="flex items-center space-x-4 mb-8">
//           <button className="p-2 hover:bg-gray-800 rounded-lg">
//             <ArrowLeft className="h-6 w-6" />
//           </button>
//           <h1 className="text-2xl font-bold">Add New Employee</h1>
//         </div>

//         <div className="grid grid-cols-3 gap-8">
//           {/* Left Column - Photo Upload */}
//           <div className="col-span-1">
//             <div className="bg-gray-800 rounded-lg p-6">
//               <div className="text-center">
//                 <div className="mb-4">
//                   <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
//                     <Upload className="h-8 w-8 text-gray-400" />
//                   </div>
//                   <h3 className="font-semibold mb-2">Upload Photo</h3>
//                   <p className="text-sm text-gray-400 mb-4">
//                     Drag and drop or click to upload
//                   </p>
//                   <button className="px-4 py-2 bg-pink-500 rounded-md hover:bg-pink-600 w-full">
//                     Upload Photo
//                   </button>
//                 </div>
//                 <div className="text-xs text-gray-400">
//                   Allowed file types: png, jpg, jpeg
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Form Fields */}
//           <div className="col-span-2">
//             <div className="bg-gray-800 rounded-lg p-6">
//               <form className="space-y-6">
//                 {/* Personal Information */}
//                 <div className="space-y-4">
//                   <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label className="block text-sm text-gray-400">First Name</label>
//                       <div className="relative">
//                         <input
//                           type="text"
//                           className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 focus:outline-none focus:border-pink-500"
//                           placeholder="Enter first name"
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="block text-sm text-gray-400">Last Name</label>
//                       <div className="relative">
//                         <input
//                           type="text"
//                           className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 focus:outline-none focus:border-pink-500"
//                           placeholder="Enter last name"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="block text-sm text-gray-400">Email</label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                       <input
//                         type="email"
//                         className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500"
//                         placeholder="Enter email address"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="block text-sm text-gray-400">Phone Number</label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                       <input
//                         type="tel"
//                         className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500"
//                         placeholder="Enter phone number"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Employment Information */}
//                 <div className="space-y-4">
//                   <h2 className="text-lg font-semibold mb-4">Employment Information</h2>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label className="block text-sm text-gray-400">Department</label>
//                       <div className="relative">
//                         <Users className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                         <select className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500 appearance-none">
//                           <option>Select Department</option>
//                           <option>Development</option>
//                           <option>Design</option>
//                           <option>Marketing</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="block text-sm text-gray-400">Position</label>
//                       <div className="relative">
//                         <Briefcase className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                         <select className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500 appearance-none">
//                           <option>Select Position</option>
//                           <option>Developer</option>
//                           <option>Designer</option>
//                           <option>Manager</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="block text-sm text-gray-400">Office Location</label>
//                     <div className="relative">
//                       <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                       <select className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500 appearance-none">
//                         <option>Select Location</option>
//                         <option>New York</option>
//                         <option>London</option>
//                         <option>Singapore</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="block text-sm text-gray-400">Start Date</label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//                       <input
//                         type="date"
//                         className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Form Actions */}
//                 <div className="flex space-x-4 pt-6">
//                   <button
//                     type="submit"
//                     className="px-6 py-3 bg-pink-500 rounded-lg hover:bg-pink-600 flex-1"
//                   >
//                     Add Employee
//                   </button>
//                   <button
//                     type="button"
//                     className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 flex-1"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddEmployeePage;


import React from 'react';
import { 
  ArrowLeft, 
  Upload,
  Building2,
  Mail,
  Phone,
  MapPin,
  Users,
  Calendar,
  Briefcase
} from 'lucide-react';

const AddEmployeePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6 lg:mb-8">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold">Add New Employee</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {/* Photo Upload Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
              <div className="text-center">
                <div className="mb-4">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Upload Photo</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Drag and drop or click to upload
                  </p>
                  <button className="px-4 py-2 bg-pink-500 rounded-md hover:bg-pink-600 w-full">
                    Upload Photo
                  </button>
                </div>
                <div className="text-xs text-gray-400">
                  Allowed file types: png, jpg, jpeg
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm text-gray-400">First Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 focus:outline-none focus:border-pink-500"
                          placeholder="Enter first name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm text-gray-400">Last Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 focus:outline-none focus:border-pink-500"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-gray-400">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-gray-400">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Employment Information */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold mb-4">Employment Information</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm text-gray-400">Department</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <select className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500 appearance-none">
                          <option>Select Department</option>
                          <option>Development</option>
                          <option>Design</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm text-gray-400">Position</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <select className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500 appearance-none">
                          <option>Select Position</option>
                          <option>Developer</option>
                          <option>Designer</option>
                          <option>Manager</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-gray-400">Office Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <select className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500 appearance-none">
                        <option>Select Location</option>
                        <option>New York</option>
                        <option>London</option>
                        <option>Singapore</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-gray-400">Start Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        className="w-full bg-gray-700 rounded-lg border border-gray-600 p-3 pl-12 focus:outline-none focus:border-pink-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-pink-500 rounded-lg hover:bg-pink-600 w-full sm:flex-1 order-2 sm:order-1"
                  >
                    Add Employee
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 w-full sm:flex-1 order-1 sm:order-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeePage;