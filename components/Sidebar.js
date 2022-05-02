import React from "react";
import Image from "next/image";
import useFastFood from "../hooks/useFastFood";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useFastFood();

  return (
    <>
      <Image width={300} height={100} src="/assets/img/logo.svg" />
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
