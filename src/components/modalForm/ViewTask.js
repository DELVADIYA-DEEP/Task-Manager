import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { TaskContext } from '../../context/TaskContext';

const ViewTask = () => {
    const {
        showViewModal,
        handleCloseView,
        ViewTask,
        handleOpenEdit
    } = useContext(TaskContext);

    const handleEdit = () => {
        handleCloseView();              // First close the View Modal
        handleOpenEdit(ViewTask);       // Then open Edit Modal with current task
    };

    return (
        <Modal show={showViewModal} onHide={handleCloseView} centered>
            <Modal.Header closeButton>
                <Modal.Title>View Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Title:</h5>
                <p>{ViewTask?.name || 'No Title'}</p>

                <h5>Description:</h5>
                <p>{ViewTask?.description || 'No Description'}</p>

                <h5>Status:</h5>
                <p>
                    <span className={`badge ${ViewTask?.status === 'Complete' ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {ViewTask?.status || 'No Status'}
                    </span>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseView}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEdit}>
                    Edit Task
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewTask;
