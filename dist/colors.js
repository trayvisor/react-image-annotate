import * as muiColors from "@mui/material/colors";
export var colors = [muiColors.red[500], muiColors.blue[500], muiColors.green[500], muiColors.orange[800], muiColors.brown[500], muiColors.lightGreen[700], muiColors.pink[500], muiColors.purple[500], muiColors.indigo[500], muiColors.teal[500], muiColors.lime[500], muiColors.blueGrey[500]];
var transparency = 0x88000000;

function reverseParseColor(rrggbb) {
  rrggbb = rrggbb.replace("#", "");
  var bbggrr = rrggbb.substr(4, 2) + rrggbb.substr(2, 2) + rrggbb.substr(0, 2);
  return parseInt(bbggrr, 16);
}

export var colorInts = colors.map(function (c) {
  return (reverseParseColor(c) | transparency) >>> 0;
});
export default colors;