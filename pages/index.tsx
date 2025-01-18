import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Ola mundo DK
            </h1>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
