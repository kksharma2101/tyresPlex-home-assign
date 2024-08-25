import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="p-1 lg:mx-4">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}
