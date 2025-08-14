import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, a as renderScript } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$Logo } from '../chunks/Layout_MCrPTZ-u.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const OspProfesionales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocalidad, setSelectedLocalidad] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const profesionales = [
    {
      "Apellido": "Almada",
      "Nombre": "Gustina Gimena",
      "Lugar de Atención": "Centro Médico de Especialidades",
      "Domicilio": "Boulevard Sarmiento 179 oeste",
      "Localidad": "Rawson",
      "Días y horario de atención": "Viernes 11 hs a 19hs",
      "Teléfono": "264476659"
    },
    {
      "Apellido": "Bazzani",
      "Nombre": "Magdalena",
      "Lugar de Atención": "CENCOR",
      "Domicilio": "25 de mayo",
      "Localidad": "Capital",
      "Días y horario de atención": "Lunes de 18:30 a 20:30hs",
      "Teléfono": "4226620-4218117"
    },
    {
      "Apellido": "Bolado",
      "Nombre": "Gimena",
      "Lugar de Atención": "Consultorio medico",
      "Domicilio": "Caseros 677 (sur)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 8:30hs a 12:30 y Jue de 16:30 a 21:30hs",
      "Teléfono": "4223124"
    },
    {
      "Apellido": "Bordon",
      "Nombre": "Gabriela",
      "Lugar de Atención": "Centro Médico SEMEBI SRL",
      "Domicilio": "San Luis 578 (Este)",
      "Localidad": "Capital",
      "Días y horario de atención": "Jueves de 17 a 20:30hs",
      "Teléfono": "2645545215"
    },
    {
      "Apellido": "Bustos",
      "Nombre": "Erica Noemi",
      "Lugar de Atención": "ELIPACE",
      "Domicilio": "Juan Echegaray 129 (sur)",
      "Localidad": "Jachal",
      "Días y horario de atención": "Martes 16hs a 21hs",
      "Teléfono": "2644596094"
    },
    {
      "Apellido": "Carmona",
      "Nombre": "Laura",
      "Lugar de Atención": "Estética Quetzal",
      "Domicilio": "Calle Alcázar Mnz D Casa 6 B* Universidad Católica",
      "Localidad": "Rivadavia",
      "Días y horario de atención": "Martes y jueves 15 a 21hs",
      "Teléfono": "26415508336"
    },
    {
      "Apellido": "Castro",
      "Nombre": "Marianela",
      "Lugar de Atención": "Clínica Azul",
      "Domicilio": "Santiago del Estero 35 (sur)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes 17 hs a 20hs",
      "Teléfono": "2645778097-4226395"
    },
    {
      "Apellido": "Cañamoro",
      "Nombre": "Macarena",
      "Lugar de Atención": "Hospital Privado. Consultorios Externos",
      "Domicilio": "Aberastain 162 (sur)",
      "Localidad": "Capital",
      "Días y horario de atención": "Jueves desde la 15a 17hs",
      "Teléfono": "4308600 líneas rotativas 2645634463"
    },
    {
      "Apellido": "Caballero",
      "Nombre": "María victoria",
      "Lugar de Atención": "Clínica Modelo, Clínica Kuidarte",
      "Domicilio": "Pedro Echague 205 (O), Comandante Cabot 207(o)",
      "Localidad": "Capital, Rawson",
      "Días y horario de atención": "Lunes a Viernes 16 a 21 martes de 8 a 13hs",
      "Teléfono": "4225363 4278616"
    },
    {
      "Apellido": "Chirino Castro",
      "Nombre": "María Fernanda",
      "Lugar de Atención": "Nutriap",
      "Domicilio": "sarmiento 614 sur",
      "Localidad": "Capital",
      "Días y horario de atención": "mar de 8:30 a 13 hs, juevde 14 a 21hs",
      "Teléfono": "2644867348"
    },
    {
      "Apellido": "Cigala",
      "Nombre": "Jesica Alejandra",
      "Lugar de Atención": "Gral paz 192 este",
      "Domicilio": "Gral paz 192 este",
      "Localidad": "Capital",
      "Días y horario de atención": "viernes de 13 hs a 20 hs",
      "Teléfono": "4218074"
    },
    {
      "Apellido": "Contreras",
      "Nombre": "Carolina Andrea",
      "Lugar de Atención": "Clínica EITOM",
      "Domicilio": "General Paz 320 Este",
      "Localidad": "Capital",
      "Días y horario de atención": "Mercedes 8 a 13hs Jueves 17 a 21hs",
      "Teléfono": ""
    },
    {
      "Apellido": "De la Torre",
      "Nombre": "Ely",
      "Lugar de Atención": "Centro Vitta",
      "Domicilio": "Catamarca 129 (N)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 17 a 21hs",
      "Teléfono": "2645066883"
    },
    {
      "Apellido": "Di Lorenzo",
      "Nombre": "Micaela",
      "Lugar de Atención": "ESSDIT",
      "Domicilio": "Av. Libertador General San Martín Nj2774 (o)",
      "Localidad": "Capital",
      "Días y horario de atención": "Lun,Mier y Vier 8 a13hs, Mar y lue 14 a 18hs",
      "Teléfono": "2645665806"
    },
    {
      "Apellido": "Fernández",
      "Nombre": "Ana Paola",
      "Lugar de Atención": "Nutriap",
      "Domicilio": "Sarmiento 614 sur.",
      "Localidad": "Capital",
      "Días y horario de atención": "Lun y mie de 15 a 18 hs Martes de 9 a 11:30hs",
      "Teléfono": "2644985187"
    },
    {
      "Apellido": "Figueroa",
      "Nombre": "Andrea",
      "Lugar de Atención": "Centro TAHUE",
      "Domicilio": "Santa Fe 477 (este)",
      "Localidad": "Capital",
      "Días y horario de atención": "Viernes de 10 a 14 Hs",
      "Teléfono": "4204571 / 2645784643"
    },
    {
      "Apellido": "Fernandoz",
      "Nombre": "Debora",
      "Lugar de Atención": "CIMAC",
      "Domicilio": "Rivadavia 574 este",
      "Localidad": "capital",
      "Días y horario de atención": "Mar y Mier de 16 a 20 hs",
      "Teléfono": "2644293100"
    },
    {
      "Apellido": "Funes",
      "Nombre": "Jesica",
      "Lugar de Atención": "Clínica de la Ciudad",
      "Domicilio": "Santa Fe 645 E.",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes y jueves desde las Miércoles desde las 8hs",
      "Teléfono": "4272927 (Int. 180- 182)"
    },
    {
      "Apellido": "Portia Cantón",
      "Nombre": "",
      "Lugar de Atención": "Étnica San Patricio",
      "Domicilio": "NUTRIDA 43º (No. rte)",
      "Localidad": "Capital",
      "Días y horario de atención": "Lunes de 9 a 11hs y de 17 Miércoles de 9 a 11hs y de Jueves de 9 a 11hs y de 17 a 20hs",
      "Teléfono": "428989077"
    },
    {
      "Apellido": "García",
      "Nombre": "Silvina",
      "Lugar de Atención": "Centro Médico Integral",
      "Domicilio": "Sargento Cabral 2225(Oeste)",
      "Localidad": "Rivadavia",
      "Días y horario de atención": "",
      "Teléfono": ""
    },
    {
      "Apellido": "García Gonzales",
      "Nombre": "Iris",
      "Lugar de Atención": "Red Radiologica San Juan (Medicentro)",
      "Domicilio": "Av. Cordoba 24 (e)",
      "Localidad": "Capital",
      "Días y horario de atención": "Lun, Mie y Vier17a19:30 hs",
      "Teléfono": "4216726"
    },
    {
      "Apellido": "González",
      "Nombre": "Gabriela",
      "Lugar de Atención": "KRONOS centro de alto rendimiento",
      "Domicilio": "Santa Fe 274(O)",
      "Localidad": "Capital",
      "Días y horario de atención": "Lunes 17 a 20hs",
      "Teléfono": "4221470"
    },
    {
      "Apellido": "González Quiroga",
      "Nombre": "Natalia",
      "Lugar de Atención": "Cordoba Clínica Medica",
      "Domicilio": "Av. Cordoba591(o)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 14 a 17:30hs",
      "Teléfono": "4221432/2644524538/2644125700"
    },
    {
      "Apellido": "Gutiérrez",
      "Nombre": "Carla",
      "Lugar de Atención": "clínica Mater Purissima",
      "Domicilio": "guernes 261 (n)",
      "Localidad": "Capital",
      "Días y horario de atención": "martes de 14 a 21hs",
      "Teléfono": "2646236254 / 4228203"
    },
    {
      "Apellido": "García Sirerola",
      "Nombre": "Maria Paula",
      "Lugar de Atención": "clínica Mater Purissima",
      "Domicilio": "guernes 261 (n)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 12hs",
      "Teléfono": "4201814"
    },
    {
      "Apellido": "Hierrozuelo",
      "Nombre": "Belen",
      "Lugar de Atención": "Consultorios",
      "Domicilio": "Av. Cordoba, 259 (o)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 16 a 21hs",
      "Teléfono": "4921030 / 2644532927"
    },
    {
      "Apellido": "Laciar",
      "Nombre": "Sabrina",
      "Lugar de Atención": "Clínica Cáceres",
      "Domicilio": "Mitre 694 (E)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 16.30 a 20hs",
      "Teléfono": "2644772142"
    },
    {
      "Apellido": "Lamatta Yañez",
      "Nombre": "Olga",
      "Lugar de Atención": "Medica",
      "Domicilio": "San Luis 713 Este.",
      "Localidad": "Capital",
      "Días y horario de atención": "Lunes, Miércoles y Viernes de 8.30 a 12hs y 17 a",
      "Teléfono": "2645145174"
    },
    {
      "Apellido": "Lopez",
      "Nombre": "Rita del Valle",
      "Lugar de Atención": "Clínica Alvera",
      "Domicilio": "Matias Zavalla 65 Norte",
      "Localidad": "Capital",
      "Días y horario de atención": "Jueves de 13 a 17hs",
      "Teléfono": "2646704076"
    },
    {
      "Apellido": "Lozano",
      "Nombre": "Valeria Ivana",
      "Lugar de Atención": "Consultorio CCMI",
      "Domicilio": "Mendoza 357 Norte",
      "Localidad": "Capital",
      "Días y horario de atención": "Lun, Mar, Mier de 8 a 12hs",
      "Teléfono": "2645315714"
    },
    {
      "Apellido": "Manrique",
      "Nombre": "Mariela",
      "Lugar de Atención": "Fideicomiso Clínica NEFA",
      "Domicilio": "Tuoumán 741 (S)",
      "Localidad": "Capital",
      "Días y horario de atención": "Miércoles de 17 a 21Hs",
      "Teléfono": "4229284/2644694923"
    },
    {
      "Apellido": "Martin Acosta",
      "Nombre": "M. Celeste",
      "Lugar de Atención": "CenCor",
      "Domicilio": "25 de Mayo 336 (Este)",
      "Localidad": "Capital",
      "Días y horario de atención": "Lun y mier de 8hs a 13hs",
      "Teléfono": "4218117"
    },
    {
      "Apellido": "Martínez",
      "Nombre": "M. Noelia",
      "Lugar de Atención": "Clínica Vidas",
      "Domicilio": "Gral. Paz 135 Este",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 14 a 18.30hs Miércoles, jueves y viernes de 8 a 12hs",
      "Teléfono": "4273587"
    },
    {
      "Apellido": "Mattar",
      "Nombre": "Vanina",
      "Lugar de Atención": "Clínica Parque Universitario",
      "Domicilio": "Hermógenes Ruiz 1155(S)",
      "Localidad": "Capital",
      "Días y horario de atención": "Lunes y Jueves de tarde",
      "Teléfono": "4231959/"
    },
    {
      "Apellido": "Montiveros",
      "Nombre": "Gabriela",
      "Lugar de Atención": "Espacio Salud",
      "Domicilio": "Arenales 122 (N)",
      "Localidad": "Albardón",
      "Días y horario de atención": "Lun y Jue de 17 a 20hs",
      "Teléfono": "2644059566"
    },
    {
      "Apellido": "Morino",
      "Nombre": "Florencia",
      "Lugar de Atención": "Centro Medico Lujan",
      "Domicilio": "Jujuy 75 (S)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 8 a 12hs Miér y vier 16 a 20hs",
      "Teléfono": "4201598"
    },
    {
      "Apellido": "Mugas",
      "Nombre": "Vanesa Yanina",
      "Lugar de Atención": "Kronos",
      "Domicilio": "Santa Fe 264 Oeste",
      "Localidad": "capital",
      "Días y horario de atención": "Jueves de Mañana y tarde",
      "Teléfono": "2644602837"
    },
    {
      "Apellido": "Mureddu",
      "Nombre": "Luciana",
      "Lugar de Atención": "Clinica Maria Auxiliadora",
      "Domicilio": "Mendoza 3728 (sur)",
      "Localidad": "Rawson",
      "Días y horario de atención": "Lunes a partir de las 17Hs",
      "Teléfono": "2644280241 / 2646611513"
    },
    {
      "Apellido": "Moreno",
      "Nombre": "Lujan",
      "Lugar de Atención": "CIMYN",
      "Domicilio": "Catamarca 417 (S)",
      "Localidad": "capital",
      "Días y horario de atención": "Mart y Jue de 13 a 15 hs Miercoles de 8:30 a 10:30",
      "Teléfono": "4221201"
    },
    {
      "Apellido": "Nievas",
      "Nombre": "Silvina",
      "Lugar de Atención": "CEMIN",
      "Domicilio": "Av. Libertador 2566 (o)",
      "Localidad": "Capital",
      "Días y horario de atención": "Viernes de 17 a 20.30hs",
      "Teléfono": "4265055"
    },
    {
      "Apellido": "Oliver Castillo",
      "Nombre": "Maria Gimena",
      "Lugar de Atención": "Nutriap",
      "Domicilio": "Sarmiento 614 sur.",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 16 a 21 hs Viernes de 15 a 19hs",
      "Teléfono": "2645671182"
    },
    {
      "Apellido": "Olmos",
      "Nombre": "Eliana",
      "Lugar de Atención": "Pilar del Oeste Clínica Especializada",
      "Domicilio": "República del Líbano 2462 (O)",
      "Localidad": "Rawson",
      "Días y horario de atención": "Lunes de 17 a 22hs",
      "Teléfono": "4340319"
    },
    {
      "Apellido": "Ortiz Pizzoglio",
      "Nombre": "Silvina",
      "Lugar de Atención": "MUDAP",
      "Domicilio": "Tucuman 21",
      "Localidad": "capital",
      "Días y horario de atención": "viernes 14:30 a 17:30",
      "Teléfono": "4202111"
    },
    {
      "Apellido": "Pagano",
      "Nombre": "María Martha",
      "Lugar de Atención": "Consalud San Juan S.A.",
      "Domicilio": "Av. Córdoba Nº 187 (o)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes y Viernes de 8:30hs en adelante",
      "Teléfono": "4220881"
    },
    {
      "Apellido": "Peñaloza",
      "Nombre": "Marina",
      "Lugar de Atención": "Centro Medico Mendoza",
      "Domicilio": "Barrio Andacollo 8 Mza A Casa 1",
      "Localidad": "Chimbas",
      "Días y horario de atención": "Martes de 17hs a20hs",
      "Teléfono": "4313547"
    },
    {
      "Apellido": "Pin",
      "Nombre": "Nora",
      "Lugar de Atención": "Clinica Cordoba",
      "Domicilio": "Cordoba 591 Oeste",
      "Localidad": "Capital",
      "Días y horario de atención": "Jue 17 a 20:30 y mar 9 a 12:30",
      "Teléfono": "4322332 / 2644999148"
    },
    {
      "Apellido": "Pugliese",
      "Nombre": "Mariana",
      "Lugar de Atención": "CIMAC",
      "Domicilio": "Rivadavia 574 (e)",
      "Localidad": "Capital",
      "Días y horario de atención": "lunes de 16 a 21hs y miercoles de 8 a 12.30hs",
      "Teléfono": "4293100"
    },
    {
      "Apellido": "Pennice",
      "Nombre": "Evelia Belen",
      "Lugar de Atención": "Centro integral Medico",
      "Domicilio": "Posadas 1346 Oeste",
      "Localidad": "Rawson",
      "Días y horario de atención": "de lun a vier de 9 a 16 Hs",
      "Teléfono": "2644891564"
    },
    {
      "Apellido": "Quintana",
      "Nombre": "Federico",
      "Lugar de Atención": "Clinica Oeste Salud",
      "Domicilio": "25 de Mayo 157(o)",
      "Localidad": "capital",
      "Días y horario de atención": "Miercoles de 13 a 17",
      "Teléfono": "2645848100"
    },
    {
      "Apellido": "Quintero Andrade",
      "Nombre": "Julieta",
      "Lugar de Atención": "Clinica Mattar Splenger",
      "Domicilio": "Catamarca 358 sur",
      "Localidad": "capital",
      "Días y horario de atención": "Martes 17hs a 20hs",
      "Teléfono": "2645185763 /264564128"
    },
    {
      "Apellido": "Quiroga",
      "Nombre": "Carolina Ines",
      "Lugar de Atención": "Centro Medico San Martin",
      "Domicilio": "Av. Libertador 5325 oeste",
      "Localidad": "Rivadavia",
      "Días y horario de atención": "Viernes de 16hs a 20hs",
      "Teléfono": "2646184400"
    },
    {
      "Apellido": "Quiroga Reta",
      "Nombre": "Julieta",
      "Lugar de Atención": "Clínica Valencia",
      "Domicilio": "Av Libertador 4131 oeste",
      "Localidad": "Rivadavia",
      "Días y horario de atención": "Lunes 15 a 19.30hs",
      "Teléfono": "2645607971"
    },
    {
      "Apellido": "Quiroga",
      "Nombre": "Paola",
      "Lugar de Atención": "semebi",
      "Domicilio": "aberastain 162 sur",
      "Localidad": "capital",
      "Días y horario de atención": "viernes de 10.30 a 14 hs",
      "Teléfono": "4214516"
    },
    {
      "Apellido": "Ridao",
      "Nombre": "Natalia",
      "Lugar de Atención": "Clínica Parque Universitario",
      "Domicilio": "Hermógenes Ruiz 1155(S)",
      "Localidad": "Capital",
      "Días y horario de atención": "Miércoles de 16.30 a 21hs",
      "Teléfono": "4231959"
    },
    {
      "Apellido": "Rodríguez",
      "Nombre": "Ana Laura",
      "Lugar de Atención": "Centro Médico de Especialidades",
      "Domicilio": "Boulevard Sarmiento 179 ( O)",
      "Localidad": "Rawson",
      "Días y horario de atención": "Lunes de 9 a 12hs",
      "Teléfono": "4285593"
    },
    {
      "Apellido": "Rodríguez",
      "Nombre": "Paola",
      "Lugar de Atención": "Fundación CenCor",
      "Domicilio": "Laprida 568 este",
      "Localidad": "Capital",
      "Días y horario de atención": "Lunes de 13 a 18 hs",
      "Teléfono": "4226620-4218117"
    },
    {
      "Apellido": "Roduen",
      "Nombre": "M. Belén",
      "Lugar de Atención": "Centro Médico Concepción",
      "Domicilio": "Mendoza 737 Norte",
      "Localidad": "Capital",
      "Días y horario de atención": "Jueves 17hs a 21hs",
      "Teléfono": "4211157"
    },
    {
      "Apellido": "Ripoll Zagarra",
      "Nombre": "Guadalupe",
      "Lugar de Atención": "Centro Medico Sagrado Corazón",
      "Domicilio": "Hermógenes Ruiz 1115 (sur)",
      "Localidad": "Capital",
      "Días y horario de atención": "mar y jueves de 16 a 20.30hs",
      "Teléfono": "264588265"
    },
    {
      "Apellido": "Sierra",
      "Nombre": "Cecilia",
      "Lugar de Atención": "Instituto San Marcos",
      "Domicilio": "Sarmiento 92 (N)",
      "Localidad": "Capital",
      "Días y horario de atención": "Miércolesde14.30a19.30",
      "Teléfono": "4222935"
    },
    {
      "Apellido": "Sancassani",
      "Nombre": "Paola",
      "Lugar de Atención": "Centro Medico Sagrado Corazón",
      "Domicilio": "Hermógenes Ruiz 1115 (sur)",
      "Localidad": "Capital",
      "Días y horario de atención": "Jueves y viernes de 8 a 12hs",
      "Teléfono": "2646613080-4237600"
    },
    {
      "Apellido": "Sánchez",
      "Nombre": "Julieta",
      "Lugar de Atención": "Clínica Patagonia",
      "Domicilio": "Esteban Echeverría 883 -Sur",
      "Localidad": "Capital",
      "Días y horario de atención": "Jueves de 17 a 21hs",
      "Teléfono": "4233486"
    },
    {
      "Apellido": "Suero Godoy",
      "Nombre": "Mayra",
      "Lugar de Atención": "Centro Medico Martín Fierro",
      "Domicilio": "Necochea 1614 (Norte)",
      "Localidad": "Capital",
      "Días y horario de atención": "Lunes de 17h s a 20h s",
      "Teléfono": "4218948"
    },
    {
      "Apellido": "Tay",
      "Nombre": "Julieta Romina",
      "Lugar de Atención": "Centro Medico Jose Dolores",
      "Domicilio": "Jose Dolores 969 Este",
      "Localidad": "Rawson",
      "Días y horario de atención": "Martes de 8.30 a 18hs",
      "Teléfono": "3825561634"
    },
    {
      "Apellido": "Viveros",
      "Nombre": "Graciela",
      "Lugar de Atención": "Centro Médico Éticos",
      "Domicilio": "Ignacio de la Roza 32(O)",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 17 a 21hs",
      "Teléfono": "4232802"
    },
    {
      "Apellido": "Videla",
      "Nombre": "Micaela",
      "Lugar de Atención": "Clínica San Patricio",
      "Domicilio": "Av. Rioja 147 norte",
      "Localidad": "capital",
      "Días y horario de atención": "Mercedes de 17 a 21 hs",
      "Teléfono": "4204409/2644860684"
    },
    {
      "Apellido": "Zeballos",
      "Nombre": "Maria Victoria",
      "Lugar de Atención": "Nutriap",
      "Domicilio": "Sarmiento 614 sur",
      "Localidad": "Capital",
      "Días y horario de atención": "Martes de 7hs a 12hs",
      "Teléfono": "2644832297"
    }
  ];
  const localidades = useMemo(() => {
    const uniqueLocalidades = [...new Set(profesionales.map((p) => p.Localidad))];
    return uniqueLocalidades.sort();
  }, []);
  const filteredProfesionales = useMemo(() => {
    return profesionales.filter((profesional) => {
      const matchesSearch = profesional.Apellido.toLowerCase().includes(searchTerm.toLowerCase()) || profesional.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) || profesional["Lugar de Atención"].toLowerCase().includes(searchTerm.toLowerCase()) || profesional.Domicilio.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocalidad = selectedLocalidad === "" || profesional.Localidad === selectedLocalidad;
      return matchesSearch && matchesLocalidad;
    });
  }, [searchTerm, selectedLocalidad]);
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Profesionales OSP" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Encuentra profesionales nutricionistas que atienden con Obra Social Provincial (OSP) en San Juan" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Buscar por nombre, apellido, lugar de atención...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: "w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            }
          ),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                }
              )
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "md:w-64", children: /* @__PURE__ */ jsxs(
          "select",
          {
            value: selectedLocalidad,
            onChange: (e) => setSelectedLocalidad(e.target.value),
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Todas las localidades" }),
              localidades.map((localidad) => /* @__PURE__ */ jsx("option", { value: localidad, children: localidad }, localidad))
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg p-4 shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-gray-600", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-2 text-orange-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
          "Total: ",
          profesionales.length,
          " profesionales"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4 mr-2 text-orange-500", fill: "currentColor", viewBox: "0 0 20 20", children: [
            /* @__PURE__ */ jsx("path", { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
            /* @__PURE__ */ jsx("path", { d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
          ] }),
          "Localidades: ",
          localidades.length
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-2 text-orange-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" }) }),
          "Mostrando: ",
          filteredProfesionales.length,
          " resultados"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredProfesionales.map((profesional, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-gray-900 mb-1", children: [
              profesional.Apellido,
              ", ",
              profesional.Nombre
            ] }),
            /* @__PURE__ */ jsx("span", { className: "inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full", children: profesional.Localidad })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-1", children: "Lugar de Atención" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: profesional["Lugar de Atención"] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-1", children: "Domicilio" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: profesional.Domicilio })
            ] }),
            profesional["Días y horario de atención"] && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-1", children: "Horarios" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: profesional["Días y horario de atención"] })
            ] }),
            profesional.Teléfono && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-1", children: "Teléfono" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: profesional.Teléfono })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 pt-4 border-t border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            profesional.Teléfono && /* @__PURE__ */ jsx(
              "a",
              {
                href: `tel:${profesional.Teléfono}`,
                className: "flex-1 bg-orange-500 text-white text-center py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm",
                children: "Llamar"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  console.log("Agregar a favoritos:", profesional);
                },
                className: "px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors text-sm",
                children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) })
              }
            )
          ] }) })
        ] })
      },
      index
    )) }),
    filteredProfesionales.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-16 h-16 text-gray-400 mx-auto mb-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "No se encontraron resultados" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Intenta ajustar los filtros de búsqueda" })
    ] })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Asociaci\xF3n Sanjuanina de Nutrici\xF3n", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-96 md:h-[500px] overflow-hidden rounded-2xl mb-16" data-astro-cid-j7pv25f6> <div class="slider-container relative h-full" data-astro-cid-j7pv25f6> <!-- Slide 1 --> <div class="slide absolute inset-0 bg-gradient-to-r from-orange-500/90 to-orange-600/90 flex items-center justify-center" data-astro-cid-j7pv25f6> <div class="text-center text-white z-10" data-astro-cid-j7pv25f6> <div class="mb-8 flex justify-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Logo", $$Logo, { "size": "lg", "variant": "white", "data-astro-cid-j7pv25f6": true })} </div> <h1 class="text-4xl md:text-6xl font-bold mb-4" data-astro-cid-j7pv25f6>
Asociación Sanjuanina de Nutrición
</h1> <p class="text-xl md:text-2xl mb-8" data-astro-cid-j7pv25f6>
Promoviendo la salud y la nutrición en San Juan
</p> <a href="/asociate" class="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" data-astro-cid-j7pv25f6>
Únete a nosotros
</a> </div> <div class="absolute inset-0 bg-black/20" data-astro-cid-j7pv25f6></div> </div> <!-- Slide 2 --> <div class="slide absolute inset-0 bg-gradient-to-r from-orange-400/90 to-orange-500/90 flex items-center justify-center opacity-0" data-astro-cid-j7pv25f6> <div class="text-center text-white z-10" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-6xl font-bold mb-4" data-astro-cid-j7pv25f6>
Beneficios Exclusivos
</h2> <p class="text-xl md:text-2xl mb-8" data-astro-cid-j7pv25f6>
Descubre todos los beneficios para nuestros asociados
</p> <a href="/beneficios" class="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" data-astro-cid-j7pv25f6>
Ver beneficios
</a> </div> <div class="absolute inset-0 bg-black/20" data-astro-cid-j7pv25f6></div> </div> <!-- Slide 3 --> <div class="slide absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-700/90 flex items-center justify-center opacity-0" data-astro-cid-j7pv25f6> <div class="text-center text-white z-10" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-6xl font-bold mb-4" data-astro-cid-j7pv25f6>
Eventos y Capacitaciones
</h2> <p class="text-xl md:text-2xl mb-8" data-astro-cid-j7pv25f6>
Mantente actualizado con nuestros eventos
</p> <a href="/eventos" class="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" data-astro-cid-j7pv25f6>
Ver eventos
</a> </div> <div class="absolute inset-0 bg-black/20" data-astro-cid-j7pv25f6></div> </div> </div> <!-- Controles del slider --> <button class="slider-btn prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-20" data-astro-cid-j7pv25f6> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-j7pv25f6></path> </svg> </button> <button class="slider-btn next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-20" data-astro-cid-j7pv25f6> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </button> <!-- Indicadores --> <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20" data-astro-cid-j7pv25f6> <button class="indicator w-3 h-3 bg-white rounded-full opacity-100" data-astro-cid-j7pv25f6></button> <button class="indicator w-3 h-3 bg-white rounded-full opacity-50" data-astro-cid-j7pv25f6></button> <button class="indicator w-3 h-3 bg-white rounded-full opacity-50" data-astro-cid-j7pv25f6></button> </div> </section>  <section class="mb-16" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <div class="flex justify-center mb-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Logo", $$Logo, { "size": "md", "data-astro-cid-j7pv25f6": true })} </div> <h2 class="text-3xl font-bold" style="color: #ff7b00;" data-astro-cid-j7pv25f6>Acceso Rápido</h2> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-6" data-astro-cid-j7pv25f6> <!-- Tarjeta 1 --> <a href="/conocenos" class="quick-access-card group" data-astro-cid-j7pv25f6> <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4" style="border-left-color: #ff7b00;" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <div class="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors" data-astro-cid-j7pv25f6> <svg class="w-8 h-8" style="color: #ff7b00;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="font-semibold text-lg mb-2" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Conócenos
</h3> <p class="text-sm text-gray-600" data-astro-cid-j7pv25f6>
Descubre nuestra misión y valores
</p> </div> </div> </a> <!-- Tarjeta 2 --> <a href="/asociate" class="quick-access-card group" data-astro-cid-j7pv25f6> <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4" style="border-left-color: #ff7b00;" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <div class="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors" data-astro-cid-j7pv25f6> <svg class="w-8 h-8" style="color: #ff7b00;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="font-semibold text-lg mb-2" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Asóciate
</h3> <p class="text-sm text-gray-600" data-astro-cid-j7pv25f6>Únete a nuestra asociación</p> </div> </div> </a> <!-- Tarjeta 3 --> <a href="/noticias" class="quick-access-card group" data-astro-cid-j7pv25f6> <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4" style="border-left-color: #ff7b00;" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <div class="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors" data-astro-cid-j7pv25f6> <svg class="w-8 h-8" style="color: #ff7b00;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="font-semibold text-lg mb-2" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Noticias
</h3> <p class="text-sm text-gray-600" data-astro-cid-j7pv25f6>Últimas novedades</p> </div> </div> </a> <!-- Tarjeta 4 - Beneficios --> <a href="/beneficios" class="quick-access-card group" data-astro-cid-j7pv25f6> <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4" style="border-left-color: #ff7b00;" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <div class="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors" data-astro-cid-j7pv25f6> <svg class="w-8 h-8" style="color: #ff7b00;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="font-semibold text-lg mb-2" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Beneficios
</h3> <p class="text-sm text-gray-600" data-astro-cid-j7pv25f6>Descuentos exclusivos</p> </div> </div> </a> <!-- Tarjeta 5 --> <a href="/contacto" class="quick-access-card group" data-astro-cid-j7pv25f6> <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4" style="border-left-color: #ff7b00;" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <div class="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors" data-astro-cid-j7pv25f6> <svg class="w-8 h-8" style="color: #ff7b00;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="font-semibold text-lg mb-2" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Contacto
</h3> <p class="text-sm text-gray-600" data-astro-cid-j7pv25f6>Contáctanos</p> </div> </div> </a> </div> </section>  <section class="mb-16" data-astro-cid-j7pv25f6> <div class="container mx-auto px-4" data-astro-cid-j7pv25f6> <div class="text-center mb-8" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold mb-4" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Nuestras Marcas Asociadas
</h2> <p class="text-lg text-gray-600" data-astro-cid-j7pv25f6>
Descuentos exclusivos en las mejores marcas de San Juan
</p> </div> <div class="brands-carousel relative" data-astro-cid-j7pv25f6> <div class="brands-container flex gap-6 overflow-x-auto pb-4 scrollbar-hide" data-astro-cid-j7pv25f6> <!-- TRESM --> <div class="brand-mini-card flex-shrink-0 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center mb-3" data-astro-cid-j7pv25f6> <span class="text-orange-600 font-bold text-sm" data-astro-cid-j7pv25f6>TRESM</span> </div> <p class="text-xs text-gray-600 text-center" data-astro-cid-j7pv25f6>Productos Naturales</p> </div> <!-- Tupeli Gourmet --> <div class="brand-mini-card flex-shrink-0 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center mb-3" data-astro-cid-j7pv25f6> <span class="text-red-600 font-bold text-sm" data-astro-cid-j7pv25f6>Tupeli</span> </div> <p class="text-xs text-gray-600 text-center" data-astro-cid-j7pv25f6>GOURMET</p> </div> <!-- Verde Pistacho --> <div class="brand-mini-card flex-shrink-0 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mb-3" data-astro-cid-j7pv25f6> <span class="text-green-700 font-bold text-xs" data-astro-cid-j7pv25f6>VERDE PISTACHO</span> </div> <p class="text-xs text-gray-600 text-center" data-astro-cid-j7pv25f6>TIENDA NATURAL</p> </div> <!-- Victoria Igualada --> <div class="brand-mini-card flex-shrink-0 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center mb-3" data-astro-cid-j7pv25f6> <span class="text-red-700 font-bold text-xs" data-astro-cid-j7pv25f6>VICTORIA</span> </div> <p class="text-xs text-gray-600 text-center" data-astro-cid-j7pv25f6>IGUALADA</p> </div> <!-- Papelería Librería --> <div class="brand-mini-card flex-shrink-0 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-3" data-astro-cid-j7pv25f6> <span class="text-blue-700 font-bold text-lg" data-astro-cid-j7pv25f6>Z</span> </div> <p class="text-xs text-gray-600 text-center" data-astro-cid-j7pv25f6>Papelería Librería</p> </div> <!-- Activa Mente --> <div class="brand-mini-card flex-shrink-0 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center mb-3" data-astro-cid-j7pv25f6> <span class="text-red-700 font-bold text-xs" data-astro-cid-j7pv25f6>ACTIVA</span> </div> <p class="text-xs text-gray-600 text-center" data-astro-cid-j7pv25f6>MENTE</p> </div> <!-- Un Toque Canela --> <div class="brand-mini-card flex-shrink-0 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center mb-3" data-astro-cid-j7pv25f6> <span class="text-orange-700 font-bold text-xs" data-astro-cid-j7pv25f6>Un Toque</span> </div> <p class="text-xs text-gray-600 text-center" data-astro-cid-j7pv25f6>Canela</p> </div> <!-- Natural Life --> <div class="brand-mini-card flex-shrink-0 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mb-3" data-astro-cid-j7pv25f6> <span class="text-green-700 font-bold text-xs" data-astro-cid-j7pv25f6>NATURAL</span> </div> <p class="text-xs text-gray-600 text-center" data-astro-cid-j7pv25f6>LIFE</p> </div> </div> <div class="text-center mt-6" data-astro-cid-j7pv25f6> <a href="/beneficios" class="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors" data-astro-cid-j7pv25f6>
Ver todos los beneficios
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </div> </section>  <section class="mb-16" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold text-center mb-12" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Nuestros Servicios
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-astro-cid-j7pv25f6> <div class="w-16 h-16 mb-6 bg-orange-100 rounded-2xl flex items-center justify-center" data-astro-cid-j7pv25f6> <svg class="w-8 h-8" style="color: #ff7b00;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="text-xl font-bold mb-4" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Capacitación Profesional
</h3> <p class="text-gray-600 mb-6" data-astro-cid-j7pv25f6>
Ofrecemos cursos, talleres y seminarios para mantener actualizados a
          nuestros profesionales en las últimas tendencias de nutrición.
</p> <a href="/capacitacion" class="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors" data-astro-cid-j7pv25f6>
Saber más
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> </div> <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-astro-cid-j7pv25f6> <div class="w-16 h-16 mb-6 bg-orange-100 rounded-2xl flex items-center justify-center" data-astro-cid-j7pv25f6> <svg class="w-8 h-8" style="color: #ff7b00;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="text-xl font-bold mb-4" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Red de Profesionales
</h3> <p class="text-gray-600 mb-6" data-astro-cid-j7pv25f6>
Conectamos profesionales de la nutrición para fomentar la colaboración
          y el intercambio de conocimientos.
</p> <a href="/red-profesionales" class="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors" data-astro-cid-j7pv25f6>
Saber más
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> </div> <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-astro-cid-j7pv25f6> <div class="w-16 h-16 mb-6 bg-orange-100 rounded-2xl flex items-center justify-center" data-astro-cid-j7pv25f6> <svg class="w-8 h-8" style="color: #ff7b00;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="text-xl font-bold mb-4" style="color: #ff7b00;" data-astro-cid-j7pv25f6>
Recursos Educativos
</h3> <p class="text-gray-600 mb-6" data-astro-cid-j7pv25f6>
Acceso a biblioteca digital, publicaciones científicas y recursos para
          el desarrollo profesional.
</p> <a href="/recursos" class="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors" data-astro-cid-j7pv25f6>
Saber más
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </section>  <section class="mb-16" data-astro-cid-j7pv25f6> <div class="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 text-white" data-astro-cid-j7pv25f6> <div class="text-center mb-8" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold mb-4" data-astro-cid-j7pv25f6>⚠️ Intrusismo Nutricional</h2> <p class="text-xl opacity-90" data-astro-cid-j7pv25f6>
Protegiendo la profesión y la salud de la población
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-j7pv25f6> <!-- Información sobre Intrusismo --> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold mb-4" data-astro-cid-j7pv25f6>¿Qué es el Intrusismo?</h3> <p class="text-sm leading-relaxed mb-4" data-astro-cid-j7pv25f6>
El intrusismo nutricional ocurre cuando personas sin la formación
            profesional adecuada ofrecen servicios de nutrición, poniendo en
            riesgo la salud de la población.
</p> <ul class="text-sm space-y-2" data-astro-cid-j7pv25f6> <li class="flex items-start" data-astro-cid-j7pv25f6> <span class="text-red-200 mr-2" data-astro-cid-j7pv25f6>•</span>
Personas sin título habilitante
</li> <li class="flex items-start" data-astro-cid-j7pv25f6> <span class="text-red-200 mr-2" data-astro-cid-j7pv25f6>•</span>
Recomendaciones sin evidencia científica
</li> <li class="flex items-start" data-astro-cid-j7pv25f6> <span class="text-red-200 mr-2" data-astro-cid-j7pv25f6>•</span>
Tratamientos no autorizados
</li> </ul> </div> <!-- Cómo Denunciar --> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold mb-4" data-astro-cid-j7pv25f6>¿Cómo Denunciar?</h3> <p class="text-sm leading-relaxed mb-4" data-astro-cid-j7pv25f6>
Si conoces casos de intrusismo nutricional, es importante
            denunciarlos para proteger la salud pública y la profesión.
</p> <div class="space-y-3" data-astro-cid-j7pv25f6> <div class="flex items-center" data-astro-cid-j7pv25f6> <div class="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center mr-3" data-astro-cid-j7pv25f6> <span class="text-white text-sm font-bold" data-astro-cid-j7pv25f6>1</span> </div> <span class="text-sm" data-astro-cid-j7pv25f6>Recopila evidencia del caso</span> </div> <div class="flex items-center" data-astro-cid-j7pv25f6> <div class="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center mr-3" data-astro-cid-j7pv25f6> <span class="text-white text-sm font-bold" data-astro-cid-j7pv25f6>2</span> </div> <span class="text-sm" data-astro-cid-j7pv25f6>Contacta con nuestro equipo legal</span> </div> <div class="flex items-center" data-astro-cid-j7pv25f6> <div class="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center mr-3" data-astro-cid-j7pv25f6> <span class="text-white text-sm font-bold" data-astro-cid-j7pv25f6>3</span> </div> <span class="text-sm" data-astro-cid-j7pv25f6>Presenta la denuncia formal</span> </div> </div> </div> </div> <!-- Call to Action --> <div class="text-center mt-8" data-astro-cid-j7pv25f6> <a href="/contacto" class="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" data-astro-cid-j7pv25f6> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" data-astro-cid-j7pv25f6></path> </svg>
Denunciar Intrusismo
</a> </div> </div> </section>  <section class="mb-16" data-astro-cid-j7pv25f6> <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center text-white" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold mb-4" data-astro-cid-j7pv25f6>Nutricionistas Web</h2> <p class="text-xl mb-8 opacity-90" data-astro-cid-j7pv25f6>
Descubre nuestra plataforma especializada para profesionales de la
        nutrición
</p> <a href="https://asn.tandemdigital.net/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" data-astro-cid-j7pv25f6> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-j7pv25f6></path> </svg>
Visitar Nutricionistas Web
</a> </div> </section>  ${renderComponent($$result2, "OspProfesionales", OspProfesionales, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/laragon/www/Asociacion/Front_asn/src/components/OspProfesionales.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })}  <section class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold mb-4" data-astro-cid-j7pv25f6>
¿Listo para unirte a nuestra asociación?
</h2> <p class="text-xl mb-8 opacity-90" data-astro-cid-j7pv25f6>
Forma parte de la comunidad de profesionales de la nutrición más
      importante de San Juan
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-j7pv25f6> <a href="/asociate" class="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" data-astro-cid-j7pv25f6>
Asociarse ahora
</a> <a href="/contacto" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors" data-astro-cid-j7pv25f6>
Contactar
</a> </div> </section>  ${renderScript($$result2, "C:/laragon/www/Asociacion/Front_asn/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/index.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
