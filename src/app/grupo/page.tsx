import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { principles, areas } from '../../data/content';

export const metadata: Metadata = {
  title: 'El Grupo',
  description: 'Conozca la visión, filosofía y estructura operativa de ORBANIX GROUP en Catalunya.'
};

export default function GrupoPage() {
  return (
    <>
      <section className="page-hero with-image">
        <Image
          src="/media/architecture.jpg"
          alt="Arquitectura corporativa ORBANIX"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', zIndex: -2 }}
        />
        <div>
          <p className="eyebrow">EL GRUPO</p>
          <h1>
            El valor se reconoce.<br />
            Se estructura.<br />
            <em>Se construye.</em>
          </h1>
          <p>Building Value, Creating Legacy.</p>
        </div>
      </section>

      <section className="section introduction">
        <h2>
          Producto.<br />
          Capital.<br />
          <em>Estrategia.</em>
        </h2>
        <div>
          <p className="lead">
            Una organización que conecta las distintas perspectivas de una decisión inmobiliaria.
          </p>
          <p>
            ORBANIX GROUP desarrolla su actividad en Catalunya a través de tres áreas complementarias:
            Real Estate, Investment y Advisory. El conocimiento del activo, el análisis de inversión
            y la coordinación de la ejecución forman parte de un mismo proceso integrado.
          </p>
          <p>
            Trabajamos con propietarios, inversores, empresas y clientes institucionales. Cada relación
            comienza por entender el objetivo, la situación del activo y las condiciones que deben guiar la operación.
          </p>
        </div>
      </section>

      <section className="section pale">
        <div className="section-heading">
          <p className="eyebrow">FILOSOFÍA</p>
          <h2>El rigor está en la forma de trabajar.</h2>
        </div>
        <div className="principles">
          {principles.map((item, i) => (
            <article key={item.title}>
              <span className="index">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section editorial">
        <p className="eyebrow">NUESTRA VISIÓN</p>
        <h2>
          La calidad de una decisión<br />
          empieza en la profundidad<br />
          <em>del análisis.</em>
        </h2>
        <p>
          Buscamos relaciones de largo plazo, con una interlocución clara y una visión compartida del valor que se quiere construir.
        </p>
      </section>

      <section className="territory section">
        <div>
          <p className="eyebrow">NUESTRO MERCADO</p>
          <h2>
            Catalunya.<br />
            <em>Una mirada de proximidad.</em>
          </h2>
          <p>
            Conocimiento local para entender el contexto de cada activo y acompañar decisiones con perspectiva.
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

      <section className="section pale">
        <h2>Especialización complementaria.</h2>
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
    </>
  );
}
