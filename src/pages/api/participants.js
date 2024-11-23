export default async function handler(req, res) {
  const data = [
    {
      country: "Austria",
      institution: "GeoSphere Austria",
    },
    {
      country: "Belgium",
      institution: "Belgian Science Policy Office (BELSPO)",
    },
    {
      country: "Denmark",
      institution: "Geological Survey of Denmark and Greenland (GEUS)",
    },
    {
      country: "Finland",
      institution: "University of Helsinki",
    },
    {
      country: "France",
      institution: "Centre National de la Recherche Scientifique (CNRS)",
    },
    {
      country: "Germany",
      institution: "GeoForschungsZentrum (GFZ)",
    },
    {
      country: "Greece",
      institution: "Earthquake Planning and Protection Organization (EPPO)",
    },
    {
      country: "Italy",
      institution: "Instituto Nazionale di Geofisica e Vulcanologia (INGV)",
    },
    {
      country: "Netherlands",
      institution: "Royal Netherlands Meteorological Institute (KNMI)",
    },
    {
      country: "Norway",
      institution: "University of Bergen (UiB)",
    },
    {
      country: "Portugal",
      institution: "Instituto Portugues do Mare e da Atmosfera (IPMA)",
    },
    {
      country: "Romania",
      institution: "National Institute for Earth Physics (NIEP/INFP)",
    },
    {
      country: "Sweden",
      institution: "University of Uppsala",
    },
    {
      country: "Switzerland",
      institution:
        "Eidgenössische Technische Hochschule Zürich (ETH) - Swiss Seismological Service (SED)",
    },
    {
      country: "Turkey",
      institution:
        "Kandilli Observatory and Earthquake Research Institute (KOERI)",
    },
    {
      country: "Turkey",
      institution: "Disaster and Emergency Management Presidency (AFAD)",
    },
    {
      country: "United Kingdom",
      institution: "British Geological Survey (BGS)",
    },
  ];

  res.status(200).json(data);
}
