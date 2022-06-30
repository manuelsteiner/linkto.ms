type Props = {
  children: JSX.Element;
};

const NavItem = ({ children }: Props) => {
  return (
    <li className="tracking-tight md:text-lg">{children}</li>
  );
};

export default NavItem;
