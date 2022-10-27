import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import './Buildinginfo.css';
import axios from 'axios';
import BuildingCard from './BuildingCard';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
function BuildingInfo() {
    const [info, setInfo] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [image, setImage] = useState(true);
    const [expand, setExpand] = useState(true);

    useEffect(() => {
        var url = 'https://api.jjus.dev/building/' + name
        axios.get(url).then(function (response) {
            setInfo(response)
            console.log(response.data);
            setOpen(true)
        })
    }, [])

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

    if (!info) return null;

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
                        {image ? <></> :
                            <div className='building-image-box-inline'>
                                <img src='https://via.placeholder.com/300x150' />
                            </div>}
                        <div className='building-data'>
                            <BuildingCard name='Department' info={info.data['Department']}/>
                            <BuildingCard name='Direction' info={info.data['Direction']}/>
                            <BuildingCard name='Essential' info={info.data['Essential']}/>
                            <BuildingCard name='Facility' info={info.data['Facility']}/>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop onClick={handleClose} />
            </Sheet>
        </>
    );
}

export default BuildingInfo