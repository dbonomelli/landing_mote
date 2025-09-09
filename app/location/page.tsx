import { JSX } from "react";

export default function Location(): JSX.Element {
  return (
    <section id="ubicacion" className="mb-12 p-8">
      <h2 className="text-3xl font-semibold mb-4">Ubicación</h2>
      <div className="max-w-md overflow-x-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.99907956394!2d-70.76684172397!3d-33.50140107336928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c329fc6763f5%3A0xf4807ae6fdc2cdd1!2sMote%20con%20huesillo%20Donde%20la%20T%C3%ADa%20Nena!5e0!3m2!1ses!2scl!4v1757439920769!5m2!1ses!2scl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
        <p className="mt-3 text-center">Plaza Arica, Maipu, Santiago</p>
      </div>
    </section>
  );
}
