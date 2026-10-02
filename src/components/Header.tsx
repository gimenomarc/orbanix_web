'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { nav } from '../data/content';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <a className="skip" href="#main">Saltar al contenido</a>
      <header className="header">
        <Link className="brand" href="/" aria-label="ORBANIX GROUP, inicio" onClick={closeMenu}>
          <Image
            src="/media/logo.jpg"
            alt="ORBANIX GROUP"
            width={550}
            height={451}
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="navigation"
          onClick={toggleMenu}
          type="button"
        >
          Menú <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
        </button>

        <nav
          id="navigation"
          className={isOpen ? 'open' : ''}
          aria-label="Navegación principal"
        >
          {nav.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            className="private-link"
            href="/area-privada"
            aria-current={pathname.startsWith('/area-privada') ? 'page' : undefined}
            onClick={closeMenu}
          >
            Área privada <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
    </>
  );
}
