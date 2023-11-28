/* eslint-disable no-undef */
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BiImageAlt, BiVideo, CgMediaLive } from "../../constant/icons";

export default function Textarea() {
  const storedUserData = sessionStorage.getItem("userData");

  // Parse the JSON string back to an object
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

  const token = sessionStorage.getItem("authToken");
  // const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState("");
  let loggedInUser;
  if (userData) {
    loggedInUser = userData._id;
  }

  const [file, setFile] = useState("");
  const [originalFileName, setOriginalFileName] = useState("");
  const [tweetText, setTweetText] = useState({
    newTweet: "",
  });

  const inputRef = useRef(null);
  const textRef = useRef(null);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleImgfiles = (e) => {
    const selectedFile = e.target.files[0];

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

  const handleChange = (e) => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;

    setIsInputEmpty(tweetText.newTweet.trim() === "");
    setTweetText({ ...tweetText, [e.target.name]: e.target.value });
  };

  const handleTweetSubmit = () => {
    if (tweetText.newTweet.trim() === "" && !file) {
      // Don't allow submitting empty tweets
      return;
    }
    // Prepare data for the tweet
    const formData = new FormData();
    formData.append("content", tweetText.newTweet);
    formData.append("userID", loggedInUser);

    if (file) {
      console.log(originalFileName);
      // Append the selected image file to the FormData object
      formData.append("media", originalFileName);
    }

    // Send a POST request to create the new tweet
    axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;
    axios
      .post("http://localhost:8000/api/tweet/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart form-data
        },
      })
      .then((response) => {
        // Handle successful tweet creation, e.g., show a success message
        console.log("Tweet created successfully:", response.data);
        setTweetText({
          newTweet: "",
        }); // Clear the tweet text
        setFile(null);
        inputRef.current.value = null;
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message
        console.error("Error creating tweet:", error);
      });
  };

  return (
    <div className="border-b-[.5px] border-gray-300">
      <div className="flex items-start gap-4 py-4 pt-3 px-4">
        <div>
          <img
            className="h-12 w-12 rounded-full"
            src={
              userData.image
                ? userData.image
                : process.env.PUBLIC_URL + "/assets/avatar.png"
            }
            alt="user"
          />
        </div>
        <form encType="multipart/form-data" className="flex-1 mt-[2px]">
          <textarea
            rows="1"
            id="newTweet"
            name="newTweet"
            placeholder="What's on your mind"
            onChange={handleChange}
            value={tweetText.newTweet}
            ref={textRef}
            className="focus:outline-none outline-none resize-none w-full py-2 text-xl placeholder:text-gray-500 font-regular"
          />
          {file && (
            <div className="flex items-start">
              <img src={file} alt="Uploaded Photo" className="full-photo" />
              <button
                type="button"
                className="rounded-full bg-sky-300 p-2 m-3 text-white"
                onClick={handleRemovefile}
              >
                x
              </button>
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center pt-3 -ml-2">
              <div className="w-[34px] h-[34px] grid place-content-center hover:bg-gray-100 rounded-full">
                <label htmlFor="media" className="cursor-pointer">
                  <BiImageAlt fontSize={22} />
                  <input
                    type="file"
                    id="media"
                    name="media"
                    accept="image/*"
                    ref={inputRef}
                    onChange={handleImgfiles}
                    className="opacity-0 hidden h-[.1px] w-[.1px]"
                  />
                </label>
              </div>
              <Link
                to="/studio/upload-video"
                className="w-[34px] h-[34px] grid place-content-center hover:bg-gray-100 rounded-full"
              >
                <BiVideo fontSize={23} />
              </Link>
              <Link
                to="/studio/go-live"
                className="w-[34px] h-[34px] grid place-content-center hover:bg-gray-100 rounded-full"
              >
                <CgMediaLive fontSize={19} />
              </Link>
            </div>
            <button
              className={`py-[6px] text-white font-semibold px-7 rounded-full ${
                isInputEmpty
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
              type="button"
              onClick={handleTweetSubmit}
              disabled={isInputEmpty}
            >
              Post
            </button>
          </div>
        </form>
        {/* {file && <img src={file} alt="Uploaded Photo" className="full-photo" />} */}
      </div>
    </div>
  );
}
