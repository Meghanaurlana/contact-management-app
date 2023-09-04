import { Button } from "@mui/material";
import React, { FC, useState } from "react";
import NewContactScreen from "./NewContactScreen";
import { connect } from "react-redux";
import EditContactScreen from "./EditContactScreen";
import { UpdateContact } from "../State/actions/contactActions";

interface AllContactsProps {
  contacts: any;
  actions: any;
}
const AllContactsScreen: FC<AllContactsProps> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editNumber, setEditNumber] = useState("");
  const [editName, setEditName] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const closeModalHandler = (prev: boolean) => {
    setShowModal(!prev);
  };
  const closeEditModalHandler = (prev: boolean) => {
    setEditModal(!prev);
    setEditName("");
    setEditNumber("");
  };

  const editContact = (id: any, name: any, number: any, status: any) => {
    setEditName(name);
    setEditNumber(number);
    setEditStatus(status);
    setEditModal(true);
  };
  const updateContactHandler = (
    id: any,
    name: any,
    number: any,
    status: any
  ) => {
    props.actions.updateContact({ id, name, number, status });
    setEditModal(true);
    setEditName("");
    setEditNumber("");
  };
  return (
    <div className="w-full">
      <div className="grid justify-items-center m-10">
        <button
          className="rounded-full p-2 text-2xl bg-green-200"
          onClick={() => setShowModal(true)}
        >
          {" "}
          Add New Contact{" "}
        </button>

        <NewContactScreen
          showModal={showModal}
          closeModal={closeModalHandler}
        />
      </div>
      <div className=" w-3/4 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {props.contacts.map((item: any) => (
          <div
            className="rounded p-4 bg-blue-200 grid justify-items-center"
            key={item.id}
          >
            <div>
              <div>Name: {item.name}</div>
              <div>Number: {item.number}</div>
              <div>Status: {item.status}</div>
            </div>
            <div className="justify-self-auto ">
              <button
                className="rounded p-2 bg-violet-500 text-black"
                onClick={() =>
                  editContact(item.id, item.name, item.number, item.status)
                }
              >
                Edit
              </button>
              <button className="rounded p-2 bg-red-500 text-white ms-5">
                Delete
              </button>
            </div>
            <EditContactScreen
              updateContact={updateContactHandler}
              showModal={editModal}
              closeModal={closeEditModalHandler}
              id={item.id}
              name={editName}
              number={editNumber}
              status={editStatus}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    contacts: state.contacts.contacts,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  actions: {
    updateContact: (payload: any) => {
      dispatch(UpdateContact(payload));
    },
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AllContactsScreen);
