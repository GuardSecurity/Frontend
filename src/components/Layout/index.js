import Footer from "../Footer/Footer";
import Header from "../Header";

export default function containerLayout(children) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
