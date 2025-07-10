import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Table from '../components/table/Table'
import AddTask from '../components/modalForm/AddTask'
import EditTask from '../components/modalForm/EditTAsk'
import ToastNotification from '../components/ToastNotification'
import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';


function Home() {
    const { confirmDelete } = useContext(TaskContext);
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');

    // Wrap confirmDelete to show toast
    const handleDeleteWithToast = () => {
        confirmDelete();
        setToastMsg('Task deleted successfully!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <>
            <Header />
            <Table onDelete={handleDeleteWithToast} />
            <AddTask />
            <EditTask />
            <Footer />
            <ToastNotification message={toastMsg} show={showToast} />
        </>
    )
}

export default Home