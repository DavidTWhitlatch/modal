import './ModalContents.css';

export default function ModalContents({ setShowModal }) {
  return (
    <div>
      <h3>Model Content</h3>
      <p>A form can go here</p>
      <div className='button-row'>
        <button onClick={() => setShowModal(false)}>Submit</button>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
}
