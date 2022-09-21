import ReactDOM from 'react-dom';
import { ModalWrapper, Overlay } from './styles';

export default function Modal() {
  return ReactDOM.createPortal(
    <Overlay>
      <ModalWrapper>
        <h1>
          Do you want to
          <span> delete </span>
          this location?
        </h1>
        <p>
          This action
          <span> can not </span>
          be undone!
        </p>

        <div className="user-actions">
          <button type="button">Cancel</button>
          <button type="button">Delete</button>
        </div>
      </ModalWrapper>
    </Overlay>,
    document.getElementById('modal'),
  );
}
