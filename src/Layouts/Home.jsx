import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import LeftSidebar from "../Components/LayoutComponents/LeftSidebar";
import NewsLayout from "../Components/LayoutComponents/NewsLayout";
import RightSidebar from "../Components/LayoutComponents/RightSidebar";
import Navbar from "../Components/Navbar/Navbar";



const Home = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto my-4">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid grid-cols-12">
                <aside className="col-span-3"><LeftSidebar></LeftSidebar></aside>
                <section className="col-span-6"><NewsLayout></NewsLayout></section>
                <aside className="col-span-3"><RightSidebar></RightSidebar></aside>
            </main>
        </div>
    );
};

export default Home;