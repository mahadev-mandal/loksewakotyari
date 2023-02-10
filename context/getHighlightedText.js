import { Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";


function highlightMatch(text, searchTerm) {
  const escapedTerms = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split(/\s+/);
  const regex = new RegExp('\\b' + escapedTerms.join('|') + '\\b', 'gi');
  {/* eslint-disable-next-line no-control-regex */ }
  const parts = text.replace(regex, m => `\x01${m}\x02`).split(/(\x01[^\x02]+\x02)/);
  return (
    <Typography component="span">
      {parts.map((part, i) => (
        //part[0] === '\x01' ? {part} : {part})}
        <Typography component="span"
          key={i}
          sx={
            part[0] === '\x01' ? { background: yellow[900], } : {}
          }
        >
          {/* eslint-disable-next-line no-control-regex */}
          {part.replace(/[\x01\x02]/g, '')}
        </Typography>
      ))}
    </Typography>
  );
}

export default highlightMatch;