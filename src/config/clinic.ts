export const clinic = {
  name: "Suprema Odontologia",
  phone: {
    display: "(64) 99333-1774",
    international: "+5564993331774",
  },
  email: "contato@supremaodontologia.com.br",
  address: {
    street: "Rua Nizo Jaime de Gusmão, 1086",
    district: "Setor Central",
    city: "Rio Verde",
    state: "GO",
    mapsUrl: "https://maps.app.goo.gl/FoBCAtnTepuC2nE57",
  },
  hours: [
    { days: "Segunda a sexta", opens: "08:00", closes: "18:00" },
    { days: "Sábado", opens: "08:00", closes: "12:00" },
  ],
  history: {
    practicingSince: 2002,
    inRioVerdeSince: 2015,
    founders: ["Dr. André Luiz de Paula Machado", "Dra. Denise Paloschi"],
  },
  team: {
    dentists: 7,
    staffAtLeast: 20,
  },
  whatsappMessage: "Olá! Vim pelo site e gostaria de agendar uma consulta.",
  social: {
    instagram: "https://www.instagram.com/supremaodontologiarv",
    facebook: "https://www.facebook.com/supremaodontologiarioverde",
    youtube: "https://www.youtube.com/@supremaodontologia2790/",
  },
} as const;
