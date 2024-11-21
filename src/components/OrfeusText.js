// SidebarTile.js
const text = "ORFEUS";

const OrfeusText = () => (
  <span className="font-bold">
    <span className="text-red-500">{text.charAt(0)}</span>
    {text.slice(1)}
  </span>
);

export default OrfeusText;
