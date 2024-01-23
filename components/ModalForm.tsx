import { ModalFormProp } from "@/types";

const ModalForm = ({ nameButton, FormHeader, inputForm }: ModalFormProp) => {
  return (
    <>
      <button
        className="btn btn-outline btn-sm"
        onClick={() => {
          if (document) {
            (
              document.getElementById("my_modal_1") as HTMLFormElement
            ).showModal();
          }
        }}
      >
        {nameButton}
      </button>
      <dialog id="my_modal_1" className="modal">
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
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
          ))}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm">บันทึก</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
