// src/pages/index.js
import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About ORFEUS</h1>
      <h2>Observatories & Research Facilities for European Seismology</h2>

      <p>
        ORFEUS (Observatories and Research Facilities for European Seismology,
        http://orfeus-eu.org/) is a non-profit foundation that promotes
        seismology in the Euro-Mediterranean area through the collection,
        archival and distribution of seismic waveform data, metadata, and
        closely related services and products. The data and services are
        collected or developed at national level by more than 60 contributing
        Institutions in Pan-Europe. They are further developed, integrated,
        standardized, homogenized and promoted through ORFEUS.
      </p>

      <p>
        Among the goals of ORFEUS are: (a) the development and coordination of
        waveform data products; (b) the coordination of a European data
        distribution system, and the support for seismic networks in archiving
        and exchanging digital seismic waveform data; (c) the encouragement of
        the adoption of best practices for seismic network operation, data
        quality control and data management; (d) the promotion of open access to
        seismic waveform data, products and services for the broader Earth
        science community. These goals are achieved through the development and
        maintenance of data services targeted to a broad community of
        seismological data users, ranging from earth scientists to earthquake
        engineering practitioners.
      </p>

      <p>
        Two Service Management Committees (SMCs) are consolidated within ORFEUS,
        devoted to managing, operating and developing (with the support of one
        or more Infrastructure Development Groups): (i) the European Integrated
        waveform Data Archive (EIDA; https://orfeus-eu.org/data/eida/); and (ii)
        the European Strong-Motion databases (SM;
        https://orfeus-eu.org/data/strong/). A new SMC is being encouraged to
        represent the community of European mobile pools (including amphibian
        instrumentation). Products and services for computational seismologists
        are also considered for integration in the ORFEUS domain, possibly
        leveraging on new EC-funded efforts.
      </p>

      <p>
        ORFEUS services currently provide access to the waveforms acquired by
        ~18,000 stations in Pan-Europe, including dense temporary experiments,
        with strong emphasis on open, high-quality data. Contributing to ORFEUS
        data archives means benefitting from long-term archival,
        state-of-the-art quality control, improved access, increased usage, and
        community participation. Access to data and products is ensured through
        state-of-the-art information and communication technologies, with strong
        emphasis on federated web services that considerably improve seamless
        user access to data gathered and/or distributed by the various ORFEUS
        institutions. Web services also facilitate the automation of downstream
        products. Particular attention is paid to adopting clear policies and
        licenses, and acknowledging the crucial role played by data providers,
        who are part of the ORFEUS community.
      </p>

      <p>
        There are significant efforts by ORFEUS participating institutions to
        enhance the existing services to tackle the challenges posed by the Big
        Data Era, with emphasis on data quality, improved user experience, and
        implementation of strategies for scalability, high-volume data access
        and archival. ORFEUS actively encourages interoperability and
        integration of multidisciplinary datasets in seismological and Earth
        Science workflows. ORFEUS data and services are assessed and improved
        through the technical and scientific feedback of a User Advisory Group
        (UAG), which comprises European Earth scientists with expertise on a
        broad range of disciplines.
      </p>

      <p>
        All ORFEUS services are developed in coordination with EPOS and are
        largely integrated in the EPOS Data Access Portal
        (https://ics-c.epos-eu.org/). ORFEUS is one of the founding Parties and
        a fundamental pillar of EPOS Seismology
        (https://epos-eu.org/tcs/seismology), that comprises ORFEUS, the EMSC
        (https://emsc-csem.org) and EFEHR (http://efehr.org). ORFEUS is active
        in EC-funded projects. ORFEUS participates in the International
        (https://fdsn.org/).
      </p>
    </>
  );
}
