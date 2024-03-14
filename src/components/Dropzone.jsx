import React, { useState } from 'react';
import { storage } from '../firebaseConfig'; // Importa tu configuración de Firebase Storage

const Dropzone = () => {
  const [uploading, setUploading] = useState(false);

  const handleDrop = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    
    if (file) {
      try {
        setUploading(true);
        
        // Crea una referencia al archivo en Firebase Storage
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        
        // Sube el archivo a Firebase Storage
        await fileRef.put(file);
        
        // Obtiene la URL de descarga del archivo
        const downloadURL = await fileRef.getDownloadURL();
        
        // Aquí puedes hacer lo que quieras con la URL de descarga, como almacenarla en una base de datos
        console.log('URL de descarga:', downloadURL);
        
        setUploading(false);
      } catch (error) {
        console.error('Error al cargar la imagen:', error);
        setUploading(false);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ width: 200, height: 200, border: '2px dashed #ccc', borderRadius: 8, textAlign: 'center', lineHeight: '200px', cursor: 'pointer' }}
    >
      {uploading ? 'Subiendo...' : 'Arrastra y suelta una imagen aquí'}
    </div>
  );
};

export default Dropzone;
