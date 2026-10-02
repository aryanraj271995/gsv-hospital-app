import Header from "@/components/layout/Header";
import { specialities } from "@/data/dummy";
import { Stethoscope } from "lucide-react";

export default function Specialities() {
  return (
    <>
      <Header title="Departments" />
      <div className="content-pad" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {specialities.map((spec, i) => (
          <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', padding: '24px 12px' }}>
            <div style={{ background: 'var(--primary)', color: 'white', padding: '12px', borderRadius: '50%' }}>
              <Stethoscope size={24} />
            </div>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{spec}</span>
          </div>
        ))}
      </div>
    </>
  );
}
