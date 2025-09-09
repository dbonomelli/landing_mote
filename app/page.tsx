import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans text-gray-900">
      
    {/* Home */}
    <section id="home" className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Puesto Mote con Huesillo</h1>
      <img src="/mote-con-huesillo.jpg" alt="Mote con Huesillo" className="mx-auto rounded shadow-md mb-4 max-w-full" />
      <p className="text-lg mb-4">
        El mejor mote con huesillo tradicional hecho con cariño. Ven a probar este clásico sabor chileno refrescante.
      </p>
      <a href="#contacto" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded shadow transition">
        Contáctanos
      </a>
    </section>

    {/* Precios */}
    <section id="precios" className="mb-12">
      <h2 className="text-3xl font-semibold mb-4">Precios</h2>
      <ul className="space-y-2">
        <li className="border p-4 rounded shadow flex justify-between">
          <span>Mote con huesillo clásico</span><span>$1500</span>
        </li>
        <li className="border p-4 rounded shadow flex justify-between">
          <span>Mote con huesillo grande</span><span>$2000</span>
        </li>
        <li className="border p-4 rounded shadow flex justify-between">
          <span>Combo 2 vasos</span><span>$2800</span>
        </li>
      </ul>
    </section>

    {/* Contacto */}
    <section id="contacto" className="mb-12">
      <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
      <form className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Nombre" className="w-full border rounded px-3 py-2" />
        <input type="email" placeholder="Correo electrónico" className="w-full border rounded px-3 py-2" />
        <textarea placeholder="Mensaje" rows={4} className="w-full border rounded px-3 py-2"></textarea>
        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow w-full">Enviar</button>
      </form>
      <p className="mt-6 text-center">Teléfono: +56 9 1234 5678</p>
      <p className="text-center">Correo: contacto@moteconhuesillo.cl</p>
    </section>

    {/* Ubicación */}
    <section id="ubicacion" className="mb-12">
      <h2 className="text-3xl font-semibold mb-4">Ubicación</h2>
      <div className="max-w-md mx-auto">
        <iframe
          title="Ubicación Puesto Mote con Huesillo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.191658377412!2d-70.64826978480061!3d-33.456940980778216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c58ef2e570b1%3A0xbec4f23e6014b7a4!2sPlaza%20de%20Armas%20de%20Santiago!5e0!3m2!1ses!2scl!4v1689112050302!5m2!1ses!2scl"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
        <p className="mt-3 text-center">Plaza de Armas, Santiago, Chile</p>
      </div>
    </section>
  </div>
  );
}
