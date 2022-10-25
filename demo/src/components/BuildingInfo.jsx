import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import './Buildinginfo.css';

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
            <div className='building-image'><h1>Insert Image Here</h1></div>
            <Sheet isOpen={isOpen} onClose={handleClose}
                snapPoints={[0.8, 0.4, 0]}
                initialSnap={1}>
                <Sheet.Container>
                    <Sheet.Header />
                        
                    <Sheet.Content>
                        {name}
                    </Sheet.Content>
                </Sheet.Container>

                {/* <Sheet.Backdrop/> */}
            </Sheet>
        </>
    );
}

export default BuildingInfo