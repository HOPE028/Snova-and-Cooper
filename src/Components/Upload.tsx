import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from 'firebase/storage'
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import '../Styling/Upload.css'
import Camera from '../Camera.svg'

const Upload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const navigate = useNavigate()
  const [caption, setCaption] = useState('')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const onCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value)
  }

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!image) return

    try {
      setUploading(true)
      const storage = getStorage()
      const imageName = uuidv4() // generate unique name for the image
      const imgFile = ref(storage, `${imageName}.jpg`)

      const uploadTask = uploadBytesResumable(imgFile, image)

      uploadTask.on(
        'state_changed',
        () => {},
        (error) => {
          console.error('Error uploading image: ', error)
          setUploading(false)
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const db = getFirestore()
            await addDoc(collection(db, 'images'), {
              url: downloadURL,
              createdAt: serverTimestamp(),
              caption,
            })
            setImage(null)
            setCaption('')
            setUploading(false)
            navigate('/gallery') // Redirect to gallery page
          })
        }
      )
    } catch (error) {
      console.error('Error uploading image: ', error)
      setUploading(false)
    }
  }

  return (
    <div>
      <Navbar />
      <h1 id='title'>UPLOAD IMAGE</h1>
      {uploading ? (
        <div>Uploading...</div>
      ) : (
        <form onSubmit={handleUpload} className='upload-form'>
          <label htmlFor='file-upload' className='custom-file-upload'>
            <img src={Camera} alt='Upload' id='upload-picture' />
          </label>
          <input
            id='file-upload'
            type='file'
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <input
            type='text'
            value={caption}
            onChange={onCaptionChange}
            placeholder='Caption..'
            className='upload-caption'
          />
          <button type='submit' className='upload-button'>
            Upload
          </button>
        </form>
      )}
    </div>
  )
}

export default Upload
