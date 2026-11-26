// Gera public/og.jpg (imagem de compartilhamento). Rode de novo quando a logo nova chegar.
import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#05231a"/><stop offset="1" stop-color="#0e7a4b"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
<rect x="80" y="90" width="96" height="96" rx="22" fill="#0e7a4b"/><path fill="#ffc629" d="M128 106s-24 27.300-24 44.400a24 24 0 0 0 48 0c0-17.100-24-44.400-24-44.400z"/>
<text x="200" y="128" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" fill="#b7d3c2" letter-spacing="6">DESENTUPIDORA</text>
<text x="200" y="182" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="900" fill="#ffffff">PREÇO BOM</text>
<text x="80" y="330" font-family="Arial, Helvetica, sans-serif" font-size="78" font-weight="900" fill="#ffffff">Desentupidora 24 horas</text>
<text x="80" y="420" font-family="Arial, Helvetica, sans-serif" font-size="78" font-weight="900" fill="#ffc629">Orçamento grátis</text>
<rect x="80" y="480" width="560" height="70" rx="35" fill="#ffc629"/>
<text x="112" y="527" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" fill="#23282b">Chegamos em 20 minutos</text>
</svg>`;
await sharp(Buffer.from(svg)).jpeg({ quality: 82, mozjpeg: true }).toFile('public/og.jpg');
