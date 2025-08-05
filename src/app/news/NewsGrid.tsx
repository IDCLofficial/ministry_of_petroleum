import NewsCard from "./NewsCard";
import newsList from "./newsList";

export default function NewsGrid() {

  if(newsList.length === 0) {
    return(
      <div className="w-full flex items center justify-center">
        <p>There is currently no news to See. Come back later</p>
      </div>
    )
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {newsList.map((item, idx) => (
        <NewsCard news={item} key={idx} />
      ))}
    </div>
  );
} 