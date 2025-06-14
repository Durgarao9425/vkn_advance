import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  X,
} from "lucide-react";
import { sendEmail, BookingData } from "../utils/emailService";

interface ConfirmedBooking {
  date: string;
  time: string;
  service: string;
  name: string;
  email: string;
  company?: string;
  bookingId: string;
}

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    subject: "",
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookedSlots, setBookedSlots] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string>("");
  const [confirmedBooking, setConfirmedBooking] = useState<
    Partial<ConfirmedBooking>
  >({});

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const services = [
    "Strategic Planning",
    "Financial Consulting",
    "HR & Organizational Development",
    "Business Process Optimization",
    "Performance Analytics",
    "Risk Management",
    "Innovation & Digital Transformation",
    "Operations Management",
  ];

  // Load booked slots from localStorage on component mount
  useEffect(() => {
    const savedBookedSlots = JSON.parse(
      localStorage.getItem("vkn_booked_slots") || "{}"
    );
    setBookedSlots(savedBookedSlots);
  }, []);

  // Save booked slots to localStorage
  const saveBookedSlots = (slots: Record<string, boolean>) => {
    localStorage.setItem("vkn_booked_slots", JSON.stringify(slots));
    setBookedSlots(slots);
  };

  // Generate next 30 days for calendar (excluding weekends)
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    let daysAdded = 0;
    let dayOffset = 1;

    while (daysAdded < 21) {
      const date = new Date(today);
      date.setDate(today.getDate() + dayOffset);

      // Skip weekends (Saturday = 6, Sunday = 0)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        days.push(date);
        daysAdded++;
      }
      dayOffset++;
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Check if a slot is booked
  const isSlotBooked = (date: string, time: string): boolean => {
    const slotKey = `${date}_${time}`;
    return bookedSlots[slotKey] !== undefined;
  };

  // Get available time slots for selected date
  const getAvailableTimeSlots = () => {
    return timeSlots.filter((time) => !isSlotBooked(selectedDate, time));
  };

  // Send email using EmailJS
  const sendEmailHandler = async (bookingData: BookingData) => {
    try {
      await sendEmail(bookingData);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const bookingData: BookingData = {
      ...formData,
      subject: `Booking for ${formData.service}`,
      time: `${selectedDate} at ${selectedTime}`,
    };

    try {
      await sendEmail(bookingData);
      setIsSubmitted(true);
      setConfirmedBooking({
        ...bookingData,
        date: selectedDate,
        time: selectedTime,
        bookingId: `VKN-${Date.now()}`,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        subject: "",
        time: "",
      });
      setSelectedDate("");
      setSelectedTime("");
    } catch (error) {
      setError("Failed to send booking. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setConfirmedBooking({});
    setSelectedDate("");
    setSelectedTime("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      subject: "",
      time: "",
    });
    setError("");
  };

  const ConfirmationMessage = () => {
    return (
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Booking Confirmed!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for scheduling a consultation with VKN Associates. A
          confirmation email has been sent to vknassociative@gmail.com and we'll
          contact you shortly to confirm the details.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Appointment Details:
        </h3>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-left">
          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-600 mr-3" />
              <span className="font-medium text-gray-700">Date:</span>
              <span className="ml-2 text-gray-900">
                {confirmedBooking.date || "Not available"}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-600 mr-3" />
              <span className="font-medium text-gray-700">Time:</span>
              <span className="ml-2 text-gray-900">
                {confirmedBooking.time || "Not available"}
              </span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
              <span className="font-medium text-gray-700">Service:</span>
              <span className="ml-2 text-gray-900">
                {confirmedBooking.service || "Not available"}
              </span>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 text-blue-600 mr-3" />
              <span className="font-medium text-gray-700">Name:</span>
              <span className="ml-2 text-gray-900">
                {confirmedBooking.name || "Not available"}
              </span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-600 mr-3" />
              <span className="font-medium text-gray-700">Email:</span>
              <span className="ml-2 text-gray-900">
                {confirmedBooking.email || "Not available"}
              </span>
            </div>
            {confirmedBooking.company && (
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
                <span className="font-medium text-gray-700">Company:</span>
                <span className="ml-2 text-gray-900">
                  {confirmedBooking.company}
                </span>
              </div>
            )}
            <div className="flex items-center pt-2 border-t border-gray-200">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="font-medium text-gray-700">Booking ID:</span>
              <span className="ml-2 text-gray-900 font-mono">
                {confirmedBooking.bookingId || "Not available"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 p-12 rounded-2xl">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <ConfirmationMessage />
            <button
              onClick={resetForm}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Book Another Consultation
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book a Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a personalized consultation with our experts to discuss
            your business needs and explore how we can help you achieve your
            goals.
          </p>
        </div>

        {error && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
              <X className="h-5 w-5 mr-2" />
              {error}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar Section */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-blue-600" />
              Select Date & Time
            </h3>

            {/* Calendar Grid */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Available Dates (Weekdays Only)
              </h4>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((date, index) => {
                  const dateStr = formatDate(date);
                  const hasAvailableSlots = timeSlots.some(
                    (time) => !isSlotBooked(dateStr, time)
                  );

                  return (
                    <button
                      key={index}
                      onClick={() =>
                        hasAvailableSlots ? setSelectedDate(dateStr) : null
                      }
                      disabled={!hasAvailableSlots}
                      className={`p-3 text-sm rounded-lg border transition-colors duration-200 ${
                        selectedDate === dateStr
                          ? "bg-blue-600 text-white border-blue-600"
                          : hasAvailableSlots
                          ? "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                          : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                      }`}
                    >
                      <div className="font-medium">{date.getDate()}</div>
                      <div className="text-xs opacity-75">
                        {date.toLocaleDateString("en-US", { weekday: "short" })}
                      </div>
                      {!hasAvailableSlots && (
                        <div className="text-xs text-red-500 mt-1">Full</div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Available Times for {selectedDate}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => {
                    const isBooked = isSlotBooked(selectedDate, time);

                    return (
                      <button
                        key={time}
                        onClick={() =>
                          !isBooked ? setSelectedTime(time) : null
                        }
                        disabled={isBooked}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                          selectedTime === time
                            ? "bg-blue-600 text-white border-blue-600"
                            : isBooked
                            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                        }`}
                      >
                        {time}
                        {isBooked && (
                          <div className="text-xs text-red-500 mt-1">
                            Booked
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {getAvailableTimeSlots().length === 0 && (
                  <div className="text-center py-4 text-gray-500">
                    No available time slots for this date. Please select another
                    date.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <User className="h-6 w-6 mr-2 text-blue-600" />
              Your Information
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleTextareaChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your specific needs or questions..."
                ></textarea>
              </div>

              {selectedDate && selectedTime && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Selected Appointment:
                  </h4>
                  <p className="text-blue-700">Date: {selectedDate}</p>
                  <p className="text-blue-700">Time: {selectedTime}</p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={!selectedDate || !selectedTime || isLoading}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  selectedDate && selectedTime && !isLoading
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isLoading
                  ? "Confirming Booking..."
                  : selectedDate && selectedTime
                  ? "Confirm Booking"
                  : "Please select date and time"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
