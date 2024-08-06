// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Header() {
  // The Header UI component will render each of the Link elements in the links prop
  return (
    <>
      <h1> Header </h1>
      <Header
        links={[
          <Link key={1} className="nav-link text-light" to="/">
            Home
          </Link>,
          <Link key={2} className="nav-link text-light" to="/about">
            About Us
          </Link>,
          <Link key={2} className="nav-link text-light" to="/about">
            Contact
          </Link>,
          <Link key={3} className="nav-link text-light" to="/about">
            Portfolio
          </Link>,
          <Link key={4} className="nav-link text-light" to="/about">
            Resume
          </Link>,
        ]}
      />
    </>
  );
}
