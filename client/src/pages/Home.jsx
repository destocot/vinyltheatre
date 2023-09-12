import RecentlyAdded from "../components/RecentlyAdded";
import SearchUser from "../components/SearchUser";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <SearchUser />
      <RecentlyAdded />
    </div>
  );
}
