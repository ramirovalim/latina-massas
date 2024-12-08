import focacciaIndividual from "../products/Focaccia (individual).jpg";
import focacciaTomateCereja from "../products/Focaccia tomate cereja e cebola roxa (grande).jpg";
import massaDePizza1 from "../products/Massa de pizza pré-assadas1.jpg";
import massaDePizza2 from "../products/Massas de pizza pré-assadas2.jpg";
import paoRusticoComProvolone2 from "../products/Pão Rústico com Provolone2.jpg";
import paoRusticoComProvolone1 from "../products/Pão Rústico com provolone1.jpg";
import paoDeForma100Integral1 from "../products/Pão de forma 100_ integral1.jpg";
import paoDeForma100Integral2 from "../products/Pão de forma 100_ integral2.jpg";
import paoRusticoComCalabresa from "../products/Pão rústico com calabresa.jpg";
import paoRusticoGeral from "../products/Pão rústico geral.jpg";
import paoRusticoItaliano from "../products/Pão rústico italiano.jpg";
import rolinhoDeCanela from "../products/Rolinho de canela.jpg";

export const productImages = {
  focacciaIndividual,
  focacciaTomateCereja,
  massaDePizza1,
  massaDePizza2,
  paoRusticoComProvolone1,
  paoRusticoComProvolone2,
  paoDeForma100Integral1,
  paoDeForma100Integral2,
  paoRusticoComCalabresa,
  paoRusticoGeral,
  paoRusticoItaliano,
  rolinhoDeCanela,
};

export type ProductImageKeys = keyof typeof productImages;
