import React, { useState } from 'react';
import { X, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../../data.js';

export const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="contact-inquiry-modal"
        className="relative w-full max-w-lg bg-[#fbf9f5] rounded-2xl shadow-2xl overflow-hidden border border-[#dfb76c]/40 text-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="blueprint-pattern px-6 py-5 text-white flex items-center justify-between border-b border-[#dfb76c]/30">
          <div>
            <span className="text-[10px] tracking-widest text-[#dfb76c] font-cinzel font-semibold uppercase">
              REACH OUT
            </span>
            <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#f7e8c3]">
              Contact MRCL Infrastructure
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/40 hover:bg-[#8b1522] text-white flex items-center justify-center transition-colors focus:outline-none"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#dfb76c] mx-auto" />
              <h3 className="font-garamond text-2xl font-bold text-[#3c040d]">
                Inquiry Received
              </h3>
              <p className="text-sm text-neutral-600 max-w-xs mx-auto">
                Thank you for your interest. A senior property advisor will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Vikram Patel"
                    className="w-full px-3 py-2 text-xs border border-[#eae3d5] rounded-md bg-white focus:outline-none focus:border-[#8b1522]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs border border-[#eae3d5] rounded-md bg-white focus:outline-none focus:border-[#8b1522]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full px-3 py-2 text-xs border border-[#eae3d5] rounded-md bg-white focus:outline-none focus:border-[#8b1522]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Message / Project Interest
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about the property or information you are looking for..."
                  className="w-full px-3 py-2 text-xs border border-[#eae3d5] rounded-md bg-white focus:outline-none focus:border-[#8b1522]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#3c040d] text-[#f7e8c3] hover:bg-[#260207] rounded-md shadow flex items-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}

          {/* Quick info row */}
          <div className="mt-5 pt-4 border-t border-[#eae3d5] flex flex-wrap items-center justify-between text-[11px] text-neutral-500 gap-2">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#dfb76c]" />
              {companyInfo.phone}
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#dfb76c]" />
              {companyInfo.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
