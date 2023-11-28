/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useRef, useState } from "react";
import { AiOutlineSend, BiImageAlt } from "../../constant/icons";

export default function CommentInput({ postID, existingUser }) {
  const [inputValue, setComment] = useState({
    comment: "",
    media: null,
  });
  const token = sessionStorage.getItem("authToken");
  const inputRef = useRef(null);
  const textRef = useRef(null);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [commentFile, setFile] = useState("");
  const [originalFileName, setOriginalFileName] = useState("");

  const handleChange = (e) => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;

    setIsInputEmpty(inputValue.comment.trim() === "");
    setComment({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleImgfiles = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setOriginalFileName(selectedFile);
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageDataUrl = event.target.result;
      setFile(imageDataUrl);
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleRemovefile = () => {
    inputRef.current.files = null;
    setFile("");
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (inputValue.comment.trim() === "") {
      // Don't allow submitting empty tweets
      return;
    }
    // Prepare data for the tweet
    const formData = new FormData();
    formData.append("content", inputValue.comment);
    formData.append("userID", existingUser._id);
    formData.append("postID", postID);

    if (commentFile) {
      // Append the selected image file to the FormData object
      formData.append("media", originalFileName);
    }

    // Send a POST request to create the new tweet
    axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;
    axios
      .post(
        `http://localhost:8000/api/tweet/posts/${postID}/comment/new`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type to multipart form-data
          },
        }
      )
      .then((response) => {
        // Handle successful comment creation, e.g., show a success message
        console.log("Comment created successfully:", response.data);
        setComment({
          comment: "",
          media: null,
        }); // Clear the tweet text
        setFile(null);
        inputRef.current.value = null;
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message
        console.error("Error creating comment:", error);
      });
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <div>
          <img
            src={
              existingUser.image
                ? existingUser.image
                : "https://source.unsplash.com/84E44EdD18o"
            }
            className={` ${
              inputValue.comment ? "w-10 h-10 mt-[4.2px]" : "w-12 h-12"
            } rounded-full`}
            alt="d"
          />
        </div>
        <form onSubmit={handleCommentSubmit}>
          <div className="flex items-center mt-[3px] rounded-xl">
            <div className="w-[34px] h-[34px] grid place-content-center hover:bg-gray-100 rounded-full">
              <label htmlFor="commentFile" className="cursor-pointer">
                <BiImageAlt fontSize={22} />
                <input
                  type="file"
                  id="commentFile"
                  accept="image/*"
                  ref={inputRef}
                  onChange={handleImgfiles}
                  className="opacity-0 hidden h-[.1px] w-[.1px]"
                />
              </label>
            </div>
            <textarea
              name="comment"
              id="comment"
              rows="1"
              onChange={handleChange}
              value={inputValue.comment}
              ref={textRef}
              className="text-sm rounded-xl flex-1 bg-gray-100 resize-none py-3 px-3"
              placeholder="Add a comment"
            />

            <AiOutlineSend
              className="mx-2 cursor-pointer"
              fontSize={23}
              onClick={handleCommentSubmit}
              disabled={isInputEmpty}
            />
          </div>
        </form>
      </div>
      {commentFile && (
        <div className="flex items-start">
          <img
            src={commentFile}
            alt="Uploaded Photo"
            className="full-photo w-32"
          />
          <button
            type="button"
            className="rounded-full bg-sky-300 p-2 m-3 text-white"
            onClick={handleRemovefile}
          >
            x
          </button>
        </div>
      )}
    </>
  );
}
