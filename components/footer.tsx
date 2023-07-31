const Footer = () => {
  const curYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="py-10 mx-auto">
        <p className="text-xs text-center text-black">Copyright © {curYear} samizak</p>
      </div>
    </footer>
  );
};

export default Footer;
