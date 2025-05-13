import '../sidebar/style.css';
import './dashboard.css';

const Dashboard = () => {
    return <div>
        <main>
            <div className="container-fluid ">
                <div className='card mt-3 p-2 cardheader'>
                    <h2 className="p-2">Dashboard</h2>
                    <hr></hr>
                    <div className="row  mt-4">
                        <div className="col-xl-3 col-md-6">
                            <div className="card  mb-4 cardbox">
                                <div className="card-body">Income</div>
                                <div >
                                    <h2 className='text-center'>2</h2>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card   mb-4 cardbox">
                                <div className="card-body">Expense</div>
                                <div >
                                    <h2 className='text-center'>2</h2>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card   mb-4 cardbox">
                                <div className="card-body">Monthly Budget</div>
                                <div>
                                    <h2 className='text-center'>2</h2>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card    mb-4 cardbox">
                                <div className="card-body">Remaining Budget</div>
                                <div>
                                    <h2 className='text-center'>2</h2>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    </div>
}

export default Dashboard;