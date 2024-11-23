import ApiBase from "@/utils/ApiBase";

const data = [{ name: "ODC", url: "https://orfeus-eu.org" }];

const handler = new ApiBase(data);

export default function endpointHandler(req, res) {
  return handler.handle(req, res);
}
