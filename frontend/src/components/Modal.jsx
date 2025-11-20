import { useEffect, useState } from 'react';

export { ModalComponent };
        
const ModalComponent = ({ opened, onClose, title, children, modalWidth, modalHeight }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [opened]);

  if (!opened) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.3)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: theme === "dark" ? "#333" : "#fff", 
          color: theme === "dark" ? "#e0e0e0ff" : "#333",
          borderRadius: '8px',
          padding: '20px',
          width: modalWidth || '400px',
          height: modalHeight || 'auto',
          maxWidth: '90%',
          maxHeight: '90%',
          overflowY: 'auto',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.51)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{title}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: theme === "dark" ? "#e0e0e0ff" : "#333" }}>
            ×
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
