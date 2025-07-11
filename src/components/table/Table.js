import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import DeleteModal from '../modalForm/DeleteModal';
import ViewTask from '../modalForm/ViewTask';
import Atom from '../Atom';
import './Table.css';

function TaskTable({ onDelete }) {
    const { task, handleOpenEdit, handleDelete, search, handleOpenView, toggleTaskStatus, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter } = useContext(TaskContext);
    const categoryOptions = ['All', 'Work', 'Personal', 'Urgent', 'Other'];
    const [loading, setLoading] = useState(true);
    const [filterTask, setFilterTask] = useState([]);

    useEffect(() => {
        setLoading(true);
        // Simulate async data fetch
        const timeout = setTimeout(() => {
            const filtered = task?.filter((task) => {
                const Task_name = task.name.toLowerCase().replace(/\s/g, "");
                const query = search.toLowerCase().replace(/\s/g, "");
                const matchesSearch = Task_name.includes(query);
                const matchesStatus = statusFilter === 'All' || task.status === statusFilter;
                const matchesCategory = categoryFilter === 'All' || task.category === categoryFilter;
                return matchesSearch && matchesStatus && matchesCategory;
            }) || [];
            setFilterTask(filtered);
            setLoading(false);
        }, 900); // 900ms loading effect
        return () => clearTimeout(timeout);
    }, [task, search, statusFilter, categoryFilter]);

    return (
        <>
            <section className='table'>
                <div className="container py-5 px-3 px-md-5 shadow-sm rounded-3 bg-white">
                    {/* Header */}
                    <div className='d-flex align-items-center justify-content-between mb-3 px-2 border-1 border-bottom border-dark pb-3'>
                        <div className="heading fs-4 fw-medium">Tasks</div>
                        <div className="d-flex gap-2">
                            <Form.Select
                                aria-label="Filter tasks by status"
                                className="border border-1 border-dark"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                style={{ minWidth: 120 }}
                            >
                                <option value="All">All Status</option>
                                <option value="Complete">Complete</option>
                                <option value="In Progress">In Progress</option>
                            </Form.Select>
                            <Form.Select
                                aria-label="Filter tasks by category"
                                className="border border-1 border-dark"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                style={{ minWidth: 120 }}
                            >
                                {categoryOptions.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </Form.Select>
                        </div>
                    </div>
                    {/* Table */}
                    <div
                        style={{ overflowX: 'auto', maxHeight: '400px', overflowY: 'auto' }}
                        className="table-responsive">
                        {loading ? (
                            <Atom color="#4ba7d1" size="large" text="Loading Data..." textColor="#54a2f8" />
                        ) : (
                            <table className="table">
                                <thead className="table-primary text-center">
                                    <tr>
                                        <th>No</th>
                                        <th>Task Name</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {filterTask.length === 0 ? (
                                        <tr>
                                            <td colSpan="7">No tasks found.</td>
                                        </tr>
                                    ) : (
                                        filterTask.map((task, index) => (
                                            <tr key={task.id}>
                                                <td data-label="No">{index + 1}</td>
                                                <td data-label="Task Name">{task.name}</td>
                                                <td data-label="Description">{task.description}</td>
                                                <td data-label="Category">{task.category || '-'}</td>
                                                <td data-label="Status">
                                                    <button
                                                        className={`btn btn-sm d-inline-flex justify-content-center align-items-center \
${task.status === 'Complete' ? 'btn-success' : 'btn-warning text-dark'}`}
                                                        onClick={() => toggleTaskStatus(task.id)}
                                                        style={{ minWidth: '100px' }}
                                                    >
                                                        {task.status}
                                                    </button>
                                                </td>
                                                <td data-label="Actions" className='d-flex align-items-center justify-content-evenly'>
                                                    <button
                                                        className='btn btn-sm btn-outline-primary fs-4 d-flex align-items-center justify-content-center'
                                                        title="View"
                                                        onClick={() => handleOpenView(task)}
                                                    >
                                                        <FaEye />
                                                    </button>
                                                    <button
                                                        className='btn btn-sm btn-outline-success fs-4 d-flex align-items-center justify-content-center'
                                                        title="Edit"
                                                        onClick={() => handleOpenEdit(task)}
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        className='btn btn-sm btn-outline-danger fs-4 d-flex align-items-center justify-content-center'
                                                        title="Delete"
                                                        onClick={() => handleDelete(task)}
                                                    >
                                                        <FaTrashAlt />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </section>
            <DeleteModal onDelete={onDelete} />
            <ViewTask />
        </>
    );
}

export default TaskTable;
