"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import { appointments } from "@/data/dummy";
import { Calendar, Search } from "lucide-react";

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [search, setSearch] = useState("");

  const filteredAppts = appointments.filter(a => {
    return a.date === selectedDate && (a.patientName.toLowerCase().includes(search.toLowerCase()) || a.doctor.toLowerCase().includes(search.toLowerCase()));
  });

  return (
    <>
      <Header title="Appointments" />
      <div className="content-pad">
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <Search size={20} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search patient or doctor..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '40px' }}
          />
        </div>

        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Filter by Date</h3>
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)' }}
          />
        </div>

        {filteredAppts.length > 0 ? (
          filteredAppts.map(appt => (
            <div key={appt.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>{appt.patientName}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{appt.age} Yrs • {appt.gender}</p>
                </div>
                <span className={`badge badge-${appt.status === 'Confirmed' ? 'success' : appt.status === 'Pending' ? 'warning' : 'danger'}`}>
                  {appt.status}
                </span>
              </div>
              
              <div style={{ background: 'var(--background)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Doctor:</span>
                    <div style={{ fontWeight: 500 }}>{appt.doctor}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Department:</span>
                    <div style={{ fontWeight: 500 }}>{appt.department}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Time:</span>
                    <div style={{ fontWeight: 500 }}>{appt.time}</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                <button className="btn btn-outline" style={{ flex: 1, padding: '8px' }}>Edit</button>
                <button className="btn" style={{ flex: 1, padding: '8px', background: '#fee2e2', color: '#991b1b', border: '1px solid #f87171' }}>Cancel</button>
              </div>
            </div>
          ))
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '48px 16px' }}>
            <Calendar size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px', opacity: 0.3 }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No appointments found</p>
          </div>
        )}
      </div>
    </>
  );
}
