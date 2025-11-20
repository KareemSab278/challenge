import { useState, useEffect } from "react";
import { ModalComponent } from "../components/Modal";
import { ColorModeToggle } from "../components/ColorModeToggle";
import { NavigationBar } from "../components/NavigationBar";

export { HomePage };

function HomePage() {
  const [modalOpened, setModalOpened] = useState(false);

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

    </section>
  );
}

