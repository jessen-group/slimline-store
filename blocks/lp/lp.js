/**
 * D-Line marketing landing — structure from Figma (Desktop - 4, node 327:646).
 * Images use Figma MCP export URLs; replace with hosted assets for production longevity.
 */

function staticAsset(path) {
  const base = window.hlx?.codeBasePath ?? '';
  return `${base}${path}`;
}

const ASSETS = {
  hero: 'https://www.figma.com/api/mcp/asset/7d42cf6e-2b69-4435-bbe2-a6db80cf5dc7',
  industry: 'https://www.figma.com/api/mcp/asset/218ecd7b-e911-4304-9436-9ebe9823abcf',
  iconSite: 'https://www.figma.com/api/mcp/asset/3b437d0f-5482-40e6-a549-f91d12f69977',
  iconView: 'https://www.figma.com/api/mcp/asset/76711deb-a8ab-4e5b-8127-1628a232b11d',
  iconContent: 'https://www.figma.com/api/mcp/asset/b0e285f6-ab2e-4a23-80d9-f57b4fee6580',
  iconHardware: 'https://www.figma.com/api/mcp/asset/cb6108e1-5de9-4848-aad7-79d4b55d715e',
  iconInstall: 'https://www.figma.com/api/mcp/asset/69357210-2f1f-46aa-b256-04c7f8d40c2a',
  iconSupport: 'https://www.figma.com/api/mcp/asset/f4067d51-6b4a-4c3b-a1f2-daea0ab95244',
  chevL: 'https://www.figma.com/api/mcp/asset/4ff4f005-d2e4-4cd9-8354-065901a7f535',
  chevR: 'https://www.figma.com/api/mcp/asset/c32c9d4e-e8e7-4519-aba8-41c36d493f96',
};

const NAV_LINKS = [
  { label: 'Solutions', href: '#lp-offer' },
  { label: 'Industries', href: '#lp-industry' },
  { label: 'How It Works', href: '#lp-trusted' },
  { label: 'Why D-Line', href: '#lp-contact' },
];

const OFFER_CARDS = [
  {
    icon: ASSETS.iconSite,
    title: 'Site-specific Design',
    lines: [
      'Every system matched to your environment,',
      'viewing distance and usage, never pushed',
      'as one-size-fits-all.',
    ],
  },
  {
    icon: ASSETS.iconView,
    title: 'Optimised Viewing Distance',
    lines: [
      'Pixel pitch, brightness and resolution are selected for how your audience will actually see the display. Not generic spec sheet defaults.',
    ],
  },
  {
    icon: ASSETS.iconContent,
    title: 'Content Ready',
    lines: [
      'We configure the content management system, train your team and make sure your display is live and working before we leave the site.',
    ],
  },
  {
    icon: ASSETS.iconHardware,
    title: 'Commercial-grade hardware',
    lines: [
      'Purpose-built for high-traffic environments, rated for continuous operation, with consistent brightness and colour across every panel.',
    ],
  },
  {
    icon: ASSETS.iconInstall,
    title: 'Professional installation',
    lines: [
      'Our team handles delivery, mounting, cabling and commissioning. No third-party installers, no passing the problem; we own it start to finish.',
    ],
  },
  {
    icon: ASSETS.iconSupport,
    title: 'Ongoing Support',
    lines: [
      'Hardware warranty, software updates and a direct line to our team. If something isn\'t right, we fix it; not a call centre, not a ticket queue.',
    ],
  },
];

const INDUSTRY_CARDS = [
  {
    num: '01',
    title: 'Pharmacies',
    desc: ['Promotional screens, wait-time', 'displays and health messaging.'],
  },
  {
    num: '02',
    title: 'Retail',
    desc: ['High-impact window displays, in-', 'store video walls and signage.'],
  },
  {
    num: '03',
    title: 'Shopfitters',
    desc: ['Supply and install partnerships for', 'commercial fit-out projects.'],
  },
  {
    num: '04',
    title: 'Commercial spaces',
    desc: ['Corporate lobbies, boardrooms,', 'public spaces and venues.'],
  },
];

function loadMontserrat() {
  if (document.querySelector('link[data-lp-fonts]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap';
  link.dataset.lpFonts = 'true';
  document.head.appendChild(link);
}

function createEl(tag, className, attrs = {}) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  });
  return node;
}

function createImg(src, alt, className, eager = false) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  if (className) img.className = className;
  img.loading = eager ? 'eager' : 'lazy';
  return img;
}

function buildNav() {
  const nav = createEl('nav', 'lp-nav');
  const inner = createEl('div', 'lp-nav__inner');
  const logoLink = createEl('a', 'lp-nav__logo', { href: '/' });
  logoLink.appendChild(
    createImg(staticAsset('/icons/dline/lp-nav-logo.svg'), 'D-Line', 'lp-nav__logo-img', true),
  );

  const ul = createEl('ul', 'lp-nav__links');
  NAV_LINKS.forEach(({ label, href }) => {
    const li = createEl('li', 'lp-nav__li');
    const a = createEl('a', 'lp-nav__link', { href });
    a.textContent = label;
    li.appendChild(a);
    ul.appendChild(li);
  });

  const right = createEl('div', 'lp-nav__right');
  const phone = createEl('a', 'lp-nav__phone', { href: 'tel:1300658808' });
  phone.textContent = '1300 658 808';
  const cta = createEl('a', 'lp-btn lp-btn--nav', { href: '#lp-contact' });
  cta.textContent = 'Get in touch';

  right.append(phone, cta);
  inner.append(logoLink, ul, right);
  nav.appendChild(inner);
  return nav;
}

function buildHero() {
  const hero = createEl('section', 'lp-hero');
  const bg = createEl('div', 'lp-hero__bg');
  const picWrap = createEl('div', 'lp-hero__pic');
  picWrap.appendChild(createImg(ASSETS.hero, '', '', true));
  const grad = createEl('div', 'lp-hero__gradient');

  const inner = createEl('div', 'lp-hero__inner');
  const eyebrow = createEl('p', 'lp-hero__eyebrow');
  eyebrow.textContent = 'Commercial LED Display Solutions';

  const h1 = createEl('h1', 'lp-hero__title');
  ['The professional', 'LED display', 'partner for business.'].forEach((line) => {
    const span = createEl('span', 'lp-hero__title-line');
    span.textContent = line;
    h1.appendChild(span);
  });

  const sub = createEl('p', 'lp-hero__sub');
  sub.textContent = 'Design, supply and support of modular LED display systems for retail and commercial environments. Specified to your space, never one-size-fits-all.';

  const btnRow = createEl('div', 'lp-hero__cta-row');
  const heroCta = createEl('a', 'lp-btn lp-btn--hero', { href: '#lp-contact' });
  heroCta.textContent = 'Get in touch';
  btnRow.appendChild(heroCta);

  const stats = createEl('div', 'lp-hero__stats');
  const statDefs = [
    { html: true, parts: [{ t: '10 ', s: false }, { t: '+', s: true }], label: 'Years in LED' },
    { html: true, parts: [{ t: '500 ', s: false }, { t: '+', s: true }], label: 'Installs nationwide' },
    { html: false, val: '3', label: 'LED product types' },
    {
      html: false, val: 'Free', label: 'Consultation', accentVal: true,
    },
  ];

  statDefs.forEach((def) => {
    const cell = createEl('div', 'lp-hero__stat');
    const val = createEl('div', 'lp-hero__stat-val');
    if (def.html) {
      def.parts.forEach((part) => {
        const s = createEl('span', part.s ? 'lp-hero__stat-accent' : '');
        s.textContent = part.t;
        val.appendChild(s);
      });
    } else {
      val.textContent = def.val;
      if (def.accentVal) val.classList.add('lp-hero__stat-accent');
    }
    const lbl = createEl('div', 'lp-hero__stat-lbl');
    lbl.textContent = def.label;
    cell.append(val, lbl);
    stats.appendChild(cell);
  });

  inner.append(eyebrow, h1, sub, btnRow, stats);
  bg.append(picWrap, grad, inner);
  hero.append(bg);
  return hero;
}

function buildOffer() {
  const sec = createEl('section', 'lp-offer');
  sec.id = 'lp-offer';

  const shell = createEl('div', 'lp-offer__shell');
  const label = createEl('p', 'lp-section-label');
  label.textContent = 'What we offer';

  const headRow = createEl('div', 'lp-offer__head');
  const h2 = createEl('h2', 'lp-offer__h2');
  const offerL1 = createEl('span', 'lp-offer__h2-line');
  offerL1.textContent = 'Designed, supplied';
  const offerL2 = createEl('span', 'lp-offer__h2-line');
  offerL2.textContent = 'and installed — end to end.';
  h2.append(offerL1, document.createElement('br'), offerL2);

  const intro = createEl('p', 'lp-offer__intro');
  intro.textContent = 'Every D-Line system is specified to your environment — viewing distance, ambient light, usage and content type. No off-the-shelf defaults. From first brief through to ongoing support, we own the whole process.';

  headRow.append(h2, intro);

  const grid = createEl('div', 'lp-offer__grid');
  OFFER_CARDS.forEach((card) => {
    const cell = createEl('article', 'lp-offer__cell');
    const iconWrap = createEl('div', 'lp-offer__icon-wrap');
    iconWrap.appendChild(createImg(card.icon, '', 'lp-offer__icon'));
    const body = createEl('div', 'lp-offer__cell-body');
    const th = createEl('h3', 'lp-offer__cell-title');
    th.textContent = card.title;
    body.appendChild(th);
    card.lines.forEach((line) => {
      const p = createEl('p', 'lp-offer__cell-text');
      p.textContent = line;
      body.appendChild(p);
    });
    cell.append(iconWrap, body);
    grid.appendChild(cell);
  });

  shell.append(label, headRow, grid);
  sec.appendChild(shell);
  return sec;
}

function buildTrusted() {
  const sec = createEl('section', 'lp-trusted');
  sec.id = 'lp-trusted';
  const inner = createEl('div', 'lp-trusted__inner');

  const row = createEl('div', 'lp-trusted__title-row');
  const chevL = createImg(ASSETS.chevL, '');
  chevL.className = 'lp-trusted__chev lp-trusted__chev--flip';
  const title = createEl('p', 'lp-trusted__label');
  title.textContent = 'Trusted by';
  const chevR = createImg(ASSETS.chevR, '');
  chevR.className = 'lp-trusted__chev';
  row.append(chevL, title, chevR);

  const logos = createEl('div', 'lp-trusted__logos');
  for (let i = 0; i < 7; i += 1) {
    logos.appendChild(createEl('div', 'lp-trusted__logo-ph'));
  }

  inner.append(row, logos);
  sec.appendChild(inner);
  return sec;
}

function buildIndustry() {
  const sec = createEl('section', 'lp-industry');
  sec.id = 'lp-industry';

  const inner = createEl('div', 'lp-industry__inner');
  const left = createEl('div', 'lp-industry__left');

  const lbl = createEl('p', 'lp-section-label');
  lbl.textContent = 'Trusted service';

  const h2 = createEl('h2', 'lp-industry__h2');
  const indL1 = createEl('span', 'lp-industry__h2-line');
  indL1.textContent = 'Solutions for';
  const indL2 = createEl('span', 'lp-industry__h2-line');
  indL2.textContent = 'your industry';
  h2.append(indL1, document.createElement('br'), indL2);

  const sub = createEl('p', 'lp-industry__sub');
  sub.append(
    document.createTextNode('Each environment has its own display requirements — viewing'),
    document.createElement('br'),
    document.createTextNode('distances, ambient light, content cadence. We specify accordingly.'),
  );

  const ctaRow = createEl('div', 'lp-industry__cta-row');
  const cta = createEl('a', 'lp-btn lp-btn--industry', { href: '#lp-contact' });
  cta.textContent = 'Get in touch';
  ctaRow.appendChild(cta);

  const grid = createEl('div', 'lp-industry__grid');
  INDUSTRY_CARDS.forEach((c) => {
    const card = createEl('article', 'lp-industry__card');
    const num = createEl('span', 'lp-industry__num');
    num.textContent = c.num;
    const title = createEl('h3', 'lp-industry__card-title');
    title.textContent = c.title;
    const desc = createEl('div', 'lp-industry__card-desc');
    c.desc.forEach((line) => {
      const para = createEl('p', '');
      para.textContent = line;
      desc.appendChild(para);
    });
    card.append(num, title, desc);
    grid.appendChild(card);
  });

  left.append(lbl, h2, sub, ctaRow, grid);

  const right = createEl('div', 'lp-industry__visual');
  right.appendChild(createImg(ASSETS.industry, 'LED display in retail environment'));

  inner.append(left, right);
  sec.appendChild(inner);
  return sec;
}

function buildPreCta() {
  const sec = createEl('section', 'lp-precta');
  sec.id = 'lp-contact';

  const inner = createEl('div', 'lp-precta__inner');
  const left = createEl('div', 'lp-precta__left');
  const h2 = createEl('h2', 'lp-precta__h2');
  const headLn1 = createEl('span', 'lp-precta__h2-line');
  headLn1.textContent = 'Your space deserves';
  const headLn2 = createEl('span', 'lp-precta__h2-line');
  headLn2.append(
    document.createTextNode('a professional'),
    document.createElement('br'),
    document.createTextNode('LED display.'),
  );
  h2.append(headLn1, headLn2);

  const p = createEl('p', 'lp-precta__sub');
  p.append(
    document.createTextNode('Talk to an LED display specialist about your space, your'),
    document.createElement('br'),
    document.createTextNode('content and the right system for your business.'),
  );

  left.append(h2, p);

  const right = createEl('div', 'lp-precta__right');
  const bullets = createEl('ul', 'lp-precta__bullets');
  const items = [
    '10+ years in commercial LED display',
    'Supply, install and ongoing support included',
    'Free consultation — no commitment required',
  ];
  items.forEach((t) => {
    const li = createEl('li', 'lp-precta__bullet');
    const dot = createEl('span', 'lp-precta__dot');
    li.append(dot, document.createTextNode(t));
    bullets.appendChild(li);
  });

  const btn = createEl('a', 'lp-btn lp-btn--precta', { href: 'tel:1300658808' });
  btn.textContent = 'Get in touch →';

  right.append(bullets, btn);
  inner.append(left, right);
  sec.appendChild(inner);
  return sec;
}

function buildLpFooter() {
  const footer = createEl('div', 'lp-footer');
  footer.setAttribute('role', 'contentinfo');
  const footerMain = createEl('div', 'lp-footer__main');

  const colLogo = createEl('div', 'lp-footer__brand');
  const logoImg = createImg(staticAsset('/icons/dline/lp-footer-logo.svg'), 'D-Line');
  logoImg.className = 'lp-footer__logo';
  const byline = createEl('p', 'lp-footer__byline');
  byline.textContent = 'by Slimline Warehouse';
  colLogo.append(logoImg, byline);

  const ul = createEl('ul', 'lp-footer__links');
  NAV_LINKS.forEach(({ label, href }) => {
    const li = createEl('li', '');
    const a = createEl('a', 'lp-footer__link', { href });
    a.textContent = label;
    li.appendChild(a);
    ul.appendChild(li);
  });

  footerMain.append(colLogo, ul);
  const divider = createEl('div', 'lp-footer__divider');

  const bottom = createEl('div', 'lp-footer__bottom');
  const copy = createEl('p', 'lp-footer__copy');
  copy.textContent = '© 2026 Slimline Warehouse. All rights reserved.';
  const legal = createEl('div', 'lp-footer__legal');
  const priv = createEl('a', 'lp-footer__legal-link', { href: '/privacy-policy' });
  priv.textContent = 'Privacy Policy';
  const terms = createEl('a', 'lp-footer__legal-link', { href: '/terms-of-use' });
  terms.textContent = 'Terms of Use';
  legal.append(priv, terms);
  bottom.append(copy, legal);

  footer.append(footerMain, divider, bottom);
  return footer;
}

export default function decorate(block) {
  document.body.classList.add('lp-page');
  loadMontserrat();

  const layout = document.createElement('div');
  layout.className = 'lp-layout';
  layout.append(
    buildNav(),
    buildHero(),
    buildOffer(),
    buildTrusted(),
    buildIndustry(),
    buildPreCta(),
    buildLpFooter(),
  );

  block.replaceChildren(layout);
}
