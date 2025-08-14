import React, { useState, useMemo } from 'react';

interface ProfesionalOSP {
  Apellido: string;
  Nombre: string;
  "Lugar de Atención": string;
  Domicilio: string;
  Localidad: string;
  "Días y horario de atención": string;
  Teléfono: string;
}

const OspProfesionales: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocalidad, setSelectedLocalidad] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Datos de profesionales OSP (mantener los datos existentes)
  const profesionales: ProfesionalOSP[] = [
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

  // Obtener localidades únicas
  const localidades = useMemo(() => {
    const uniqueLocalidades = [...new Set(profesionales.map(p => p.Localidad))];
    return uniqueLocalidades.sort();
  }, []);

  // Filtrar profesionales
  const filteredProfesionales = useMemo(() => {
    return profesionales.filter(profesional => {
      const matchesSearch = 
        profesional.Apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profesional.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profesional["Lugar de Atención"].toLowerCase().includes(searchTerm.toLowerCase()) ||
        profesional.Domicilio.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocalidad = selectedLocalidad === '' || profesional.Localidad === selectedLocalidad;
      
      return matchesSearch && matchesLocalidad;
    });
  }, [searchTerm, selectedLocalidad]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Profesionales OSP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Encuentra nutricionistas certificados que atienden con Obra Social Provincial (OSP) en San Juan
          </p>
        </div>

        {/* Filtros mejorados */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Búsqueda */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar profesional
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nombre, apellido, lugar de atención..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-200 text-lg"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Filtro por localidad */}
              <div className="lg:w-80">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filtrar por localidad
                </label>
                <select
                  value={selectedLocalidad}
                  onChange={(e) => setSelectedLocalidad(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-200 text-lg"
                >
                  <option value="">Todas las localidades</option>
                  {localidades.map((localidad) => (
                    <option key={localidad} value={localidad}>
                      {localidad}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Estadísticas mejoradas */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center p-4 bg-orange-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{profesionales.length}</div>
                      <div className="text-sm text-gray-600">Profesionales</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{localidades.length}</div>
                      <div className="text-sm text-gray-600">Localidades</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{filteredProfesionales.length}</div>
                      <div className="text-sm text-gray-600">Resultados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de profesionales mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProfesionales.map((profesional, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Header de la tarjeta */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {profesional.Apellido}, {profesional.Nombre}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {profesional.Localidad}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Información del profesional */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Lugar de Atención</h4>
                      <p className="text-gray-600">{profesional["Lugar de Atención"]}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Domicilio</h4>
                      <p className="text-gray-600">{profesional.Domicilio}</p>
                    </div>
                  </div>

                  {profesional["Días y horario de atención"] && (
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">Horarios</h4>
                        <p className="text-gray-600">{profesional["Días y horario de atención"]}</p>
                      </div>
                    </div>
                  )}

                  {profesional.Teléfono && (
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                        <p className="text-gray-600">{profesional.Teléfono}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Botones de acción mejorados */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    {profesional.Teléfono && (
                      <a
                        href={`tel:${profesional.Teléfono}`}
                        className="flex-1 bg-orange-500 text-white text-center py-3 px-6 rounded-xl hover:bg-orange-600 transition-all duration-200 font-semibold flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Llamar
                      </a>
                    )}
                    <button
                      onClick={() => {
                        console.log('Agregar a favoritos:', profesional);
                      }}
                      className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-50 transition-all duration-200 font-semibold flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Favorito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay resultados mejorado */}
        {filteredProfesionales.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No se encontraron resultados</h3>
            <p className="text-gray-600 text-lg mb-8">Intenta ajustar los filtros de búsqueda o contacta con nosotros</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLocalidad('');
              }}
              className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors font-semibold"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OspProfesionales; 