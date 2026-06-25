const NAV_LINKS = [
  { label: 'Solutions', href: '#customed-offer' },
  { label: 'Industries', href: '#customed-industry' },
  { label: 'How It Works', href: '#customed-trusted' },
  { label: 'Why D-Line', href: '#customed-contact' },
];

function buildNav() {
  const nav = createEl('nav', 'customed-nav');
  const inner = createEl('div', 'customed-nav__inner');

  const logoLink = createEl('a', 'customed-nav__logo', { href: '/' });
  logoLink.appendChild(
    createImg(
      staticAsset('/icons/dline/lp-nav-logo.svg'),
      'D-Line',
      'lp-nav__logo-img',
      true,
    ),
  );

  // Navigation links
  const ul = createEl('ul', 'customed-nav__links');

  NAV_LINKS.forEach(({ label, href }) => {
    const li = createEl('li', 'customed-nav__li');
    const a = createEl('a', 'customed-nav__link', { href });
    a.textContent = label;
    li.appendChild(a);
    ul.appendChild(li);
  });

  const right = createEl('div', 'customed-nav__right');

  const phone = createEl('a', 'customed-nav__phone', {
    href: 'tel:1300658808',
  });
  phone.textContent = '1300 658 808';

  const cta = createEl('a', 'customed-nav-btn customed-nav-btn--nav', {
    href: '#customed-contact',
  });
  cta.textContent = 'Get in touch';

  right.append(phone, cta);
  inner.append(logoLink, ul, right);
  nav.appendChild(inner);

  return nav;
}

export default function decorate(block) {
  document.body.classList.add('customed-nav-page');
  loadMontserrat();

  const layout = document.createElement('div');
  layout.className = 'customed-nav-layout';
  layout.append(
    buildNav(),
  );

  block.replaceChildren(layout);
}