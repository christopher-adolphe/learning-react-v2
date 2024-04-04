'use client';

import React from 'react';

import styles from './ImagePicker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const fileInputRef = React.useRef();
  const [ pickedImage, setPickedImage ] = React.useState('');

  function handlePickImage() {
    fileInputRef.current.click();
  }

  function handleImageChange(event) {
    // Instantiating a new FileReader object to be able
    // to read the selected image
    const reader = new FileReader();
    const file = event.target.files[0];

    if (!file) {
      setPickedImage('');

      return;
    }

    // Using the `onload()` method of the file reader
    // to a callback function. This callback function
    // will be invoked after the file reader has successfully
    // read the selected image as a URL
    reader.onload = () => {
      const nextPickedImage = reader.result;

      setPickedImage(nextPickedImage);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className={ styles.picker }>
      <label htmlFor={ name }>{ label }</label>

      <div className={ styles.controls}>
        <input
          ref={ fileInputRef }
          id={ name }
          className={ styles.input }
          type="file"
          accept="image/png, image/jpeg"
          name={ name }
          onChange={ handleImageChange }
          required
        />

        <div className={ styles.preview }>
          {
            pickedImage.length > 0
             ? <Image src={ pickedImage } alt="Meal image" fill/>
             : <p>No image selected</p>
          }
        </div>

        <button
          className={ styles.button }
          type="button"
          onClick={ handlePickImage }
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
