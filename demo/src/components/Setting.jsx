import React from 'react';
import './Setting.css';
import { useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import {Link} from 'react-router-dom'

function Setting() {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);

    return (
        <div className='setting-wrapper'>
            <button open={open} onClick={() => setOpen(!open)} className='setting-button'>
                <FiSettings className='setting-icon' />
            </button>
            <Modal show={open} onHide={handleClose} className='setting-menu'>
                <Modal.Header closeButton>
                    <Modal.Title style={{ width: '100%', textAlign: 'center' }} >Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="d-grid gap-2">
                            <Button variant='secondary' size="lg" className='feedback-button' onClick={() => { window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}}>
                                Feedback
                            </Button>
                        <Button variant='secondary' size="lg" className='languages-button'>
                            Languages
                        </Button>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className='close-button'>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={handleClose} className='save-button'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Setting;
