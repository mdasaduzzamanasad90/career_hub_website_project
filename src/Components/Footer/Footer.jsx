import icon from '../../assets/images/social.png'
const Footer = () => {
  return (
    <footer className=" bg-black text-white  py-20 md:px-40 px-10">
      <div className="footer sm:footer-horizontal border-b-2 py-10">
        <div>
          <h1 className="font-bold text-3xl">CareerHub</h1>
          <p className="text-left">
            There are many variations of passages <br />
            of Lorem Ipsum , but the majority have <br />
            suffered alteration in some form.
          </p>
          <img className='pt-4' src={icon} alt="" />
        </div>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
      </div>
      <div className="md:flex justify-between items-center pt-10">
        <h1>@2025 CareerHub. All Rights Reserved</h1>
        <h1>Powered by CareerHub</h1>
      </div>
    </footer>
  );
};

export default Footer;
