import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

function TaskProvider({ children }) {
    const [task, setTask] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Edit modal state
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    // View modal state
    const [showViewModal, setShowViewModal] = useState(false);
    const [ViewTask, setViewTask] = useState(null);

    // Search
    const [search, setSearch] = useState('');
    const handleSearch = (e) => setSearch(e.target.value);

    // Delete modal state
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);

    // Status filter
    const [statusFilter, setStatusFilter] = useState('All');

    // Add Task
    const addTask = (newTask) => {
        setTask((prev) => [...prev, newTask]);
    };

    // Update Task
    const updateTask = (updatedTask) => {
        setTask((prev) =>
            prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        );
    };

    // Open Edit Modal
    const handleOpenEdit = (taskToEdit) => {
        setCurrentTask(taskToEdit);
        setShowEditModal(true);
    };

    const handleCloseEdit = () => {
        setShowEditModal(false);
        setCurrentTask(null);
    };

    // View Task Modal
    const handleOpenView = (taskToView) => {
        setViewTask(taskToView);
        setShowViewModal(true);
    }

    const handleCloseView = () => {
        setShowViewModal(false);
        setViewTask(null);
    }

    // Open Delete Modal
    const handleDelete = (task) => {
        setTaskToDelete(task);
        setDeleteModal(true);
    };

    // Close Delete Modal
    const handleCloseDelete = () => {
        setTaskToDelete(null);
        setDeleteModal(false);
    };

    // Confirm Delete
    const confirmDelete = () => {
        setTask((prevTask) => prevTask.filter(t => t.id !== taskToDelete.id));
        handleCloseDelete();
    };

    // Close Modals
    const handleClose = () => {
        setShowModal(false);
        setDeleteModal(false);
        setShowEditModal(false)
        setShowViewModal(false);
    }

    // Toggle Status
    const toggleTaskStatus = (id) => {
        setTask(prev =>
            prev.map(t =>
                t.id === id
                    ? { ...t, status: t.status === 'Complete' ? 'In Progress' : 'Complete' }
                    : t
            )
        );
    };


    const value = {
        task,
        addTask,
        updateTask,
        showModal,
        setShowModal,
        handleClose,

        // Edit modal
        showEditModal,
        currentTask,
        handleOpenEdit,
        handleCloseEdit,

        // View modal
        showViewModal,
        ViewTask,
        handleOpenView,
        handleCloseView,

        // Search
        search,
        setSearch,
        handleSearch,

        // Delete modal
        deleteModal,
        taskToDelete,
        handleDelete,
        handleCloseDelete,
        confirmDelete,

        // Toggle Status
        toggleTaskStatus,

        //status filter
        statusFilter,
        setStatusFilter
    };

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;
