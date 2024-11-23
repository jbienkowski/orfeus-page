import ApiBase from "@/utils/ApiBase";

const data = [
  {
    name: "<a target='_blank' href='http://geo-inquire.eu/'>Geo-INQUIRE</a>",
    years: "2022-2026",
    description:
      "Geosphere INfrastructures for QUestions into Integrated REsearch",
    state: "ongoing",
  },
  {
    name: "DT-GEO",
    years: "2022-2026",
    description: "Digital Twin for GEophysical Extremes",
    state: "ongoing",
  },
  {
    name: "RISE",
    years: "2015-2019",
    description: "Real-time earthquake risk reduction for a reSilient Europe",
    state: "finalized",
  },
  {
    name: "EPOS-SP",
    years: "2015-2019",
    description: "European Plate Observing System Sustainability Phase",
    state: "finalized",
  },
  {
    name: "EPOS-IP",
    years: "2015-2019",
    description: "European Plate Observing System Implementation Phase",
    state: "finalized",
  },
  {
    name: "SERA",
    years: "2017-2020",
    description:
      "Seismology and Earthquake Engineering Research Infrastructure Alliance for Europe.",
    state: "finalized",
  },
  {
    name: "EUDAT2020",
    years: "2015-2018",
    description: "EUDAT",
    state: "finalized",
  },
  {
    name: "EPOS-PP",
    years: "2010-2014",
    description: "European Plate Observing System Preparatory Phase",
    state: "finalized",
  },
  {
    name: "VERCE",
    years: "2011-2015",
    description:
      "Virtual Earthquake Seismology Research Community E-science Environment in Europe",
    state: "finalized",
  },
  {
    name: "ENVRI",
    years: "2011-2013",
    description:
      "Network of European Research Infrastructures for Earthquake Risk Assessment and Mitigation",
    state: "finalized",
  },
  {
    name: "NERA",
    years: "2010-2014",
    description:
      "Network of European Research Infrastructures for Earthquake Risk Assessment and Mitigation",
    state: "finalized",
  },
  {
    name: "NERIES",
    years: "2006-2010",
    description: "Network of Research Infrastructures for European Seismology",
    state: "finalized",
  },
  {
    name: "EERWEM",
    years: "2006-2007",
    description:
      "European-Mediterranean Infrastructure Co-ordination for Earthquake Seismology",
    state: "finalized",
  },
  {
    name: "EMICES",
    years: "2002-2004",
    description:
      "Earthquake monitoring and Earthquake risk in Western Mediterranean",
    state: "finalized",
  },
  {
    name: "MEREDIAN",
    years: "2000-2005",
    description:
      "Mediterranean-European Rapid Earthquake Data Information and Archiving Network",
    state: "finalized",
  },
];

const handler = new ApiBase(data);

export default function endpointHandler(req, res) {
  return handler.handle(req, res);
}
