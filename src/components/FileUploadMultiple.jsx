import { ChangeEvent, useState } from "react";

function FileUploadMultiple() {
  const [fileList, setFileList] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files); // Convert the FileList to an array
    setFileList((prevFileList) => [...prevFileList, ...newFiles]);
  };

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }

    // Create new FormData object and append files
    const data = new FormData();
    fileList.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    // Uploading the files using the fetch API to the server
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />

      <ul>
        {fileList.map((file, i) => (
          <li key={i}>
            <div>
              <strong>File Name:</strong> {file.name}
            </div>
            <div>
              <strong>File Type:</strong> {file.type}
            </div>
            <div>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ maxWidth: "100px" }}
              />
            </div>
          </li>
        ))}
      </ul>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default FileUploadMultiple;
