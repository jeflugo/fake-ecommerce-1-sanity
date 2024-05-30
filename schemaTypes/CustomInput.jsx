import { useEffect } from 'react'
import { useDocumentOperation } from 'sanity'

const CustomInput = ({ type,document }) => {
  const { patch,  publish } = useDocumentOperation()

  useEffect(() => {
    const sizes = document.sizes || []
    const totalStock = sizes.reduce((total, {stock}) => total + stock, 0)
    
    patch.execute([{ set: { totalStock } }])
  }, [document.sizes,patch])

  return null
}

export default CustomInput