import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { institutionalServices } from '../../data/content';

export const metadata: Metadata = {
  title: 'Institucional',
  description: 'Estrategia y ejecución comercial para activos y carteras de fondos, servicers, family offices y grandes propietarios.'
};

export default function InstitucionalPage() {
  return (
    <>
      <section className="page-hero with-image">
        <Image
          src="/media/boardroom.jpg"
          alt="ORBANIX Institutional"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', zIndex: -2 }}
        />
        <div>
          <p className="eyebrow">ORBANIX INSTITUTIONAL</p>
          <h1>
            Un interlocutor.<br />
            <em>Una visión de conjunto.</em>
          </h1>
          <p>Estrategia y ejecución comercial para activos y carteras singulares.</p>
        </div>
      </section>

      <section className="section introduction">
        <h2>
          Entender el contexto.<br />
          <em>Definir el proceso.</em>
        </h2>
        <div>
          <p className="lead">
            Fondos, servicers, bancos, family offices, patrimoniales, empresas y propietarios de activos de gran escala.
          </p>
          <p>
            Adaptamos el alcance del trabajo a la naturaleza del producto, los objetivos de la operación y las necesidades de información y seguimiento.
          </p>
        </div>
      </section>

      <section className="section pale">
        <div className="section-heading">
          <p className="eyebrow">CAPACIDADES</p>
          <h2>Del mandato a la ejecución.</h2>
        </div>

        <div className="institutional-services">
          {institutionalServices.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <Link href="/contacto?tipo=institucional" className="button gold">
          Presentar una propuesta institucional <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="section private-band">
        <div>
          <p className="eyebrow">CLIENTES INSTITUCIONALES RECURRENTES</p>
          <h2>
            Su relación con ORBANIX.<br />
            <em>En un espacio reservado.</em>
          </h2>
          <p>
            Oportunidades, documentación y seguimiento a través de ORBANIX Private.
          </p>
        </div>
        <Link href="/area-privada" className="button outline">
          Acceder a ORBANIX Private <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
