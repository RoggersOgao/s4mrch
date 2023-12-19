import React, { useState } from "react";
import styles from "./Preview.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

function Preview({ files, setFiles }) {
  const [imageActive, setImageActive] = useState(false);


  
  // remove file function
  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  //   size converter
  const convertToKibOrMib = (sizeInBytes) => {
    const kibSize = (sizeInBytes / 1024).toFixed(2);
    const mibSize = (sizeInBytes / (1024 * 1024)).toFixed(2);

    if (mibSize >= 1) {
      return `${mibSize} MiB`;
    } else {
      return `${kibSize} KiB`;
    }
  };

  return (
    <div className={styles.previewContainer}>
      <ul className={styles.accepted}>
        {files?.map((file, index) => (
          <div className={styles.prev} key={index}>
            <li
              onMouseEnter={() => setImageActive(true)}
              onMouseLeave={() => setImageActive(false)}
            >
              <div className={styles.uploadedContent}>
                {imageActive && (
                  <div
                    className={styles.close}
                    onClick={() => removeFile(file.name)}
                  >
                    <AiOutlineCloseCircle />
                  </div>
                )}

                <div className={styles.uploadedContentImg}>
                  <Image
                    src={file.preview ? file.preview : file.secure_url}
                    alt={file.name ? file.name : file.original_filename}
                    width={400}
                    height={400}
                    className={styles.prevImg}
                    placeholder="blur"
                    blurDataURL={file.preview ? file.preview : file.secure_url}
                    // onLoad={()=>{
                    //     URL.revokeObjectURL(file.preview)
                    // }}
                  />
                </div>

                {imageActive && (
                  <div className={styles.uploadedContentDesc}>
                    <div className={styles.type}>
                      <p>{file.type ? file.type : file.original_extension}</p>
                      <p>
                        {convertToKibOrMib(file.size ? file.size : file.bytes)}
                      </p>
                    </div>
                    <p className={styles.name}>
                      {file.name ? file.name : file.original_filename}
                    </p>
                  </div>
                )}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Preview;
