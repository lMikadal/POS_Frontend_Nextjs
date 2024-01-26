import { ModalFormProp } from "@/types";
import { eventNames } from "process";

const ModalForm = ({
  nameButton,
  FormHeader,
  inputForm,
  funcHandleInput,
  funcOnSubmit,
}: ModalFormProp) => {
  return (
    <>
      <button
        className="btn btn-outline btn-sm"
        onClick={() => {
          if (document) {
            (
              document.getElementById("my_modal") as HTMLFormElement
            ).showModal();
          }
        }}
      >
        {nameButton}
      </button>
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{FormHeader}</h3>
          {inputForm.map((input, idx) => (
            <div key={idx}>
              <div className="label">
                <span className="label-text">{input.label}</span>
              </div>
              <input
                type={input.type}
                placeholder={input.label}
                name={input.name}
                onChange={(e) => funcHandleInput(e)}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
          ))}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm" onClick={funcOnSubmit}>
                บันทึก
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
