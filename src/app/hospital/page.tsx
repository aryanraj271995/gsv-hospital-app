import Header from "@/components/layout/Header";
import { Hospital, Phone, Mail, MapPin } from "lucide-react";

export default function HospitalProfile() {
  return (
    <>
      <Header title="Hospital Profile" />
      <div className="content-pad">
        <div className="card" style={{ textAlign: 'center', padding: '32px 16px' }}>
          <div style={{ 
            background: 'var(--primary)', 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 16px',
            color: 'white'
          }}>
            <Hospital size={40} />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>GSV Multi-Speciality Hospital</h2>
          <p style={{ color: 'var(--secondary)', fontWeight: 500, marginBottom: '16px' }}>Your Health Our Priority</p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            A premium healthcare facility providing state-of-the-art medical services with experienced doctors and modern technology.
          </p>
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', marginTop: '8px' }}>Contact Information</h3>
        <div className="card">
          <a href="tel:8292027818" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}>
            <Phone size={20} style={{ color: 'var(--primary)' }} />
            <div>
              <div style={{ fontWeight: 500 }}>8292027818</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tap to call</div>
            </div>
          </a>
          <a href="mailto:gsvhospital@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}>
            <Mail size={20} style={{ color: 'var(--primary)' }} />
            <div>
              <div style={{ fontWeight: 500 }}>gsvhospital@gmail.com</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tap to email</div>
            </div>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0' }}>
            <MapPin size={20} style={{ color: 'var(--primary)' }} />
            <div>
              <div style={{ fontWeight: 500 }}>Main Branch, Bettiah</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bihar</div>
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', marginTop: '8px' }}>Facilities</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {['ICU', 'General Ward', 'Private Rooms', 'Emergency', 'Trauma', 'OPD'].map(facility => (
            <span key={facility} className="badge" style={{ background: '#e2e8f0', color: 'var(--text-main)', padding: '6px 12px' }}>
              {facility}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
