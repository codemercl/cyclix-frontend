import styles from "./styles.module.scss";
import Image from 'next/image';

interface Link {
  name: string;
  url: string;
  imgSrc?: string;
}

interface LinkGroup {
  groupName: string;
  links: Link[];
}

const menuData: LinkGroup[] = [
  {
    groupName: "Resources",
    links: [
      { name: "Terms & Conditions", url: "/terms" },
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Refund Policy", url: "/refund" },
    ],
  },
  {
    groupName: "Support",
    links: [
      { name: "FAQ", url: "/faq" },
      { name: "Help Center", url: "/help" },
      { name: "Contact Support", url: "/support" },
    ],
  },
  {
    groupName: "Company",
    links: [
      { name: "About", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Plans", url: "/plans" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    groupName: "Resources",
    links: [
      { name: "About", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Plans", url: "/plans" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    groupName: "Support",
    links: [
      { name: "Tik Tok", url: "/faq", imgSrc: "/images/logo-tiktok.svg" },
      { name: "instagram", url: "/help", imgSrc: "/images/logo-tiktok.svg" },
      { name: "telegram", url: "/support", imgSrc: "/images/logo-tiktok.svg" },
    ],
  },
];

const Menu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      {menuData.map((group, index) => (
        <div key={index} className={styles.group}>
          <h4 className={styles.groupName}>{group.groupName}</h4>
          <ul className={styles.links}>
            {group.links.map((link, linkIndex) => (
              <li key={linkIndex} className={styles.link}>
                {link.imgSrc && (
                  <Image
                    src={link.imgSrc}
                    width={50}
                    height={50}
                    alt={`${link.name} logo`}
                    className={styles.image}
                  />
                )}
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Menu;