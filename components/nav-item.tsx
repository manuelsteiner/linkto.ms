type Props = {
  children: JSX.Element;
};

const NavItem = ({ children }: Props) => {
  return (
    <li className="md:text-lg tracking-tight">{children}</li>
  );
};

export default NavItem;
