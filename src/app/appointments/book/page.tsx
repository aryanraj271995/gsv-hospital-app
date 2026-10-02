"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "@/components/layout/Header";
import { generateWhatsAppMessage } from "@/lib/whatsapp";
import { doctors, specialities } from "@/data/dummy";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BookAppointment() {
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const selectedDept = watch("department");
  const filteredDoctors = selectedDept ? doctors.filter(d => d.speciality === selectedDept) : doctors;

  // Simple time slot generator
  const timeSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM"];

  const onSubmit = (data: any) => {
    const doc = doctors.find(d => d.id === data.doctorId);
    const link = generateWhatsAppMessage({
      ...data,
      doctorName: doc?.name || "Any Doctor"
    });
    setWhatsappLink(link);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Header title="Appointment Request" subtitle="Status" />
        <div className="content-pad" style={{ textAlign: 'center', paddingTop: '48px' }}>
          <CheckCircle size={64} style={{ color: 'var(--success)', margin: '0 auto 24px' }} />
          <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Appointment Request Ready</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
            Your appointment details have been prepared for WhatsApp.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-success" style={{ backgroundColor: '#25D366', color: 'white', textDecoration: 'none' }}>
              Open WhatsApp
            </a>
            <Link href="/dashboard" className="btn btn-outline" style={{ textDecoration: 'none' }}>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ background: 'var(--primary)', color: 'white', padding: '16px', position: 'sticky', top: 0, zIndex: 10, display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link href="/dashboard" style={{ color: 'white' }}><ArrowLeft size={24} /></Link>
        <h1 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Book Appointment</h1>
      </div>
      
      <div className="content-pad">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="card">
            <h3 style={{ marginBottom: '16px', color: 'var(--primary)', fontSize: '1rem' }}>Patient Information</h3>
            
            <div className="form-group">
              <label className="form-label">Patient Name *</label>
              <input type="text" className="form-input" {...register("patientName", { required: "Name is required", minLength: 2 })} />
              {errors.patientName && <span className="error-msg">{errors.patientName.message as string}</span>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label">Age *</label>
                <input type="number" className="form-input" {...register("age", { required: "Age required", min: 0, max: 120 })} />
              </div>
              <div className="form-group">
                <label className="form-label">Gender *</label>
                <select className="form-input" {...register("gender", { required: "Required" })} style={{ backgroundColor: 'white' }}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Address *</label>
              <textarea className="form-input" rows={2} {...register("address", { required: "Address required" })}></textarea>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '16px', color: 'var(--primary)', fontSize: '1rem' }}>Appointment Information</h3>
            
            <div className="form-group">
              <label className="form-label">Department *</label>
              <select className="form-input" {...register("department", { required: "Required" })} style={{ backgroundColor: 'white' }}>
                <option value="">Select Department</option>
                {specialities.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Doctor *</label>
              <select className="form-input" {...register("doctorId", { required: "Required" })} style={{ backgroundColor: 'white' }} disabled={!selectedDept}>
                <option value="">Select Doctor</option>
                {filteredDoctors.map(d => <option key={d.id} value={d.id}>{d.name} ({d.experience})</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Date *</label>
              <input type="date" className="form-input" min={new Date().toISOString().split('T')[0]} {...register("appointmentDate", { required: "Date required" })} />
            </div>

            <div className="form-group">
              <label className="form-label">Time Slot *</label>
              <select className="form-input" {...register("appointmentTime", { required: "Required" })} style={{ backgroundColor: 'white' }}>
                <option value="">Select Time</option>
                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label">Relation *</label>
                <select className="form-input" {...register("relation", { required: "Required" })} style={{ backgroundColor: 'white' }}>
                  <option value="Self">Self</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Child">Child</option>
                  <option value="Parent">Parent</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Appt By Name *</label>
                <input type="text" className="form-input" {...register("appointmentBy", { required: "Required" })} />
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '16px', color: 'var(--primary)', fontSize: '1rem' }}>Contact Information</h3>
            
            <div className="form-group">
              <label className="form-label">Mobile Number *</label>
              <input type="tel" className="form-input" {...register("mobile", { 
                required: "Required", 
                pattern: { value: /^[6-9]\d{9}$/, message: "Invalid Indian mobile number" } 
              })} />
              {errors.mobile && <span className="error-msg">{errors.mobile.message as string}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Alternate Number</label>
              <input type="tel" className="form-input" {...register("alternateMobile", {
                pattern: { value: /^[6-9]\d{9}$/, message: "Invalid number" }
              })} />
              {errors.alternateMobile && <span className="error-msg">{errors.alternateMobile.message as string}</span>}
            </div>
          </div>

          <button type="submit" className="btn btn-accent" disabled={!isValid} style={{ marginBottom: '32px' }}>
            Book Appointment Now
          </button>
        </form>
      </div>
    </>
  );
}
