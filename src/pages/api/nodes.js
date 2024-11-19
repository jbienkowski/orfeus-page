export default async function handler(req, res) {
    const data = [
        {"name": "ODC", "url": "https://orfeus-eu.org"}
    ]

    res.status(200).json(data)
  }
