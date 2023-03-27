import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import requestApi from '../commons/services/api-service'
import { useState } from "react";
const PostModal = () => {
  const [imageUrl,setImageUrl] = useState();
  const [content,setContent] = useState('');
  
  const addPost = (e)=>{
    debugger;
      e.preventDefault();
      let formData = new FormData();
      formData.append("imageUrl",imageUrl);
      formData.append("content",content);
      formData.append("userId","b3da5d4d-a6fe-44e0-976c-20995dea40bd");
      requestApi("post","/post/createNewPost",formData,(res)=>{
        console.log(res);
      })
  }
  const handleImageChange = (e)=>{      
      // console.log(e.target.files[0]);
      debugger;
      setImageUrl(e.target.files[0]);
      console.log(imageUrl)
  }
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
            <form></form>
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
          <form onSubmit={addPost}>
          <div className="modal-body">
           
              <input type="file" name="imageUrl" onChange={handleImageChange} className="form-control mb-4" />
              <CKEditor
                     
                editor={ClassicEditor}
                data="<p>What do you want to talk about</p>"
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  // console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                  setContent(data);
                  console.log(content)
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
          
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default PostModal;
