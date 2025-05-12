import React from "react";
import Section from "./Section";

export default function Resume() {
  return (
    <>
      <Section
        image="./assets/glitch-spiral.jpg"
        heading1="Hi, my name is"
        heading1Style="primaryBg"
        noTopPadding={true}
        content={
          <>
            <h2 className="text-3xl font-bold mb-4">Dominik Jonat</h2>
            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:djonat23@gmail.com"
                className="text-blue-600 underline"
              >
                djonat23@gmail.com
              </a>
            </p>
            <p className="mb-1">
              <strong>Telefon:</strong>{" "}
              <a href="tel:017620998649" className="text-blue-600 underline">
                017620998649
              </a>
            </p>
            <p className="mb-1">
              <strong>Adresse:</strong> Paderborner Str. 8, 10709 Berlin
            </p>
            <p className="mb-6">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/dj4815"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                github.com/dj4815
              </a>
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">
              Kenntnisse / Fähigkeiten
            </h3>
            <p className="mb-4">
              Astro, Bootstrap, C, CSS, Divi, Elementor, Git, HTML, Java,
              JavaScript, Jira, React, Shopify, Tailwind CSS, Visual Studio
              Code, Vite, WordPress, Webflow
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">
              Arbeitserfahrung
            </h3>
            <div className="mb-4">
              <h3 className="font-semibold">
                03/2022 – heute: Content Manager, Kiber Digital GmbH, Berlin
              </h3>
              <ul className="list-disc pl-5">
                <li>Entwicklung der internationalen Contentstrategie</li>
                <li>
                  Erstellung und Pflege von Webseiten (WordPress/Elementor/Divi)
                  und Webshops (Shopify/WooCommerce)
                </li>
                <li>Technical/On-page/Off-page SEO</li>
                <li>
                  Konzeption, Umsetzung und Analyse von E-Mail Marketing
                  Kampagnen (Zapier)
                </li>
              </ul>
            </div>

            <p className="mb-1 font-semibold">
              03/2018 – 02/2022: Receptionist, Meininger Oranienburger Straße
              GmbH, Berlin
            </p>
            <p className="mb-1 font-semibold">
              10/2016 – 02/2018: Studentische Hilfskraft – Sprachenzentrum,
              Freie Universität Berlin
            </p>
            <p className="mb-1 font-semibold">
              05/2015 – 09/2016: Studentische Hilfskraft – Sprachenzentrum,
              Europa-Universität Viadrina, Frankfurt (Oder)
            </p>
            <p className="mb-6 font-semibold">
              10/2013 – 04/2015: Studentische Hilfskraft – Sozio-oekonomisches
              Panel (SOEP), DIW Berlin
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Studium</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                04/2024 – heute: Software Development, IU Internationale
                Hochschule (Fernstudium)
              </li>
              <li>
                10/2016 – 09/2021: Geschichte/Deutsche Philologie (Lehramt),
                Freie Universität Berlin
              </li>
              <li>
                10/2013 – 09/2016: Rechtswissenschaft, Europa-Universität
                Viadrina, Frankfurt (Oder)
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Zertifikate</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>CompTIA A+</li>
              <li>CompTIA Network+</li>
              <li>Duolingo CEFR C2 (English)</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Sprachen</h3>
            <ul className="list-disc pl-5">
              <li>Deutsch (Muttersprache)</li>
              <li>Englisch (C2)</li>
              <li>Französisch (Grundkenntnisse)</li>
              <li>Polnisch (Grundkenntnisse)</li>
            </ul>
          </>
        }
      />
    </>
  );
}
