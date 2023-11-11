import Footer from "../Footer/Footer";
import Header from "../Header";

export default function containerLayout(children) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
