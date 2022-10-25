import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog'
import './Building.css'

export default function Building(props) {
    const [isExtend, setIsExtend] = React.useState(true);
    let navigate = useNavigate();
    var name = props.name;

    const handleClose = () => {
        document.getElementById("Modal").style.height = '0'
        document.getElementById("Modal").classList.remove('modal-extend')
        setTimeout(() => {
            navigate('/')
          }, 500);
        
    }
    const handleExtend = (e) => {
        setIsExtend(current => !current);
        if (isExtend) {
            document.getElementById("Modal").classList.add('modal-extend')
        }
        else {
            document.getElementById("Modal").classList.remove('modal-extend')
        }

    }

    return (
        <div>
            {/* <Modal show={true} onHide={handleClose} dialogClassName="building-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>Woohoo, you're reading this text in a modal!</p></Modal.Body>
            </Modal> */}
            <Modal
                show={true}
                onHide={handleClose}
                dialogClassName='modal-90w'
                id='Modal'
                animation={true}
                scrollable
            >
                <Modal.Header closeButton onClick={(e) => { handleExtend(e) }}>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Exercitation elit magna pariatur magna irure nostrud esse ex do veniam aliqua. Mollit cupidatat veniam eiusmod magna exercitation Lorem. Reprehenderit reprehenderit incididunt cupidatat ullamco sint Lorem id amet.

                        Aliqua fugiat occaecat cupidatat adipisicing pariatur commodo ex aute esse fugiat amet. Duis ipsum proident nostrud dolor id voluptate proident. Consequat sit enim commodo et qui mollit irure laborum voluptate elit esse laboris enim consequat. Ut ex veniam officia voluptate occaecat eu ipsum excepteur. Commodo aute reprehenderit occaecat reprehenderit laboris fugiat laborum mollit magna ex excepteur veniam tempor sunt. Proident exercitation elit elit non quis eu et.

                        Occaecat veniam sit do Lorem id amet sit in. Esse do sit sint duis est. Pariatur cupidatat eiusmod sit laboris proident culpa magna do. Commodo et eu deserunt occaecat voluptate eu officia amet est aute labore elit in. Cupidatat proident dolore velit commodo eu fugiat nisi non ea enim cupidatat in minim aliquip. Est Lorem do aliquip laborum Lorem sint cupidatat ipsum sit est laborum deserunt commodo. Nisi excepteur dolor ut labore laborum veniam ea tempor ex voluptate duis laborum exercitation ipsum.

                        Dolor dolore eiusmod fugiat adipisicing aute ad aliquip cupidatat cupidatat dolor. Lorem cillum magna aliqua nisi officia mollit aliqua cupidatat cupidatat in dolore adipisicing. Qui consectetur exercitation ut ex magna cillum pariatur dolor fugiat qui proident commodo esse. Occaecat nisi cillum irure esse excepteur qui et. Ullamco eu minim do enim velit amet ut labore et enim magna incididunt. Ex reprehenderit laborum cillum do magna Lorem esse Lorem tempor.

                        Tempor deserunt qui voluptate aliquip. Consectetur sint adipisicing esse non Lorem id. Et mollit ipsum cillum irure. Deserunt nostrud sint consectetur magna est incididunt non pariatur. Laborum Lorem consectetur et do deserunt laborum dolor minim cillum in ut aliqua ipsum laboris.

                        Occaecat proident nulla non voluptate laboris ipsum pariatur. Enim sunt amet consectetur aute voluptate officia cupidatat dolor sint esse esse excepteur. Et reprehenderit enim irure cupidatat laborum magna labore consectetur sint fugiat minim id ut enim. Nisi ad labore velit deserunt aliqua ex qui voluptate aute aliquip nulla nostrud eu.

                        Sint do deserunt pariatur dolore nostrud laborum aute sit occaecat officia Lorem. Aliqua proident et officia deserunt sit laborum cupidatat velit minim ad qui anim cupidatat elit. Proident excepteur minim veniam occaecat proident laborum reprehenderit Lorem nostrud sit. Dolore sit Lorem minim duis eiusmod elit excepteur ullamco esse commodo.

                        Adipisicing laborum exercitation consectetur voluptate fugiat. Deserunt aliquip reprehenderit reprehenderit culpa enim dolor duis laboris. Ullamco ea reprehenderit sint nostrud id duis deserunt mollit sunt aliqua nisi. Duis cillum excepteur adipisicing consectetur. Proident anim duis sunt eu irure velit laboris fugiat aute do nulla et laboris ad. Esse exercitation amet aliquip ullamco aliqua qui eu ut non est commodo consectetur aliquip. Minim anim officia adipisicing occaecat elit sint duis minim nisi velit aliquip.

                        Irure eu aute incididunt veniam voluptate est. Tempor eu quis duis quis incididunt. Sint ad ad in excepteur ullamco excepteur veniam cupidatat laborum.

                        Nisi reprehenderit ad adipisicing aliquip ea amet eiusmod aliquip. Laboris culpa ad tempor labore. Proident id cillum laboris nisi dolor ex. Magna reprehenderit id consequat est pariatur tempor consequat eiusmod amet aliquip quis dolore pariatur. Ad sit duis eu in voluptate. Quis sint sunt enim labore quis consequat ullamco nostrud in adipisicing. Magna aliqua pariatur id culpa esse velit est eu excepteur ea velit in.
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
}
