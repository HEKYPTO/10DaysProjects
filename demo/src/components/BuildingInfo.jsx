import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import './Buildinginfo.css';

function BuildingInfo() {
    const [isOpen, setOpen] = useState(false);
    const [image,setImage] = useState(true)
    
    const handleImage = (index) => {
        if (index == 0) {
            setImage(false);
        }
        if (index == 1) {
            setImage(true);
        }
    }
    const handleClose = () => {
        setOpen(false)
        setTimeout(() => navigate('/'), 200)
    }

    let Id = useParams();
    var name = Id.Id
    let navigate = useNavigate();
    useEffect(() => {
        setOpen(true)
    }, [])

    return (
        <>

            <Sheet isOpen={isOpen} onClose={handleClose}
                snapPoints={[0.8, 0.4]}
                initialSnap={1}
                onSnap={(snapIndex) => { handleImage(snapIndex) }}>
                <Sheet.Container>
                    <Sheet.Header>
                        {image ? <div className='building-image-box-wrapper'>
                            <div className='building-image-box'>
                                <img src='https://via.placeholder.com/300x150' />
                            </div>
                        </div> : <></>}
                    </Sheet.Header>

                    <Sheet.Content>
                        <h1>{name}</h1>
                        {image ?  <></>:
                            <div className='building-image-box-inline'>
                                <img src='https://via.placeholder.com/300x150' />
                            </div>}
                    </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop onClick={handleClose} />
            </Sheet>
        </>
    );
}

export default BuildingInfo