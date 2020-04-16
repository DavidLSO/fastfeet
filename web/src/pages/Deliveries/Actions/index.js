import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from "react-icons/md";
import Modal from "react-modal";
import { ActionList, ModalContainer, TextLabel } from "./styles";
import { deleteRequest } from "~/store/modules/deliverie/actions";

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

  const { deliverie } = props;
  function handleShowAction() {
    return setActiveAction(!activeAction);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function deleteDeliverie() {
    try {
      dispatch(deleteRequest(deliverie.id));
      toast.success("Encomenda excluida com sucesso!");
    } catch (error) {
      toast.error("Não foi possível excluir a encomenda!");
    }
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
            <Link to={{ pathname: "/delivery/edit", state: deliverie }}>
              <MdModeEdit color="#4D85EE" size={15} /> Editar
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Deseja realmente remover a encomenda?")) {
                  deleteDeliverie();
                }
              }}
            >
              <MdDeleteForever color="#DE3B3B" size={15} /> Excluir
            </button>
          </li>
        </ul>
      </ActionList>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Deliverie Modal"
        ariaHideApp={false}
      >
        <ModalContainer>
          <TextLabel>Informações da encomenda</TextLabel>
          <span>{`${deliverie.recipient.street}, ${deliverie.recipient.number} ${deliverie.recipient.city} - ${deliverie.recipient.state} ${deliverie.recipient.zip_code}`}</span>
          <hr />
          <TextLabel>Datas</TextLabel>
          <TextLabel>
            Retirada: <span>{`${deliverie.start_date || ""}`}</span>
          </TextLabel>

          <TextLabel>
            Entrega: <span>{`${deliverie.end_date || ""}`}</span>
          </TextLabel>
          <hr />
          <TextLabel>Assinatura do destinatário</TextLabel>
          <img
            src={deliverie.signature ? deliverie.signature.url : ""}
            alt=""
          />
        </ModalContainer>
      </Modal>
    </>
  );
}
