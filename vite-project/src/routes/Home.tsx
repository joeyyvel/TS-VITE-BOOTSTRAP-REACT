import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero
        cName="hero"
        heroImage="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Travel and Learn"
        text="Don't be the same. BE BETTER!"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </div>
  );
};

export default Home;
