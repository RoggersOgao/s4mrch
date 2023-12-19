"use client";
import React, { useCallback, useState, useEffect } from "react";
import styles from "./Dropzone.module.scss";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { AiOutlineCloseCircle, AiFillFileExcel } from 'react-icons/ai'
import { PiUploadLight } from 'react-icons/pi'
import { GrFormClose } from 'react-icons/gr'
import { GiTick } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { BsDropbox } from "react-icons/bs";
import { BiPointer } from "react-icons/bi";
import { TbPointerPlus } from "react-icons/tb";

// const imageValidator = (file) => {
//   const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

//   if (!allowedTypes.includes(file.type)) {
//     return false;
//   }

//   const blob = new Blob([file], { type: file.type });
//   const reader = new FileReader();

//   reader.readAsDataURL(blob);

//   return new Promise((resolve) => {
//     reader.onloadend = () => {
//       const dataURL = reader.result;

//       const img = document.createElement("img");
//       img.src = dataURL;

//       img.onload = () => {
//         if (img.width === 0 || img.height === 0) {
//           resolve({
//             code: "file-not-image",
//             message: "This file is not an image",
//           });
//         } else {
//           resolve(null);
//         }
//       };
//     };
//   });
// };


function Dropzone({files, setFiles}) {


//   generating a preview url for uploaded images
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((prev) => [
        // ...prev,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  ///revoking data urls to avoid memory leaks 
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files?.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

//   functionallity to remove accepted files

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
     onDrop,
     multiple: false,
    //  maxFiles:1,
    //  validator:imageValidator,
     accept: {
        'image/*': ['.jpeg', '.png', ".jpg"]
      }
     });


  return (
    <div className={styles.container}>
      <div
        {...getRootProps({
          className: styles.dropzoneContainer,
        })}
      >
        <input {...getInputProps()} />
        {isDragAccept && (<p><GiTick /></p>)}
        {isDragReject && (<p><FaTimes /></p>)}
        {isDragActive ? (
          <p>Drop here <TbPointerPlus /></p>
        ) : (
            <>
            <i><BsDropbox /></i>
          <p>Drop or <span>click to browse</span></p>
          </>
        )}
      </div>
      
    </div>
  );
}

export default Dropzone;
