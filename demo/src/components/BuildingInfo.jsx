import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

function BuildingInfo() {
    const [isOpen, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
        setTimeout(() => navigate('/'),200)
        
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
                snapPoints={[0.8, 0.4, 0]}
                initialSnap={1}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        {name}
                    </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop onClick={handleClose}/>
            </Sheet>
        </>
    );
}

export default BuildingInfo