import { useState, useEffect } from "react";
import { ModalComponent } from "../components/Modal";
import { ColorModeToggle } from "../components/ColorModeToggle";
import { NavigationBar } from "../components/NavigationBar";
import { ItemCard } from "../components/ItemCard";
import { getAllAnime } from "../logic/logic";

export { HomePage };



function HomePage() {
  const [modalOpened, setModalOpened] = useState(false);
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const data = await getAllAnime();
        console.log("Fetched anime data:", data);
        setAnimeData(data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnime();
  }, []);

  return (
    <section>
    
      
      <ModalComponent
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="My Modal"
        modalWidth="400px"
        modalHeight="300px"
      >
        <p>This is the content of the modal.</p>
      </ModalComponent>
      <button onClick={() => setModalOpened(true)}>Open Modal</button>



      {animeData.map((data) => (
        <ItemCard key={data?.id} data={data} />
      ))}


    </section>
  );
}

