import React from "react";
import { Link } from "react-router-dom";

export const BtnWhatsapp = () => {
  const AbrirWPLink = () => {
    const whatsappLink = `https://wa.me/+543815152843`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <Link
      className="text-decoration-none "
      style={{ color: "#534b49" }}
      onClick={AbrirWPLink}
    >
      Contactanos
    </Link>
  );
};
