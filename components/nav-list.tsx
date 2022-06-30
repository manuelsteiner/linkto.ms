type Props = {
  children: JSX.Element[];
};

const NavList = ({ children }: Props) => {
  return (
    <ul className="inline-flex text-gray-900 dark:text-gray-50">{children}</ul>
  );
};

export default NavList;
