import React, { useState } from "react";
import { toast } from "react-toastify";
import useCartStore from "../utils/cartStore";

const CheckoutForm = () => {
  const [nombreEncargado, setNombreEncargado] = useState("");
  const [telefonoEncargado, setTelefonoEncargado] = useState("");
  const [envio, setEnvio] = useState(false);
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [nombreRecibe, setNombreRecibe] = useState("");
  const [telefonoRecibe, setTelefonoRecibe] = useState("");
  const [domicilioEntrega, setDomicilioEntrega] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [formaPago, setFormaPago] = useState("efectivo");

  const cart = useCartStore((state) => state.cart);

  // Calcular el total de la compra
  const totalCompra = cart.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  const handleFinalizarCompra = () => {
    if (!nombreEncargado || !telefonoEncargado || !domicilioEntrega) {
      toast.error("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const message = "Hola! 😊 Quisiera realizar la siguiente compra:\n\n";
    const productsList = cart
      .map((item) => {
        return `- ${item.product.name} - Cantidad: ${item.quantity} - Precio Unitario: $${item.product.price}\n`;
      })
      .join("");

    const envioInfo = envio
      ? `Envío: Sí - Fecha de Entrega: ${fechaEntrega}\n`
      : "Envío: No\n";

    const customerInfo = `Nombre de quien encarga: ${nombreEncargado}\nForma de pago: ${formaPago}\nTeléfono de quien encarga: ${telefonoEncargado}\n${envioInfo}Nombre de quien recibe: ${nombreRecibe}\nTeléfono de quien recibe: ${telefonoRecibe}\nDomicilio de entrega: ${domicilioEntrega}\nComentarios: ${comentarios}\n`;

    const encodedMessage = encodeURIComponent(
      `${message}${productsList}\nPrecio total de compra: $${totalCompra}\n${customerInfo}`
    );
    const whatsappLink = `https://api.whatsapp.com/send?phone=4915734731854&text=${encodedMessage}\n`;

    // Abrir el enlace de WhatsApp en una nueva pestaña
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Información de Compra</h2>
      <form className="space-y-4 flex flex-col">
        <input
          type="text"
          value={nombreEncargado}
          onChange={(e) => setNombreEncargado(e.target.value)}
          placeholder="Nombre de quien encarga"
          className="input border-1 p-2 px-4"
          required
        />
        <input
          type="text"
          value={telefonoEncargado}
          onChange={(e) => setTelefonoEncargado(e.target.value)}
          placeholder="Teléfono de quien encarga"
          className="input border-1 p-2 px-4"
          required
        />
        <div className="flex items-center">
          <label className="mr-2">
            Envío: Sí
            <input
              type="checkbox"
              checked={envio}
              onChange={() => setEnvio(true)}
            />
          </label>
          <label>
            Envío: No
            <input
              type="checkbox"
              checked={!envio}
              onChange={() => setEnvio(false)}
            />
          </label>
        </div>
        {envio && (
          <input
            type="date"
            value={fechaEntrega}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setFechaEntrega(e.target.value)}
            className="input border-1 p-2 px-4"
          />
        )}
        <input
          type="text"
          value={nombreRecibe}
          onChange={(e) => setNombreRecibe(e.target.value)}
          placeholder="Nombre de quien recibe"
          className="input border-1 p-2 px-4"
        />
        <input
          type="text"
          value={telefonoRecibe}
          onChange={(e) => setTelefonoRecibe(e.target.value)}
          placeholder="Teléfono de quien recibe"
          className="input border-1 p-2 px-4"
        />
        <input
          type="text"
          value={domicilioEntrega}
          onChange={(e) => setDomicilioEntrega(e.target.value)}
          placeholder="Domicilio de entrega"
          className="input border-1 p-2 px-4"
          required
        />
        <textarea
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
          placeholder="Comentarios"
          className="input border-1 p-2 px-4"
        />
        <select
          value={formaPago}
          onChange={(e) => setFormaPago(e.target.value)}
          className="input border-1 p-2 px-4"
        >
          <option value="efectivo">Efectivo</option>
          <option value="tarjeta">Tarjeta de Crédito</option>
        </select>
      </form>

      <div className="flex items-center justify-center mt-8">
        <p className="text-lg font-bold mr-10">Total: ${totalCompra}</p>
        <button
          onClick={handleFinalizarCompra}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
