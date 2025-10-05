"use client";

import { useState } from "react";

export default function FunctionEnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "Australia",
    phoneNumber: "+61",
    email: "",
    preferredDate: "",
    dateFlexible: "",
    numberOfGuests: "",
    eventStartTime: "",
    interest: "",
    hiringInfo: "",
    celebrationDescription: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-blue py-12 md:py-20 px-4 md:px-8" aria-labelledby="function-enquiry-heading">
      <div className="container-responsive max-w-4xl">
        <header className="text-center mb-8 md:mb-12">
          <h1 id="function-enquiry-heading" className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4 md:mb-6 heading-aleo">
            FUNCTION ENQUIRY
          </h1>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed text-lexend">
            Our experienced events team is here to bring your vision to life with tailored packages, 
            premium service, and attention to every detail.
          </p>
          <div className="text-white space-y-1 md:space-y-2">
            <p className="text-lg md:text-xl font-medium text-lexend">(03) 9645 5277</p>
            <p className="text-base md:text-lg text-lexend">FUNCTIONS@ALBIONROOFTOP.COM.AU</p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* Name Section */}
          <div>
            <label htmlFor="firstName" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              Name (required)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
                className="form-input"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
                className="form-input"
              />
            </div>
          </div>

          {/* Phone Section */}
          <div>
            <label htmlFor="country" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              Phone (required)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="form-input appearance-none cursor-pointer"
              >
                <option value="Australia">Australia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Number"
                required
                className="form-input"
              />
            </div>
          </div>

          {/* Email Section */}
          <div>
            <label htmlFor="email" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              Email (required)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              required
              className="form-input"
            />
          </div>

          {/* Preferred Date Section */}
          <div>
            <label htmlFor="preferredDate" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              Preferred Date (required)
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>

          {/* Date Flexibility Section */}
          <div>
            <label htmlFor="dateFlexible" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              Is your date flexible? (required)
            </label>
            <select
              id="dateFlexible"
              name="dateFlexible"
              value={formData.dateFlexible}
              onChange={handleInputChange}
              required
              className="form-input appearance-none cursor-pointer"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes, I&apos;m flexible</option>
              <option value="no">No, specific date only</option>
              <option value="somewhat">Somewhat flexible</option>
            </select>
          </div>

          {/* Number of Guests Section */}
          <div>
            <label htmlFor="numberOfGuests" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              No. of Guests (required)
            </label>
            <input
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              value={formData.numberOfGuests}
              onChange={handleInputChange}
              placeholder="Number of guests"
              min="1"
              required
              className="form-input"
            />
          </div>

          {/* Time of Event Section */}
          <div>
            <label htmlFor="eventStartTime" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              Time of Event (Start)
            </label>
            <select
              id="eventStartTime"
              name="eventStartTime"
              value={formData.eventStartTime}
              onChange={handleInputChange}
              className="form-input appearance-none cursor-pointer"
            >
              <option value="">Select an option</option>
              <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
              <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
              <option value="evening">Evening (5:00 PM - 9:00 PM)</option>
              <option value="night">Night (9:00 PM - 12:00 AM)</option>
              <option value="custom">Custom time</option>
            </select>
          </div>

          {/* Interest Section */}
          <div>
            <label htmlFor="interest" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              I&apos;m interested in (required)
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              required
              className="form-input appearance-none cursor-pointer"
            >
              <option value="">Select an option</option>
              <option value="birthday">Birthday Celebration</option>
              <option value="corporate">Corporate Event</option>
              <option value="wedding">Wedding Reception</option>
              <option value="anniversary">Anniversary</option>
              <option value="graduation">Graduation Party</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Hiring Information Section */}
          <div>
            <label htmlFor="hiringInfo" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              I would like hiring information for
            </label>
            <select
              id="hiringInfo"
              name="hiringInfo"
              value={formData.hiringInfo}
              onChange={handleInputChange}
              className="form-input appearance-none cursor-pointer"
            >
              <option value="">Select an option</option>
              <option value="photography">Photography Services</option>
              <option value="decor">Event Décor</option>
              <option value="catering">Catering</option>
              <option value="entertainment">Entertainment</option>
              <option value="all">All Services</option>
            </select>
          </div>

          {/* Celebration Description Section */}
          <div>
            <label htmlFor="celebrationDescription" className="block text-white text-sm md:text-base font-medium mb-3 text-lexend">
              Tell us about your celebration (required)
            </label>
            <textarea
              id="celebrationDescription"
              name="celebrationDescription"
              value={formData.celebrationDescription}
              onChange={handleInputChange}
              placeholder="Please describe your event, special requirements, theme, or any other details..."
              required
              rows={4}
              className="form-input resize-vertical min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6 md:pt-8">
            <button
              type="submit"
              className="bg-brown text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-medium uppercase hover:bg-opacity-90 transition-all duration-300 btn-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue rounded-md font-lexend"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
