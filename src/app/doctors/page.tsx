import Header from "@/components/layout/Header";
import { doctors } from "@/data/dummy";
import { User } from "lucide-react";
import Link from "next/link";

export default function Doctors() {
  return (
    <>
      <Header title="Our Doctors" />
      <div className="content-pad">
        {doctors.map(doctor => (
          <div key={doctor.id} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ background: '#e2e8f0', color: 'var(--text-muted)', width: '64px', height: '64px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={32} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--primary)' }}>{doctor.name}</h4>
              <p style={{ fontSize: '0.85rem', fontWeight: 500 }}>{doctor.speciality}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Experience: {doctor.experience}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--secondary)' }}>{doctor.availableTime}</p>
            </div>
          </div>
        ))}
        <Link href="/appointments/book" className="btn btn-accent" style={{ marginTop: '16px', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
          Book Appointment
        </Link>
      </div>
    </>
  );
}
