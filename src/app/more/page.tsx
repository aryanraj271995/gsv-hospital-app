"use client";
import Header from "@/components/layout/Header";
import { LogOut, User, Hospital as HospitalIcon, Phone, Stethoscope, Briefcase } from "lucide-react";
import Link from "next/link";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function More() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const menuItems = [
    { icon: HospitalIcon, label: "Hospital Profile", href: "/hospital" },
    { icon: User, label: "Doctors", href: "/doctors" },
    { icon: Stethoscope, label: "Specialities", href: "/specialities" },
    { icon: Phone, label: "Contact Hospital", href: "/hospital" },
    { icon: Briefcase, label: "Settings", href: "#" },
  ];

  return (
    <>
      <Header title="More Options" />
      <div className="content-pad">
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.href} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '16px',
                borderBottom: index < menuItems.length - 1 ? '1px solid var(--border)' : 'none',
                color: 'var(--text-main)',
                textDecoration: 'none'
              }}>
                <Icon size={20} style={{ color: 'var(--primary)', marginRight: '16px' }} />
                <span style={{ flex: 1, fontWeight: 500 }}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <button 
          onClick={handleLogout}
          className="btn" 
          style={{ 
            marginTop: '24px', 
            background: 'white', 
            border: '1px solid var(--danger)', 
            color: 'var(--danger)',
            display: 'flex',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </>
  );
}
