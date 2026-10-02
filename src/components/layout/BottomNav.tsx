"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Plus, Users, Menu } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname === '/login') return null;

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Appts", href: "/appointments", icon: Calendar },
    { name: "Book", href: "/appointments/book", icon: Plus, isCenter: true },
    { name: "Patients", href: "/patients", icon: Users },
    { name: "More", href: "/more", icon: Menu },
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '480px',
      backgroundColor: '#1a8f6a',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '65px',
      boxShadow: '0 -4px 20px rgba(26, 143, 106, 0.2)',
      zIndex: 100
    }}>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        if (item.isCenter) {
          return (
            <Link key={item.name} href={item.href} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
              textDecoration: 'none',
              WebkitTapHighlightColor: 'transparent',
              padding: '4px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #f26b21 0%, #e0580e 100%)',
                color: 'white',
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(242, 107, 33, 0.4)',
                border: '2px solid #1a8f6a'
              }}>
                <Icon size={24} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '0.65rem', marginTop: '6px', color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>{item.name}</span>
            </Link>
          );
        }

        return (
          <Link key={item.name} href={item.href} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
            position: 'relative',
            width: '60px',
            height: '100%',
            outline: 'none',
            textDecoration: 'none',
            WebkitTapHighlightColor: 'transparent',
            paddingTop: '8px'
          }}>
            <Icon size={24} style={{
              marginBottom: '4px',
              strokeWidth: isActive ? 2.5 : 2,
            }} />
            <span style={{
              fontSize: '0.65rem',
              fontWeight: isActive ? 700 : 500,
            }}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
