type event = {
  slug: string,
  date: string,
  location: string,
  title: string,
  description: string,
  img: string,
  time: string,
  organizer: string,
  phone: string,
  address: string,
  speakers: {
    name: string,
    img: string,
    role: string
  }[]
}

const imgUrl = "/images/events/"

export const events: event[] = [
  {
    slug: "anoh-gas-commissioning",
    date: "2024-05-15",
    location: "Ohaji-Egbema / ANOH Gas Processing Plant, Imo State",
    title: "Commissioning of the Assa North–Ohaji South (ANOH) Gas Processing Plant",
    description: "Official commissioning ceremony of the ANOH gas processing plant — a major gas-to-power and LPG project in Imo State involving Seplat and federal partners. Attended by national and state leaders and industry stakeholders.",
    img: imgUrl + "anoh-commissioning-1.jpg",
    time: "10:00",
    organizer: "ANOH Gas Processing Company (AGPC) / Federal & State partners",
    phone: "",
    address: "Ohaji-Egbema, Imo State",
    speakers: [
      { name: "President Bola Ahmed Tinubu", img: "/images/president.jpg", role: "Guest of Honour (commissioning)" },
      { name: "Representatives from Seplat Energy / AGPC", img: "/images/events/anoh-commissioning-3.jpg", role: "Operator / Host" }
    ]
  },
  {
    slug: "seplat-eye-can-see-im-o-2025",
    date: "2025-04-26",
    location: "Full Moon Hotel / Owerri, Imo State",
    title: "Seplat Energy JV — 'Eye Can See' Community Eye-care Programme (Opening Ceremony)",
    description: "Opening ceremony for Seplat Energy's community eye-care outreach in Imo State. Programme offered free eye care services and surgeries; the Imo State Commissioner for Petroleum & Gas Resources participated and praised the partnership.",
    img: imgUrl + "eye-4.jpg",
    time: "09:00",
    organizer: "Seplat Energy (joint venture) with Imo State Ministry of Petroleum & Natural Gas Development",
    phone: "",
    address: "Full Moon Hotel, Owerri (venue reported in coverage)",
    speakers: [
      { name: "Emeka Mgbudem", img: "/images/commisioner.jpg", role: "Commissioner, Imo Ministry of Petroleum & Gas Resources" },
      { name: "Seplat / NNPCL representatives", img: "/images/events/eye-5.jpg", role: "Programme organisers" }
    ]
  },
  {
    slug: "waltersmith-visit-by-imo-commissioner",
    date: "2024-05-20",
    location: "Waltersmith Petroleum & Refining facilities, Ohaji-Egbema, Imo State",
    title: "Visit to Waltersmith Petroleum & Refining Facilities",
    description: "Official visit by the Imo State Commissioner for Petroleum & Gas Resources to Waltersmith facilities. Visit highlighted government interest in leveraging local gas resources to stimulate industry and power local economy.",
    img: imgUrl + "waltersmith-visit.jpg",
    time: "11:00",
    organizer: "Imo State Ministry of Petroleum & Gas Resources (visit)",
    phone: "",
    address: "Waltersmith facilities, Ohaji-Egbema",
    speakers: [
      { name: "Imo State Commissioner for Petroleum & Gas Resources", img: "/images/commisioner.jpg", role: "Lead delega tion" }
    ]
  },
  {
    slug: "anoh-operations-update-2025",
    date: "2025-06-12",
    location: "ANOH / Imo State (project-wide)",
    title: "ANOH Gas Plant: start / operations update (industry reporting)",
    description: "Industry reporting and updates that the ANOH gas processing plant was set to start operations soon, with news coverage describing its expected contributions to gas-to-power and local economic development.",
    img: imgUrl + "anoh-plant.jpg",
    time: "TBD",
    organizer: "ANOH Gas Processing Company / Operators (reported by energy press)",
    phone: "",
    address: "ANOH site, Imo State",
    speakers: [
      { name: "ANOH / Seplat representatives", img: "", role: "Project operators (reported)" }
    ]
  }
];


export default events; 