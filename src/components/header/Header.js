import { useContext } from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TaskContext } from '../../context/TaskContext';
import './Header.css';

function Header() {
    const { setShowModal, search, handleSearch } = useContext(TaskContext);

    const handleShow = () => {
        setShowModal(true);
    };


    return (
        <header className="bg-primary text-white py-3 shadow-sm mb-4">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                {/* Brand */}
                <div className="text-center text-md-start">
                    <NavbarBrand href="./" className="text-white text-uppercase m-0">
                        <h3 className="m-0">Task Manager</h3>
                    </NavbarBrand>
                </div>

                {/* Search */}
                <div className="w-50 w-md-50">
                    <form className='d-flex flex-column flex-md-row align-items-stretch'
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input className='form-control' placeholder='Search Task...' aria-label="Search Task"
                            value={search}
                            onChange={handleSearch} />
                        <button type='submit' className='btn btn-light ms-md-2 mt-2 mt-md-0 d-flex align-items-center gap-2 justify-content-center'>
                            <FaSearch />
                            <span className='fw-semibold text-uppercase'>Search</span>
                        </button>
                    </form>
                </div>

                {/* Add Task Button */}
                <div className="text-center text-md-end">
                    <button className='btn btn-light w-md-auto mt-2 mt-md-0 d-flex justify-content-center justify-content-md-end align-items-center gap-2' onClick={handleShow}>
                        <IoMdAddCircleOutline className='fs-5' />
                        <span className='fw-semibold text-uppercase'>Add Task</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
