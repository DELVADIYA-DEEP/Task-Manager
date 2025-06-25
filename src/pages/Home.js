import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Table from '../components/table/Table'
import AddTask from '../components/modalForm/AddTask'
import EditTask from '../components/modalForm/EditTAsk'


function Home() {
    return (
        <>
            <Header />
            <Table />
            <AddTask />
            <EditTask />
            <Footer />
        </>
    )
}

export default Home