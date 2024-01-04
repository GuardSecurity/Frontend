import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from "recharts";
import helloAdmin from "../../assets/helloAdmin.png";
import "./styles.css";
import MyPieChart from "./PieChart";

function Dashboard() {

    const data = [
        { month: "Jan", tien: 50000, ve_si: 60000 },
        { month: "Feb", tien: 40000, ve_si: 60000 },
        { month: "Mar", tien: 60000, ve_si: 60000 },
        { month: "Apr", tien: 30000, ve_si: 60000 },
        { month: "May", tien: 70000, ve_si: 60000 },
        { month: "Jun", tien: 55000, ve_si: 60000 },
    ];


    return (
        <div>
            <img src={helloAdmin} className="w-full" />
            <div style={{
                display: "flex",
            }}>
                <div style={{
                    marginTop: "20px",
                    backgroundColor: "blue",
                    marginLeft: "70px",
                    height: "70px",
                    width: "250px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <h3 style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}>
                        Lượng tiền
                    </h3>
                    <p style={{
                        fontSize: "20px",
                    }}>
                        5.000.000
                    </p>
                </div>

                <div style={{
                    marginTop: "20px",
                    backgroundColor: "blue",
                    marginLeft: "70px",
                    height: "70px",
                    width: "250px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <h3 style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}>
                        Lượng tiền
                    </h3>
                    <p style={{
                        fontSize: "20px",
                    }}>
                        5.000.000
                    </p>
                </div>

                <div style={{
                    marginTop: "20px",
                    backgroundColor: "blue",
                    marginLeft: "70px",
                    height: "70px",
                    width: "250px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <h3 style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}>
                        Lượng tiền
                    </h3>
                    <p style={{
                        fontSize: "20px",
                    }}>
                        5.000.000
                    </p>
                </div>

                <div style={{
                    marginTop: "20px",
                    backgroundColor: "blue",
                    marginLeft: "70px",
                    height: "70px",
                    width: "250px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <h3 style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}>
                        Lượng tiền
                    </h3>
                    <p style={{
                        fontSize: "20px",
                    }}>
                        5.000.000
                    </p>
                </div>
            </div>
                <div style={{marginTop:"50px"}}>
                    <LineChart width={1300} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="tien" stroke="blue" />
                    </LineChart>
                </div>
            <div style={{marginTop:"60px", display:"flex"}}>
                <div>
                    <BarChart width={850} height={500} data={data} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="tien" fill="#F41B3F" />
                        <Bar dataKey="ve_si" fill="#1B08F4" />
                    </BarChart>
                </div>
                <div>
                    <MyPieChart />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
