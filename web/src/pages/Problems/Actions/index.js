import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdMoreHoriz, MdRemoveRedEye, MdDeleteForever } from "react-icons/md";
import Modal from "react-modal";
import { ActionList, ModalContainer, TextLabel } from "./styles";
import { deleteRequest } from "~/store/modules/problems/actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "450px",
    height: "353px",
  },
};

export default function Actions(props) {
  const dispatch = useDispatch();
  const [activeAction, setActiveAction] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { problem } = props;

  function handleShowAction() {
    return setActiveAction(!activeAction);
  }

  function deleteProblem() {
    dispatch(deleteRequest(problem.delivery_id));
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <MdMoreHoriz size={20} color="#C6C6C6" onClick={handleShowAction} />
      <ActionList visible={activeAction}>
        <ul>
          <li>
            <button type="button" onClick={openModal}>
              <MdRemoveRedEye color="#8E5BE8" size={15} /> Visualizar
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Deseja realmente cancelar a encomenda ?")) {
                  deleteProblem();
                }
              }}
            >
              <MdDeleteForever color="#DE3B3B" size={15} /> Cancelar encomenda
            </button>
          </li>
        </ul>
      </ActionList>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Problems Modal"
        ariaHideApp={false}
      >
        <ModalContainer>
          <TextLabel>VISUALIZAR PROBLEMAS</TextLabel>
          <span>{problem.description}</span>
        </ModalContainer>
      </Modal>
    </>
  );
}
