import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdMoreHoriz, MdModeEdit, MdDeleteForever } from "react-icons/md";
import { ActionList } from "./styles";
import { deleteRequest } from "~/store/modules/deliveryman/actions";

export default function Actions(props) {
  const dispatch = useDispatch();
  const [activeAction, setActiveAction] = useState(false);
  const { deliveryman } = props;

  function handleShowAction() {
    return setActiveAction(!activeAction);
  }

  function deleteDeliveryman() {
    dispatch(deleteRequest(deliveryman.id));
  }

  return (
    <>
      <MdMoreHoriz size={20} color="#C6C6C6" onClick={handleShowAction} />
      <ActionList visible={activeAction}>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/deliveryman/edit",
                state: deliveryman,
              }}
            >
              <MdModeEdit color="#4D85EE" size={15} /> Editar
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Deseja realmente remover o entregador ?")) {
                  deleteDeliveryman();
                }
              }}
            >
              <MdDeleteForever color="#DE3B3B" size={15} /> Excluir
            </button>
          </li>
        </ul>
      </ActionList>
    </>
  );
}
