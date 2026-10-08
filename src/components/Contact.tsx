interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  telegram?: string;
  github?: string;
  linkedin?: string;
}

interface ContactProps {
  title: string;
  info: ContactInfo;
}

function Contact({ title, info }: ContactProps) {
  return (
    <section className="contact" id="contact">
      <h2>{title}</h2>

      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${info.email}`}>{info.email}</a>
        </p>

        {info.phone && (
          <p>
            <strong>Telefon:</strong> {info.phone}
          </p>
        )}

        {info.location && (
          <p>
            <strong>Manzil:</strong> {info.location}
          </p>
        )}

        <div className="social-links">
          {info.telegram && (
            <a href={info.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
          )}
          {info.github && (
            <a href={info.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {info.linkedin && (
            <a href={info.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;