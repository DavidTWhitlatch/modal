// css
import './Modal.css';

export default function Modal({ children, showModal, setShowModal }) {
  return (
    <div
      className='modal-container'
      style={{ display: showModal ? 'flex' : 'none' }}
      onClick={() => setShowModal(false)}
    >
      <div className='modal-card' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
