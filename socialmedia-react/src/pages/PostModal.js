import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PostModal = () => {
  return (
    <div
      className="modal fade"
      id="postAddModal"
      tabIndex="-1"
      aria-labelledby="postAddModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdQArnvrchduwBUmj2T3rjla4bX5kQTx1TYd7IlEgUg&s"
              className="profile-avatar"
            />
            <h4 className="modal-title fs-5 mx-4" id="postAddModalModalLabel">
              Alper ALANYALI
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <input type="file" name="imageUrl" className="form-control mb-4" />
              <CKEditor
                     
                editor={ClassicEditor}
                data="<p>What do you want to talk about</p>"
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
