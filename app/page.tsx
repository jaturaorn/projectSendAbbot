
import Card from "./Components/Card";
import Search from "./Components/Search";
import MainLayout from "./MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="heading">Blog Management Dashboard</h1>
      <Search />
      <Card />
      </MainLayout>
  );
}
