class ApiBase {
  constructor(data) {
    this.data = data;
  }

  filter = (query) => {
    return this.data.filter((item) => {
      for (const key in query) {
        if (
          item[key].toString().toLowerCase() !==
          query[key].toString().toLowerCase()
        ) {
          return false;
        }
      }
      return true;
    });
  };

  async handle(req, res) {
    const query = req.query;
    const filteredData = this.filter(query);
    res.status(200).json(filteredData);
  }
}

export default ApiBase;
