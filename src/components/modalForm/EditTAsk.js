import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TaskContext } from '../../context/TaskContext';

function EditTask() {
  const {
    showEditModal,
    handleCloseEdit,
    currentTask,
    updateTask
  } = useContext(TaskContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  useEffect(() => {
    if (currentTask) {
      reset({
        projectName: currentTask.name,
        taskDescription: currentTask.description
      });
    }
  }, [currentTask, reset]);

  const onSubmit = async (data) => {
    const updatedTask = {
      ...currentTask,
      name: data.projectName,
      description: data.taskDescription,
    };

    updateTask(updatedTask);
    reset();
    handleCloseEdit();
  };

  return (
    <Modal show={showEditModal} onHide={handleCloseEdit} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>

          {/* Project Name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="editProjectName"
              placeholder="Project Name"
              {...register('projectName', {
                required: 'Project name is required'
              })}
            />
            <label htmlFor="editProjectName">Project Name</label>
            {errors.projectName && (
              <small className="text-danger">{errors.projectName.message}</small>
            )}
          </div>

          {/* Description */}
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="editProjectDescription"
              rows="3"
              placeholder="Task Description"
              {...register('taskDescription', {
                required: 'Task description is required'
              })}
            />
            <label htmlFor="editProjectDescription">Description</label>
            {errors.taskDescription && (
              <small className="text-danger">{errors.taskDescription.message}</small>
            )}
          </div>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleCloseEdit}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditTask;
