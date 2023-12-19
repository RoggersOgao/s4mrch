import React, { useState } from 'react'
import styles from "./Fashion.module.scss"
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Dropzone from './dropzone/Dropzone';
import Preview from '@/components/utilities/previewImage/Preview';
import { RiImage2Fill } from 'react-icons/ri';

function Fashion() {
  const [mainImage, setMainImage] = useState([]);
  const [image1, setImage1] = useState([])
  const [image2, setImage2] = useState([])
  const [image3, setImage3] = useState([])
  const [image4, setImage4] = useState([])



  
  return (
    <div className={styles.formGroup}>
    <label htmlFor="productImages">
      Product Images <span><BsFillInfoCircleFill /></span>
    </label>
      <div className={styles.productImagesContainer}>
        {/* <Dropzone files={files} setFiles={setFiles}/> */}
        <div className={styles.productImagesContainerLeft}>
          <div className={styles.mainImage}>
            <Preview files={mainImage} setFiles={setMainImage}/>
          </div>
          <div className={styles.otherImages}>
            <div className={styles.imageI}>
            <Preview files={image1} setFiles={setImage1}/>
            </div>
            <div className={styles.imageI}>
            <Preview files={image2} setFiles={setImage2}/>
            </div>
            <div className={styles.imageI}>
            <Preview files={image3} setFiles={setImage3}/>
            </div>
            <div className={styles.imageI}>
            <Preview files={image4} setFiles={setImage4}/>
            </div>
          </div>
        </div>
        <div className={styles.productImagesContainerRight}>
        <div className={styles.mainImageUpload}>
        <Dropzone files={mainImage} setFiles={setMainImage}/>
          </div>
          <div className={styles.otherImagesUpload}>
            <div className={styles.imageI}>
            <Dropzone files={image1} setFiles={setImage1}/>
            </div>
            <div className={styles.imageI}>
            <Dropzone files={image2} setFiles={setImage2}/>
            </div>
            <div className={styles.imageI}>
            <Dropzone files={image3} setFiles={setImage3}/>
            </div>
            <div className={styles.imageI}>
            <Dropzone files={image4} setFiles={setImage4}/>
            </div>
          </div>
        </div>

      </div>
    
  </div>
  )
}

export default Fashion