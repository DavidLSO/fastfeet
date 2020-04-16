import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMoreHoriz, MdModeEdit } from "react-icons/md";
import { ActionList } from "./styles";

export default function Actions(props) {
  const [activeAction, setActiveAction] = useState(false);
  const { recipient } = props;

  function handleShowAction() {
    return setActiveAction(!activeAction);
  }

  return (
    <>
      <MdMoreHoriz size={20} color="#C6C6C6" onClick={handleShowAction} />
      <ActionList visible={activeAction}>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/recipient/edit",
                state: recipient,
              }}
            >
              <MdModeEdit color="#4D85EE" size={15} /> Editar
            </Link>
          </li>
        </ul>
      </ActionList>
    </>
  );
}
