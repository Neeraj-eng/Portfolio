const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl hover:text-white transition"
    >
      {title}
    </a>
  );
};

export default NavLink;
