"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login, isAuthenticated } from "@/lib/auth";
import { Hospital, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFocusedU, setIsFocusedU] = useState(false);
  const [isFocusedP, setIsFocusedP] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (login(username, password)) {
        router.push("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
        setLoading(false);
      }
    }, 1200); // Slightly longer for a smoother loading animation feel
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0b3d91 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative blurred circles for premium feel */}
      <div style={{
        position: 'absolute',
        top: '-10%', left: '-10%',
        width: '300px', height: '300px',
        background: 'rgba(59, 130, 246, 0.4)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%', right: '-10%',
        width: '400px', height: '400px',
        background: 'rgba(242, 107, 33, 0.2)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        zIndex: 0
      }} />

      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '40px 32px',
        color: 'white',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        width: '100%',
        maxWidth: '420px',
        zIndex: 1,
        transition: 'transform 0.3s ease'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            width: '72px', 
            height: '72px', 
            borderRadius: '20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 20px',
            color: 'white',
            boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)',
            transform: 'rotate(-5deg)'
          }}>
            <Hospital size={36} style={{ transform: 'rotate(5deg)' }} />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px', letterSpacing: '-0.5px' }}>GSV Hospital</h1>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Secure Staff Management Portal</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Username Input */}
          <div style={{ position: 'relative' }}>
            <label style={{ 
              position: 'absolute', 
              top: (isFocusedU || username) ? '-10px' : '14px', 
              left: '16px', 
              fontSize: (isFocusedU || username) ? '0.75rem' : '1rem',
              color: (isFocusedU || username) ? '#3b82f6' : '#94a3b8',
              background: (isFocusedU || username) ? '#1e293b' : 'transparent',
              padding: (isFocusedU || username) ? '0 8px' : '0',
              transition: 'all 0.2s ease',
              pointerEvents: 'none',
              borderRadius: '4px'
            }}>
              Username
            </label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsFocusedU(true)}
              onBlur={() => setIsFocusedU(false)}
              style={{
                width: '100%',
                padding: '16px',
                background: 'rgba(0,0,0,0.2)',
                border: `1px solid ${isFocusedU ? '#3b82f6' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '12px',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: isFocusedU ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none'
              }}
              required
            />
          </div>
          
          {/* Password Input */}
          <div style={{ position: 'relative' }}>
            <label style={{ 
              position: 'absolute', 
              top: (isFocusedP || password) ? '-10px' : '14px', 
              left: '16px', 
              fontSize: (isFocusedP || password) ? '0.75rem' : '1rem',
              color: (isFocusedP || password) ? '#3b82f6' : '#94a3b8',
              background: (isFocusedP || password) ? '#1e293b' : 'transparent',
              padding: (isFocusedP || password) ? '0 8px' : '0',
              transition: 'all 0.2s ease',
              pointerEvents: 'none',
              borderRadius: '4px'
            }}>
              Password
            </label>
            <input 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocusedP(true)}
              onBlur={() => setIsFocusedP(false)}
              style={{
                width: '100%',
                padding: '16px',
                paddingRight: '48px',
                background: 'rgba(0,0,0,0.2)',
                border: `1px solid ${isFocusedP ? '#3b82f6' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '12px',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: isFocusedP ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none'
              }}
              required
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#94a3b8',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <div style={{ 
              background: 'rgba(239, 68, 68, 0.1)', 
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171', 
              padding: '10px 16px', 
              borderRadius: '8px',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              marginTop: '8px',
              background: loading ? '#2563eb' : 'linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)',
              color: 'white',
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 8px 16px rgba(37, 99, 235, 0.25)',
              opacity: loading ? 0.8 : 1
            }}
            onMouseOver={(e) => !loading && (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => !loading && (e.currentTarget.style.transform = 'translateY(0)')}
          >
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="spinner" style={{
                  width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', 
                  borderTopColor: 'white', borderRadius: '50%', animation: 'spin 1s linear infinite'
                }} />
                Authenticating...
              </div>
            ) : (
              <>Secure Login <ArrowRight size={18} /></>
            )}
          </button>
          
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
            >
              Need help? Contact IT Support
            </span>
          </div>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
