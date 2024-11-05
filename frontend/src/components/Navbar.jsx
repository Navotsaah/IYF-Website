const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="brand">Navotsaah</div>
      <div className="nav-links">
        <a>Home</a>
        <a>Courses</a>
        <a>Blog</a>
        <a>About</a>
        <a className="text-green">Join Us</a>
      </div>
    </div>
  );
};

export default Navbar;
