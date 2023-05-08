import React from "react";
import BodySearch from "./BodySearch/BodySearch";
import ShowMore from "./Buttons/ShowMore";
import Close from "./Buttons/Close";
import { Card } from "@mui/material";

const SearchModal = ({
  users,
  setModalSearchUsers,
  text,
  setText,
  setDiscoverSearchInput,
}) => {
  return (
    <>
      <div className="modalSearchUsersLocation">
        <div className="modal-header modalSearchUsersHeader">
          <ShowMore text={text} />
          <Close
            setText={setText}
            setModalSearchUsers={setModalSearchUsers}
            setDiscoverSearchInput={setDiscoverSearchInput}
          />
        </div>
        <Card>

        {users.map((item, index) => {
          return <BodySearch key={index} item={item} />;
        })}
        </Card>
      </div>
    </>
  );
};

export default SearchModal;
