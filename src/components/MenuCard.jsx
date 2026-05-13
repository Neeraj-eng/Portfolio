import NavLink from "./NavLink";

const MenuCard = ({ links }) => (
  <ul className="flex flex-col items-center">
    {links.map((link, index) => (
      <li key={index}>
        <NavLink href={link.path} title={link.title} />
      </li>
    ))}
  </ul>
);

export default MenuCard;
