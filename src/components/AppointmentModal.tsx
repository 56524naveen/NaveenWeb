import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { createAppointment, AppointmentData } from '../lib/supabase';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    service: 'AI Consultation',
    appointment_date: new Date().toISOString().split('T')[0],
    appointment_time: '10:00 AM',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    const result = await createAppointment(formData);
    setLoading(false);

    if (result.success) {
      setStatus({
        type: 'success',
        message: 'Your appointment has been successfully booked and saved to Supabase!'
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'AI Consultation',
        appointment_date: new Date().toISOString().split('T')[0],
        appointment_time: '10:00 AM',
        notes: ''
      });
    } else {
      setStatus({
        type: 'error',
        message: result.error || 'Failed to submit appointment. Please check your Supabase table configuration.'
      });
    }
  };

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:30 AM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'
  ];

  const services = [
    'AI Consultation',
    'Note-Taking Solution Demo',
    'Product Integration Support',
    'Custom AI Workflow Setup',
    'General Inquiry'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click Outside Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card Container */}
      <div className="relative w-full max-w-xl bg-[#0a0e17]/95 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(59,130,246,0.3)] backdrop-blur-xl z-10 overflow-hidden text-left max-h-[90vh] overflow-y-auto">
        
        {/* Decorative Background Glows */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-start mb-6">
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-xs text-blue-400 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Supabase Backend Connected</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Book an Appointment
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Schedule a session with our team. Details are saved instantly to your Supabase database.
          </p>
        </div>

        {/* Status Notification Banners */}
        {status.type === 'success' && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3 text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
            <div>
              <p className="font-semibold">{status.message}</p>
              <p className="text-xs text-emerald-400/80 mt-1">
                We'll reach out to confirm your booking date and time.
              </p>
            </div>
          </div>
        )}

        {status.type === 'error' && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
            <div>
              <p className="font-semibold">Unable to Save Appointment</p>
              <p className="text-xs text-rose-300/80 mt-1">{status.message}</p>
              {status.message.includes('relation "public.appointments" does not exist') || status.message.includes('table') ? (
                <div className="mt-2 p-2 bg-black/40 rounded border border-rose-500/20 text-[11px] font-mono text-gray-300">
                  Tip: Create the <strong>appointments</strong> table in your Supabase SQL Editor.
                </div>
              ) : null}
            </div>
          </div>
        )}

        {/* Appointment Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">Full Name *</label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Email & Phone grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">Service Type</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#121824] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
            >
              {services.map((svc) => (
                <option key={svc} value={svc} className="bg-[#0a0e17] text-white">
                  {svc}
                </option>
              ))}
            </select>
          </div>

          {/* Date & Time Slot Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">Date *</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="date"
                  name="appointment_date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.appointment_date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">Time Slot *</label>
              <div className="relative">
                <Clock className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                <select
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#121824] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
                >
                  {availableTimes.map((time) => (
                    <option key={time} value={time} className="bg-[#0a0e17] text-white">
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Notes / Special Requests */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">Notes / Message (Optional)</label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
              <textarea
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Let us know any details or questions..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3.5 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Saving to Supabase...</span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4" />
                <span>Confirm & Save Appointment</span>
              </>
            )}
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
          <span>Project ID: <code className="text-blue-400 font-mono">dtmajcsbgutvehvzhluw</code></span>
          <span>Table: <code className="text-blue-400 font-mono">appointments</code></span>
        </div>

      </div>
    </div>
  );
}
