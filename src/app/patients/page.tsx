"use client";
import Header from "@/components/layout/Header";
import { patients } from "@/data/dummy";
import { Search, User } from "lucide-react";
import { useState } from "react";

export default function Patients() {
  const [search, setSearch] = useState("");
  
  const filteredPatients = patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Header title="Patients" />
      <div className="content-pad">
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <Search size={20} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search patients..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '40px' }}
          />
        </div>

        {filteredPatients.map(patient => (
          <div key={patient.id} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ background: 'var(--primary)', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={24} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontWeight: 600, fontSize: '1rem' }}>{patient.name}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{patient.age} Yrs • {patient.gender} • {patient.mobile}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--primary)', marginTop: '4px' }}>Last Appt: {patient.lastAppointment}</p>
            </div>
            <button className="btn btn-outline" style={{ padding: '6px 12px', width: 'auto', fontSize: '0.8rem' }}>View</button>
          </div>
        ))}
      </div>
    </>
  );
}
