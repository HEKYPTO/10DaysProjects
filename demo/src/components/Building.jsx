import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Building(props) {
    let navigate = useNavigate();
    var name = props.name;

    const handleClose = () => {
        navigate('/')
    }

    return (
        <div>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { navigate('/') }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
