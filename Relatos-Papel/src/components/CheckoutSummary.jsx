import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";


export const CheckoutSummary = ({ items }) => {
  const navigate = useNavigate();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showProcessingModal, setShowProcessingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { clearCart, setIsLoading } = useContext(GlobalContext);
 
  const [isRedirecting, setIsRedirecting] = useState(false);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const TAX_RATE = 0.1;
  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  /* Abrir primer modal */
  const handleConfirmPayment = () => {
    setShowConfirmModal(true);
  };

  /* Aceptar compra */
  const handleAccept = () => {
    setShowConfirmModal(false);
    setShowProcessingModal(true);

    // Simula procesamiento de pago (10 segundos)
    setTimeout(() => {
      setShowProcessingModal(false);
      setShowSuccessModal(true);
    }, 5000);
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
  };

  const handleGoHome = () => {
  
    setShowSuccessModal(false);
  

    setIsLoading(true);
  

    setTimeout(() => {
      clearCart();
    }, 1500);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/overview");
    }, 3500);
  };
  
  
  
  return (
    <>
      {/* RESUMEN */}
      <div className="bg-white border rounded-lg p-6 space-y-4">
        <h2 className="font-bold text-lg">Resumen final</h2>

        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>S/. {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Impuestos</span>
          <span>S/. {taxes.toFixed(2)}</span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>S/. {total.toFixed(2)}</span>
        </div>

        <button
          onClick={handleConfirmPayment}
          className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Confirmar pago
        </button>

        <p className="text-xs text-gray-400 text-center">
          Esta es una simulación, no se procesa ningún pago real.
        </p>
      </div>

      {/* MODAL CONFIRMACIÓN */}
      {showConfirmModal && (
        <Modal>
          <h3 className="text-lg font-medium mb-4">
            ¿Está seguro de realizar la compra?
          </h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleAccept}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Sí, confirmar
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancelar
            </button>
          </div>
        </Modal>
      )}

      {/* MODAL PROCESANDO */}
      {showProcessingModal && (
        <Modal>
          <h3 className="text-lg font-medium mb-4">Procesando su compra...</h3>
          <p className="text-sm text-gray-500">
            Por favor espere mientras validamos el pago.
          </p>
          <div className="mt-4 animate-spin w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto"></div>
        </Modal>
      )}

      {/* MODAL ÉXITO */}
      {showSuccessModal && (
        <Modal>
          <h3 className="text-lg font-bold mb-2 text-green-600">
            ¡Compra exitosa!
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            La factura llegará a su correo electrónico en un plazo máximo de 5
            minutos.
          </p>
          <button
            onClick={handleGoHome}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Volver a la tienda
          </button>
        </Modal>
      )}

{isRedirecting && (
        <Modal isFinal={true}>
          <h3 className="text-lg font-medium mb-4"> regresando...</h3>
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
        </Modal>
      )}
    </>
  );
};

/* MODAL BASE reutilizable */
const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 text-center">
        {children}
      </div>
    </div>
  );
};
