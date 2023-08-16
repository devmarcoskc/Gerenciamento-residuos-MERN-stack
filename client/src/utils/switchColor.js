const colors = [
    "#4B6F44",
    "#4B5320",
    "#FFD700",
    "#FF00FF",
    "#8F9779",
    "#FF4500",
    "#00308F",
    "#FF0000",
    "#8B0000",
    "#556B2F",
    "#FF00FF",
    "#2F4F4F",
    "#8B4513",
    "#F4A460",
    "#8A2BE2",
    "#696969",
]

export function switchColor(color) {
    switch(color) {
        case("orgânico"):
          return "#8B4513"
        case("reciclável"):
          return "#FF1493"
        case("metálico"):
          return "#FFFF00";
        case("plástico/isopor"):
          return "#FF0000";
        case("vidro"):
          return "#008000";
        case("hospitalar"):
          return "#C0C0C0";
        case("madeira"):
          return "rgba(0, 0, 0, 0.7)";
        case("radioativos"):
          return "#800080";
        case("papel/papelão"):
          return "#0000FF";
        case("contaminados ou perigosos"):
          return "#FFA500";
        case("misturados ou não recicláveis"):
          return "#808080";
        case("eletrônico"):
          return "#d2b48c";
        default:
            return colors[parseInt(Math.random() * colors.length)]
      }
}