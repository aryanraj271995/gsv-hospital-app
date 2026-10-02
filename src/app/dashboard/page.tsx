"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import Header from "@/components/layout/Header";
import { appointments } from "@/data/dummy";
import { Calendar, Users, Activity, Clock, Plus, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export default function Dashboard() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setIsAuth(true);
    }
  }, [router]);

  if (!isAuth) return null;

  const todayStr = new Date().toISOString().split('T')[0];
  const todayAppts = appointments.filter(a => a.date === todayStr);
  const upcomingAppts = appointments.filter(a => a.date > todayStr);
  const pendingAppts = appointments.filter(a => a.status === 'Pending');

  const filteredAppts = appointments.filter(a => a.date === selectedDate);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const stats = [
    { label: "Today's", count: todayAppts.length, icon: Calendar, color: "#3b82f6", gradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)" },
    { label: "Upcoming", count: upcomingAppts.length, icon: Activity, color: "#10b981", gradient: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)" },
    { label: "Pending", count: pendingAppts.length, icon: Clock, color: "#f59e0b", gradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)" },
    { label: "Total", count: 1248, icon: Users, color: "#8b5cf6", gradient: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)" }
  ];

  return (
    <div>
      <Header />

      <div style={{ padding: '24px 20px', position: 'relative', zIndex: 10 }}>

        {/* Main action card */}
        <div className="card">
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.2px' }}>
              {format(new Date(), 'EEEE, MMM d, yyyy')}
            </p>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.3px', marginTop: '2px' }}>
              {getGreeting()}, Admin
            </h2>
          </div>

          <Link href="/appointments/book" style={{ textDecoration: 'none', outline: 'none', WebkitTapHighlightColor: 'transparent' }}>
            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              background: 'linear-gradient(135deg, #f26b21 0%, #e0580e 100%)',
              color: 'white',
              padding: '16px',
              borderRadius: '16px',
              border: 'none',
              fontSize: '1.05rem',
              fontWeight: 600,
              boxShadow: '0 10px 25px -8px rgba(242, 107, 33, 0.8), inset 0 2px 4px rgba(255,255,255,0.2)',
              cursor: 'pointer',
              outline: 'none',
            }}>
              <Plus size={22} strokeWidth={2.5} />
              Book New Appointment
            </button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{
                  background: stat.gradient,
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px -4px rgba(0,0,0,0.2)'
                }}>
                  <Icon size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{stat.count}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Date Selector */}
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px' }}>Appointments</h3>
          <div style={{ position: 'relative' }}>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                padding: '8px 14px',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: 'inherit',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#0f172a',
                background: 'white',
                boxShadow: '0 2px 8px -2px rgba(0,0,0,0.05)',
                outline: 'none',
                WebkitAppearance: 'none',
                colorScheme: 'light'
              }}
            />
          </div>
        </div>

        {/* Appt List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredAppts.length > 0 ? (
            filteredAppts.map((appt, i) => (
              <div key={appt.id} className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
                padding: '16px'
              }}>
                {/* Subtle side accent line */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
                  background: appt.status === 'Confirmed' ? '#10b981' : appt.status === 'Pending' ? '#f59e0b' : '#ef4444'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{
                      width: '52px', height: '52px',
                      borderRadius: '18px',
                      background: `linear-gradient(135deg, ${['#e0f2fe', '#fce7f3', '#f3e8ff'][i % 3]} 0%, ${['#bae6fd', '#fbcfe8', '#e9d5ff'][i % 3]} 100%)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem', fontWeight: 700, 
                      color: ['#0284c7', '#db2777', '#9333ea'][i % 3],
                      boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5), 0 4px 8px rgba(0,0,0,0.05)'
                    }}>
                      {appt.patientName.charAt(0)}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>{appt.patientName}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '2px' }}>{appt.age} Yrs • {appt.gender}</p>
                    </div>
                  </div>
                  <button style={{ color: '#cbd5e1', background: 'none', border: 'none', outline: 'none' }}>
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.05) 90%, transparent 100%)' }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div>
                      <div style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Doctor</div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem', marginTop: '2px' }}>{appt.doctor}</div>
                    </div>
                    <div>
                      <div style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Time</div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem', marginTop: '2px' }}>{appt.time}</div>
                    </div>
                  </div>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: appt.status === 'Confirmed' ? 'rgba(16, 185, 129, 0.2)' : appt.status === 'Pending' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: appt.status === 'Confirmed' ? '#34d399' : appt.status === 'Pending' ? '#fbbf24' : '#f87171',
                    border: `1px solid ${appt.status === 'Confirmed' ? 'rgba(16, 185, 129, 0.3)' : appt.status === 'Pending' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                  }}>
                    {appt.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="card" style={{
              textAlign: 'center', padding: '48px 24px',
              border: '2px dashed var(--border)'
            }}>
              <Calendar size={48} strokeWidth={1} style={{ color: '#475569', margin: '0 auto 16px' }} />
              <h4 style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem' }}>No Appointments</h4>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '6px', fontWeight: 500 }}>Enjoy your free time!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
