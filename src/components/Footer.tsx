// components/Footer.tsx

interface FooterProps {
  name: string;
  year?: number;
}

function Footer({ name, year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="footer">
      <p>
        © {year} {name}. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}

export default Footer;