import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";

const ModalChangeSuccess = () => {
  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalMessageSuccessLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Message!</h5>
              <CloseA />
            </div>
            <div className="modal-body">
              <h6 className="p-4 text-center">
                Password changed successfully
              </h6>
            </div>

            <div className="modal-footer">
              <CloseB />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalChangeSuccess;
