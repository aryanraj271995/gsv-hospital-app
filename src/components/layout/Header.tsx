"use client";
import { Bell, Hospital, X } from "lucide-react";
import { useState } from "react";

export default function Header({ title = "GSV Hospital", subtitle = "Your Health Our Priority" }: { title?: string, subtitle?: string }) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="header" style={{
      background: '#1a8f6a',
      padding: '20px 24px 32px 24px',
      borderBottomLeftRadius: '24px',
      borderBottomRightRadius: '24px',
      boxShadow: '0 10px 25px -5px rgba(26, 143, 106, 0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'white',
      width: '100%',
      marginBottom: '-20px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.2)', 
          padding: '10px', 
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <Hospital size={26} color="#ffffff" />
        </div>
        <div>
          <h1 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.3px', marginBottom: '2px', color: 'white' }}>{title}</h1>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{subtitle}</p>
        </div>
      </div>
      
      <button 
        onClick={() => setShowNotifications(!showNotifications)}
        style={{ 
        color: 'white', 
        background: showNotifications ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)', 
        width: '44px', 
        height: '44px', 
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255,255,255,0.2)',
        position: 'relative',
        cursor: 'pointer',
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
        transition: 'background 0.2s'
      }}>
        <Bell size={20} />
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '12px',
          width: '8px',
          height: '8px',
          background: '#ef4444',
          borderRadius: '50%',
          border: '2px solid #1a8f6a'
        }}></span>
      </button>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div style={{
          position: 'absolute',
          top: '84px',
          right: '24px',
          width: 'calc(100% - 48px)',
          maxWidth: '320px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
          padding: '20px',
          zIndex: 100,
          color: '#0f172a',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', margin: 0, color: '#0f172a' }}>Notifications</h3>
            <button 
              onClick={() => setShowNotifications(false)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: '#f1f5f9' }}
            >
              <X size={18} color="#64748b" />
            </button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '12px', background: '#eff6ff', borderRadius: '12px', border: '1px solid #dbeafe' }}>
              <strong style={{ color: '#1a8f6a', display: 'block', marginBottom: '4px', fontSize: '0.9rem' }}>New Appointment Booking</strong>
              <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.4' }}>Vikas Singh booked a new appointment for tomorrow at 10:00 AM.</span>
              <span style={{ display: 'block', color: '#64748b', fontSize: '0.75rem', marginTop: '8px', fontWeight: 500 }}>Just now</span>
            </div>
            
            <div style={{ padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px', fontSize: '0.9rem' }}>System Update</strong>
              <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.4' }}>Server maintenance is scheduled for 2:00 AM tonight.</span>
              <span style={{ display: 'block', color: '#64748b', fontSize: '0.75rem', marginTop: '8px', fontWeight: 500 }}>2 hours ago</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
