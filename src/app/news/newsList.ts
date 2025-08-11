type news = {
  title: string,
  date: string,
  img: string,
  badge: string,
  desc: string
}

const imgSrc = "/images/news/"

const newsList: news[] = [
  {
    title: "Gas Deposit Rumor in Imo: Commissioner Reacts",
    date: "2024-10-17",
    img: imgSrc + "news1.png",  // No direct image in the article
    badge: "Statement",
    desc: "Commissioner Emeka Mgbudem clarifies that a 5 mscf Mother Station in Assa will be operational within 10 months and debunks misleading claims about a Nigeria-Europe gas pipeline." 
  },
  {
    title: "Oilserv Inaugurates Assa Gas Processing Plant",
    date: "2024-05-17",
    img: imgSrc + "news2.jpg",
    badge: "Project Launch",
    desc: "Oilserv Engineering Limited inaugurated the Assa gas process treatment plant in Ohaji-Egbema, highlighting its role in driving Nigeria's clean energy transition."
  },
  {
    title: "Tinubu Commissions Gas Projects in Imo",
    date: "2024-05-15",
    img: imgSrc + "news3.jpg",
    badge: "Inauguration",
    desc: "President Tinubu virtually inaugurated the ANOH Gas Processing Plant and the ANOH-OB3 CTMS gas pipeline in Imo State, adding critical gas infrastructure to boost domestic supply."
  }
];


export default newsList; 