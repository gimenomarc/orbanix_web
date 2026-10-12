import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <Link href="/" className="brand" aria-label="Inicio">
          <Image
            src="/media/logo-removebg-preview.png"
            alt="ORBANIX GROUP"
            width={550}
            height={452}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Link>
        <p>
          Building Value,<br />
          <em>Creating Legacy.</em>
        </p>
        <div>
          <span>Real Estate · Investment · Advisory</span>
          <span>Catalunya</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} ORBANIX GROUP</span>
        <nav aria-label="Información">
          <Link href="/contacto">Contacto</Link>
          <Link href="/legal">Aviso legal</Link>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/acceso-crm">Acceso CRM</Link>
        </nav>
      </div>
    </footer>
  );
}
