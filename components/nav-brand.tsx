type Props = {
  children: JSX.Element;
};

const NavBrand = ({ children }: Props) => {
  return (
    <span className="text-xl font-bold tracking-tight sm:mr-6 md:text-2xl">
      {children}
    </span>
  );
};

export default NavBrand;
