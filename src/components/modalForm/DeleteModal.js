import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TaskContext } from '../../context/TaskContext';

function DeleteModal({ onDelete }) {
    const {
        taskToDelete,
        confirmDelete,
        deleteModal,
        handleCloseDelete
    } = useContext(TaskContext);

    if (!taskToDelete) return null;

    const handleDelete = () => {
        confirmDelete();
        if (onDelete) onDelete();
    };

    return (
        <Modal show={deleteModal} onHide={handleCloseDelete} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete the task:
                <strong> {taskToDelete?.name}</strong>?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDelete}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
