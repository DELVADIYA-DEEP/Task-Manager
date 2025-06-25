import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { TaskContext } from '../../context/TaskContext';

function AddTask() {
    const { showModal, handleClose, addTask } = useContext(TaskContext);

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (taskData) => {
        const newTask = {
            id: Date.now(),
            name: taskData.taskTitle,
            description: taskData.taskDescription,
            progress: 0,
            status: "In Progress"
        };
        addTask(newTask);
        reset();
        handleClose();
    };

    return (
        <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New task</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    {/* task Name */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="taskTitle"
                            placeholder="Enter Task Name"
                            {...register('taskTitle', {
                                required: 'Task name is required',
                            })}
                        />
                        <label htmlFor="taskTitle">Task Title</label>
                        {errors.taskTitle && (
                            <small className="text-danger">{errors.taskTitle.message}</small>
                        )}
                    </div>

                    {/* Description */}
                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            id="taskDescription"
                            placeholder="Enter task description"
                            rows="3"
                            {...register('taskDescription', {
                                required: 'Task description is required to process',
                            })}
                        ></textarea>
                        <label htmlFor="taskDescription">Description</label>
                        {errors.taskDescription && (
                            <small className="text-danger">{errors.taskDescription.message}</small>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-end gap-2">
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            Add task
                        </Button>
                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddTask;
