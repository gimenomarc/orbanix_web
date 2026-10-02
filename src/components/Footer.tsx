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
            src="/media/logo.jpg"
            alt="ORBANIX GROUP"
            width={104}
            height={85}
            style={{ width: '100%', height: 'auto' }}
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
        </nav>
      </div>
    </footer>
  );
}
