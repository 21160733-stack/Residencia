import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ headerVariant = "simple", children, className = "" }) => {
  return (
    <div className="page">
      <Header variant={headerVariant} />

      <main className={`page-main ${className}`}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;