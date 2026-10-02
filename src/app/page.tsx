import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { areas } from '../data/content';
import { assets } from '../data/assets';
import AssetCard from '../components/AssetCard';

export default function HomePage() {
  const featuredAssets = assets.filter((a) => a.featured).slice(0, 3);

  return (
    <>
      {/* Hero Principal */}
      <section className="home-hero">
        <Image
          src="/media/barcelona.jpg"
          alt="Vista urbana de Barcelona"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 60%', filter: 'saturate(0.5)', zIndex: -2 }}
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">ORBANIX GROUP</p>
          <h1>
            Building Value,<br />
            <em>Creating Legacy.</em>
          </h1>
          <p>Real Estate · Investment · Advisory</p>
          <Link href="/grupo" className="button gold">
            Conocer el Grupo <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-caption">
          <span>CATALUNYA</span>
          <span>PRODUCTO. CAPITAL. CRITERIO.</span>
          <a href="#grupo">Explorar ↓</a>
        </div>
      </section>

      {/* 01 / El Grupo */}
      <section className="section introduction" id="grupo">
        <div>
          <p className="eyebrow">01 / EL GRUPO</p>
          <h2>
            Una perspectiva<br />
            <em>de conjunto.</em>
          </h2>
        </div>
        <div>
          <p className="lead">
            Conectamos conocimiento inmobiliario, capital y ejecución.
          </p>
          <p>
            ORBANIX GROUP reúne Real Estate, Investment y Advisory para acompañar a propietarios,
            inversores, empresas e instituciones en sus decisiones inmobiliarias de mayor calado.
          </p>
          <Link href="/grupo" className="text-link">
            Nuestra visión <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* 02 / Áreas de Negocio */}
      <section className="section pale">
        <div className="section-heading">
          <p className="eyebrow">02 / ÁREAS DE NEGOCIO</p>
          <h2>Tres especialidades.<br />Un criterio compartido.</h2>
        </div>
        <div className="area-grid">
          {areas.map((a, i) => (
            <Link key={a.slug} href={`/areas/${a.slug}`} className="area-tile">
              <span className="index">0{i + 1}</span>
              <h3>{a.name}</h3>
              <p>{a.description}</p>
              <span className="tile-link">
                Explorar el área <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 03 / Capacidades */}
      <section className="section capabilities">
        <div>
          <p className="eyebrow">03 / CAPACIDADES</p>
          <h2>
            Del análisis<br />
            <em>a la ejecución.</em>
          </h2>
        </div>
        <ol>
          <li>
            <h3>Comprender</h3>
            <p>Estudiar el activo, su contexto urbanístico y el objetivo estratégico del cliente.</p>
          </li>
          <li>
            <h3>Estructurar</h3>
            <p>Ordenar la información técnica y financiera, definiendo estrategia, proceso y contrapartes.</p>
          </li>
          <li>
            <h3>Ejecutar</h3>
            <p>Coordinar comercialización, negociación estructurada y seguimiento documental hasta cierre.</p>
          </li>
        </ol>
      </section>

      {/* 04 / Selección Inmobiliaria */}
      <section className="section pale">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">04 / SELECCIÓN INMOBILIARIA</p>
            <h2>Activos destacados.</h2>
          </div>
          <Link href="/activos" className="text-link">
            Ver catálogo completo <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="asset-grid">
          {featuredAssets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </section>

      {/* 05 / Territorio */}
      <section className="territory section">
        <div>
          <p className="eyebrow">NUESTRO MERCADO</p>
          <h2>
            Catalunya.<br />
            <em>Una mirada de proximidad.</em>
          </h2>
          <p>
            Conocimiento local y sobre el terreno para entender el contexto de cada activo y acompañar decisiones con perspectiva rigurosa.
          </p>
          <p>
            Barcelona, Girona, Lleida y Tarragona. Un territorio con realidades inmobiliarias distintas y oportunidades que exigen análisis propio.
          </p>
        </div>
        <div className="territory-word">
          <span>CAT</span>
          <p>BARCELONA · GIRONA<br />LLEIDA · TARRAGONA</p>
          <small>Mercado operativo actual</small>
        </div>
      </section>

      {/* 06 / Equipo */}
      <section className="section team-intro">
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1.2' }}>
          <Image
            src="/media/boardroom.jpg"
            alt="Espacio de reunión ORBANIX"
            fill
            sizes="(max-width: 850px) 100vw, 50vw"
            style={{ objectFit: 'cover', filter: 'saturate(0.45)' }}
          />
        </div>
        <div>
          <p className="eyebrow">06 / EQUIPO</p>
          <h2>
            Personas.<br />
            Criterio.<br />
            <em>Responsabilidad.</em>
          </h2>
          <p>
            Especialización y coordinación multidisciplinar al servicio de cada operación.
          </p>
          <Link href="/equipo" className="button" style={{ marginTop: '24px' }}>
            Conocer el equipo <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* 07 / Clientes Institucionales */}
      <section className="section institutional-band">
        <p className="eyebrow">07 / CLIENTES INSTITUCIONALES</p>
        <h2>
          Una relación directa.<br />
          <em>Una perspectiva a largo plazo.</em>
        </h2>
        <p>
          Soluciones estratégicas para fondos, entidades, servicers, family offices, sociedades patrimoniales y grandes propietarios.
        </p>
        <Link href="/institucional" className="button outline">
          ORBANIX Institutional <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
