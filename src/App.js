// packages
import { useState } from 'react';

// css
import './App.css';

import Modal from './components/Modal/Modal';
import ModalContents from './components/ModalContents/ModalContents';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='App'>
      <h1>Main Page Content</h1>
      <hr />
      <button onClick={() => setShowModal(true)}>show modal</button>
      <hr />

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalContents setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}

export default App;
