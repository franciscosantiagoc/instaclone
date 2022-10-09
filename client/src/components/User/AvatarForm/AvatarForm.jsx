import React, { useCallback, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { UPDATE_AVATAR } from '../../../gql/user';
import './AvatarForm.scss';

export default function AvatarForm(props) {
  const { setShowModal } = props;
  const [loading, setLoading] = useState(false);

  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const onDrop = useCallback(async (acceptedFile)=>{
    const file = acceptedFile[0];

    try {
      setLoading(true);
      const result = await updateAvatar({ variables: { file }});
      const { data } = result;
      if(!data.updateAvatar.status){
        toast.error("Error al actualizar el avatar");
        setLoading(false);
      }else {
        setLoading(false);
        setShowModal(false);
      }
     /*  console.log(result);       */
    } catch (error) {
      console.log(error);
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    /* accept: ["image/jpeg", "image/png"], */
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
    },
    noKeyboard: true,
    multiple: false,
    onDrop,
  })

  return (
    <div className='avatar-form'>
      <Button {...getRootProps()} loading={loading}>Cargar una foto</Button>
      <Button>Eliminar foto actual</Button>
      <Button onClick={ () => setShowModal(false)}>Cancelar</Button>
      <input {...getInputProps()} />
    </div>
  )
}
