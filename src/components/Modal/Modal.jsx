import Modal from 'react-modal';
import css from './Modal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ modalClose, modalOpen, image }) => {
    return (
        <Modal
            onRequestClose={modalClose}
            isOpen={modalOpen}
            contentLabel='Image Modal'
            className={css.modal}
            overlayClassName={css.overlay}
            shouldCloseOnOverlayClick={true}
        >
            <div className={css.modalContent}>
                <img src={image} alt="" />
            </div>
        </Modal>
    )
}
export default ImageModal; 