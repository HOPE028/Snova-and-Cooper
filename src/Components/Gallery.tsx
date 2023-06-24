import React, { useState, useEffect } from 'react'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  DocumentData,
} from 'firebase/firestore'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import '../Styling/Gallery.css'

type ImageDoc = DocumentData & { id: string }

const Gallery: React.FC = () => {
  const [images, setImages] = useState<ImageDoc[]>([])
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchImages = async () => {
    setLoading(true)
    try {
      const db = getFirestore()
      const imagesCollection = collection(db, 'images')

      let imagesQuery = query(
        imagesCollection,
        orderBy('createdAt', 'desc'),
        limit(10)
      )
      if (lastDoc) {
        imagesQuery = query(
          imagesCollection,
          orderBy('createdAt', 'desc'),
          startAfter(lastDoc),
          limit(10)
        )
      }

      const imageDocs = await getDocs(imagesQuery)
      const newImages = imageDocs.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ImageDoc[]
      setImages((prevImages) => [...prevImages, ...newImages])
      setLastDoc(imageDocs.docs[imageDocs.docs.length - 1])
    } catch (e) {
      setError('Error fetching images. Please try again.')
      console.error('Error fetching images: ', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <div>
      <Navbar />
      <h1 className='title'>GALLERY</h1>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className='image-grid'>
          {images.map((image) => (
            <div key={image.id} className='image-item'>
              <Link to={`/image/${image.id}`}>
                <img src={image.url} alt='Cutest dogs on Earth' />
              </Link>
            </div>
          ))}
        </div>
      )}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <button className='show-more' onClick={fetchImages}>
          Show More
        </button>
      )}
    </div>
  )
}

export default Gallery
