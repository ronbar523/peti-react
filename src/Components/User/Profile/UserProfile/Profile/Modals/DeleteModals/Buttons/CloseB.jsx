import { Button } from "@mui/material";

const CloseB = ({ setModalUserDeleted }) => {
  const closeModal = () => {
    window.location = "/";
    setModalUserDeleted(false);
    document.body.style.overflow = "visible";
  };
  return (
    <Button
      variant="outlined"
      sx={{
        float: "right",
        marginRight: "5px",
        marginTop: "7px",
        marginBottom: "9px",
        textTransform: "unset",
      }}
      onClick={() => closeModal()}
    >
      close
    </Button>
  );
};

export default CloseB;
