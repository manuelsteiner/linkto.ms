type Props = {
  children: JSX.Element;
};

const NavBrand = ({ children }: Props) => {
  return (
    <span className="text-xl md:text-2xl font-bold tracking-tight sm:mr-6">
      {children}
    </span>
  );
};

export default NavBrand;
