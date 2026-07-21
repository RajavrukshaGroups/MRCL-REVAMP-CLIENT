import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, Phone, Mail, User, Clock, MapPin } from 'lucide-react';
import { PROJECTS } from '../../data';
import { submitEnquiryForm } from '../../api';

export default function ContactModal({ isOpen, onClose, preselectedProject = '' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [project, setProject] = useState(preselectedProject);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync preselected project if changed
  if (preselectedProject && !project && isOpen) {
    setProject(preselectedProject);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setLoading(true);
    try {
      const response = await submitEnquiryForm({
        name,
        email,
        phone,
        project,
        date,
        time,
        notes,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit enquiry");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setProject('');
    setDate('');
    setTime('');
    setNotes('');
    setSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    // Reset after transition finishes
    setTimeout(resetForm, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-gold-300/30 bg-brand-red-950 p-1 text-gold-50 shadow-2xl"
          >
            {/* Elegant Inner Marble/Gold Border effect */}
            <div className="relative rounded-lg bg-gradient-to-b from-brand-red-950 to-brand-red-900 p-6 md:p-8">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gold-200/60 hover:text-gold-400 hover:rotate-90 transition-all duration-300 p-1"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-6 text-center">
                    <span className="font-serif text-xs uppercase tracking-widest text-gold-400">MRCL INFRASTRUCTURE</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-gold-200 mt-1">Book a Site Visit</h3>
                    <p className="text-xs text-gold-100/75 mt-2">
                      Schedule a private tour or request an exclusive digital brochure for our high-luxury 4 BHK villas.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-gold-300 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gold-400/60">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-brand-red-900/60 border border-gold-300/25 rounded-md py-2 pl-10 pr-4 text-sm text-gold-50 placeholder-gold-200/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Phone side-by-side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gold-300 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gold-400/60">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@example.com"
                            className="w-full bg-brand-red-900/60 border border-gold-300/25 rounded-md py-2 pl-10 pr-4 text-sm text-gold-50 placeholder-gold-200/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gold-300 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gold-400/60">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            maxLength={10}
                            minLength={10}
                            required
                            value={phone}
                            onChange={(e) => {
                              let val = e.target.value.replace(/\D/g, '');
                              if (val.startsWith('0')) val = val.substring(1);
                              val = val.slice(0, 10);
                              setPhone(val);
                            }}
                            placeholder="+91 99860 12345"
                            className="w-full bg-brand-red-900/60 border border-gold-300/25 rounded-md py-2 pl-10 pr-4 text-sm text-gold-50 placeholder-gold-200/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Selector */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-gold-300 mb-1">
                        Select Villa Estate
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gold-400/60">
                          <MapPin className="w-4 h-4" />
                        </span>
                        <select
                          value={project}
                          onChange={(e) => setProject(e.target.value)}
                          className="w-full bg-brand-red-900 border border-gold-300/25 rounded-md py-2 pl-10 pr-4 text-sm text-gold-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all appearance-none"
                        >
                          <option value="">General Inquiry / Personal Counsel</option>
                          {PROJECTS.map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name} ({p.location})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date & Time of Site Visit */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gold-300 mb-1">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gold-400/60 pointer-events-none">
                            <Calendar className="w-4 h-4" />
                          </span>
                          <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-brand-red-900/60 border border-gold-300/25 rounded-md py-2 pl-10 pr-4 text-sm text-gold-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gold-300 mb-1">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gold-400/60 pointer-events-none">
                            <Clock className="w-4 h-4" />
                          </span>
                          <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full bg-brand-red-900/60 border border-gold-300/25 rounded-md py-2 pl-10 pr-4 text-sm text-gold-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-gold-300 mb-1">
                        Special Instructions / Requirements
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Any custom structural requests, preference for elevators, modular kitchen details, etc."
                        className="w-full bg-brand-red-900/60 border border-gold-300/25 rounded-md py-2 px-3 text-sm text-gold-50 placeholder-gold-200/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 cursor-pointer bg-gold-500 hover:bg-gold-400 text-brand-red-950 font-medium py-3 rounded-md transition-all duration-300 shadow-lg text-sm hover:shadow-gold-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-brand-red-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        'CONFIRM RESERVATION'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-gold-400 animate-bounce mb-4" />
                  <h3 className="font-serif text-2xl text-gold-200 mb-2">Reservation Confirmed</h3>
                  <p className="text-sm text-gold-100/80 max-w-sm mb-6">
                    Thank you, <strong className="text-gold-200">{name}</strong>. Your exclusive site visit for{' '}
                    <strong className="text-gold-200">{project || 'MRCL Estates'}</strong> has been registered.
                  </p>
                  <div className="bg-brand-red-900/40 border border-gold-300/10 p-4 rounded-lg w-full max-w-md text-left text-xs text-gold-100/70 space-y-2 mb-6">
                    <p>• A personal Luxury Counsel will reach out to you within 2 hours at <span className="text-gold-300">{phone}</span>.</p>
                    <p>• A confirmation brochure and GPS location map have been sent to <span className="text-gold-300">{email}</span>.</p>
                    {date && <p>• Scheduled Visit Date: <span className="text-gold-300">{date} {time ? `at ${time}` : ''}</span>.</p>}
                  </div>
                  <button
                    onClick={handleClose}
                    className="cursor-pointer bg-transparent hover:bg-gold-500/10 text-gold-400 hover:text-gold-300 font-medium border border-gold-500/30 px-6 py-2 rounded-md transition-all text-sm"
                  >
                    CLOSE WINDOW
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
