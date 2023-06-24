import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc, DocumentData } from 'firebase/firestore'
import Navbar from './Navbar'
import '../Styling/ImageDetail.css'

type ImageParams = {
  id: string
}

const ImageDetail: React.FC = () => {
  const { id } = useParams<ImageParams>()
  const [image, setImage] = useState<DocumentData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImage = async () => {
      if (!id) return

      try {
        const db = getFirestore()
        const docRef = doc(db, 'images', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setImage(docSnap.data() as DocumentData)
        } else {
          console.log('No such document!')
        }
      } catch (e) {
        console.log('Error getting document:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [id])

  if (loading) return <div>Loading...</div>

  return image ? (
    <div>
      <Navbar />
      <div className='image-container'>
        <img src={image.url} alt='Dog' className='detail-image' />
      </div>
      <p id='caption'>{image.caption}</p>
    </div>
  ) : (
    <div>No such image!</div>
  )
}

export default ImageDetail
